import 'babel-polyfill'
import Vue from 'vue'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import VueRouter from 'vue-router';
//引入组件
import App from './src/index.vue';
import About from './src/about.vue';
import Child from './src/children.vue'; 
import Count from './src/count.vue'; 
import Article from './src/article/index.vue';

import './public/iconfont.css'
import 'mint-ui/lib/style.css'
import { Cell,Popup,Picker,Button,Field } from 'mint-ui';
import './main.less'

Vue.component(Cell.name, Cell);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);

// //引入element-ui
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

//引入store
import store from './store.js'

Vue.use(VueRouter)
// Vue.use(ElementUI)

//定义路由
const routes = [
    {
      path: '/',redirect: '/payroll_query',
    },
    // {
    //     path: '/login', component: resolve => require(['./src/login.vue'], resolve)
    // },
    // {
    //     path: '/cloud', component: resolve => require(['./src/cloud/index.vue'], resolve)
    // },
    {
        path: '/payroll_detail/:date/:card', component: resolve => require(['./src/payroll/detail.vue'], resolve)
    },
    {
        path: '/payroll_bind', component: resolve => require(['./src/payroll/bindcard.vue'], resolve)
    },
    {
        path: '/payroll_query', component: resolve => require(['./src/payroll/query.vue'], resolve)
    },
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes 
})
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router,
    store
}).$mount('#main')
// new Vue({
//     el: '#main',
//     components: { App }
// })
