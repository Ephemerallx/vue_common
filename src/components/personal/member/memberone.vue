<template>
	<div id="quanyi">
		<div class="header">
			<a href="javascript:history.back(-1)"><img src="../../../assets/images/hm-img/back1.png" alt="">
			</a>
			<div class="banner"><span>会员中心</span></div>
		</div>
		<div class="membercenter">
			<div class="jifen">
				<p>积分</p>
				<p>0</p>
			</div>
			<div class="userpic">
				<img src="../../../assets/images/hm-img/user.png" alt=""></div>
			<div class="jifen">
				<p>米币</p>
				<p>0</p>
			</div>
		</div>
		<div class="quanyi" style="position: relative;">
			<p style="font-size: 0.16rem; color: navajowhite; position: absolute ;top:-0.6rem; left: 0.7rem;">达到2001米币可以升级为<a href="" style="color: darkred;">白银会员</a></p>
			<div class="m-q">
				<span>我的权益</span>
				<a href="" style="color: #0074D9; padding: 0.1rem 0.2rem;">更多特权></a>
			</div>
			<div class="memberOneCenter">
				<a href="" v-for="(item,i) in all" :key="i">
					<img src="../../../assets/images/hm-img/member1.png" alt="">
					<p class="pw">{{item.data}}</p>
				</a>
			</div>

		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				all: [{
						data: "预定奖励",
						img: '../../../assets/images/hm-img/member1.png'
					},
					{
						data: "抵现特权",
						img: '../../../assets/images/hm-img/member1.png'
					},
					{
						data: "优惠旅行",
						img: '../../../assets/images/hm-img/member1.png'
					},
					{
						data: "精选特惠",
						img: '../../../assets/images/hm-img/member1.png'
					},
					{
						data: "享受会员日",
						img: '../../../assets/images/hm-img/member1.png'
					},
					{
						data: "购物返现",
						img: '../../../assets/images/hm-img/member1.png'
					},
					{
						data: "乐享生活",
						img: '../../../assets/images/hm-img/member1.png'
					},
				]
			}
		}
	}
</script>

<style scoped>
	#quanyi {
		width: 100%;
	}

	.header {
		width: 100%;
		height: 0.4rem;
		display: flex;
		justify-content: center;
		background: white;
		text-align: left;
	}

	.header a {
		width: 40%;
		padding-left: 0.1rem;
		box-sizing: border-box;
		text-align: left;
	}

	.header a img {
		margin-top: 0.08rem;
		width: 0.22rem;
		height: 0.22rem;
	}

	.header .banner {
		width: 60%;
		display: inline-block;
		line-height: 0.4rem;
		font-size: 0.18rem;
	}

	.membercenter {
		width: 100%;
		margin-top: 0.2rem;
		height: 1.4rem;
		background-image: linear-gradient(to right, #ff9569 0%, #e92758 100%);
		display: flex;
		justify-content: space-around;
		font-size: 0.16rem;
	}

	.membercenter div {
		padding-top: 0.2rem;
		box-sizing: border-box;
		width: 30%;
		height: 0.9rem;
	}

	.jifen p {
		margin-top: 0.1rem;
		color: white;
	}

	.userpic {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.userpic img {
		margin-top: 0.1rem;
		width: 56%;
		height: 84%;
		border-radius: 50%;
	}

	.m-q {
		margin-top: 0.2rem;
		display: flex;
		justify-content: space-between;
		font-size: 0.16rem;
	}

	.quanyi .m-q span {
		padding: 0.1rem;
		font-weight: 500;
		box-sizing: border-box;
		font-size: 0.2rem;
	}

	.memberOneCenter {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
	}

	.memberOneCenter a {
		width: 25%;
		font-size: 0.12rem;
	}

	.memberOneCenter .pw {
		font-size: 0.12rem;
	}

	.memberOneCenter a img {
		width: 70%;

	}
</style>
