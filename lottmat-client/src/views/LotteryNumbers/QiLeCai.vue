<template>
    <NavBar />
    <div class="number-area px-3">
        <div class="py-4">
            <div class="flex justify-between text-sm">
                <div>至少选择7个,至多选择16个号码</div>
                <div>
                    <span class="px-1">选择</span>
                    <van-stepper
                        v-model="generateNumbersCount"
                        theme="round"
                        button-size="17"
                        disable-input
                        min="7"
                        max="16"
                        input-width="1.5rem"
                    />
                    <span class="px-1">个</span>
                </div>
            </div>
            <BallBox
                content-color="#F82630"
                :list-of-repeat="30"
                :countForRandomSelection="generateNumbersCount"
                ref="bollBox"
            />
        </div>
    </div>
    <div class="selected-area px-3 pt-3 flex-1 flex flex-col">
        <div class="text-sm py-3 flex justify-between">
            <div>号码区</div>
            <div>
                每注
                <span class="text-red-500">2</span>
                元，共计
                <span class="text-red-500">
                    {{ generatedNumbers.length * 2 }}
                </span>
                元
            </div>
        </div>
        <VerticalAdaptiveBox>
            <number-card
                v-for="(numbers, index) of generatedNumbers"
                :key="index"
                class="w-full my-2"
            >
                <SelectedBall
                    v-for="item of numbers"
                    :key="item"
                    :number="item"
                    type="red"
                />
            </number-card>
        </VerticalAdaptiveBox>
    </div>
    <BottomBar>
        <template #left>
            <van-button style="border-radius: 0" @click="reset">
                <span class="px-3">重置</span>
            </van-button>
        </template>
        <template #right>
            <span class="px-3">随机生成</span>
            <van-stepper
                v-model="numberGroupOfgenerate"
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
import { ref } from "vue"
import type BallBox from "@/components/business/BallBox/index.vue"
import SelectedBall from "@/components/business/SelectedBall.vue"

const bollBox = ref<InstanceType<typeof BallBox> | null>(null)

const reset = () => {
    generatedNumbers.value = []
    bollBox.value!.reset()
}
const generateNumbersCount = ref(0)
const numberGroupOfgenerate = ref(1)
const generatedNumbers = ref<number[][]>([])

const startRandomSelection = async () => {
    for (let index = 0; index < numberGroupOfgenerate.value; index++) {
        const result = await bollBox.value!.startRandomSelection()
        generatedNumbers.value.push(result)
    }
}
</script>

<style scoped></style>
