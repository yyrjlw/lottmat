<template>
    <div
        class="selectedBall m-1 rounded-full bg-no-repeat bg-cover text-white flex justify-center items-center"
        :class="type"
    >
        {{ number }}
    </div>
</template>

<script setup lang="ts">
defineProps<{
    number: number
    type: "red" | "blue"
}>()
</script>

<style lang="scss" scoped>
.selectedBall {
    $size: 2rem;
    width: $size;
    height: $size;
    font-size: $size * 0.7;
    &.red {
        background-image: url("@/assets/icon/redBallKjgg.png");
    }
    &.blue {
        background-image: url("@/assets/icon/blueBallKjgg.png");
    }
}
</style>
