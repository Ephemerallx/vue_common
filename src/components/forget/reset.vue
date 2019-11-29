<template>
	<div id="reset">
	<div class="register-top">
	<a href="javascript:history.back(-1)"><img src="../../assets/images/hm-img/back1.png" alt=""></a>
	</div>
	<div class="register-center">
	<p>设置新密码</p>
	<div class="register-input"><input type="password" placeholder="设置密码,至少6位数字或字母" v-model="passward"></div>
	<div class="register-input"><input type="password" placeholder="再次输入密码" v-model="pass">
	<div class="login-button"><button style="background: #FF5523; color: white;" @click="changepasaward">完成</button></div>
	</div>
	</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				passward:'',
				pass:''
			}
		},
		methods:{
			changepasaward(){
				if(this.passward==""||this.pass==""){
					alert("请确认输入是否正确")
				}else{
					if(this.pass==this.passward)
					this.$router.push('/main/login')
				}
				
			}
		}
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
