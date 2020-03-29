<template>
  <div>
    <div class="table-body">
      <!--搜索-->
      <div class="flexs search">
        <div class="search-input">
          <el-select v-model="city" placeholder="请选择城市">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="search-input">
          <el-input v-model="user" placeholder="请输入用户名"></el-input>
        </div>
        <div class="search-btn">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div class="search-btn">
          <el-button type="success" icon="el-icon-refresh-left">重置</el-button>
        </div>
      </div>
      <!--表格-->
      <div class="table">
        <template>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            :border="true"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              type="index"
              label="ID"
              align="center"
              width="55">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              min-width="100"
              align="center">
            </el-table-column>
            <el-table-column
              label="日期"
              prop="date"
              align="center"
              min-width="150">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              align="center"
              min-width="200"
              show-overflow-tooltip>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              width="200">
              <template slot-scope="scope">
                <span class="show" @click="showTable"><i class="el-icon-edit"></i>查看</span>
                <span class="delete"><i class="el-icon-delete"></i>删除</span>
              </template>

            </el-table-column>
          </el-table>
          <!--分页-->
          <div class="table-page">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="page"
              :page-sizes="[5, 10, 20, 40]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total=totals>
            </el-pagination>
          </div>
        </template>
      </div>
    </div>

    <!--弹出框-->
    <el-dialog title="查看" :visible.sync="showVisible" width="70%">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "tables",
    data() {
      return {
        options: [{
          value: 'beijin',
          label: '北京'
        }, {
          value: 'shanxi',
          label: '山西'
        }],
        user: '',
        city: '',
        //弹出框
        showVisible: false,
        //页码参数
        page: 1,
        pagesize: 10,
        totals: 20,
        tableData: [
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
          {date: '2016-05-03', name: '王小虎', address: '上海市'},
        ],
        multipleSelection: []
      }
    },
    created() {
      this.Common.GetData('api/qm/topics/managePage?page=1&pageSize=10')
    },
    methods: {
      //表格选择
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      showTable() {
        this.showVisible = true;
      },
      //每页显示多少数据
      handleSizeChange(val) {
        this.pagesize = val;
      },
      //第几页
      handleCurrentChange(val) {
        this.page = val;
      },
    }
  }
</script>

<style scoped>
  .table-body {
    width: 100%;
    height: 700px;
    background: white;
    margin: 5px auto;
    border: 1px solid #f6f6f6;
    border-radius: 5px;
    box-shadow: 10px 10px 10px #dddddd;
    position: relative;
  }

  .search {
    padding: 20px 30px;
  }

  .table {
    padding: 0 36px;
  }

  .search-input {
    width: 200px;
    margin-left: 10px;
  }

  .search-btn {
    width: 80px;
    margin-left: 20px;
  }

  .show {
    color: #409EFF;
    cursor: pointer;
  }

  .delete {
    color: #ff0000;
    margin-left: 20px;
    cursor: pointer;
  }

  .table-page {
    position: absolute;
    bottom: 30px;
    right: 100px;
  }
</style>
