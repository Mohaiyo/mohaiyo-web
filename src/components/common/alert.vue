/*** @params
**** @title 标题，必选参数
**** @type  主题 默认为info
**** @description 辅助性文字。也可通过默认 slot 传入
**** @closable 是否可关闭 默认为true
**** @close-text 关闭按钮自定义文本
**** @show-icon 是否显示图标
***/
<template>
  <transition name="alert-fade">
    <div class="alert" :class="[ typeClass ]" v-show="visible">
      <i class="alert-icon iconfont" :class="[ iconClass, isBigIcon ]" v-if="showIcon"></i>
      <div class="alert-content">
        <span class="alert-title" :class="[ isBlodTitle ]" v-if="title">{{ title }}</span>
        <slot>
          <p class="alert-description" v-if="description">{{ description }}</p>
        </slot>
        <i class="alert-closebtn iconfont" :class="{ 'is-customed': closeText !== '', 'icon-close': closeText === ''}" v-show="closable" @click="close()">{{ closeText }}</i>
      </div>
    </div>
  </transition>
</template>

<script type="text/bable">
  const TYPE_CLASSES_MAP = {
    'success': 'icon-success1',
    'warning': 'icon-warn',
    'error': 'icon-error'
  }
  export default{
    name: 'Alert',

    props: {
      title: {
        type: String,
        required: true,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      closeText: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'info'
      },
      closable: {
        type: Boolean,
        default: true
      },
      showIcon: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        visible: true
      }
    },

    methods: {
      close () {
        this.visible = false
        this.$emit('close')
      }
    },

    computed: {
      typeClass () {
        return `alert-${ this.type }`
      },

      iconClass () {
        return TYPE_CLASSES_MAP[ this.type ] || 'icon-info'
      },

      isBigIcon () {
        return this.description ? 'is-big' : ''
      },

      isBlodTitle () {
        return this.description ? 'is-blod' : ''
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '../../assets/style/mixin';
    .alert{
      width: 100%;
      padding:8px 16px;
      margin:0;
      box-sizing: border-box;
      border-radius: 4px;
      position: relative;
      background-color: $wc;
      overflow: hidden;
      color:$wc;
      opacity: 1;
      display: table; //元素会作为块级表格来显示（类似 <table>），表格前后带有换行符。
      transition: opacity .2s;
      .alert-content{
        display: table-cell; //此元素会作为一个表格单元格显示（类似 <td> 和 <th>）
        padding:0 8px;
        .alert-description{
          color: $wc;
          font-size: 12px;
          margin: 5px 0;
        }
        .alert-title{
          @include font(13px, 20px);
          color: $wc;
          display: table-cell;
          vertical-align: middle;
        }
        .is-blod{
          font-weight: 700;
        }
        .alert-closebtn{
          @include sc(12px, $wc);
          @include absTR(12px, 15px);
          opacity: 1;
          cursor: pointer;
        }
        .is-customed{
          font-style: normal;
          font-size:13px;
          top: 9px;
        }
      }
      .alert-icon{
        font-size: 16px;
        width: 16px;
        display: table-cell;
        color: $wc;
        vertical-align: middle;
      }
      .is-big{
        font-size: 28px;
        width: 28px;
      }
    }
    .alert-success{
      background-color: #13ce66;
    }
    .alert-info{
      background-color: #50bfff;
    }
    .alert-warning{
      background-color: #f7ba2a;
    }
    .alert-error{
      background-color: #ff4949;
    }
    .alert-fade-enter,.alert-fade-leave-active{
      opacity: 0;
    }
</style>
