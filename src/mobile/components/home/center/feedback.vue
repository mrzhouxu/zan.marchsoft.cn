<template>
  <div>
    <mt-header title="匿名反馈"></mt-header>
      <router-link to="../home/center"> 
          <div class="back"><img src="../../../assets/img/back.png"></div>
      </router-link>
      <div class="apply-bg"></div>
      <div class="all">
        <p class="feedback"><span>匿名</span>反馈</p>
        <div style="height:320px;overflow:scroll">
          <mt-loadmore :top-method="loadTop" 
          :bottom-method="loadBottom" :autoFill = "false"
          :bottom-all-loaded="allLoaded" ref="loadmore">
            <div v-for="i in data" class="details" style="display:flex; border-bottom: 1px solid rgba(187,187,187, 0.2);"  :key="i">
              <div class="feedback-user"><img :src="i.picture"></div>
              <p v-on:click="eject_applytype">{{i.content}}</p>
              <mt-popup v-model="popupVisible" popup-transition="popup-fade">
                  <div class="detailss">[原因]：您的金额不足，请审查！</div>
              </mt-popup>
              <p class="time">{{i.time}}天前</p>
            </div>
          </mt-loadmore>
        </div>
          <div class="feedback-text">
            <mt-field v-model="content" class="pass"  placeholder="我要匿名反馈"></mt-field>
            <mt-button class="button" type="default" @click.native="addtalk">发送</mt-button>
          </div>
      </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      data: [],
      content:'',
      page:1,
      picture: [
        "./static/feedback.png",
        "./static/feedback2.png",
        "./static/feedback3.png"
      ],
      popupVisible:false,
      allLoaded:false,
      loading:false,
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
    gettalk: function (){
        var that = this;
        axios.get('/user/personalCenter/getTalk',{
          page:that.page,
        })
            .then(function (response) {
                that.page++;
                var list = response.data.data;
                // console.log(list);
                for (var i = 0; i < list.length; i++) {
                  // console.log(123);
                  var L =[];
                  L.content = list[i].content;
                  L.time = list[i].create_time;
                  // L.picture = list[i].picture;
                  L.picture = that.picture[Math.floor(Math.random()*3)];
                  // console.log(L.picture);
                  that.data.push(L);
                };
                // this.data = response;
            })
            .catch(function (error) {
                // console.log(error);
            });
      },
    addtalk: function (){
        var that = this;
        axios.post('/user/personalCenter/addTalk',{
          content:that.content,
        })
          .then(function (response) {
            var feedback = response.data;
            // Toast("judge.code");
            // console.log(feedback);
            if (feedback.code==0) {
              // console.log(feedback.code);
              Toast(feedback.msg);
              // that.$router.push({ path: '/home/record' });
             } else {
              Toast(feedback.msg);
             };
            // this.data = response;
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
  //页面加载后加载的方法
  mounted(){
    this.gettalk();
    this.test();
  }
}
</script>
<style scoped>
  /*.all>div{
      display: flex;
  }*/
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
        background: url(../../../assets/img/feedback-bg.png) no-repeat center center;
        background-size: 100% 100%;
    }

    /*反馈详情*/
    .feedback {
      font-size: 15px;
    }
    .feedback span{
      font-size: 15px;
      color: red;
    }
    .details {
      display: flex;
      border-bottom: 1px solid rgba(187,187,187, 0.2);
    }
    .details p:nth-child(2) {
      font-size: 14px;
      margin: 19px 0 0 5px;
      width: 170px;
      /*display: block;  */
      overflow: hidden;  
      white-space: nowrap;  
      text-overflow: ellipsis;
    }
    .time {
      margin: 20px 0 0 0;
      position: absolute;
      right: 25px;
      font-size: 12px;
      opacity: 0.5;
    }
    .feedback-user>img {
      width: 50px;
    }
    .feedback-text {
      display: flex;
      position: fixed;
      bottom: 10px;
    }
    .button {
      margin: 15px 0 0 10px;
      font-size: 12px;
      width: 48px;
      /*height: 30px;*/
    }
    .pass {
      margin: 10px 0 0 15px;
      /*color: black;*/
      /*height: 20px;*/
      width: 240px;
      background: #f5f5f5;
    }

    .detailss {
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
