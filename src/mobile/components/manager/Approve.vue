<template>
    <div v-bind:style="{minHeight:clientHeight + 'px'}" class="approveBox">
        <h3 class="approveH3">点赞币发放审批</h3>
        <h5>新订单：</h5>
        <div v-for="n in date" class="approveOrder">
            <div class="approveOrderLeft">
                <img src="../../assets/img/copper.png" alt="">
                <div>
                    <p>{{n.name}}</p>
                    <p>购买点赞币：{{n.number}}张</p>
                </div>
            </div>
            <mt-button class="approveButton" type="primary" @click.native="grant(n.name,n.number)">发放</mt-button>
        </div>
        <h5>历史记录：</h5>
        <div v-for="n in date" class="approveOrder">
            <div class="approveOrderLeft">
                <img src="../../assets/img/copper.png" alt="">
                <div>
                    <p>{{n.name}}</p>
                    <p>购买点赞币：{{n.number}}张</p>
                </div>
            </div>
            <span>{{n.status}}</span>
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
            date: [],
            //初始化无限加载相关参数
            loading: false,
            list: [
            {
                name: 0,
            },
            {
                name: 1,
            },
            {
                name: 2,
            }
            ],
        }
    },
    methods:{
        getOrder: function () {
            var that = this;
            axios.get('/getOrder')
            .then(function (response) {
                var list = response.data.list;
                for (var i = 0; i < list.length; i++) {
                    var j = [];
                    j.name = list[i].name;
                    j.number = list[i].number;
                    j.status = list[i].status.msg;
                    that.date.push(j);
                };
                console.log(that.date);
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        grant: function (name,number) {
            var that = this;
            axios.get('/grant',{
                name: name,
                number: number,
            })
            .then(function (response) {
                var list = response.data.list;
                if (list.code) {
                    Toast("发放成功");
                    that.$router.push({ path: '/manager/approve' });
                }else {
                    Toast("发放失败");
                };
            })
            .catch(function (error) {
                console.log(error);
            })
        },
        //无限加载函数
    },
    mounted() {
        this.getOrder();
        // this.loadMore();
    }
}
</script>