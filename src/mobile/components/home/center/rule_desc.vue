<template>
  <div>
     <mt-header title="规则说明"></mt-header>
      <router-link to="../home/center">
          <div class="back"><img src="../../../assets/img/back.png"></div>
      </router-link>
      <div class="apply-bg">
      </div>
      <div>
        <p class="rule"><span>规则</span>说明</p>
        <div class="rule-desc"> 
          <p><span>要求：</span>职责所在不能点赞（除了做得特别优秀的）不私下串通，相互交换。</p>
          <p><span>更新：</span>每周六晚22:00更新三月币。</p>
          <p><span>兑换：</span>随时随地……</p>
          <p><span>兑换物品：</span>假期（一张两小时，两张半天，五张一天）零食，水，文具。</p>
          <p><span>特别说明：</span>兑换（假期）时需首先对组长说明，组长给徐红说明，并在当晚将点赞币交给徐红</p>
        </div>
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
    jump(url){
          this.$router.push(url);
      }
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
    .apply-bg {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
        background: url(../../../assets/img/rule-desc.png) no-repeat center center;
        background-size: 100% 100%;
    }


    /*匿名详情*/
    .rule {
      font-size: 15px;
    }
    .rule span{
      font-size: 15px;
      color: red;
    }
    .rule-desc p{
      font-size: 12px;
      line-height: 20px;
      margin: 25px 0 0 0;

    }
    .rule-desc span{
      font-size: 14px;
      font-weight: 550;
    }


</style>