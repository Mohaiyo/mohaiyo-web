<template>
  <div>
    <nav-comp/>
    <transition name="main-fade" mode="out-in">
      <router-view/>
    </transition>
    <foot-comp/>
  </div>
</template>

<script>
import navComp from '@/components/header/navComp.vue'
import footComp from '@/components/footer/footComp.vue'
export default {
  name: '',
  data () {
    return {
      msg: 'template'
    }
  },
  components: {
    navComp,
    footComp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-fade-enter-active, .main-fade-leave-active {
        transition: all .3s;
    }
    .main-fade-enter, .main-fade-leave-to {
        opacity: 0;
        transform:translate3d(0,100px,0);
    }
    .main-fade-enter-to, .main-fade-leave {
        opacity: 1;
        transform:translate3d(0,0,0);
    }
</style>
