<template>
    <NavBar />
    <div class="number-area px-3">
        <div class="py-4">
            <div class="text-sm">红球区</div>
            <BallBox
                content-color="#F82630"
                :list-of-repeat="33"
                :countForRandomSelection="6"
                ref="redBollBox"
            />
        </div>
        <div class="py-4">
            <div class="text-sm">蓝球区</div>
            <BallBox
                content-color="#3D84F0"
                :list-of-repeat="16"
                :count-for-random-selection="1"
                ref="blueBollBox"
            />
        </div>
    </div>
    <div class="selected-area px-3 pt-3">
        <div class="text-sm py-3">号码区</div>
        <div class="overflow-y-auto h-80">
            <number-card
                v-for="({ red, blue }, index) of generatedNumbers"
                :key="index"
                class="w-full my-2"
            >
                <div v-for="item of red" :key="item" class="selectedBall red">
                    {{ item }}
                </div>
                <div v-for="item of blue" :key="item" class="selectedBall blue">
                    {{ item }}
                </div>
            </number-card>
        </div>
    </div>
    <div class="border-dotted w-4/5 border-t-2 mx-auto mt-3"></div>
    <BottomBar>
        <template #left>
            <van-button style="border-radius: 0" @click="reset">
                <span class="px-3">重置</span>
            </van-button>
        </template>
        <template #right>
            <span class="px-3">随机生成</span>
            <van-stepper
                v-model="numberOfgenerate"
                theme="round"
                button-size="22"
                disable-input
                max="10"
            />
            <span class="px-2">注</span>
            <van-button
                type="primary"
                style="border-radius: 0"
                @click="startRandomSelection"
            >
                <span class="px-3">确定</span>
            </van-button>
        </template>
    </BottomBar>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue"
import BallBox from "@/components/BallBox/index.vue"
import BottomBar from "@/components/BottomBar.vue"
import { ref } from "vue"
import NumberCard from "@/components/NumberCard.vue"

const reset = () => {
    generatedNumbers.value = []
    redBollBox.value!.reset()
    blueBollBox.value!.reset()
}

/**
 * 随机号码生成数量
 */
const numberOfgenerate = ref(1)
const generatedNumbers = ref<{ red: number[]; blue: number[] }[]>([])

const redBollBox = ref<InstanceType<typeof BallBox> | null>(null)
const blueBollBox = ref<InstanceType<typeof BallBox> | null>(null)

const startRandomSelection = async () => {
    reset()
    for (let index = 0; index < numberOfgenerate.value; index++) {
        const resultForRedTask = redBollBox.value!.startRandomSelection()
        const resultForBlueTask = blueBollBox.value!.startRandomSelection()

        const [red, blue] = await Promise.all([
            resultForRedTask,
            resultForBlueTask
        ])
        generatedNumbers.value.push({
            red,
            blue
        })
    }
}
</script>

<style scoped lang="scss">
.selectedBall {
    @apply w-9 h-9 rounded-full bg-no-repeat bg-cover text-white flex justify-center items-center text-xl;
}
.selectedBall {
    &.red {
        background-image: url("@/assets/icon/redBallKjgg.png");
    }
    &.blue {
        background-image: url("@/assets/icon/blueBallKjgg.png");
    }
}
</style>
