<template>
    <div class="information">
        <my-secondary-header :head="head"></my-secondary-header>
        <div class="information-context">
            <!--有出行人信息时，显示该div-->
            <div></div>
            <input value="+ 新增常用出行人"/>
            <!--有出行人信息时，隐藏该div-->
            <div class="null">
                <img src="../../../assets/images/lx_img/information.png" />
                <h3>您还没有相关信息</h3>
            </div>

        </div>
    </div>
</template>

<script>
    import mySecondaryHeader from './my-secondary-header'
    export default {
        name: "lx_secondary_service-three",
        components:{
            mySecondaryHeader
        },
        data(){
            return{
                head:"常用信息 · 出行人"
            }
        }
    }
</script>

<style scoped>
    .information{
        width: 100%;
        background-color: #F7F7F7;
    }
    .information-context>input{
        width: 2rem;
        height: 0.45rem;
        border: none;
        background-color: #F5A67F;
        font-size: 0.15rem;
        border-radius: 0.25rem;
        text-align: center;
        color: white;
        margin-top: 0.3rem;
    }
    .information-context>.null{
        height: 6.22rem;
    }
    .information-context>.null>img{
        margin-top: 1.3rem;
        width: 0.55rem;
    }
    .information-context>.null>h3{
        line-height: 0.5rem;
        font-size: 0.12rem;
        font-weight: normal;
        color: #CACACA;
    }
</style>