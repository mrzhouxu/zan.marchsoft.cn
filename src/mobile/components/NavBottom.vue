<template>
    <mt-tabbar v-model="select">
        <mt-tab-item @click.native="jump('/home/record')" id="1">
            <i slot="icon"  class="fa fa-user fa-lg"></i>
            点赞记录
        </mt-tab-item>
        <mt-tab-item @click.native="jump('/home/recive')" id="2">
            <i slot="icon"  class="fa fa-user fa-lg"></i>
            收到的赞
        </mt-tab-item>
        <mt-tab-item @click.native="jump('/home/mine')" id="3">
            <i slot="icon"  class="fa fa-user fa-lg"></i>
            我的赞
        </mt-tab-item>
        <mt-tab-item @click.native="jump('/home/center')" id="4">
            <i slot="icon"  class="fa fa-user fa-lg"></i>
                个人中心
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
export default {
  props: {
    selected: null
  },
  data () {
    return {
        select: '1'
    }
  },
  watch: {
    //   selected:function (val,oldval) {
    //       this.select = val;
    //   }
  },
  methods:{
      jump(url){
          this.$router.push(url);
      }
      
  },
  mounted(){
      this.select = this.selected
  }
}
</script>

