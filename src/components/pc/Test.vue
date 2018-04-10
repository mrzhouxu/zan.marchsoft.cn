<template>
  <div>
        mobile
        
        <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>

    <Button @click="open(true)">Open notice(only title)</Button>

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

        open (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
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

