<script setup lang="ts"></script>

<template>
    <div class="content-container">
        <transition mode="out-in">
            <RouterView :key="$route.path" />
        </transition>
    </div>
</template>
<style lang="scss" scoped>
.content-container {
    flex: 1;
    height: 100%;
    background-color: purple;
}
</style>
