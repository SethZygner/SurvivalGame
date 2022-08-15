import { createRouter, createWebHistory } from 'vue-router'
import PlayScreen from '../views/PlayScreen.vue';
import HomeScreen from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'PlayScreen',
      component: PlayScreen
    },
    {
      path: '/HomeScreen',
      name: 'HomeScreen',
      component: HomeScreen
    }
  ]
})

export default router
