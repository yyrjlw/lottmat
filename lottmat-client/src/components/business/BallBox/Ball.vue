<template>
    <div
        class="inline-block relative"
        :style="{ width: realSize, height: realSize, fontSize: realSize }"
    >
        <van-icon name="circle" class="absolute" size="100%" color="#BBBBBB" />
        <span
            class="absolute w-full h-full text-center content"
            :style="{ color: contentColor }"
        >
            {{ content }}
        </span>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
    content: [String, Number, Boolean, Object],
    size: {
        type: [String, Number],
        default: "30px"
    },
    contentColor: String
})

const realSize = computed(() => {
    if (typeof props.size === "string") {
        return props.size
    } else if (typeof props.size === "number") {
        return props.size + "px"
    } else {
        throw new Error("不支持的size类型")
    }
})
</script>

<style scoped lang="scss">
.selected {
    ::after {
        content: "";
        position: absolute;
        width: 80%;
        height: 80%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: rgba($color: red, $alpha: 0.1);
    }
}
.content {
    font-size: 0.4em;
    line-height: v-bind(realSize);
}
</style>
