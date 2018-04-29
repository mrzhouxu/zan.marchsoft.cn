<template>
    <div v-bind:style="{height:clientHeight + 'px'}" class="login-Bg-Img">
        <div class="hTop">
            <img src="../../assets/img/log.png" alt="三月Logo">
            <span>March</span>
        </div>
        <mt-field placeholder="账号" class="login-input"  v-model="student.userName"></mt-field>
        <mt-field placeholder="密码" type="password" class="login-input"  v-model="student.passWord"></mt-field>
        <div class="login-buttonBox">
            <mt-button type="primary" class="login-button" @click.native="doSubmit">登录</mt-button>
        </div>
        
    </div>
</template>
<style>
    .login-input .mint-field-core {
        background-color: rgba(0,0,0,0);
        color: #fff;
    }
    .login-input .mint-field-core::-webkit-input-placeholder { /*WebKit browsers*/
        color: #fff;
    }
    .login-input .mint-field-core::-moz-input-placeholder { /*Mozilla Firefox*/
        color: #fff;
    }
    .login-input .mint-field-core::-ms-input-placeholder { /*Internet Explorer*/ 
        color: #fff;
    }
</style>
<style scoped>
    .login-buttonBox {
        margin: 0 20px 10px;
    }
    .login-button {
        width: 100%;
        border-radius: 20px;
        margin-top: 30px;
    }
    .hTop {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 20px;
        margin-bottom: 20px;
        padding: 29% 20px 10px;
    }
    .hTop>img {
        width:40px;
        margin-right: 10px;
    }
    .login-input {
        background-color: rgba(0,0,0,0);
        border-bottom:1px solid #fff;
        margin: 0 20px 10px;
        padding-left: 10px;
    }
    .login-Bg-Img {
        background-image: url(../../assets/img/bg.jpg);
        background-size: cover;
    }
</style>
<script>
import { Toast } from 'mint-ui';
export default {
    components:{
        
    },
    data () {
        return {
            clientHeight: document.documentElement.clientHeight,
            student: {
                userName: "",
                passWord: ""
            }
        }
    },
    methods:{
        handleClick: function() {
            Toast('提示信息');
        },
        trimStr: function(str) {
            return str.replace(/\s+/g, "");
        },
        doSubmit: function(){
            var that = this;
            var user = that.trimStr(that.student.userName);
            var userNameLength = user.
                length;
            var passW = that.trimStr(that.student.passWord);
            var passWLength = passW.
                length;

            // if (user == '') {
            //     Toast('请填写您的账号');
            //     return;
            // }else if (userNameLength != 11) {
            //     Toast('账号长度为11');
            //     return;
            // }else if (passWLength == '') {
            //     Toast('请输入密码！');
            //     return;
            // };

            axios.post('/user', {
                firstName: that.student.userName,
                lastName: that.student.passWord
            })
            .then(function (response) {
                var date = response.data.object.array;
                if (date.code) {
                    Toast('登录成功！');
                    that.$router.push({ path: '/home/record' });
                }else {
                    Toast(date.msg);
                };
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    mounted() {

    }
}
</script>