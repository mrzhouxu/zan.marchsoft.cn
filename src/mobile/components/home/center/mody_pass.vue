<template>
  <div>
    <mt-header  title="修改密码"></mt-header>
      <router-link to="../home/center">
          <div class="back"><img src="../../../assets/img/back.png"></div>
      </router-link>
      <div class="password">
        <mt-field class="pass1" :attr="{ minlength: 6,maxlength: 18 }" label="原密码" v-model="oldpass" placeholder="请输入" type="password"></mt-field>
        <mt-field class="pass2" label="新密码" v-model="newpass" placeholder="请输入" type="password"></mt-field>
        <mt-field class="pass3" label="确认新密码" v-model="again" placeholder="请输入" type="password"></mt-field>
      </div>
        <mt-button class="submission" type="primary" size="large"  @click.native = "submission">提交</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
      oldpass: '',
      newpass:'',
      again:'',
    }
  },
  methods:{
    submission: function (){
          var reg = /^[A-Za-z0-9]{6,18}$/;
          var that = this;
          if (this.oldpass=='') {
            Toast("请输入原密码");
            return;
          } else if(!reg.test(this.oldpass)){
            Toast("密码长度为6~18位");
            return;
          }else if (this.newpass=='') {
            Toast("请输入新密码");
            return;
          } else if(!reg.test(this.newpass)){
            Toast("密码长度为6~18位");
            return;
          } else if (this.again=='') {
            Toast("请确认原密码");
            return;
          } else if (this.newpass!=this.again) {
            Toast("请确认新密码一致")
            return;
          }else if (this.oldpass==this.newpass) {
            Toast("新密码与原密码一致")
            return;
          };
          axios.post('user/personalCenter/updatePassword',{
            oldPassword:that.oldpass,
            newPassword:that.newpass,
          }).then(function (response) {
               var judge = response.data;
               if (judge.code==0) {
                Toast({
                    message: judge.msg,
                    iconClass: 'fa fa-check fa-5x'
                });
                that.$router.push({ path: '/home/center' });
               } else {
                 Toast({
                    message: judge.msg,
                    iconClass: 'fa fa-remove  fa-5x'
                });
               }; 
            })
            .catch(function (error) {
                // console.log(error);
            });
      }
  },
  mounted(){
    
  }
}
</script>

<style>
    .back {
          z-index: 1;
          position: absolute;
          top: 8px;
          left: 10px;
      }
    .back>img {
        width: 25px;
    }

    .password {
      /* margin: 50px 0 20px 0; */
      margin-bottom: 20px;
    }
    .pass1,.pass2,.pass3 {
        border-bottom: 1px solid rgba(187,187,187, 0.2);
        margin: 10px 0 0 0;
    }
    .submission {
      /* width: 300px; */
      margin: 0 auto;
    }
</style>