<template>
  <transition name="message-fade">
    <div class="message" :class="customClass" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer">
      <div class="message-group" :class="{ 'is-with-icon': iconClass }">
        <p><i class="message-icon" :class="iconClass" v-if="iconClass"></i>{{ message }}</p>
        <div class="message-closeBtn iconfont icon-close" @click="close"></div>
      </div>
    </div>
  </transition>
</template>

<script type="text/bable">
  export default {
    name: "message",
    data () {

    }
  }
</script>
