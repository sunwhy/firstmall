<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
    export default {

        name: "Tabbar"
    }
</script>

<style scoped>
    .tabbar {
        display: flex;
        background: #f6f6f6;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.1);
    }


</style>