<template>
  <div class="container">
    <tabs :options="{ useUrlFragment: false }">
      <tab name="闲钱宝">
        <a href="https://www.51xqb.com/">
          <img src="~assets/img/xqb.png" alt="xqb">
        </a>
      </tab>
      <tab name="投融通运管系统">
        <a href="http://103.243.255.169:10002">
          <img src="~assets/img/CIAFinside.png" alt="CIAFinside">
        </a>
      </tab>
      <tab name="CMB部门信息管理系统">
        <img src="~assets/img/rank.jpg" alt="rank" style="width:31%">
        <img src="~assets/img/cmb_gm.jpg" alt="cmb_gm" style="width:31%">
        <img src="~assets/img/cmb_quanlity.jpg" alt="cmb_quanlity" style="width:31%">
      </tab>
      <tab name="投融通平台">
        <a href="https://103.243.255.136/index">
          <img src="~assets/img/ciafweb.png" alt="ciafweb">
        </a>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { Tabs, Tab } from 'vue-tabs-component'
export default {
  name: '',
  data () {
    return {
      msg: 'template'
    }
  },
  components: {
    Tabs,
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='css'>
.tabs-component {
  margin: 20px 0;
  width: 100%;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 600px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  /* border-bottom: dotted 1px #ddd; */
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 600px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 5px 5px 0 0;
    margin-right: .5em;
    transform: translateY(0px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
    box-shadow: 0 0 10px rgba(43, 15, 204, 0.25) inset;
  }
  .tabs-component-tab.is-active>a {
    color:#ea6f5a
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 600px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 4em 2em;
  }
}
</style>
