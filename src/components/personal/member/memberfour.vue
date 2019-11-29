<template>
	<div>
		<div class="header">
			<a href="javascript:history.back(-1)"><img src="../../../assets/images/hm-img/back1.png" alt="">
			</a>
			<div class="banner"><span>意见反馈</span></div>
		</div>
		<div class="membercenter">
			<span v-for="(sel, index) in selection" :key="index" :class="{ tavActive:index == isAdd}" @click="tabCheck(index)">{{sel.name}}</span>
		</div>
		<div class="idea" style="font-size: 0.16rem;" v-for="(sel, i) in selection" :key="i" v-show="isAdd==i">
			<!-- <form action=""> -->
				<textarea  class="input-text" type="text" :placeholder="sel.placeholder"></textarea>
				<van-uploader v-model="fileList" multiple :max-count="1" />
				<div class="spanClass"><span v-for="(span,j) in sel.span" :key="j"> {{span}}</span>
				</div>
			<!-- </form> -->
			<div class="details" >
				<div class="detailsInput" >
			<label for="">联系人姓名：</label><input type="text" placeholder="请填写您的姓名,便于我们回访">
			</div>
			<div class="detailsInput" >
			<label for="">手机号码：</label> <input type="text" :value="tel">
			</div>
			</div>
		</div>
		<!-- 底部 -->

		
	</div>
</template>

<script>
	import {
		Uploader
	} from 'vant'
	export default {
		// name: "details",
		data() {
			return {
				selection: [{
						name: '功能异常',
						placeholder: '遇到的问题？不愉快的使用体验？将相关页面的截图反馈给我们,便于快速解决问题~',
						span: ["体验问题", "收不到短信", "机票未出票", "新功能建议", "找不到功能", "做的不错"]
					},
					{
						name: '旅行咨询',
						placeholder: '产品介绍内容看不懂？行程有疑问？我们会尽快为您提供帮助',
						span: ["机票产品", "自由行", "根团游", "游轮", "当地玩乐", "签证", "半自助", "酒店+", "定制旅行", "其他"]
					},
					{
						name: '投诉受理',
						placeholder: "对于我们的服务给你造成的体验不好我们深表歉意,并将严肃处理解决问题",
						span: ["投诉领队", "客服电话打不通", "行程不合理", "客服态度不好", "退款未到账"]
					},
					{
						name: '合作咨询',
						placeholder: "请填写您的合作意见,我们会有专人与您联系.",
						span: ["旅游产品", "营销合作", "线下活动", "产品推广", "技术合作"]
					},
				],
				tel:15268973509,
				isAdd: '',
				j: '',
				fileList: []
			}
		},
		components: {
			[Uploader.name]: Uploader
		},
		methods: {
			tabCheck(index) {
				if (this.selection[index]) {
					this.isAdd = index;
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.header {
		width: 100%;
		height: 0.4rem;
		display: flex;
		justify-content: center;
		background: white;
		text-align: left;
		border-bottom: 1px solid #e5e5e5;
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
		padding: 0.1rem;
		box-sizing: border-box;
	}

	.membercenter span {
		display: inline-block;
		margin-left: 0.05rem;
		width: 0.8rem;
		line-height: 0.3rem;
		border: 0.01rem solid #e5e5e5;
		height: 0.3rem;
		border-radius: 0.08rem;
		font-size: 0.16rem;
	}

	.tavActive {
		color: white;
		background: red;
	}

	.idea {
		width: 98%;
		position: relative;
		/* margin: 0 auto; */
	}

	.idea .input-text {
		display: inline-block;
		line-height: 0.2rem;
		width: 90%;
		resize: none;
		border-radius: 0.05rem;
		border: 0.01rem solid #969896;
		height: 3rem;
	}

	.van-uploader {
		position: absolute; 
		top: 2.2rem;
		left: 0.2rem;
		display: inline-block;
	}

	.idea form {
		position: relative;
		margin-left: 0.08rem;
	}

	.spanClass {
		margin-left: 0.1rem;
		width: 98%;
		font-size: 0.11rem;
		display: flex;
		flex-wrap: wrap;
	}

	.spanClass span {
		margin-left: 0.05rem;
		margin-top: 0.05rem;
		display: inline-block;
		width: 23%;
		height: 0.4rem;
		border-radius: 0.08srem;
		line-height: 0.4rem;
		background: #e5e5e5;
	}
	.details{
		width: 100%;
		margin-top: 0.2rem;
		padding-top: 0.1rem;
		font-size: 0.16rem;
		box-sizing: border-box;
		background: #E5E5E5;
		text-align: left;
	}
	.detailsInput{
		background: white;
		padding-left: 0.2rem;
		height: 0.4rem;
		line-height: 0.4rem;
		box-sizing: border-box;
		border-bottom: 0.01rem solid #E5E5E5;
	}
	
	.details input{
		
		border: none;
	} 
</style>
