<template>
  <div class="board">
    <a href="#" class="topic-item border-o">
      <span class="avatar-link">
        <img src="~assets/img/react.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">React</h3>
        <p class="topic-meta">3 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/vue.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">Vue</h3>
        <p class="topic-meta">3 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/es6.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">es6</h3>
        <p class="topic-meta">3 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/nodejs.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">Nodejs</h3>
        <p class="topic-meta">3 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/js.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">Js</h3>
        <p class="topic-meta">3 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
    <a href="#" class="topic-item">
      <span class="avatar-link">
        <img src="~assets/img/html.png" class="avatar-image">
      </span>
      <div class="topic-descr">
        <h3 class="topic-title">HTML</h3>
        <p class="topic-meta">3 篇文章</p>
      </div>
      <i class="icon icon-arrow-right"></i>
    </a>
  </div>
</template>

<script>
export default {
  name:'categoryList',
  data() {
    return {
      msg: '分类列表'
    }
  },
  props: {
    categoryLists: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>
