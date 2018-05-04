<template>
    <div>
        <mt-header fixed title="点赞币"></mt-header>
        
        
        <div id="content">
            <div class="content-top">
                <div class="content-left">
                    <p>{{totalWeek}}</p>
                    <p>本周获赞</p>
                </div>
                <div class="content-center">
                    <p>{{countTotal}}</p>
                    <p>获赞总数</p>
                </div>
                <div class="content-right">
                    <p>{{rankWeek}}</p>
                    <!-- <router-link to="/home/rank/week"> -->
                        <p class="rank-week">本周排名</p>
                    <!-- </router-link> -->
                </div>
            </div>
            <div class="content-buttom">
                <!-- <a to="/home/record/top">获取点赞排行></a> -->
                <router-link to="/home/rank"><i class="fa fa-bar-chart"></i> 获赞排行榜 > </router-link>
                <p class="time-range">(统计时间为：{{date.start_date}} 至 {{date.over_date}} 22:00)</p>
            </div>
        </div>

        <div class="page-navbar">  
            <mt-navbar class="page-part" v-model="sel">  
              <mt-tab-item id="1">谁赞过我</mt-tab-item>  
              <mt-tab-item id="2">我赞过谁</mt-tab-item>  
            </mt-navbar>
            <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
                    <mt-tab-container v-model="sel">
                        <mt-tab-container-item id="1">
                            <mt-loadmore :top-method="loadTop" 
                            :bottom-method="loadBottom" :autoFill = "false"
                            :bottom-all-loaded="allLoaded" ref="loadmore1">
                                <mt-spinner type="triple-bounce" v-if="topLoading"  color="#26a2ff" class="loading"></mt-spinner>

                                    <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/> -->
                                    <div class="task-list" v-for="(item,index) in list1" :key="index" @click="getInfo(item)">
                                        <div class="task-item">
                                            <div class="item-img">
                                                <img :src="item.img_url" alt="err">
                                            </div>
                                            <div class="item-message">
                                                <p style="font-size:14px;">{{item.name}} 赞了你一次</p>
                                                <p class="bContentList" style="font-size:12px;">{{item.reason}}</p>
                                            </div>
                                            <div class="item-time">
                                                <p style="font-size: 12px;">{{item.use_time*1000 | timeago}}</p>
                                                <p style="font-size: 12px;">{{item.over_time*1000 | timeago}}</p>
                                            </div>
                                        </div>
                                    </div>

                                <mt-spinner type="triple-bounce" v-if="bottomLoading"  color="#26a2ff" class="loading"></mt-spinner>
                            </mt-loadmore>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2">

                            <mt-loadmore :top-method="loadTop" 
                            :bottom-method="loadBottom" :autoFill = "false"
                            :bottom-all-loaded="allLoaded" ref="loadmore2">
                                <mt-spinner type="triple-bounce" v-if="topLoading"  color="#26a2ff" class="loading"></mt-spinner>

                                    <!-- <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/> -->
                                    <div class="task-list" v-for="(item,index) in list2" :key="index" @click="getInfo(item)">
                                        <div class="task-item">
                                            <div class="item-img">
                                                <img :src="item.img_url" alt="err">
                                            </div>
                                            <div class="item-message">
                                                <p style="font-size:14px;">赞了 {{item.name}}</p>
                                                <p class="bContentList" style="font-size:12px;">{{item.reason}}</p>
                                            </div>
                                            <div class="item-time">
                                                <p style="font-size: 12px;">{{item.use_time*1000 | timeago}}</p>
                                                <!-- <p style="font-size: 12px;">{{item.over_time*1000 | timeago}}</p> -->
                                            </div>
                                        </div>
                                    </div>

                                <mt-spinner type="triple-bounce" v-if="bottomLoading"  color="#26a2ff" class="loading"></mt-spinner>
                            </mt-loadmore>

                        </mt-tab-container-item>
                    </mt-tab-container>
            </div>
            
        </div>  

        <mt-popup
        v-model="popupVisible"
        popup-transition="popup-fade"
        style="width:80%;background:none;">
            <div class="bInfo">
                <div class="bHeader">
                    <div class="bAvatar">
                        <img :src="bInfo.img_url" alt="err">
                    </div>
                    <p class="fromTo">{{bInfo.name}} 给我点赞!</p>
                </div>
                <div class="bContent">
                    <p>{{bInfo.reason}}</p>
                </div>
                <div class="bFooter">
                    <p>{{bInfo.start_time*1000 | getDateWeek }} --- {{bInfo.over_time*1000 | getDateWeek}} 20:00</p>
                </div>
            </div>
        </mt-popup>
        <NavBottom selected="1"></NavBottom>
    </div>
</template>

<script>
import NavBottom from '../NavBottom.vue'
// import {filters} from '../../filter'
import {filters} from '../../filter';
export default {
    components:{
        NavBottom
    },
    data () {
        return {
            selected:'1',
            countTotal:0,
            totalWeek: 0,
            rankWeek: 0,
            wrapperHeight: 0,
            allLoaded: false,
            sel:'1',
            date:{
                start_date:'1900-1-1',
                over_date:'1900-1-1',
            },
            
            topLoading:false,
            bottomLoading:false,
            topLoading2:false,
            bottomLoading2:false,
            popupVisible:false,
            flag:true,
            page1:1,
            page2:1,
            bInfo:{
                name:'桑金超',
                reason:'努力学习,乐于助人',
                start_time:'1525412837',
                over_time:'1525412837',
                img_url:"http://q1.qlogo.cn/g?b=qq&nk=794135759&s=100" 
            },
            list1:[
                // {
                //    "name":"桑金超",
                //    "reason":"努力学习,帮助他人",
                //    "start_time":"1525412837",
                //    "over_time":"1525412837",
                //    "use_time":"1525412837",
                //    "img_url":"http://q1.qlogo.cn/g?b=qq&nk=794135759&s=100" 
                // },
                // {
                //    "name":"桑金超",
                //    "reason":"努力学习,帮助他人",
                //    "start_time":"1525412837",
                //    "over_time":"1525412837",
                //    "use_time":"1525412837",
                //    "img_url":"http://q1.qlogo.cn/g?b=qq&nk=794135759&s=100" 
                // },
                // {
                //    "name":"桑金超",
                //    "reason":"努力学习,帮助他人",
                //    "start_time":"1525412837",
                //    "over_time":"1525412837",
                //    "use_time":"1525412837",
                //    "img_url":"http://q1.qlogo.cn/g?b=qq&nk=794135759&s=100" 
                // }
            ],
            list2:[
                // {
                //    "name":"桑金超",
                //    "reason":"努力学习,帮助他人",
                //    "start_time":"1525412837",
                //    "over_time":"1525412837",
                //    "use_time":"1525412837",
                //    "img_url":"http://q1.qlogo.cn/g?b=qq&nk=794135759&s=100" 
                // },
                // {
                //    "name":"桑金超",
                //    "reason":"努力学习,帮助他人",
                //    "start_time":"1525412837",
                //    "over_time":"1525412837",
                //    "use_time":"1525412837",
                //    "img_url":"http://q1.qlogo.cn/g?b=qq&nk=794135759&s=100" 
                // },
                // {
                //    "name":"桑金超",
                //    "reason":"努力学习,帮助他人",
                //    "start_time":"1525412837",
                //    "over_time":"1525412837",
                //    "use_time":"1525412837",
                //    "img_url":"http://q1.qlogo.cn/g?b=qq&nk=794135759&s=100" 
                // }
            ],
        }
    },
    methods:{
        info(){
            axios.get('/user/record/countnum').then(res =>{
                this.countTotal = res.data.result.countTotal;
                this.totalWeek = res.data.result.totalWeek;
                this.rankWeek = res.data.result.rankWeek;
            })
        },
        getList(val){
            this.flag = false;
            var page = 1;
            if(val == 1){
                page = this.page1;
            }else if(val == 2){
                page = this.page2;
            }
            axios.get('user/record/thumbup',{
                params: { 
                    'page': page,
                    'isthumbup':val
                }
            }).then(res=>{
                if(val == 1){
                    this.page1++;
                    this.list1.push.apply(this.list1,res.data.result);
                }else if(val == 2){
                    this.page2++;
                    this.list2.push.apply(this.list2,res.data.result);
                }
                this.topLoading = false;
                this.bottomLoading = false;
                this.flag = true;
            })
        },
        getInfo(item){
            // console.log(item)
            this.bInfo = item;
            this.popupVisible = true;
        },
        loadTop: function() {
            this.topLoading = true;
            if(this.sel == 1){
                this.page1 = 1;
                this.list1 = [];
                this.getList(this.sel);
                this.$refs.loadmore1.onTopLoaded();
            }else if(this.sel == 2){
                this.page2 = 1;
                this.list2 = [];
                this.getList(this.sel);
                this.$refs.loadmore2.onTopLoaded();
            }
            
        },
        loadBottom:function() {
            this.bottomLoading = true;
            if(this.flag){
                this.getList(this.sel);
            }
            if(this.sel == 1){
                this.$refs.loadmore1.onBottomLoaded();
            }else if(this.sel == 2){
                this.$refs.loadmore2.onBottomLoaded();
            }
            
        }
    },
    mounted(){
        this.topLoading = true;
        this.info();
        setTimeout(()=>{
            this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top-55;
            // console.log(this.wrapperHeight,document.documentElement.clientHeight,this.$refs.wrapper.getBoundingClientRect().top);
        },0);
        this.getList(1);
        this.getList(2);
        this.date = filters.weekNum(0);
    }
}
</script>
<style lang="less" scoped>
    a{
        text-decoration: none;
    }
    #content{  
        background: #26a2ff;
        color: white;
        border-top:1px solid #0196E6;
        margin-top: 40px;
        height: 140px; 
        text-align: center; 
        .content-top{
        display: -webkit-flex;
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        /*font-weight: bold;     */
        }   
    }
    .rank-week{
        color: white;
    }
    .content-right,.content-left{
        font-size: 13px;
    }
    .content-center{
        padding:0 30px;
    }
    .content-buttom{
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        a{
            text-decoration: none;
            color: white;
        }
    } 

    .mint-navbar{
        height: 45px;
        border-bottom: 1px solid #878787;
    } 

    .task-list{
        display: flex;
        flex-direction: column;
        padding: 0 12px 0 0;
    }
    .task-item{
        display: flex;
        height: 56px;
        padding: 8px 0;
        font-size: 14px;
        border-bottom: 2px solid #EBEBEB;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        justify-content:space-around;
    }
    .item-img,.item-time{
        width: 25%;
    }
    .item-message{
        width: 50%;
    }
    .item-img img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 20px;
    }
    .time-range{
        opacity: 0.68;
        font-size: 12px;
    }
    .page-loadmore-wrapper{
        overflow: scroll;
    }
    .loading{
        text-align: center;
    }
    .bAvatar{
        width: 30px;
        height: 30px;
        background: red;
        vertical-align: middle;
        display: inline-block;
        border-radius: 50%;
        overflow: hidden;
    }
    .bAvatar>img{
        width: 100%;
        height: 100%;
    }
    .fromTo{
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
    }
    .bInfo{
        color: #fff;
        min-height: 132px;
        border-radius: 6px;
        background-image:url(../../assets/img/VIP.jpg);
        background-size: cover;
        padding: 0 10px;
    }
    .bContent{
        text-align: center;
        font-size: 14px;
        min-height:40px;
        word-break:break-all;
        max-height: 350px;
        overflow: scroll;
    }
    .bFooter{
        font-size: 12px;
        text-align: center;
        opacity: 0.68;
        margin: 10px 0;
    }
    .bContentList{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>

