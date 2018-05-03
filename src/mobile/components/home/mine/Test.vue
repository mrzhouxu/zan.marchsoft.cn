<template>
  <div v-bind:style="{minHeight:clientHeight + 'px'}" id="recive-min-body">
    <mt-header title="我的赞">
      <mt-button icon="back" slot="left" @click.native="goBack">返回</mt-button>
    </mt-header>
    <form>
      <h3 class="recive-min-input">请填写以下信息：</h3> 
      <mt-field label="你要点赞给" placeholder="姓名" @click.native="handleClick" v-model="tt" disabled class="MinePeople"></mt-field>
      <!-- <mt-field label="使用数量" placeholder="1张"></mt-field> -->
      <mt-popup
      v-model="popupVisible"
      position="bottom"
      modal=false>
      <mt-picker v-bind:style="{width:clientWidth + 'px',padding: 20 + 'px'}" :slots="slots" @change="onValuesChange" valueKey="name"></mt-picker>
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
import {filters} from '../../../filter';
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
            // values: ['大一', '大二', '大三'],  
            values: [{id:0,name:''}],
            className: 'slot1', 
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {  
            flex: 1,  
            values: [{id:0,name:''}],  
            className: 'slot3', 
          }  
        ], 
      ids: "",
      tt: '',
      id: 0,
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
      // this.slots[2].values = this.men[0];
    },
    // getName: function(arr) {
    //   var j = [];
    //   for (var i = 0; i < arr.length; i++) {
    //     j.push(arr[i].name);
    //   };
    //   return j;
    // },
    onValuesChange(picker, values) {
      // if (values[0]=='大一') {
      //   // var array = this.men[0];
      //   picker.setSlotValues(1, this.men[0]);
      // }else if (values[0]=='大二') {
      //   picker.setSlotValues(1, this.men[1]);
      // }else if (values[0]=='大三') {
      //   picker.setSlotValues(1, this.men[2]);
      // };
      for(let i in this.men){
        if(i==values[0].id){
          picker.setSlotValues(1, this.men[i]);
          break;
        }
      }
      this.tt = values[1].name;
      this.id = values[1].id;
      console.log(values[0].id);
    },
    getPeople: function() {
      var that = this;
      axios.get('/user/thumbsUp/getUserListExceptSelf')
      .then(function (response) {
          that.men = response.data.result;
          // console.log(date);
          that.slots[0].values = []
          for(let i in that.men){
            console.log(i);
            if(i==0) {
              that.slots[0].values.push({id:i,name:"老师"});
              continue;
            }
            that.slots[0].values.push({id:i,name:i + "级"});
          }
          // var j = [];
          // for (var i = 0; i < date.kk.length; i++) {
          //   var j0 = {};
          //   j0.id = date.kk[i].id;
          //   j0.name = date.kk[i].name;
          //   j.push(j0);
          // };
          // that.men.push(j);
          // var l = [];
          // for (var i = 0; i < date.ll.length; i++) {
          //   var j0 = {};
          //   j0.id = date.ll[i].id;
          //   j0.name = date.ll[i].name;
          //   l.push(j0);
          // };
          // that.men.push(l);
          // var p = [];
          // for (var i = 0; i < date.pp.length; i++) {
          //   var j0 = {};
          //   j0.id = date.pp[i].id;
          //   j0.name = date.pp[i].name;
          //   p.push(j0);
          // };
          // that.men.push(p);
          // console.log(that.men)
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
      }else{
        axios.post('/user/thumbsUp',{
          ids: this.ids,
          toUserId: this.id,
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
    }
  },
  mounted(){
    this.getPeople();
    this.ids = filters.ytox(this.$route.params.ids)
    console.log(this.ids)
  }
}
</script>

