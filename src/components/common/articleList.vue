<template>
  <div class="list-container">
    <ul class="note-list" v-if="postLists.length > 0">
      <li class="arcticle" v-for="item of postLists" :key="item._id">
        <div class="content">
          <div class="author">
            <router-link :to="{ name: 'articlePage', params: { arcticlId: item._id }}" class="avatar">
              <img src="~assets/img/150f2089-9aab-4873-8e06-530c8a1bc14a.png" alt="作者头像">
            </router-link>
            <div class="info">
              <router-link :to="{ name: 'articlePage', params: { arcticlId: item._id }}" class="nickname">{{ item.author.username }}</router-link>
              <span class="time">{{ formatTime(item.createdAt) }}</span>
            </div>
          </div>
          <router-link :to="{ name: 'articlePage', params: { arcticlId: item._id }}" class="title">{{ item.title }}</router-link>
          <p class="abstract">{{ item.content }}</p>
          <div class="meta">
            <router-link class="collection-tag" :to="{ name: 'articlePage', params: { arcticlId: item._id }}">{{ item.category_name }}</router-link>
            <router-link :to="{ name: 'articlePage', params: { arcticlId: item._id }}"> <i class="icon ic-list-read"></i>{{ item.review }}</router-link>
            <router-link :to="{ name: 'articlePage', params: { arcticlId: item._id }}"> <i class="icon ic-list-comments"></i>{{ item.comments.length }}</router-link>
            <span> <i class="icon ic-list-like"></i>{{ item.like.num }}</span>
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="no-data">
      <span>暂无数据~~</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'articleList',
  data () {
    return {
      msg: 'article-page'
    }
  },
  props: {
    postLists: {
      type: Array,
      required: true,
      default: []
    }
  },
  methods: {
    formatTime (time) {
      return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>

<style scoped lang='scss'>
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
    }
  }
  .main{
    /*width: 66.66667%;*/
    padding:10px 0 0;
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
