/**
 * References:
 * How to use Vite with Vue Router (video):
 * https://vueschool.io/lessons/installing-and-setting-up-vue-router-with-vite-vite-only
 */
import { createApp } from 'vue'
import App from './App.vue'
// see ./router/index.js for code to set up the router
import router from './router/index.js'

createApp(App)
    .use(router)
    .mount('#app');
