<template>
  <div> 
      <mt-header fixed title="申请点赞币"></mt-header>
      <router-link to="../home/center">
          <div class="back"><img src="../../../assets/img/back.png"></div>
      </router-link>
      <div class="apply-bg">
        <p>点赞币申请开放啦！</p>
      </div>
      <div class="apply-infor">
        <p class="apply"><span>申请</span>点赞币</p>
        <div class="type">
          <p>*</p>
          <p>申请类型</p>
          <p v-on:click="eject_applytype">></p>
          <mt-popup v-model="popupVisible">
            <mt-radio class="radio"
              v-model="value"
              :options="options" @change="check">
            </mt-radio>
          </mt-popup>
        </div>
        <p class="about">关于申请</p>
        <div v-for="n in data" class="apply-userinfor">
          <div class="name">
            <p>*</p>
            <mt-field label="姓名" v-model="name" placeholder="请输入"></mt-field>
          </div>
          <div class="number">
            <p>*</p>
            <mt-field label="张数" v-model="mout" placeholder="请输入"></mt-field>
          </div>
        </div>
        <div class="apply-increpeo"><img src="../../../assets/img/incre-peo.png" v-on:click="add_applypeople"></div>
        <div class="apply-reason">
          <div class="reason">
            <p>*</p>
            <p>申请理由</p>
          </div>
          <!-- <p>请输入申请理由</p> -->
          <mt-field class="input-reason" v-model="reason"  placeholder="请输入申请理由" ></mt-field>
        </div>
        <div class="button"><mt-button type="primary" size="large" @click.native="submission">提交</mt-button></div>
      </div>
      <div class="baseline">
        <p></p>
        <p>我是有底线的</p>
        <p></p>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      data: [1],
      popupVisible:false,
      value:'',
      name:"",
      mout:"",
      reason:"",
      options: [
        {
          label: '项目',
          value: '1',
          // disabled: true
        },
        {
          label: '讲课',
          value: '2'
        },
        {
          label: '活动',
          value: '3'
        },
        {
          label: '英语口语',
          value: '4'
        }
      ],
      submission: function() {
        var that = this;
        if (this.value=='') {
          Toast("请选择申请类型");
          return;     //如果为空，不提交判断
        } else if (this.name=='') {
          Toast("请输入姓名");
          return;
        } else if (this.mout=='') {
          Toast("请输入张数");
          return;
        } else if (this.reason=='') {
          Toast("请输入申请理由");
          return;
        };
        axios.post('user/personalCenter/addApply',{
          applyContent:[{
            "reason":that.reason,
            "name":that.name,
            "mout":that.mout,
          }],
          applyType:that.popupVisible,
        })
            .then(function (response) {
               var judge = response.data;
               if (judge.code==0) {
                Toast(judge.msg);
                // that.$router.push({ path: '/home/record' });
               } else {
                Toast(judge.msg);
               }; 
            })
            .catch(function (error) {
                // console.log(error);
            });
      },
    }
  },
  methods:{
    jump(url){
        this.$router.push(url);
      },
    add_applypeople: function(){
      // console.log(123);
      this.data.push(1);
    },
    eject_applytype: function (){
      console.log(123);
      this.popupVisible = true;
    },
    check: function(){
      // console.log(this.value);
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
        height: 110px;
        margin: 40px 0 0 0;
        background: url(../../../assets/img/apply-bg.jpg) no-repeat center center;
        background-size: 100% 100%;
    }
    .apply-bg>p {
      color: #fff;
      font-size: 15px;
      padding: 50px 0 0 0;
      text-align: center;
    }

    /*申请详情*/
    .apply span{
      font-size: 16px;
      color: red;
    }
    .type {
      margin: 20px 0 0 0;
    }
    .type,.name,.number,.reason,.baseline {
      display: flex;
    }
    .type,.reason {
      font-size: 17px;
      line-height: 0;
    }
    .about {
      font-size: 12px;
      color: #062D91;
      background: #f5f5f5;
      padding: 10px 10px;
      margin: 15px 0 0 0;
    }
    .name,.number {
      font-size: 17px;
    }
    .apply-userinfor {
      border-bottom: 2px solid #f5f5f5;
    }
    .inputone {
      height: 50px;
      width: 100px;
    }
    .type p:nth-child(1),.name p:nth-child(1),.number p:nth-child(1),.reason p:nth-child(1) {
      margin: 19px 5px 0 5px;
      color: red;
      font-size: 18px;
    }
    .type p:nth-child(3),.name p:nth-child(3),.number p:nth-child(3) {
      margin: 0 0 30px 10px;
      padding: 0 0 5px 50px;
      position: absolute;
      right: 40px;
      font-size: 15px;
      opacity: 0.6;
    }
    .type p:nth-child(3) {
      margin: 15px 0 0 0;
      font-size: 18px;    
    }
    .name p:nth-child(3),.number p:nth-child(3) {
      margin: 0 0 10px 0;
      padding: 0 0 0 190px;
    }
    .type span:nth-child(2) {
      margin: 40px 0 0 150px;
      font-size: 15px;
      opacity: 0.6;
    }
    .apply-increpeo {
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 10px solid #f5f5f5;
    }
    .apply-increpeo>img {
      padding: 10px 0;
      width: 25px;
    }
    .apply-reason {
      margin: 15px 0 5px 0;
      border-bottom: 10px solid #f5f5f5;
    }
    .reason p {
      margin: 15px 0 0 0;
      z-index: 1;
    }
    .input-reason {
      /*font-size: 14px;*/
      margin: 0 0 0 5px;
      /*opacity: 0.5;*/
      padding: 0 0 30px 0;
    }
    .button {
      margin: 20px 0 0 0;
      color: #fff;
      font-size: 18px;
      width: 300px;
      margin: 0 auto;
    }
    .baseline p:nth-child(1),.baseline p:nth-child(3) {
        width: 100px;
        margin: 20px 5px 0 0;
        border-top: 1px solid rgba(187,187,187, 0.43);
    }
    .baseline p:nth-child(3) {
        margin: 20px 0 0 5px;
    }
    .baseline {
      font-size: 14px;
        color: #c6c9cd;
        background: #f5f5f5;
        justify-content: center;
        padding: 10px 0 0 0;
    }
    .radio {
      width: 200px;
      height: 200px;
    }
</style>
