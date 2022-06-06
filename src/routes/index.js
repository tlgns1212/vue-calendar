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
      path: '/Public',
      component: () => import('@/views/PublicAnnounce.vue'),
    },
    {
      path: '/Announce',
      component: () => import('@/views/Announce/SearchAnnounce.vue'),
    },
    {
      path: '/MyPage',
      component: () => import('@/views/MyPage.vue'),
    },
    {
      path: '/Login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/SearchAnnounce',
      component: () => import('@/views/Announce/SearchAnnounce.vue'),
    },
    {
      path: '/CustomAnnounce',
      component: () => import('@/views/Announce/CustomAnnounce.vue'),
    },
  ],
  mode: 'history',
});
