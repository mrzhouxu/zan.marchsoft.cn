<template>
  <div id="app">
  <!-- <keep-alive>
    <router-view></router-view>
    </keep-alive> -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
// import { Indicator } from 'mint-ui';
export default {
  name: 'App',
  data(){
    return {
    }
  },
  watch: {
      // $route:{
      //     handler(val,old){
      //       Indicator.close();
      //     }
      // }
  },
  mounted(){
    
  }
}
</script>
