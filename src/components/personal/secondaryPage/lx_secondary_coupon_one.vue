<template>
    <div class="compon">
        <div class="property">
            <a href="#/main/personal"><span class="return"></span></a>
            <span class="my_wallet">优惠券</span>
        </div>
        <div class="select_list">
            <van-dropdown-menu active-color="#ee0a24">
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
                <van-dropdown-item v-model="value3" :options="option3" />
            </van-dropdown-menu>
        </div>
        <div class="compons" v-for="(n,index) in list" :key="index">
            <div class="compons_left">
                <p class="explain">{{n.opt}}</p>
                <p class="time">{{n.datetime}}</p>
            </div>
            <div class="compons_right">
                <p class="pesd">{{n.money}}</p>
                <p class="term">{{n.condition}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { DropdownMenu, DropdownItem } from 'vant';
    export default {
        name: "lx_secondary_coupon_one",
        data() {
            return {
                value1: 0,
                value2: 'a',
                value3:'d',
                option1: [
                    { text: '可使用', value: 0 },
                    { text: '不可使用', value: 1 }
                ],
                option2: [
                    { text: '全部', value: 'a' },
                    { text: '参团', value: 'b' },
                    { text: '机票', value: 'c' }
                ],
                option3: [
                    { text: '默认排序', value: 'd' },
                    { text: '即将排序', value: 'e' },
                    { text: '金额排序', value: 'f' }
                ],
                list:[
                    {
                        opt:'出境长线参团 限时加磅专属优惠券',
                        datetime:'2019-11-16至2019-11-25',
                        money:'￥500',
                        condition:'满10000可用'
                    },
                    {
                        opt:'出境长线参团 限时加磅专属优惠券',
                        datetime:'2019-11-16至2019-11-25',
                        money:'￥500',
                        condition:'满10000可用'
                    }
                ]
            }
        },
        components:{
            [DropdownMenu.name]:DropdownMenu,
            [DropdownItem.name]:DropdownItem
        }
    }
</script>

<style scoped>
    .compon{
        width: 100%;
    }
    .property{
        width: 100%;
        font-size: 0;
        text-align: left;
        padding: 0.1rem 0;
    }
    .my_wallet{
        font-size: 0.16rem;
        margin-left: 1.5rem;
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
    .select_list{
        width: 100%;
        font-size: 0.12rem;
        border-top: 0.01rem solid gainsboro;
        border-bottom: 0.01rem solid gainsboro;
    }
    .compons{
        width: 95%;
        margin: 0.2rem auto;
        background: url("../../../assets/images/lx_img/vip_1.455bad2.png") no-repeat;
        background-size: 100% 100%;
        padding: 0.3rem 0;
        text-align: left;
    }
    .compons_left{
        display: inline-block;
        margin-left: 0.3rem;
    }
    .compons_right{
        display: inline-block;
        position: relative;
        left: 0.4rem;
        top: -0.1rem;
    }
    .explain{
        font-size: 0.16rem;
        width: 2rem;
        text-align: left;
    }
    .time{
        font-size: 0.12rem;
        width: 1.5rem;
        color: gray;
    }
    .pesd{
        width: 0.4rem;
        font-size: 0.2rem;
        color: white;
        font-weight: 600;
    }
    .term{
        color: white;
        font-size: 0.12rem;
        width: 0.8rem;
    }
</style>