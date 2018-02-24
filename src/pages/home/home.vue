<template>
  <div class="container">
    <section class="main">
      <!-- 轮播图 -->
      <swiper :options="swiperOption" ref="mySwiper" class="carousel">
        <!-- slides -->
        <swiper-slide>
          <img src="~assets/img/986f00c9a5ab4406b143b8985f925258bba06b9d.jpg" alt="" class="slide-img">
        </swiper-slide>
        <swiper-slide>
          <img src="~assets/img/d3935eb4e5c1859a3ffc564ccad0871ac477795f.jpg" alt="" class="slide-img">
        </swiper-slide>
        <swiper-slide>
          <img src="~assets/img/8f6f175fdd264241c93152431e25c4a46c2434ee.jpg" alt="" class="slide-img">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
      </swiper>
      <!-- 文章列表模块 -->
      <article-list :post-lists="postLists"></article-list>
    </section>
    <section class="side-bar">
      <category-list :cate-lists="cateLists" @getCateLists="getCateLists(id)"></category-list>
      <!-- <date-picker v-model="value1" lang="zh"></date-picker> -->
    </section>

  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import articleList from 'components/common/articleList'
import categoryList from 'components/common/categoryList'
// import datePicker from 'components/common/datepicker/index.js'
export default {
  name: 'home',
  data () {
    return {
      postLists: [],
      cateLists: [],
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
      },
      value1: ''
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  created () {
    this.fetchIndexData()
    this.queryCateLists()
  },
  components: {
    swiper,
    swiperSlide,
    articleList,
    categoryList
    // datePicker
  },
  methods: {
    fetchIndexData () {
      let params = {
        pageNo: 1,
        pageSize: 10
      }
      this.$axios.get('/posts', params).then(res => {
        if (res.code === 200) {
          this.postLists = res.data.postLists.map(item => {
            if (item.content.length > 170) {
              item.content = item.content.substr(0, 170) + '...'
            }
            return item
          })
        }
      })
    },
    queryCateLists () {
      let params = {}
      this.$axios.get('/categorys/getLists', params).then(res => {
        this.cateLists = res.cateLists
      })
    },
    getCateLists (id) {
      console.log(id)
      let params = {
        pageNo: 1,
        pageSize: 10,
        categoryId: id
      }
      this.$axios.get('/posts', params).then(res => {
        if (res.code === 200) {
          this.postLists = res.data.postLists.map(item => {
            if (item.content.length > 240) {
              item.content = item.content.substr(0, 240) + '...'
            }
            return item
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  @import '~assets/style/mixin';
  @media (min-width:320px) and (max-width:767px){
    .container{
      width:100%;
      padding:78px 20px 20px;
      position: relative;
      z-index: 1110;
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
      .side-bar{
        width: 29.16667%;
        margin-left: 4.16667%;
        padding-top:10px;
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
              background: url('~assets/img/read.png') no-repeat 0 -2px ;
              background-size: 15px;
            }
            .ic-list-comments{
              background: url('~assets/img/comment.png') no-repeat 0 0 ;
              background-size: 13px;
            }
            .ic-list-like{
              background: url('~assets/img/like_icon.png') no-repeat 0 0 ;
              background-size: 13px;
            }
          }
        }
      }
      .no-data{
        text-align: center;
      }
    }
  }
</style>

