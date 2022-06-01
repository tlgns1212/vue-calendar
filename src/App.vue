<template>
  <v-app>
    <v-main>
      <div>
        <main-header></main-header>
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    'main-header': MainHeader,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
