<template>
    <div v-bind:style="{minHeight:clientHeight + 'px'}" class="approveBox">
        <h3 class="approveH3">点赞币发放审批</h3>
        <h5>新订单：</h5>
        <div v-for="n in date" class="approveOrder">
            <div class="approveOrderLeft">
                <img src="../../assets/img/copper.png" alt="">
                <div>
                    <p>徐红</p>
                    <p>购买点赞币：1张</p>
                </div>
            </div>
            <mt-button class="approveButton" type="primary">发放</mt-button>
        </div>
        <h5>历史记录：</h5>
        <div v-for="n in date" class="approveOrder">
            <div class="approveOrderLeft">
                <img src="../../assets/img/copper.png" alt="">
                <div>
                    <p>徐红</p>
                    <p>购买点赞币：1张</p>
                </div>
            </div>
            <span>交易成功</span>
        </div>
    </div>
</template>
<style scoped>
    .approveBox {
        background-color: #f5f5f5;
    }
    .approveOrder {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-bottom: 2px;
    }
    .approveOrder>span {
        font-size: 14px;
        color: #c6c6c6;
    }
    .approveOrderLeft {
        display: flex;
        justify-content: start;
        align-items: center;
    }
    .approveOrderLeft>img {
        width: 35px;
        margin-right: 10px;
    }
    .approveOrderLeft>div>p {
        margin: 7px 0;
        font-size: 14px;
    }
    .approveButton {
        width: 70px;
        font-size: 14px;
    }
    .approveBox>h5 {
        margin: 10px 10px 5px;
        font-weight: normal;
    }
    .approveH3 {
        font-weight: normal;
        padding-left: 10px;
        margin: 0;
        padding: 10px;
        background-color: #fff;
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
            date: [1,2,3]
        }
    },
    methods:{
        
    },
    mounted() {

    }
}
</script>