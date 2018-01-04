<template>
  <div class="container">
    <quill-editor v-model="content"
                  ref="myQuillEditor"
                  :options="editorOption">
    </quill-editor>
    <div class="submit btn">
      <input type="button" value="取消">
      <input type="button" value="发布文章">
    </div>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

import { quillEditor, Quill } from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)

export default {
  name: 'arcticle',
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
      }
    }
  },
  methods: {
    onEditorChange ({ quill, html, text }) {
      this.content = html
    },
    checkIfLogin () {
      this.$axios.get('/api/posts/create', {}).then(res => {
        let data = res.data
        if (data.status === 400) {
          this.$message({
            type: 'warning',
            message: data.message
          })
        } else {
          return true
        }
      })
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
  height: 550px;
  @include fja(flex-start, center);
  flex-flow: column nowrap;
  .submit{
    padding-top: 15px;
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
      // margin:80px 20px 0;
    }
  }
  .quill-editor,.quill-code {
    width: 100%;
    height: 76%;
    margin-bottom: 65px;
    .ql-container{
      height: 80% !important;
    }
  }
}

</style>
