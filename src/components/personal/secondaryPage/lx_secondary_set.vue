<template>
    <div class="sets">
        <p class="set_top">
            <span></span>
            <span>设置</span>
        </p>
        <p class="blank"></p>
        <p class="account">
            <a href="#/main/modify">
                <span>账号与安全</span>
                <span></span>
            </a>
        </p>
        <el-button type="text" @click="open">退出当前账号</el-button>
    </div>
</template>
import { MessageBox } from 'element-ui'
<script>
    export default {
         name: "lx_secondary_set",
         methods: {
             open() {
                 this.$confirm('确认要退出登录吗?', '提示', {
                     confirmButtonText: '确认',
                     cancelButtonText: '取消',
                     type: 'warning'
                 }).then(() => {
                     this.$message({
                         type: 'success',
                     });
                 }).catch(() => {
                     this.$message({
                         type: 'info',
                     });
                 });
             }
         }
    }
</script>

<style scoped>
    .sets{
        width:100%;
    }
    .set_top{
        width: 100%;
    }
    .set_top span:nth-of-type(1){
        display: inline-block;
        width:0.4rem;
        height: 0.4rem;
        background: url("../../../assets/images/lx_img/return.png");
        background-size:80% 80% ;
    }
    .set_top span:nth-of-type(2){
        font-size: 0.14rem;
    }
    .blank{
        width: 100%;
        height: 0.1rem;
        background-color: rgb(240,240,240);
    }
    .account{
        width: 100%;
        border-top:0.01rem solid gray ;
        padding: 0.1rem 0;
        text-align: left;
    }
    .account span:nth-of-type(1){
        font-size: 0.12rem;

    }
    .account span:nth-of-type(2){
        display: inline-block;
        width:0.2rem;
        height: 0.2rem;
        background: url("../../../assets/images/lx_img/arrows.png");
        background-size: 80% 80%;
    }
    .el-button{
        width: 1.8rem;
        height: 0.4rem;
        background-color: red;
        color: white;
    }
</style>