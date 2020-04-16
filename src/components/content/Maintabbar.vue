<template>
    <Tabbar>
        <tabbaritem path="/home" activeColor="pink">
            <img slot="item-icon" src="@/assets/image/tabbar/home.svg"/>
            <img slot="item-icon-active" src="@/assets/image/tabbar/home_active.svg"/>
            <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem path="/category" activeColor="pink">
            <img slot="item-icon" src="@/assets/image/tabbar/category.svg"/>
            <img slot="item-icon-active" src="@/assets/image/tabbar/category_active.svg"/>
            <div slot="item-text">分类</div>
        </tabbaritem>
        <tabbaritem path="/cart" activeColor="pink">
            <img slot="item-icon" src="@/assets/image/tabbar/shopcart.svg"/>
            <img slot="item-icon-active" src="@/assets/image/tabbar/shopcart_active.svg"/>
            <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem path="/profile" activeColor="pink">
            <img slot="item-icon" src="@/assets/image/tabbar/profile.svg"/>
            <img slot="item-icon-active" src="@/assets/image/tabbar/profile_active.svg"/>
            <div slot="item-text">我的</div>
        </tabbaritem>
    </Tabbar>
</template>

<script>
    import  Tabbar  from "@/components/content/tabbar/tabbar";
    import  tabbaritem  from "@/components/content/tabbar/tabbaritem";
    export default {
        name: "Maintarbar",
        components:{
            Tabbar,
            tabbaritem
        }
    }
</script>

<style scoped>

</style>