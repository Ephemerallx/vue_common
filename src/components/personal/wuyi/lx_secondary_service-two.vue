<template>
    <div class="discounts">
        <my-secondary-header :head="head"></my-secondary-header>
        <div class="discounts-context">
            <div class="null">
                <img src="../../../assets/images/lx_img/discounts.png" />
                <h3>暂无优惠活动</h3>
            </div>

        </div>
    </div>
</template>

<script>
    import mySecondaryHeader from './my-secondary-header'
    export default {
        name: "lx_secondary_service-two",
        components:{
            mySecondaryHeader
        },
        data(){
            return{
                head:"优惠活动"
            }
        }
    }
</script>

<style scoped>
    .discounts{
        width: 100%;
        background-color: #F7F7F7;
    }
    .discounts-context>.null{
        height: 6.22rem;
    }
    .discounts-context>.null>img{
        margin-top: 2.6rem;
        width: 0.55rem;
    }
    .discounts-context>.null>h3{
        line-height: 0.4rem;
        font-size: 0.16rem;
        color: #CACACA;
    }
</style>