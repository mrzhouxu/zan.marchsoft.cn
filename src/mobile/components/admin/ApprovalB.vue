<template>
  <div>
        <mt-header fixed title="审批">
            <router-link to="../home/center" slot="left">
            <div class="back"><img src="../../assets/img/back.png"></div>
            </router-link>
        </mt-header>
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
                            <span style="vertical-align: middle;float:right;">{{item.created_time*1000 | timeago}}</span>
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
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="10">
                    <div v-for="(item,index) in listO" :key="index" style="padding: 10px 10px 10px;background:white;">
                        <div>
                            <img class="avatar" :src="'http://q1.qlogo.cn/g?b=qq&nk='+item.qq_account+'&s=100'">
                            <span style="vertical-align: middle;">{{item.name}}</span>
                            <span style="vertical-align: middle;float:right;">{{item.created_time*1000 | timeago}}</span>
                        </div>
                        <div style="padding:10px 0;">
                            <p style="padding:0;margin:0;">点赞币使用数量 : {{item.coin_sum}} 个币</p>
                            <p style="padding:0;">原因：</p>
                            <p style="padding:0;margin:0;text-align:center;">{{item.content}}</p>
                        </div>
                        <mt-button type="primary" size="large" @click.native="sumitB(item.id,1)" v-if="item.status==0">完成</mt-button>
                        <mt-button type="danger" size="large" style="margin-top:10px;"  @click.native="sumitB(item.id,2)" v-if="item.status==0">拒绝</mt-button>
                        <mt-button disabled type="primary" v-if="item.status==1" style="margin-top:10px;" size="large">已完成</mt-button>
                        <mt-button disabled type="danger" v-if="item.status==2" style="margin-top:10px;" size="large">已拒绝</mt-button>
                    </div>
                </div>
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
.back {
    z-index: 1;
    position: absolute;
    top: 8px;
    left: 10px;
}
.back>img {
    width: 25px;
}
</style>

<script>
import { Navbar, TabItem } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
export default {
  data () {
    return {
        selected:'1',
        bPage:1,
        flagB:false,
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
        oPage:1,
        flagO:false,
        listO:[
            // {
            //     id:0,
            //     qq_account:'qq',
            //     content:'',
            //     name:"",
            // },
            // {
            //     id:0,
            //     qq_account:'qq',
            //     content:'',
            //     name:"",
            // },
        ]
    }
  },
  watch:{
      selected(val){
          this.bPage = 1;
          this.oPage = 1;
          this.listB = [];
          this.listO = [];
          if(val==1){
              this.getB()
          }else if(val==2){
              this.getO();
          }
      }
  },
  methods:{
    loadMore() {
        this.loading = true;
        if(this.flagB&&this.selected == "1"){
            this.flagB = false;
            this.getB();
        }else if(this.flagO&&this.selected == "2"){
            this.flagO = false;
            this.getO();
        }
    },
    getB(){
        Indicator.open();
        axios.get("/admin/apply/get",{
            params: { 'page': this.bPage }
        }).then((res)=>{
            if(res.data.code == 0){
                Indicator.close();
                this.bPage++;
                console.log(res.data.result.data,res.data.result.data.length);
                if(res.data.result.data.length == 0){
                    return;
                }
                for(let i in res.data.result.data){
                    let val = res.data.result.data[i];
                    this.listB.push({
                        id:val.id,
                        qq_account:val.qq_account,
                        member:JSON.parse(val.data),
                        name:val.apply_user_name,
                        status:val.status,
                        content:val.content,
                        created_time:val.created_time
                    });
                }
                this.loading = false;
                this.flagB = true;
            }
            
        }).catch((err)=>{
            Indicator.close();
        })
    },
    getO(){
        Indicator.open();
        axios.get("admin/order/get",{
            params: { 'page': this.oPage }
        }).then((res)=>{
            Indicator.close();
            if(res.data.code == 0){
                this.oPage++;
                console.log(res.data.result.data,res.data.result.data.length);
                if(res.data.result.data.length == 0){
                    return;
                }
                for(let i in res.data.result.data){
                    let val = res.data.result.data[i];
                    this.listO.push({
                        id:val.id,
                        qq_account:val.qq_account,
                        name:val.name,
                        status:val.status,
                        content:val.content,
                        created_time:val.created_time,
                        coin_sum:val.star_coin_id.split(",").length
                    });
                }
                this.loading = false;
                this.flagO = true;
            }
        }).catch((err)=>{
            Indicator.close();
        })
    },
    sumitB(id,val){
        if(val==1){
            MessageBox.confirm('确定执行此操作?').then(action => {
                Indicator.open();
                var params = { 'id':id,'status':val};
                if(this.selected == "1"){
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
                }else if(this.selected == "2"){
                    axios.post("/admin/order/update",params).then((res)=>{
                        if(res.data.code == 0){
                            Toast('success');
                            this.listO = [];
                            this.oPage = 1;
                            this.getO();
                        }else{
                            Toast(res.data.msg);
                        }

                    }).catch((err)=>{

                    })
                }
                
            });
        }else if(val==2){
            MessageBox.confirm('你确定要拒绝这一群小鲜肉?').then(action => {
                Indicator.open();
                var params = { 'id':id,'status':val};
                if(this.selected == "1"){
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
                }else if(this.selected == "2"){
                    axios.post("/admin/order/update",params).then((res)=>{
                        if(res.data.code == 0){
                            Toast('success');
                            this.listO = [];
                            this.oPage = 1;
                            this.getO();
                        }else{
                            Toast(res.data.msg);
                        }
                    }).catch((err)=>{

                    })
                }
                
            });
        }

    }
  },
  mounted(){
    this.getB();
    // this.getO();
  }
}
</script>

