<template>
  <div class="container">
    <!-- 文章内容 -->
    <section class="article">
      <!-- 标题 -->
      <h1 class="title">26岁，辞职远行</h1>
      <div class="author">
        <a href="javascript:;" class="avatar">
          <img src="~assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="作者头像">
        </a>
        <div class="info">
          <span class="name">上官飞鸿</span>
          <div class="meta">
            <span class="collection-tag">日记-书信</span>
            <span> <i class="icon ic-list-read"></i>2302</span>
            <span> <i class="icon ic-list-comments"></i>41</span>
            <span> <i class="icon ic-list-like"></i>63</span>
            <span class="publish-time">2017.12.26 18:35:23</span>
          </div>
        </div>
      </div>
      <div class="article-detail" v-html="detail"></div>
    </section>
    <!-- 分享点赞 -->
    <section class="meta-bottom">
      <div class="like">
        <div class="btn like-group">
          <div class="btn-like">
            <a href="#"><i class="like-icon"></i>喜欢</a>
          </div>
          <div class="like-count">
            <span>520</span>
          </div>
        </div>
      </div>
      <div class="share">
        <ul>
          <li><a class="weibo" target="_blank" href="#"><i class="iconfont ic-weibo"></i></a></li>
          <li><a class="weixin" target="_blank" href="#"><i class="iconfont ic-wechat"></i></a></li>
          <li><a class="qq" target="_blank" href="#"><i class="iconfont ic-qq-connect"></i></a></li>
        </ul>
      </div>
    </section>
    <!-- 评论 -->
    <section class="comments">
      <!-- 未登录，提示登录才可以发表评论-->
      <div class="new-comments" v-show="false">
        <a href="#" class="avatar">
          <img src="~assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="用户头像">
        </a>
        <div class="sign-container notlogin">
          <a href="#" class="signin-btn">登录</a><span>后发表评论</span>
        </div>
      </div>
      <!-- 如果已经登录可以发表评论 -->
      <div class="new-comments">
        <a href="#" class="avatar">
          <img src="~assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="用户头像">
        </a>
        <div class="sign-container haslogin">
          <textarea placeholder="写下你的评论..."></textarea>
          <div class="comment-operation">
            <a href="#" class="cancel">取消</a>
            <a href="#" class="confirm">发送</a>
          </div>
        </div>
      </div>
      <!-- 评论列表   -->
      <div class="comments-list">
        <ul>
          <li class="comment-item">
            <div>
              <div class="author">
                <a href="#" class="avatar">
                  <img src="~assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="用户头像">
                </a>
                <div class="info">
                  <a href="#" class="name">徐小多的日常</a>
                  <div class="meta">
                    <span class="comment-time">2017.12.27 10:08:00</span>
                  </div>
                </div>
              </div>
              <div class="comment-wrap">
                <p class="comment-descr">确实是干货，但是太干了，不会写代码啊</p>
                <div class="tool-group">
                  <a href="#" class="comment-like">
                    <i class="icon-like iconfont"></i>
                    <span>8人赞</span>
                  </a>
                  <a href="#" class="comment-reply">
                    <i class="icon-comment iconfont"></i>
                    <span>回复</span>
                  </a>
                </div>
              </div>
            </div>
            <ul class="sub-comment-list">
              <li class="sub-comment">
                <p>
                  <a href="#" class="comment-author">犀牛角_sun</a>：<span>顶你个肺啊！！！！</span>
                </p>
                <div class="sub-tool-group">
                  <span class="sub-comment-time">2017.12.27 10:08:00</span>
                  <a href="#" class="sub-comment-reply">
                    <i class="iconfont icon-comment"></i>
                    <span class="comment">回复</span>
                  </a>
                </div>
              </li>
              <li class="sub-comment">
                <p>
                  <a href="#" class="comment-author">犀牛角_sun</a>：<span>+1</span>
                </p>
                <div class="sub-tool-group">
                  <span class="sub-comment-time">2017.12.27 10:08:00</span>
                  <a href="#" class="sub-comment-reply">
                    <i class="iconfont icon-comment"></i>
                    <span class="comment">回复</span>
                  </a>
                </div>
              </li>
              <div class="sub-comment more-comment">
                <a class="add-comment-btn">
                  <i class="iconfont icon-write"></i>
                  <span>添加新评论</span>
                </a>
              </div>
            </ul>
          </li>
          <li class="comment-item">
            <div>
              <div class="author">
                <a href="#" class="avatar">
                  <img src="~assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="用户头像">
                </a>
                <div class="info">
                  <a href="#" class="name">徐小多的日常</a>
                  <div class="meta">
                    <span class="comment-time">2017.12.27 10:08:00</span>
                  </div>
                </div>
              </div>
              <div class="comment-wrap">
                <p class="comment-descr">确实是干货，但是太干了，不会写代码啊</p>
                <div class="tool-group">
                  <a href="#" class="comment-like">
                    <i class="icon-like iconfont"></i>
                    <span>8人赞</span>
                  </a>
                  <a href="#" class="comment-reply">
                    <i class="icon-comment iconfont"></i>
                    <span>回复</span>
                  </a>
                </div>
              </div>
            </div>
            <ul class="sub-comment-list">
              <li class="sub-comment">
                <p>
                  <a href="#" class="comment-author">犀牛角_sun</a>：<span>顶你个肺啊！！！！</span>
                </p>
                <div class="sub-tool-group">
                  <span class="sub-comment-time">2017.12.27 10:08:00</span>
                  <a href="#" class="sub-comment-reply">
                    <i class="iconfont icon-comment"></i>
                    <span class="comment">回复</span>
                  </a>
                </div>
              </li>
              <li class="sub-comment">
                <p>
                  <a href="#" class="comment-author">犀牛角_sun</a>：<span>+1</span>
                </p>
                <div class="sub-tool-group">
                  <span class="sub-comment-time">2017.12.27 10:08:00</span>
                  <a href="#" class="sub-comment-reply">
                    <i class="iconfont icon-comment"></i>
                    <span class="comment">回复</span>
                  </a>
                </div>
              </li>
              <div class="sub-comment more-comment">
                <a class="add-comment-btn">
                  <i class="iconfont icon-write"></i>
                  <span>添加新评论</span>
                </a>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'articlePage',
  data () {
    return {
      detail: '',
      arcticlId: this.$route.params.arcticlId
    }
  },
  created () {

  },
  mounted () {
    this.getDetail()
  },
  methods: {
    getDetail: function () {
      let params = {
        id: this.arcticlId
      }
      this.$axios.post('/api/posts/getDetail', params).then(res => {
        this.detail = res
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '~assets/style/mixin';
.container{
  display: flex;
  flex-flow: column nowrap;
  .article{
    width: 100%;
    .title{
      word-break: break-word !important;
      word-break: break-all;
      margin: 20px 0 0;
      font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
      font-size: 34px;
      font-weight: 700;
      line-height: 1.3;
    }
    .author{
      margin: 30px 0 40px;
      .avatar{
        @include wh(48px,48px);
        vertical-align: middle;
        display: inline-block;
        img{
          @include wh(100%,100%);
          border: 1px solid #ddd;
          border-radius: 50%;
        }
      }
      .info{
          vertical-align: middle;
          display: inline-block;
          margin-left: 8px;
          .name{
            margin-right: 3px;
            font-size: 16px;
            vertical-align: middle;
          }
          .meta{
            padding-right: 0!important;
            @include font(12px,20px);
            font-weight: 400;
            margin-top:10px;
            span{
              color: #b4b4b4;
              vertical-align: middle;
              margin-right: 10px;
            }
            .collection-tag{
              display: inline-block;
              padding: 3px 6px;
              margin-top: -1px;
              max-width: 200px;
              @include ellipsis;
              line-height: 1;
              vertical-align: middle;
              color: $bc !important;
              border: 1px solid rgba(236,97,73,.7);
              border-radius: 3px;
            }
            .icon{
              display: inline-block;
              @include wh(20px, 13px);
              vertical-align: middle;
            }
            .ic-list-read{
              background: url('~assets/img/read.png') no-repeat 0 -2px ;
              background-size: 15px;
            }
            .ic-list-comments{
              @include bis('~assets/img/comment.png',13px);
            }
            .ic-list-like{
              @include bis('~assets/img/like_icon.png',13px);
            }
          }
      }
    }
    .article-detail{
      width: 90%;
      margin:0 auto;
      padding-bottom: 30px;
      border-bottom: 2px solid #eee;
      p{
        margin-bottom: 25px;
      }
    }
  }
  .meta-bottom{
    @include fja(space-between, center);
    flex-flow: row nowrap;
    width: 90%;
    margin:0 auto;
    padding:30px 0 80px;
    .like{
      // height: 60px;
      .like-group{
        padding: 13px 0 15px;
        border: 1px solid $bc ;
        border-radius: 40px;
        .btn-like{
          font-size: 19px;
          display: inline-block;
          cursor: pointer;
          a{
            color: $bc ;
            padding: 15px 15px 15px 30px;
            i{
              display: inline-block;
              @include wh(20px, 20px);
              background: url('~assets/img/like.png') no-repeat 0 3px;
              background-size: 20px;
              margin-right: 10px;
            }
          }
        }
        .like-count{
          display: inline-block;
          font-size: 18px;
          border-left: 1px solid rgba(236,97,73,.4);
          span{
            color: $bc ;
            padding: 15px 30px 15px 17px;
          }

        }
      }
    }
    .share{
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
  .new-comments{
    width: 90%;
    margin:0 auto;
    display: flex;
    flex-flow:row nowrap;
    .avatar{
      margin:0 15px;
      @include wh(38px, 38px);
      vertical-align: middle;
      display: inline-block;
      img{
        @include wh(100%, 100%);
        border: 1px solid #ddd;
        border-radius: 50%;
      }
    }
    .notlogin{
      text-align: center;
      padding: 10px 15px;
      @include wh(100%, 80px);
      font-size: 13px;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      background-color: hsla(0,0%,71%,.1);
      resize: none;
      display: inline-block;
      vertical-align: top;
      outline-style: none;
      a{
        display: inline-block;
        margin-bottom: 0;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 6px 12px;
        font-size: 14px;
        line-height: 1.42857;
        border-radius: 4px;
        user-select: none;
      }
      .signin-btn{
        width: 78px;
        margin: 11px 10px 0 0;
        padding: 7px 18px;
        font-size: 16px;
        border: none;
        border-radius: 20px;
        color: #fff !important;
        background-color: #3194d0;
        outline: none;
      }
      span{
        vertical-align: -7px;
      }
    }
    .haslogin{
      width: 100%;
      textarea{
        padding: 10px 15px;
        @include wh(100%, 80px);
        font-size: 13px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        background-color: hsla(0,0%,71%,.1);
        resize: none;
        display: inline-block;
        vertical-align: top;
        outline-style: none;
      }
      .comment-operation{
        @include wh(100%, 50px);
        @include fja(flex-end, center);
        flex-flow: row nowrap;
        .cancel{
          padding: 8px 18px;
          @include sc(16px,#969696);
        }
        .confirm{
          display: inline-block;
          width: 78px;
          text-align: center;
          padding: 8px 18px;
          font-size: 16px;
          border: none;
          border-radius: 20px;
          color: #fff !important;
          background-color: #42c02e;
          cursor: pointer;
        }
      }
    }
  }
  .comments-list{
    width: 90%;
    margin-top:30px;
    margin:0 auto;
    ul{
      .comment-item{
        padding: 20px 0 30px;
        border-bottom: 1px solid #f0f0f0;
        .author{
          margin-bottom: 15px;
          .avatar{
            margin-right: 5px;
            @include wh(38px, 38px);
            vertical-align: middle;
            display: inline-block;
            img{
              @include wh(100%,100%);
            }
          }
          .info{
            display: inline-block;
            vertical-align: middle;
            .name{
              @include sc(15px, #333);
            }
            .meta{
              @include sc(12px, #969696);
            }
          }
        }
        .comment-wrap{
          .comment-descr{
            margin: 10px 0;
            line-height: 1.5;
            font-size: 16px;
            word-break: break-word;
          }
          .tool-group{
            a{
              margin-right: 10px;
              font-size: 14px;
              display: inline-block;
              span{
                color: #969696;
              }
            }
          }
        }
        .sub-comment-list{
          margin-top: 20px;
          padding: 5px 0 5px 20px;
          border-left: 2px solid #d9d9d9;
          li.sub-comment{
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px dashed #f0f0f0;
            a{
              @include sc(14px, #3194d0);
            }
            span{
              @include sc(14px, #333)
            }
            .sub-tool-group{
              a{
                margin-right: 10px;
                font-size: 14px;
                display: inline-block;
              }
              span{
                color: #969696;
                font-size: 12px;
              }
            }
          }
          .add-comment-btn{
            i,span{
              @include sc(14px, #969696);
              cursor: pointer;
            }
            &:hover{
              i,span{
                @include sc(14px, #333)
              }
            }
          }
        }
      }
    }
  }
}
</style>
