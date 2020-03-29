<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <v-tags></v-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
  import vHead from '../components/Header';
  import vSidebar from '../components/Sidebar.vue';
  import vTags from '../components/Tags.vue';

  export default {
    data() {
      return {
        tagsList: [],
        collapse: false
      };
    },
    components: {
      vHead,
      vSidebar,
      vTags
    },
    created() {
      this.Common.UserInfo.account = localStorage.getItem('userAccount');
      let userinfo = this.Common.UserInfo.account;
      if (userinfo == '' || userinfo == null) {
        this.$router.push({path: '/Login'})
      }
    },
    //监听浏览器关闭，清除用户信息
    mounted() {
      window.addEventListener('beforeunload', e => this.beforeunloadHandler(e))
      window.addEventListener('unload', e => this.unloadHandler(e))
    },
    destroyed() {
      window.removeEventListener('beforeunload', e => this.beforeunloadHandler(e))
      window.removeEventListener('unload', e => this.unloadHandler(e))
    },
    methods: {
      beforeunloadHandler() {
        this._beforeUnload_time = new Date().getTime();
      },
      unloadHandler(e) {
        this._gap_time = new Date().getTime() - this._beforeUnload_time;
        //判断是窗口关闭还是刷新
        if (this._gap_time <= 5) {
          //如果是登录状态，关闭窗口前，移除用户
          window.localStorage.removeItem('userAccount')
        } else {
        }
      },
    }


  };
</script>
