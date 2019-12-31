<template>
    <div class="ComboBox">
        <van-dropdown-menu  style=" position: fixed;top: 0.5rem;z-index:99;width: 100%;" active-color="#ee0a24">
            <van-dropdown-item v-model="value2" :options="zonghe" style="width: 10%" />

        <div @click="diqu" class="dis">地区<img src="../../../assets/xiala.png" class="xiala">
<!--            <div style="width: 100%;background-color: #ffffff;height: 0.4rem;position: absolute;top: 0.6rem; right: 0.8rem;">-->
            <area-select type='all'
                         :level='2'
                         v-model="selected"
                         :data="pcaa"
                         placeholders = '省市区'
                         size="large"
                         style="  position: absolute;
                                  top:0.5rem;
                                  right: 0.8rem;
                                  text-align: center;
                                  width: 80%;
                                  display: flex;
                                  /*justify-content: space-around;*/
                                  "
                         v-show="view"
            >
            </area-select>
<!--            </div>-->
        </div>
<!--品类-->
            <van-dropdown-item v-model="value1" :options="pinlei" style="width: 5%;"/>
<!--筛选-->
            <van-cell is-link @click="showPopup" class="ab">筛选</van-cell>
            <van-popup v-model="show" position="right" :style="{ height: '100%', width:'70%',fontSize:'0.14rem',}" >
                <div style="padding: 0.2rem ">
                    <div class="pri">价格区间</div>
                    <div class="in">
                         <input typeof="text" placeholder="输入最低价"/> -  <input typeof="text" placeholder="输入最高价"/>
                    </div>
                    <div class="time">更新时间</div>
                    <p class="day" >最近三天</p>
                    <p class="tedian">供应特点</p>
                    <div class="tedianlei">
                        <p class="a" >认真好店</p>
                        <p class="b" >满减优惠</p>
                        <p class="c" >保证金商家</p>
                    </div>
                </div>

                <div class="bott">
                     <div class="re">充值</div>
                     <div class="qu" @click="ok"><a href="#">确定</a></div>
                 </div>
            </van-popup>
        </van-dropdown-menu>
    </div>
</template>

<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem,Area,NavBar,Popup} from 'vant';
Vue.use(DropdownMenu).use(DropdownItem).use(Area).use(NavBar).use(Popup);
import 'vue-area-linkage/dist/index.css'

import { pca, pcaa } from 'area-data'

export default {
    name: "ComboBox",
    components: {
        VanPopup: Popup,
        vanDropdownMenu:DropdownMenu,
        vanDropdownItem:DropdownItem,
    },
    data() {
        return {
            pca: pca,
            pcaa: pcaa,
            view: false,




            show: false,
            value1: 0,
            value2: 'a',
            pinlei: [
                {text: '品类', value: 0},

                {text: '冰糖橙', value: 1},
                {text: '活动商品', value: 2},
                {text: '新款商品', value: 3},
                {text: '新款商品', value: 4},
            ],
            zonghe: [
                {text: '综合', value: 'a'},
                {text: '附近货源', value: 'b'},
                {text: '最近货源', value: 'c'},
                {text: '价格最高', value: 'd'},
                {text: '价格最低', value: 'e'},
                {text: '信用最高', value: 'f'}
            ],
        }
    },
    methods: {
        diqu(){
            // this.view = true
            this.view=!this.view
        },
        selected(){},
        showPopup() {
            this.show = true;
        },
        ok(){
            this.show = false;
        }
    }
}
</script>

<style scoped>
    .area-select-wrap{
        width: 100%;
        background-color: #ffffff;
        height: 0.36rem;

    }
    /*.van-ellipsis{*/
    /*    font-size: 0.14rem;*/
    /*}*/
    .ab{
        font-size: 0.14rem;
        margin: auto 0;
        padding-right: 0.1rem;
    }
    select{
        display: flex;
        width: 80%;
    }
    .dis{
        font-size: 0.15rem;
        /*line-height: 0.5rem;*/
        /*margin-top: 0.15rem;*/
        margin-right: 0.5rem;
        margin-top: 4%;

    }
    /*//*/
    .in{
        display: flex;
        justify-content: space-around;
        margin: 0.14rem 0;
        font-size: 0.12rem;
    }
    .day{
        margin: 0.14rem 0;
        font-size: 0.12rem;
        margin-left: 0.14rem;
    }
    .tedianlei{
        display: flex;
        justify-content: space-around;
        font-size: 0.12rem;
        margin: 0.14rem 0;
    }
    .bott{
        display: flex;
        justify-content: space-around;
    }
    .bott{
        display: flex;
        position: fixed;
        bottom: 0;
        height: 0.5rem;
        width: 100%;
        text-align: center;
        line-height: 0.5rem;
    }
    .re{
        width: 50%;
        background-color: #F3F3F3 ;
    }
    .qu{
        width: 50%;
        background-color: green;
        color: #ffffff;
    }
    .in input{
        width: 40%;
        border-radius: 0.1rem;
        outline: none;
        border: 0.01rem solid #9E9E9E;
        text-align: center;
        padding: 0.06rem 0;
    }
    .xiala{
        width: 0.109rem;
        position: absolute;
        top: 42%;
        padding-left: 0.06rem;
        opacity: .9;

    }
</style>