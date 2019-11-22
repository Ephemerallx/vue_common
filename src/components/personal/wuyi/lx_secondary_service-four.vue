<template>
    <div class="collect">
        <my-secondary-header :head="head"></my-secondary-header>
        <div class="collect-context">
            <!--有收藏信息时，显示该div-->
            <my-secondary-collectList v-show="false"></my-secondary-collectList>
            <!--有收藏信息时，隐藏该div-->
            <div class="null">
                <img src="../../../assets/images/lx_img/collect.png" />
                <h3>暂无收藏</h3>
            </div>

        </div>
    </div>
</template>

<script>
    import mySecondaryHeader from './my-secondary-header'
    import mySecondaryCollectList from  './my-secondary-collectList'
    export default {
        name: "lx_secondary_service-four",
        components:{
            mySecondaryHeader,
            mySecondaryCollectList
        },
        data(){
            return{
                head:"收藏"
            }
        }
    }
</script>

<style scoped>
    .collect{
        width: 100%;
        background-color: #F7F7F7;
    }

    .collect-context>.null{
        height: 6.22rem;
    }
    .collect-context>.null>img{
        margin-top: 2.4rem;
        width: 0.55rem;
    }
    .collect-context>.null>h3{
        line-height: 0.5rem;
        font-size: 0.16rem;
        font-weight: normal;
        color: #CACACA;
    }
</style>