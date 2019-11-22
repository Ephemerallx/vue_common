<template>
    <div class="history">
        <my-secondary-header :head="head"></my-secondary-header>
        <div class="history-context">
            <!--有历史浏览记录时，显示该div-->
            <my-secondary-collectList v-show="false"></my-secondary-collectList>
            <!--有历史浏览记录时，隐藏该div-->
            <div class="null">
                <img src="../../../assets/images/lx_img/history.png" />
                <h3>暂无浏览记录</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import mySecondaryHeader from './my-secondary-header'
    import mySecondaryCollectList from './my-secondary-collectList'
    export default {
        name: "lx_secondary_service-five",
        components:{
            mySecondaryHeader,
            mySecondaryCollectList
        },
        data(){
            return{
                head:"浏览历史"
            }
        }
    }
</script>

<style scoped>
    .history{
        width: 100%;
        background-color: #F7F7F7;
    }
    .history-context>.null{
        height: 6.22rem;
    }
    .history-context>.null>img{
        margin-top: 2.4rem;
        width: 0.55rem;
    }
    .history-context>.null>h3{
        line-height: 0.5rem;
        font-size: 0.12rem;
        font-weight: normal;
        color: #CACACA;
    }
</style>