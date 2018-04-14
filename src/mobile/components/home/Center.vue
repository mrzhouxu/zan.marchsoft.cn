<template>
    <div>
        <mt-header fixed title="个人中心"></mt-header>
        <NavBottom selected="4"></NavBottom>
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

        }
    },
    methods:{
        
    },
    mounted(){
        axios.get('baidu.com').then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });

    }
}
</script>

