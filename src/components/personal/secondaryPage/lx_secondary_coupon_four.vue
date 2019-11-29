<template>
    <div>
        <div class="property">
            <a href="#/main/personal"><span class="return"></span></a>
            <span class="my_wallet">领券中心</span>
            <span class="share"></span>
        </div>
        <div class="option">
            <div :class="flag === 0?'option_select':''" @click="status=1,flag=0">全部</div>
            <div :class="flag === 1?'option_select':''" @click="status=2,flag=1" >参团</div>
            <div :class="flag === 2?'option_select':''" @click="status=3,flag=2">机票</div>
<!--            <div class="status === 1?option_select:''" @click="status = 1">全部</div>-->
<!--            <div class="status === 2?option_select:''" @click="status = 2" >参团</div>-->
<!--            <div class="status === 3?option_select:''" @click="status = 3">机票</div>-->
        </div>
        <lx-secondary-coupon-four-son :flag="flag"></lx-secondary-coupon-four-son>
    </div>
</template>

<script>
    import lx_secondary_coupon_four_son from "./lx_secondary_coupon_four_son";
    // import weChatApi from "../../../common/weChatApi";
    import axios from 'axios';
    export default {
        name: "lx_secondary_coupon_four",
        data() {
            return {
                flag:0,
                ticketData:[],
                status:1
            }
        },
        methods:{
            change1(){
                axios.get("http://10.35.167.69:8080/api/s_ticket/?status=1")
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
        // methods:{
        //     wxRegCallback () {
        //         // 用于微信JS-SDK回调
        //         this.wxShareTimeline()
        //         this.wxShareAppMessage()
        //     },
        //     wxShareTimeline () {
        //         // 微信自定义分享到朋友圈
        //         let option = {
        //             title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
        //             link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
        //             imgUrl: 'logo.png', // 分享图标, 请自行替换，需要绝对路径
        //             success: () => {
        //                 alert('分享成功')
        //             },
        //             error: () => {
        //                 alert('已取消分享')
        //             }
        //         }
        //         // 将配置注入通用方法
        //         weChatApi.ShareTimeline(option)
        //     },
        //     wxShareAppMessage () {
        //         // 微信自定义分享给朋友
        //         let option = {
        //             title: '限时团购周 挑战最低价', // 分享标题, 请自行替换
        //             desc: '限时团购周 挑战最低价', // 分享描述, 请自行替换
        //             link: window.location.href.split('#')[0], // 分享链接，根据自身项目决定是否需要split
        //             imgUrl: 'logo.png', // 分享图标, 请自行替换，需要绝对路径
        //             success: () => {
        //                 alert('分享成功')
        //             },
        //             error: () => {
        //                 alert('已取消分享')
        //             }
        //         }
        //         // 将配置注入通用方法
        //         weChatApi.ShareAppMessage(option)
        //     }
        // },
        components:{
            "lx-secondary-coupon-four-son":lx_secondary_coupon_four_son
        },
        // mounted() {
        //     weChatApi.wxRegister(this.wxRegCallback);
        // }
        beforeMount() {
            this.change1()
        }
    }
</script>

<style scoped>
    .property{
        width: 100%;
        font-size: 0;
        text-align: left;
        padding: 0.2rem 0;
        border-bottom: 0.01rem solid gainsboro;
    }
    .my_wallet{
        font-size: 0.16rem;
        margin-left: 1.5rem;
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
    .share{
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        background: url("../../../assets/images/lx_img/share.png") no-repeat;
        background-size: 80% 80%;
        position: absolute;
        left: 3.3rem;
        top: 0.12rem;
    }
    .option{
        width: 100%;
        text-align: left;
        /*padding: 0.1rem 0;*/
        background-color:whitesmoke;
        box-sizing: border-box;
    }
    .option div{
        display: inline-block;
        margin-left: 0.2rem;
        font-size: 0.12rem;
        box-sizing: border-box;
    }
    .option_select{
        padding: 0.1rem 0.1rem;
        border-bottom: 0.02rem solid crimson;
    }
</style>