<template>
  <div>
    <!--标题-->
    <div class="head-bj">
      <div class="count flexs">
        <div><img src="@/assets/images/logo.png" class="logos"></div>
        <div class="titles">东风柳州汽车试验室信息管理系统</div>
      </div>
    </div>
    <!--背景-->
    <div class="login-bj">
      <div class="login-from">
        <div class="user">用户登录</div>
        <el-form :model="from" :rules="rules" ref="ruleForm" style="margin-top: 10px">
          <!--账号-->
          <div class="flexs">
            <label class="user-icons">
              <i class="el-icon-user icons"></i>
            </label>
            <el-form-item prop="username" class="user-input">
              <el-input v-model="from.username" placeholder="请输入账号名称"></el-input>
            </el-form-item>
          </div>
          <!-- 密码-->
          <div class="flexs">
            <label class="user-icons">
              <i class="el-icon-unlock icons"></i>
            </label>
            <el-form-item prop="password" class="user-input">
              <el-input type="password" v-model="from.password" placeholder="请输入密码"></el-input>
            </el-form-item>
          </div>
          <el-form-item>
            <el-button class="buttns" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        from: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            // {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入用户名密码', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      //登录
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var data = {
              username: this.from.username,
              password: this.from.password
            }
            // this.Common.PostData('api/login', data, (res) => {
              localStorage.setItem('userAccount', this.from.username)
              this.$message({
                message: '登录成功',
                type: 'success'
              })
              this.$router.push({path: '/'})
            // }, 'application/json')
          } else {
            this.$message.error('登录失败');
          }
        });
      },
    }
  }
</script>

<style scoped>
  .head-bj {
    width: 100%;
    height: 100px;
    position: relative;
    background-color: #f0f2f5;
  }

  .count {
    position: absolute;
    top: 20px;
    left: 160px;
  }

  .logos {
    width: 45px;
    height: 45px;
  }

  .titles {
    font-size: 27px;
    font-weight: bold;
    margin: 4px 20px;
  }

  .login-bj {
    width: 100%;
    height: 700px;
    background-image: url("../assets/images/bg1920.png");
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .login-from {
    position: absolute;
    top: 150px;
    right: 150px;
    width: 400px;
    height: 240px;
    background-color: white;
    border-radius: 5px;
  }

  .user {
    text-align: left;
    padding: 15px 30px;
    font-weight: bold;
    border-bottom: 1px solid #f6f6f6;
  }

  .user-icons {
    border: 1px solid #ddd;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border-right: 1px solid white;
    height: 40px;
    width: 50px;
    margin-left: 20px;
    background-color: #FBFBFB;
    text-align: center;
  }

  .icons {
    font-size: 20px;
    line-height: 38px;
  }

  .user-input {
    width: 75%;
  }

  /deep/ .el-input__inner {
    height: 42px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  .buttns {
    width: 360px;
    margin: 0px 15px;
  }
</style>
