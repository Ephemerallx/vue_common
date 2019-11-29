<template>
    <div class="adviser">
        <my-secondary-header :head="head"></my-secondary-header>
        <div class="adviser-context">
            <img src="../../../assets/images/lx_img/service-touxiang.png" />
            <input type="text" v-model="adviserPhone" placeholder="专属旅行顾问号码"/>
            <input class="submit" type="button" value="提交"/>
            <div class="adviser-active">
                <h3>活动说明</h3>
                <p>为了提升对您的服务质量，提供给您更适合的旅行建议、资讯和帮助，我们现在推行“让我成为您的专属旅行顾问”活动。我们的旅行顾问，会向您介绍自己，您只需填写一下这位顾问的号码，就可以尊享他所提供的贴心服务了，同时您还会获得一个大礼包。</p>
            </div>
        </div>
        <div class="footer">
            <p>当您进行预定参团、自由行等旅游产品后，我们将为您安排专属旅行顾问。</p>
            <h2>联系我们</h2>
            <div class="call_btn">
                <a :href="'tel:'+tel"><span></span>400 - 600 - 6666</a>
            </div>
        </div>
    </div>
</template>

<script>
    import mySecondaryHeader from './my-secondary-header'
    export default {
        name: "lx_secondary_service-one",
        components:{
            mySecondaryHeader
        },
        data(){
            return{
                head:"专属旅行顾问",
                adviserPhone:"",
                msg:'',
                tel:'400 - 600 - 6666'
            }
        }
    }
</script>

<style scoped>
    .adviser{
        width: 100%;
        background-color: #F7F7F7;
    }
    .adviser-context{
        padding: 0 0.2rem;
        background-color: white;
        margin-bottom: 0.1rem;
    }
    .adviser-context>img{
        margin: 0.19rem 0 0.29rem;
        width: 0.655rem;
    }
    .adviser input{
        width: 3.35rem;
        height: 0.45rem;
        line-height: 0.45rem;
        font-size: 0.16rem;
        margin-bottom: 0.17rem;
        border-radius: 0.25rem;
        border: 1px solid gainsboro;
        box-sizing: border-box;
        text-align: center;
    }
    .adviser .submit{
        background-color: #FF6C2E;
        color: white;
        border: none!important;
    }
    .adviser-active>h3{
        line-height: 0.26rem;
        font-size: 0.14rem;
        text-align: left;
        color: #797979;
    }
    .adviser-active>p{
        font-size: 0.12rem;
        text-align: left;
        color: #A0A0A0;
        line-height: 0.19rem;
        padding-bottom: 0.3rem;
    }
    .adviser .footer{
        padding: 0.2rem 0.2rem 0;
        background-color: white;
    }
    .footer>h2{
        line-height: 0.5rem;
        font-size: 0.16rem;
    }
    .footer>p{
        font-size: 0.14rem;
        text-align: left;
        color: #5C5C5C;
        line-height: 0.22rem;
    }
    /*.footer>.phone{*/
    /*    color: #FF6C2E;*/
    /*    font-weight: 500;*/
    /*    font-size: 0.14rem;*/
    /*}*/

    .call_btn{
        width: 90%;
        height: 0.4rem;
        line-height: 0.4rem;
        background:whitesmoke;
        text-align: center;
        margin:0.05rem auto;
        border: 0.01rem solid gainsboro;
        border-radius: 0.3rem 0.3rem;
    }
    .call_btn a{
        font-size: 0.14rem;
        color: red;
        text-decoration: none;
    }
    .call_btn a span{
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        background: url("../../../assets/images/lx_img/telephone.png") no-repeat;
        background-size: 80% 80%;
        position: absolute;
        top: 5.65rem;
        left: 0.9rem;
    }
</style>