<template>
  <div>
        pc
        <mt-button @click.native="handleClick">按钮</mt-button>
        <mt-cell title="姓名"></mt-cell>
        <mt-cell title="班级" value="计科163"></mt-cell>
  </div>
</template>
<style>
  
</style>
<script>

import { Toast } from 'mint-ui';
export default {
  data () {
    return {
     
    }
  },
  methods:{
    handleClick: function() {
      Toast('提示信息');
    }
  },
  
  mounted(){
 
    axios.get('baidu.com')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
</script>

