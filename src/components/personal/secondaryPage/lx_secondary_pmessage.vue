<template>
    <div class="personal_message">
        <div class="modules">
            <a href="#/main/personal"><span class="return"></span></a>
            <span class="personal">个人信息</span>
        </div>
        <div class="modules">
            <span class="intro" @change="handleFile">头像</span>
            <div class="item_bock head_p">
                <div class="head_img" @click.stop="uploadHeadImg">
                    <keep-alive>
                        <img :src="userInfo.avatar" />
                        <!-- <图片地址动态绑定-->
                    </keep-alive>
                </div>
                <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
            </div>
            <span class="right_arrow" @change="handleFile"></span>
        </div>
        <p class="blank"></p>
        <div class="modules">
            <a href="#/main/modifyName">
                <span class="intro">姓名</span>
                <span class="msgs">155****6601</span>
                <span class="right_arrows"></span>
            </a>
        </div>
        <div class="modules" @click="selector">
            <span class="intro" >性别</span>
            <span class="msgs" id="sex">女</span>
            <span class="right_arrows"></span>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <div class="modules">
            <span class="intro">生日</span>
            <span class="msgs">1997-11-29
<!--                 <row>-->
<!--                    <i-col span="12" v-model="ing">-->
<!--                        <Date-picker type="date" placeholder="选择日期" style="width: 2rem"></Date-picker>-->
<!--                    </i-col>-->
<!--                    <i-col span="12" v-model="ing">-->
<!--                        <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 2rem"></Date-picker>-->
<!--                    </i-col>-->
<!--                 </row>-->
            </span>
            <span class="right_arrows"></span>
        </div>
        <div class="modules">
            <a href="#/main/modifyTel">
                <span class="intro">手机</span>
                <span class="msgs">155****6601</span>
                <span class="right_arrows"></span>
            </a>
        </div>
        <div class="modules">
            <span class="intro">邮箱</span>
        </div>
    </div>
</template>

<script>
    import { ActionSheet } from 'vant';
    export default {
        name: "lx_secondary_pmessage",
        props:[],
        data() {
            return {
                userInfo: {
                    avatar: './images/lx_img/b.png'
                    // 初始图片
                },
                keepAlive:true,
                show: false,
                actions: [
                    { name: '男' },
                    { name: '女' }
                ]
            }
        },
        components:{
            [ ActionSheet.name ]:ActionSheet,
            // [ DatePicker.name ]:DatePicker
        },
        methods: {
            uploadHeadImg: function () {
                this.$el.querySelector('.hiddenInput').click()
                // 获取文档中 class=”hiddenInput” 的元素。
            },
            handleFile: function (e) {
                let $target = e.target || e.srcElement
                let file = $target.files[0]
                var reader = new FileReader()
                reader.onload = (data) => {
                    let res = data.target || data.srcElement
                    this.userInfo.avatar = res.result
                }
                reader.readAsDataURL(file)
            },
            onSelect() {
                // 默认情况下，点击选项时不会自动关闭菜单
                // 可以通过 close-on-click-action 属性开启自动关闭
                this.show = false;
                // this.$el.querySelector('#sex').html(this.actions.name);
            },
            selector() {
                this.show = !this.show;
            }
            // select(){
            //     this.ing = !this.ing;
            // }
        }
    }
</script>

<style scoped>
    .personal_message{
        width: 100%;
    }
    .modules{
        padding: 0.15rem 0;
        border-top: 0.01rem solid gainsboro;
        text-align: left;
    }
    .item_bock {
        height:0.4rem;
        width: 0.4rem;
        display: inline-block;
        position: absolute;
        left: 3.1rem;
        top: 0.6rem;
    }
    .head_img img{
        width: 100%;
        border-radius:50%;
    }
    .hiddenInput{
        display: none;
    }
    .personal{
        font-size: 0.16rem;
        margin-left: 1.5rem;
    }
    .intro{
        font-size: 0.12rem;
        text-align: left;
        margin-left: 0.2rem;
    }
    .msgs{
        display: inline-block;
        width: 0.58rem;
        font-size: 0.1rem;
        color: gray;
        text-align: right;
        position: relative;
        left: 2.4rem;
    }
    .return{
        display: inline-block;
        width:0.3rem;
        height: 0.3rem;
        background: url("../../../assets/images/lx_img/return.png") no-repeat;
        background-size:60% 60%;
        font-size: 0;
        position: absolute;
        left: 0.1rem;
    }
    .blank{
        width: 100%;
        height: 0.1rem;
        background-color: rgb(240,240,240);
        margin-top: 0.1rem;
    }
    .right_arrows{
        display: inline-block;
        width: 0.15rem;
        height: 0.15rem;
        background: url("../../../assets/images/lx_img/arrows.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        left:2.5rem;
        top: 0.05rem;
    }
    .right_arrow{
        display: inline-block;
        width: 0.15rem;
        height: 0.15rem;
        background: url("../../../assets/images/lx_img/arrows.png") no-repeat;
        background-size: 80% 80%;
        position: relative;
        left: 3.1rem;
        top: 0.05rem;
    }
</style>