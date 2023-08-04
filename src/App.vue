<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="app-container">
        <transition mode="out-in">
            <RouterView />
        </transition>
    </div>
</template>

<style lang="scss">
.v-enter,
.v-leave-to {
    transform: translate3d(-5px, 0, 0);
    opacity: 0;
}
.v-enter-active,
.v-leave-active {
    transition: all 0.3s;
}
</style>
