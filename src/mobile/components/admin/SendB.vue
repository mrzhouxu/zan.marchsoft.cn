<template>
  <div class="fB">
        <mt-header fixed title="独家发币">
            <router-link to="../home/center" slot="left">
            <div class="back"><img src="../../assets/img/back.png"></div>
            </router-link>
        </mt-header>
        <div class="top">
            <!-- <mt-search  style="margin-top:40px;height:100%;">
                <div class="mint-cell" v-for="(i,index) in selectResult" :key="index">
                    <div class="mint-cell-left"></div>
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <label class="mint-checklist-label">
                                <span class="mint-checkbox">
                                    <input type="checkbox" class="mint-checkbox-input" :value="i.value" :checked="i.sel"  @click="selOnePeople(i)">
                                    <span class="mint-checkbox-core"></span>
                                </span>
                                <span class="mint-checkbox-label">{{i.label}}</span>
                            </label>
                        </div>
                        <div class="mint-cell-value">
                            <span></span>
                        </div>
                    </div>
                    <div class="mint-cell-right"></div>
                </div>
            </mt-search> -->

            <mt-checklist
                v-model="isAll"
                :options="isAllOptions"
                @change="selAll"
                style="margin-top:40px;">
            </mt-checklist>
        </div>

        <div class="content">
            <!-- <mt-checklist
                v-model="grade"
                :options="gradeOptions">
                <div>123</div>
            </mt-checklist> -->
            <div class="checkList">
                <div v-for="(item,index) in gradeOptions" :key="index">
                    <div class="mint-cell">
                        <div class="mint-cell-left"></div>
                        <div class="mint-cell-wrapper">
                            <div class="mint-cell-title">
                                <label class="mint-checklist-label" style="width:200px;vertical-align: middle;display:inline-block;">
                                    <span class="mint-checkbox">
                                        <input type="checkbox" class="mint-checkbox-input" :value="item.value" :checked="item.sel"  @click="selOneGrade(item)">
                                        <span class="mint-checkbox-core"></span>
                                    </span>
                                    <span class="mint-checkbox-label">{{ item.label }}</span>
                                </label>
                                <span style="vertical-align: middle;float:right;"  @click.stop="show('list'+index)">{{item.everyone.length}} ></span>
                            </div>
                            <div class="mint-cell-value">
                                <span></span>
                            </div>
                        </div>
                        <div class="mint-cell-right"></div>
                    </div>
                    <div class="list" :id="'list'+index">
                        <div class="mint-cell" v-for="(i,index2) in (item.everyone)" :key="index2">
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <label class="mint-checklist-label">
                                        <span class="mint-checkbox">
                                            <input type="checkbox" class="mint-checkbox-input" :value="i.value" :checked="i.sel"  @click="selOnePeople(i,item)">
                                            <span class="mint-checkbox-core"></span>
                                        </span>
                                        <span class="mint-checkbox-label">{{i.label}}</span>
                                    </label>
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                        </div>
                    </div>

                </div>
            </div>
            <div style="margin:10px;">以选： {{sum}} 人</div>
            <mt-button type="primary" size="large" @click.native="send">primary</mt-button>
        </div>

        
        
  </div>
</template>
<style>
.fB{
    background: rgba(229, 229, 229,0.6);
}
.fB .mint-searchbar{
    background: none;
    z-index: 0;
}
.fB .mint-searchbar-inner .mintui-search{
    color: black;
    padding: 10px;
    font-size: 16px;
}
.fB .mint-searchbar-inner,.fB .mint-searchbar-inner input{
    background: #E5E5E5;
}
.fB .mint-search-list{
    top: 44px;
    z-index: 1;
    margin: 44px 10px 0;
    padding: 0;
}
</style>
<style scoped>
.top{
    padding: 0 10px;
    background: white;
}
.content{
    margin-top:6px;
    background:white;
    padding:0 10px;
}
.list{
    padding-left:30px;
    height:0px;
    overflow:hidden;
}
.open{
    height:auto;
}
</style>
<style scoped>
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
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
        sum:0,
        select:'',
        selectResult:[
            {
                label: '周旭',
                value: '11016',
                sel:false
            },
            {
                label: '周旭2',
                value: '11013',
                sel:false
            },
            {
                label: '周旭3',
                value: '11018',
                sel:false
            },
        ],
        isAll:[],
        isAllOptions:[
            {
                label: '全选',
                value: '0',
                sel:false
            },
        ],
        grade:[],
        gradeOptions:[
            {
                label: '大一',
                value: '-1',
                sel:false,
                everyone:[
                    // {
                    //     label: '周旭',
                    //     value: '11016',
                    //     sel:false
                    // },
                    // {
                    //     label: '周旭2',
                    //     value: '11013',
                    //     sel:false
                    // },
                    // {
                    //     label: '周旭3',
                    //     value: '11018',
                    //     sel:false
                    // },
                ],
            },
            {
                label: '大二',
                value: '-2',
                sel:false,
                everyone:[
                    // {
                    //     label: '周旭',
                    //     value: '11019',
                    //     sel:false
                    // },
                    // {
                    //     label: '周旭2',
                    //     value: '11013',
                    //     sel:false
                    // },
                    // {
                    //     label: '周旭3',
                    //     value: '11018',
                    //     sel:false
                    // },
                ],
            },
            {
                label: '大三',
                value: '-3',
                sel:false,
                everyone:[
                    // {
                    //     label: '周旭',
                    //     value: '11099',
                    //     sel:false
                    // },
                    // {
                    //     label: '周旭2',
                    //     value: '11013',
                    //     sel:false
                    // },
                    // {
                    //     label: '周旭3',
                    //     value: '11018',
                    //     sel:false
                    // },
                ],
            }
        ],
    }
  },
  watch:{
      gradeOptions(){
          console.log(1)
      }
  },
  methods:{
        selAll(){
            console.log(this.isAll,this.isAll.length);
            if(this.isAll.length){
                // console.log("没选")
                this.gradeOptions[0].everyone.forEach((val,index,array)=>{
                    if(val.sel){
                        this.sum--;
                    }
                    val.sel = false;
                });
                this.gradeOptions[1].everyone.forEach((val,index,array)=>{
                    if(val.sel){
                        this.sum--;
                    }
                    val.sel = false;
                });
                this.gradeOptions[2].everyone.forEach((val,index,array)=>{
                    if(val.sel){
                        this.sum--;
                    }
                    val.sel = false;
                });
                this.gradeOptions[0].sel = false;
                this.gradeOptions[1].sel = false;
                this.gradeOptions[2].sel = false;
            }else{
                // console.log("选")
                this.gradeOptions[0].everyone.forEach((val,index,array)=>{
                    if(!val.sel){
                        this.sum++;
                    }
                    val.sel = true;
                });
                this.gradeOptions[1].everyone.forEach((val,index,array)=>{
                    if(!val.sel){
                        this.sum++;
                    }
                    val.sel = true;
                });
                this.gradeOptions[2].everyone.forEach((val,index,array)=>{
                    if(!val.sel){
                        this.sum++;
                    }
                    val.sel = true;
                });
                this.gradeOptions[0].sel = true;
                this.gradeOptions[1].sel = true;
                this.gradeOptions[2].sel = true;
            }
        },
        show(id){
            var el = document.getElementById(id);
            var elClass = el.getAttribute("class");
            if(elClass.indexOf("open")!=-1){
                var temp = elClass.split(" ");
                var tempArr = "";
                temp.forEach((val,index,temp)=>{
                    if(val!="open"){
                        tempArr+=val;
                    }
                })
                elClass = tempArr;
            }else{
                elClass+=" open";
            }
            el.setAttribute("class",elClass);

        },
        selOneGrade(itemArr){
            itemArr.sel = !itemArr.sel;
            itemArr.everyone.forEach((val,index,array)=>{
                if(val.sel != itemArr.sel){
                    if(itemArr.sel){
                        this.sum++;
                    }else{
                        this.sum--;
                    }
                }
                
                val.sel = itemArr.sel;
            });
        },
        selOnePeople(i,itemArr){
            i.sel = !i.sel;
            if(i.sel){
                this.sum++;
            }else{
                this.sum--;
            }
            var temp = true;
            itemArr.everyone.forEach((val,index,array)=>{
                if(val.sel==false){
                    temp = false;
                }
            })
            itemArr.sel = temp;
        },
        send(){
            var data = [];
            this.gradeOptions[0].everyone.forEach((val,index,arr)=>{
                if(val.sel){
                    data.push(val.value);
                }
            });
            this.gradeOptions[1].everyone.forEach((val,index,arr)=>{
                if(val.sel){
                    data.push(val.value);
                }
            });
            this.gradeOptions[2].everyone.forEach((val,index,arr)=>{
                if(val.sel){
                    data.push(val.value);
                }
            });
            console.log(data);
            var params = {
                ids:JSON.stringify(data),
                num:0,
                coin_id:1
            };
            MessageBox.prompt('请输入个数').then(({ value, action }) => {
                params.num = value;
                axios.post("/admin/coin/give",params).then((res)=>{
                    if(res.data.code == 0){
                        alert(res.data.msg);
                    }else{
                        alert(res.data.msg);
                    }
                }).catch((err)=>{

                })
            });
        },
        getData(){
            axios.get("admin/user/get").then((res)=>{
                res.data.result[0].forEach((val,index,arr)=>{
                    this.gradeOptions[0].everyone.push({label: val.name,value: val.id,sel:false});
                })
                res.data.result[1].forEach((val,index,arr)=>{
                    this.gradeOptions[1].everyone.push({label: val.name,value: val.id,sel:false});
                })
                res.data.result[2].forEach((val,index,arr)=>{
                    this.gradeOptions[2].everyone.push({label: val.name,value: val.id,sel:false});
                })
            }).catch((err)=>{

            })
        }

  },
  mounted(){
        this.getData();
  }
}
</script>

