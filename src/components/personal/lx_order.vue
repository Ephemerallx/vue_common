<template>
    <div class="order">
        <ul>
            <li v-for="(n,index) in dataList" :key="index">
                <a href="#/main/order">
                    <img :src="n.img" alt="">
                    <p>{{n.text}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "lx_order",
        data(){
            return {
                dataList:[
                    {
                        "img":"./images/lx_img/b.png",
                        "text":"全部订单"
                    },
                    {
                        "img":"./images/lx_img/b1.png",
                        "text":"待付款"
                    },
                    {
                        "img":"./images/lx_img/b2.png",
                        "text":"待出行"
                    },
                    {
                        "img":"./images/lx_img/b3.png",
                        "text":"待评价"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .order{
        width: 100%;
    }
    .order ul{
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
        margin-top: 0.1rem;
    }
    .order li{
        width: 21%;
        display: inline-block;
        font-size: 0;
    }
    .order li img{
        width: 50%;
    }
    .order p{
        font-size: 0.12rem;
        margin-top: 0.05rem;
    }
</style>