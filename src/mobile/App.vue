<template>
  <div id="app">
  <!-- <keep-alive>
    <router-view></router-view>
    </keep-alive> -->
    <keep-alive>
        <router-view v-if="($route.meta.keepAlive)"></router-view>
    </keep-alive>
    <router-view v-if="(!$route.meta.keepAlive)"></router-view>
  </div>
</template>

<script>
// import { Indicator } from 'mint-ui';
export default {
  name: 'App',
  data(){
    return {
      userInfo:{},
    }
  },
  watch: {
      // $route:{
      //     handler(val,old){
      //       Indicator.close();
      //     }
      // }
  },
  methods:{
    // getInfo(){
    //   if(this.userInfo.name==null){
    //       axios.get("/user/getInfo").then(res=>{
    //           this.userInfo = res.data.result;
    //       }).catch(err=>{

    //       })
    //   }
          
    //   }
  },
  mounted(){
    // this.getInfo();
  }
}
</script>
