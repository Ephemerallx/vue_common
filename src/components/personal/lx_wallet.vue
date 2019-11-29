<template>
    <div class="wallet">
        <p class="blank"></p>
        <div class="wallet_bottom">
            <p>
                <img src="../../assets/images/lx_img/wallet.png" alt="" class="wallet_logo">
                <span class="my_wallet">我的钱包</span>
                <span class="synax_cli" @click="changeStyle" v-show="flag == false"></span>
                <span class="synax" v-show="flag == true" @click="changeStyle"></span>
            </p>
            <div class="money">
                <span>总资产</span><span class="total_money" v-show="flag == false">******</span><span class="hiden_money" v-show="flag == true">{{money}}</span>
                <span class="balance">余额</span><span class="shower" v-show="flag == false">******</span><span class="hiden_shower" v-show="flag == true">{{money}}</span>
            </div>
            <a href="#/main/myWallet"><span class="arrows"></span></a>
        </div>
    </div>
</template>

<script>
    // import axios from 'axios';
    export default {
        name: "lx_wallet",
        data(){
            return {
                flag:false,
                // f:false,
                // myWallet: {},
                money:localStorage.getItem("hiden_rice")
            }
        },
        props:["tt"],
        methods: {
            changeStyle(){
                this.flag = !this.flag;
            },
            // getMoney(){
            //     let s = sessionStorage.getItem("ud_id")
            //     axios.get("http://10.35.167.69:8080/api/wallet/?ud_id="+s)
            //         .then(() => {
            //             this.$router.push('/main/myWallet/')
            //         });
            // }
        },
        // mounted() {
        //     this.$eventBus.$on("change",(f)=>{
        //         console.log(f);
        //     })
        // },
        // methods: {
        //     changeStyle(f){
        //         this.flag = !this.flag;
        //         this.f=!this.f;
        //         this.$eventBus.$emit("change",f);
        //         console.log(f);
        //     }
        // },

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
    .money{
        margin-left: 0.6rem;
    }
    .money span{
        font-size: 0.12rem;
        color: gray;
        margin: 0 0 0 0.05rem;
    }
    .total_money{
        display: inline-block;
        width: 0.5rem;
        text-align: left;
    }
    .hiden_money{
        display: inline-block;
        width: 0.5rem;
        text-align: left;
        position: relative;
        font-size: 0.12rem;
    }
    .shower{
        display: inline-block;
        width: 0.5rem;
        text-align: left;
    }
    .hiden_shower{
        display: inline-block;
        width: 0.5rem;
        text-align: left;
        position: relative;
        /*left: -0.5rem;*/
        font-size: 0.12rem;
    }
    .wallet_logo{
        width: 0.3rem;
        height: 0.3rem;
        position: relative;
        left: 0.2rem;
        top: 0.1rem;
    }
    .synax_cli{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../assets/images/lx_img/hide.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        left: 0.1rem;
        top: 0.05rem;
    }
    .synax{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../assets/images/lx_img/show.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        left: 0.1rem;
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