<template>
    <div class="my-secondary-header">
        <a href="#/main/personal"></a>
        <h3>{{head}}</h3>
    </div>
</template>

<script>
    export default {
        name: "my-secondary-header",
        props:["head"]
    }
</script>

<style scoped>
    .my-secondary-header{
        width: 100%;
        height: 0.45rem;
        border-bottom: 0.01rem solid gainsboro;
        box-sizing: border-box;
        background-color: white;
        /*position: fixed;*/
        /*top: 0;*/
    }
    .my-secondary-header>a{
        display: inline-block;
        width:0.2rem;
        height: 0.2rem;
        background: url("../../../assets/images/lx_img/return.png") no-repeat;
        background-size:100% 100% ;
        position: absolute;
        left: 0.2rem;
        top: 0.15rem;
    }
    .my-secondary-header>h3{
        font-size: 0.17rem;
        line-height: 0.45rem;
        white-space: nowrap;
    }
</style>