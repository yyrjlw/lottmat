<template>
    <van-nav-bar
        :title="title"
        left-arrow
        fixed
        placeholder
        @click-left="onClickLeft"
    />
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"

const title = ref(useRoute().meta.title)
const onClickLeft = () => history.back()
</script>

<style scoped></style>
