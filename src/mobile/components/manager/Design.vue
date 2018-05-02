<template>
    <div v-bind:style="{minHeight:clientHeight + 'px'}" class="approveBox">
        <div>123</div>
        <form>
            <mt-radio  
                title="选择要指定的组别"  
                v-model="value"
                :options="options">
            </mt-radio>
        </form>
        <div class="designButtonBox">
            <mt-button class="designButton" type="primary" @click.native="send">发送通知</mt-button>
        </div>
        
        
    </div>
</template>
<style scoped>
    .approveBox {
        background-color: #f5f5f5;
    }
    .designButtonBox {
        padding: 20px 5%;
        width: 90%;
    }
    .designButton {
        width: 100%;
        font-size: 16px;
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
            value: "1",
            // radio的选项
            options : [
                {
                  label: '开发一组',
                  value: '1'
                },
                {
                  label: '开发二组',
                  value: '2'
                },
                {
                  label: '开发三组',
                  value: '3'
                },
                {
                  label: '开发四组',
                  value: '4'
                },
                {
                  label: '开发五组',
                  value: '5'
                },
                {
                  label: '美工组',
                  value: '6'
                }
            ],
        }
    },
    methods:{
        send: function() {
            var that = this;
            axios.get('/group',{
                group: this.value,
            })
            .then(function (response) {
                var list = response.data.list;
                if (list.code) {
                    Toast("发送成功");
                }else {
                    Toast(list.msg);
                };
            })
            .catch(function (error) {
                console.log(error);
            });
        },
    },
    mounted() {

    }
}
</script>