<template>

  <div class="MyPageWrap">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
    <header>
      <form class="form-compact" action="">
        <div class="row paddingBottom20">
          <div class="container col-4">
            <div class="row">
              <h6 class="text-center col-12 mb-0">My Page [유저 정보]</h6>

              <sub class="text-right text-muted col-12"
                ><a href="#" tabindex="-1"><i class="far fa-edit"></i></a
              ></sub>
            </div>
            <div class="dropdown-divider mb-3"></div>
            <div class="form-group row">
              <label for="firstName" class="col-4 col-form-label-sm text-right">아이디</label>
              <div class="col-8">
                <div class="input-group">
                  <div class="UserName">
                    {{ this.events.data.email }}
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label for="lastName" class="col-4 col-form-label-sm text-right">이름</label>
              <div class="col-8">
                <div class="input-group">
                  <div class="UserName">
                    {{ this.events.data.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label for="targetCompany" class="col-4 col-form-label-sm text-right">목표 기업</label>
              <div class="col-8">
                <div class="input-group" v-for="item in this.wantToGo" :key="item">
                  <div class="UserName">{{item}}</div>
                </div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label for="emailAddress" class="col-4 col-form-label-sm text-right">토익 점수</label>
              <div class="col-8">
                <div class="input-group">{{this.myToeicScore}}</div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label for="emailAddress" class="col-4 col-form-label-sm text-right">평균 학점</label>
              <div class="col-8">
                <div class="input-group">{{this.mySchoolScore}}</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </header>
    <v-dialog v-model="dialog" max-width="500">
        <v-card>
          <v-container>
            <v-form @submit.prevent="DialogEvent">
              <v-text-field v-model="wantToGo" type="text" label="가고 싶은 기업"></v-text-field>
              <v-text-field v-model="myToeicScore" type="text" label="토익 점수"></v-text-field>
              <v-text-field v-model="mySchoolScore" type="text" label="학점"></v-text-field>
              <v-text-field v-model="myHistory" type="text" label="한국사 자격증 보유 개수"></v-text-field>
              <v-text-field v-model="myComputer" type="text" label="컴퓨터활용능력 보유여부"></v-text-field>
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false"> Create Event </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
    <v-row class=" " style="background-color:grey">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"> 목표 역량 </a>
        </div>
        <button class="btn btn-success btn-md pull-right" @click="dialog=true" style="margin-top: 5px">정보갱신</button>
      </div>
    </v-row>
    <div class="container-fluid">
      <div class="col col-md-9">
        <div class="row">
          <div class="col col-md-5" style="background-color: #a9e6fc">
            <h4>목표 역량 대비 현재 나의 역량</h4>
            어학점수(TOEIC)<span class="pull-right strong">{{this.companyToeicScore}}</span>
            <div class="progress">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ToeicPercentage">
                {{Math.floor((parseInt(this.myToeicScore)/parseInt(this.companyToeicScore))*100) > 100 ? 100 : Math.floor((parseInt(this.myToeicScore)/parseInt(this.companyToeicScore))*100)}}%
              </div>
              <span class="pull-right strong">{{this.myToeicScore}}</span>
            </div>

            학점<span class="pull-right strong">{{this.companySchoolScore}}</span>
            <div class="progress">
              <div
                class="progress-bar progress-bar-warning"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
               :style="SchoolPercentage">
                {{Math.floor((parseInt(this.mySchoolScore)/parseInt(this.companySchoolScore))*100)}}%
              </div>
              <span class="pull-right strong">{{this.mySchoolScore }}</span>
            </div>

            한국사 자격증<span class="pull-right strong">보유</span>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="HistoryPercentage">
                취득 완료
              </div>
            </div>

            컴퓨터활용능력<span class="pull-right strong" style="font-weight: bold">보유</span>
            <div class="progress" style="text-align: right">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ComputerPercentage"
                style="color: #ff5a36; font-weight: bold; text-align: center">
                취득 필요
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/main';
import { mapState } from 'vuex';
function displayMessage() {
  alert('메시지 출력 테스트');
  const html = document.querySelector('html');

  const panel = document.createElement('div');
  panel.setAttribute('class', 'msgBox');
  html.appendChild(panel);

  const msg = document.createElement('p');
  msg.textContent = 'This is a message box';
  panel.appendChild(msg);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'x';
  panel.appendChild(closeBtn);

  closeBtn.onclick = function () {
    panel.parentNode.removeChild(panel);
  };
}
export default {
  name: 'mypage',
  
  data: () => ({
    events: [],
    wantToGo: "Nexon",
    myToeicScore: "710",
    mySchoolScore: "3.87",
    myHistory: "1",
    myComputer: "0",
    companyToeicScore: "850",
    companySchoolScore: "4.0",
    companyHistory: "1",
    companyComputer: "1",
    dialog:false,
  }),
  computed: {
    ...mapState(['userInfo']),
    ToeicScore(){
      return (Math.floor((parseInt(this.myToeicScore)/parseInt(this.companyToeicScore))*100).toString() + '%')
    },
    ToeicPercentage(){
      return {'width': this.ToeicScore}
    },
    SchoolScore(){
      return (Math.floor((parseInt(this.mySchoolScore)/parseInt(this.companySchoolScore))*100).toString() + '%')
    },
    SchoolPercentage(){
      return {'width': this.SchoolScore}
    },
    HistoryScore(){
      return (Math.floor((parseInt(this.myHistory)/parseInt(this.companyHistory))*100).toString() + '%')
    },
    HistoryPercentage(){
      return {'width': this.HistoryScore}
    },
    ComputerScore(){
      return (Math.floor((parseInt(this.myComputer)/parseInt(this.companyComputer))*100).toString() + '%')
    },
    ComputerPercentage(){
      return {'width': this.ComputerScore}
    },
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    // 여기가 이벤트를 이벤트로 받아주는곳
    async getEvents() {
      this.$axios.get('api/0').then(res => {
        this.events = res;
      });
    },
    // 데이터를 추가
    async addEvent() {
      if (this.id && this.password) {
        await db.collection('user').add({
          id: this.id,
          password: this.password,
        });
        this.getEvents();
        this.id = '';
      } else {
        alert('Name, Start and End date are required');
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
    // 데이터를 삭제
    async deleteEvent(ev) {
      await db.collection('calEvent').doc(ev).delete();

      this.selectedOpen = false;
      this.getEvents();
    },
    
  },
  DialogEvent(){
  }
};
</script>

<style>
.extendable:focus {
  position: absolute;
  width: 110%;
  top: -1rem;
}

.col {
}
</style>
