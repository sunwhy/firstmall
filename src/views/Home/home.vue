<template>
    <div>
        <div id="home">
            <NevBar class="bg">
                <div slot="center">购物车</div>
            </NevBar>
        </div>
        <home-swiper :banners="banners" />
        <home-recommoned-view :recommends="recommends" />
        <home-feature-view :title=""/>
        <ul>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
            <li>12222</li>
        </ul>

    </div>


</template>

<script>
    import NevBar from "@/components/common/NevBar"

    import homeSwiper from "./childrenHome/homeSwiper"
    import homeRecommonedView from "./childrenHome/homeRecommonedView"
    import homeFeatureView from "./childrenHome/homeFeatureView"

    import {getHomeMultidata} from "network/home"

    export default {
        name: "home",
        components: {
            NevBar,
            homeSwiper,
            homeRecommonedView,
            homeFeatureView
        },
        data() {
            return {
                banners: [],
                recommends: [],
                title:['','时尚']
            }
        },
        created() {
            //  请求多个数据   ps:函数栈  函数执行完后就里面的变量就呗回收
            getHomeMultidata().then(res => {
                 console.log(res);
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        }
    }
</script>

<style scoped>
    #home {
        /*height:44px;*/
  padding-bottom: 44px;

    }
    .bg {
        background-color: var(--color-tint);
        color: white;
        position: fixed;
        z-index:9;
    }
</style>