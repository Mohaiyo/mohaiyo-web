<template>
  <div class="board">
    <a href="#" class="topic-item border-o">
      <span class="avatar-link">
        <img src="~assets/img/circel_cate.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">React</h3>
        <p class="topic-meta">3 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/circel_cate.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">Vue</h3>
        <p class="topic-meta">10 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/circel_cate.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">es6</h3>
        <p class="topic-meta">20 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/circel_cate.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">Nodejs</h3>
        <p class="topic-meta">30 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/circel_cate.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">Js</h3>
        <p class="topic-meta">50 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/circel_cate.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">HTML</h3>
        <p class="topic-meta">20 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'categoryList',
  data () {
    return {
      msg: '分类列表'
    }
  },
  props: {
    cateLists: {
      type: Array,
      // required: true,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '~assets/style/mixin';
  .side-bar{
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
        @include bis('~assets/img/arrow_down.png',20px);
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
