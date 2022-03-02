import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Adding the .vue is necessary
import About from '../views/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/destination/:id', name: 'destination.show', component: () => import('../views/DestinationShow.vue'), 
      props: true, children: [{
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('../views/ExperienceShow.vue'),
          props: route => ({...route.params, id: route.params.id})
    }]}
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
