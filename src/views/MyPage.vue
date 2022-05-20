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
                  <div class="UserName" v-for="item in this.events" :key="item.email">
                    {{ item.email }}
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label for="lastName" class="col-4 col-form-label-sm text-right">이름</label>
              <div class="col-8">
                <div class="input-group">
                  <div class="UserName" v-for="item in this.events" :key="item.email">
                    {{ item.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label for="targetCompany" class="col-4 col-form-label-sm text-right">목표 기업</label>
              <div class="col-8">
                <div class="input-group" >
                  <div class="UserName">
                    {{this.events[0].wantToGo}}</div>
                </div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label for="emailAddress" class="col-4 col-form-label-sm text-right">토익 점수</label>
              <div class="col-8">
                <div class="input-group">
                  {{this.events[0].myToeicScore}}</div>
              </div>
            </div>
            <div class="form-group row align-items-center">
              <label for="emailAddress" class="col-4 col-form-label-sm text-right">평균 학점</label>
              <div class="col-8">
                <div class="input-group">
                  {{this.events[0].mySchoolScore}}</div>
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
              <v-text-field v-model="myCertification" type="text" label="한국사 자격증 보유 개수"></v-text-field>
              <v-text-field v-model="myForeign" type="text" label="컴퓨터활용능력 보유여부"></v-text-field>
              <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false" 
              > Create Event </v-btn>
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
          <div class="col" style="background-color: #a9e6fc">
            <h4>목표 역량 대비 현재 나의 역량</h4>
            어학점수(TOEIC)<span class="pull-right strong">{{this.events[0].companyToeicScore}}</span>
            <div class="progress">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ToeicPercentage">
                {{Math.floor((parseFloat(this.events[0].myToeicScore)/parseFloat(this.events[0].companyToeicScore))*100) > 100 ? 100 : Math.floor((parseFloat(this.events[0].myToeicScore)/parseFloat(this.events[0].companyToeicScore))*100)}}%
              </div>
              <span class="pull-right strong">{{this.events[0].myToeicScore}}</span>
            </div>

            학점<span class="pull-right strong">{{this.events[0].companySchoolScore}}</span>
            <div class="progress">
              <div
                class="progress-bar progress-bar-warning"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
               :style="SchoolPercentage">
                {{Math.floor((parseFloat(this.events[0].mySchoolScore)/parseFloat(this.events[0].companySchoolScore))*100)}}%
              </div>
              <span class="pull-right strong">{{this.events[0].mySchoolScore }}</span>
            </div>

            자격증 개수<span class="pull-right strong">{{this.events[0].companyCertification}}</span>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="CertificationPercentage">
                {{Math.floor((parseFloat(this.events[0].myCertification)/parseFloat(this.events[0].companyCertification))*100)}}%
              </div>
            </div>

            외국어(기타)<span class="pull-right strong" style="font-weight: bold">{{this.events[0].companyForeign}}</span>
            <div class="progress" style="text-align: right">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ForeignPercentage"
                >
                {{Math.floor((parseFloat(this.events[0].myForeign)/parseFloat(this.events[0].companyForeign))*100)}}%
              </div>
              </div>

            토익 스피킹<span class="pull-right strong" style="font-weight: bold">{{this.events[0].companyToeicSpeakingScore}}</span>
            <div class="progress" style="text-align: right">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ToeicSpeakingScorePercentage"
                >
                {{Math.floor((parseFloat(this.events[0].myToeicSpeakingScore)/parseFloat(this.events[0].companyToeicSpeakingScore))*100)}}%
              </div>
            </div>
            오픽<span class="pull-right strong" style="font-weight: bold">{{this.events[0].companyOpicScore}}</span>
            <div class="progress" style="text-align: right">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="OpicScorePercentage"
                >
                {{Math.floor((parseFloat(this.events[0].myOpicScore)/parseFloat(this.events[0].companyOpicScore))*100)}}%
              </div>
            </div>
            해외 경험<span class="pull-right strong" style="font-weight: bold">{{this.events[0].companyTravel}}</span>
            <div class="progress" style="text-align: right">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="TravelPercentage"
                >
                {{Math.floor((parseFloat(this.events[0].myTravel)/parseFloat(this.events[0].companyTravel))*100)}}%
              </div>
            </div>
            인턴 경험<span class="pull-right strong" style="font-weight: bold">{{this.events[0].companyIntern}}</span>
            <div class="progress" style="text-align: right">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="InternPercentage"
                >
                {{Math.floor((parseFloat(this.events[0].myIntern)/parseFloat(this.events[0].companyIntern))*100)}}%
              </div>
            </div>
            수상내역<span class="pull-right strong" style="font-weight: bold">{{this.events[0].companyContest}}</span>
            <div class="progress" style="text-align: right">
              <div
                class="progress-bar progress-bar-danger"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ContestPercentage"
                >
                {{Math.floor((parseFloat(this.events[0].myContest)/parseFloat(this.events[0].companyContest))*100)}}%
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
    wantToGo: "",
    myToeicScore: "",
    myToeicSpeakingScore: "",
    myOpicScore:"",
    mySchoolScore: "",
    myCertification: "",
    myForeign: "",
    myTravel: "",
    myIntern:"",
    myContest:"",
    myVolunteer:"",
    myAge:"",
    mySex:"",
    myEnglishTest:"",
    myStudyTime:"",
    companyToeicScore: "",
    companyToeicSpeakingScore: "",
    companyOpicScore:"",
    companySchoolScore: "",
    companyCertification: "",
    companyForeign: "",
    companyTravel: "",
    companyIntern:"",
    companyContest:"",
    companyVolunteer:"",
    dialog:false,
    currentlyEditing: null,
    selectedEvent:{},
  }),
  computed: {
    ...mapState(['userInfo']),
    ToeicScore(){
      return (Math.floor((parseFloat(this.events[0].myToeicScore)/parseFloat(this.events[0].companyToeicScore))*100).toString() + '%')
    },
    ToeicPercentage(){
      return {'width': this.ToeicScore}
    },
    SchoolScore(){
      return (Math.floor((parseFloat(this.events[0].mySchoolScore)/parseFloat(this.events[0].companySchoolScore))*100).toString() + '%')
    },
    SchoolPercentage(){
      return {'width': this.SchoolScore}
    },
    CertificationScore(){
      return (Math.floor((parseFloat(this.events[0].myCertification)/parseFloat(this.events[0].companyCertification))*100).toString() + '%')
    },
    CertificationPercentage(){
      return {'width': this.CertificationScore}
    },
    ForeignScore(){
      return (Math.floor((parseFloat(this.events[0].myForeign)/parseFloat(this.events[0].companyForeign))*100).toString() + '%')
    },
    ForeignPercentage(){
      return {'width': this.ForeignScore}
    },
    ToeicSpeakingScoreScore(){
      return (Math.floor((parseFloat(this.events[0].myToeicSpeakingScore)/parseFloat(this.events[0].companyToeicSpeakingScore))*100).toString() + '%')
    },
    ToeicSpeakingScorePercentage(){
      return {'width': this.ToeicSpeakingScoreScore}
    },
    OpicScoreScore(){
      return (Math.floor((parseFloat(this.events[0].myOpicScore)/parseFloat(this.events[0].companyOpicScore))*100).toString() + '%')
    },
    OpicScorePercentage(){
      return {'width': this.OpicScoreScore}
    },
    TravelScore(){
      return (Math.floor((parseFloat(this.events[0].myTravel)/parseFloat(this.events[0].companyTravel))*100).toString() + '%')
    },
    TravelPercentage(){
      return {'width': this.TravelScore}
    },
    InternScore(){
      return (Math.floor((parseFloat(this.events[0].myIntern)/parseFloat(this.events[0].companyIntern))*100).toString() + '%')
    },
    InternPercentage(){
      return {'width': this.InternScore}
    },
    ContestScore(){
      return (Math.floor((parseFloat(this.events[0].myContest)/parseFloat(this.events[0].companyContest))*100).toString() + '%')
    },
    ContestPercentage(){
      return {'width': this.ContestScore}
    },
    VolunteerScore(){
      return (Math.floor((parseFloat(this.events[0].myVolunteer)/parseFloat(this.events[0].companyVolunteer))*100).toString() + '%')
    },
    VolunteerPercentage(){
      return {'width': this.VolunteerScore}
    },
  },
  mounted() {
    this.getEvents();
    // this.InitalData();
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
      this.wantToGo= events[0].wantToGo;
    this.myToeicScore= events[0].myToeicScore;
    this.mySchoolScore= events[0].mySchoolScore;
    this.myCertification= events[0].myCertification;
    this.myForeign= events[0].myForeign;
    },
    InitalData(){
      console.log("\n\n\n\n\n\n\n\\n\n\n\n");
     console.log(this.events.wantToGo);
    this.wantToGo= this.events[0].wantToGo;
    
    this.myToeicScore= this.events[0].myToeicScore;
    console.log(this.myToeicScore);
    this.mySchoolScore= this.events[0].mySchoolScore;
    this.myCertification= this.events[0].myCertification;
    this.myForeign= this.events[0].myForeign;
    this.companyToeicScore= this.events[0].companyToeicScore;
    this.companySchoolScore= this.events[0].companySchoolScore;
    this.companyCertification= this.events[0].companyCertification;
    this.companyForeign= this.events[0].companyForeign;
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
      
      await db.collection('user').doc("KF1tl1R42f9NurZ7bl9c").update({
        myToeicScore: this.myToeicScore,
        mySchoolScore: this.mySchoolScore,
        myCertification: this.myCertification,
        myForeign: this.myForeign,
      });
      this.getEvents();
    },
    // 데이터를 삭제
    async deleteEvent(ev) {
      await db.collection('calEvent').doc(ev).delete();

      this.selectedOpen = false;
      this.getEvents();
    },
    async DialogEvent() {
  
    
      await db.collection('user').doc("KF1tl1R42f9NurZ7bl9c").update({
        myToeicScore: this.myToeicScore,
        mySchoolScore: this.mySchoolScore,
        myCertification: this.myCertification,
        myForeign: this.myForeign,
        
      });
      this.getEvents();
      this.dialog=false;
    },
  },

    
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
