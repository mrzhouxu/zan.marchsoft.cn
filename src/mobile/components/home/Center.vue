<template>
    <div>
        <mt-header fixed title="个人中心"></mt-header>
        <div id="test">
            <div class="bg-user">
                <!-- <div class="user-picture"><img src="../../assets/img/user_picture.png"></div> -->
                <div class="user-picture"><img :src="'http://q1.qlogo.cn/g?b=qq&nk='+userInfo.qq_account+'&s=100'"></div>
                <div class="per-infor">
                    <p style="min-height:30px;">{{userInfo.name}}</p>
                    <!-- <p>{{userInfo.stuNumber}}</p> -->
                </div>
            </div>
            <div class="per-center">
                <router-link to="/center/purchase">
                    <div class="my purchase">
                        <div class="small-icons"><img src="../../assets/img/user_one.png"></div>
                        <div class="per-text"><p>购买点赞币</p></div>
                    </div>
                </router-link>
                
                <router-link to="/center/my_order">
                    <div class="my order">
                        <div class="small-icons"><img src="../../assets/img/user_two.png"></div>
                        <div class="per-text"><p>我的订单</p></div>
                    </div>
                </router-link>
                
                <router-link to="/center/apply">
                    <div class="my apply">
                        <div class="small-icons"><img src="../../assets/img/user_three.png"></div>
                        <div class="per-text"><p>申请点赞币</p></div>
                    </div>
                </router-link>

                <!-- <router-link to="/center/accept">
                    <div class="my accept">
                        <div class="small-icons"><img src="../../assets/img/user_four.png"></div>
                        <div class="per-text"><p>接受订单任务</p></div>
                    </div>
                </router-link> -->

                <router-link to="/center/feedback">
                    <div class="my feedback">
                        <div class="small-icons"><img src="../../assets/img/user_five.png"></div>
                        <div class="per-text"><p>匿名聊天</p></div>
                    </div>
                </router-link>

                <router-link to="/center/mody_pass">
                    <div class="my mod-pass">
                        <div class="small-icons"><img src="../../assets/img/user_six.png"></div>
                        <div class="per-text"><p>修改密码</p></div>
                    </div>
                </router-link>

                <router-link to="/center/rule_desc">
                    <div class="my rule-desc">
                        <div class="small-icons"><img src="../../assets/img/user_seven.png"></div>
                        <div class="per-text"><p>规则说明</p></div>
                    </div>
                </router-link>

                <router-link to="/admin/sendB" v-if="userInfo.type==2">
                    <div class="my rule-desc" >
                        <div class="small-icons"><img src="../../assets/img/user_seven.png"></div>
                        <div class="per-text"><p>管理员发币</p></div>
                    </div>
                </router-link>

                <router-link to="/admin/approvalB" v-if="userInfo.type==2">
                    <div class="my rule-desc">
                        <div class="small-icons"><img src="../../assets/img/user_seven.png"></div>
                        <div class="per-text"><p>管理员审批</p></div>
                    </div>
                </router-link>
                
                <!-- <router-link to="/center/sign_out"> -->
                    <div class="my sign-out" @click="login_out">
                        <div class="small-icons"><img src="../../assets/img/user_eight.png"></div>
                        <div class="per-text"><p>退出登录</p></div>
                    </div>

                <!-- </router-link> -->
                <!-- <div style="height:100px"></div>  -->
            </div>
            <div class="baseline">
                <p></p>
                <p>我是有底线的</p>
                <p></p>
            </div>
        </div>
        <NavBottom selected="4" class="bottom"></NavBottom>
    </div>
</template>

<script>
import NavBottom from '../NavBottom.vue'
import { MessageBox } from 'mint-ui';
import { Toast,Indicator } from 'mint-ui';
import {waitData} from '../../wait';
export default {
    components: {
        NavBottom
    },
    data() {
        return {
            userInfo:{
                id:0,
                name:" ",
                stuNumber:' ',
                qq_account:"undefined"
            }
        }
    },
    watch:{
        
    },
    methods: {
        login_out(){
            MessageBox.confirm('确定执行此操作?').then(action => {
                axios.get("/user/login_out").then(res=>{
                    // console.log(res.data)
                    if(res.data.code == 0){
                        Toast({
                            message: '操作成功',
                            iconClass: 'fa fa-check fa-5x'
                        });
                        this.$router.push('/sign/login');
                    }
                }).catch(err=>{
                    // console.log(12)
                })
            }).catch(err=>{
                // console.log(112)
            });
        },

        getInfo(){
            Indicator.open({
                text: waitData[Math.floor(Math.random()*(waitData.length))],
                spinnerType: 'fading-circle'
            });
            axios.get("/user/getInfo").then(res=>{
                this.userInfo = res.data.result;
                Indicator.close();
            }).catch(err=>{

            })
        }
    },
    mounted() {
        this.getInfo();
    }
}
</script>
<style scoped>
    #test {
        /*background: yellow!important;*/
    }
    
    /*用户信息*/
    .bg-user {
        width: 100%;
        display: flex;
        flex-direction:column;
        align-items:center;
        background: url(../../assets/img/bg_user.jpg) no-repeat center center;
        background-size: 100% 100%;
        border-bottom: 10px solid #f5f5f5;
    }
    .user-picture {
        margin: 50px 0 0 0;
    }
    .user-picture>img {
        width: 64px;
        border-radius: 50%;
        padding: 2px;
        background: white;
    }
    .per-infor {
        width: 40%;
        margin: -20px 0 0 0;
    }
    
    p:nth-child(1) {
        line-height: 0;
        font-size: 18px;
        margin: 22px 0 0 0;
    }
    p:nth-child(2) {
        font-size: 14px;
        line-height: 15px;
    }
    .per-infor>p {
        text-align: center;
        line-height: 30px;
        font-size: 18px;
        margin: 20px 0 10px 0;
    }
    /*个人中心*/
    .per-center {
        width: 100%;
    }
    .my,.baseline {
        display: flex;
    }
    .per-text {
        width: 88%;
        border-bottom: 1px solid rgba(187,187,187, 0.43);
        padding: 0 0 17px 0;
        margin: 0 0 0 16px;
    }
    .per-center p {
        color: #101010;
        font-size: 16px;
        margin: 28px 0 0 0;
    }
    a {
        text-decoration:none;
    }
    .small-icons>img {
        width: 25px;
        margin: 16px 0 0 16px;
    }
    .sign-out {
        /* margin: 0 0 25px 0; */
    }
    .bottom {
        position: fixed;
    } 
    .baseline p:nth-child(1),.baseline p:nth-child(3) {
        width: 110px;
        margin: 20px 5px 0 0;
        border-top: 0.7px solid rgba(187,187,187, 0.43);
    }
    .baseline p:nth-child(3) {
        margin: 20px 0 0 5px;
    }
    .baseline {
        color: #c6c9cd;
        /* background: #f5f5f5; */
        justify-content: center;
        margin: 0 0 50px 0;
        padding: 5px 0 10px 0;
    }
</style>

