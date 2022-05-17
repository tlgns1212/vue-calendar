<template>
  <v-app>
    <v-main>
      <div id="app">
        <h1>회사 리스트</h1>
        <ul>
        <li>{{this.events}}</li>
          <li v-for="item in this.events.data.jobs">
            {{ item.job }}
          </li>
        </ul>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { db } from "@/main";

export default {
  data: () => ({
    events: [],
  }),
  mounted() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      this.$axios
        .get(
          "api/announcements?keywords=개발&job_type=1&edu_lv=0&loc_cd=101010&job_mid_cd=2"
        )
        .then((res) => {
          this.events = res;
        });
    },
  },
};
</script>
