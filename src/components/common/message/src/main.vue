<template>
  <transition name="message-fade">
    <div
      :class="[
        'message',
        type && !iconClass ? `message--${ type }` : '',
        center ? 'is-center' : '',
        customClass]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert"
    >
      <i :class="iconClass" v-if="iconClass"></i>
      <i :class="typeClass" v-else></i>
      <slot>
        <p v-if="!dangerouslyUseHTMLString" class="message__content">{{ message }}</p>
        <p v-else v-html="message" class="message__content"></p>
      </slot>
      <i v-if="showClose" class="iconfont message__closeBtn icon-close" @click="close"></i>
    </div>
  </transition>
</template>

<script type="text/babel">
  const typeMap = {
    success: 'success1',
    info: 'info',
    warning: 'warn',
    error: 'error'
  }

  export default {
    data () {
      return {
        visible: false,
        message: '',
        duration: 3000,
        type: 'info',
        iconClass: '',
        customClass: '',
        onClose: null,
        showClose: false,
        closed: false,
        timer: null,
        dangerouslyUseHTMLString: false,
        center: false
      }
    },

    computed: {
      iconWrapClass () {
        const classes = ['message__icon']
        if (this.type && !this.iconClass) {
          classes.push(`message__icon--${this.type}`)
        }
        return classes
      },

      typeClass () {
        return this.type && !this.iconClass
          ? `message__icon iconfont icon-${typeMap[this.type]}`
          : ''
      }
    },

    watch: {
      closed (newVal) {
        if (newVal) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },

    methods: {
      destroyElement () {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },

      close () {
        this.closed = true
        if (typeof this.onClose === 'function') {
          this.onClose(this)
        }
      },

      clearTimer () {
        clearTimeout(this.timer)
      },

      startTimer () {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      },
      keydown (e) {
        if (e.keyCode === 27) { // esc关闭消息
          if (!this.closed) {
            this.close()
          }
        }
      }
    },
    mounted () {
      this.startTimer()
      document.addEventListener('keydown', this.keydown)
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.keydown)
    }
  }
</script>

<style scoped>
  .message__closeBtn:focus,.message__content:focus{
    outline-width:0
  }
  .message{
    min-width:380px;
    box-sizing:border-box;
    border-radius:4px;
    border-width:1px;
    border-style:solid;
    border-color:#ebeef5;
    position:fixed;
    left:50%;
    top:20px;
    -webkit-transform:translateX(-50%); /*处理兼容性*/
    transform:translateX(-50%);
    background-color:#edf2fc;
    -webkit-transition:opacity .3s,-webkit-transform .4s; /*处理兼容性*/
    transition:opacity .3s,-webkit-transform .4s; /*处理兼容性*/
    transition:opacity .3s,transform .4s; /*处理兼容性*/
    transition:opacity .3s,transform .4s,-webkit-transform .4s;
    overflow:hidden;
    padding:15px 15px 15px 20px;
    display:-webkit-box; /*处理兼容性*/
    display:-ms-flexbox; /*处理兼容性*/
    display:flex;
    -webkit-box-align:center; /*处理兼容性*/
    -ms-flex-align:center; /*处理兼容性*/
    align-items:center
  }
  .message.is-center{
    -webkit-box-pack:center;
    -ms-flex-pack:center;
    justify-content:center
  }
  .message p{
    margin:0
  }
  .message--info .message__content{
    color:#909399
  }
  .message--success{
    background-color:#f0f9eb;
    border-color:#e1f3d8
  }
  .message--success .message__content{
    color:#67c23a
  }
  .message--warning{
    background-color:#fdf6ec;
    border-color:#faecd8
  }
  .message--warning .message__content{
    color:#e6a23c
  }
  .message--error{
    background-color:#fef0f0;
    border-color:#fde2e2
  }
  .message--error .message__content{
    color:#f56c6c
  }
  .message__icon{
    margin-right:10px
  }
  .message__content{
    padding:0;
    font-size:14px;
    line-height:1
  }
  .message__closeBtn{
    position:absolute;
    top:50%;
    right:15px;
    -webkit-transform:translateY(-50%); /*处理兼容性*/
    transform:translateY(-50%); /*处理兼容性*/
    cursor:pointer;
    color:#c0c4cc;
    font-size:16px
  }
  .message__closeBtn:hover{
    color:#909399
  }
  .message .icon-success1{
    color:#67c23a
  }
  .message .icon-error{
    color:#f56c6c
  }
  .message .icon-info{
    color:#909399
  }.message .icon-warn{
    color:#e6a23c
  }
  .message-fade-enter,.message-fade-leave-active{
    opacity:0;
    -webkit-transform:translate(-50%,-100%); /*处理兼容性*/
    transform:translate(-50%,-100%)
  }
</style>
