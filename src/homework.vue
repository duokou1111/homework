<template>
    <div class="header">
      <div class="content header-content">
        <div class="header-content-left">
          <img
            id="logo"
            src="https://cdn.schoolpal.cn/schoolpal/resource/ci/SchoolPal-NETCore-PC/130/common/images/icon-loginlogo-new.jpg?version=20201022223932"
          >
        </div>
        <div class="header-content-right">
          <span>申请试用</span>
          <span>官网</span>
          <span>周边</span>
          <span>关注</span>
          <span>公众号</span>
        </div>
      </div>
    </div>

    <div class="content content-body">
      <img
        class="content-body-left"
        src="https://schoolpal.oss-cn-hangzhou.aliyuncs.com/erpbanner/erplogin0827.jpg"
      />
      <div class="content-body-right">
        <div class="content-body-right-title">
          <span
            v-bind:class="{ unactive : useaccount,active : usephone }"
            @click="usePhone"
          >手机号码登录</span>
          <span
            v-bind:class="{ unactive : usephone,active : useaccount }"
            @click="useAccount"
          >账号登录</span>
        </div>
        <div id="decorate"></div>
        <div
          class="content-form"
          v-if="usephone"
        >
          <div
            class="content-body-right-inputbox"
            id="username-box"
          >
            <img
              src="https://cdn.schoolpal.cn/schoolpal/resource/ci/SchoolPal-NETCore-PC/130/common/images/login/telaccount.svg"
              style="width: 17px;height: 17px;position: absolute;left: 0px;bottom: 10px;"
            >
            <input
              type="text"
              placeholder="请输入手机号码"
              name="username"
              v-model="phone"
              @input="checkPhone"
              :class="phoneborder"
            />
            <span
              class="error"
              name="usernameError"

            >{{phoneError}}</span>
          </div>
          <div
            class="content-body-right-inputbox"
            id="password-box"
          >
            <img
              src="https://cdn.schoolpal.cn/schoolpal/resource/ci/SchoolPal-NETCore-PC/130/common/images/login/password.svg"
              style="width: 17px;height: 17px;position: absolute;left: 0px;bottom: 10px;"
            >
            <input
              type="password"
              placeholder="请输入密码"
              name="password"
              v-model="phonePassword"
              @input="checkPhonePassword"
              :class="passwordborder"
            />
            <span
              class="error"
              name="passwordError"
            >{{phonePasswordError}}</span>
          </div>
          <div
            class="content-body-right-btn"
            @click="submit"
          >登录</div>
        </div>
        <!---->
        <div
          class="content-form"
          v-if="useaccount"
        >
          <div
            class="content-body-right-inputbox"
            id="jigou-box"
          >
            <img
              src="https://cdn.schoolpal.cn/schoolpal/resource/ci/SchoolPal-NETCore-PC/130/common/images/login/telaccount.svg"
              style="width: 17px;height: 17px;position: absolute;left: 0px;bottom: 10px;"
            >
            <input
              type="text"
              placeholder="请输入机构后缀"
              name="jigou-name"
              v-model="companySuffix"
              @input="checkSuffix"
              :class="suffixborder"
            />
            <span
              class="error"
              name="jigou-nameError"
            >{{suffixError}}</span>
          </div>
          <div
            class="content-body-right-inputbox" 
            id="jigouuser-box"
          >
            <img
              src="https://cdn.schoolpal.cn/schoolpal/resource/ci/SchoolPal-NETCore-PC/130/common/images/login/telaccount.svg"
              style="width: 17px;height: 17px;position: absolute;left: 0px;bottom: 10px;"
            >
            <input
              type="text"
              placeholder="请输入登录名"
              name="jigou-username"
              v-model="companyUsername"
              @input="checkUsername"
              :class="usernameborder"
            />
            <span
              class="error"
              name="jigou-usernameError"
            >{{usernameError}}</span>
          </div>
          <div
            class="content-body-right-inputbox"
            id="jigoupassword-box"
          >
            <img
              src="https://cdn.schoolpal.cn/schoolpal/resource/ci/SchoolPal-NETCore-PC/130/common/images/login/password.svg"
              style="width: 17px;height: 17px;position: absolute;left: 0px;bottom: 10px;"
            >
            <input
              type="text"
              placeholder="请输入密码"
              name="jigoou-password"
              v-model="companyPassword"
              @input="checkCompanyPassword"
              :class="companyPasswordBorder"
            />
            <span
              class="error"
              name="jigou-passwordError"
            >{{passwordError}}</span>
          </div>
          <div
            class="content-body-right-btn"
            @click="accountSubmit"
          >登录</div>
        </div>
        <!---->

      </div>
    </div>
    <div class="content content-bottom">
      <div class="content-bottom-left">
        <div class="bold-text">相关产品</div>
        <div class="content-bottom-left-box">
          <img src="https://prox.schoolpal.cn/common/images/icon-scp.png">
          <div class="content-bottom-left-box-right">
            <div class="content-bottom-left-box-right-top">校宝收银宝</div>
            <div class="content-bottom-left-box-right-bottom">学校收费标配</div>
          </div>
        </div>
        <div class="content-bottom-left-box">
          <img src="https://prox.schoolpal.cn/common/images/icon-zhaoshengbao.png">
          <div class="content-bottom-left-box-right">
            <div class="content-bottom-left-box-right-top">校宝招生宝</div>
            <div class="content-bottom-left-box-right-bottom">学校收费标配</div>
          </div>
        </div>
        <div class="content-bottom-left-box">
          <img src="https://prox.schoolpal.cn/common/images/icon-anxinbao.png">
          <div class="content-bottom-left-box-right">
            <div class="content-bottom-left-box-right-top">校宝安心宝</div>
            <div class="content-bottom-left-box-right-bottom">学校收费标配</div>
          </div>
        </div>
      </div>
      <div class="content-bottom-right">
        <span class="bold-text">咨询热线</span>
        <div id="tel">400-6999-707</div>
      </div>
    </div>
</template>
<script>
import "@/assets/js/index.js";
import "@/assets/css/common.css";
import "@/assets/css/index.css";
export default {
  name: "App",
  data() {
    return {
      usephone: true,
      useaccount: false,
      phoneError:'',
      phonePasswordError:'',
      phone: "",
      phonePassword: "",
      companySuffix: "",
      companyUsername:"",
      companyPassword:"",
      suffixError:"",
      usernameError:"",
      passwordError:""
    };
  },
  computed :{
    phoneborder(){
      return {
         inputWrong: this.phoneError.length>=1
      }
    },
     passwordborder(){
      return {
         inputWrong: this.phonePasswordError.length>=1
      }
    },
     suffixborder(){
      return {
         inputWrong: this.suffixError.length>=1
      }
    },
    usernameborder(){
      return {
         inputWrong: this.usernameError.length>=1
      }
    },
    companyPasswordBorder(){
      return {
         inputWrong: this.passwordError.length>=1
      }
    }
  },
  methods: {
    usePhone: function () {
      this.usephone = true;
      this.useaccount = false;
    },
    useAccount: function () {
      this.usephone = false;
      this.useaccount = true;
    },
    accountSubmit: function(){
        this.checkSuffix();
        this.checkUsername();
        this.checkCompanyPassword();
    },
    submit: function () {
      var phoneFlag = this.checkPhonePassword();
      var phonePasswordFlag = this.checkPhone();
      if (phoneFlag && phonePasswordFlag) {
        var url = "https://openapi.xiaobaoxiu.cn/mock/api/v1/login";
        this.login(
          url,
          this.phone,
          this.phonePassword
        );
      }
    },
    login: function (url, username, pwd) {
      var obj = new Object();
      obj.name = username;
      obj.password = pwd;
      fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var obj = data;
          if (obj.success == true) {
            document.getElementsByClassName(
              "content-body-right-title"
            )[0].innerHTML = "欢迎你，" + obj.user.name;
            document.getElementById("content-form").style.cssText =
              "display:none";
          } else {
            document.getElementsByName("passwordError")[0].innerHTML =
              "用户名或密码错误";
          }
        });
    },
    checkCompanyPassword: function() {
      if(this.companyPassword.length < 1){
        this.passwordError = "密码不能为空";
        return false;
      }else if(this.companyPassword.length < 8){
        this.passwordError = "密码不能小于8位";
        return false;
      }else{
        this.passwordError = "";
        return true;
      }
    },
    checkUsername: function(){
       if(this.companyUsername.length < 1){
        this.usernameError = "用户名不能为空";
        return false;
      }else if(this.companyUsername.length <= 6){
        this.usernameError = "用户名不能小于6位";
        return false;
      }else{
        this.usernameError = "";
        return true;
      }
    },
    checkSuffix: function(){
      if(this.companySuffix.length < 1){
        this.suffixError = "后缀名不能为空";
        return false;
      }else if(this.companySuffix.length <= 2){
        this.suffixError = "后缀名不能小于2";
        return false;
      }else{
        this.suffixError = "";
        return true;
      }
    },
    checkPhone: function (test) {
      console.log(test)
      if(this.phone.length<11 && this.phone.length>0){
        this.phoneError = "手机号必须为11位";
        return false;
      }else if(this.phone.length < 1){
        this.phoneError = "手机号不能为空";
        return false;
      }else{
        this.phoneError = "";
        return true;
      }
    },
    checkPhonePassword: function () {
      console.log("?")
      if(this.phonePassword.length<8 && this.phonePassword.length >=1){
        this.phonePasswordError = "密码必须大于8位";
        return false;
      }else if(this.phonePassword <1){
        this.phonePasswordError = "密码不能为空";
        return false;
      }
      else{
        this.phonePasswordError = "";
        return true;
      }
    },
  },
};
</script>
