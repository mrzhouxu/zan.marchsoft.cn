<template>
    <div>
        <mt-header fixed title="个人中心"></mt-header>
        <div id="test" style="background:red;">123</div>
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
            a:1
        }
    },
    methods:{
        
    },
    beforeCreate(){
        console.log(this.a)
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
        console.log(this.a)
    },
    mounted(){
        // axios.get('baidu.com').then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.log(error);
        // });
        
    }
}
</script>

<style lang="less" scoped>
#test{
    background: yellow!important;
}
</style>

