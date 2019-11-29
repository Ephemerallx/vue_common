<template>
    <div class="wallet">
        <div class="property">
            <a href="#/main/personal"><span class="return"></span></a>
            <span class="my_wallet">我的钱包</span>
            <a href="#/"><span class="right_top"></span></a>
        </div>
        <div class="total" :key="flag">
            <p class="total_assets">总资产(元)
                <span class="synax_cli"  @click="changeStyle" v-show="flag == false"></span>
                <span class="synax" v-show="flag == true" @click="changeStyle"></span>
            </p>
            <p class="hide_show">
                <span class="total_money" v-show="flag == false">******</span>
                <span class="hiden_money" v-show="flag == true" >{{money}}</span>
            </p>
        </div>
        <p class="blank"></p>
        <div class="main_money">
            <div class="main_for">
                <span class="money"></span>
                <a href="#/main/balance">
                    <p>
                        <span class="assets">余额</span><br>
                        <span class="totalMoney" v-show="flag == false">******</span>
                        <span class="hidenMoney" v-show="flag == true">{{money}}</span>
                    </p>
                </a>
            </div>
            <div class="main_for">
                <span class="card"></span>
                <p>
                    <span class="assets">银行卡</span><br>
                    <span class="number"><span>0</span><span>张</span></span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    // import  axios from 'axios';
    export default {
        name: "lx_secondary_wallet",
        data() {
            return {
                flag:false,
                money:localStorage.getItem("hiden_rice")
                // f:false,
                // dataList:[]
            }
        },
        // props:["data","flag"],
        // mounted() {
        //     this.$eventBus.$on("change",(f)=>{
        //         console.log(f);
        //     })
        // },

        methods: {
            changeStyle(){
                this.flag = !this.flag;
                // this.f=!this.f;
                // this.$eventBus.$emit("change",f);
                // console.log(f);
            },
            // getMoney(){
            //     let a = this.$route.params.id;
            //     console.log(a);
            //     // axios.get("http://10.35.167.10:3001/u_ticket")
            //     // 只接收数据
            //     axios.get("http://10.35.167.69:8080/api/u_ticket/?ud_id="+a)
            //         .then(res => {
            //             console.log(res.data);
            //             this.dataList = res.data.data;
            //             console.log(this.dataList);
            //         })
            //         .catch(err => {
            //             console.log(err)
            //         })
            // }
        }
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
    .property{
        width: 100%;
        font-size: 0;
        text-align: left;
        padding: 0.1rem 0;
    }
    .my_wallet{
        font-size: 0.16rem;
        margin-left: 1.5rem;
    }
    .right_top{
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        background: url("../../../assets/images/lx_img/apply.png") no-repeat;
        background-size:100% 100%;
        position: absolute;
        left: 3.35rem;
        top: 0.03rem;
    }
    .return{
        display: inline-block;
        width:0.3rem;
        height: 0.3rem;
        background: url("../../../assets/images/lx_img/return.png") no-repeat;
        background-size:60% 60%;
        font-size: 0;
        position: absolute;
        left: 0.1rem;
    }
    .total{
        width: 100%;
        text-align: left;
        border-top: 0.01rem solid gainsboro;
        padding-top: 0.1rem;
        box-sizing: border-box;
    }
    .total_assets{
        font-size: 0.14rem;
        margin-left: 0.1rem;
    }
    .synax_cli{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../../assets/images/lx_img/hide.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        left: 0.08rem;
        top: 0.05rem;
    }
    .synax{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
        background: url("../../../assets/images/lx_img/show.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        left: 0.08rem;
        top: 0.05rem;
    }
    .hide_show{
        margin: 0.1rem 0 0 0.1rem;
    }
    .total_money{
        font-size: 0.2rem;
        font-weight: 600;
        text-align: left;
    }
    .hiden_money{
        display: inline-block;
        width: 0.5rem;
        text-align: left;
        font-size: 0.2rem;
    }
    .totalMoney{
        font-size: 0.14rem;
        font-weight: 600;
        text-align: left;
    }
    .hidenMoney{
        display: inline-block;
        width: 0.5rem;
        text-align: left;
        font-size: 0.14rem;
    }
    .main_money{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
    }
    .main_for{
        width: 49.9%;
        padding: 0.2rem 0;
        text-align: left;
        font-size: 0;
        border-bottom: 0.01rem solid gainsboro;
    }
    .main_for:nth-of-type(1){
        border-right: 0.01rem solid gainsboro;
    }
    .main_for p{
        display: inline-block;
        margin-left: 0.2rem;
        box-sizing: border-box;
    }
    .assets{
        font-size: 0.14rem;
    }
    .money{
            display: inline-block;
            width: 0.4rem;
            height: 0.4rem;
            background: url("../../../assets/images/lx_img/balance.png") no-repeat;
            background-size: 60% 60%;
            position: relative;
            top:0.1rem;
            left: 0.2rem;
        }
    .card{
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        background: url("../../../assets/images/lx_img/bank_card.png") no-repeat;
        background-size: 70% 70%;
        position: relative;
        top:0.1rem;
        left: 0.2rem;
    }
    .number{
        font-size: 0.12rem;
        color: gray;
    }
</style>