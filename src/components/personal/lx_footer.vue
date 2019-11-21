<template>
    <div class="foot">
        <p class="blank"></p>
        <ul>
            <li v-for="(n,index) in list" :key="index">
                <img :src="n.img" alt="">
                <p>{{n.title}}</p>
                <span>{{n.detail}}</span>
            </li>
        </ul>
        <p>光大服务+<span></span></p>
    </div>
</template>

<script>
    export default {
        name: "lx_footer",
        data(){
            return {
                list:[
                    {
                        "img":"./images/lx_img/service.png",
                        "title":"客服电话",
                        "detail":"400 600 6666"
                    },
                    {
                        "img":"./images/lx_img/store.png",
                        "title":"米途门店",
                        "detail":"免费预约服务到家"
                    },
                    {
                        "img":"./images/lx_img/relative.png",
                        "title":"关于我们",
                        "detail":"中青旅游"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .foot{
        width: 100%;
        padding: 0.2rem 0 0.7rem 0;
    }
    .blank{
        width: 100%;
        height: 0.1rem;
        background-color: rgb(240,240,240);
    }
    .foot h3{
        text-align: left;
        padding-left: 0.1rem;
        font-size: 0.14rem;
        margin-top: 0.1rem;
        border-left:0.05rem solid crimson;
    }
    .foot ul{
        width: 100%;
        margin-top: 0.2rem;
    }
    .foot li{
        display: inline-block;
        width: 30%;
        margin:0 0.03rem;
        padding:0.1rem 0;
        background-color: rgb(248,248,248);
        font-size: 0;
    }
    .foot li img{
        width: 20%;
    }
    .foot li p{
        font-size: 0.12rem;
        margin-top: 0.08rem;
    }
    .foot li span{
        font-size: 0.1rem;
        color: gray;
        margin-top: 0.08rem;
    }
</style>