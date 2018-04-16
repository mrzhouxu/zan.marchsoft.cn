<template>
  <div>
<<<<<<< HEAD:src/mobile/components/Test.vue
        pc
        <mt-button @click.native="handleClick">按钮</mt-button>
=======
        <h1>我是后台</h1>
        

>>>>>>> 01d3f8177bc07d7939babe49014b5f0d6a58a7fd:src/mobile/components/admin/Test.vue
  </div>
</template>

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
    },
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

