<template>
        <div class="top">
            <div class="right_top">
                <a href="#/main/set" class="one"><span></span></a>
                <a href="#/main/message" class="two"><span></span></a>
            </div>
            <div class="above_logined" >
                <a href="#/main/pMessage">
                    <img :src="headportrait" class="photo"/>
                </a>
                <span class="tel">{{text}}</span>
                <p>
                    <a href="#/main/memberone">
                        <span class="grade"><img src="../../assets/images/lx_img/b1.png" class="sign">普通会员</span>
                    </a>
                    <a href="#/main/memberone"><span class="vip_button"></span></a>
                </p>
            </div>
        </div>
</template>

<script>
    // import axios from 'axios';
    export default {
        name: 'lx_header',
        props:["text"],
        data(){
            return {
                flag:true,
                // flag:false,
                personalMessage:[]
            }
        },
		methods:{
			change(){
				if(window.sessionStorage.data.value){
					this.flag=false;
                    // this.flag=true;
				}
			},
            // getPMessage(){
            //     axios.get("http://10.35.167.69:8080/api//")
            //         .then(res => {
            //             console.log(res.data);
            //             this.personalMessage = res.data;
            //             console.log(this.personalMessage);
            //         });
            // }
		},
        beforeMount() {
            var a=localStorage.getItem("img");
            this.headportrait=a
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
    .photo{
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        margin: 0.3rem 0 0 0.2rem;
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
        /* display: none; */
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
        /* display: none; */
    }
    .tel{
        font-size: 0.2rem;
        color: white;
        font-weight: 400;
        position: relative;
        top: -0.3rem;
        left: 0.2rem;
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
        top: -0.3rem;
        left: 0.9rem;
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
</style>