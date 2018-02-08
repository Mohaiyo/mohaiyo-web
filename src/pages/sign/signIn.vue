<template>
  <div class="container">
    <div class="logo">
      <a href="/">
        <img src="~assets/img/gongfang_logo.png" alt="logo">
      </a>
    </div>
    <section class="sign-up">
      <h4 class="title">
        <div class="normal-title">
          <router-link class="sign active" to="/sign_in">登录</router-link>
          <b>·</b>
          <router-link class="sign" to="/sign_up">注册</router-link>
        </div>
      </h4>
      <div class="sign-container">
        <form class="new_user" @submit.prevent="submit">
          <div class="input-wrap">
            <i class="input-icon ic-user"></i>
            <input type="text" class="radius-top" placeholder="请输入用户名" maxlength="20" v-model.trim="username">
          </div>
          <div class="input-wrap no-radius">
            <i class="input-icon ic-psw"></i>
            <input type="password" placeholder="你要输的密码" maxlength="20" v-model.trim="password">
          </div>
          <div class="input-wrap">
            <i class="input-icon ic-ag-psw"></i>
            <input type="text" class="radius-bottom" placeholder="请输入验证码" maxlength="4" v-model.trim="cap_code">
            <span class="sms-code" @click="getCaptchas">
              <img :src="smsCode" alt="验证码">
            </span>
          </div>
          <input type="submit" value="点我登录" class="submit-btn">
        </form>
        <div class="more-sign">
          <h6>社交帐号登录</h6>
          <ul>
            <li @click="tipHandler"><a class="weibo" href="javascript:"><i class="iconfont ic-weibo"></i></a></li>
            <li @click="tipHandler"><a class="weixin" href="javascript:"><i class="iconfont ic-wechat"></i></a></li>
            <li @click="tipHandler"><a class="qq" href="javascript:"><i class="iconfont ic-qq-connect"></i></a></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'sign',
  data () {
    return {
      smsCode: '',
      cap_code: '',
      username: '',
      password: ''
    }
  },
  mounted () {
    this.getCaptchas()
  },
  methods: {
    submit () {
      this.signIn()
    },
    getCaptchas () {
      this.$axios.get('/api/signin/captchas', {}).then(res => {
        this.smsCode = res.smsCode
      })
    },
    signIn () {
      if (!this.username) {
        this.$message({
          type: 'error',
          message: '你还没有输入用户名哦!'
        })
        return false
      } else if (!this.password) {
        this.$message({
          type: 'error',
          message: '你还没有输入密码哦!'
        })
        return false
      } else if (!this.cap_code) {
        this.$message({
          type: 'error',
          message: '你还没有输入验证码哦!'
        })
        return false
      }
      let params = {
        username: this.username,
        password: this.password,
        cap_code: this.cap_code
      }
      this.$axios.post('/api/signin', params).then(res => {
        let data = res
        if (data.code === 200) {
          this.$router.push({ path: '/home/index', params: {} })
        } else {
          // 刷新验证码
          this.getCaptchas()
        }
      })
    },
    tipHandler () {
      this.$message({
        type: 'warning',
        message: '诶呀，不要点人家了，我还在开发呢！'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '~assets/style/mixin';
  .logo{
    @include absTL(20px, 40px)
  }
  .sign-up{
    width: 400px;
    margin: 0 auto;
    padding: 50px 50px 30px;
    background-color: rgba(245,245,245,.6);
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    vertical-align: middle;
    display: inline-block;
    .title{
      text-align: center;
      margin: 0 auto 50px;
      padding: 10px;
      font-weight: 400;
      color: #969696;
      .sign{
        @include sc(18px,#969696);
        padding: 10px;
      }
      .active{
        font-weight: 700;
        color: $bc;
        border-bottom: 2px solid $bc;
      }
    }
    .sign-container{
      @include fja(flex-start, flex-start);
      flex-flow: column nowrap;
      .input-wrap{
        position: relative;
        width: 300px;
        input{
          outline: none;
          @include wh(100%, 50px);
          margin-bottom: 0;
          padding: 4px 12px 4px 35px;
          border: 1px solid #c8c8c8;
          vertical-align: middle;
          border-bottom: none;

        }
        .sms-code{
          @include absTR(8px, 10px);
        }
        input.radius-top{
          border-radius: 4px 4px 0 0;
        }
        input.radius-bottom{
          padding: 4px 100px 4px 35px;
          border-bottom:1px solid #c8c8c8;
          border-radius: 0 0 4px 4px;
        }
        .input-icon{
          @include absTL(14px, 10px);
          @include wh(18px, 25px);
          @include sc(18px, #969696);
        }
        .ic-user{
          background: url('~assets/img/avatar_sign.png') no-repeat -4px 0px;
          background-size: 25px;
        }
        .ic-email{
          background: url('~assets/img/email.png') no-repeat 0px 4px;
          background-size: 18px;
        }
        .ic-psw{
          background: url('~assets/img/password.png') no-repeat 0px 4px;
          background-size: 18px;
        }
        .ic-ag-psw{
          background: url('~assets/img/Confirm_password.png') no-repeat 0px 4px;
          background-size: 18px;
        }
      }
      .submit-btn{
        width: 100%;
        padding: 9px 18px;
        @include sc(18px, #fff);
        border: none;
        border-radius: 25px;
        background: #3194d0;
        cursor: pointer;
        outline: none;
        display: block;
        clear: both;
        margin:20px 0 30px;
        letter-spacing: 3px;
      }
      .more-sign{
        text-align: center;
        h6{
          width: 300px;
          position: relative;
          margin: 0 0 20px;
          @include sc(14px, #b5b5b5);
        }
        h6:after,h6:before {
          content: "";
          border-top: 1px solid #b5b5b5;
          display: block;
          position: absolute;
          width: 60px;
          top: 9px;
        }
        h6:before {
          left: 30px;
        }
        h6:after {
          right: 30px;
        }
        ul{
          // margin-bottom: 30px;
          li{
            margin: 0 3px;
            display: inline-block;
            a{
              @include wh(50px, 50px);
              background-color: hsla(0,0%,71%,.2);
              border-radius: 50%;
              line-height: 50px;
              display: block;
              i{
                display: inline-block;
                @include wh(50px, 50px);
              }
              .ic-weibo{
                background: url('~assets/img/weibo.png') no-repeat 10px 10px ;
                background-size: 30px 30px;
              }
              .ic-wechat{
                background: url('~assets/img/weixin.png') no-repeat 12px 12px ;
                background-size: 26px 26px;
              }
              .ic-qq-connect{
                background: url('~assets/img/qq.png') no-repeat 14px 14px ;
                background-size: 22px 22px;
              }

            }
            .weibo{
              background-color: #e05244;
            }
            .weixin{
              background-color: #00bb29;
            }
            .qq{
              background-color: #498ad5;
            }
          }
        }
      }
    }
  }
  @media (max-width:768px){
    .sign-up{
      position: absolute;
      left: 50%;
      margin: 0 0 0 -200px;
      box-shadow: none;
    }
    .logo{
      display: none;
    }
  }

</style>
