<template>
    <div>
        <mt-header title="我的赞"></mt-header>
        <mt-navbar class="page-part recive-navbar" v-model="selected">
            <mt-tab-item id="1">已使用({{dataUsed.length}})</mt-tab-item>
            <mt-tab-item id="2">未使用({{data.length}})</mt-tab-item>
            <mt-tab-item id="3">已过期({{dataOld.length}})</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell :title="'普通点赞币'" @click.native="fade" is-link>
                    <span>{{UsUsed.Pu}}张</span>
                    <img slot="icon" src="../../assets/img/copper.png" width="24" height="24">
                </mt-cell>
                <div class="recive-card" id="recive-card-normal">
                    <p id="mineShort11"  class="reciveShort">
                        <span>暂没有使用该点赞币</span>
                    </p>
                    <div v-for="(d,index) in dataUsed" v-if="d.type==1"  class="recive-card-operay" :key="index">
                        <div class="recive-card-message-up">
                            <div class="recive-card-message">
                                <img :src="'http://q1.qlogo.cn/g?b=qq&nk='+d.qq_account+'&s=100'" alt="头像">
                                <span>我给{{d.name}}点赞！</span>
                            </div>
                            <span class="recive-card-time">已使用</span> 
                        </div>
                        <p>原因：{{d.reason}}</p>
                        <div class="recive-card-message-down">
                            <span>{{d.startTime*1000 | getDateWeek}} --- {{d.endTime*1000 | getDateWeek}}</span>
                        </div>
                    </div>
                </div>

                <mt-cell :title="'VIP点赞币'"  @click.native="fade2"  is-link>
                    <span>{{UsUsed.Vip}}张</span>
                    <img slot="icon" src="../../assets/img/vip.png" width="24" height="24">
                </mt-cell>
                <div class="recive-card" id="recive-card-vip">
                    <p id="mineShort12"  class="reciveShort">
                        <span>暂没有使用vip点赞币</span>
                    </p>
                    <div class="reciveCardVip recive-card-operay2" v-for="(d,index) in dataUsed" 
            v-if="d.type==2" :key="index">
                        <div class="recive-card-message-up">
                            <div class="recive-card-message">
                                <img :src="'http://q1.qlogo.cn/g?b=qq&nk='+d.qq_account+'&s=100'" alt="头像">
                                <span>我给{{d.name}}点赞！！</span>
                            </div>
                            <span class="recive-card-time">已使用</span> 
                        </div>
                        <p>原因：{{d.reason}}</p>
                    </div>
                </div>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell :title="'普通点赞币'" @click.native="fade21" is-link>
                    <span>{{Us.Pu}}张</span>
                    <img slot="icon" src="../../assets/img/copper.png" width="24" height="24">
                </mt-cell>
                <div class="Mine-card" id="Mine-card-normal21">
                    <p id="mineShort"  class="reciveShort">
                        <span>暂无该点赞币</span>
                    </p>
                    <div v-for="(d,index) in data" v-if="d.type==1" v-on:click="doUse(index)" :key="index">
                        <div class="Mine-card-message-up">
                            <div class="Mine-card-message">
                                <span>普通点赞币</span>
                            </div>
                            <span class="Mine-card-time">{{d.endTime*1000|timeago}}过期</span> 
                        </div>
                        <div class="Mine-card-message-down">
                            <span>{{d.startTime*1000 | getDateWeek}} --- {{d.endTime*1000 | getDateWeek}}</span>
                        </div>
                    </div>
                </div>

                <mt-cell :title="'VIP点赞币'"  @click.native="fade22"  is-link>
                    <span>{{Us.Vip}}张</span>
                    <img slot="icon" src="../../assets/img/vip.png" width="24" height="24">
                </mt-cell>
                <div class="Mine-card" id="Mine-card-vip22">
                    <p id="mineShort2" class="reciveShort">
                        <span>暂无该点赞币</span>
                    </p>
                    <div class="MineCardVip" v-for="(d,index) in data" v-if="d.type==2" v-on:click="doUse(index)" :key="index">
                        <div class="Mine-card-message-up">
                            <div class="Mine-card-message">
                                <span>Vip点赞币</span>
                            </div>
                            <span class="Mine-card-time">永久有效</span> 
                        </div>
                    </div>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell :title="'普通点赞币'" @click.native="fade31" is-link>
                    <span>{{dataOld.length}}张</span>
                    <img slot="icon" src="../../assets/img/copper.png" width="24" height="24">
                </mt-cell>
                <div class="Mine-card" id="Mine-card-normal31">
                    <p id="mineShort31" class="reciveShort">
                        <span>暂无该点赞币</span>
                    </p>
                    <div v-for="(d,index) in dataOld" v-if="d.type==1" class="Mine-card-old" :key="index">
                        <div class="Mine-card-message-up">
                            <div class="Mine-card-message">
                                <span>普通点赞币</span>
                            </div>
                            <img src="../../assets/img/old.png" class="Mine-card-time-old" alt="过期标志"> 
                        </div>
                        <div class="Mine-card-message-down">
                            <span>{{d.startTime*1000 | getDateWeek}} --- {{d.endTime*1000 | getDateWeek}}</span>
                        </div>
                    </div>
                    
                </div>

            </mt-tab-container-item>
        </mt-tab-container>

        <div style="height: 100px"></div>
        <NavBottom selected="3" class="nav-bottom"></NavBottom>
    </div>
</template>
<style scoped>
    .reciveShort {
        font-size: 10px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    .nav-bottom {
        position: fixed;
    }
    .Mine-navbar .is-selected , .recive-navbar .is-selected {
        border-bottom: 4px solid #26a2ff !important;
    }
    .Mine-card>div,.recive-card>div{
        width: 100%;
        background-image: url(../../assets/img/normal.jpg);
        border-radius: 7px;
        margin-bottom: 10px;
        position: relative;
    }
    .Mine-card>div{
        height: 100px;
    }
    .recive-card>div{
        height: 75px;
    }
    .MineCardVip,.reciveCardVip {
        background-image: url(../../assets/img/VIP.jpg) !important;
    }
    .Mine-card-operay,.MineCardSelect,.recive-card-operay,.reciveCardSelect {
        opacity: 0.5;
    }
    .Mine-card-operay2,.recive-card-operay2 {
        background-image: url(../../assets/img/VIP-used.jpg) !important;
    }
    .Mine-card-old,.recive-card-old {
        background-image: url(../../assets/img/normal-old.png) !important;
        background-size: 100% 100%;
    }
    .Mine-card-time-old,.recive-card-time-old {
        width: 40px !important;
    }
    .Mine-card-message-up,.recive-card-message-up {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .Mine-card-message-up {
        position: absolute;
        top: 3px;
    }
    .Mine-card>div>p,.recive-card>div>p {
        margin: 0;
        margin-left: 35px;
        color: #fee;
        font-size: 10px;
    }
    .Mine-card-message-down {
        width: 100%;
        position: absolute;
        bottom: 10px;
        text-align: center;
    }
    .Mine-card-message-down>span {
        color: #fee;
        font-size: 10px;
        opacity: 0.6;
    }
    .recive-card-message-down {
        display: flex;
        justify-content: center;
    }
    .recive-card-message-down>span {
        margin-top: 10px;
        color: #fee;
        font-size: 10px;
        opacity: 0.6;
    }
    .Mine-card img, .recive-card img{
        width: 21px;
        margin-right: 7px;
        border-radius: 50%;
    }
    .Mine-card-message,.recive-card-message{
        display: flex;
        align-items: center;
        margin: 7px 0 3px 7px;
    }
    .Mine-card-message>span,.recive-card-message>span{
        font-size: 14px;
        color: #fee;
    }
    .Mine-card-time, .recive-card-time{
        margin: 7px;
        font-size: 10px;
        color: #fff;
        opacity: 0.7;
    }
    .Mine-card, .recive-card {
        /*height: 300px;*/
        /*background-color: #e6e6e6;*/
        padding: 10px;
        background-color: #f5f5f5;
    }
    
</style>
<script>
import { Toast,Indicator } from 'mint-ui';
import {filters} from '../../filter';
import NavBottom from '../NavBottom.vue';
import {waitData} from '../../wait';
export default {
    components:{
        NavBottom,
    },
    data () {
        return {
            selected: '2',
            Us: {
                Pu: 0,
                Vip: 0,
            },
            UsUsed: {
                Pu: 0,
                Vip: 0,
            },
            UsOld: {
                Pu: 0,
                Vip: 0,
            },
            data: [],
            dataUsed: [],
            dataOld: [],
            using: 0,
            ids: [],
            isActive: false,
        }
    },
    methods:{
        //底层共用  
        Id: function(name){ 
           return document.getElementById(name); 
        }, 
        //设置元素透明度,透明度值按IE规则计,即0~100 
        SetOpacity: function(ev, v){ 
           ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100; 
        },
        doUse: function(index) {
            var ids = this.data[index].id;
            this.$router.push({ path: '/home/mine/send/'+filters.xtoy(ids) });
            // this.$router.push({ path: '/home/mine/send/'+filters.xtoy(this.ids) });
        },
        getData: function(resolve, reject) {
            var zanwu = this.Id('mineShort');
            var zanwu2 = this.Id('mineShort2');
            var that = this;
            axios.get('/user/thumbsUp/getCoinList')
            .then(function (response) {
                var list = response.data.result;
                for (var i = 0; i < list.length; i++) {
                    var arr = [];
                    arr.type = list[i].coin_id;
                    // arr.isActive = false;
                    // arr.name = list[i].name;
                    // arr.reason = list[i].reason;
                    arr.startTime = list[i].start_time;
                    arr.endTime = list[i].over_time;
                    arr.id = list[i].id;
                    arr.qq_account = list[i].qq_account;
                    that.data.push(arr);
                    if(arr.type == 1) {
                        zanwu.style.display = "none";
                        that.Us.Pu++;
                    };
                    if(arr.type == 2) {
                        zanwu2.style.display = "none";
                        that.Us.Vip++;
                    };
                };
                resolve();
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        getDataUsed: function(resolve, reject) {
            var zanwu11 = this.Id('mineShort11');
            var zanwu12 = this.Id('mineShort12');
            var that = this;
            axios.get('/user/thumbsUp/getUsedCoinList')
            .then(function (response) {
                var list = response.data.result;
                for (var i = 0; i < list.length; i++) {
                    var arr = [];
                    arr.type = list[i].coin_id;
                    arr.name = list[i].to_user_name;
                    arr.reason = list[i].reason;
                    arr.startTime = list[i].start_time;
                    arr.endTime = list[i].over_time;
                    arr.qq_account = list[i].qq_account;
                    that.dataUsed.push(arr);
                    if(arr.type == 1) {
                        zanwu11.style.display = "none";
                        that.UsUsed.Pu++;
                    };
                    if(arr.type == 2) {
                        zanwu12.style.display = "none";
                        that.UsUsed.Vip++;
                    };
                };
                resolve();
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        getDataOld: function(resolve, reject) {
            var zanwu31 = this.Id('mineShort31');
            var that = this;
            axios.get('/user/thumbsUp/getOverdueCoinList')
            .then(function (response) {
                var list = response.data.result;
                for (var i = 0; i < list.length; i++) {
                    var arr = [];
                    arr.type = list[i].coin_id;
                    // arr.name = list[i].name;
                    // arr.reason = list[i].reason;
                    arr.startTime = list[i].start_time;
                    arr.endTime = list[i].over_time;
                    arr.qq_account = list[i].qq_account;
                    that.dataOld.push(arr);
                    if(arr.type == 1) {
                        zanwu31.style.display = "none";
                        that.UsOld.Pu++;
                    };
                };
                resolve();
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        fadeIn: function(elem, speed, opacity) {
            /* 
            * 参数说明 
            * elem==>需要淡入的元素 
            * speed==>淡入速度,正整数(可选) 
            * opacity==>淡入到指定的透明度,0~100(可选) 
            */
            var speedspeed = speed || 20; 
            var opacityopacity = opacity || 100; 
            //显示元素,并将元素值为0透明度(不可见) 
            elem.style.display = 'block'; 
            this.SetOpacity(elem, 0); 
            //初始化透明度变化值为0 
            var val = 0; 
            //循环将透明值以5递增,即淡入效果 
            this.show(val, elem, speed, opacity);
        },
        fadeOut: function(elem, speed, opacity) {
           /* 
           * 参数说明 
           * elem==>需要淡入的元素 
           * speed==>淡入速度,正整数(可选) 
           * opacity==>淡入到指定的透明度,0~100(可选) 
           */ 
          var speedspeed = speed || 20; 
          var opacityopacity = opacity || 0; 
          //初始化透明度变化值为0 
          var val = 100; 
          //循环将透明值以5递减,即淡出效果 
          this.disapear(val, elem, speed, opacity); 
        },
        show: function(val, elem, speed, opacity) {
            this.SetOpacity(elem, val); 
            val += 5;
            if (val <= opacity) {
                var that = this;
                setTimeout(function () {  
                    that.show(val, elem, speed, opacity);  
                },speed);  
                
            }
        },
        disapear: function(val, elem, speed, opacity) {
            this.SetOpacity(elem, val); 
            val -= 5;
            if (val >= opacity) {
                var that = this;
                setTimeout(function () {  
                    that.disapear(val, elem, speed, opacity);  
                },speed);  
                
            }else if (val < 0) { 
                //元素透明度为0后隐藏元素 
                elem.style.display = 'none'; 
            }
        },
        fade: function() {
            var normal = this.Id('recive-card-normal');
            this.fadeToggle(normal);
        },
        fade2: function() {
            var vipM = this.Id('recive-card-vip');
            this.fadeToggle(vipM);
        },
        fade31: function() {
            var normal = this.Id('Mine-card-normal31');
            this.fadeToggle(normal);
        },
        fade21: function() {
            var normal = this.Id('Mine-card-normal21');
            this.fadeToggle(normal);
        },
        fade22: function() {
            var vipM = this.Id('Mine-card-vip22');
            this.fadeToggle(vipM);
        },
        fadeToggle: function(normal) {
            if (normal.style.display == "none") {
                //淡入效果(含淡入到指定透明度) 
                this.fadeIn(normal,20,100);
            }else {
                //淡出效果(含淡出到指定透明度) 
                this.fadeOut(normal,20,0)
            };
        }
    },
    mounted(){
        // console.log(filters.xtoy("[1,2,3]"),filters.ytox('VjNwRmMwMXBkM3BZVVQwOQ=='));
        // this.getData();
        // this.getDataUsed();
        // this.getDataOld();
        Indicator.open({
            text: waitData[Math.floor(Math.random()*(waitData.length))],
            spinnerType: 'fading-circle'
        });
        Promise.all([
            new Promise(this.getData),
            new Promise(this.getDataUsed),
            new Promise(this.getDataOld)
        ]).then(function(val){
            Indicator.close();
        });
    }
}
</script>

