<template>
  <div class="container">
    <section class="main">
      <!-- 轮播图 -->
      <swiper :options="swiperOption" ref="mySwiper" class="carousel">
        <!-- slides -->
        <swiper-slide>
          <img src="../../assets/img/986f00c9a5ab4406b143b8985f925258bba06b9d.jpg" alt="" class="slide-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/d3935eb4e5c1859a3ffc564ccad0871ac477795f.jpg" alt="" class="slide-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/8f6f175fdd264241c93152431e25c4a46c2434ee.jpg" alt="" class="slide-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
      <!-- 文章列表模块 -->
      <div class="list-container">
        <ul class="note-list">
          <li class="arcticle has-img">
            <router-link to="/home/article/1213" class="wrap-img">
              <img src="../../assets/img/195046-3afdb53b041882d2.jpg" alt="文章简介图片" class="img">
            </router-link>
            <div class="content">
              <div class="author">
                <router-link to="/home/article/1213" class="avatar">
                  <img src="../../assets/img/150f2089-9aab-4873-8e06-530c8a1bc14a.png" alt="作者头像">
                </router-link>
                <div class="info">
                  <router-link to="/home/article/1213" class="nickname">彭小六</router-link>
                  <span class="time">53分钟以前</span>
                </div>
              </div>
              <router-link to="/home/article/1213" class="title">我是如何提升阅读能力的</router-link>
              <p class="abstract">0. 你早上起来去五星级餐厅吃早餐。如果你有足够的时间，你可以细嚼慢吞，先水果，在主食，再点心，最后来杯咖啡。 但你去的时候，发现还有五分钟就要收摊了。你该怎么办？ 1. 2...</p>
              <div class="meta">
                <router-link class="collection-tag" to="/home/article/1213">读书</router-link>
                <router-link to="/home/article/1213"> <i class="icon ic-list-read"></i>545</router-link>
                <router-link to="/home/article/1213"> <i class="icon ic-list-comments"></i>4</router-link>
                <span> <i class="icon ic-list-like"></i>38</span>
              </div>
            </div>
          </li>
          <li class="arcticle">
            <!-- <a href="#" class="wrap-img">
              <img src="../../assets/img/195046-3afdb53b041882d2.jpg" alt="文章简介图片" class="img">
            </a> -->
            <div class="content">
              <div class="author">
                <a href="http://" class="avatar">
                  <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="作者头像">
                </a>
                <div class="info">
                  <a href="http://" class="nickname">阿哔有个帅阿呗</a>
                  <span class="time">2个小时以前</span>
                </div>
              </div>
              <a href="http://" class="title">我就是那个差点被花呗和分期折磨死的男孩子！</a>
              <p class="abstract">2017年12月26日  星期二  小雪 文＃阿呗 这世界上凡是能和钱挂钩的东西，都不能谈情谊。 我和阿籹站在天桥上，望着这繁华的城市，灯红酒绿的，突然觉得这世界真扭曲。 耳...</p>
              <div class="meta">
                <a class="collection-tag" href="#">日记-书信</a>
                <a href="http://"> <i class="icon ic-list-read"></i>2302</a>
                <a href="http://"> <i class="icon ic-list-comments"></i>41</a>
                <span> <i class="icon ic-list-like"></i>63</span>
              </div>
            </div>
          </li>
          <li class="arcticle">
            <!-- <a href="http://" class="wrap-img">
              <img src="../../assets/img/195046-3afdb53b041882d2.jpg" alt="文章简介图片" class="img">
            </a> -->
            <div class="content">
              <div class="author">
                <a href="http://" class="avatar">
                  <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="作者头像">
                </a>
                <div class="info">
                  <a href="http://" class="nickname">阿哔有个帅阿呗</a>
                  <span class="time">2个小时以前</span>
                </div>
              </div>
              <a href="http://" class="title">我就是那个差点被花呗和分期折磨死的男孩子！</a>
              <p class="abstract">2017年12月26日  星期二  小雪 文＃阿呗 这世界上凡是能和钱挂钩的东西，都不能谈情谊。 我和阿籹站在天桥上，望着这繁华的城市，灯红酒绿的，突然觉得这世界真扭曲。 耳...</p>
              <div class="meta">
                <a class="collection-tag" href="#">日记-书信</a>
                <a href="http://"> <i class="icon ic-list-read"></i>2302</a>
                <a href="http://"> <i class="icon ic-list-comments"></i>41</a>
                <span> <i class="icon ic-list-like"></i>63</span>
              </div>
            </div>
          </li>
          <li class="arcticle">
            <!-- <a href="http://" class="wrap-img">
              <img src="../../assets/img/195046-3afdb53b041882d2.jpg" alt="文章简介图片" class="img">
            </a> -->
            <div class="content">
              <div class="author">
                <a href="http://" class="avatar">
                  <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="作者头像">
                </a>
                <div class="info">
                  <a href="http://" class="nickname">阿哔有个帅阿呗</a>
                  <span class="time">2个小时以前</span>
                </div>
              </div>
              <a href="http://" class="title">我就是那个差点被花呗和分期折磨死的男孩子！</a>
              <p class="abstract">2017年12月26日  星期二  小雪 文＃阿呗 这世界上凡是能和钱挂钩的东西，都不能谈情谊。 我和阿籹站在天桥上，望着这繁华的城市，灯红酒绿的，突然觉得这世界真扭曲。 耳...</p>
              <div class="meta">
                <a class="collection-tag" href="#">日记-书信</a>
                <a href="http://"> <i class="icon ic-list-read"></i>2302</a>
                <a href="http://"> <i class="icon ic-list-comments"></i>41</a>
                <span> <i class="icon ic-list-like"></i>63</span>
              </div>
            </div>
          </li>
          <li class="arcticle">
            <!-- <a href="http://" class="wrap-img">
              <img src="../../assets/img/195046-3afdb53b041882d2.jpg" alt="文章简介图片" class="img">
            </a> -->
            <div class="content">
              <div class="author">
                <a href="http://" class="avatar">
                  <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="作者头像">
                </a>
                <div class="info">
                  <a href="http://" class="nickname">阿哔有个帅阿呗</a>
                  <span class="time">2个小时以前</span>
                </div>
              </div>
              <a href="http://" class="title">我就是那个差点被花呗和分期折磨死的男孩子！</a>
              <p class="abstract">2017年12月26日  星期二  小雪 文＃阿呗 这世界上凡是能和钱挂钩的东西，都不能谈情谊。 我和阿籹站在天桥上，望着这繁华的城市，灯红酒绿的，突然觉得这世界真扭曲。 耳...</p>
              <div class="meta">
                <a class="collection-tag" href="#">日记-书信</a>
                <a href="http://"> <i class="icon ic-list-read"></i>2302</a>
                <a href="http://"> <i class="icon ic-list-comments"></i>41</a>
                <span> <i class="icon ic-list-like"></i>63</span>
              </div>
            </div>
          </li>
          <li class="arcticle">
            <!-- <a href="http://" class="wrap-img">
              <img src="../../assets/img/195046-3afdb53b041882d2.jpg" alt="文章简介图片" class="img">
            </a> -->
            <div class="content">
              <div class="author">
                <a href="http://" class="avatar">
                  <img src="../../assets/img/4ed54fce-9d7d-4788-ab34-f6c955758597.png" alt="作者头像">
                </a>
                <div class="info">
                  <a href="http://" class="nickname">阿哔有个帅阿呗</a>
                  <span class="time">2个小时以前</span>
                </div>
              </div>
              <a href="http://" class="title">我就是那个差点被花呗和分期折磨死的男孩子！</a>
              <p class="abstract">2017年12月26日  星期二  小雪 文＃阿呗 这世界上凡是能和钱挂钩的东西，都不能谈情谊。 我和阿籹站在天桥上，望着这繁华的城市，灯红酒绿的，突然觉得这世界真扭曲。 耳...</p>
              <div class="meta">
                <a class="collection-tag" href="#">日记-书信</a>
                <a href="http://"> <i class="icon ic-list-read"></i>2302</a>
                <a href="http://"> <i class="icon ic-list-comments"></i>41</a>
                <span> <i class="icon ic-list-like"></i>63</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="side-bar">
      <div class="board">
        <a href="#" class="topic-item border-o">
          <span class="avatar-link">
            <img src="../../assets/img/react.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">React</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/vue.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">Vue</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/es6.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">es6</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/nodejs.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">Nodejs</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/js.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">Js</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/html.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">HTML</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  data () {
    return {
      msg: 'template',
      swiperOption: {
        loop: true,
        speed: 500,
        autoplay: true,
        effect: 'fade',
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true,
          disabledClass: 'my-button-disabled',
          hiddenClass: 'my-button-hidden'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    this.fetchIndexData()
    // console.log(this.$root)
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    fetchIndexData () {
      let params = {
        pageNo: 1,
        pageSize: 10
      }
      this.$axios.get('/api/posts', params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '../../assets/style/mixin';
  @media (min-width:320px) and (max-width:767px){
    .container{
      width:100%;
      padding:78px 20px 20px;
      .main{
        margin:0 auto;
        width: 100%;
        .list-container{
          li.arcticle{
            min-height: 112px;
          }
          li.has-img{
            .wrap-img{
              bottom: 40px;
              margin-top: -58px;
              @include wh(125px,110px);
            }
            .content{
              padding-right: 135px;
            }
          }
        }
      }
      .side-bar{
        display: none;
      }
    }
  }
  @media (min-width:768px) and (max-width:992px){
    .container{
      max-width:750px;
      .main{
        margin:0 auto;
        width: 100%;
        .list-container{
          li.arcticle{
            min-height: 112px;
          }
          li.has-img{
            .wrap-img{
              bottom: 40px;
              margin-top: -58px;
              @include wh(125px,110px);
            }
            .content{
              padding-right: 135px;
            }
          }
        }
      }
      .side-bar{
        display: none;
      }
    }
  }
  @media (min-width:992px) {
    .container{
      max-width:960px;
      .main{
        width: 66.66667%;
        .list-container{
          li.arcticle{
            min-height: 140px;
          }
          li.has-img{
            .wrap-img{
              top: 50%;
              margin-top: -68px;
              @include wh(150px,120px);
            }
            .content{
              padding-right: 160px;
            }
          }
        }
      }
    }
  }
  .main{
    /*width: 66.66667%;*/
    padding:10px 0 0;
    .carousel{
      /*min-width: 640px;*/
      max-height: 270px;
      margin-bottom: 35px;
      border-radius: 10px;
      overflow: hidden;
      z-index: 1000;
      .swiper-button-prev,.swiper-button-next{
        display: none;
      }
      .slide-img{
        width: 100%;
/*        border-radius: 10px;
        border:0px solid #ddd;*/
        /*width: 640px;*/
      }
    }
    .carousel:hover{
      .swiper-button-prev,.swiper-button-next{
        display: block;
      }
    }
    .list-container{
      li.arcticle{
        position: relative;
        width: 100%;
        margin: 0 0 17px;
        padding: 0 2px 17px 0;
        border-bottom: 1px solid #f0f0f0;
        word-wrap: break-word;
        // min-height: 140px;
      }
      li{
        .wrap-img{
          position: absolute;
          right:0px;
          img{
            @include wh(100%,100%);
            border-radius: 4px;
            border: 1px solid #f0f0f0;
          }
        }
        .content{
          .author{
            margin-bottom: 14px;
            font-size: 13px;
            .avatar{
              display: inline-block;
              vertical-align: middle;
              @include wh(32px,32px);
              cursor: pointer;
              margin: 0 5px 0 0;
              img{
                @include wh(100%,100%);
                border: 1px solid #ddd;
                border-radius: 50%;
              }
            }
            .info{
              display: inline-block;
              vertical-align: middle;
              a.nickname{
                color: #333;
                vertical-align: middle
              }
              span{
                display: inline-block;
                padding-left: 3px;
                color: #969696;
                vertical-align: middle;
              }
            }
          }
          .title{
            margin: -7px 0 4px;
            @include font(18px,27px);
            font-weight: 700;
          }
          .abstract{
            margin: 0 0 8px;
            @include font(13px,24px);
          }
          .meta{
            padding-right: 0 !important;
            @include font(12px,20px);
            font-weight: 400;
            a{
              transition: .1s ease-in;
              margin-right: 10px;
              color: #b4b4b4;
              vertical-align: middle;
            }
            span{
              color: #b4b4b4;
              vertical-align: middle;
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
              background: url('../../assets/img/comment.png') no-repeat 0 0 ;
              background-size: 13px;
            }
            .ic-list-like{
              background: url('../../assets/img/like_icon.png') no-repeat 0 0 ;
              background-size: 13px;
            }
          }
        }
      }
    }
  }
  .side-bar{
    width: 29.16667%;
    margin-left: 4.16667%;
    padding-top:10px;
    .board-title{
      text-align: center;
      font-weight: 600;
      padding: 10px 0px;
    }
    .board{
      min-height: 228px;
      background-color: #f5f5f5;
      border-radius: 10px;
      animation:moveUp .5s linear;
      .topic-item{
        @include fja(flex-start,center );
        flex-flow: row nowrap;
        position: relative;
        width: 100%;
        border: 1px solid rgba(24, 124, 183, 0);
        border-radius: 10px;
        transition: all .5s;
        cursor: pointer;
        padding: 0 5px;
        .avatar-link{
          padding-left: 20px;
          .avatar-image{
            vertical-align: top;
            @include wh(30px, 30px)
          }
        }
      }
      .topic-item:hover{
        // border: 1px solid rgba(5, 161, 252, 0.7);
        border-radius: 10px;
        // background-color: rgba(0, 162, 255, 0.7);
        animation: moveLeft .8s ease-out 0.1s;
      }
      .topic-descr{
        padding: 0px 30px;
        .topic-title{
          @include sc(16px, #3e4545);
          transition: all .2s ease;
          font-weight: bold;
          line-height: 1.6;
        }
        .topic-meta{
          @include font(14px, 21px);
        }
      }
      .icon-arrow-right{
        @include absTR(12px,5px);
        @include wh(20px,20px);
        @include bis('../../assets/img/arrow_down.png',20px);
      }
    }
  }
  // 侧边栏动画
  @keyframes moveUp {
    0% {
      transform: translate(0,150px);
      background: rgba(255, 255, 255,0.5);
    }
    100% {
      transform: translate(0,0);
      background: rgba(255, 255, 255,1);
      }
  }
  @keyframes moveLeft {
    0% {
      transform: translate(0,0);
      background: rgba(255, 255, 255,0.1);
    }
    50% {
      transform: translate(100px,0);
      background: rgba(255, 255, 255, 0.938);
    }
    100% {
      transform: translate(0,0);
      background: #f5f5f5;
      }
  }

</style>

