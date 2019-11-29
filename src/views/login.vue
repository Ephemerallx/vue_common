<template>
	<div id="login">
		<div class="login-top">
			<a href="#/main/personal"><img src="../assets/images/hm-img/back.png" alt=""></a>
			<div class="warning" v-if="flaglogin">请确认输入是否正确</div>
		</div>
		<!-- 中间 -->
		<div class="login-main">
			<div class="login-center" @click="flag=true" :class="{loginColor:flag==true}">
				<p>密码登录</p>
			</div>
			<div class="login-center" @click="flag=false" :class="{loginColor:flag==false}">
				<p>短信登录</p>
			</div>
		</div>
		<div class="loginWords" v-if="flag">
			<div class="login-input"><input type="text" placeholder="手机号/邮箱/会员卡号" v-model="tel" @keydown="btnYes"></div>
			<div class="login-input"><input type="password" placeholder="登录密码" v-model="password">
				<div class="checka" @click="forget">忘记密码?</div>
			</div>
			<div class="login-button"><button style="background: #FF5523; color: white;" @click="login">登录</button></div>
			<div class="login-button" @click="jump"><button style="background: white; color: #000000; border: 0.01rem solid #999">注册</button></div>
		</div>
		<div class="loginWords" v-else>
			<div class="login-input"><input type="text" placeholder="请输入手机号" v-model="tel" @keydown="btnYes1"></div>
			<div class="login-input"><input type="text" placeholder="短信验证码" v-model="yanzhen">
				<div class="logincheckone" v-if="flagyan" @click="checkMobile" ref="btn">{{message}}</div>
				<div class="logincheck" v-else>{{message}}</div>
			</div>
			<div class="login-button"><button style="background: #FF5523; color: white;" @click="changepasaward">登录</button></div>
			<div class="login-button" @click="jump"><button style="background: white; color: #000000; border: 0.01rem solid #999">注册</button></div>
		</div>
		
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name: "login",
		data() {
			return {
				flag: true,
				message: "获取验证码",
				num: 30,
				setIntervalId: null,
				tel: '',
				password: '',
				yanzhen:'',
				flaglogin: true,
				// flaglogin: false,
				flagyan: false
			}
		},
		methods: {
			forget() {
				this.$router.push('/main/forget')
			},
			jump() {
				this.$router.push('/main/register')
			},
			btnYes() {
				this.flaglogin = false
			},
			words() {
				if (this.setIntervalId != null) return;
				this.setIntervalId = setInterval(() => {
					this.num--;
					this.message = "已发送" + this.num + "s";
					if (this.num == 0) {
						clearInterval(this.setIntervalId)
					}
				}, 1000)
			},
			// 密码登陆
			login() {
				if (this.tel == '' || this.password == '') {
					this.flaglogin = true;
					console.log('账号不能为空');
					return;
				} else {
					this.flaglogin = false;
					if (window.sessionStorage.data == this.tel) {
						alert("该用户已注册")
					} else {
						axios({
							headers: {
								'Content-Type': 'application/json'
							},
							transformRequest: [function(data) {
								data = JSON.stringify(data)
								return data
							}],
							url: "http://10.35.167.69:8080/api/login/",
							method: "POST",
							data: { //body
								"name": this.tel,
								"pwd": this.password
							}
						}).then(res => {
							if(res.data.status==2){
								console.log(res.data.user_data)
								window.sessionStorage.setItem("data",this.tel)
								window.sessionStorage.setItem("ud_id",res.data.user_data.ud_id)
								this.$router.push("/main/personal")
							}
							else{
								console.log("密码输入有误")
							}
						})
					}

				}

			},
			
			// 短信登陆的方法
			// 短信验证码
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
				axios.get('http://10.35.167.69:8080/api/send_code/?phone='+this.tel).then((res) => {
					if (res.data.status==0) {
						console.log(res.data)
					}
					else{
						alert("验证码输入有误")
						return 
					}
				})
			},
			btnYes1() {
				//因为是从零开始所以当输入10位是其实为11位数，所以判断当输入的长度为10的时候解除按钮的禁用
				if (this.tel.length == "10") {
					this.flagyan = true
				}
			},
   // 手机登录
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
							// 验证短信
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
								window.sessionStorage.setItem("data",this.tel)
								window.sessionStorage.setItem("ud_id",response.data.user_data.ud_id)
								window.sessionStorage.setItem("allMoney",response.data.user_data.w_acount)
								this.$router.push("/main/personal")
								
							}else{
								
								alert("该用户已被注册")
							}
								
							})
						}
					}
				}
			},
		},
	}
</script>

<style>
	.login-top {
		width: 100%;
		padding: 0.01rem 0.2rem;
		box-sizing: border-box;
		height: 0.44rem;
		text-align: left;
		position: relative;
	}

	.warning {
		position: absolute;
		top: 0.4rem;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 0.3rem;
		line-height: 0.3rem;
		text-align: center;
		font-size: 0.14rem;
		color: wheat;
		/* opacity: 0.6; */
		/* border-radius: 0.1rem; */
		background: #FF5523;
	}

	.login-top a img {
		margin-top: 0.2rem;
		width: 0.22rem;
		height: 0.22rem;
	}

	.login-main {
		font-size: 0.18rem;
		width: calc(100% - 40px);
		height: 60px;
		padding: 0 20px;
		display: -ms-flexbox;
		display: flex;
		justify-content: space-between;
	}

	.login-center {
		line-height: 0.6rem;
		width: 50%;
		font-size: 0.16rem;
	}

	.loginColor {
		line-height: 0.6rem;
		width: 50%;
		font-size: 0.16rem;
		color: #FF5523;
		border-bottom: 2px solid #FF5523;
	}

	.loginWords {
		width: 100%;
		padding: 0rem 0.2rem;
		box-sizing: border-box;
	}

	.login-input {
		width: 100%;
		padding: 0.21rem 0;
		box-sizing: border-box;
		position: relative;
		height: 0.65rem;
		border-bottom: 0.01rem solid #dfdfdf;
	}

	.login-input input {
		outline: none;
		width: 100%;
		height: 0.22rem;
		border: white;
		font-size: 0.16rem;
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

	.checka {
		position: absolute;
		top: 0.2rem;
		right: 0rem;
		font-size: 0.12rem;
		color: #0074D9;
	}

	.login-button {
		width: 100%;
		margin-top: 0.15rem;
		padding: 0.15rem 0.1rem;
		box-sizing: border-box;
		height: 0.45rem;
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
</style>
