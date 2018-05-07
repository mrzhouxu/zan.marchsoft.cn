<template>
    <div>
        <div class="nav">
            <mt-header title="获赞排行榜">
                <router-link to="/" slot="left">
                    <mt-button icon="back">返回</mt-button>
                </router-link>
                <mt-button icon="more" slot="right"></mt-button>
            </mt-header>
            <div class="select-div" @click="popupVisible=!popupVisible">
                全部
                <i v-if="!popupVisible" class="fa fa-caret-down"></i>
                <i v-else class="fa fa-caret-up"></i>
            </div>
        </div>
        <div style="height:80px"></div>
        <div style="border-bottom: 3px solid #EBEBEB;height: 40px;overflow: hidden;padding: 10px 20px;">
            <span style="display: inline-block;line-height: 40px;vertical-align: text-bottom;">{{user.countTotal}}</span>
             <img style="height:40px" src="../../../assets/img/order-userpic.png">
             <div style="display: inline-block;">
                 <p style="margin:0;padding:0;font-size: 16px;line-height: 20px;">桑金超</p>
                 <p style="margin:0;padding:0;font-size: 12px;line-height: 20px;">共10点人气</p>
             </div>
            <span style="display: inline-block;line-height: 40px;vertical-align: text-bottom;float: right;font-size:14px">
                <span style="color:#FF9800;">+</span><span style="color:#FF9800;font-size:20px">2</span>个赞
            </span>
        </div>
        <div style="border-bottom: 1px solid #EBEBEB;height: 40px;overflow: hidden;padding: 10px 20px;" v-for="l in list">
            <img style="height:40px" src="../../../assets/img/one.png" v-if="l.rank==1">
            <img style="height:40px" src="../../../assets/img/two.png" v-else-if="l.rank==2">
            <img style="height:40px" src="../../../assets/img/three.png" v-else-if="l.rank==3">
            <span style="display: inline-block;line-height: 40px;vertical-align: text-bottom;" v-else>{{l.rank}}</span>
             <img style="height:40px" :src="l.img_url">
             <div style="display: inline-block;">
                 <p style="margin:0;padding:0;font-size: 16px;line-height: 20px;">{{l.name}}</p>
                 <p style="margin:0;padding:0;font-size: 12px;line-height: 20px;">共{{l.total}}点人气</p>
             </div>
            <span style="display: inline-block;line-height: 40px;vertical-align: text-bottom;float: right;font-size:14px">
                <span style="color:#FF9800;">+</span><span style="color:#FF9800;font-size:20px">{{l.week}}</span>个赞
            </span>
        </div>
        <mt-popup
        v-model="popupVisible"
        position="top" class="popup-div">
            <div style="padding-top:80px;width:100%">
                    <mt-cell :title="grade.label">
                        <i class="fa fa-angle-down"></i>
                    </mt-cell>
                    <span class="option-span" v-for="g,index in grade.option"
                    :class="{'select-span':gradeSelect==g}" @click="gradeChange(g,index)">
                    {{g}}
                    </span>
                    <mt-cell :title="time.label">
                        <i class="fa fa-angle-down"></i>
                    </mt-cell>
                    <span class="option-span" v-for="t,index in time.option"
                    :class="{'select-span':timeSelect==t}" @click="timeChange(t,index)">
                    {{t}}
                    </span>
                    <div style="padding:5px">
                        <mt-button type="default" size="large" @click.native="getAllRank">查询</mt-button>
                    </div>
            </div>
        </mt-popup>
        
        <NavBottom class="nav-bottom"></NavBottom>
    </div>
</template>

<script>
import NavBottom from '../../NavBottom.vue';
import { Indicator } from 'mint-ui';
import { filters } from '../../../filter.js';
export default {
    components:{
        NavBottom,
    },
    data () {
        return {
            popupVisible: false,
            grade: {
                    label:'年级',
                    option: ['全部','大一','大二','大三']
            },
            time: {
                label: '时间区域',
                option: ['全部','本周','上周']
            },
            timeSelect: '全部',
            gradeSelect: '全部',
            timeCode: {
                start_date: 0,
                over_date: 0,
            },
            gradeCode: 0,
            user: {
                countTotal: 28,
                totalWeek: 2,
                rankWeek: 20
            },
            list: []
        }
    },
    methods:{
        // getUserRank () {
        //     axios.get('user/record/countnum').then((res)=>{
        //         if(res.data.result!=null)
        //             this.user = res.data.result
        //     });
        // },
        getAllRank () {
            this.popupVisible=false;
            Indicator.open({
                text: '等人家一下呗~',
                spinnerType: 'fading-circle'
            });
            axios.get('user/record/countList?countGrade='+this.gradeCode+'&startDate='+this.timeCode.start_date+'&endDate='+this.timeCode.over_date).then((res)=>{
                if(res.data.result!=null){
                    this.user = res.data.result[0]
                    this.list = res.data.result[1]
                }
                Indicator.close()
            })
        },
        gradeChange (g,index) {
            this.gradeSelect=g;
            this.gradeCode = index;
        },
        timeChange (t,index) {
            this.timeSelect=t;
            if(index==0) {
                this.timeCode = filters.weekNum(0);
                this.timeCode.start_date = "2000-1-1";
            }else this.timeCode = filters.weekNum(index-1);
            console.log(this.timeCode)
        }
    },
    mounted(){
        this.getAllRank()
    }
}
</script>

<style scoped>
    .nav-bottom {
        position: fixed;
    }
    .nav {
        width: 100%;
        position: fixed;
        z-index: 5000;
    }
    .select-div {
        font-size: 16px;
        line-height: 35px;
        text-align: center;
        background-color: #F8F8F8;
    }
    .popup-div {
        width: 100%;
    }
    .option-span {
        display: inline-block;
        font-size: 14px;
        padding: 5px 25px;
        margin-left: 35px;
        margin-bottom: 15px;
        background-color: #EBEBEB;
    }
    .select-span {
        color: #E83436;
        background-color: #FFDEB8;
    }
</style>
