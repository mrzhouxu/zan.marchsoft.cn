<template>
    <div>
        <mt-header fixed title="点赞币"></mt-header>
        
        
        <div id="content">
            <div class="content-top">
                <div class="content-left">
                    <p>{{zan_count}}</p>
                    <p>本周获赞</p>
                </div>
                <div class="content-center">
                    <p>{{zan_count}}</p>
                    <p>获赞总数</p>
                </div>
                <div class="content-right">
                    <p>{{zan_count}}</p>
                    <!-- <router-link to="/home/rank/week"> -->
                        <p class="rank-week">本周排名</p>
                    <!-- </router-link> -->
                </div>
            </div>
            <div class="content-buttom">
                <!-- <a to="/home/record/top">获取点赞排行></a> -->
                <router-link to="/home/record/top"><i class="fa fa-bar-chart"></i> 获赞排行榜 > </router-link>
                <p class="time-range">(统计时间为：{{date}} 22:00--{{date}} 22:00)</p>
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
                            :bottom-all-loaded="allLoaded" ref="loadmore">
                                <mt-spinner type="triple-bounce" v-if="topLoading"  color="#26a2ff" class="loading"></mt-spinner>
                                    <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
                                <mt-spinner type="triple-bounce" v-if="bottomLoading"  color="#26a2ff" class="loading"></mt-spinner>
                            </mt-loadmore>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="2">
                            <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
                        </mt-tab-container-item>
                    </mt-tab-container>
            </div>
            
        </div>  

        
        <!-- <div id="task-list">
            <div class="task-item">
                <div class="item-img">
                    <img src="../../assets/img/head.jpg" alt="">
                </div>
                <div class="item-message">
                    <p>桑金超赞了你一次</p>
                    <p>努力学习，帮助他人</p>
                </div>
                <div class="item-time">
                    <p>7:50</p>
                    <p>5月1号到期</p>
                </div>
            </div>

            <div class="task-item">
                <div class="item-img">
                    <img src="../../assets/img/head.jpg" alt="">
                </div>
                <div class="item-message">
                    <p>桑金超赞了你一次</p>
                    <p>努力学习，帮助他人</p>
                </div>
                <div class="item-time">
                    <p>星期一</p>
                    <p>已使用</p>
                </div>
            </div>

        </div> -->

        <NavBottom selected="1"></NavBottom>
    </div>
</template>

<script>
import NavBottom from '../NavBottom.vue'

export default {
    components:{
        NavBottom
    },
    data () {
        return {
            selected:'1',
            zan_count:'',
            wrapperHeight: 0,
            allLoaded: false,
            sel:'1',
            date:'',
            topLoading:true,
            bottomLoading:true,
        }
    },
    methods:{
        info(){
            axios.get('lixuebing.com').then(res =>{
                 // console.log(res);
                this.zan_count = res.data.number;
                this.date = res.data.array;
            })
        },
        loadTop: function() {
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom:function() {  
            this.$refs.loadmore.onBottomLoaded();
        }
    },
    mounted(){
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top-55;
        this.info();
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
</style>

