<template>
    <div>
        {{this.events}}
    </div>
</template>
          
<script>
export default {
  data: () => ({
      events:[],
  }),
  mounted(){
      this.getEvents();
  },
  methods:{
      async getEvents(){
          this.$axios.get('api/announcements?keywords=개발&job_type=1&loc_cd=101010&count=50').then(res => {
        this.events = res;
      });
      }
  }
}
</script>