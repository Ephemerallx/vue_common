<template>
		<div>
			<lx-header></lx-header>
			<lx-section></lx-section>
		</div>
</template>

<script>
	import lx_header from "../components/personal/lx_header";
	import lx_section from "../components/personal/lx_section";
	export default{
		name:"my",
		components:{
			"lx-header":lx_header,
			"lx-section":lx_section
		}
	}
</script>

<style scoped>
	a{
		font-size: 0.12rem;
	}
</style>
