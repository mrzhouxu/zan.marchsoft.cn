<template>
  <div v-bind:style="{minHeight:clientHeight + 'px'}" id="recive-min-body">
    <mt-header title="消费点赞币">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <form>
      <h3>请填写以下信息：</h3>
      <mt-radio  
        title="选择消费方式"  
        v-model="value"
        :options="options">
      </mt-radio>
      <div class="mineMoney" id="ReciveMoney">
        <span>您将要使用{{ count }}张点赞币</span>
      </div>
      <mt-field class="recive-min-input" label="支付宝账号" placeholder="请输入支付宝账号" id="photoInput"  v-model="photo"></mt-field>
      <mt-field label="购买物品" placeholder="想要买的东西很多嘛，只需要在这里填写你想要买的物品哦！" type="textarea" rows="4" id="buyInput" v-model="buy"></mt-field>

      <div class="recive-buttonBox">
            <mt-button type="primary" class="recive-button"  @click.native="reciveTestSubmit">确定</mt-button>
      </div>
    </form>
  </div>
</template>
<style scoped>
  .mineMoney {
    width: 100%;
    text-align: center;
    color: orange;
    margin: 10px 0 5px;
  }
  .mineMoney span {
    margin: 10px;
  }
  #photoInput {
    display: none;
  }
  #recive-min-body {
    background-color: #f5f5f5;
  }
  .recive-min-input {
    margin-top: 10px;
  }
  form h3 {
    margin: 0;
    background-color: #fff;
    padding: 10px 10px 5px !important;
    font-weight: normal;
    border-bottom: 1px solid #d9d9d9;
  }
  .recive-buttonBox {
        margin: 0 20px;
    }
  .recive-button {
        width: 100%;
        border-radius: 7px;
        margin-top: 20px;
    }
</style>
<script>
import { Toast } from 'mint-ui';
import {filters} from '../../../filter'
export default {
  data () {
    return {
      clientHeight: document.documentElement.clientHeight,
      ids: [],
      value: "A",
      // radio的选项
      options : [
        {
          label: '购物',
          value: 'A'
        },
        {
          label: '请假',
          value: 'B'
        },
        {
          label: '销假',
          value: 'C'
        },
        {
          label: '兑换现金',
          value: 'D'
        }
      ],
      count: 1,
      buy: "",
      photo: '',
    }
  },
  watch: {
    value:function(val,oldval){
      var buy = this.Id("buyInput");
      var photo = this.Id("photoInput");
      // var Money = this.Id("ReciveMoney");
      if (val=='A') {
        buy.style.display = "block";
        photo.style.display = "none";
        // Money.style.display = "block";
      }else if (val=='B') {
        buy.style.display = "none";
        photo.style.display = "none";
        // Money.style.display = "none";
      }else if (val=='C') {
        buy.style.display = "none";
        photo.style.display = "none";
        // Money.style.display = "none";
      }else if (val=='D') {
        buy.style.display = "none";
        photo.style.display = "block";
        // Money.style.display = "block";
      };      
    }
  },
  methods:{
    //底层共用  
    Id: function(name){ 
       return document.getElementById(name); 
    }, 
    goBack: function() {
      this.$router.push({ path: '/home/recive' });
    },
    trimStr: function(str) {
        return str.replace(/\s+/g, "");
    },
    reciveTestSubmit: function() {
      var that = this;
      var buy = that.trimStr(that.buy);
      var photo = that.trimStr(that.photo);
      var params = {
        ids:JSON.stringify(this.ids),
        content:''
      };
      if (this.value == 'A') {
        if (buy == '') {
          Toast('请填写您购买的物品');
          return;
        };
        params.content = buy;
        axios.post('/user/consume/insertCoinOrder', params)
        .then(function (response) {
            var date = response.data;
            if (date.code) {
                Toast('购买成功！');
                // that.$router.push({ path: '/home/recive' });
            }else {
                Toast(date.msg);
            };
        })
        .catch(function (error) {
            console.log(error);
        });
      }else if (this.value == 'B'||this.value == 'C') {
        if(this.value == 'B'){
          params.content = "请假";
        }else if(this.value == 'C'){
          params.content = "销假";
        }
        axios.post('/user/consume/insertCoinOrder', params)
        .then(function (response) {
            var date = response.data;
            if (date.code) {
                Toast('使用成功！');
                // that.$router.push({ path: '/home/recive' });
            }else {
                Toast(date.msg);
            };
        })
        .catch(function (error) {
            console.log(error);
        });
      }else {
        if (photo == '') {
          Toast('请填写您的支付宝账号！');
          return;
        };
        params.content = photo;
        axios.post('/user/consume/insertCoinOrder', params)
        .then(function (response) {
            var date = response.data;
            if (date.code) {
                Toast('兑换成功！');
                // that.$router.push({ path: '/home/recive' });
            }else {
                Toast(date.msg);
            };
        })
        .catch(function (error) {
            console.log(error);
        });
      };
    },
  },
  mounted(){
    this.ids = JSON.parse(filters.ytox(this.$route.params.ids))
    this.count = this.ids.length;
  }
}
</script>

