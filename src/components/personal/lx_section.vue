<template>
    <div>
        <lx-order></lx-order>
        <lx-wallet></lx-wallet>
        <lx-coupon></lx-coupon>
        <lx-service></lx-service>
        <lx-member></lx-member>
        <lx-footer></lx-footer>
    </div>
</template>

<script>
    import lx_order from "./lx_order";
    import lx_wallet from "./lx_wallet";
    import lx_coupon from "./lx_coupon";
    import lx_service from "./lx_service";
    import lx_member from "./lx_member";
    import lx_footer from "./lx_footer";
    export default {
        name: "lx_section",
        // data(){
        //     return {
        //         m:false
        //     }
        // },
        // props:["tt"],
        components:{
            "lx-order":lx_order,
            "lx-wallet":lx_wallet,
            "lx-coupon":lx_coupon,
            "lx-service":lx_service,
            "lx-member":lx_member,
            "lx-footer":lx_footer
        },
        // mounted() {
        //     this.$eventBus.$on("change",(f)=>{
        //         this.m=f;
        //         console.log(f);
        //     })
        // },
    }
</script>

<style scoped>

</style>