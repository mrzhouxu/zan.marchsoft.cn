<template>
  <div>
        <mt-header fixed title="审批"></mt-header>
        <mt-navbar fixed v-model="selected" style="margin-top:40px;">
            <mt-tab-item id="1">点赞币审批</mt-tab-item>
            <mt-tab-item id="2">订单审批</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected" style="margin-top:90px;background:#ccc;">
            <mt-tab-container-item id="1">
                <div v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                    <div v-for="(item,index) in listB" :key="index" style="padding: 10px 10px 10px;background:white;">
                        <div>
                            <img class="avatar" :src="'http://q1.qlogo.cn/g?b=qq&nk='+item.qq_account+'&s=100'">
                            <span style="vertical-align: middle;">{{item.name}}</span>
                            <span style="vertical-align: middle;float:right;">2018-05-08</span>
                        </div>
                        <div style="padding:10px 0;">
                            <p style="padding:0;">原因：</p>
                            <p style="padding:0;margin:0;">{{item.content}}</p>
                        </div>
                        <div>
                            <p v-for="i in item.member" style="text-align:center;">
                                工号： {{i.code}} ------ {{i.num}} 个币
                            </p>
                        </div>
                        <mt-button type="primary" size="large" @click.native="sumitB(item.id,1)" v-if="item.status==0">同意</mt-button>
                        <mt-button type="danger" size="large" style="margin-top:10px;"  @click.native="sumitB(item.id,2)" v-if="item.status==0">拒绝</mt-button>
                        <mt-button disabled type="primary" v-if="item.status==1" style="margin-top:10px;" size="large">已同意</mt-button>
                        <mt-button disabled type="danger" v-if="item.status==2" style="margin-top:10px;" size="large">已拒绝</mt-button>
                    </div>
                </div>
                <!-- <ul
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                    <li v-for="item in list">{{ item }}</li>
                </ul> -->
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
            </mt-tab-container-item>
        </mt-tab-container>
  </div>
</template>
<style scoped>
.avatar{
    border-radius: 50%;
    height: 30px;
    vertical-align: middle;
}
</style>

<script>
import { Navbar, TabItem } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
        selected:'1',
        bPage:1,
        // flagB:true,
        listB:[
            // {
            //     id:0,
            //     qq_account:'794135759',
            //     member:[
            //         {
            //             code:'11010',
            //             num:10
            //         }
            //     ],
            //     name:"123",
            // },
            // {
            //     id:0,
            //     qq_account:'794135759',
            //     member:[
            //         {
            //             code:'11010',
            //             num:10
            //         }
            //     ],
            //     name:"123",
            // }
        ],
    }
  },
  methods:{
    loadMore() {
        this.loading = true;
        this.getB();
    },
    getB(){
        axios.get("/admin/apply/get",{
            params: { 'page': this.bPage }
        }).then((res)=>{
            if(res.data.code == 0){
                this.bPage++;
                for(let i in res.data.result.data){
                    let val = res.data.result.data[i];
                    this.listB.push({
                        id:val.id,
                        qq_account:val.qq_account,
                        member:JSON.parse(val.data),
                        name:val.apply_user_name,
                        status:val.status,
                        content:val.content
                    });
                }
                this.loading = false;
            }
            
        }).catch((err)=>{

        })
    },
    sumitB(id,val){
        if(val==1){
            MessageBox.confirm('确定执行此操作?').then(action => {
                var params = { 'id':id,'status':val};
                axios.post("/admin/apply/update",params).then((res)=>{
                    if(res.data.code == 0){
                        Toast('success');
                        this.listB = [];
                        this.bPage = 1;
                        this.getB();
                    }else{
                        Toast(res.data.msg);
                    }

                }).catch((err)=>{

                })
            });
        }else if(val==2){
            MessageBox.confirm('你确定要拒绝这一群小鲜肉?').then(action => {
                var params = { 'id':id,'status':val};
                axios.post("/admin/apply/update",params).then((res)=>{
                    if(res.data.code == 0){
                        Toast('success');
                        this.listB = [];
                        this.bPage = 1;
                        this.getB();
                    }else{
                        Toast(res.data.msg);
                    }
                }).catch((err)=>{

                })
            });
        }

    }
  },
  mounted(){
    // this.getB();
  }
}
</script>

