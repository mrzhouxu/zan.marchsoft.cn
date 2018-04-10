<template>
  <div>
        pc
        <mt-button @click.native="handleClick">按钮</mt-button>
        

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

