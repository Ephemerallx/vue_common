<template>
        <div class="top">
            <div class="right_top">
                <a href="#/main/set" class="one"><span></span></a>
                <a href="#/main/message" class="two"><span></span></a>
            </div>
            <div class="above">
                <a href="#/main/login">登录/注册</a>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'lx_header',
        props:[],
        data(){
            return {

            }
        }

    }
</script>

<style scoped>
    .top{
        width: 100%;
        height: 1.4rem;
        background: url("../../assets/images/lx_img/bg.png") no-repeat;
        background-size: 100% 100%;
    }
    .right_top{
        width: 100%;
        padding-top: 0.1rem;
    }
    .right_top span{
        display: inline-block;
        width: 0.2rem;
        height: 0.2rem;
    }
    .one span{
        background:url("../../assets/images/lx_img/set.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        left: 1.5rem;
    }
    .two span{
        background:url("../../assets/images/lx_img/msgs.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        left: 1.6rem;
    }
    .above{
        width:100%;
        text-align: center;
        /*display: none;*/
    }
    .above a{
        display: inline-block;
        width: 1.5rem;
        height: 0.4rem;
        line-height: 0.4rem;
        color: white;
        font-size: 0.14rem;
        border: 0.01rem solid white;
        border-radius: 0.3rem 0.3rem;
        margin-top: 0.4rem;
        z-index: 10;
    }
    .above_logined p{
        width: 70%;
        position: relative;
        top: -0.3rem;
        left: 0.9rem;
    }
</style>