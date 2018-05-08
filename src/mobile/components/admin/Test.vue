<template>
  <div>
        <ul
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
  <li v-for="item in list">{{ item }}</li>
</ul>
  </div>
</template>


<script>
import { Navbar, TabItem } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
        list:[1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
  },
  methods:{
    loadMore() {
        this.loading = true;
  setTimeout(() => {
    let last = this.list[this.list.length - 1];
    for (let i = 1; i <= 10; i++) {
      this.list.push(last + i);
    }
    this.loading = false;
  }, 2500);
    },
  },
  mounted(){
    // this.getB();
  }
}
</script>

