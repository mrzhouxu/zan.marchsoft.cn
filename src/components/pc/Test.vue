<template>
  <div>
        pc
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{

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

