<template>
    <div>
        <mt-header fixed title="我的订单"></mt-header>
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
        <p class="my-order"><span>我的</span>订单</p>
        <div class="new-infor" v-for="i,index in new_infor"  :key="index"> 
            <div class="new-text">
                <p>最新订单</p>
                <p>信息</p>
            </div>
            <div class="new-orderinfor">
                <div><img src="../../../assets/img/order-userpic.png"></div>
                <div>
                    <p>{{i.states}}</p>
                    <p v-on:click="eject_applytype">[原因]：{{i.contents}}</p>
                    <mt-popup v-model="popupVisible" popup-transition="popup-fade">
                        <div class="details">[原因]：您的金额不足，请审查！</div>
                    </mt-popup>
                </div>
            </div>
        </div>
        <div class="old-infor">
            <p>历史记录</p>
            <div style="height:320px;overflow:scroll">
                <mt-loadmore :top-method="loadTop" 
                :bottom-method="loadBottom" :autoFill = "false"
                :bottom-all-loaded="allLoaded" ref="loadmore">
                  <div class="old" v-for="n,index in list"  style="display:flex; border-bottom: 1px solid rgba(187,187,187, 0.5); padding: 10px 0;" :key="index">
                        <div class="order-infortime">
                            <p>{{n.year}}</p>
                            <p>{{n.hour}}</p>
                        </div>
                        <div class="order-infor" style="display:flex;">
                            <p>{{n.content}}</p>
                            <p>{{n.state}}</p>
                        </div>
                  </div>
                </mt-loadmore>
            </div>
        </div>
    </div>
</template>
<script>
    import { Popup } from 'mint-ui';
export default {
    data () {
        return {
            popupVisible:false,
            new_infor:[],
            states:'',
            contents:'',
            list:[],
            year:'',
            hour:'',
            content:'',
            state:'',
            allLoaded:false,
            loading:false,
        }
    },   
    methods:{
        eject_applytype: function (){
          // console.log(123);
          this.popupVisible = true;
        },
        loadTop: function() {
            this.$refs.loadmore.onTopLoaded();
        },
        infor: function(){
            var that = this;
            axios.get('/order')
            .then(function (response) {
                // console.log(that.loading,that.allLoaded)
                var new_infor = response.data.list;
                // console.log(response.data.list);
                for (var i = 0; i < new_infor.length; i++) {
                  // console.log(123);
                  var L =[];
                  // L.year = list[i].year;
                  // L.hour = list[i].hour;
                  L.contents = new_infor[i].content;
                  L.states = new_infor[i].state.msg;
                  // console.log(L.contents);
                  that.new_infor.push(L);
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
            // this.loading = true;
            //     setTimeout(()=>{
            //         let last = this.list[this.list.length - 1];
            //         //     for (let i = 1; i <= 2; i++) {
            //         //         this.list.push(last + i);
            //         // }
            //         this.loading = false;
            //     },2000);

        },
        loadBottom:function() {  
            // console.log(123546)
            this.test();
            this.$refs.loadmore.onBottomLoaded();
        }
    }, 
    mounted(){
        this.test();
        this.infor();
    },
}
</script>
<style scoped>

    .pull {
        margin: 50px auto;
    }
    /*用户信息*/
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
    .order-userpic{
        margin: 0 0 0 15px;
    }
    .order-userinfor{
        margin: 0 0 0 5px;
    }
    .order-bg p {
        color: #fff;
    }
    p:nth-child(1) {
        font-size: 16px;
        /*margin: 10px 0 0 0;*/
    }
    p:nth-child(2) {
        font-size: 12px;
        /*line-height: 0;*/
    }
    span {
        color: red;
    }

    /*订单信息*/

    /*new*/
    .my-order {
        margin: 10px 0 0 0;
        font-size: 15px;
        border-bottom: 1px solid rgba(187,187,187, 0.5);
        padding: 0 0 8px 0;
    }
    .new-infor {
        margin: 10px 0 0 0;
    }
    .new-infor,.new-orderinfor,.old {
        display: flex;
    }
    .new-text {
        margin: 5px 0 0 10px;
    }
    .new-text p {
        font-size: 10px;
        text-align: center;
        color: #101010;
        opacity: 0.6;
        line-height: 4px;
    }
    .new-text p:nth-child(1) {
        margin: 20px 0 0 5px;
    }
    .new-orderinfor img {
        width: 55px;
    }
    .new-orderinfor {
        border-left: 1px solid rgba(187,187,187, 0.5);
        margin: 0 0 0 10px;
    }
    .new-infor {
        border-bottom: 10px solid #f5f5f5;
        padding: 0 0 5px 0;
    }
    .new-orderinfor p:nth-child(1) {
        font-size: 10px;
        margin: 28px 0 0 5px;
        line-height: 0;
    }
    .new-orderinfor p:nth-child(2) {
        font-size: 10px;
        line-height: 15px;
        margin: 15px 0 0 5px;
        width: 150px;
        display: block;  
        overflow: hidden;  
        white-space: nowrap;  
        text-overflow: ellipsis;
    }

    /*old*/
    .old-infor>p {
        font-size: 13px;
        border-bottom: 1px solid rgba(187,187,187, 0.5);
        padding: 0 0 10px 0;
    }
    .old {
        border-bottom: 1px solid rgba(187,187,187, 0.5);
        padding: 10px 0;
    }
    .old p {
        font-size: 10px;
        color: #BBBBBB;
    }
    .order-infortime {
        margin: 0 0 0 10px;
    }
    .order-infortime p:nth-child(2) {
        text-align: center;
    }
    .order-infor {
        border-left: 1px solid rgba(187,187,187, 0.5);
        margin: 0 0 0 15px;
        padding: 0 0 0 10px;
    }
    .order-infor p:nth-child(1) {
        color: #101010;
        opacity: 0.9;
        width: 150px;
        /*display: block;  */
        overflow: hidden;  
        white-space: nowrap;  
        text-overflow: ellipsis; 
    }
    .order-infor p:nth-child(2) {
        /*margin: 10px 0 0 180px;*/
        /*text-align: center;*/
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

