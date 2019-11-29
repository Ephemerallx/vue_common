<template>
	<div id="register">
		<div class="register-top">
			<a href="javascript:history.back(-1)"><img src="../assets/images/hm-img/back1.png" alt=""></a>
		</div>
		<div class="register-center">
			<p>注册米途用户</p>
			<div class="register-input"><input type="text" placeholder="请输入手机号" v-model="tel" @keydown="btnYes"></div>
			<div class="register-input"><input type="text" placeholder="短信验证码" v-model='yanzhen'>
				<div class="logincheckone" v-if="flag" @click="checkMobile">{{message}}</div>
				<div class="logincheck" v-else>{{message}}</div>
			</div>
			<div class="register-input"><input type="password" placeholder="请输入密码" v-model="passward"></div>
			<div class="register-input"><input type="password" placeholder="请确认密码" v-model="pass"></div>
		</div>
		<div class="explain" style="font-size: 0.12rem; text-align: left;margin: 0.1rem;">点击注册就意味着您同意&nbsp;&nbsp;
			<a href="/main/about">&nbsp;&nbsp;米途旅游条款</a>
			<a href="/main/about">&nbsp;&nbsp;个人信息资料收集使用条款</a></div>
		<div class="login-button"><button style="background: #FF5523; color: white;" type="submit" @click="changepasaward">注册</button></div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				message: "获取验证码",
				yanzhen: '',
				num: 30,
				flag: false,
				tel: '',
				passward: '',
				pass: '',
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
				axios.get('http://10.35.167.69:8080/api/send_code/?phone='+this.tel).then((res) => {
					if (res.data.status==1) {
						console.log(res.data)
					}
					else{
						alert("验证码输入有误")
						return 
					}
				})
			},
			// 当tel长度为11位时,显示黄色按钮
			btnYes() {
				//因为是从零开始所以当输入10位是其实为11位数，所以判断当输入的长度为10的时候解除按钮的禁用
				if (this.tel.length == "10") {
					this.flag = true
				}
			},
			// 验证登录数据
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
								if (this.passward === "") {
									window.console.log("密码不能为空")
									return
								} else {
									var regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
									if (!regExp.test(this.passward)) {
										window.console.log('密码由6-21字母和数字组成，不能是纯数字或纯英文');
									} else {
										if (this.pass != this.passward) {
											alert("确认密码有误")
											return;
										} else {
											// 发送判断验证码是否输入正确
											axios({
												headers: {
													'Content-Type': 'application/json'
												},
												transformRequest: [function(data) {
													data = JSON.stringify(data)
													return data
												}],
												url: "http://10.35.167.69:8080/api/send_code/",
												method: "POST",
												data: { //body
												"phone":this.tel,
												"code": this.yanzhen
												}
											}).then(response => {
												if(response.data.status==1){
												console.log("验证成功")
												axios({
											
													url: "http://10.35.167.69:8080/api/register/",
													method: "POST",
													data: { //body
														"name": this.tel,
														"pwd": this.passward
													}
												}).then(res => {
													if(res.data.status==1)
													// console.log(res.data)
													this.$router.push("/main/login")
												})
											}else{
												alert("注册失败")
											}
												
											})
											
										}
									}
								}
						}
					}
				}
			},
		}
	}
</script>

<style scoped="scoped">
	#register {
		position: relative;
		font-size: 0.16rem;
	}
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
	.login-button button {
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
	.explain {
		padding: 0.2rem 0.1rem;
		box-sizing: border-box;
	}
	.explain a {
		margin-left: 0.05rem;
		color: #FF5523;
		text-decoration: underline;
	}
	.successed {
		position: absolute;
		top: 2rem;
		left: 0.8rem;
		width: 2rem;
		height: 2rem;
		background: white;
		padding: 0 0.2rem;
		box-sizing: border-box;
	}
	.successed img {
		margin-top: 0.5rem;
		width: 0.4rem;
		height: 0.4rem;
	}
	.successed p {
		margin-top: 0.2rem;
	}
	.el-message-box {
		display: inline-block;
		width: 300px;
		padding-bottom: 10px;
		vertical-align: middle;
		background-color: #FFF;
		border-radius: 4px;
		border: 1px solid #EBEEF5;
		font-size: 18px;
		-webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
		text-align: left;
		overflow: hidden;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}
</style>