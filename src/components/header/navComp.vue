<template>
  <!-- 公共头部 -->
  <nav class="navbar navbar-default" role="navigation">
    <div class="nav-inner">
      <!-- logo -->
      <a href="" class="logo">mohaiyo</a>
      <!-- 中间导航以及搜索栏 -->
      <div class="nav-menu">
        <ul class="menu-list">
          <li class="menu-item">首页</li>
          <li class="menu-item">app下载</li>
        </ul>
      </div>
      <!-- 右侧录注册栏 未登录之前-->
      <div class="log-bar">
        <a href="" class="sign-in">登录</a>
        <a href="" class="sign-up">注册</a>
        <a href="" class="write">写文章</a>
      </div>

    </div>
  </nav>
  <!-- 公共头部结束 -->
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'template'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar{
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
  }
  .navbar-default{
    background-color: #fff;
    border-color: #f0f0f0;
  }
</style>
