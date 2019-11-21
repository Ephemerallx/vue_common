<template>
        <div class="top">
            <div class="right_top">
                <a href="#/set" class="one"><span></span></a>
                <a href="#/message" class="two"><span></span></a>
            </div>
            <div class="above">
                <a href="#/main/register">登录/注册</a>
            </div>
            <div class="above_logined">
                <div class="item_bock head_p">
                    <div class="head_img" @click.stop="uploadHeadImg">
                        <keep-alive>
                        <img :src="userInfo.avatar" />
                        <!-- <图片地址动态绑定-->
                        </keep-alive>
                    </div>
                    <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
                </div>
                <span class="tel">155****6601</span>
                <p>
                    <span class="grade"><img src="../../assets/images/lx_img/b1.png" class="sign" >普通会员</span>
                    <a href=""><span class="vip_button"></span></a>
                </p>
            </div>
        </div>
</template>

<script>
    export default {
        name: 'lx_header',
        data() {
            return {
                userInfo: {
                    avatar: './images/lx_img/b.png'
                },
                // 初始图片
                keepAlive:true
            }
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
        display: none;
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
    .above_logined{
        width: 100%;
        text-align: left;
        font-size: 0;
        /*display: none;*/
    }
    .tel{
        font-size: 0.2rem;
        color: white;
        font-weight: 400;
        position: relative;
        top: -0.5rem;
        left: 0.8rem;
    }
    .grade{
        font-size: 0.12rem;
        text-align: right;
    }
    .sign{
        width: 0.15rem;
        height:0.15rem;
        border-radius: 50%;
        position: absolute;
        top: 0.08rem;
        left: 0.05rem;
    }
    .vip_button{
        display: inline-block;
        width:0.7rem;
        height: 0.18rem;
        border-radius: 0.3rem 0.3rem;
        background: url("../../assets/images/lx_img/vip_buttom.png") no-repeat;
        background-size: 100% 100%;
        position: relative;
        left: 1rem;
        top: 0.05rem;
    }
    .above_logined p{
        width: 70%;
        position: relative;
        top: -0.5rem;
        left: 0.8rem;
    }
    .grade{
        font-size: 0.1rem;
        display: inline-block;
        width: 0.8rem;
        height: 0.2rem;
        box-sizing: border-box;
        padding: 0 0.15rem;
        line-height: 0.2rem;
        color:black;
        border-radius: 0.3rem 0.3rem;
        background-color:gainsboro;
        /*opacity: 0.3;*/
    }
    .item_bock {
        height:0.5rem;
        width: 0.5rem;
        border-radius:50%;
        margin: 0.2rem 0 0 0.2rem;
    }
    .head_img img{
        width: 100%;
    }
    .hiddenInput{
        display: none;
    }
</style>