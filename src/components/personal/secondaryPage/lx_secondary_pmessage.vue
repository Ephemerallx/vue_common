<template>
    <div class="personal_message">
        <div class="modules">
            <a href="#/main/personal"><span class="return"></span></a>
            <span class="personal">个人信息</span>
        </div>
        <div class="modules">
            <span class="intro">头像</span>
            <div class="item_bock head_p">
                <van-uploader
                        v-model="fileList"
                        :max-count="1"
                        captrue="camera"
                        :after-read="afterRead"
                        accept="image/jpg/png/gif"
                        preview-size="50px"
                        multiple
                        class="getImg"
                />
            </div>
            <p class="right_arrow"></p>
        </div>
        <p class="blank"></p>
        <div class="modules" @click="changeName">
            <span class="intro">姓名</span>
            <span class="msg_one" v-text="message"></span>
            <span class="right_arrows"></span>
        </div>
        <div class="mitu_dialog_alert" v-show="ff">
            <div class="mitu_mask mitu-fade-transition"></div>
            <div class="mitu_dialog mitu-dialog-transition">
                <div class="mitu_dialog_bd">
                    <div class="booking-alert-content">
                        <input type="text" class="scanf" placeholder="请输入姓名" v-model="modifyName">
                        <div class="alert-btn">
                            <button class="xl-mitu_btn" @click="exit1"> 确定 </button>
                            <button class="xl-mitu_btn" @click="cancel"> 取消 </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modules" @click="selector">
            <span class="intro" >性别</span>
            <span class="msgs_two" id="sex" v-text="sex_Per"></span>
            <span class="right_arrows"></span>
        </div>
        <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        <div class="modules" @click="this.flag=true">
            <span class="intro">生日</span>
            <span class="msgs_three">1997-11-29</span>
            <span class="right_arrows"></span>
        </div>
        <div class="birthday">
<!--            <van-datetime-picker-->
<!--                    v-model="currentDate"-->
<!--                    type="date"-->
<!--                    :min-date="minDate"-->
<!--                    :max-date="maxDate"-->

<!--            />-->
<!--            :min-date="minDate"-->
<!--                        @change="changeFn()"-->
<!--                        @confirm="confirmFn()"-->
<!--                        @cancel="cancelFn()"-->
        </div>
        <div class="modules" @click="changePhone">
            <span class="intro">手机</span>
            <span class="msgs_four" v-text="pTel"></span>
            <span class="right_arrows"></span>
        </div>
<!--        <div class="mitu_dialog_alert" v-show="ee">-->
<!--            <div class="mitu_mask mitu-fade-transition"></div>-->
<!--            <div class="mitu_dialog mitu-dialog-transition">-->
<!--                <div class="mitu_dialog_bd">-->
<!--                    <div class="booking-alert-content">-->
<!--                        <input type="text" class="fill_phone" placeholder="请输入手机号" v-model="innerPhone">-->
<!--                        <div class="alert-btn">-->
<!--                            <button class="xl-mitu_btn" @click="exit2"> 确定 </button>-->
<!--                            <button class="xl-mitu_btn" @click="cancel"> 取消 </button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="modules" @click="fillEmail">
            <span class="intro">邮箱</span>
            <span v-text="pEmail"></span>
        </div>
        <div class="mitu_dialog_alert" v-show="tt">
        <div class="mitu_mask mitu-fade-transition"></div>
        <div class="mitu_dialog mitu-dialog-transition">
            <div class="mitu_dialog_bd">
                <div class="booking-alert-content">
                    <input type="text" class="fill_email" placeholder="请输入邮箱" v-model="innerEmail">
                    <div class="alert-btn">
                        <button class="xl-mitu_btn" @click="exit3"> 确定 </button>
                        <button class="xl-mitu_btn" @click="cancel"> 取消 </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="comfirm" @click="actions_for">
            <button>确认提交</button>
        </div>
    </div>
</template>

<script>
    import { ActionSheet,Uploader,DatetimePicker } from 'vant';
    import axios from 'axios';
    export default {
        name: "lx_secondary_pmessage",
        props:[],
        data() {
            return {
                keepAlive:true,
                show: false,
                actions: [
                    { name: '男' },
                    { name: '女' }
                ],
                fileList: [],
                // changeDate: new Date(),
                flag:false,
                timeValue: '',
                ff:false,
                ee:false,
                tt:false,
                modifyName:15569796601,
                message:"",
                sex_Per:"",
                pEmail:"",
                innerEmail:"",
                a:"",
                pTel:""
                // innerPhone:''
                // minDate: new Date(),
                // maxDate: new Date(1980, 1, 1),
                // currentDate: new Date()
            }
        },
        components:{
            [ ActionSheet.name ]:ActionSheet,
            [ Uploader.name ]:Uploader,
            [ DatetimePicker.name ]:DatetimePicker
        },
        methods: {
            cancel(){
                this.ff = false;
            },
            exit1() {
                // localStorage.setItem("tel_num", modifyName.value);
                // console.log(localStorage.tel_num);
                this.message=this.modifyName;
                console.log(this.message);
                this.ff = false;
            },
            afterRead(file) {
                console.log(file);
                let a=sessionStorage.getItem("ud_id");
                axios.post("http://10.35.167.69:8080/api/update_img/",{ud_img:file.content,ud_id:a})
                    .then(res=> {
                        if(res.data){
                            console.log(res.data);
                            localStorage.setItem("img",file.content);
                            console.log(file.content);
                        }else{
                            alert("上传失败！！！")
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })

            },
            onSelect() {
                // 默认情况下，点击选项时不会自动关闭菜单
                // 可以通过 close-on-click-action 属性开启自动关闭
                let male=document.querySelector(".van-action-sheet__name");
                // let female=document.getElementsByClassName(".van-action-sheet__name")[1];
                console.log(male);
                // console.log(female);
                this.show = false;
                this.sex_Per=male.innerHTML;
                console.log(this.sex_Per);
            },
            selector() {
                this.show = !this.show;
            },
            changeName(){
                this.ff=!this.ff;
            },
            changePhone(){
                this.ee=!this.ee;
            },
            fillEmail(){
               this.tt=!this.tt;
            },
            // exit2() {
            //     this.pTel=this.innerPhone;
            //     console.log(this.pTel);
            //     this.ee = false;
            // },
            exit3() {
                this.pEmail=this.innerEmail;
                console.log(this.pEmail);
                // localStorage.setItem("u_email", pEmail.value);
                // console.log(localStorage.tel_num);
                this.tt = false;
            },
            actions_for() {
                this.a=sessionStorage.getItem("ud_id");
                axios({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    transformRequest: [function (data) {
                        data = JSON.stringify(data)
                        return data
                    }],
                    url: "http://10.35.167.69:8080/api/update_ud/",
                    method: "POST",
                    data: { //body
                        ud_id:this.a,
                        nick_name: this.message,
                        gender: this.sex_Per,
                        // phone:this.pTel,
                        ud_email: this.pEmail
                    }
                }).then(res => {
                    console.log(res.data);
                    if (res.data.status == 200) {
                        alert("修改成功!");
                        let msg = res.data;
                        sessionStorage.setItem("changeName",msg.nick_name);
                        sessionStorage.setItem("changeSex",msg.gender);
                        sessionStorage.setItem("changeEmail",msg.ud_email);
                    }else{
                        alert("修改失败！")
                    }
                })
            }
            // minDate(){
            //    this.flag=!this.flag;
            // },
            // timeFormat(time) { // 时间格式化 2019-09-08
            //     let year = time.getFullYear();
            //     let month = time.getMonth() + 1;
            //     let day = time.getDate();
            //     return year + '年' + month + '月' + day + '日'
            // },
            // changeFn(){
            //     this.changeDate = this.currentDate
            // },
            // confirmFn(){
            //     this.timeValue = this.timeFormat(this.currentDate);
            //     document.querySelector(".msgs").innerHTML=this.timeValue;
            //     this.flag = false;
            // },
            // cancelFn(){
            //     this.flag = true;
            // }
        },
        // mounted() {
        //     this.timeFormat(new Date());
        // }
        beforeMount() {
            this.pTel=sessionStorage.getItem("data");
        },
        mounted() {
            this.message=sessionStorage.getItem("changeName");
            this.sex_Per=sessionStorage.getItem("changeSex");
            this.pEmail=sessionStorage.getItem("changeEmail");
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
    .head_p img{
        width: 0.3rem;
        height: 0.3rem;
    }
    .getImg{
        margin:-0.03rem 0 0 -0.15rem;
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
    .modules span:nth-of-type(2){
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
    .comfirm{
        position: relative;
        top: 0.8rem;
    }
    .comfirm button{
        width: 1.8rem;
        height:0.4rem;
        border-radius: 0.3rem 0.3rem;
        background-color: red;
        color: white;
        font-size: 0.16rem;
        text-align: center;
        line-height: 0.4rem;
        outline: none;
        border: none;
    }
    .scanf{
        width: 2rem;
        height: 0.25rem;
        margin: 0.1rem 0 0.1rem 0.1rem;
    }
    .mitu-fade-transition {
        opacity: 1;
        transition: opacity .2s linear;
    }
    .mitu_mask {
        z-index: 1000;
        background: rgba(0,0,0,.6);
    }
    .mitu_mask{
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .mitu-dialog-transition {
        opacity: 1;
        transition-duration: .4s;
        transform: translate(-50%,-50%) scale(1)!important;
        transition-property: transform,opacity,-webkit-transform!important;
    }
    .mitu_dialog {
        position: fixed;
        z-index: 5000;
        width: 2.7rem;
        top: 50%;
        left: 50%;
        background-color: #fafafc;
        text-align: center;
        border-radius: 0.03rem;
        overflow: hidden;
    }
    .mitu_dialog_bd {
        padding: 0 0.2rem;
        font-size: 0.14rem;
        color: #888;
    }
    .booking-alert-content {
        padding: 0.25rem 0 0.3rem;
    }
    .booking-alert-title {
        font-size: 0.14rem;
        font-weight: 300;
        color: #333;
        line-height:0.2rem;
    }
    .alert-btn {
        display: flex;
        align-items: center;
        margin-top: 0.25rem;
        padding: 0 0.1rem;
        width: 100%;
        box-sizing: border-box;
    }
    .xl-mitu_btn{
        padding: 0 0.05rem;
        width: 1rem;
        height: 0.4rem;
        box-sizing: border-box;
        color: #666;
        border: 1px solid #dfdfdf;
        margin: 0;
        font-size: 0.17rem;
        border-radius: 1rem;
        background-color: white;
    }
    .alert-btn button:last-child {
        color: #41b3ee;
        margin-left: 0.1rem;
    }
    .birthday{
        width:100%;
    }
</style>