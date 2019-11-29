<template>
    <div class="sets">
        <p class="set_top">
            <a href="#/main/personal"><span class="return"></span></a>
            <span class="set_text">设置</span>
        </p>
        <p class="account">
            <a href="#/main/account">
                <span>账号与安全</span>
                <span></span>
            </a>
        </p>
        <p class="blank"></p>
        <button class="exit" v-if="flageset" @click="selector">退出当前帐号
            <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        </button>
    </div>
</template>

<script>
    import { ActionSheet } from 'vant';
    export default {
        name: "lx_secondary_set",
        data(){
            return {
                show: false,
                flageset:false,
                actions: [
                    { name: '确认' },
                    { name: '取消' }
                ]
            }
        },
        components:{
            [ ActionSheet.name ]:ActionSheet
        },
        methods: {
            onSelect() {
// 默认情况下，点击选项时不会自动关闭菜单
// 可以通过 close-on-click-action 属性开启自动关闭
                this.show = false;
                this.$router.push("/main/personal")
            },
            selector() {
                this.show = !this.show;
                window.sessionStorage.clear();

            },
            set(){
                if(window.sessionStorage.data!=""){
                    this.flageset=true
                }
            }
        },
        mounted() {
            this.set()
        }
    }
</script>

<style scoped>
    .sets{
        width:100%;
    }
    .set_top{
        width: 100%;
        padding: 0.1rem 0;
        text-align: left;
    }
    .return{
        display: inline-block;
        width:0.2rem;
        height: 0.2rem;
        background: url("../../../assets/images/lx_img/return.png") no-repeat;
        background-size:100% 100% ;
        position: relative;
        left: 0.1rem;
        top: 0.05rem;
    }
    .set_text{
        font-size: 0.16rem;
        margin-left: 1.5rem;
        white-space: nowrap;
    }
    .blank{
        width: 100%;
        height: 0.1rem;
        background-color: rgb(240,240,240);
    }
    .account{
        width: 100%;
        border-top:0.01rem solid gainsboro;
        padding: 0.2rem 0;
        text-align: left;
    }
    .account span:nth-of-type(1){
        font-size: 0.12rem;
        margin-left: 0.1rem;

    }
    .account span:nth-of-type(2){
        display: inline-block;
        width:0.15rem;
        height: 0.15rem;
        background: url("../../../assets/images/lx_img/arrows.png");
        background-size: 100% 100%;
        position: relative;
        left: 2.8rem;
    }
    .exit{
        width: 1.8rem;
        height: 0.3rem;
        border: none;
        outline: none;
        background: red;
        color: white;
        font-size: 0.14rem;
        border-radius: 0.3rem 0.3rem;
        margin-top: 0.2rem;
    }
</style>