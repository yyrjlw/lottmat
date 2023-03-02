<template>
    <NavBar :left-arrow="false" />
    <main>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in swipeImgs" :key="index">
                <van-image
                    fit="cover"
                    width="100%"
                    height="164"
                    lazy-load
                    :src="item"
                />
            </van-swipe-item>
        </van-swipe>
        <div class="px-2">
            <div class="features-container">
                <div class="header flex items-center py-4">
                    <span class="flag"></span>
                    <div class="title px-2">功能选择</div>
                </div>
                <div class="flex items-center">
                    <div
                        class="flex flex-col items-center px-3"
                        v-for="(item, index) in features"
                        :key="index"
                        @click="$router.push(item.url)"
                    >
                        <van-icon :name="loadIcon(item.icon)" size="38" />
                        <div class="text-xs py-1">{{ item.title }}</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { loadIcon } from "@/utils/img.util"

const swipeImgs = ["/815827.jpg", "/817908.jpg"]

const features = [
    {
        icon: "ticket.svg",
        title: "模拟选号",
        url: "/lotteryNumbers"
    },
    {
        icon: "notice.svg",
        title: "福彩咨询",
        url: "/a"
    }
]
</script>

<style lang="scss" scoped>
.flag {
    background-color: #f82630;
    display: inline-block;
    width: 2px;
    height: 18px;
}
.features-container {
    .title {
        font-size: 15px;
    }
}
</style>
