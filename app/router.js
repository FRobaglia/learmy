import Vue from 'vue';
import Router from 'vue-router';

import PictureOfTheDay from './components/Pages/PictureOfTheDay.vue';
import Exoplanets from './components/Pages/Exoplanets.vue';

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
      path: '/exoplanets',
      name: 'Exoplanets',
      component: Exoplanets,
    },
    {
      path: '*',
      redirect: { name: 'PictureOfTheDay' },
    },
  ],
});

export default router;
