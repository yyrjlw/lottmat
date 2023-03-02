<template>
    <div
        class="px-2 pt-5 grid grid-flow-row place-items-center gap-2 justify-center grid-autocol"
    >
        <Ball
            v-for="{ num, selected } in combineListOfRepeat"
            :key="num"
            :content="num"
            :content-color="contentColor"
            :class="{ selected }"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Ball from "./Ball.vue"
import { range, random } from "lodash"

const props = defineProps<{
    contentColor: string //文字颜色
    listOfRepeat: number | number[] //总球数/自定义球的数组
    countForRandomSelection: number //每注能选择的号码的数量
}>()

//#region listOfRepeat加入selected参数
let combineListOfRepeat = ref<
    {
        num: number
        selected: boolean
    }[]
>([])
if (typeof props.listOfRepeat === "number") {
    combineListOfRepeat.value = range(1, props.listOfRepeat + 1).map(num => ({
        num,
        selected: false
    }))
} else if (Array.isArray(props.listOfRepeat)) {
    combineListOfRepeat.value = props.listOfRepeat.map(num => ({
        num,
        selected: false
    }))
}

//#endregion

const reset = () =>
    combineListOfRepeat.value.map(item => (item.selected = false)) //初始化

/**
 * 开始随机选择
 */
const startRandomSelection = async () => {
    const randomSelection = (): Promise<number[]> => {
        return new Promise(res => {
            reset()
            const copyList = [...combineListOfRepeat.value]
            const selectedIndexList = []
            for (
                let index = 0;
                index < props.countForRandomSelection;
                index++
            ) {
                const copyListindex = random(0, copyList.length - 1)
                selectedIndexList.push(copyList[copyListindex].num)
                copyList.splice(copyListindex, 1)
            }
            //根据选择的数组项的索引来改变实际绑定的数组的selected的值，渲染对应的元素
            selectedIndexList.forEach(
                num =>
                    (combineListOfRepeat.value.find(
                        i => i.num === num
                    )!.selected = true)
            )

            res(selectedIndexList)
        })
    }

    let result: any[] = []
    const startRandomSelectionInterval = setInterval(randomSelection, 50)
    await new Promise(res => {
        setTimeout(async () => {
            clearInterval(startRandomSelectionInterval)
            result = await randomSelection()
            setTimeout(() => res(null), 0)
        }, 500)
    })
    return result
}

defineExpose({ startRandomSelection, reset })
</script>

<style scoped>
.grid-autocol {
    /* prettier-ignore */
    grid-template-columns: repeat(auto-fill, minmax(max-content, 30PX));
}
</style>
