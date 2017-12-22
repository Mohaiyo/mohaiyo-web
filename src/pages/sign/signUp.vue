<template>
  <div class="container">
    <section class="sign-up">
      <h4 class="title">
        <div class="normal-title">
          <router-link class="sign" to="/sign_in">登录</router-link>
          <b>·</b>
          <router-link class="sign active" to="/sign_up">注册</router-link>
        </div>
      </h4>
      <div class="sign-container">
        <form class="new_user" @submit.prevent="submit">
          <div class="input-wrap">
            <i class="input-icon ic-user"></i>
            <input type="text" class="radius-top" placeholder="起个帅点的昵称" maxlength="20">
          </div>
          <div class="input-wrap">
            <i class="input-icon ic-email"></i>
            <input type="text" placeholder="邮箱是必须的" maxlength="40">
          </div>
          <div class="input-wrap no-radius">
            <i class="input-icon ic-psw"></i>
            <input type="password" placeholder="你要输的密码" maxlength="20">
          </div>
          <div class="input-wrap">
            <i class="input-icon ic-ag-psw"></i>
            <input type="password" class="radius-bottom" placeholder="密码是否一致" maxlength="20">
          </div>
          <input type="submit" value="点我注册" class="submit-btn">
        </form>
        <div class="more-sign">
          <h6>社交帐号直接注册</h6>
          <ul>
            <li><a class="weibo" target="_blank" href="#"><i class="iconfont ic-weibo"></i></a></li>
            <li><a class="weixin" target="_blank" href="#"><i class="iconfont ic-wechat"></i></a></li>
            <li><a class="qq" target="_blank" href="#"><i class="iconfont ic-qq-connect"></i></a></li>
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
      msg: 'template'
    }
  },
  methods: {
    submit () {
      console.log('注册')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
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
        font-size: 18px;
        padding: 10px;
        color: #969696;
      }
      .active{
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
      }
    }
    .sign-container{
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      .input-wrap{
        position: relative;
        width: 300px;
        input{
          outline: none;
          width: 100%;
          height: 50px;
          margin-bottom: 0;
          padding: 4px 12px 4px 35px;
          border: 1px solid #c8c8c8;
          // border-radius: 0 0 4px 4px;
          // background-color: hsla(0,0%,71%,.1);
          vertical-align: middle;
          border-bottom: none;

        }
        input.radius-top{
          border-radius: 4px 4px 0 0;
        }
        input.radius-bottom{
          border-bottom:1px solid #c8c8c8;
          border-radius: 0 0 4px 4px;
        }
        .input-icon{
          position: absolute;
          width: 18px;
          height: 25px;
          top: 14px;
          left: 10px;
          font-size: 18px;
          color: #969696;
        }
        .ic-user{
          background: url('../../assets/img/avatar_sign.png') no-repeat -4px 0px;
          background-size: 25px;
        }
        .ic-email{
          background: url('../../assets/img/email.png') no-repeat 0px 4px;
          background-size: 18px;
        }
        .ic-psw{
          background: url('../../assets/img/password.png') no-repeat 0px 4px;
          background-size: 18px;
        }
        .ic-ag-psw{
          background: url('../../assets/img/Confirm_password.png') no-repeat 0px 4px;
          background-size: 18px;
        }
      }
      .submit-btn{
        width: 100%;
        padding: 9px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        background: #42c02e;
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
          font-size: 14px;
          color: #b5b5b5;
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
              width: 50px;
              height: 50px;
              background-color: hsla(0,0%,71%,.2);
              border-radius: 50%;
              line-height: 50px;
              display: block;
              i{
                display: inline-block;
                width: 50px;
                height: 50px;
              }
              .ic-weibo{
                background: url('../../assets/img/weibo.png') no-repeat 10px 10px ;
                background-size: 30px 30px;
              }
              .ic-wechat{
                background: url('../../assets/img/weixin.png') no-repeat 12px 12px ;
                background-size: 26px 26px;
              }
              .ic-qq-connect{
                background: url('../../assets/img/qq.png') no-repeat 14px 14px ;
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
  }

</style>
