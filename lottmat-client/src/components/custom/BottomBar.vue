<template>
    <van-nav-bar fixed placeholder class="bottom-bar">
        <template #left>
            <slot name="left"></slot>
        </template>
        <template #title>
            <slot name="center"></slot>
        </template>
        <template #right>
            <slot name="right"></slot>
        </template>
    </van-nav-bar>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bottom-bar {
    :deep(.van-nav-bar--fixed) {
        top: auto;
        bottom: 0;
    }
    :deep(.van-nav-bar__left) {
        padding: 0;
    }
    :deep(.van-nav-bar__right) {
        padding: 0;
    }
}
</style>
