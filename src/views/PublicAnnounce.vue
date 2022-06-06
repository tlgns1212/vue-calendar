<template>
  <div class="StoreWrap">
    <header>
      <div class="store">
        <div class="container col-10" style="width: 100%">
          <div class="row1">
            <h6 class="text-center col-12 mb-0">마일리지 상점</h6>
          </div>
        </div>
      </div>
    </header>
    <div class="products">
      <a href="#" @click="dialogOne = true">
        <img src="@/assets/s1.png" />
        <p>스타벅스 아이스 아메리카노</p>
        <p class="price">4,000</p>
      </a>
      <a href="#" @click="dialogTwo = true">
        <img src="@/assets/s2.png" />
        <p>스타벅스 카페라떼</p>
        <p class="price">4,500</p>
      </a>
      <a href="#" @click="dialogThree = true">
        <img src="@/assets/s3.png" />
        <p>스타벅스 콜드블루</p>
        <p class="price">4,500</p>
      </a>
      <a href="#" @click="dialogFour = true">
        <img src="@/assets/s4.png" />
        <p>스타벅스 플라스틱 텀블러</p>
        <p class="price">14,000</p>
      </a>
      <a href="#" @click="dialogFive = true">
        <img src="@/assets/s5.png" />
        <p>스타벅스 텀블러</p>
        <p class="price">16,000</p>
      </a>
      <a href="#" @click="dialogSix = true">
        <img src="@/assets/s6.png" />
        <p>스타벅스 텀블러 선물세트</p>
        <p class="price">30,000</p>
      </a>

      <div class="clearfix"></div>
    </div>
    <v-dialog v-model="dialogLess" max-width="500">
      <v-card class="pop-up">
        <v-container>
          <v-form @submit.prevent="dialogLess = false">
            <div class="management">
              <p>마일리지 포인트가 부족해서 구매를 할 수 없습니다!</p>
              <p>마일리지를 더 쌓고 교환을 하세요!!!</p>
            </div>
            <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialogLess = false"> 확인 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogBought" max-width="500">
      <v-card class="pop-up">
        <v-container>
          <v-form @submit.prevent="dialogBought = false">
            <div class="management">
              <p>구매 완료되었습니다. 문자로 쿠폰을 발송해드리도록 하겠습니다!</p>
              <p>상품을 즐기시면서 취업 준비 열심히 하세요~</p>
            </div>
            <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialogBought = false"> 확인 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogOne" max-width="500">
      <v-card class="pop-up">
        <v-container>
          <v-form @submit.prevent="dialogOne = false">
            <div class="management">
              <p>스타벅스 아이스 아메리카노를 4,000 마일리지로 구매하시겠습니까?</p>
            </div>
            <v-btn type="submit" color="primary" class="mr-4" @click="BuyAA" @click.stop="dialogOne = false">
              구매
            </v-btn>
            <v-btn type="submit" color="red" class="mr-4" @click.stop="dialogOne = false"> 취소 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogTwo" max-width="500">
      <v-card class="pop-up">
        <v-container>
          <v-form @submit.prevent="dialogTwo = false">
            <div class="management">
              <p>스타벅스 카페라테를 4,500 마일리지로 구매하시겠습니까?</p>
            </div>
            <v-btn type="submit" color="primary" class="mr-4" @click="BuyAA" @click.stop="dialogTwo = false">
              구매
            </v-btn>
            <v-btn type="submit" color="red" class="mr-4" @click.stop="dialogTwo = false"> 취소 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogThree" max-width="500">
      <v-card class="pop-up">
        <v-container>
          <v-form @submit.prevent="dialogThree = false">
            <div class="management">
              <p>스타벅스 콜드브루를 4,500 마일리지로 구매하시겠습니까?</p>
            </div>
            <v-btn type="submit" color="primary" class="mr-4" @click="BuyAA" @click.stop="dialogThree = false">
              구매
            </v-btn>
            <v-btn type="submit" color="red" class="mr-4" @click.stop="dialogThree = false"> 취소 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogFour" max-width="500">
      <v-card class="pop-up">
        <v-container>
          <v-form @submit.prevent="dialogFour = false">
            <div class="management">
              <p>스타벅스 플라스틱 텀블러를 14,000 마일리지로 구매하시겠습니까?</p>
            </div>
            <v-btn type="submit" color="primary" class="mr-4" @click="BuyAA" @click.stop="dialogFour = false">
              구매
            </v-btn>
            <v-btn type="submit" color="red" class="mr-4" @click.stop="dialogFour = false"> 취소 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogFive" max-width="500">
      <v-card class="pop-up">
        <v-container>
          <v-form @submit.prevent="dialogFive = false">
            <div class="management">
              <p>스타벅스 텀블러를 16,000 마일리지로 구매하시겠습니까?</p>
            </div>
            <v-btn type="submit" color="primary" class="mr-4" @click="BuyAA" @click.stop="dialogFive = false">
              구매
            </v-btn>
            <v-btn type="submit" color="red" class="mr-4" @click.stop="dialogFive = false"> 취소 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogSix" max-width="500">
      <v-card class="pop-up">
        <v-container>
          <v-form @submit.prevent="dialogSix = false">
            <div class="management">
              <p>스타벅스 텀블러 선물세트를 30,000 마일리지로 구매하시겠습니까?</p>
            </div>
            <v-btn type="submit" color="primary" class="mr-4" @click="BuyAA" @click.stop="dialogSix = false">
              구매
            </v-btn>
            <v-btn type="submit" color="red" class="mr-4" @click.stop="dialogSix = false"> 취소 </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { db } from '@/main';
import { mapState } from 'vuex';
import LoadingButton from './LoadingButton';

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
  components: {
    LoadingButton,
  },
  name: 'mypage',

  data: () => ({
    events: [],
    eventsCompany: [],
    eventsToeic: [],
    eventsToeicSpeaking: [],
    eventsOpic: [],
    eventsTexts: [],
    eventsPoint: [],
    eventNameCompany: 'KF1tl1R42f9NurZ7bl9c',
    wantToGo: '',
    myToeicScore: '',
    myToeicSpeakingScore: '',
    myOpicScore: '',
    mySchoolScore: '',
    myCertification: '',
    myForeign: '',
    myTravel: '',
    myIntern: '',
    myContest: '',
    myAge: '',
    mySex: '',
    myEnglishTest: '',
    myStudyTime: '',
    companyToeicScore: '',
    companyToeicSpeakingScore: '',
    companyOpicScore: '',
    companySchoolScore: '',
    companyCertification: '',
    companyForeign: '',
    companyTravel: '',
    companyIntern: '',
    companyContest: '',
    isLoading: false,
    dialog: false,
    dialogLess: false,
    dialogBought: false,
    dialogOne: false,
    dialogTwo: false,
    dialogThree: false,
    dialogFour: false,
    dialogFive: false,
    dialogSix: false,
    dialogOpic: false,
    dialogTravel: false,
    dialogIntern: false,
    dialogContest: false,
    dialogCal: false,
    currentlyEditing: null,
    selectedEvent: {},
    loading: false,
    randomNumber: 2,
    tempStudyTime: '',
    OpicState: { NL: 1, NM: 2, NH: 3, IL: 4, IM1: 5, IM2: 6, IM3: 7, AL: 8 },
    moneyPoint: 0,
  }),
  computed: {
    ...mapState(['userInfo']),
    ToeicScore() {
      return Math.floor(
        (parseFloat(this.events[0].myToeicScore) / parseFloat(this.eventsCompany.companyToeicScore)) * 100
      ).toString();
    },
    ToeicPercentage() {
      return { width: this.ToeicScore + '%' };
    },
    ToeicProgressBar() {
      let temp = this.ToeicScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
    SchoolScore() {
      return Math.floor(
        (parseFloat(this.events[0].mySchoolScore) / parseFloat(this.eventsCompany.companySchoolScore)) * 100
      ).toString();
    },
    SchoolPercentage() {
      return { width: this.SchoolScore + '%' };
    },
    SchoolProgressBar() {
      let temp = this.SchoolScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
    CertificationScore() {
      return Math.floor(
        (parseFloat(this.events[0].myCertification) / parseFloat(this.eventsCompany.companyCertification)) * 100
      ).toString();
    },
    CertificationPercentage() {
      return { width: this.CertificationScore + '%' };
    },
    CertificationProgressBar() {
      let temp = this.CertificationScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
    ForeignScore() {
      return Math.floor(
        (parseFloat(this.events[0].myForeign) / parseFloat(this.eventsCompany.companyForeign)) * 100
      ).toString();
    },
    ForeignPercentage() {
      return { width: this.ForeignScore + '%' };
    },
    ForeignProgressBar() {
      let temp = this.ForeignScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
    ToeicSpeakingScoreScore() {
      return Math.floor(
        (parseFloat(this.events[0].myToeicSpeakingScore) / parseFloat(this.eventsCompany.companyToeicSpeakingScore)) *
          100
      ).toString();
    },
    ToeicSpeakingScorePercentage() {
      return { width: this.ToeicSpeakingScoreScore + '%' };
    },
    ToeicSpeakingScoreProgressBar() {
      let temp = this.ToeicSpeakingScoreScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
    OpicScoreScore() {
      return Math.floor(
        (parseFloat(this.OpicState[this.events[0].myOpicScore]) /
          parseFloat(this.OpicState[this.eventsCompany.companyOpicScore])) *
          100
      ).toString();
    },
    OpicScorePercentage() {
      return { width: this.OpicScoreScore + '%' };
    },
    OpicScoreProgressBar() {
      let temp = this.OpicScoreScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
    TravelScore() {
      return Math.floor(
        (parseFloat(this.events[0].myTravel) / parseFloat(this.eventsCompany.companyTravel)) * 100
      ).toString();
    },
    TravelPercentage() {
      return { width: this.TravelScore + '%' };
    },
    TravelProgressBar() {
      let temp = this.TravelScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
    InternScore() {
      return Math.floor(
        (parseFloat(this.events[0].myIntern) / parseFloat(this.eventsCompany.companyIntern)) * 100
      ).toString();
    },
    InternPercentage() {
      return { width: this.InternScore + '%' };
    },
    InternProgressBar() {
      let temp = this.InternScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
    ContestScore() {
      return Math.floor(
        (parseFloat(this.events[0].myContest) / parseFloat(this.eventsCompany.companyContest)) * 100
      ).toString();
    },
    ContestPercentage() {
      return { width: this.ContestScore + '%' };
    },
    ContestProgressBar() {
      let temp = this.ContestScore;
      if (parseInt(temp) < 40) {
        return 'progress-bar progress-bar-danger';
      } else if (parseInt(temp) < 90) {
        return 'progress-bar progress-bar-warning';
      } else {
        return 'progress-bar progress-bar-success';
      }
    },
  },
  mounted() {
    this.getEvents();
    this.getCheckEvents();
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

      this.wantToGo = events[0].wantToGo;
      this.myToeicScore = events[0].myToeicScore;
      this.mySchoolScore = events[0].mySchoolScore;
      this.myCertification = events[0].myCertification;
      this.myForeign = events[0].myForeign;
      this.myAge = events[0].myAge;
      this.mySex = events[0].mySex;
      this.myStudyTime = events[0].myStudyTime;
      this.tempStudyTime = events[0].myStudyTime;
      this.myToeicSpeakingScore = events[0].myToeicSpeakingScore;
      this.myOpicScore = events[0].myOpicScore;
      this.myContest = events[0].myContest;
      this.myIntern = events[0].myIntern;
      this.myTravel = events[0].myTravel;
      this.isCompanyName();
      snapshot = await db.collection('point').get();
      events = [];

      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      // 이벤트를 위에 있는 data()의 events에 넣어준다.
      this.eventsPoint = events;
      this.moneyPoint = events[0].num;
    },
    async getCheckEvents() {
      let snapshot = await db.collection('toeic').get();
      let events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      this.eventsToeic = events;

      snapshot = await db.collection('toeicSpeaking').get();
      events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      this.eventsToeicSpeaking = events;

      snapshot = await db.collection('opic').get();
      events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      this.eventsOpic = events;

      snapshot = await db.collection('texts').get();
      events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      this.eventsTexts = events;
    },
    InitalData() {
      this.wantToGo = this.events[0].wantToGo;

      this.myToeicScore = this.events[0].myToeicScore;
      this.mySchoolScore = this.events[0].mySchoolScore;
      this.myCertification = this.events[0].myCertification;
      this.myForeign = this.events[0].myForeign;
      this.companyToeicScore = this.eventsCompany.companyToeicScore;
      this.companySchoolScore = this.eventsCompany.companySchoolScore;
      this.companyCertification = this.eventsCompany.companyCertification;
      this.companyForeign = this.eventsCompany.companyForeign;
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
      await db.collection('user').doc('KF1tl1R42f9NurZ7bl9c').update({
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
      await db.collection('user').doc('KF1tl1R42f9NurZ7bl9c').update({
        wantToGo: this.wantToGo,
        myToeicScore: this.myToeicScore,
        mySchoolScore: this.mySchoolScore,
        myCertification: this.myCertification,
        myForeign: this.myForeign,
      });
      this.getEvents();
      this.dialog = false;
    },
    isCompanyName() {
      if (this.events[0].wantToGo == 'Nexon') {
        this.eventsCompany = this.events[2];
      } else if (this.events[0].wantToGo == 'Netmarble') {
        this.eventsCompany = this.events[1];
      } else {
        this.eventsCompany = this.events[0];
      }
    },
    DialogCheckEvent() {
      this.dialogCheck = true;
      this.isLoading = true;
      this.loading = true;
      this.myStudyTime = this.tempStudyTime;
      setTimeout(() => {
        this.loading = false;
      }, 0);
    },
    buttonClicked() {
      this.loading = true;
      this.myStudyTime = this.tempStudyTime;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
      this.getCheckEvents();
    },
    async consoleGo(item) {
      await db.collection('calEvent').add({
        name: item.detail1,
        details: item.name + item.detail1,
        start: item.end,
        end: item.end,
        color: 'orange',
      });
      await db.collection('calEvent').add({
        name: item.detail2,
        details: item.name + item.detail2,
        start: item.test,
        end: item.test,
        color: 'green',
      });
      this.getEvents();
      this.AddedToCal();
      // this.dialogToeic = false;
      // this.dialogSchool = false;
      // this.dialogCheck = false;
      // this.dialogCertification= false;
      // this.dialogForeign= false;
      // this.dialogToeicSpeaking= false;
      // this.dialogOpic= false;
      // this.dialogTravel= false;
      // this.dialogIntern= false;
      // this.dialogContest= false;
    },
    AddedToCal() {
      this.dialogCal = true;
    },
    GetOutFromAddedCal() {
      this.dialogCal = false;
    },
    RandomNumber() {
      this.randomNumber = Math.floor(Math.random() * 13);
    },
    AllDialogFalseAndRandom() {
      this.dialogToeic = false;
      this.dialogSchool = false;
      this.dialogCertification = false;
      this.dialogForeign = false;
      this.dialogToeicSpeaking = false;
      this.dialogOpic = false;
      this.dialogTravel = false;
      this.dialogIntern = false;
      this.dialogContest = false;
      this.RandomNumber();
    },
    async updateEventPoint(ev) {
      await db
        .collection('point')
        .doc('TEqv65ToxZjOIeH1dThM')
        .update({
          num: this.moneyPoint - ev,
        });
      this.getEvents();
    },
    BuyAA() {
      if (this.dialogOne == true && this.moneyPoint < 4000) {
        this.dialogLess = true;
      } else if (this.dialogTwo == true && this.moneyPoint < 4500) {
        this.dialogLess = true;
      } else if (this.dialogThree == true && this.moneyPoint < 4500) {
        this.dialogLess = true;
      } else if (this.dialogFour == true && this.moneyPoint < 14000) {
        this.dialogLess = true;
      } else if (this.dialogFive == true && this.moneyPoint < 16000) {
        this.dialogLess = true;
      } else if (this.dialogSix == true && this.moneyPoint < 30000) {
        this.dialogLess = true;
      } else if (this.dialogOne == true) {
        this.dialogOne = false;
        this.updateEventPoint(4000);
        this.dialogBought = true;
      } else if (this.dialogTwo == true) {
        this.dialogTwo = false;
        this.updateEventPoint(4500);
        this.dialogBought = true;
      } else if (this.dialogThree == true) {
        this.dialogThree = false;
        this.updateEventPoint(4500);
        this.dialogBought = true;
      } else if (this.dialogFour == true) {
        this.dialogFour = false;
        this.updateEventPoint(14000);
        this.dialogBought = true;
      } else if (this.dialogFive == true) {
        this.dialogFive = false;
        this.updateEventPoint(16000);
        this.dialogBought = true;
      } else if (this.dialogSix == true) {
        this.dialogSix = false;
        this.updateEventPoint(30000);
        this.dialogBought = true;
      }
    },
  },
};
</script>
<style lang="scss">
.products {
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: 740px;
  text-align: center;
}

.products img {
  width: 225px;
  height: 225px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.products a {
  text-decoration: none;
  color: black;
  float: left;
  font-size: 20px;
  font-weight: bolder;
}

.price {
  margin-top: 4px;
  margin-bottom: 80px;
}

.clearfix {
  clear: both;
}

.footer {
  text-align: center;
}

.footer img {
  margin-top: 40px;
  height: 20px;
  margin-bottom: 80px;
  margin-left: 10px;
  margin-right: 10px;
}
.row1 h6 {
  width: 100%;
  margin-top: 10px;
  display: inline-block;
  font-weight: bolder;
  font-size: 24px;
  font-family: 'Musinsa', sans-serif !important;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: rgb(0, 0, 0);
  padding-bottom: 14px;
  background-color: #d6d5d2;
}
</style>
