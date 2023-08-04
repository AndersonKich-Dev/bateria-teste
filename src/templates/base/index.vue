<template>
    <div class="padrao-template">
        <Header />
        <div class="main-template">
            <Menu />
            <Content />
        </div>
    </div>
</template>

<script setup lang="ts">
import Header from './header/index.vue';
import Menu from './menu/index.vue';
import Content from './content/index.vue';
</script>

<style lang="scss">
.padrao-template {
    width: 100vw;
    height: 100vh;
    //border: 2px solid green;
    display: flex;
    flex-direction: column;
}

.main-template {
    display: flex;
    width: 100vw;
    height: calc(100vh - 60px);
}
</style>
