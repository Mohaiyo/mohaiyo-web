<template>
  <div class="container">
    <!-- 文章内容 -->
    <section class="article">
      <!-- 标题 -->
      <h1 class="title">26岁，辞职远行</h1>
      <div class="author">
        <a href="javascript:;" class="avatar">
          <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="作者头像">
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
      <div class="article-detail" v-html="detail">
        01刚上大学的时候，班里有个挺文气的男生。他性格有些内向，和男生一起玩还算得上开朗，一和女生呆在一起就很害羞，甚至和女孩子说一两句话脸就涨得通红。
        一次，图书馆举办书展，班上有个女同学凑巧碰见了他，便随口约他一起去逛书展。他心里一热，乐呵呵地陪着对方去了。其实两个人也没说几句话，到了那里也只是各看各的书而已。这个哥们儿回来之后，表情就不一样了，一脸的甜蜜和窃喜。很显然，他动心了，喜欢上了那个女同学。
        然后，过了几天，他鼓起勇气给那个女同学发了一条经过精心编辑的短信表白爱慕之心。那条表白短信用词考究，标点规范，文采斐然，深情款款，可以说耗尽了他的才情。
        发完短信，他又激动又忐忑，简直坐立不安。过了十分钟，他收到了对方的回信:“谢谢你的一片深情。你很好，可是我们不合适。”
        他看着短信，就像一朵被霜打了的花朵，无精打采。我们问他:“接下来有什么打算吗？”他坚定地说:“我不会放弃的。我相信这是她给我的考验，我会继续追她。”“那你打算继续追多久呢？”我们问他。他眼睛里闪烁着光芒:“二十年！”我们非常惊讶:“你确定？”他点了点头，一副不撞南墙不回头的架势。我们见状，不好再说什么，只是拍了拍他的肩膀。
        半个月以后，他告诉我们，他 第二次向那个女同学表白，又被拒绝了。一个月以后，他的第三次表白还是被拒绝了。对方甚至不愿意再跟他说话，即使碰见也把头扭向一边。如果几个同学一起玩，那个女同学的目光基本上不看他。这让他越发觉得痛苦和抓狂。
        就这样，一年过去了，我们基本上淡忘了这个事情，仿佛那只是一个趣闻段子。有一次一个舍友过生日，大家谈笑间，不知道谁突然提起了这件事。我们问他后来怎么样了，他笑了笑:“我放弃了，没意思。”我调侃地说:“我记得你说过要追她二十年呢？这好像还差十九年呢！”他尴尬地笑了笑说:“那都是当时一时冲动才说的话。不喜欢就是不喜欢，追的时间再久、表白的次数再多也没有用的。或许是我太傻了吧。从她第一次拒绝我，我就应该明白，她其实根本就不喜欢我。”
        一席话落，全场沉默。
      </div>
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
      <!-- 如果已经登录可以发表评论 -->
      <div class="new-comments" v-show="false">
        <a href="#" class="avatar">
          <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="用户头像">
        </a>
        <div class="sign-container notlogin">
          <a href="#" class="signin-btn">登录</a><span>后发表评论</span>
        </div>
      </div>
      <!-- 未登录，提示登录才可以发表评论 -->
      <div class="new-comments">
        <a href="#" class="avatar">
          <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="用户头像">
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
                  <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="用户头像">
                </a>
                <div class="info">
                  <a href="#">徐小多的日常</a>
                  <div class="meta">
                    <span class="comment-time">2017.12.27 10:08:00</span>
                  </div>
                </div>
              </div>
              <div class="comment-wrap">
                <p class="comment-descr">确实是干货，但是太干了，不会写代码啊</p>
                <div class="tool-group">
                  <a href="#" class="comment-like">
                    <i class="icon-like icon"></i>
                    <span>8人赞</span>
                  </a>
                  <a href="#" class="comment-reply">
                    <i class="icon-reply icon"></i>
                    <span>回复</span>
                  </a>
                </div>
              </div>
            </div>
            <ul class="sub-comment-list">
              <li class="sub-comment">
                <p>
                  <a href="#" class="comment-author">犀牛角_sun</a>：<span>+1</span>
                </p>
                <div class="sub-tool-group">
                  <span class="sub-comment-time">2017.12.27 10:08:00</span>
                  <a href="#" class="sub-comment-reply">
                    <i class="icon ic-comment"></i>
                    <span class="reply">回复</span>
                  </a>
                </div>
              </li>
            </ul>
          </li>
          <li class="comment-item"></li>
          <li class="comment-item"></li>
          <li class="comment-item"></li>
          <li class="comment-item"></li>
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
      msg: 'template',
      detail: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../assets/style/mixin';
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
              background: url('../../assets/img/read.png') no-repeat 0 -2px ;
              background-size: 15px;
            }
            .ic-list-comments{
              @include bis('../../assets/img/comment.png',13px);
            }
            .ic-list-like{
              @include bis('../../assets/img/like_icon.png',13px);
            }
          }
      }
    }
    .article-detail{
      width: 90%;
      margin:0 auto;
      padding-bottom: 30px;
      border-bottom: 2px solid #eee;
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
              background: url('../../assets/img/like.png') no-repeat 0 3px;
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
}
</style>
