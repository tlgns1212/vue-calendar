<template>
  <div class="MyPageWrap">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

    <header>
      <form class="mypage" action="">
        <div class="row paddingBottom20">
          <div class="container col-7">
            <div class="row1">
              <h6 class="text-center col-12 mb-0">My Page [유저 정보]</h6>
            </div>
            <div class="container-info-main">
              <div class="form-group row">
                <label for="firstName" class="col-4">아이디</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName" v-for="item in this.events" :key="item.email">
                      {{ item.email }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="lastName" class="col-4">이름</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName" v-for="item in this.events" :key="item.email">
                      {{ item.name }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">성별</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].mySex }}</div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">나이</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myAge }}</div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">목표 기업</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].wantToGo }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">학점</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].mySchoolScore }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">토익 점수</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myToeicScore }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">토익 스피킹</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myToeicSpeakingScore }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">오픽</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myOpicScore }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">수상경력</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myContest }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">자격증</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myCertification }}</div>
                  </div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">사용가능 언어 수</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myForeign }}</div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">인턴 경험 회수</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myIntern }}</div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">해외 경험 회수</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName">{{ this.events[0].myTravel }}</div>
                  </div>
                </div>
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
            <v-text-field v-model="mySex" type="text" label="성별"></v-text-field>
            <v-text-field v-model="myAge" type="text" label="나이"></v-text-field>
            <v-text-field v-model="wantToGo" type="text" label="목표 기업"></v-text-field>
            <v-text-field v-model="myToeicScore" type="text" label="토익 점수"></v-text-field>
            <v-text-field v-model="myToeicSpeakingScore" type="text" label="토익 스피킹 점수"></v-text-field>
            <v-text-field v-model="myOpicScore" type="text" label="오픽 등급"></v-text-field>
            <v-text-field v-model="mySchoolScore" type="text" label="학점"></v-text-field>
            <v-text-field v-model="myCertification" type="text" label="한국사 자격증 보유 개수"></v-text-field>
            <v-text-field v-model="myCertification" type="text" label="자격증 개수"></v-text-field>
            <v-text-field v-model="myContest" type="text" label="대회 수상 경력"></v-text-field>
            <v-text-field v-model="myForeign" type="text" label="사용 가능 언어 개수"></v-text-field>
            <v-text-field v-model="myIntern" type="text" label="인턴 경험 횟수"></v-text-field>
            <v-text-field v-model="myTravel" type="text" label="해외 경험 횟수"></v-text-field>
            <v-text-field v-model="myVolunteer" type="text" label="봉사 횟수"></v-text-field>
            <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false"> Create Event </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogToeic" max-width="500">
      <v-card>
        <v-container>
          <v-form v-for="item in this.eventsToeic" :key="item.id">
            <p>토익</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogSchool" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>학점</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCertification" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>자격증</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogForeign" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>사용 가능한 언어</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogToeicSpeaking" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>토익 스피킹</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogOpic" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>오픽</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogTravel" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>해외 여행</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogIntern" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>인턴 경험 횟수</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogContest" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>수상 경력</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogVolunteer" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>봉사</p>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCheck" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="DialogCheckEvent">
            <div class="spinner-div" v-if="loading == false">
              <q-spinner-cube color="primary" size="5em" />
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">토익 {{this.events[0].myToeicScore}} -> {{this.eventsCompany.companyToeicScore}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"> <v-btn @click="dialogToeic = true"> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">학점 {{this.events[0].mySchoolScore}} -> {{this.eventsCompany.companySchoolScore}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">자격증 개수 {{this.events[0].myCertification}} -> {{this.eventsCompany.companyCertification}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">사용 가능 언어 {{this.events[0].myForeign}} -> {{this.eventsCompany.companyForeign}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">토익 스피킹 {{this.events[0].myOpicScore}} -> {{this.eventsCompany.companyOpicScore}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">오픽 {{this.events[0].myTravel}} -> {{this.eventsCompany.companyTravel}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">해외 경험 {{this.events[0].myIntern}} -> {{this.eventsCompany.companyIntern}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">인턴 경험 {{this.events[0].myContest}} -> {{this.eventsCompany.companyContest}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">수상 내역 {{this.events[0].myVolunteer}} -> {{this.eventsCompany.companyVolunteer}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>
              <div class="form-group row align-items-center">
                <label for="targetCompany" class="col-4">봉사 횟수 {{this.events[0].myCertification}} -> {{this.eventsCompany.companyCertification}}</label>
                <div class="col-8">
                  <div class="input-group">
                    <div class="UserName"><v-btn text> {{ this.events[0].myForeign }} 일</v-btn></div>
                  </div>
                </div>
              </div>

              
            </div>
            <div class="spinner-div" v-else >

              </div>
              <div class="form-group row align-items-center">
                <LoadingButton ref="button" :loading="this.loading"
      @click="buttonClicked"
    >
      다시 검색
    </LoadingButton>
              </div>
            <!-- <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false"> Create Event </v-btn>
             -->
             
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-row class=" " style="background-color: grey">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"> 목표 역량 </a>
        </div>
        <button class="btn btn-success btn-md pull-right" @click="dialog = true" style="margin-top: 5px">
          정보갱신
        </button>
      </div>
    </v-row>

    <div class="container-fluid">
      <div class="col col-md-9">
        <div class="row">
          <div class="col" style="background-color: #a9e6fc">
            <h4>목표 역량 대비 현재 나의 역량</h4>
            토익<span class="pull-right strong">{{ this.eventsCompany.companyToeicScore }}</span>
            <div class="progress">
              <div
                :class="ToeicProgressBar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ToeicPercentage"
                >
                {{
                  Math.floor(
                    (parseFloat(this.events[0].myToeicScore) / parseFloat(this.eventsCompany.companyToeicScore)) * 100
                  ) > 100
                    ? 100
                    : Math.floor(
                        (parseFloat(this.events[0].myToeicScore) / parseFloat(this.eventsCompany.companyToeicScore)) *
                          100
                      )
                }}%
              </div>
              
              <!-- <span class="pull-right strong">{{this.events[0].myToeicScore}}</span> -->
            </div>
            
            학점<span class="pull-right strong">{{ this.eventsCompany.companySchoolScore }}</span>
            <div class="progress">
              <div
                :class="SchoolProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="SchoolPercentage">
                {{
                  Math.floor(
                    (parseFloat(this.events[0].mySchoolScore) / parseFloat(this.eventsCompany.companySchoolScore)) * 100
                  )
                }}%
              </div>
              <!-- <span class="pull-right strong">{{this.events[0].mySchoolScore }}</span> -->
            </div>
            자격증 개수<span class="pull-right strong">{{ this.eventsCompany.companyCertification }}</span>
            <div class="progress">
              <div
                :class="CertificationProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="CertificationPercentage">
                {{
                  Math.floor(
                    (parseFloat(this.events[0].myCertification) / parseFloat(this.eventsCompany.companyCertification)) *
                      100
                  )
                }}%
              </div>
            </div>
            외국어(기타)<span class="pull-right strong" style="font-weight: bold">{{
              this.eventsCompany.companyForeign
            }}</span>
            <div class="progress" style="text-align: right">
              <div
                :class="ForeignProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ForeignPercentage">
                {{
                  Math.floor(
                    (parseFloat(this.events[0].myForeign) / parseFloat(this.eventsCompany.companyForeign)) * 100
                  )
                }}%
              </div>
            </div>
            토익 스피킹<span class="pull-right strong" style="font-weight: bold">{{
              this.eventsCompany.companyToeicSpeakingScore
            }}</span>
            <div class="progress" style="text-align: right">
              <div
                :class="ToeicSpeakingScoreProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ToeicSpeakingScorePercentage">
                {{
                  Math.floor(
                    (parseFloat(this.events[0].myToeicSpeakingScore) /
                      parseFloat(this.eventsCompany.companyToeicSpeakingScore)) *
                      100
                  )
                }}%
              </div>
            </div>
            오픽<span class="pull-right strong" style="font-weight: bold">{{
              this.eventsCompany.companyOpicScore
            }}</span>
            <div class="progress" style="text-align: right">
              <div
                :class="OpicScoreProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="OpicScorePercentage">
                {{
                  Math.floor(
                    (parseFloat(this.OpicState[this.events[0].myOpicScore]) /
                      parseFloat(this.OpicState[this.eventsCompany.companyOpicScore])) *
                      100
                  )
                }}%
              </div>
            </div>
            해외 경험<span class="pull-right strong" style="font-weight: bold">{{
              this.eventsCompany.companyTravel
            }}</span>
            <div class="progress" style="text-align: right">
              <div
                :class="TravelProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="TravelPercentage">
                {{
                  Math.floor(
                    (parseFloat(this.events[0].myTravel) / parseFloat(this.eventsCompany.companyTravel)) * 100
                  )
                }}%
              </div>
            </div>
            인턴 경험<span class="pull-right strong" style="font-weight: bold">{{
              this.eventsCompany.companyIntern
            }}</span>
            <div class="progress" style="text-align: right">
              <div
                :class="InternProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="InternPercentage">
                {{
                  Math.floor(
                    (parseFloat(this.events[0].myIntern) / parseFloat(this.eventsCompany.companyIntern)) * 100
                  )
                }}%
              </div>
            </div>
            수상내역<span class="pull-right strong" style="font-weight: bold">{{
              this.eventsCompany.companyContest
            }}</span>
            <div class="progress" style="text-align: right">
              <div
                :class="ContestProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ContestPercentage">
                {{
                  Math.floor(
                    (parseFloat(this.events[0].myContest) / parseFloat(this.eventsCompany.companyContest)) * 100
                  )
                }}%
              </div>
            </div>
            봉사 횟수<span class="pull-right strong" style="font-weight: bold">{{
              this.eventsCompany.companyVolunteer
            }}</span>
            <div class="progress" style="text-align: right">
              <div
                :class="VolunteerProgressBar"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="VolunteerPercentage">
                {{
                  Math.floor(
                    (parseFloat(this.events[0].myVolunteer) / parseFloat(this.eventsCompany.companyVolunteer)) * 100
                  )
                }}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-btn @click="DialogCheckEvent">검사받기</v-btn>
    </div>
  </div>
</template>

<script>
import { db } from '@/main';
import { mapState } from 'vuex';
import LoadingButton from "./LoadingButton";

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
    eventsToeic:[],
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
    myVolunteer: '',
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
    companyVolunteer: '',
    isLoading: false,
    dialog: false,
    dialogCheck: false,
    dialogToeic: false,
    dialogSchool: false,
    dialogCertification: false,
    dialogForeign: false,
    dialogToeicSpeaking: false,
    dialogOpic: false,
    dialogTravel: false,
    dialogIntern: false,
    dialogContest: false,
    dialogVolunteer: false,
    currentlyEditing: null,
    selectedEvent: {},
    loading: false,
    OpicState: { NL: 1, NM: 2, NH: 3, IL: 4, IM1: 5, IM2: 6, IM3: 7, AL: 8 },
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
    VolunteerScore() {
      return Math.floor(
        (parseFloat(this.events[0].myVolunteer) / parseFloat(this.eventsCompany.companyVolunteer)) * 100
      ).toString();
    },
    VolunteerPercentage() {
      return { width: this.VolunteerScore + '%' };
    },
    VolunteerProgressBar() {
      let temp = this.VolunteerScore;
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
      this.myToeicSpeakingScore = events[0].myToeicSpeakingScore;
      this.myOpicScore = events[0].myOpicScore;
      this.myContest = events[0].myContest;
      this.myIntern = events[0].myIntern;
      this.myTravel = events[0].myTravel;
      this.myVolunteer = events[0].myVolunteer;
      this.isCompanyName();
    },
    InitalData() {
      console.log('\n\n\n\n\n\n\n\\n\n\n\n');
      console.log(this.events.wantToGo);
      this.wantToGo = this.events[0].wantToGo;

      this.myToeicScore = this.events[0].myToeicScore;
      console.log(this.myToeicScore);
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
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    buttonClicked() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.extendable:focus {
  position: absolute;
  width: 110%;
  top: -1rem;
}
.row1 h6 {
  margin-top: 10px;
  display: inline-block;
  font-size: 24px;
  font-family: 'Musinsa', sans-serif !important;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: rgb(0, 0, 0);
  padding-bottom: 14px;
}
.container-info-main {
  font-size: 24px;
  font-family: 'Musinsa', sans-serif !important;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: rgb(0, 0, 0);
  padding-bottom: 1px;
  position: relative;
  top: 20px;
}
.col-4 {
  font-size: 20px;
  font-family: 'Musinsa', sans-serif !important;
}
</style>
