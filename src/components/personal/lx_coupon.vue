<template>
    <div class="coupon">
            <ul>
                <li>
                    <a href="#/main/coupon_dis" @click="showDetails">
                        <p>优惠券</p>
                        <p>领券</p>
                    </a>
                </li>
                <li>
                    <a href="#/main/coupon_intel">
                        <p>积分</p>
                        <p>查看</p>
                    </a>
                </li>
                <li>
                    <a href="#/main/coupon_bon">
                        <p>奖金</p>
                        <p>邀请好友</p>
                    </a>
                </li>
            </ul>
            <div class="click_img">
                <a href="#/main/coupon_cen" @click="Details">
                    <img src="../../assets/images/lx_img/bb.png" alt="">
                </a>
            </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "lx_coupon",
        data(){
            return {
                mycoupon:[],
                coupons:[]
            }
        },
        methods:{
            showDetails() {
                let a=sessionStorage.getItem("ud_id")
                // axios.get("http://10.35.167.10:3001/u_ticket")
                // 只跳转路由
                axios.get("http://10.35.167.69:8080/api/u_ticket/?ud_id="+a)
                    .then(()=>{
                        this.$router.push('/main/coupon_dis/'+a)

                    })
                    .catch(err=>{
                        console.log(err)
                    })

            },
            Details(){
                axios.get("http://10.35.167.69:8080/api/s_ticket/?status=1")
                    .then(()=> {
                        this.$router.push('/main/coupon_cen/')
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }
        }
    }
</script>

<style scoped>
    .coupon{
        width: 100%;
        border-top:0.01rem solid gainsboro;
    }
    .coupon ul{
        padding:0.2rem 0;
    }
    .coupon li{
        width: 33%;
        display: inline-block;
    }
    .coupon li p:nth-of-type(1){
        font-size: 0.14rem;
    }
    .coupon li p:nth-of-type(2){
        font-size: 0.12rem;
        color: gray;
    }
    .click_img{
        width: 100%;
        background-color: rgb(240,240,240);
        padding: 0.1rem 0;
    }
    .click_img a{
        font-size: 0;
    }
    .click_img img{
        width: 90%;
        height: 60%;
    }
</style>