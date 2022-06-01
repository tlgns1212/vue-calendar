<template>
  <div class="MyPageWrap">
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />

    <header>
      <form class="mypage" action="">
        <div class="row">
          <div class="container col-10" style="width: 100%">
            <div class="row1">
              <h6 class="text-center col-12 mb-0">My Page [유저 정보]</h6>
            </div>

            <div class="container-info-main" style="width: 100%">
              <div class="form-group row">
                <div class="bar">아이디</div>
                <div class="value">
                  <div class="UserName" v-for="item in this.events" :key="item.email" style="font-size: 2vw">
                    {{ item.email }}
                  </div>
                </div>
                <div class="bar">이름</div>
                <div class="value">
                  <div class="UserName" v-for="item in this.events" :key="item.email">
                    {{ item.name }}
                  </div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="bar">성별</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].mySex }}</div>
                </div>
                <label for="targetCompany" class="bar">나이</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myAge }}</div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="bar">목표 기업</label>
                <div class="value">
                  <div class="UserName">{{ this.wantToGo }}</div>
                </div>
                <label for="targetCompany" class="bar">학점</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].mySchoolScore }}</div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="bar">토익 점수</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myToeicScore }}</div>
                </div>

                <label for="targetCompany" class="bar">토익 스피킹</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myToeicSpeakingScore }}</div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="bar">오픽</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myOpicScore }}</div>
                </div>

                <label for="targetCompany" class="bar">수상경력</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myContest }}</div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="bar">자격증</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myCertification }}</div>
                </div>
                <label for="targetCompany" class="bar">사용가능 언어</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myForeign }}</div>
                </div>
              </div>

              <div class="form-group row align-items-center">
                <label for="targetCompany" class="bar">인턴 경험</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myIntern }}</div>
                </div>
                <label for="targetCompany" class="bar">해외 경험</label>
                <div class="value">
                  <div class="UserName">{{ this.events[0].myTravel }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </header>
    <v-dialog v-model="dialog" max-width="500">
      <v-card class="pop-up">
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

            <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false"> Create Event </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogCal" max-width="500">
      <v-card>
        <v-container>
          <v-form v-if="dialogToeic === true">
            <p>일정에 추가되었습니다!!!!</p>
            <v-btn @click="GetOutFromAddedCal" :href="'https://exam.toeic.co.kr/receipt/receiptStep1.php'">확인</v-btn>
          </v-form>
          <v-form v-else-if="dialogToeicSpeaking === true">
            <p>추가되었습니다!!!!</p>
            <v-btn
              @click="GetOutFromAddedCal"
              :href="'https://www.toeicswt.co.kr/receipt/receiptStep1.php?sbGoodsType1=TOS'"
              >확인</v-btn
            >
          </v-form>
          <v-form v-else-if="dialogOpic === true">
            <p>추가되었습니다!!!!</p>
            <v-btn
              @click="GetOutFromAddedCal"
              :href="'https://www.opic.or.kr/opics/servlet/controller.opic.site.receipt.ExamReceiptServlet?p_process=select-list&p_nav=1_1'"
              >확인</v-btn
            >
          </v-form>
          <v-form v-else>
            <p>추가되었습니다!!!!</p>
            <v-btn
              @click="GetOutFromAddedCal"
              :href="'https://www.toeicswt.co.kr/receipt/receiptStep1.php?sbGoodsType1=TOS'"
              >확인</v-btn
            >
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogToeic" max-width="500">
      <v-card>
        <v-container>
          <v-form v-for="item in this.eventsToeic" :key="item.id">
            <p>{{ item.name }} 접수마감일 : {{ item.end }} 시험일 : {{ item.test.substr(0, 10) }}</p>
            <v-btn @click="consoleGo(item)">추가하기</v-btn>
            <v-btn :href="'https://exam.toeic.co.kr/receipt/receiptStep1.php'">접수하러가기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogSchool" max-width="500">
      <v-card>
        <v-container>
          <v-form>
            <div v-if="this.eventsTexts[1]">
              <p>{{ this.eventsTexts[this.randomNumber].text }}</p>
              <v-btn @click="AllDialogFalseAndRandom">힘내기!!</v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCertification" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <div v-if="this.eventsTexts[1]">
              <p>{{ this.eventsTexts[this.randomNumber].text }}</p>
              <v-btn @click="AllDialogFalseAndRandom">힘내기!!</v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogForeign" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <div v-if="this.eventsTexts[1]">
              <p>{{ this.eventsTexts[this.randomNumber].text }}</p>
              <v-btn @click="AllDialogFalseAndRandom">힘내기!!</v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogToeicSpeaking" max-width="500">
      <v-card>
        <v-container>
          <v-form v-for="item in this.eventsToeicSpeaking" :key="item.id">
            <p>{{ item.name }} 접수마감일 : {{ item.end.substr(0, 10) }} 시험일 : {{ item.test.substr(0, 10) }}</p>
            <v-btn @click="consoleGo(item)">추가하기</v-btn>
            <v-btn :href="'https://www.toeicswt.co.kr/receipt/receiptStep1.php?sbGoodsType1=TOS'">접수하러가기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogOpic" max-width="500">
      <v-card>
        <v-container>
          <v-form v-for="item in this.eventsOpic" :key="item.id">
            <p>{{ item.name }} 접수마감일 : {{ item.end.substr(0, 10) }} 시험일 : {{ item.test.substr(0, 10) }}</p>
            <v-btn @click="consoleGo(item)">추가하기</v-btn>
            <v-btn
              :href="'https://www.opic.or.kr/opics/servlet/controller.opic.site.receipt.ExamReceiptServlet?p_process=select-list&p_nav=1_1'"
              >접수하러가기</v-btn
            >
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogTravel" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <div v-if="this.eventsTexts[1]">
              <p>{{ this.eventsTexts[this.randomNumber].text }}</p>
              <v-btn @click="AllDialogFalseAndRandom">힘내기!!</v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogIntern" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <div v-if="this.eventsTexts[1]">
              <p>{{ this.eventsTexts[this.randomNumber].text }}</p>
              <v-btn @click="AllDialogFalseAndRandom">힘내기!!</v-btn>
            </div>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogContest" max-width="500">
      <v-card>
        <v-container>
          <v-form @submit.prevent="">
            <p>지금이라도 늦지 않았으니 아래 페이지에서 여러 대회들을 찾아봐요!!!!!</p>
            <v-btn :href="'https://www.contestkorea.com/'">접수하러가기</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCheck">
      <v-card>
        <v-container>
          <v-form @submit.prevent="DialogCheckEvent">
            <div class="spinner-div" v-if="loading == false">
              <q-spinner-cube color="primary" size="5em" />
              <!-- <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >토익 {{ this.events[0].myToeicScore }} -> {{ this.eventsCompany.companyToeicScore }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <v-btn @click="dialogToeic = true"> {{ this.MathforToeic() }} 일</v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >학점 {{ this.events[0].mySchoolScore }} -> {{ this.eventsCompany.companySchoolScore }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <div class="UserName"><v-btn @click="dialogSchool = true"> 不可</v-btn></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >자격증 개수 {{ this.events[0].myCertification }} ->
                  {{ this.eventsCompany.companyCertification }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <v-btn @click="dialogCertification = true"> {{ this.MathforCertification() }} 일</v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >사용 가능 언어 {{ this.events[0].myForeign }} -> {{ this.eventsCompany.companyForeign }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <v-btn @click="dialogForeign = true"> {{ this.MathforForeign() }} 일</v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >토익 스피킹 {{ this.events[0].myToeicSpeakingScore }} ->
                  {{ this.eventsCompany.companyToeicSpeakingScore }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <v-btn @click="dialogToeicSpeaking = true"> {{ this.MathforToeicSpeakingScore() }} 일</v-btn>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >오픽111 {{ this.events[0].myOpicScore }} -> {{ this.eventsCompany.companyOpicScore }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <v-btn @click="dialogOpic = true"> {{ this.MathforOpicScore() }} 일</v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >해외 경험 {{ this.events[0].myTravel }} -> {{ this.eventsCompany.companyTravel }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <v-btn @click="dialogTravel = true"> {{ this.MathforTravel() }} 일</v-btn>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >인턴 경험 {{ this.events[0].myIntern }} -> {{ this.eventsCompany.companyIntern }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <div class="UserName"><v-btn @click="dialogIntern = true"> 不可</v-btn></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group1 row align-items-center">
                <label for="targetCompany" class="keys"
                  >수상 내역 {{ this.events[0].myContest }} -> {{ this.eventsCompany.companyContest }}</label
                >
                <div class="results">
                  <div class="input-group">
                    <div class="UserName">
                      <v-btn @click="dialogContest = true"> {{ this.MathforContest() }} 일</v-btn>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
            <div class="spinner-div" style="width: 300px" v-else></div>
            <div class="form-group1 row align-items-center">
              <v-text-field
                v-model="tempStudyTime"
                type="text"
                label="한 번에 가능한 최대 집중 시간(hour)"
                style="width: 100px"></v-text-field>
                <v-text-field
                v-model="tempSoon"
                type="text"
                label="수능 영어 등급"
                style="width: 100px"></v-text-field>
            </div>
            <LoadingButton ref="button" :loading="this.loading" @click="buttonClicked" class="aaa">
              다시 검색
            </LoadingButton>
            <!-- <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false"> Create Event </v-btn>
             -->
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-row class="container2">
      <div class="container-fluid">
        <div class="navbar-header" style="height: 40px">
          <div class="target">나의 목표 역량</div>
          <button class="btn btn-success btn-md pull-right" @click="dialog = true" style="margin-top: 5px">
            정보갱신
          </button>
        </div>
      </div>
    </v-row>
    <div class="container-fluid">
      <div class="col">
        <div class="row">
          <div class="container3">
            <h4>목표 역량 대비 현재 나의 역량</h4>
            <v-select
              :v-model="this.wantToGo"
              :items="this.companyItems"
              label="희망 기업을 선택하세요."
              dense
              style="margin-left: 25%; width: 50%; margin-top: 3%"
              v-on:change="ChangeCompany"></v-select>
            토익<span class="pull-right strong">{{ this.eventsCompany.companyToeicScore }}</span>
            <div class="progress">
              <div
                :class="ToeicProgressBar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="ToeicPercentage">
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
                  ) > 100
                    ? 100
                    : Math.floor(
                        (parseFloat(this.events[0].mySchoolScore) / parseFloat(this.eventsCompany.companySchoolScore)) *
                          100
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
                  ) > 100
                    ? 100
                    : Math.floor(
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
                  ) > 100
                    ? 100
                    : Math.floor(
                        (parseFloat(this.events[0].myForeign) / parseFloat(this.eventsCompany.companyForeign)) *
                          100
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
                  ) > 100
                    ? 100
                    : Math.floor(
                        (parseFloat(this.events[0].myToeicSpeakingScore) / parseFloat(this.eventsCompany.companyToeicSpeakingScore)) *
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
                  ) > 100
                    ? 100
                    : Math.floor(
                        (parseFloat(this.OpicState[this.events[0].myOpicScore]) / parseFloat(this.OpicState[this.eventsCompany.companyOpicScore])) *
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
                  ) > 100
                    ? 100
                    : Math.floor(
                        (parseFloat(this.events[0].myTravel) / parseFloat(this.eventsCompany.companyTravel)) *
                          100
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
                  ) > 100
                    ? 100
                    : Math.floor(
                        (parseFloat(this.events[0].myIntern) / parseFloat(this.eventsCompany.companyIntern)) *
                          100
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
                  ) > 100
                    ? 100
                    : Math.floor(
                        (parseFloat(this.events[0].myContest) / parseFloat(this.eventsCompany.companyContest)) *
                          100
                      )
                }}%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <v-text-field
          v-model="tempStudyTime"
          type="text"
          label="한번에 가능한 최대 집중 시간(hour)"
          style="
            font-size: 25px;
            position: relative;
            top: 10px;
            width: 300px;
            left: 54px;
            margin-top: 10px;
            display: inline-block;
          "></v-text-field>
          <v-text-field
          v-model="tempSoon"
          type="text"
          label="수능 영어 등급"
          style="
            font-size: 25px;
            position: relative;
            top: 10px;
            width: 300px;
            left: 54px;
            margin-top: 10px;
            display: inline-block;
          "></v-text-field>
        <v-btn @click="DialogCheckEvent" style="position: relative; left: 40%">검사받기</v-btn>
      </div>
    </div>
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
    companyItems: [],
    eventNameCompany: 'KEPC',
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
    mySoon: '',
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
    dialogCal: false,
    currentlyEditing: null,
    selectedEvent: {},
    loading: false,
    randomNumber: 2,
    tempStudyTime: '',
    tempSoon: '',
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
      return { width: (parseInt(this.ToeicScore) > 100 ? 100:this.ToeicScore) + '%' };
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
      return { width: (parseInt(this.SchoolScore) > 100 ? 100:this.SchoolScore) + '%' };
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
      return { width: (parseInt(this.CertificationScore) > 100 ? 100:this.CertificationScore)+ '%' };
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
      return { width: (parseInt(this.ForeignScore) > 100 ? 100:this.ForeignScore) + '%' };
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
      return { width: (parseInt(this.ToeicSpeakingScoreScore) > 100 ? 100:this.ToeicSpeakingScoreScore) + '%' };
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
      return { width: (parseInt(this.OpicScoreScore) > 100 ? 100:this.OpicScoreScore)+ '%' };
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
      return { width: (parseInt(this.TravelScore) > 100 ? 100:this.TravelScore) + '%' };
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
      return { width: (parseInt(this.InternScore) > 100 ? 100:this.InternScore) + '%' };
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
      return { width: (parseInt(this.ContestScore) > 100 ? 100:this.ContestScore) + '%' };
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
      this.mySoon = events[0].mySoon;
      this.tempSoon = events[0].mySoon;
      this.tempStudyTime = events[0].myStudyTime;
      this.myToeicSpeakingScore = events[0].myToeicSpeakingScore;
      this.myOpicScore = events[0].myOpicScore;
      this.myContest = events[0].myContest;
      this.myIntern = events[0].myIntern;
      this.myTravel = events[0].myTravel;
      this.isCompanyName();
      this.InitalData();
      this.CompanyItems();
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
      await db.collection('user').doc('KEPC').update({
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
      await db.collection('user').doc('KEPC').update({
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
    async DialogCheckEvent() {
      await db.collection('user').doc('KEPC').update({
        myStudyTime: this.tempStudyTime,
        mySoon: this.tempSoon,
      });
      this.getEvents();
      this.dialogCheck = true;
      this.isLoading = true;
      this.loading = true;
      this.myStudyTime = this.tempStudyTime;
      this.mySoon = this.tempSoon;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      this.getCheckEvents();
    },
    async buttonClicked() {
      await db.collection('user').doc('KEPC').update({
        myStudyTime: this.tempStudyTime,
        mySoon: this.tempSoon,
      });
      this.loading = true;
      this.myStudyTime = this.tempStudyTime;
      this.mySoon = this.tempSoon;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
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
    MathforToeic() {
      let ToeicScore = 4;
      let grade =
        parseInt(this.ToeicScore) > 800
          ? 1
          : parseInt(this.ToeicScore) > 600
          ? 2
          : parseInt(this.ToeicScore) > 400
          ? 3
          : parseInt(this.ToeicScore) > 1
          ? 4
          : 5;
      let multiply = 1;
      multiply *= this.mySex == '남자' ? 0.6 : 0.3;
      multiply *= parseInt(this.myTravel) > 0 ? 0.4 : 0.8;
      multiply *= parseInt(this.myCertification) > 0 ? 0.3 : 0.7;
      let changed = this.companyToeicScore - this.myToeicScore;
      let result = changed * grade * multiply * ToeicScore;
      return Math.ceil(result / parseInt(this.myStudyTime));
    },
    MathforCertification() {
      let Certification = 250;
      let grade =
        parseInt(this.myCertification) > 4
          ? 1
          : parseInt(this.myCertification) > 3
          ? 2
          : parseInt(this.myCertification) > 2
          ? 3
          : parseInt(this.myCertification) > 1
          ? 4
          : 5;
      let multiply = 1;
      multiply *= this.mySex == '남자' ? 0.6 : 0.3;
      multiply *= parseInt(this.myTravel) > 0 ? 0.4 : 0.8;
      multiply *= parseInt(this.myCertification) > 0 ? 0.3 : 0.7;
      let changed = this.companyCertification - this.myCertification;
      let result = changed * grade * multiply * Certification;
      return Math.ceil(result / parseInt(this.myStudyTime));
    },
    MathforForeign() {
      let Foreign = 500;
      let grade =
        parseInt(this.myForeign) > 4
          ? 1
          : parseInt(this.myForeign) > 3
          ? 2
          : parseInt(this.myForeign) > 2
          ? 3
          : parseInt(this.myForeign) > 1
          ? 4
          : 5;
      let multiply = 1;
      multiply *= this.mySex == '남자' ? 0.6 : 0.3;
      multiply *= parseInt(this.myTravel) > 0 ? 0.4 : 0.8;
      multiply *= parseInt(this.myCertification) > 0 ? 0.3 : 0.7;
      let changed = this.companyForeign - this.myForeign;
      let result = changed * grade * multiply * Foreign;
      return Math.ceil(result / parseInt(this.myStudyTime));
    },
    MathforToeicSpeakingScore() {
      let ToeicSpeakingScore = 500;
      let grade =
        parseInt(this.myToeicSpeakingScore) > 6
          ? 1
          : parseInt(this.myToeicSpeakingScore) > 4
          ? 2
          : parseInt(this.myToeicSpeakingScore) > 2
          ? 3
          : parseInt(this.myToeicSpeakingScore) > 1
          ? 4
          : 5;
      let multiply = 1;
      multiply *= this.mySex == '남자' ? 0.6 : 0.3;
      multiply *= parseInt(this.myTravel) > 0 ? 0.4 : 0.8;
      multiply *= parseInt(this.myCertification) > 0 ? 0.3 : 0.7;
      let changed = this.companyToeicSpeakingScore - this.myToeicSpeakingScore;
      let result = changed * grade * multiply * ToeicSpeakingScore;
      return Math.ceil(result / parseInt(this.myStudyTime));
    },
    MathforOpicScore() {
      if (parseInt(this.myOpicScore) == 0 && parseInt(this.myToeicSpeakingScore) == 0 && parseInt(this.myToeicScore) == 0){
      if (parseInt(this.mySoon) == 1 && parseInt(this.myStudyTime) > 1){
        return 11+20;
      }
      else if (parseInt(this.mySoon) == 1 && parseInt(this.myStudyTime) == 1){
        return 31+20;
      }
      else if (parseInt(this.mySoon) == 2 && parseInt(this.myStudyTime) > 3){
        return 11+20;
      }
      else if (parseInt(this.mySoon) == 2 && parseInt(this.myStudyTime) > 0){
        return 31+20
      }
      else if (parseInt(this.mySoon) == 3 && parseInt(this.myStudyTime) > 5){
        return 11+20
      }
      else if (parseInt(this.mySoon) == 3 && parseInt(this.myStudyTime) > 3){
        return 31+20
      }
      else if (parseInt(this.mySoon) == 3 && parseInt(this.myStudyTime) > 0){
        return 58+20
      }
      else if (parseInt(this.mySoon) == 4 && parseInt(this.myStudyTime) > 5 ){
        return 31+20
      }
      else if (parseInt(this.mySoon) == 4 && parseInt(this.myStudyTime) > 1){
        return 58+20
      }
      else if (parseInt(this.mySoon) == 4 && parseInt(this.myStudyTime) == 0){
        return 77+20
      }
      else if (parseInt(this.mySoon) == 5 && parseInt(this.myStudyTime) > 3){
        return 58+20
      }
      else if (parseInt(this.mySoon) == 5 && parseInt(this.myStudyTime) > 0){
        return 77+20
      }
      else if (parseInt(this.mySoon) == 6 && parseInt(this.myStudyTime) > 5){
        return 58+20
      }
      else if (parseInt(this.mySoon) == 6 && parseInt(this.myStudyTime) > 2){
        return 77+20
      }
      else if (parseInt(this.mySoon) == 6 && parseInt(this.myStudyTime) > 0){
        return 12+204
      }
      else if (parseInt(this.mySoon) == 7 && parseInt(this.myStudyTime) > 0){
        return 12+204
      }
      else if (parseInt(this.mySoon) == 8 && parseInt(this.myStudyTime) > 0){
        return 12+204
      }
      else if (parseInt(this.mySoon) == 9 && parseInt(this.myStudyTime) > 0){
        return 12+204
      }}
      else{
        if (parseInt(this.mySoon) == 1 && parseInt(this.myStudyTime) > 1){
        return 11;
      }
      else if (parseInt(this.mySoon) == 1 && parseInt(this.myStudyTime) == 1){
        return 31;
      }
      else if (parseInt(this.mySoon) == 2 && parseInt(this.myStudyTime) > 3){
        return 11;
      }
      else if (parseInt(this.mySoon) == 2 && parseInt(this.myStudyTime) > 0){
        return 31
      }
      else if (parseInt(this.mySoon) == 3 && parseInt(this.myStudyTime) > 5){
        return 11
      }
      else if (parseInt(this.mySoon) == 3 && parseInt(this.myStudyTime) > 3){
        return 31
      }
      else if (parseInt(this.mySoon) == 3 && parseInt(this.myStudyTime) > 0){
        return 58
      }
      else if (parseInt(this.mySoon) == 4 && parseInt(this.myStudyTime) > 5 ){
        return 31
      }
      else if (parseInt(this.mySoon) == 4 && parseInt(this.myStudyTime) > 1){
        return 58
      }
      else if (parseInt(this.mySoon) == 4 && parseInt(this.myStudyTime) == 0){
        return 77
      }
      else if (parseInt(this.mySoon) == 5 && parseInt(this.myStudyTime) > 3){
        return 58
      }
      else if (parseInt(this.mySoon) == 5 && parseInt(this.myStudyTime) > 0){
        return 77
      }
      else if (parseInt(this.mySoon) == 6 && parseInt(this.myStudyTime) > 5){
        return 58
      }
      else if (parseInt(this.mySoon) == 6 && parseInt(this.myStudyTime) > 2){
        return 77
      }
      else if (parseInt(this.mySoon) == 6 && parseInt(this.myStudyTime) > 0){
        return 124
      }
      else if (parseInt(this.mySoon) == 7 && parseInt(this.myStudyTime) > 0){
        return 124
      }
      else if (parseInt(this.mySoon) == 8 && parseInt(this.myStudyTime) > 0){
        return 124
      }
      else if (parseInt(this.mySoon) == 9 && parseInt(this.myStudyTime) > 0){
        return 124
      }
      }
    },
    MathforTravel() {
      let Travel = 500;
      let grade =
        parseInt(this.myTravel) > 4
          ? 1
          : parseInt(this.myTravel) > 3
          ? 2
          : parseInt(this.myTravel) > 2
          ? 3
          : parseInt(this.myTravel) > 1
          ? 4
          : 5;
      let multiply = 1;
      multiply *= this.mySex == '남자' ? 0.6 : 0.3;
      multiply *= parseInt(this.myTravel) > 0 ? 0.4 : 0.8;
      multiply *= parseInt(this.myCertification) > 0 ? 0.3 : 0.7;
      let changed = this.companyTravel - this.myTravel;
      let result = changed * grade * multiply * Travel;
      return Math.ceil(result / parseInt(this.myStudyTime));
    },
    MathforContest() {
      let Contest = 500;
      let grade =
        parseInt(this.myContest) > 4
          ? 1
          : parseInt(this.myContest) > 3
          ? 2
          : parseInt(this.myContest) > 2
          ? 3
          : parseInt(this.myContest) > 1
          ? 4
          : 5;
      let multiply = 1;
      multiply *= this.mySex == '남자' ? 0.6 : 0.3;
      multiply *= parseInt(this.myTravel) > 0 ? 0.4 : 0.8;
      multiply *= parseInt(this.myCertification) > 0 ? 0.3 : 0.7;
      let changed = this.companyContest - this.myContest;
      let result = changed * grade * multiply * Contest;
      return Math.ceil(result / parseInt(this.myStudyTime));
    },
    CompanyItems() {
      for (let i = 0; i < this.events.length; i++) {
        this.companyItems.push(this.events[i].id);
      }
    },
    async ChangeCompany(a) {
      this.wantToGo = a;

      await db.collection('user').doc('KEPC').update({
        wantToGo: this.wantToGo,
      });
      this.getEvents();
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
.row h4 {
  width: 50%;
  position: relative;
  left: 25%;
  margin-top: 10px;
  text-align: center;
  padding-top: 10px;
  display: inline-block;
  font-weight: bolder;
  font-size: 20px;
  font-family: 'Musinsa', sans-serif !important;
  border-bottom-width: 1.5px;
  border-bottom-style: solid;
  border-bottom-color: rgb(0, 0, 0);
  padding-bottom: 14px;
  background-color: #adaaaa;
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
.container-info-main {
  font-size: 2vw;
  font-family: 'Musinsa', sans-serif !important;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: rgb(0, 0, 0);
  font-weight: 400;
  position: relative;
  top: 20px;

  text-align: center;
}

.bar {
  background-color: #fcc46a;
  width: 140px;
  margin-left: 20px;
  font-weight: bolder;
  font-size: 2vw;
  font-family: 'Musinsa', sans-serif !important;
}
.form-group {
  margin: none;
}
.form-group1 {
  margin: none;
  width: 700px;
  position: relative;
  left: 100px;
}

.value {
  width: 25%;
}
.Username {
  width: 160px;
  font-family: 'Musinsa', sans-serif !important;
  text-align: center;
  font-weight: bolder;
}

.navbar-menu {
  position: relative;
}
.container {
  width: 100%;
}
.col {
  position: relative;

  top: 10px;
}
.keys {
  width: 300px;
  font-size: 25px;
  font-weight: bolder;
  margin: 15px;
  text-align: center;
}
.results {
  width: 150px;
}

.target {
  position: relative;
  font-size: 24px;
  margin-top: 14px;
  text-align: center;
}
.navbar-brand {
  margin: 10px 10px 10px 50px;
  margin-top: 10px;
  display: inline-block;
  font-weight: bolder;
  font-size: 24px;
  font-family: 'Musinsa', sans-serif !important;
}

.btn {
  position: relative;
  left: 85%;
  bottom: 39px;
  margin-bottom: 10px;
}
.footer {
  position: relative;

  font-weight: bolder;
  font-family: 'Musinsa', sans-serif !important;
}
.container2 {
  position: relative;
  top: 10px;
  width: 680px;
  left: 10.4%;
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
.container3 {
  position: relative;
  top: 10px;
  width: 680px;
  left: 54px;
  margin-top: 10px;
  display: inline-block;
  font-weight: bolder;
  font-size: 20px;
  font-family: 'Musinsa', sans-serif !important;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-bottom-color: rgb(0, 0, 0);
  padding-bottom: 14px;
  background-color: #d6d5d2;
}
.spinner-div {
  width: 200px;
  position: relative;
  font-size: 21px;
}
</style>