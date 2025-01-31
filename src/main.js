import { createRouter, createWebHashHistory } from 'vue-router'
import { createApp, warn } from 'vue'
import App from './App.vue'
import Home from './components/_home.vue'
import Contact from './components/_contact.vue'
import About from './components/_about.vue'
import More from './components/_more.vue'
import Help from './components/_help.vue'
import Cows from './components/_cows.vue'
import Bulls  from './components/_bulls.vue'
import Farming  from './components/_farming.vue'
import Family  from './components/_family.vue'
import Person1  from './components/person1.vue'
import Person2  from './components/person2.vue'
import Knox  from './components/knox.vue'
import Ziegler  from './components/ziegler.vue'
import Login  from './components/login.vue'
import Signup  from './components/signup.vue'





const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/more', component: More },
    { path: '/help', component: Help },
    { path: '/cows', component: Cows },
    { path: '/bulls', component: Bulls },
    { path: '/farming', component: Farming },
    { path: '/family', component: Family },
    { path: '/person1', component: Person1 },
    { path: '/person2', component: Person2 },
    { path: '/knox', component: Knox },
    { path: '/ziegler', component: Ziegler },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },








]


// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We
    // are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
  
const app = createApp(App)
app.use(router)
app.mount('#app')

process.on('exit', function(){
//do somthing
})



