<template>
    <div class="nevBar">
        <div class="nevBarItem"><slot name="left"></slot></div>
        <div class="nevBarItem" ><slot name="center"></slot></div>
        <div class="nevBarItem"  ><slot name="right"></slot></div>
    </div>


</template>

<script>
    export default {
        name: "NevBar"
    }
</script>

<style scoped>
.nevBar{
    display:flex;
    /*position: fixed;*/
    left: 0;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 44px;
    box-shadow: 0 1px 1px rgba(100, 100,100,.05);

}
    .nevBarItem{
        flex: 1;

    }
</style>