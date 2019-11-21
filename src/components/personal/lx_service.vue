<template>
    <div class="common_service">
        <h3>常用服务</h3>
        <ul>
            <li v-for="(n,index) in list" :key="index">
                <img :src="n.img" alt="">
                <p>{{n.message}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "lx_service",
        data(){
            return{
                list:[
                    {
                        "img":"./images/lx_img/belong_service.png",
                        "message":"专属客服"
                    },
                    {
                        "img":"./images/lx_img/discount.png",
                        "message":"优惠活动"
                    },
                    {
                        "img":"./images/lx_img/common_message.png",
                        "message":"常用信息"
                    },
                    {
                        "img":"./images/lx_img/collect .png",
                        "message":"我的收藏"
                    },
                    {
                        "img":"./images/lx_img/history.png",
                        "message":"浏览历史"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .common_service{
        width: 100%;
        padding: 0.2rem 0;
    }
    .common_service h3{
        text-align: left;
        padding-left: 0.1rem;
        font-size: 0.14rem;
        border-left:0.05rem solid crimson;
    }
    .common_service ul{
        width: 100%;
        margin-top: 0.2rem;
    }
    .common_service li{
        display: inline-block;
        width: 20%;
        font-size: 0;
    }
    .common_service li img{
        width: 40%;
    }
    .common_service li p{
        font-size: 0.12rem;
        color: gray;
        margin-top: 0.08rem;
    }
</style>