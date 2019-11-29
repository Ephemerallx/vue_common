<template>
    <div class="integration">
        <div class="property">
            <a href="#/main/personal"><span class="return"></span></a>
            <span class="my_wallet">我的积分</span>
        </div>
        <div class="integration_details">
            <span class="description">剩余积分</span>
            <span class="change_num" >0</span>
            <span class="banns"></span>
        </div>
        <div class="list">
            <p></p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "lx_secondary_coupon_two"
    }
</script>

<style scoped>
    .integration{
        width: 100%;
        height: 1.5rem;
        background-color:rgb(255,85,35) ;
        z-index:0;
        text-align: left;
    }
    .property{
        width: 100%;
        font-size: 0;
        text-align: left;
        padding: 0.1rem 0;
        color: white;
    }
    .my_wallet{
        font-size: 0.16rem;
        margin-left: 1.5rem;
        color: white;
    }
    .return{
        display: inline-block;
        width:0.3rem;
        height: 0.3rem;
        background: url("../../../assets/images/lx_img/return_white.png") no-repeat;
        background-size:60% 60%;
        font-size: 0;
        position: absolute;
        left: 0.1rem;
    }
    .integration_details{
        font-size: 0;
    }
    .description{
        font-size: 0.12rem;
        color: white;
        position: relative;
        left:0.2rem ;
        top: -0.4rem;
    }
    .change_num{
        font-size: 0.3rem;
        color: white;
        font-weight: 400;
        position: relative;
        left:-0.3rem ;
    }
    .banns{
        display: inline-block;
        width: 0.8rem;
        height: 0.8rem;
        background: url("../../../assets/images/lx_img/jifen.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        left:1.8rem ;
        top: 0.2rem;
    }
</style>