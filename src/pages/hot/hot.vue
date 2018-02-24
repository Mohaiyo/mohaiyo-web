<template>
  <div class="container">
    <section class="main">
      <!-- 热门文章列表模块 -->
      <article-list :post-lists="postLists"></article-list>
    </section>
    <section class="side-bar">
      <category-list :cate-lists="cateLists" @getCateLists="getCateLists"></category-list>
    </section>
  </div>
</template>

<script>
import articleList from 'components/common/articleList'
import categoryList from 'components/common/categoryList'
export default {
  name: '',
  data () {
    return {
      postLists: [],
      cateLists: []
    }
  },
  mounted () {
    this.fetchHotData()
    this.queryCateLists()
  },
  components: {
    articleList,
    categoryList
  },
  methods: {
    fetchHotData () {
      let params = {
        pageNo: 1,
        pageSize: 10
      }
      this.$axios.get('/posts/hot', params).then(res => {
        this.postLists = res.data.hotLists.map(item => {
          if (item.content.length > 170) {
            item.content = item.content.substr(0, 170) + '...'
          }
          return item
        })
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
<style scoped lang="scss">
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
</style>
