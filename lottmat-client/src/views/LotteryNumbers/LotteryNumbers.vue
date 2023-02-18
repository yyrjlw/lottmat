<template>
    <NavBar />
    <van-image fit="cover" width="100%" lazy-load src="/v2_r27f3r.png" />
    <div class="list-box px-7 mt-4">
        <div
            v-for="(item, index) in cellList"
            :key="index"
            class="flex justify-between items-center mb-7 bg-white rounded-xl px-3 py-2"
            @click="$router.push(item.url)"
        >
            <van-icon :name="loadIcon(item.icon)" size="38" />
            <div>{{ item.title }}</div>
            <div class="flex items-center">
                <span class="px-1">去选号</span>
                <van-icon name="arrow" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue"
import { loadIcon } from "@/utils/img.util"
const cellList = [
    {
        icon: "shuangseqiu.png",
        title: "双色球",
        url: "/UnionLotto"
    },
    {
        icon: "qilecai.png",
        title: "七乐彩",
        url: ""
    },
    {
        icon: "3D.png",
        title: "福彩3D",
        url: ""
    },
    {
        icon: "kuaile8.png",
        title: "快乐8",
        url: ""
    }
]
</script>

<style scoped></style>
