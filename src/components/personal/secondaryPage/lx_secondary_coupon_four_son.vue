<template>
    <div>
        <div class="details"  v-for="(n,index) in ticketData[flag].dataList" :key="index">
<!--            :style="'background:url('+n.bgColor+')'"-->
            <div class="details_left" >
                <p class="pesd">{{n.st_money}}</p>
                <p class="explain">{{n.st_ticket_desc}}</p>
                <p class="time">{{n.create_time}}</p>
            </div>
            <div class="details_right">
                <p class="type">{{n.st_name}}</p>
                <a href="#/main"><p class="term">{{n.st_tiaojian}}</p></a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "lx_secondary_coupon_four_son",
        props:["flag","ticketData","status"],
        data(){
            return {
            //     list:[
            //         {
            //             dataList:[
            //                 {
            //                     money:'￥500',
            //                     opt:'出境长线参团 限时加磅专属优惠券',
            //                     datetime:'2019.11.16-2019.11.25',
            //                     num:'还剩276张',
            //                     type:'参团',
            //                     tiaojian:'立即领券',
            //                     bgColor:'./images/lx_img/vip_1.455bad2.png'
            //                 },
            //                 {
            //                     money:'￥500',
            //                     opt:'出境长线参团 限时加磅专属优惠券',
            //                     datetime:'2019.11.16-2019.11.25',
            //                     num:'还剩276张',
            //                     type:'参团',
            //                     condition:'立即领券',
            //                     bgColor:'./images/lx_img/vip_1.455bad2.png'
            //                 },
            //                 {
            //                     money:'￥5',
            //                     opt:'出境长线参团 限时加磅专属优惠券',
            //                     datetime:'2019.11.16-2019.11.25',
            //                     num:'还剩968张',
            //                     type:'机票',
            //                     condition:'立即领券',
            //                     bgColor:'./images/lx_img/vip_1.png'
            //                 },
            //                 {
            //                     money:'￥5',
            //                     opt:'出境长线参团 限时加磅专属优惠券',
            //                     datetime:'2019.11.16-2019.11.25',
            //                     num:'还剩968张',
            //                     type:'机票',
            //                     tiaojian:'立即领券',
            //                     bgColor:'./images/lx_img/vip_1.png'
            //                 }
            //             ]
            //         },
            //         {
            //             dataList:[
            //                 {
            //                     money:'￥500',
            //                     opt:'出境长线参团 限时加磅专属优惠券',
            //                     datetime:'2019.11.16-2019.11.25',
            //                     num:'还剩276张',
            //                     type:'参团',
            //                     tiaojian:'立即领券',
            //                     bgColor:'./images/lx_img/vip_1.455bad2.png'
            //                 },
            //                 {
            //                     money:'￥500',
            //                     opt:'出境长线参团 限时加磅专属优惠券',
            //                     datetime:'2019.11.16-2019.11.25',
            //                     num:'还剩276张',
            //                     type:'参团',
            //                     condition:'立即领券',
            //                     bgColor:'./images/lx_img/vip_1.455bad2.png'
            //                 }
            //             ]
            //         },
            //         {
            //             dataList:[
            //                 {
            //                     money:'￥5',
            //                     opt:'出境长线参团 限时加磅专属优惠券',
            //                     datetime:'2019.11.16-2019.11.25',
            //                     num:'还剩968张',
            //                     type:'机票',
            //                     tiaojian:'立即领券',
            //                     bgColor:'./images/lx_img/vip_1.png'
            //                 },
            //                 {
            //                     money:'￥5',
            //                     opt:'出境长线参团 限时加磅专属优惠券',
            //                     datetime:'2019.11.16-2019.11.25',
            //                     num:'还剩968张',
            //                     type:'机票',
            //                     tiaojian:'立即领券',
            //                     bgColor:'./images/lx_img/vip_1.png'
            //                 }
            //             ]
            //         }
            //     ]

                // ticketData:[]
            }
        },
        methods:{
            change2(){
                axios.get("http://10.35.167.69:8080/api/s_ticket/?status=2")
                    .then(res => {
                        console.log(res.data);
                        this.ticketData = res.data.data;
                        console.log(this.ticketData);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            change3(){
                axios.get("http://10.35.167.69:8080/api/s_ticket/?status=3")
                    .then(res => {
                        console.log(res.data);
                        this.ticketData = res.data.data;
                        console.log(this.ticketData);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        },
        beforeMount() {
            this.change2(),
                this.change3()
        }
    }
</script>

<style scoped>
    .details{
        width: 95%;
        margin: 0.05rem auto;
        background-repeat: no-repeat!important;
        background: url("../../../assets/images/lx_img/vip_1.png") no-repeat;
        background-size: 100% 100%!important;
        padding: 0.3rem 0;
        text-align: left;
    }
    /*.datails_other{*/
    /*    width: 95%;*/
    /*    margin: 0.05rem auto;*/
    /*    background: url("../../../assets/images/lx_img/vip_1.png") no-repeat;*/
    /*    background-size: 100% 100%;*/
    /*    padding: 0.3rem 0;*/
    /*    text-align: left;*/
    /*}*/
    .details_left{
        display: inline-block;
        margin-left: 0.3rem;
    }
    .details_right{
        display: inline-block;
        position: relative;
        left: 0.4rem;
        top: -0.1rem;
    }
    .explain{
        font-size: 0.12rem;
        width: 2rem;
        text-align: left;
    }
    .time{
        font-size: 0.12rem;
        width: 1.5rem;
        color: gray;
    }
    .pesd{
        width: 0.4rem;
        font-size: 0.2rem;
        color: red;
        font-weight: 600;
    }
    .count{
        font-size: 0.12rem;
        color: red;
    }
    .type{
        font-size: 0.14rem;
        color: white;
        opacity: 0.3;
        position: relative;
        left: 0.2rem;
        top: -0.2rem;
    }
    .term{
        width: 0.6rem;
        height: 0.2rem;
        line-height: 0.2rem;
        text-align: center;
        border-radius: 0.3rem 0.3rem;
        background-color: white;
        color: red;
        font-size: 0.1rem;
        margin-left: 0.05rem;
    }
</style>