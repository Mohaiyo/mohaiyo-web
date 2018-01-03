<template>
  <!-- 公共头部 -->
  <nav class="navbar navbar-default" role="navigation">
    <div class="nav-inner">
      <!-- logo -->
      <a href="/" class="logo"></a>
      <!-- 中间导航以及搜索栏 -->
      <div class="nav-menu">
        <!-- 992px以上的屏幕使用菜单栏 -->
        <ul class="menu-list">
          <!-- 992px以上的屏幕使用菜单栏 -->
          <li class="menu-item" :class="{active: index == menuIndex}" v-for="(item,index) of navList" :key="item.listId" @click="navHandler(index)">{{ item.listName }}</li>
          <!-- 992px以下的使用图标 -->
          <li class="menu-icon" ref="menu-icon" @click="menuHandler">
            <ul class="sub-menu menu-hover" v-show="menuShow">
              <li class="sub-menu-item" :class="{active: index == menuIndex}" v-for="(item,index) of navList" :key="item.listId" @click="navHandler(index)">{{ item.listName }}</li>
            </ul>
          </li>
        </ul>
        <div class="search-form">
          <input type="text" placeholder="搜呀搜呀索" autocomplete="off" v-model="searchVal" class="search" maxlength="10">
          <a href="http://" class="search-btn"><i class="icon"></i></a>
        </div>

      </div>
      <!-- 右侧录注册栏 -->
      <div class="log-bar">
        <!-- 未登录之前 -->
        <router-link to="/sign_in" class="sign-in" v-show="!hasSignIn">登录</router-link>
        <router-link to="/sign_up" class="sign-up" v-show="!hasSignIn">注册</router-link>
        <!-- 登录之后 -->
        <div class="user" v-show="hasSignIn">
          <a href="http://" class="avatar">
            <img src="../../assets/img/avatar.png" alt="avatar" :style="{width:'52px',height:'52px',borderRadius:'25px'}"/>
          </a>
          <div class="drowdown-menu">
            <ul class="drowdown-list">
              <li class="drowdown-list-item"><i class="drowdown-icon home-icon"></i><span>我的主页</span></li>
              <li class="drowdown-list-item"><i class="drowdown-icon collect-icon"></i><span>收藏的文章</span></li>
              <li class="drowdown-list-item"><i class="drowdown-icon like-icon"></i><span>喜欢的文章</span></li>
              <li class="drowdown-list-item" @click="signOut"><i class="drowdown-icon signOut-icon"></i><span>退出</span></li>
            </ul>
          </div>
        </div>
        <router-link to="/home/newArcticle" class="write">
          <i class="icon"></i>
          <span>写文章</span>
        </router-link>
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
      navList: [{listId: 10001, listName: '主页'}, {listId: 10002, listName: '热门'}, {listId: 10003, listName: '关于'}],
      searchVal: '',
      isActive: true,
      menuShow: false,
      hasSignIn: false,
      menuIndex: 0
    }
  },
  created () {
    this.getUserInfo()
  },
  methods: {
    menuHandler () {
      this.menuShow = !this.menuShow
    },
    navHandler (i) {
      this.menuIndex = i
    },
    getUserInfo () {
      this.$axios.get('/api/user/getUserInfo', {}).then(res => {
        let data = res.data
        if (data.status === 200) {
          this.hasSignIn = data.login
        }
      })
    },
    signOut () {
      this.$axios.get('/api/user/signout', {}).then(res => {
        let data = res.data
        if (data.status === 200) {
          this.hasSignIn = false
        } else {
          alert(data.message)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '../../assets/style/mixin';
  .navbar{
    margin-bottom: 20px;
    border: 1px solid transparent;
    border-width: 0 0 1px;
    .nav-inner{
      max-width: 1440px;
      margin:0 auto;
      height: 56px;
      @include fja(flex-start, center);
      flex-flow: row nowrap;
      position: relative;
      @media (min-width:320px) and (max-width:767px){
        .logo{
          display: none;
        }
      }
       @media (min-width:768px) {
        .logo{
          display: block;
          height: 56px;
          padding: 14px 25px 15px 30px;
          flex:1;
          background:url('../../assets/img/gongfang_logo.png') no-repeat 60px 3px;
          background-size: 50px 50px;
        }
       }
      .nav-menu{
          @include fja(flex-start, center);
          flex:6;
          margin:0 auto;
          padding:0 15px;
        .menu-list{
          @include fja(flex-start, center);
          @media (min-width:992px) {
            .menu-item{
              cursor: pointer;
              height: 56px;
              line-height: 26px;
              padding: 15px;
              color: #333;
            }
            .menu-icon{
              display: none;
            }
            .active{
              color:$bc;
            }
          }
          @media (min-width:320px) and (max-width:992px) {
            .menu-item{
              display: none;
            }
            .menu-icon{
              display: block;
              cursor: pointer;
              @include wh(30px, 30px);
              margin: 0 15px;
              @include bis('../../assets/img/menu.png',30px);
            }
            .menu-icon{
              .sub-menu{
                @include absTL(56px, 0px);
                width: 100vw;
                text-align: center;
                background-color:#fff;
                .sub-menu-item{
                  color:#222;
                  height: 35px;
                  line-height: 35px;
                  border-bottom: 1px solid #f0f0f0;
                }
                .sub-menu-item:hover{
                  color: $bc;
                }
                .active{
                  color:$bc;
                }
              }
            }
            .active{
              color:$bc;
            }
          }
          .menu-item:hover{
            color: $bc;
          }
        }
        .search-form{
          @include fja(flex-start, center);
          .search{
            outline: none;
            margin:0 0 0 15px;
            padding: 0 40px 0 20px;
            @include wh(150px,38px);
            font-size: 14px;
            border: 1px solid #eee;
            border-radius: 40px;
            background: #eee;
            transition: width 0.5s;
          }
          .search:focus{
            width: 200px;
          }
          .icon{
            display: inline-block;
            @include wh(32px,32px);
            margin-left: -40px;
            background:url('../../assets/img/search.png') no-repeat 0 0;
          }
        }

      }
      .log-bar{
        flex:2.5;
        @include fja(flex-start, center);
        font-size: 15px;
        text-align: center;
        flex-flow:row nowrap;
        .sign-in{
          display: inline-block;
          cursor: pointer;
          padding: 0px 12px;
          width: 60px;
          line-height: 40px;
          color: #969696;
        }
        .sign-in:hover{
          color: $bc;
        }
        .sign-up{
          line-height: 38px;
          border: 1px solid rgba(236,97,73,.7);
          border-radius: 20px;
          display: inline-block;
          color: $bc;
          background-color: transparent;
          @include wh(80px, 38px);
          margin:0 5px 0 15px;
          transition: all 0.3s;
        }
        .sign-up:hover{
          background-color: rgba(234, 111, 90, 0.8);
          color: #fff;
        }
        .write{
          @include fja(center, center);
          @include wh(100px, 40px);
          background-color: $bc;
          vertical-align: top;
          line-height: 40px;
          border-radius:20px;
          margin:0 15px;
          transition: opacity 0.3s;
          .icon{
            display: inline-block;
            @include wh(20px, 20px);
            @include bis('../../assets/img/write.png', 20px);
          }
          span{
            color: #fff;
            padding:0 5px;
          }
        }
        .write:hover{
          background-color: rgba(234, 111, 90,0.8);
        }
        .user{
          position: relative;
          padding:0 25px;
          height: 56px;
          cursor: pointer;
          .avatar{
            display: inline-block;
            @include wh(50px, 50px);
          }
          .avatar:before{
            content: "";
            @include absTR(25px,10px);
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 6px solid #999;
          }
        }
        .user:hover{
          background-color: #f0f0f0;
          .drowdown-menu{
            display: block;
          }
        }
      }
      .drowdown-menu{
        display: none;
        position: absolute;
        z-index: 2;
        left: 0px;
        margin-top: 0;
        border-radius: 0 0 4px 4px;
        border-color: #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,.1);
        filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
        -webkit-filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
        .drowdown-list-item{
          width: 158px;
          padding: 10px 20px;
          line-height: 30px;
          text-align: left;
          background: #fff;
          .drowdown-icon{
            display: inline-block;
            vertical-align: top;
            @include wh(30px, 30px);
          }
          .home-icon{
            @include bis('../../assets/img/home.png',26px);
          }
          .collect-icon{
            background:url('../../assets/img/collect.png') no-repeat 3px 5px;
            background-size: 20px 20px;
          }
          .like-icon{
            background:url('../../assets/img/like.png') no-repeat 3px 5px;
            background-size: 20px 20px;
          }
          .signOut-icon{
            background:url('../../assets/img/sign-out.png') no-repeat 3px 5px;
            background-size: 20px 20px;
          }
        }
        .drowdown-list-item:hover{
          background-color: #f5f5f5;
        }
      }
    }
  }
  .navbar-default{
    min-height: 50px;
    background-color: #fff;
    border-color: #f0f0f0;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  @media (min-width:320px){
    max-width: auto;
  }
  @media (min-width:768px){
    max-width: 750px;
  }
  @media (min-width:992px){
    max-width: 970px;
  }
  @media (min-width:1200px){
    width: 1170px;
  }
</style>
