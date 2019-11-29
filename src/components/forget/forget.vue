<template>
<div>
<div class="register-top">
<a href="javascript:history.back(-1)"><img src="../../assets/images/hm-img/back1.png" alt=""></a>
</div>
<div class="register-center">
<p>找回密码</p>
<div class="register-input"><input type="text" placeholder="请输入手机号" v-model="tel" @keydown="btnYes"></div>
<div class="register-input"><input type="text" placeholder="短信验证码" ref="note">
<div class="logincheckone" v-if="flag"  @click="checkMobile"  ref="btn">{{message}}</div>
<div class="logincheck" v-else>{{message}}</div>
</div>
<div class="login-button"><button style="background: #FF5523; color: white;" @click="changepasaward">下一步</button></div>
</div> 
</div>
</template>

<script >
import axios from 'axios'
export default {
name:'forget',
data() {
return {
message: "获取验证码",
num: 30,
flag: false,
tel: '',
}
},
methods: {
// 验证码
checkMobile() {
if (this.setIntervalId != null) return;
this.setIntervalId = setInterval(() => {
this.message = "已发送" + this.num-- + "s";
if (this.num == 0) {
clearInterval(this.setIntervalId)
this.message = "重新发送";
this.num = 30;
}
}, 1000)
// 连接短信验证码
axios.get('http://vueshop.glbuys.com/api/home/user/checkvcode?token=1ec949a15fb709370f&vcode').then((res) => {
if (res.data.code == "201") {
window.console.log("验证码输入正确")
var sj = Math.ceil(Math.random(10 + 1) * 100000)
window.localStorage.setItem("note", sj)
console.log(sj)
}
})
},
btnYes () {
//因为是从零开始所以当输入10位是其实为11位数，所以判断当输入的长度为10的时候解除按钮的禁用
if(this.tel.length=="10"){
this.flag = true
}
},

changepasaward() {
if (this.tel === "") {
window.console.log("手机号不能为空")
return
} else {
// 判断是否是十一位
if (this.tel.length != 11) {
window.console.log('请输入有效的手机号码，需是11位！');
return;
} else {
var myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
// 输入手机号不合适
if (!myreg.test(this.tel)) {
window.console.log('手机号码格式不正确');
return;
} else {
// 验证短信验证码
let checkyanzhen=this.getValue()
// 当调用的短信验证没有错误时,跳到登陆
if(checkyanzhen){
	this.$router.push("/main/reset")
}

}
}
}
},
//短信验证码的比对
getValue() {
var note = this.$refs.note.value//短信验证码
var notes = window.localStorage.getItem('note')
console.log(note)
console.log(notes)
if(note == "") {
this.$alert("短信验证码不能为空")
return  false;
}else if(note == notes) {
	// alert("短信验输入正确");
return true;
}else{
alert("短信验输入错误")
this.$refs.note.value=""
return;
}
}
},
}
</script>

<style scoped="scoped">
.register-top {
text-align: left;
padding: 0.1rem 0.2rem;
height: 0.44rem;
box-sizing: border-box;
}

.register-top a {
display: inline-block;
width: 0.22rem;
height: 0.22rem;
}

.register-top a img {
margin: 0.1rem;
vertical-align: auto;
width: 0.2rem;
height: 0.2rem;
}

.register-center {
margin-top: 0.4rem;
width: 100%;
padding: 0rem 0.2rem;
font-size: 0.16rem;
box-sizing: border-box;
}

.register-input {
width: 100%;
padding: 0.21rem 0;
box-sizing: border-box;
position: relative;
height: 0.65rem;
border-bottom: 0.01rem solid #dfdfdf;
}

.register-input input {
outline: none;
width: 100%;
height: 0.22rem;
border: white;
font-size: 0.16rem;
}
.logincheck {
		position: absolute;
		top: 0.15rem;
		right: 0rem;
		width: 1rem;
		line-height: 0.3rem;
		height: 0.3rem;
		font-size: 0.16rem;
		border: 0.01rem solid #DFDFDF;
		border-radius: 0.1rem;
		color: #999;
	}
.logincheckone {
position: absolute;
top: 0.1rem;
right: 0rem;
width: 1rem;
line-height: 0.4rem;
height: 0.4rem;
font-size: 0.16rem;
border: 0.01rem solid #FF5523;
border-radius: 0.2rem;
color: #FF5523;
}
 .login-button button{
		outline: none;
		font-size: 17px;
		width: 100%;
		height: 45px;
		line-height: 45px;
		border-radius: 25px;
		text-align: center;
		border: 0;
		margin-bottom: 15px;
		box-sizing: border-box;
	}
</style>
