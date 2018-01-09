<template>
  <div class="container">
    <form class="form" @submit.prevent="submit">
      <div class="title-wrap">
        <b class="pretend">标题：</b>
        <input type="text" placeholder="请输入文章标题" class="title"/>
      </div>
      <div class="source">
        <div class="input-wrap">
          <input name="source" type="radio" value="1" id="original" /><label for="original">原创</label>
          <input name="source" type="radio" value="2" id="transfer" /><label for="transfer">转载</label>
          <input name="source" type="radio" value="3" id="serial" /><label for="serial">连载</label>
        </div>
        <div class="select-wrap">
          <select name="categrory" id="category" v-model="select">
            <option value="" disabled>请选择文章分类</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
            <option value="Nodejs">Nodejs</option>
            <option value="Webpack">Webpack</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
            <option value="7">其他  </option>
          </select>
        </div>
      </div>

    </form>
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption">
    </quill-editor>
    <div class="submit btn">
      <input type="button" value="取消" @click="cancel">
      <input type="button" value="发布文章" @click="submit">
    </div>
  </div>
</template>

<script>
// import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

import { quillEditor, Quill } from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)

export default {
  name: 'writeArcticle',
  data () {
    return {
      content: '',
      editorOption: {
        // debug: 'info',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'font': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            ['clean'],
            ['link', 'image']
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageDrop: true,
          imageResize: {
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          }
        },
        placeholder: '请输入文章内容',
        theme: 'snow'
      },
      select: ''
    }
  },
  methods: {
    onEditorChange ({ quill, html, text }) {
      this.content = html
    },
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
      console.log('提交文章！')
    },
    cancel () {
      this.$router.go(-1)
    }
  },
  computed: {
    editor () {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted () {
    this.checkIfLogin()
  },
  components: {
    quillEditor
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../assets/style/mixin';
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
      .pretend{
        @include sc(18px, #007ac9);
        @include absTL(13px, 20px)
      }
      .title{
        @include wh(100%,50px);
        border: 1px solid #007ac9;
        @include sc(18px,#000);
        padding: 0 20px;
        padding-left:70px;
      }
    }
    .source{
      margin-top:20px;
      @include sc(18px,#007ac9);
      @include fja(space-between, center);
      // line-height: 18px;
      input[type="radio"] + label::before {
        content: "\a0"; /*不换行空格*/
        display: inline-block;
        vertical-align: middle;
        font-size: 18px;
        width: 1em;
        height: 1em;
        margin-right: .5em;
        border-radius: 50%;
        border: 1px solid #007ac9;
        text-indent: .15em;
        line-height: 1;
      }
      input[type="radio"]:checked + label::before {
        background-color: #007ac9;
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
        border-radius: 5px;
        //盒子阴影修饰作用,自己随意
        box-shadow: 0 0 5px #007ac9;
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
          @include sc(16px,#000);
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

  }
  .submit{
    @include fja(center,center);
    margin-top: 85px;
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
      background-color: #007ac9;
      border: 2px solid #007ac9;
      color: #fff;
      padding: 9.6px 19.2px;
      font-size: 10px;
      margin: 0 20px;
    }
  }
  .quill-editor,.quill-code {
    width: 100%;
    height:200px;
    margin: 25px auto;
    .ql-container{
      height: 200px !important;
    }
  }
}

</style>
