<template>
	<div>
		<input type="text" @click="hanchange" >
	</div>
</template>

<script>
	export default{
		name:"treeChild",
		data(){
			return{
				value:''
			}
			
		},
		methods:{
			hanchange(){
				this.value=document.querySelector("input").value
				this.$emit("change",this.value)
			}
		},
	
	}
</script>

<style>
</style>
