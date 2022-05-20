import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/Home',
    },
    {
      path: '/Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/PublicAnnounce',
      component: () => import('@/views/HomeExample.vue'),
    },
    {
      path: '/Announce',
      component: () => import('@/views/Announce.vue'),
    },
    {
      path: '/MyPage',
      component: () => import('@/views/MyPage.vue'),
    },
    {
      path: '/Login',
      component: () => import('@/views/PublicAnnounce.vue'),
    },
  ],
  mode: 'history',
});
