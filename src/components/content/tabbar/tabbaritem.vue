<template>
    <div class="tabbar-item" @click="changeimg">
        <div v-if="isActive">
            <slot name="item-icon-active"></slot>
        </div>
        <div v-else>
            <slot name="item-icon"></slot>
        </div>
        <div :style="ActiveColor" >
            <slot name="item-text"></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "tabbaritem",
        props: {
            path: String,
            activeColor:{
                type:String,
                default:"red"
            }
        },
        data() {
            return {
                // isActive: true,
            }

        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) !== -1
            },
            ActiveColor(){
                return this.isActive?{color:this.activeColor}:{}
            }
        },
        methods: {
            changeimg() {
                this.$router.replace(this.path).catch(err => {  });
            }
        }
    }
</script>

<style scoped>
    .tabbar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;

    }

    .tabbar-item img {
        width: 24px;
        height: 24px;
    }

    .active {
        color: red;
    }

</style>