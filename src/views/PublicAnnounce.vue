<template>
  <div>
    <v-btn color="primary" class="mr-4" @click="dialog = 'true'"> New Event </v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="addEvent">
            <v-text-field v-model="PSid" type="text" label="name"></v-text-field>
            <v-text-field v-model="PSDetail" type="text" label="detail"></v-text-field>
            <v-text-field v-model="PSSTime" type="datetime-local" label="start (required)"></v-text-field>
            <v-text-field v-model="PSETime" type="datetime-local" label="end (required)"></v-text-field>
            <v-text-field v-model="color" type="color" label="color (click to open color menu)"></v-text-field>
            <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false"> Create Event </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <p>{{ this.events.data }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    events: [],
    id: '',
    date: '',
    PSid: '',
    PSSTime: '',
    PSETime: '',
    PSOb: false,
    PSDetail: '',
    color: '#1936D2',
  }),
  mounted() {
    this.getEvents();
  },
  methods: {
    // async getEvents() {
    //   this.$axios.get('api/0/user-targets').then(res => {
    //     this.events = res;
    //   });
    // },
    async getEvents() {
      this.$axios.get('api/0/user-schedules').then(res => {
        this.events = res.data;
      });
    },
    async addEvent() {
        this.$axios.post('pi/0/user-schedules',{
          personalSchedules: {          observation: true,
          // date: PSSTime.substr(0,10),
          // detail: PSDetail,
          // s_time: PSSTime,
          // e_time: PSETime,
          date: "2022-05-18",
          detail: "Meet Sihoon at his house",
          s_time: "10:50",
          e_time: "22:30",}
        }

          ).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        });
        this.getEvents();
        this.id = '';
        this.PSid = '';
        this.PSDetail = '';
        this.PSSTime = '';
        this.PSETime = '';
        this.color = '#1936D2';
    },
  },
};
</script>
