<template>
  <v-app>
    <v-main>
      <div id="app">
        <v-btn @click="dialogOpic = true">오픽 리스트</v-btn>
      </div>
      <div id="app">
        <v-btn @click="dialogToeic = true">토익 리스트</v-btn>
      </div>
      <div id="app">
        <v-btn @click="dialogEtc1 = true">Etc1 리스트</v-btn>
      </div>
      <div id="app">
        <v-btn @click="dialogEtc2 = true">Etc2 리스트</v-btn>
      </div>
      <div id="app">
        <v-btn @click="dialogEtc3 = true">Etc3 리스트</v-btn>
      </div>
      <div id="app">
        <v-btn @click="dialogEtc4 = true">Etc4 리스트</v-btn>
      </div>
      <div>
        <p>{{this.events.data.announcementSchedules}}</p>
        </div>

    </v-main>
    <v-dialog v-model="dialogOpic" max-width="500" @click="whatKind='opic'">
        <v-card >
          <v-container >
            <v-form >
            <div id="app" v-for="item in this.eventsOpic" :key="item.ID" @submit.prevent="addEvent" >
              <v-btn
              type="submit"
                color="primary"
                class="mr-4"
                @click.stop="this.dialogOpic = false"
                dateToAdd=item.date
              >
                {{item.date}} 
              </v-btn>

              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogToeic" max-width="500" @click="whatKind='toeic'">
        <v-card >
          <v-container >
            <v-form >
            <div id="app" v-for="item in this.eventsToeic" :key="item.ID" @submit.prevent="addEvent" >
              <v-btn
              type="submit"
                color="primary"
                class="mr-4"
                @click.stop="dialogToeic = false"
                value=item.date
              >
                {{item.date}}
              </v-btn>
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogEtc1" max-width="500" @click="whatKind='test'">
        <v-card >
          <v-container >
            <v-form >
            <div id="app" v-for="item in this.events.data" :key="item.id" @submit.prevent="addEvent" >
              <v-btn
              type="submit"
                color="primary"
                class="mr-4"
                @click.stop="dialogToeic = false"
                value=item.date
              >
                {{item}}
              </v-btn>
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
  </v-app>
  
</template>



<script>
import { db } from "@/main";

export default {
  data: () => ({
    events: [],
    eventsServer: [],
    eventsOpic:[],
        eventsToeic:[],
    dialogOpic : false,
    dialogToeic : false,
    dialogEtc1 : false,
    dialogEtc2 : false,
    dialogEtc3 : false,
    dialogEtc4 : false,
    whatKind:"",
    dateToAdd: "",
  }),
  mounted() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      this.$axios
        .get(
          "api/0"
        )
        .then((res) => {
          this.events = res;
        });
        // 오픽
        let snapshot = await db.collection("opic").get();
        let events = [];
        snapshot.forEach((doc)=>{
            let appData = doc.data();
            appData.id = doc.id;
            events.push(appData);
        });
        events.sort(function(a,b){
            return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
        });
        this.eventsOpic = events;
        // 토익
        snapshot = await db.collection("toeic").get();
        events = [];
        snapshot.forEach((doc)=>{
            let appData = doc.data();
            appData.id = doc.id;
            events.push(appData);
        });
        events.sort(function(a,b){
            return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
        });
        
        this.eventsToeic = events;
    },
async addEvent() {
        await db.collection('calEvent').add({
          name: this.whatKind,
          details: '',
          start: this.dateToAdd,
          end: this.dateToAdd,
          color: "#1936D2"
        });
        this.getEvents();
        this.name = "";
        this.details = "";
        this.start = "";
        this.end = "";
        this.color = "#1936D2";
    },

  },
  
};
</script>

