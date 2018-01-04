<template>
  <div class="foot-container">
    我是底部，还没想好写什么
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      msg: 'template'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .foot-container{
    margin:0px auto;
    padding:20px 10px;
    text-align: center;
  }
  @media (min-width:320px) and (max-width:767px){
    .foot-container{
      width:100%;
      padding:10px 20px 20px;
    }
  }
  @media (min-width:768px) and (max-width:992px){
    .foot-container{
      max-width:750px;
    }
  }
  @media (min-width:992px) {
    .foot-container{
      max-width:960px;
    }
  }
</style>

