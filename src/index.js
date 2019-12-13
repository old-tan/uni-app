// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)


// 导入 app 根组件
import app from './App.vue'

let vm = new Vue({
    el: '#app',
    render: c => c(app)
})