<template>
	<div>
		<lx-header v-if="flaglogin"></lx-header>
		<lx-header1 v-else :text="text" :img1="img"></lx-header1>
		<lx-section></lx-section>
	</div>
</template>
<script>
	import lx_header from "../components/personal/lx_header";
	import lx_header1 from "../components/personal/lx_header1";
	import lx_section from "../components/personal/lx_section";
	export default {
		name: "my",
		components: {
			"lx-header": lx_header,
			"lx-header1": lx_header1,
			"lx-section": lx_section
		},
		data() {
			return {
				// flaglogin: true,
				flaglogin: false,
				text: '',
				img: ''

			}
		},
		methods: {
			change() {
				if (window.sessionStorage.data) {
					// this.flaglogin = false
					this.flaglogin = true
					var text = window.sessionStorage.data;
					this.text = text;

				}
			}
		},
		mounted() {
			this.change()
		}
	}
</script>

<style scoped>
	a {
		font-size: 0.12rem;
	}
</style>
