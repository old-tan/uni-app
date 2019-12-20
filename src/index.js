// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter('dateFormat', function (datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
    moment(datastr).format(pattern)
})


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入 Mint-UI 组件
import { Header, Swipe, SwipeItem,Button } from 'mint-ui'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// 导入自己的 router.js 模块
import router from './router.js'




// 导入 app 根组件
import app from './App.vue'

let vm = new Vue({
    el: '#app',
    render: c => c(app),
    router, // 1.4 挂载路由对象到 VM 实例上
    methods: {

    },
})