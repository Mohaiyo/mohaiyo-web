<template>
  <div>
    <nav-comp/>
    <router-view/>
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
</style>
