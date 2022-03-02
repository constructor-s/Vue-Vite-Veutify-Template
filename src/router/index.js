import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Adding the .vue is necessary
import About from '../views/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    {
        path: '/protected',
        name: 'protected',
        component: () => import("../views/Protected.vue"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("../views/Login.vue")
    },
    {
        path: '/destination/:id', name: 'destination.show', component: () => import('../views/DestinationShow.vue'), props: true,
        beforeEnter(to, from) {
            if (!["Earth", "Moon", "Mars"].includes(to.params.id)) {
                return {
                    name: 'NotFound',
                    // allows keeping the URL while rendering a different page
                    params: { pathMatch: to.path.split("/").slice(1) },
                    query: to.query,
                    hash: to.hash
                };
            }
        },
        children: [{
            path: ':experienceSlug',
            name: 'experience.show',
            component: () => import('../views/ExperienceShow.vue'),
            props: route => ({ ...route.params, id: route.params.id })
        }]
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || new Promise((resolve) => {
            setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 300);
        });
    }
});

router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !localStorage.getItem("username")) {
        // need to login if not already logged in
        return { name: 'login' };
    }
})

export default router;
