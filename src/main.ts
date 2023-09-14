import { createApp } from 'vue';
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import './style.css';
import App from "@/App.vue";



import axios from "axios";

axios({
    url:'/api/user/login',
    method:"post",
    data:{
        username:'admin',
        password:'1112111' 
    }
}).then((res) => { console.log(res);
 }).catch((err) => {console.log(err);})


console.log(import.meta.env);

import 'virtual:svg-icons-register'
import globalComponent from './components/index.ts';

import '@/styles/index.scss'

createApp(App).use(ElementPlus,{
    locale: zhCn,
}).use(globalComponent).mount("#app");
