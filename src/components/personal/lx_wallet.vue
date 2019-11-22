<template>
    <div class="wallet">
        <p class="blank"></p>
        <div class="wallet_bottom">
            <a href="#/main/myWallet">
                <p>
                    <img src="../../assets/images/lx_img/wallet.png" alt="" class="wallet_logo">
                    <span class="my_wallet">我的钱包</span>
                    <img src="../../assets/images/lx_img/hide.png" alt="" class="hidden">
                </p>
                <p>总资产/余额/存款证明等</p>
            </a>
            <a href="#/main/register"><span class="arrows"></span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lx_wallet"
    }
</script>

<style scoped>
    .wallet{
        width: 100%;
    }
    .blank{
        width: 100%;
        height: 0.1rem;
        background-color: rgb(240,240,240);
        margin-top: 0.1rem;
    }
    .wallet_bottom{
        width: 100%;
        text-align: left;
    }
    .wallet_bottom p:nth-of-type(1){
        width: 100%;
        font-size: 0;
    }
    .wallet_bottom p:nth-of-type(2){
        font-size: 0.12rem;
        color: gray;
        margin-left: 0.6rem;
    }
    .wallet_logo{
        width: 0.3rem;
        height: 0.3rem;
        position: relative;
        left: 0.2rem;
        top: 0.1rem;
    }
    .hidden{
        width: 0.2rem;
        height: 0.2rem;
        position: relative;
        left: 0.25rem;
        top: 0.05rem;
    }
    .my_wallet{
        font-size: 0.14rem;
        margin-left: 0.3rem;
    }
    .arrows{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../assets/images/lx_img/arrows.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        left: 3.5rem;
        top: -0.2rem;
    }
</style>