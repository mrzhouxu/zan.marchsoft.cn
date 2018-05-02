<template>
  <div>
    <mt-header title="接受订单任务"></mt-header>
      <router-link to="../home/center">
          <div class="back"><img src="../../../assets/img/back.png"></div>
      </router-link>
      <div class="apply-bg">
        <p>您的新订单任务已出炉~</p>
      </div>
      <div>
        <p class="accept-text"><span>接受</span>订单任务</p>
        <p class="new">新任务</p>
        <div class="new-needaccept one" v-for="i,index in datas" :key="index">
          <div class="accept-infor">
            <div class="accept-userpic"><img src="../../../assets/img/xuhong.jpg"></div>
            <div class="accept-userinfor">
              <p>{{i.name}}</p>
              <p v-on:click="eject_applytype">{{i.content}}</p>
              <mt-popup v-model="popupVisible" popup-transition="popup-fade">
                  <div class="details">[原因]：您的金额不足，请审查！</div>
              </mt-popup>
            </div>
          </div>
          <div class="accept-choice">
            <mt-button type="danger" class="accept" v-model="accept_button" @click.native="accept">接受</mt-button>
            <mt-button type="default" v-model="refuse_button" class="refuse">拒绝</mt-button>
          </div>
        </div>
        <div class="old-needaccept">
          <p style="text-align:center;">历史记录</p>
          <div style="height:320px;overflow:scroll">
            <mt-loadmore :top-method="loadTop" 
            :bottom-method="loadBottom" :autoFill = "false"
            :bottom-all-loaded="allLoaded" ref="loadmore">
              <div class="old-acceptinfor" v-for="n,index in data" style="display:flex;" :key="index">
                <div class="old-userpic"><img src="../../../assets/img/xuhong.jpg"></div>
                <div class="old">
                  <div class="old-userinfor">
                    <p class="name">{{n.name}}</p>
                    <p v-on:click="eject_applytype">{{n.content}}</p>
                    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
                      <div class="details">[原因]：您的金额不足，请审查！</div>
                  </mt-popup>
                  </div>
                  <div class="ed"><p>{{n.status}}</p></div>
                </div>
              </div>
            </mt-loadmore>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      datas:[],
      names:'',
      contents:'',
      refuse_button:'',
      accept_button:'',
      data:[],
      name:'',
      content:'',
      status:'',
      state:'',
      popupVisible:false,
      page:1,
      allLoaded:false,
      loading:false,
      // picture:'',
    }
  },
  methods:{
    jump(url){
          this.$router.push(url);
    },
    eject_applytype: function (){
      // console.log(123);
      this.popupVisible = true;
    },
    newaccept_order: function(){
      var that = this;
      axios.get('/order',{
        accept_button:that.accept_button,
        refuse_button:that.refuse_button,
      })
            .then(function (response) {
                var list = response.data.list;
                console.log(list);
                for (var i = 0; i < list.length; i++) {
                  // console.log(123);
                  var L =[];
                  L.name = list[i].name;
                  // L.hour = list[i].hour;
                  L.content = list[i].content;
                  L.state = list[i].state.msg;
                  // console.log(L.hour);
                  that.datas.push(L);
                };
                // this.data = response;
            })
            .catch(function (error) {
                // console.log(error);
            });
    },
    oldaccept_order: function(){
      var that = this;
      axios.get('/user/personalCenter/getProcessOrderr')
            .then(function (response) {
                var list = response.data.data;
                console.log(list);
                for (var i = 0; i < list.length; i++) {
                  // console.log(123);
                  var L =[];
                  L.name = list[i].name;
                  // L.hour = list[i].hour;
                  L.content = list[i].content;
                  L.status = list[i].status.msg;
                  // console.log(L.hour);
                  that.data.push(L);
                };
                // this.data = response;
            })
            .catch(function (error) {
                // console.log(error);
            });
    },
    accept: function(){
      var that = this;
      axios.get('/judge')
            .then(function (response) {
                var accept = response.data.list;
                // console.log(response.data.list);
                if (accept.code) {
                  Toast(accept.msg);
                  // that.$router.push({ path: '/home/record' });
                 } else {
                  Toast(accept.msg);
                 };
            })
            .catch(function (error) {
            // console.log(error);
        });
    },
    test:function(){
      var that = this;
      this.loading = true;
      // this.allLoaded = true;
      axios.get('/order')
      .then(function (response) {
          // console.log(that.loading,that.allLoaded)
          var list = response.data.list;
          // console.log(response.data.list);
          for (var i = 0; i < list.length; i++) {
            // console.log(123);
            var L =[];
            L.year = list[i].year;
            L.hour = list[i].hour;
            L.content = list[i].content;
            L.state = list[i].state.msg;
            // console.log(L.hour);
            that.list.push(L);
          };
          // this.data = response;
          that.loading = false;
          // that.allLoaded = false;
          that.$refs.loadmore.onBottomLoaded();
      })
      .catch(function (error) {
          // console.log(error);
      });
    },
    loadTop: function() {
            this.$refs.loadmore.onTopLoaded();
    },
    loadBottom:function() {  
        // console.log(123546)
        this.test();
        this.$refs.loadmore.onBottomLoaded();
    }
  },
  mounted(){
    this.oldaccept_order();
    this.newaccept_order();
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
        height: 110px;
        background: url(../../../assets/img/order-bg.png) no-repeat center center;
        background-size: 100% 100%;
    }
    .apply-bg>p {
      color: #fff;
      font-size: 15px;
      text-align: center;
    }


    /*订单详情*/
    .accept-text {
      font-size: 14px;
    }
    .accept-text span{
      font-size: 15px;
      color: red;
    }
    .new {
      font-size: 12px;
      color: #15339E;
      background: #F5F5F5;
      padding: 10px 10px;
      margin: 15px 0 0 0;
    }
    .new-needaccept,.accept-choice,.accept-infor,.old-acceptinfor,.old {
      display: flex;
    }
    .new-needaccept {
      border-bottom: 1px solid rgba(187,187,187, 0.2);
      padding: 0 0 5px 0;
    }
    .accept-userpic>img,.old-userpic>img {
      width: 60px;
    }
    .accept-userinfor,.old-userinfor {
      margin: 13px 0 0 5px;
    }
    .accept-userinfor p:nth-child(1),.old-userinfor p:nth-child(1) {
      line-height: 0;
      font-size: 13px;
    }
    .accept-userinfor p:nth-child(2),.old-userinfor p:nth-child(2) {
      line-height: 15px;
      font-size: 12px;
      width: 150px;
      display: block;  
      overflow: hidden;  
      white-space: nowrap;  
      text-overflow: ellipsis;
    }
    .accept-choice {
      position: absolute;
      right: 5px;
    }
    .accept-choice p {
      margin: 5px 0 0 0;
    }
    .accept,.refuse {
      height: 45px;
      width: 35px;
      font-size: 15px;
      color: #fff;
      margin: 10px 4px;
    }
    .refuse {
      color: #BBBBBB;
    }
    .ed {
      font-size: 12px;
      opacity: 0.5;
      /*line-height: 1.5px;*/
      position: absolute;
      right: 30px;
      margin: 25px 0 0 0;
    }

    .details {
        /*自动换行*/
        height: auto;  
        word-wrap:break-word;  
        word-break:break-all;  
        overflow: hidden;
        /*自动换行*/
        padding: 20px;       
        width: 150px;
        text-indent: 30px;
        line-height: 20px;
    }
</style>
