import Vue from 'vue';
import Router from 'vue-router';

import PictureOfTheDay from './components/Pages/PictureOfTheDay.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/astronomy-picture-of-the-day',
      name: 'PictureOfTheDay',
      component: PictureOfTheDay,
    },
    {
      path: '*',
      redirect: { name: 'PictureOfTheDay' },
    },
  ],
});

export default router;
