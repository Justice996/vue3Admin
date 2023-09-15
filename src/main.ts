console.log(13);

import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import "./style.css";
import App from "@/App.vue";
// import request from '@/utils/request.ts';
// console.log(import.meta.env.VITE_APP_BASE_API);
// console.log(import.meta.env,request);


import "virtual:svg-icons-register";
import globalComponent from "./components/index.ts";

import "@/styles/index.scss";
import router from './router'

createApp(App)
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(globalComponent).use(router).mount("#app");
