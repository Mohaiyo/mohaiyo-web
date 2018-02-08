<template>
  <div class="container">
    <section class="main">
      <div class="about">
        <h3 class="title">关于作者</h3>
        <div class="about-item">
            <span class="item-label">姓名:</span>
            <p class="item-descr">梁伟业</p>
        </div>
        <div class="about-item">
            <span class="item-label">年龄:</span>
            <p class="item-descr">1991.08</p>
        </div>
        <div class="about-item">
            <span class="item-label">职业:</span>
            <p class="item-descr">前端开发</p>
        </div>
        <div class="about-item">
            <span class="item-label">GitHub:</span>
            <a target="blank" href="https://www.github.com/mohaiyo" class="item-descr item-color">@mohaiyo</a>
        </div>
        <div class="about-item">
            <span class="item-label">技能:</span>
            <p class="item-descr">
              <ul class="list">
                <li class="list-item">HTML5 + CSS3</li>
                <li class="list-item">Vue</li>
                <li class="list-item">ES6</li>
                <li class="list-item">Nodejs</li>
                <li class="list-item">Webpack</li>
                <li class="list-item">jQuery</li>
              </ul>
            </p>
        </div>
        <h3 class="title">关于网站</h3>
        <div class="website-descr">
          <p>本站服务端采用nodejs + express + mongoDB 搭建, 客户端采用 Vue + sass + webpack 搭建</p>
          <p>网站分成前台和后台, 前台采用SPA模式, 后台还在开发中</p>
          <p>主要功能包括: 注册登录, 用户, 分类, 文章, 评论, 文章点赞等</p>
          <p>主要技术栈: express,nodejs, mongoose, Vue, vue-router, vux, webpack, babel, eslint等</p>
        </div>
      </div>
    </section>
    <section class="side-bar">
      <category-list :cate-lists="cateLists"></category-list>
    </section>
  </div>
</template>

<script>
import categoryList from 'components/common/categoryList'
export default {
  name: '',
  data () {
    return {
      msg: 'template',
      cateLists: []
    }
  },
  components: {
    categoryList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  @import '~assets/style/mixin';
  .main{
    background-color: #f5f5f5;
    // border: 0px solid #000;
    border-radius: 10px;
    padding: 25px;
    .title{
      @include sc(16px, #3aced5);
      padding-bottom: 10px;
      font-weight: 700;
    }
    .about-item{
      @include fja(flex-start, flex-start);
      padding-bottom: 10px;
      .item-label{
        color: #333;
        display: inline-block;
        width:75px;
      }
      .item-descr{
        color: #333;
        line-height: 25px;
      }
      .item-color{
        @include sc(16px, #3aced5);
      }
    }
    .website-descr{
      line-height: 30px;
    }
  }
  .side-bar{
    width: 29.16667%;
    margin-left: 4.16667%;
    padding-top:10px;
  }
</style>

