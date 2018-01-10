<template>
  <div class="foot-container">
    <div>
      <span>Mohaiyo</span>
      <router-link to="https://github.com/Mohaiyo" class="link">@github</router-link>
      <span>纯手工搭建的博客</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footComp',
  data () {
    return {}
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
  .link{
    font-size: 14px;
    color: #007ac9;
  }
</style>

