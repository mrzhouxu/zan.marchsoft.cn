<template>
  <div>
    <mt-header title="购买点赞币"></mt-header>
      <router-link to="../home/center">
          <div class="back"><img src="../../../assets/img/back.png"></div>
      </router-link>
      <div class="purchase">
        <mt-field label="工号" placeholder="请输入" v-model="name"></mt-field>
        <!-- <mt-field label="张数" id="txtAmount" value=0 onkeyup="checkInt(this);" onpaste="checkInt(this);" oncut="checkInt(this);" ondrop="checkInt(this);" onchange="checkInt(this);" placeholder="请输入" type="email"></mt-field> -->
        <!-- <input  class=""> -->
        <mt-field v-model="mout" label="张数" placeholder="请输入"></mt-field>
        <!-- <div></div> -->
        <!-- <input v-model="key*2"> -->
        <!-- <input id=txtTotal  style="border-right-width:0px;margin-right:0px;" readonly> 
        <input style="border-left-width:0px;margin-left:-4px;width:18px" value="￥" readonly> -->
      </div>
        <div class="money">￥{{mout*2}}</div>
      <mt-button class="button" type="primary" size="large" @click.native = "payment ">支付</mt-button>
      <div class="money"></div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      mout: "",
      name:"",
      // key:"",
    }
  },
  methods:{
    jump(url){
          this.$router.push(url);
      },
    payment: function(){
      var that = this;
      if (this.name=='') {
        Toast("请输入姓名");
        return;
      } else if (this.key=='') {
        Toast("请输入张数");
        return;
      }else{
        axios.get('/alipay/wappay',{
          total_amount:that.mout,
          total_name:that.name,
        })
          .then(function (response) {
            var judge = response.data;
            console.log(judge);
            if (judge.code==0) {
              console.log(judge.code);
              Toast(judge.msg);
              // that.$router.push({ path: '/home/record' });
            } else {
              Toast(judge.msg);
            }; 
          })
          .catch(function (error) {
              // console.log(error);
          }); 
      }
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
    .purchase {
      margin: 10px 0 0 0;
    }
    .button {
      margin: 10px 0 0 0;
      font-size: 16px;
      width: 300px;
      margin: 20px auto;
    }
    .money {
      text-align: right;
      margin: 5px 5px 0 0;
      color: orange;
    }
</style>
