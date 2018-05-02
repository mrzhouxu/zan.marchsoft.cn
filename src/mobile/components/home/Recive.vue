<template>
    <div>
        <mt-header title="收到的赞"></mt-header>

        <mt-navbar class="page-part recive-navbar" v-model="selected">
            <mt-tab-item id="1">已使用({{dataUsed.length}})</mt-tab-item>
            <mt-tab-item id="2">未使用({{data.length}})</mt-tab-item>
            <mt-tab-item id="3">已过期({{dataOld.length}})</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell title="普通点赞币" @click.native="fade" is-link>
                    <span>{{UsUsed.Pu}}张</span>
                    <img slot="icon" src="../../assets/img/copper.png" width="24" height="24">
                </mt-cell>
                <div class="recive-card" id="recive-card-normal">
                    <p id="reciveShort11"  class="reciveShort">
                        <span>暂没有使用该点赞币</span>
                    </p>
                    <div v-for="d in dataUsed" v-if="d.type==1"  class="recive-card-operay">

                        <div class="recive-card-message-up">
                            <div class="recive-card-message">
                                <img src="../../assets/img/head.jpg" alt="头像">
                                <span>{{d.name}} 给我点赞！</span>
                            </div>
                            <span class="recive-card-time">已使用</span> 
                        </div>
                        <p>原因：{{d.reason}}</p>
                        <!-- <div class="recive-card-message-down">
                            <span>{{d.startTime}}-{{d.endTime}}</span>
                        </div> -->
                    </div>
                </div>

                <mt-cell title="VIP点赞币"  @click.native="fade2"  is-link>
                    <span>{{UsUsed.Vip}}张</span>
                    <img slot="icon" src="../../assets/img/vip.png" width="24" height="24">
                </mt-cell>
                <div class="recive-card" id="recive-card-vip">
                    <p id="reciveShort12"  class="reciveShort">
                        <span>暂没有使用vip点赞币</span>
                    </p>
                    <div class="reciveCardVip recive-card-operay2" v-for="d in dataUsed" 
            v-if="d.type==2">
                        <div class="recive-card-message-up">
                            <div class="recive-card-message">
                                <img src="../../assets/img/head.jpg" alt="头像">
                                <span>{{d.name}} 给我点赞！</span>
                            </div>
                            <span class="recive-card-time">已使用</span> 
                        </div>
                        <p>原因：{{d.reason}}</p>
                    </div>
                </div>

            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell title="普通点赞币" @click.native="fade21" is-link>
                    <span>{{Us.Pu}}张</span>
                    <img slot="icon" src="../../assets/img/copper.png" width="24" height="24">
                </mt-cell>
                <div class="recive-card" id="recive-card-normal21">
                    <p id="reciveShort"  class="reciveShort">
                        <span>暂无该点赞币</span>
                    </p>
                    <div v-for="d,index in data" 
            v-if="d.type==1" v-on:click="greet2(d.isActive,index)" v-bind:class="{ reciveCardSelect: d.isActive }">
                        <div class="recive-card-message-up">
                            <div class="recive-card-message">
                                <img src="../../assets/img/head.jpg" alt="头像">
                                <span>{{d.name}} 给我点赞！</span>
                            </div>
                            <span class="recive-card-time">{{d.endTime}}过期</span> 
                        </div>
                        <p>原因：{{d.reason}}</p>
                        <!-- <div class="recive-card-message-down">
                            <span>{{d.startTime}}-{{d.endTime}}</span>
                        </div> -->
                    </div>
                </div>

                <mt-cell title="VIP点赞币"  @click.native="fade22"  is-link>
                    <span>{{Us.Vip}}张</span>
                    <img slot="icon" src="../../assets/img/vip.png" width="24" height="24">
                </mt-cell>
                <div class="recive-card" id="recive-card-vip22">
                    <p id="reciveShort2" class="reciveShort">
                        <span>暂无该点赞币</span>
                    </p>
                    <div class="reciveCardVip" v-for="d,index in data" 
            v-if="d.type==2" v-on:click="greet2(d.isActive,index)" v-bind:class="{ reciveCardSelect: d.isActive }">
                        <div class="recive-card-message-up">
                            <div class="recive-card-message">
                                <img src="../../assets/img/head.jpg" alt="头像">
                                <span>{{d.name}} 给我点赞！</span>
                            </div>
                            <span class="recive-card-time">永久有效</span> 
                        </div>
                        <p>原因：{{d.reason}}</p>
                    </div>
                </div>
                <div class="recive-buy-bottom">
                    <div>
                        <span>已选中：<strong>{{using}}</strong>张</span>
                    </div>
                    <mt-button size="normal" class="recive-buy-button" @click.native="doUse">去使用</mt-button>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell title="普通点赞币" @click.native="fade31" is-link>
                    <span>{{UsOld.Pu}}张</span>
                    <img slot="icon" src="../../assets/img/copper.png" width="24" height="24">
                </mt-cell>
                <div class="recive-card" id="recive-card-normal31">
                    <p id="reciveShort31" class="reciveShort">
                        <span>暂无该点赞币</span>
                    </p>
                    <div v-for="d in dataOld" v-if="d.type==1" class="recive-card-old">
                        <div class="recive-card-message-up">
                            <div class="recive-card-message">
                                <img src="../../assets/img/head.jpg" alt="头像">
                                <span>{{d.name}} 给我点赞！</span>
                            </div>
                            <img src="../../assets/img/old.png" class="recive-card-time-old" alt="过期标志"> 
                        </div>
                        <p>原因：{{d.reason}}</p>
                        <!-- <div class="recive-card-message-down">
                            <span>2017年4月14日-2017年4月20日</span>
                        </div> -->
                    </div>
                </div>
            </mt-tab-container-item>
        </mt-tab-container>

        <div style="height: 100px"></div>
        <NavBottom class="nav-bottom"></NavBottom>

    </div>
</template>
<style scoped>
    .reciveShort {
        font-size: 14px;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }
    .nav-bottom {
        position: fixed;
    }
    .recive-buy-bottom {
        position: fixed;
        bottom: 55px;
        width: 100%;
        background-color: #fff;
    }
    .recive-buy-bottom>div {
        width: 70%;
        float: left;
        border-top: 1px solid #e6e6e6;
        border-bottom: 1px solid #e6e6e6;
        height: 43px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .recive-buy-bottom>div strong {
        color: orange;
        margin-right: 5px;
        font-size: 19px;
        font-weight: normal;
    }
    .recive-buy-button {
        background-color: orange;
        height: 45px;
        color: #fff;
        width: 30%;
        float: right;
        font-size: 15px;
    }
    .recive-navbar .is-selected {
        border-bottom: 4px solid #26a2ff !important;
    }
    .recive-card>div{
        width: 100%;
        height: 75px;
        background-image: url(../../assets/img/normal.jpg);
        border-radius: 7px;
        margin-bottom: 10px;
    }
    .reciveCardVip {
        background-image: url(../../assets/img/VIP.jpg) !important;
    }
    .recive-card-operay,.reciveCardSelect {
        opacity: 0.5;
    }
    .recive-card-operay2 {
        background-image: url(../../assets/img/VIP-used.jpg) !important;
    }
    .recive-card-old {
        background-image: url(../../assets/img/normal-old.png) !important;
        background-size: 100% 100%;
    }
    .recive-card-time-old {
        width: 40px !important;
    }
    .recive-card-message-up {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .recive-card>div>p {
        margin: 0;
        margin-left: 35px;
        color: #fee;
        font-size: 10px;
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
    .recive-card img {
        width: 21px;
        margin-right: 7px;
        border-radius: 50%;
    }
    .recive-card-message{
        display: flex;
        align-items: center;
        margin: 7px 0 3px 7px;
    }
    .recive-card-message>span {
        font-size: 10px;
        color: #fee;
    }
    .recive-card-time {
        margin: 7px;
        font-size: 10px;
        color: #fff;
        opacity: 0.7;
    }
    .recive-card {
        /*height: 300px;*/
        background-color: #f5f5f5;
        padding: 10px;
    }
</style>
<script>
import { Toast } from 'mint-ui';
import {filters} from '../../filter'
import NavBottom from '../NavBottom.vue';
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
            using: 0,
            ids: [],
            isActive: false,
            data: [],
            dataUsed: [],
            dataOld: [],
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
        getData: function() {
            var zanwu = this.Id('reciveShort');
            var zanwu2 = this.Id('reciveShort2');
            var that = this;
            axios.get('/user/seeCon',{
                type: 0
            })
            .then(function (response) {
                var list = response.data.list;
                for (var i = 0; i < list.length; i++) {
                    var arr = [];
                    arr.type = list[i].coin_id;
                    arr.isActive = false;
                    arr.name = list[i].name;
                    arr.reason = list[i].reason;
                    // arr.startTime = list[i].startTime;
                    arr.endTime = list[i].endTime;
                    arr.id = list[i].id;
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
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        getDataUsed: function() {
            var zanwu11 = this.Id('reciveShort11');
            var zanwu12 = this.Id('reciveShort12');
            var that = this;
            axios.get('/user/seeCon',{
                type: 1
            })
            .then(function (response) {
                var list = response.data.list;
                for (var i = 0; i < list.length; i++) {
                    var arr = [];
                    arr.type = list[i].coin_id;
                    arr.name = list[i].name;
                    arr.reason = list[i].reason;
                    // arr.startTime = list[i].startTime;
                    arr.endTime = list[i].endTime;
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
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        getDataOld: function() {
            var zanwu31 = this.Id('reciveShort31');
            var that = this;
            axios.get('/user/seeCon',{
                type: 2
            })
            .then(function (response) {
                var list = response.data.list;
                for (var i = 0; i < list.length; i++) {
                    var arr = [];
                    arr.type = list[i].coin_id;
                    arr.name = list[i].name;
                    arr.reason = list[i].reason;
                    // arr.startTime = list[i].startTime;
                    arr.endTime = list[i].endTime;
                    that.dataOld.push(arr);
                    if(arr.type == 1) {
                        zanwu31.style.display = "none";
                        that.UsOld.Pu++;
                    };
                };
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        greet: function() {
            if (!this.isActive) {
                this.isActive = true;
                this.using++;
            }else {
                this.isActive = false;
                this.using--;
            }; 
        },
        greet2 (val,index) {
            if(val) {
                this.using--;
            } else {
                this.using++;
            }
            this.data[index].isActive = !val;
        },
        doUse: function() {
            if (!this.using) {
                Toast('请选择您要使用的点赞币！');
                return;
            };
            this.ids = [];
            for(let i of this.data) {
                if(i.isActive) {
                    this.ids.push(i.id);
                }
            }
            this.$router.push({ path: '/home/recive/buy/'+filters.xtoy(JSON.stringify(this.ids)) });
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
            var normal = this.Id('recive-card-normal31');
            this.fadeToggle(normal);
        },
        fade21: function() {
            var normal = this.Id('recive-card-normal21');
            this.fadeToggle(normal);
        },
        fade22: function() {
            var vipM = this.Id('recive-card-vip22');
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
        console.log(filters.xtoy("[1,2,3]"),filters.ytox('VjNwRmMwMXBkM3BZVVQwOQ=='));
        this.getData();
        this.getDataUsed();
        this.getDataOld();
    }
}
</script>

