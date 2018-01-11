<template>
  <div class="container">
    <form class="form" @submit.prevent="submit">
      <div class="title-wrap">
        <b class="pretend">标题：</b>
        <input type="text" placeholder="文章标题,长度在100个字符以内哦！" class="title" v-model="title"/>
      </div>
      <div class="source">
        <div class="input-wrap">
          <input name="source" type="radio" value="1" id="original"  v-model="source"/><label for="original">原创</label>
          <input name="source" type="radio" value="2" id="transfer" v-model="source"/><label for="transfer">转载</label>
          <input name="source" type="radio" value="3" id="serial" v-model="source"/><label for="serial">连载</label>
        </div>
        <input v-show="source == 2" type="text" name="link" placeholder="请输入转载链接"  class="link"  v-model="link"/>
        <div class="select-wrap">
          <select name="categrory" id="category" v-model="select">
            <option value="" disabled>请选择文章分类</option>
            <option value="58d62644c1a5bd0001672cc5">React</option>
            <option value="58d626a9c1a5bd0001672cc9">Vue</option>
            <option value="58d6270bc1a5bd0001672ccd">Nodejs</option>
          </select>
        </div>
      </div>
    </form>
    <editor @getValue="getValue"/>
    <div class="submit btn">
      <input type="button" value="取消" @click="cancel">
      <input type="button" value="发布文章" @click="submit">
    </div>
  </div>
</template>

<script>
import editor from '@/components/common/editor'
export default {
  name: 'writeArcticle',
  data () {
    return {
      content: '',
      select: '',
      title: '',
      source: '1',
      link: ''
    }
  },
  methods: {
    checkIfLogin () {
      this.$axios.get('/api/posts/create', {}).then(res => {
        let data = res
        if (data.code === 400) {
          this.$message({
            type: 'warning',
            message: data.message
          })
        } else {
          return true
        }
      })
    },
    submit () {
      if (!this.title || !this.source || !this.select || !this.content) {
        this.$message({
          type: 'error',
          message: '你好像还有表单没有填写哦！'
        })

        return false
      }
      let params = {
        title: this.title,
        source: this.source,
        categoryId: this.select,
        content: this.content,
        link: this.link
      }
      this.$axios.post('/api/posts/create', params).then(res => {
        let data = res
        if (data.code === 200) {
          this.$message({
            type: 'success',
            message: data.message
          })
        }
      })
    },
    cancel () {
      this.$router.go(-1)
    },
    getValue (value) {
      this.content = value
    }
  },
  mounted () {
    this.checkIfLogin()
  },
  components: {
    editor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/style/mixin';
$bule: #007ac0;
.container{
  // height: 550px;
  display: table;
  input,select,option{
    outline: none;
  }
  .form{
    display: table;
    width:100%;
    // @include wh(100%,200px);
    .title-wrap{
      position: relative;
      box-shadow:0 0 3px;
      .pretend{
        @include sc(15px, $blue);
        @include absTL(10px, 18px)
      }
      .title{
        @include wh(100%,40px);
        border: 1px solid $blue;
        border-radius:3px;
        @include sc(15px,#000);
        font-weight: 700;
        padding: 0 20px;
        padding-left:70px;
      }
    }
    .source{
      margin-top:20px;
      @include sc(16px,$blue);
      @include fja(space-between, center);
      // line-height: 18px;
      input[type="radio"] + label::before {
        content: "\a0"; /*不换行空格*/
        display: inline-block;
        vertical-align: middle;
        font-size: 16px;
        width: 1em;
        height: 1em;
        margin-right: .5em;
        border-radius: 50%;
        border: 1px solid $blue;
        text-indent: .15em;
        line-height: 1;
        box-shadow: 0 0 5px $blue;
      }
      input[type="radio"]:checked + label::before {
        background-color: $blue;
        background-clip: content-box;
        padding: .2em;
      }
      input[type="radio"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
      }
      .select-wrap{
        //用div的样式代替select的样式
        width: 200px;
        height: 40px;
        // border-radius: 5px;
        //盒子阴影修饰作用,自己随意
        box-shadow: 0 0 5px $blue;
        position: relative;
        select{
          //清除select的边框样式
          border: none;
          //清除select聚焦时候的边框颜色
          outline: none;
          //将select的宽高等于div的宽高
          width: 100%;
          height: 40px;
          line-height: 40px;
          //隐藏select的下拉图标
          -webkit-appearance: none;
          -moz-appearance: none;
                    // appearance: none;
          //通过padding-left的值让文字居中
          padding-left: 20px;
          @include sc(15px,#000);
          option{
            height: 30px;
            line-height: 30px;
          }
        }
        &:after{
          content: "";
          width: 18px;
          height: 18px;
          background: url(../../assets/img/arrow-drop-down.png) no-repeat center;
          //通过定位将图标放在合适的位置
          position: absolute;
          right: 10px;
          top: 55%;
          transform: translateY(-50%);
          //给自定义的图标实现点击下来功能
          pointer-events: none;
        }
      }
    }
    .link{
      border:1px solid $blue;
      border-radius:4px;
      @include wh(30%,40px);
      padding: 0 20px;
      @include sc(15px,$blue);
    }
  }
  .submit{
    @include fja(center,center);
    input{
      display: inline-block;
      text-decoration: none;
      text-align: center;
      font-weight: 600;
      line-height: 1;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border-radius: 4px;
      transition: all .2s ease-in-out;
      background-color: $blue;
      border: 2px solid $blue;
      color: #fff;
      padding: 9.6px 19.2px;
      font-size: 10px;
      margin: 0 20px;
    }
  }
}

</style>
