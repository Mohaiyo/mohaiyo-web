<template>
  <div class="container">
    <section class="main">
      <swiper :options="swiperOption" ref="mySwiper" class="carousel">
        <!-- slides -->
        <swiper-slide>
          <img src="../../assets/img/986f00c9a5ab4406b143b8985f925258bba06b9d.jpg" alt="" width="625px" height="270px">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/d3935eb4e5c1859a3ffc564ccad0871ac477795f.jpg" alt="" width="625px" height="270px">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
    </section>
    <section class="side-bar">侧边栏</section>
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
  .container{
    padding-top:78px;
    margin:0px auto;
    display: flex;
    flex-flow: row nowrap;
  }
  @media (min-width:320px) and (max-width:767px){
    .container{
      width:100%;
      padding:78px 20px 20px;
      .main{
        margin:0 auto;
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
      }
      .side-bar{
        display: none;
      }
    }
  }
  @media (min-width:992px) {
    .container{
      max-width:960px;
    }
  }
  .main{
    padding:10px 0 0 15px;
    .carousel{
      max-width: 625px;
      max-height: 270px;
      margin-bottom: 35px;
      border-radius: 6px;
      overflow: hidden;
      z-index: 1000;
      .swiper-button-prev,.swiper-button-next{
        display: none;
      }
    }
    .carousel:hover{
      .swiper-button-prev,.swiper-button-next{
        display: block;
      }
    }
  }

</style>

