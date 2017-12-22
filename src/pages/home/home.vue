<template>
  <div class="container">
    <section class="main">
      <swiper :options="swiperOption" ref="mySwiper" class="carousel">
        <!-- slides -->
        <swiper-slide>
          <img src="../../assets/img/986f00c9a5ab4406b143b8985f925258bba06b9d.jpg" alt="" class="slide-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/d3935eb4e5c1859a3ffc564ccad0871ac477795f.jpg" alt="" class="slide-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/986f00c9a5ab4406b143b8985f925258bba06b9d.jpg" alt="" class="slide-img">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/d3935eb4e5c1859a3ffc564ccad0871ac477795f.jpg" alt="" class="slide-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
      <div class="">

      </div>
    </section>
    <section class="side-bar">
      <h3 class="board-title">文章分类</h3>
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
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/css.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">CSS</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/fe-webpack.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">Webpack</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
      </div>
      <h3 class="board-title">兴趣爱好</h3>
      <div class="board">
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/game_creat.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">游戏</h3>
            <p class="topic-meta">10 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/music-dance.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">音乐</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/movie.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">电影</h3>
            <p class="topic-meta">3 篇文章</p>
          </div>
          <i class="icon icon-arrow-right"></i>
        </a>
        <a href="#" class="topic-item">
          <span class="avatar-link">
            <img src="../../assets/img/photo.png" class="avatar-image">
          </span>
          <div class="topic-descr">
            <h3 class="topic-title">摄影</h3>
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
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @media (min-width:320px) and (max-width:767px){
    .container{
      width:100%;
      padding:78px 20px 20px;
      .main{
        margin:0 auto;
        width: 100%;
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
  }
  .side-bar{
    width: 29.16667%;
    margin-left: 4.16667%;
    .board-title{
      text-align: center;
      font-weight: 600;
      padding: 10px 0px;

    }
    .board{
/*      margin-top: -4px;
      padding-bottom: 4px;*/
      min-height: 228px;
      /*padding-top: 10px;*/
      background-color: #f5f5f5;
      // border:1px solid rgba(24, 124, 183, 0.7);
      border-radius: 10px;
      .topic-item{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-flow: row nowrap;
        position: relative;
        /*display: inline-block;*/
        width: 100%;
        border: 1px solid rgba(24, 124, 183, 0);
        border-radius: 10px;
        transition: all .5s;
        cursor: pointer;
        padding: 5px;
        .avatar-link{
          padding-left: 20px;
          .avatar-image{
            vertical-align: top;
            width: 40px;
            height: 40px;
          }
        }
      }
      .topic-item:hover{
        border: 1px solid rgba(24, 124, 183, 0.7);
        border-radius: 10px;
        background-color: #fff;
      }
      .topic-item:last-child{
        //  border-bottom:none;
      }
      .topic-descr{
        padding: 0px 30px;
        .topic-title{
          font-size: 16px;
          color: #3e4545;
          transition: all .2s ease;
          font-weight: bold;
          line-height: 1.6;
        }
        .topic-meta{
          font-size: 14px;
          line-height: 1.5;
        }
      }
      .icon-arrow-right{
        position: absolute;
        right: 5px;
        width: 20px;
        height: 20px;
        background: url(../../assets/img/arrow_down.png) no-repeat 0 0;
        background-size: 20px;
      }
    }
  }

</style>

