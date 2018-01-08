import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import axios from 'axios'
import highlight from 'highlight.js'
import ElementUI from 'element-ui'
import 'bootstrap/dist/css/bootstrap.css'
import sidebar from './components/sidebar.vue'
import article from './components/article.vue'
import about from './components/about.vue'
import tags from './components/tags.vue'
import navfooter from './components/navfooter.vue'
import articleDetail from './components/articleDetail.vue'
import articleEdit from './components/articleEdit.vue'
import articleList from './components/articleList.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(axios)
Vue.use(highlight)
Vue.use(ElementUI)


// 按需引用element
import { Button, Message, MessageBox, Notification, Popover, Tag, Input } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
const components = [Button, Message, MessageBox, Notification, Popover, Tag, Input]

components.forEach((item) => {
  Vue.component(item.name, item)
})


const router = new VueRouter({
  routes: [
    {path: '/', components: {default: article, sidebar: sidebar}},
    {path: '/article', components: {default: article, sidebar: sidebar}},
     {path: '/about', components: {default: about, sidebar: sidebar}},
     {path:'/tags',components:{default:tags,sidebar:sidebar}},
     {path:'/articleDetail',components:{default:articleDetail,sidebar:sidebar}},
     {path: '/articleEdit', components:{default:articleEdit,sidebar:sidebar}},
     {path: '/articleList', components:{default:articleList,sidebar:sidebar}}

  ]
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
