<template>
    <div v-bind:style="{height:clientHeight + 'px'}" class="bg0">
        <div class="hTop">
            <!-- <img v-bind:style="{background-image: url(../../assets/img/bg.jpg)"> -->
            <span>March</span>
        </div>
        <mt-field placeholder="账号" class="input"></mt-field>
        <mt-field placeholder="密码" type="password" class="input"></mt-field>
    </div>
</template>
<style>
    html,body{
        margin: 0;
        padding: 0;
    }
</style>
<style scoped>
    .hTop{
        color: #fff;
        font-weight: bold;
        font-size: 18px;
    }
    .input{
        background-color: rgba(0,0,0,0);
        border-bottom:1px solid #fff;
    }
    .input .mint-field-core{
        height: 100px;
    }
    .bg0{
        background-image: url(../../assets/img/bg.jpg);
        background-size: cover;
        padding: 80px 20px;
    }
</style>
<script>
import { Toast } from 'mint-ui';
export default {
    components:{
        
    },
    data () {
        return {
            clientHeight:document.documentElement.clientHeight,
        }
    },
    methods:{
      handleClick: function() {
          Toast('提示信息');
        },
    },
    mounted(){
        

    }
}
</script>