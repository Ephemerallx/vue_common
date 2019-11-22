<template>
    <div class="collectList">
        <!--列表循环-->
        <div>
            <img src="../../../assets/images/lx_img/collectListImg.png" />
            <div>
                <h2>【北京密云】古北水镇水镇大酒店1晚度假套餐</h2>
                <p>一晚住宿+自助早餐+赠送温泉+免费享用游泳</p>
                <h3><span>￥ 780</span> 起</h3>
            </div>
        </div>
        <p>已到底线</p>
    </div>
</template>

<script>
    export default {
        name: "my-secondary-collectList",
        props:["head"]
    }
</script>

<style scoped>
    .collectList>div{
        background-color: white;
        margin-bottom: 0.05rem;
        padding: 0.15rem;
        display: flex;
    }
    .collectList>div>img{
        width: 0.8rem;
    }
    .collectList>div>div{
        margin-left: 0.1rem;
        font-size: 0.12rem;
        text-align: left;
    }
    .collectList>div>div>h2{
        font-size: 0.15rem;
        letter-spacing: 1px;
    }
    .collectList>div>div>p{
        color: #B4B4B4;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        letter-spacing:1px;
    }
    .collectList>div>div>h3{
        color: #FE724F;
        font-weight: 500;
        font-size: 0.12rem;
    }
    .collectList>div>div>h3>span{
        font-size: 0.16rem;
    }
    .collectList>p{
        font-size: 0.12rem;
        color: #B5B5B5;
        margin: 0.3rem 0;
        position: relative;
    }
    .collectList>p::before{
        content: "";
        display: block;
        border-bottom: 1px solid #EAEAEA;
        width: 1.38rem;
        position: absolute;
        top: 0.08rem;
        left: 0.2rem;
    }
    .collectList>p::after{
        content: "";
        display: block;
        border-bottom: 1px solid #EAEAEA;
        width: 1.38rem;
        position: absolute;
        top: 0.08rem;
        right: 0.2rem;
    }
</style>