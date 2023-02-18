import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {
                title: "主页"
            }
        },
        {
            path: "/LotteryNumbers",
            name: "LotteryNumbers",
            component: () =>
                import("../views/LotteryNumbers/LotteryNumbers.vue"),
            meta: {
                title: "模拟选号"
            }
        },
        {
            path: "/UnionLotto",
            name: "UnionLotto",
            component: () => import("../views/UnionLotto.vue"),
            meta: {
                title: "双色球"
            }
        }
    ]
})

export default router
