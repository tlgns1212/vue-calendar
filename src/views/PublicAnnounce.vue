<template>
  <div>
    <v-btn color="primary" class="mr-4" @click="dialog = 'true'"> New Event </v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="updateEvent">
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
    <p>{{ this.events[0]}}</p>
  </div>
</template>

<script>
import { db } from '@/main';


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
    // 여기가 이벤트를 이벤트로 받아주는곳
   async getEvents() {
      // db에 저장된 걸 가져와서
      let snapshot = await db.collection('user').get();
      let events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      // 이벤트를 위에 있는 data()의 events에 넣어준다.
      this.events = events;
    },
    async addEvent() {
        this.$axios.post('api/0/user-schedules',{
          observation: true,
          date: "2022-05-19",
          detail: "Meet Sihoon at his house",
          s_time: "10:50",
          e_time: "22:30",
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
    async deleteEvent(ev) {
      this.$axios.delete('api/0/user-schedules/0',{
        [target-date]:"2020-03-01"
      }).then(res => {console.log(res)});

      this.selectedOpen = false;
      this.getEvents();
    },
    async updateEvent(ev) {
      await db.collection('user').doc("KF1tl1R42f9NurZ7bl9c").update({
        myToeicScore: "300",
      });
      this.getEvents();
    },
    
  },
};
</script>
