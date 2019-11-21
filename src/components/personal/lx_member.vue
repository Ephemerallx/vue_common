<template>
    <div class="member">
        <p class="blank"></p>
        <h3>会员服务</h3>
        <ul>
            <li v-for="(n,index) in structs" :key="index">
                <img :src="n.img" alt="">
                <p>{{n.intro}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "lx_member",
        data(){
            return{
                structs:[
                    {
                        "img":"./images/lx_img/vip.png",
                        "intro":"会员权益"
                    },
                    {
                        "img":"./images/lx_img/integral.png",
                        "intro":"积分说明"
                    },
                    {
                        "img":"./images/lx_img/help.png",
                        "intro":"帮助中心"
                    },
                    {
                        "img":"./images/lx_img/feedback.png",
                        "intro":"意见反馈"
                    }
                ]
            }
        }

    }
</script>

<style scoped>
    .member{
        width: 100%;
        padding: 0.2rem 0;
    }
    .blank{
        width: 100%;
        height: 0.1rem;
        background-color: rgb(240,240,240);
    }
    .member h3{
        text-align: left;
        padding-left: 0.1rem;
        font-size: 0.14rem;
        margin-top: 0.1rem;
        border-left:0.05rem solid crimson;
    }
    .member ul{
        width: 100%;
        margin-top: 0.2rem;
    }
    .member li{
        display: inline-block;
        width: 25%;
        font-size: 0;
    }
    .member li img{
        width: 30%;
    }
    .member li p{
        font-size: 0.12rem;
        color: gray;
        margin-top: 0.08rem;
    }
</style>