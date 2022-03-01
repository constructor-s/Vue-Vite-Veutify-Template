import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Adding the .vue is necessary
import About from '../views/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/destination/:id', name: 'destination.show', component: () => import('../views/DestinationShow.vue'), props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
