<template>
  <v-row class="fill-height">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn color="primary" class="mr-4" @click="StartNewEvent"> New Event </v-btn>
          <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday"> Today </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next" class="mr-4">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar"> {{ $refs.calendar.title }} </v-toolbar-title><v-btn @click="dialogOpicData = true"></v-btn>

          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on, attrs }">
              <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>

      <!--Add Event Dialog-->
      <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="addEvent" v-if="this.endEndDrag === ''">
              <v-text-field v-model="name" type="text" label="event name (required)"></v-text-field>
              <v-text-field v-model="details" type="text" label="detail"></v-text-field>
              <v-text-field v-model="start" type="datetime-local" label="start (required)"></v-text-field>
              <v-text-field v-model="end" type="datetime-local" label="end (required)"></v-text-field>
              <v-text-field v-model="color" type="color" label="color (click to open color menu)"></v-text-field>
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false"> Create Event </v-btn>
            </v-form>
            <v-form @submit.prevent="addEventDrag" v-else>
              <v-text-field v-model="name" type="text" label="event name (required)" value="type"></v-text-field>
              <v-text-field v-model="details" type="text" label="detail" value=""></v-text-field>
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false"> Create Event </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialogOpicData" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="EndDialogOpic">
               <v-select
            v-model="OpicSuccess"
            :items="this.OpicSuccessed"
            label="합격 여부를 고르시오"
            dense
            style="margin-right: 2%; width: 40%"></v-select>
            <v-select 
            v-if="this.OpicSuccess == '합격'"
            v-model="OpicType"
            :items="this.OpicTypes"
            label="취득한 자격증의 등급을 고르시오"
            dense
            style="margin-right: 2%; width: 40%"></v-select>
              <v-text-field v-if="this.OpicType != ''" v-model="OpicTakenTime" type="text" label="공부한 시간(일)을 작성하시오"></v-text-field>
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialogOpicData = false"> 저장하기 </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>

      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          :event-ripple="false"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @mousedown:time="startTime"
          @touchstart:time="startTime"
          @touchmove:time="mouseMove"
          @mousemove:time="mouseMove"
          @touchend:time="endDrag"
          @mouseup:time="endDrag"
          @mouseleave.native="cancelDrag">
          <template v-slot:event="{ event, timed, eventSummary }">
            <div class="v-event-draggable" v-html="eventSummary()"></div>
            <div v-if="timed" class="v-event-drag-bottom" @mousedown.stop="extendBottom(event)"></div>
          </template>
        </v-calendar>

        <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <form v-if="currentlyEditing !== selectedEvent.id">
                {{ selectedEvent.details }}
              </form>
              <form v-else>
                <textarea-autosize
                  v-model="selectedEvent.details"
                  type="text"
                  style="width: 100%"
                  :min-height="100"
                  placeholder="add note">
                </textarea-autosize>
              </form>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false"> Close </v-btn>
              <v-btn text v-if="currentlyEditing !== selectedEvent.id" @click.prevent="editEvent(selectedEvent)">
                Edit
              </v-btn>
              <v-btn text v-else @click.prevent="updateEvent(selectedEvent)"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { db } from '@/main';

export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    name: null,
    details: null,
    start: null,
    end: null,
    color: '#1936D2',
    colors: ['#2196F3', '#3F51B5', '#673AB7', '#00BCD4', '#4CAF50', '#FF9800', '#757575'],
    names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false,
    dialogOpicData: false,
    value: '',
    ready: false,
    startEndDrag: '',
    endEndDrag: '',

    dragEvent: null,
    dragStart: null,
    createEvent: null,
    createStart: null,
    extendOriginal: null,
    OpicSuccess: '',
    OpicSuccessed: ['합격', '불합격'],
    OpicType: '',
    OpicTypes: ['AL','IH','IM3','IM2','IM1','IL','NH','NM','NL'],
    OpicTakenTime: '',

  }),
  computed: {
    // 달력 제목 (주 단위 경우 5~6월 사이면 표시하기)
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return '';
      }
      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? '' : endMonth;

      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? '' : endYear;

      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);

      switch (this.type) {
        case 'month':
          return `${startMonth} ${startYear}`;
        case 'week':
        case '4day':
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case 'day':
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return '';
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC',
        month: 'long',
      });
    },
  },

  mounted() {
    this.getEvents();
    this.$axios.get('/api/0').then(res => {});
  },
  methods: {
    // 여기가 이벤트를 이벤트로 받아주는곳
    async getEvents() {
      // db에 저장된 걸 가져와서
      let snapshot = await db.collection('calEvent').get();
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
    // 데이터를 추가
    async addEvent() {
      if (this.name && this.start && this.end) {
        await db.collection('calEvent').add({
          name: this.name,
          details: this.details,
          start: this.start,
          end: this.end,
          color: this.color,
        });
        this.getEvents();
        this.name = '';
        this.details = '';
        this.endEndDrag = '';
        this.startEndDrag = '';
        this.start = '';
        this.end = '';
        this.color = '#1936D2';
      } else {
        alert('Name, Start and End date are required');
      }
    },

    async addEventDrag() {
      if (this.name) {
        await db.collection('calEvent').add({
          name: this.name,
          details: this.details,
          start: this.startEndDrag,
          end: this.endEndDrag,
          color: this.color,
        });
        this.getEvents();
        this.name = '';
        this.details = '';
        this.endEndDrag = '';
        this.startEndDrag = '';
        this.start = '';
        this.end = '';
        this.color = '#1936D2';
      } else {
        alert('Name is required');
      }
    },

    // 데이터를 firebase에 업데이트
    async updateEvent(ev) {
      await db.collection('calEvent').doc(this.currentlyEditing).update({
        details: ev.details,
      });
      this.selectedOpen = false;
      this.currentlyEditing = null;
    },
    // 데ㅐ이터를 삭제
    async deleteEvent(ev) {
      if (ev.details == "오픽Opic 합격자 발표일"){
      await db.collection('calEvent').doc(ev).delete();

      this.selectedOpen = false;
      this.getEvents();
      this.dialogOpicData = true;
      }
      else{
        await db.collection('calEvent').doc(ev).delete();

      this.selectedOpen = false;
      this.getEvents();
      }
    },
    getEventColor(ev) {
      return ev.color;
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = 'day';
    },
    setToday() {
      this.focus = '';
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    // 수정
    editEvent(ev) {
      this.currentlyEditing = ev.id;
    },

    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() => requestAnimationFrame(() => (this.selectedOpen = true)));
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    rndElement(arr) {
      return arr[this.rnd(0, arr.length - 1)];
    },
    startDrag({ event, timed }) {
      if (event && timed) {
        this.dragEvent = event;
        this.dragTime = null;
        this.extendOriginal = null;
      }
    },
    startTime(tms) {
      const mouse = this.toTime(tms);
      this.startEndDrag = tms.date + 'T' + tms.time;
      if (this.dragEvent && this.dragTime === null) {
        const start = this.dragEvent.start;

        this.dragTime = mouse - start;
      } else {
        this.createStart = this.roundTime(mouse);
        this.createEvent = {
          name: `Event #${this.events.length}`,
          color: this.rndElement(this.colors),
          start: this.createStart,
          end: this.createStart,
          timed: true,
        };
        this.isDown = true;

        this.events.push(this.createEvent);
      }
    },
    extendBottom(event) {
      this.createEvent = event;
      this.createStart = event.start;
      this.extendOriginal = event.end;
    },
    mouseMove(tms) {
      const mouse = this.toTime(tms);
      if (this.dragEvent && this.dragTime !== null) {
        const start = this.dragEvent.start;
        const end = this.dragEvent.end;
        const duration = end - start;
        const newStartTime = mouse - this.dragTime;
        const newStart = this.roundTime(newStartTime);
        const newEnd = newStart + duration;

        this.dragEvent.start = newStart;
        this.dragEvent.end = newEnd;
      } else if (this.createEvent && this.createStart !== null) {
        const mouseRounded = this.roundTime(mouse, false);
        const min = Math.min(mouseRounded, this.createStart);
        const max = Math.max(mouseRounded, this.createStart);

        this.createEvent.start = min;
        this.createEvent.end = max;
      }
    },
    endDrag(tms) {
      if (this.isDown == true) {
        this.isDown = false;
        this.dialog = true;
        this.endEndDrag = tms.date + 'T' + tms.time;
        this.color = this.createEvent.color;
      }
      this.events.pop();
      this.dragTime = null;
      this.dragEvent = null;
      this.createEvent = null;
      this.createStart = null;
      this.extendOriginal = null;
    },
    cancelDrag() {
      if (this.createEvent) {
        if (this.extendOriginal) {
          this.createEvent.end = this.extendOriginal;
        } else {
          const i = this.events.indexOf(this.createEvent);
          if (i !== -1) {
            this.events.splice(i, 1);
          }
        }
      }

      this.createEvent = null;
      this.createStart = null;
      this.dragTime = null;
      this.dragEvent = null;
    },
    roundTime(time, down = true) {
      const roundTo = 5; // minutes
      const roundDownTime = roundTo * 60 * 1000;

      return down ? time - (time % roundDownTime) : time + (roundDownTime - (time % roundDownTime));
    },
    toTime(tms) {
      return new Date(tms.year, tms.month - 1, tms.day, tms.hour, tms.minute).getTime();
    },
    StartNewEvent() {
      this.dialog = true;
      this.endEndDrag = '';
    },
    EndDialogOpic(){
      this.dialogOpicData = false;
      this.OpicSuccess = '';
      this.OpicType = '';
      this.OpicTakenTime = '';
    },
    
  },
};
</script>

<style lang="scss">
.v-event-draggable {
  padding-left: 6px;
}

.v-event-timed {
  user-select: none;
  -webkit-user-select: none;
}

.v-event-drag-bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 4px;
  cursor: ns-resize;

  &::after {
    display: none;
    position: absolute;
    left: 50%;
    height: 4px;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    width: 16px;
    margin-left: -8px;
    opacity: 0.8;
    content: '';
  }

  &:hover::after {
    display: block;
  }
}
</style>
