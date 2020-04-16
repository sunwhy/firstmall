<template>
    <div id="app">
        <router-view/>
        <Maintabbar/>
    </div>
</template>

<style>
    @import './assets/css/base.css';
</style>
<script>
    import Maintabbar from "./components/content/Maintabbar"
    export default {
        components: {
            Maintabbar
        }
    }
</script>