<template>
    <div>
      <!-- 这是标题头部 -->
      <mt-header fixed title="获赞排行榜"></mt-header>
      <NavBottom selected="1"></NavBottom>

      <div class="selected">

        <div class="span">
         <p>全部<i class="fa fa-sort-desc"></i></p>
        </div>

        <div class="selected_item">

          <div class="grade">
            <div class="item_list">
              <span>年级</span>
              <span><i class="fa fa-angle-up"></i></span>
            </div>
            <div class="item_list">
              <mt-button type="primary">大一</mt-button>
              <mt-button type="primary">大二</mt-button>
              <mt-button type="primary">大三</mt-button>
              <mt-button type="danger">大四</mt-button>
            </div>  
          </div>

          <div class="time">
            <div class="item_list">
              <span>时间区间</span>
              <span><i class="fa fa-angle-up"></i></span>
            </div>
            <div class="item_list">
              <mt-button @click="open('picker1')" size="large">日期选择</mt-button>
              <br>
              <mt-datetime-picker
                ref="picker1"
                type="date"
                v-model="value1"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                :startDate="startDate"
                :endDate="endDate"
                @confirm="handleChange">
              </mt-datetime-picker>
            </div> 
          </div>

        </div>
      </div>

    </div>
</template>

<script>
import NavBottom from '../../NavBottom.vue'

export default {
  // name:'page-navbar',

  components:{
      NavBottom
  },
  data () {
      return {
          selected:'1',


          value: null,
          value1: null,
          //show: true,
          startDate: new Date('2014-1-1'),
          endDate: new Date()
      }
  },
  methods:{

    open(picker) {
        this.$refs[picker].open();
      },
      handleChange(value) {
        this.date1 = value.toString();
        //this.show = true;
        Toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },

      //点击全部
      
  },
  mounted(){
      
  }
}
</script>

<style lang="less" scoped>
  .selected{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
    text-align: center;
    background: #F8F8F8;
    .span{
    border-bottom: 1px solid #878787;
    height: 45px;
    }
    .selected_item{
      height: 100px;
      
    }
  }
  
</style>

