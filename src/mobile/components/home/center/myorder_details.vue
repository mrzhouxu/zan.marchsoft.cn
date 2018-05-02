<template>
  <div>
    <mt-header fixed title="详情"></mt-header>
        <router-link to="../home/center">
            <div class="back"><img src="../../../assets/img/back.png"></div>
        </router-link>
        <div class="order-bg">
            <div class="order-userpic">
                <img src="../../../assets/img/order-userpic.png">
            </div>
            <div class="order-userinfor">
                <p>尤奇勤</p>
                <p>2016010226</p>
            </div>
        </div>
        <div class="details">
          <p>[原因]:金额不足金额不足金额不足金额不足金额不足金额不足金额不足</p>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>
<style scoped>
  .back {
        z-index: 1;
        position: absolute;
        top: 8px;
        left: 10px;
    }
    .back>img {
        width: 25px;
    }
    .order-bg {
        height: 110px;
        display: flex;
        align-items:center;
        margin: 40px 0 0 0;
        background: url(../../../assets/img/order-bg.png) no-repeat center center;
        background-size: 100% 100%;
    }
    .order-bg img {
        width: 50px;
    }
</style>
