<template>
    <div>
        <mt-header fixed title="我的订单">
             <router-link to="../home/center" slot="left">
                <div class="back"><img src="../../../assets/img/back.png"></div>
            </router-link>
        </mt-header>
       
        <div class="order-bg">
            <div class="order-userpic">
                <img :src="'http://q1.qlogo.cn/g?b=qq&nk='+userInfo.qq_account+'&s=100'">
            </div>
            <div class="order-userinfor">
                <p>{{userInfo.name}}</p>
                <p>{{userInfo.code}}</p>
            </div>
        </div>
        <p class="my-order"><span>我的</span>订单</p>
        <div class="new-infor" v-show="list.length!=0"> 
            <div class="new-text">
                <p>最新订单</p>
                <p>信息</p>
            </div>
            <div class="order-infor" style="display:flex;width:70%;height:60px;" v-on:click="eject_applytype(list[0])" v-if="list.length!=0">
                <p style="flex:1;font-size:10px;line-height:60px;padding:0;margin:0;">{{list[0].content}}</p>
                <p v-if="list[0].status==0">等待处理</p>
                <p v-else-if="list[0].status==1">已完成</p>
                <p style="color:red;" v-else>已拒绝</p>
            </div>

            <!-- <div class="new-orderinfor" v-if="list.length!=0" v-on:click="eject_applytype(list[0])">
                <div>
                    <p style="">{{list[0].content}}</p>
                </div>
            </div> -->
        </div>
        <div style="line-height:35px;font-size:14px;text-align:center" v-show="list.length==0">暂无订单~要不去买点？</div>
        <div class="old-infor" v-show="list.length!=0">
            <p>历史记录</p>
            <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
                <mt-loadmore 
                :bottom-method="loadBottom" :autoFill = "false"
                :bottom-all-loaded="allLoaded" ref="loadmore">
                    <mt-spinner type="triple-bounce" v-if="topLoading"  color="#26a2ff" class="loading"></mt-spinner>
                  <div class="old" v-for="(n,index) in list"  style="display:flex; border-bottom: 1px solid rgba(187,187,187, 0.5); padding: 10px 0;" :key="index">
                        <div class="order-infortime">
                            <p>{{n.create_time*1000 | timeago}}</p>
                            <!-- <p>{{n.hour}}</p> -->
                        </div>
                        <div class="order-infor" style="display:flex;width:70%;" v-on:click="eject_applytype(n)">
                            <p style="flex:1;">{{n.content}}</p>
                            <p>
                                <p v-if="n.status==0">等待处理</p>
                                <p v-else-if="n.status==1">已完成</p>
                                <p style="color:red;" v-else>已拒绝</p>
                            </p>
                        </div>
                  </div>
                    <mt-spinner type="triple-bounce" v-if="bottomLoading"  color="#26a2ff" class="loading"></mt-spinner>
                </mt-loadmore>
            </div>
        </div>
        <mt-popup v-model="popupVisible" popup-transition="popup-fade" class="mint-popup-2">
            <div>[时间]：{{popup.create_time*1000 | timeago}}</div>
            <div>[内容]：{{popup.content}}</div>
            <div>[状态]：
                <span style="color:black;" v-if="popup.status==0">等待处理</span>
                <span style="color:black;" v-else-if="popup.status==1">已完成</span>
                <span v-else>已拒绝</span>
            </div>
            <!-- <div class="details">[原因]：{{popup.resaon}}</div> -->
        </mt-popup>
    </div>
</template>
<script>
    import { Popup,Indicator } from 'mint-ui';
    import {waitData} from '../../../wait';
export default {
    data () {
        return {
            popupVisible:false,
            popup:[],
            states:'',
            contents:'',
            list:[],
            year:'',
            hour:'',
            content:'',
            state:'',
            allLoaded:false,
            page: 1,
            flag: true,
            wrapperHeight:'',
            topLoading:false,
            bottomLoading:false,
            userInfo:{
                id:0,
                name:" ",
                code:' ',
                qq_account:"undefined"
            }
        }
    },   
    methods:{
        eject_applytype: function (val){
          this.popupVisible = true;
          this.popup = val;
        },
        loadTop: function() {
            this.infor(1);
            this.$refs.loadmore.onTopLoaded();
        },
        getInfo(){
            axios.get("/user/getInfo").then(res=>{
                this.userInfo = res.data.result;
            }).catch(err=>{

            })
        },
        infor:function(type){//0上啦加载  1下拉刷新
            Indicator.open({
                text: waitData[Math.floor(Math.random()*(waitData.length))],
                spinnerType: 'fading-circle'
            });
            var that = this;
            if(type==0){
                that.bottomLoading = true;
            }else if(type==1){
                that.topLoading = true;
                that.page=1;
                that.list=[];
            }
             axios.get('/user/personalCenter/getOrderList',{params:{page:this.page}})//,{params:{page:this.page}}
            .then(function (response) {
                that.$refs.loadmore.onBottomLoaded();
                that.bottomLoading = false;
                that.page++;
                var list = response.data.result.data;
                for (var i = 0; i < list.length; i++) {
                    var L={};
                  L.create_time = list[i].created_time;
                  L.content = list[i].content;
                  L.status = list[i].status;
                  L.resaon = list[i].resaon;
                  that.list.push(L);
                    if(response.data.result.data.length==10){
                        that.flag = true;
                        that.$refs.loadmore.onBottomLoaded();
                    }else {
                        that.allLoaded = true;
                        that.$refs.loadmore.onBottomLoaded();
                    }
                };
                that.topLoading = false;
                Indicator.close();
            })
            .catch(function (error) {
                Indicator.close();
            });

        },
        loadBottom:function() { 
            
            // if(this.flag){
                // this.flag = false;
                this.infor(0);
                this.$refs.loadmore.onBottomLoaded();
            // }
        }
    }, 
    mounted(){
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top-326;
        this.infor(0);
        this.getInfo();
    },
}
</script>
<style>
.loading div{
        /* margin: 0 auto!important; */
        text-align: center;
    }
</style>

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
        border-radius: 50%;
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
        width: 70px;
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
        width: 70px;
    }
    .order-infortime p:nth-child(2) {
        text-align: center;
    }
    .order-infor {
        border-left: 1px solid rgba(187,187,187, 0.5);
        margin: 0 0 0 8px;
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
        /* height: auto;  
        word-wrap:break-word;  
        word-break:break-all;  
        overflow: hidden; */
        /*自动换行*/
        /* padding: 20px;       
        width: 150px;
        text-indent: 30px;
        line-height: 20px; */
    }
    .mint-popup-2 {
        width: 80%;
        max-height: 70%;
        top: 50%;
        backface-visibility: hidden;
        line-height: 35px;
        padding: 5%;
        border-radius: 5px;
    }
    .page-loadmore-wrapper {
        overflow: scroll
    }
    ::-webkit-scrollbar {
        display:none;
    }
    
</style>

