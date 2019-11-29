<template>
    <div class="information">
        <my-secondary-header :head="head"></my-secondary-header>
        <div class="information-context">
        <!--选择出行人开始-->
        <!--        <div class="list-page" style="">-->
        <!--            <div class="white-header">-->
        <!--                <div class="white-header">-->
        <!--                    <div class="ay-header">-->
        <!--                        <div class="ay-header-left">-->
        <!--                            <a class="ay-header-back v-transition" style="display: none;"></a>-->
        <!--                            <div class="left-arrow v-transition" style="display: none;"></div>-->
        <!--                            <a slot="left">取消</a>-->
        <!--                        </div>-->
        <!--                        <h1 class="ay-header-title">-->
        <!--                            <span class="v-transition" style="display: none;"></span>-->
        <!--                            <p>选择出行人</p>-->
        <!--                        </h1> <div class="ay-header-right">-->
        <!--                        <a slot="right">完成</a>-->
        <!--                    </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div class="traveller-content">-->
        <!--                <div class="note-bar-wrap expand-transition">-->
        <!--                    <div class="note-bar"><span>请选择1位出行人</span></div>-->
        <!--                </div>-->
        <!--                <div class="ay-section button-section">-->
        <!--                    <button class="ay_btn ay_btn_primary">-->
        <!--                        <i class="icon-add icon-add-white"></i>新增出行人-->
        <!--                    </button> </div> <div class="no-info">-->
        <!--                <i class="icon-no-info"></i>-->
        <!--                <p>您还没有相关信息</p>-->
        <!--            </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--选择出行人结束-->

            <!-- 联系人卡片 -->
            <van-contact-card
                    :type="cardType"
                    :name="currentContact.name"
                    :tel="currentContact.tel"
                    @click="showList = true"
            />

            <!-- 联系人列表 -->
            <van-popup v-model="showList" position="bottom">
                <van-contact-list
                        v-model="chosenContactId"
                        :list="list"
                        @add="onAdd"
                        @edit="onEdit"
                        @select="onSelect"
                />
            </van-popup>

            <!-- 联系人编辑 -->
            <van-popup v-model="showEdit" position="bottom">
                <van-contact-edit
                        :contact-info="editingContact"
                        :is-edit="isEdit"
                        @save="onSave"
                        @delete="onDelete"
                />
            </van-popup>
        </div>
    </div>
</template>

<script>
    import mySecondaryHeader from './my-secondary-header';
    import { ContactCard, ContactList, ContactEdit } from 'vant';
    import { Popup } from 'vant';
    import axios from 'axios';
    export default {
        name: "lx_secondary_service-three",
        components:{
            mySecondaryHeader,
            [Popup.name]:Popup,
            [ContactCard.name]:ContactCard,
            [ContactList.name]:ContactList,
            [ContactEdit.name]:ContactEdit
        },
        data(){
            return{
                head:"常用信息 · 出行人",
                chosenContactId: null,
                editingContact: {},
                showList: false,
                showEdit: false,
                isEdit: false,
                ud_id:'',
                name:'',
                phone_num:'',
                // gender:'女',
                // id_card:'',
                list: [{
                    // ud_id:this.ud_id,
                    name: "张三",
                    tel: 13000000000,
                    // gender:this.gender,
                    // id_card:this.id_card,
                }]
            }
        },
        computed: {
            cardType() {
                return this.chosenContactId !== null ? 'edit' : 'add';
            },

            currentContact() {
                const id = this.chosenContactId;
                return id !== null ? this.list.filter(item => item.id === id)[0] : {};
            }
        },
        methods: {
            // 添加联系人
            onAdd() {
                this.editingContact = {id: this.list.length};
                this.isEdit = false;
                this.showEdit = true;
            },

            // 编辑联系人
            onEdit(item) {
                this.isEdit = true;
                this.showEdit = true;
                this.editingContact = item;
            },

            // 选中联系人
            onSelect() {
                this.showList = false;
            },

            // 保存联系人
            onSave(info) {
                this.showEdit = false;
                this.showList = false;

                if (this.isEdit) {
                    this.list = this.list.map(item => item.id === info.id ? info : item);
                } else {
                    this.list.push(info);
                }
                this.chosenContactId = info.id;
                let u= sessionStorage.getItem("ud_id");
                axios({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // transformRequest: [function(data) {
                    //     data = JSON.stringify(data)
                    //     return data
                    // }],
                    url:"http://10.35.167.69:8080/api/traveler/ud_id"+u,
                    method:"POST",
                    data:{ //body
                        // ud_id:1,
                        name:this.name,
                        // phone_num:this.phone_num
                        // gender:'女',
                        // id_card:620425219872013648
                    }
                }).then(res=>{
                    console.log(res.data)
                })
            },

            // 删除联系人
            onDelete(info) {
                this.showEdit = false;
                this.list = this.list.filter(item => item.id !== info.id);
                if (this.chosenContactId === info.id) {
                    this.chosenContactId = null;
                }
            }
        }
    }
</script>

<style scoped>
    .information{
        width: 100%;
        background-color: #F7F7F7;
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