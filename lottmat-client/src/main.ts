import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import { Lazyload } from "vant"

import "./assets/style/main.css"
import "./assets/style/common.css"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Lazyload)

app.mount("#app")
