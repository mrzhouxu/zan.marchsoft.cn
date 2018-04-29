<template>
  <div v-bind:style="{minHeight:clientHeight + 'px'}" id="recive-min-body">
    <mt-header title="我的赞">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <form>
      <h3 class="recive-min-input">请填写以下信息：</h3> 
      <mt-field label="你要点赞给" placeholder="名称" @click.native="handleClick" v-model="tt" disabled class="MinePeople"></mt-field>
      <!-- <mt-field label="使用数量" placeholder="1张"></mt-field> -->
      <mt-popup
      v-model="popupVisible"
      position="bottom"
      modal=false>
      <mt-picker v-bind:style="{width:clientWidth + 'px',padding: 20 + 'px'}" :slots="slots" @change="onValuesChange"></mt-picker>
      </mt-popup>
      <mt-field label="点赞理由" placeholder="点赞理由要规范" type="textarea" rows="4" v-model="reason"></mt-field>
      <div class="recive-buttonBox">
            <mt-button type="primary" class="recive-button"  @click.native="reciveTestSubmit">确定</mt-button>
      </div>
    </form>
  </div>
</template>
<style scoped>
  #recive-min-body {
    background-color: #f5f5f5;
  }
  input[disabled],input:disabled {
    background: red !important;
  }
  .picker-item {
    padding: 30px;
  }
  .recive-min-input {
    margin-top: 10px;
  }
  form h3 {
    margin: 0;
    padding: 10px !important;
    font-weight: normal;
    font-size: 15px;
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
export default {
  data () {
    return {
      clientWidth: document.documentElement.clientWidth,
      clientHeight: document.documentElement.clientHeight,
      popupVisible:false,
      men: [],
      slots:  
          [  
          {  
            flex: 1,  
            values: ['大一', '大二', '大三'],  
            className: 'slot1',  
            textAlign: 'left'  
          }, {  
            divider: true,  
            content: '-',  
            className: 'slot2'  
          }, {  
            flex: 1,  
            values: [],  
            className: 'slot3',  
            textAlign: 'right'  
          }  
        ], 
      ids: "",
      tt: '', 
      reason: '',
    }
  },
  methods:{
    //底层共用  
    Id: function(name){ 
       return document.getElementById(name); 
    },
    goBack: function() {
      this.$router.push({ path: '/home/mine' });
    },
    handleClick: function() {
      this.popupVisible = true;
      this.slots[2].values = this.men[0];
    },
    onValuesChange(picker, values) {
      if (values[0]=='大一') {
        picker.setSlotValues(1, this.men[0]);
      }else if (values[0]=='大二') {
        picker.setSlotValues(1, this.men[1]);
      }else if (values[0]=='大三') {
        picker.setSlotValues(1, this.men[2]);
      };
      this.tt = values[1];
    },
    getPeople: function() {
      var that = this;
      axios.post('/getPeople')
      .then(function (response) {
          var date = response.data.list;
          var j = [];
          for (var i = 0; i < date.kk.length; i++) {
            j.push(date.kk[i].name);
          };
          that.men.push(j);
          var l = [];
          for (var i = 0; i < date.ll.length; i++) {
            l.push(date.ll[i].name);
          };
          that.men.push(l);
          var p = [];
          for (var i = 0; i < date.pp.length; i++) {
            p.push(date.pp[i].name);
          };
          that.men.push(p);
      })
      .catch(function (error) {
          console.log(error);
      });
    },
    reciveTestSubmit: function() {
      var that = this;
      if (this.tt == undefined) {
        Toast('请选择您要送的人的名字');
        return;
      }else if (this.reason == '') {
        Toast('请填写您要点赞的理由');
      };
      axios.post('/buy',{
        men: this.tt,
        reason: this.reason
      })
      .then(function (response) {
          var date = response.data.list;
          console.log(date);
          if (date.code) {
              Toast('点赞成功！');
              that.$router.push({ path: '/home/mine' });
          }else {
              Toast(date.msg);
          };
      })
      .catch(function (error) {
          console.log(error);
      });
    }
  },
  mounted(){
    this.getPeople();
    // this.ids = filters.ytox(this.$route.params.ids)
  }
}
</script>

