<template>
  <div>
    <div class="header-wrap">
      <ul class="menu1">
        <ul class="menu">
          <router-link
            to="/Announce"
            style="
              text-decoration: none;
              box-sizing: border-box;
              padding: 10px 20px;
              background-color: #c7f9ff;
              display: table-cell;
              font-size: 1.1rem;
              border-radius: 10px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            ">
            채용공고 검색</router-link
          >
        </ul>
        <p style="width: 5%"></p>
        <ul class="menu">
          <router-link
            to="/CustomAnnounce"
            style="
              text-decoration: none;
              box-sizing: border-box;
              padding: 10px 20px;
              background-color: #c7f9ff;
              display: table-cell;
              font-size: 1.1rem;
              border-radius: 10px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            "
            onclick="colorchange()">
            맞춤 채용공고</router-link
          >
        </ul>
      </ul>
    </div>
    <div class="container5">
      <div
        class="header"
        style="
          background-color: #ccc;
          font-weight: bolder;
          font-size: 24px;
          font-family: 'Musinsa', sans-serif !important;
          border-radius: 15px;
        ">
        사용자 검색로그 TOP5
      </div>
      <div v-for="item in Object.keys(this.sortable)" :key="item">
        <div class="key">
          {{ item }}
        </div>
      </div>
      <div v-for="item in this.sortable" :key="item">
        <div class="value" style="width:20%">
          {{ item }}
        </div>
      </div>
    </div>

    <div class="listWrap">
      <table class="tbList">
        <colgroup>
          <col width="8%" />
          <col width="*" />
          <col width="15%" />
          <col width="15%" />
        </colgroup>
        <tr style="text-align: center; background-color: #c6c7c5">
          <th>no</th>
          <th>제목</th>
          <th>아이디</th>
          <th>날짜</th>
        </tr>
        <tr v-for="(item, i) in this.eventsJob" :key="item.id">
          <td v-if="i > 0" style="text-align: center">{{ i  }}</td>

          <td v-if="i > 0"  class="txt_left">
            <p>{{ item.title }}</p>
            <v-btn :href="item.url">자세히 보기</v-btn>
            <v-btn @click="consoleGo(item)">일정에 추가</v-btn>
          </td>

          <td v-if="i > 0" >{{ item.name }}</td>
          <td v-if="item.expire > 1700000000 && i > 0">상시 채용</td>
          <td v-if="item.expire <= 1700000000 && i > 0">{{ UnixToDate(item.open) }} ~ {{ UnixToDate(item.expire) }}</td>
        </tr>
        <tr v-if="1 == 0">
          <td colspan="4">데이터가 없습니다.</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from '@/main';
export default {
  data: () => ({
    name: '',
    details: '',
    start: '',
    end: '',
    color: 'red',
    events: [],
    keyword: '',
    eventsKey: [],
    tempKey: [],
    showKey: [],
    keywordKey: '',
    loc_cd: '',
    job_mid_cd: '',
    sortable: [],
    jobMidCD: [
      '(16)기획·전략',
      '(14)마케팅·홍보·조사',
      '(3)회계·세무·재무',
      '(5)인사·노무·HRD',
      '(4)총무·법무·사무',
      '(2)IT개발·데이터',
      '(15)디자인',
      '(8)영업·판매·무역',
      '(21)고객상담·TM',
      '(18)구매·자재·물류',
      '(12)상품기획·MD',
      '(7)운전·운송·배송',
      '(10)서비스',
      '(11)생산',
      '(22)건설·건축',
      '(6)의료',
      '(9)연구·R&D',
      '(19)교육',
      '(13)미디어·문화·스포츠',
      '(17)금융·보험',
      '(20)공공·복지',
    ],
    locStates: [
      '서울(101000)',
      '경기(102000)',
      '광주(103000)',
      '대구(104000)',
      '대전(105000)',
      '부산(106000)',
      '울산(107000)',
      '인천(108000)',
      '강원(109000)',
      '경남(110000)',
      '경북(111000)',
      '전남(112000)',
      '전북(113000)',
      '충북(114000)',
      '충남(115000)',
      '제주(116000)',
      '전국(117000)',
      '세종(118000)',
    ],
    apiSearch: 'api/announcements?',
    dialog: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    eventsJob: [],
  }),
  mounted() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      let snapshot = await db.collection('keyword').get();
      let events = [];
      snapshot.forEach(doc => {
        let appData = doc.data();
        appData.id = doc.id;
        events.push(appData);
      });
      this.eventsKey = events;
      this.GetKeyNum();
      snapshot = await db.collection('job').get();
      events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        // console.log(appData);
        if(Object.keys(this.sortable)[0] == appData.keyword){
          events.push(appData);
        }
      });
      // 이벤트를 위에 있는 data()의 events에 넣어준다.
      this.eventsJob = events;
      if (this.eventsJob.length == 0){
        snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      this.eventsJob = events;
      }
    },
    UnixToDate(t) {
      const date = new Date(t * 1000);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const dt = date.getDate();
      const formattedTime = `${year}-${month}-${dt}`;
      return formattedTime;
    },
    async consoleGo(item) {
      if (item.expire > 1700000000) {
        await db.collection('calEvent').add({
          name: item.name + ' [상시 모집]',
          details: item.title,
          start: this.UnixToDate(item.open),
          end: this.UnixToDate(item.open),
          color: 'red',
        });
      } else {
        await db.collection('calEvent').add({
          name: item.name + ' [모집 시작일]',
          details: item.title,
          start: this.UnixToDate(item.open),
          end: this.UnixToDate(item.open),
          color: 'green',
        });
        await db.collection('calEvent').add({
          name: item.name + ' [모집 마감일]',
          details: item.title,
          start: this.UnixToDate(item.expire),
          end: this.UnixToDate(item.expire),
          color: 'red',
        });
      }
      alert('일정에 추가되었습니다.');
      this.getEvents();
    },

    fnSearch() {
      this.job_mid_cd = this.job_mid_cd.substr(1, 2);
      if (this.job_mid_cd[1] == ')') {
        this.job_mid_cd = this.job_mid_cd.substr(0, 1);
      }
      this.$axios
        .get(
          'api/announcements?keywords=' +
            this.keyword +
            '&job_type=1&edu_lv=0&loc_cd=' +
            this.loc_cd.substr(3, 6) +
            '&job_mid_cd=' +
            this.job_mid_cd +
            ''
        )
        .then(res => {
          this.events = res;
        });
    },

    changeColor() {
      this.$('li').click(function () {
        $('li').removeClass();
        $(this).addClass('on');
      });
    },
    GetKeyNum() {
      const result = {};
      for (let i = 0; i < this.eventsKey.length; i++) {
        this.tempKey.push(this.eventsKey[i].name);
      }
      this.tempKey.forEach(x => {
        result[x] = (result[x] || 0) + 1;
      });

      const sortable = Object.entries(result)
        .sort(([, a], [, b]) => b - a)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
      this.sortable = sortable;
    },
  },
};
</script>

<style lang="scss">
.header-wrap {
  font-weight: bold;
}
.menu1 {
  display: flex;
  justify-content: center;
  padding: 0 20px;
  font-size: 1.3em;
  margin-top: 10px;
}

.searchWrap {
  border: 1px solid #888;
  border-radius: 5px;
  text-align: center;
  padding: 20px 0;
  margin-bottom: 40px;
}
.searchWrap input {
  width: 60%;
  height: 36px;
  border-radius: 3px;
  padding: 0 10px;
  border: 1px solid #888;
}
.searchWrap .btnSearch {
  display: inline-block;
  margin-left: 10px;
}
.tbList th {
  border-top: 1px solid #888;
}
.tbList th,
.tbList td {
  border-bottom: 1px solid #eee;
  padding: 5px 0;
}
.tbList td.txt_left {
  text-align: left;
}
.btnRightWrap {
  text-align: right;
  margin: 10px 0 0 0;
}

.pagination {
  margin: 20px 0 0 0;
  text-align: center;
}
.first,
.prev,
.next,
.last {
  border: 1px solid #666;
  margin: 0 5px;
}
.pagination span {
  display: inline-block;
  padding: 0 5px;
  color: #333;
}
.pagination a {
  text-decoration: none;
  display: inline-blcok;
  padding: 0 5px;
  color: #666;
}

.search-sec {
  padding: 2rem;
}
.search-slt {
  display: block;
  width: 100%;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  height: calc(3rem + 2px) !important;
  border-radius: 0;
}
.clicked {
  color: #c7f9ff;
  background-color: #1976d2;
}
.container5 {
  text-align: center;
  font-size: 2vw;
  font-weight: bolder;
  position: relative;
  margin-bottom: 10px;
  height: 120px;
  border: 1.5px solid #01022e;
  border-radius: 15px;
}
.key {
  width: 20%;
  position: relative;
  float: left;
}
.value {
  width: 20%;
  position: relative;
  float: left;
}

@media (min-width: 992px) {
  .search-sec {
    position: relative;
    top: -114px;
    background: rgba(26, 70, 104, 0.51);
  }
}

@media (max-width: 992px) {
  .search-sec {
    background: #1a4668;
  }
}
</style>
