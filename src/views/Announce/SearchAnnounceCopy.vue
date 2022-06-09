<template>
  <div>
    <div class="header-wrap">
      <ul class="menu1" style="list-style: none">
        <li class="menu">
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
        </li>
        <p style="width: 5%"></p>
        <li class="menu">
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
        </li>
      </ul>
    </div>
    <div>
      <v-row align="center">
        <v-col class="d-flex" style="position: relative; left: 8%; width: 100%; margin-right: 15%">
          <v-text-field
            label="키워드를 검색하시오"
            v-model="keyword"
            dense
            style="position: relative; font-size: 1vh; margin-right: 2%; width: 40%"></v-text-field>
          <v-select
            v-model="job_mid_cd"
            :items="this.jobMidCD"
            label="희망 직군을 고르시오"
            dense
            style="margin-right: 2%; width: 40%"></v-select>
          <v-select
            v-model="loc_cd"
            :items="this.locStates"
            label="희망 지역을 고르시오"
            dense
            style="width: 40%"></v-select>
        </v-col>
      </v-row>
      <a
        href="javascript:;"
        @click="fnSearch"
        class="btnSearch btn"
        style="
          background-color: #c7f9ff;
          margin-bottom: 10px;
          position: relative;
          left: 70%;
          font-weight: bolder;
          width: 20%;
        "
        >검색</a
      >
    </div>
    <div>
      <v-btn @click="DeleteAllJob">모두 삭제하려면 여기를 누르시오</v-btn>
      
      <v-btn @click="AddAllJob1">모두 저장하려면 여기를 누르시오</v-btn>
       <div>
      {{this.eventsKeyword}}
    </div>
      <p>{{this.events.data.jobs.job}}</p>
      <!-- <div v-for="item in this.events.data" :key="item.id">
        <p>{{item.job}}</p>
        <v-btn @click="AddAllJob(item.job)">Hello Click Me To Add Up Data</v-btn>
        <p>hi</p>
      </div> -->
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
    eventsJob: [],
    eventsKeyword:[],
    keyword: '개발',
    loc_cd: '',
    job_mid_cd: '',
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
    Numbers: 2,
    Item:[],
  }),
  mounted() {
    this.getEvents();
  },
  computed: {
    async AddAllJob2(item){
      for (let i = this.Numbers; i < this.Numbers+50; i++){ // 여기 범위는 내가 정해야함
        await db.collection('job').doc(i.toString()).set({
          title: item[i].position.title,
          url: item[i].url,
          name: item[i].company.detail.name,
          expire: item[i]['expiration-timestamp'],
          open: item[i]['opening-timestamp'],
          keyword: this.keyword,
        });
      }
      this.Numbers += 50;
    },
  },
  methods: {
    async getEvents() {
      this.$axios.get('api/announcements?keywords=' + this.keyword + '&job_type=1&loc_cd=101010&&count=50').then(res => {
        this.events = res;
      });
      // db에 저장된 걸 가져와서
      let snapshot = await db.collection('job').get();
      let events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      // 이벤트를 위에 있는 data()의 events에 넣어준다.
      this.eventsJob = events;
      this.Numbers = this.eventsJob[0].num;
      this.Item = this.events.data.jobs.job;

      snapshot = await db.collection('keyword').get();
      events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        events.push(appData);
      });
      // 이벤트를 위에 있는 data()의 events에 넣어준다.
      this.eventsKeyword = events;
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

    // async fnSearch() {
    //   this.job_mid_cd = this.job_mid_cd.substr(1, 2);
    //   if (this.job_mid_cd[1] == ')') {
    //     this.job_mid_cd = this.job_mid_cd.substr(0, 1);
    //   }
    //   this.$axios
    //     .get(
    //       'api/announcements?keywords=' +
    //         this.keyword +
    //         '&job_type=1&count=50&edu_lv=0&loc_cd=' +
    //         this.loc_cd.substr(3, 6) +
    //         '&job_mid_cd=' +
    //         this.job_mid_cd +
    //         ''
    //     )
    //     .then(res => {
    //       this.events = res;
    //     });
    //   await db.collection('keyword').add({
    //     name: this.keyword,
    //   });
    //   console.log(this.keyword);
    // },
    async fnSearch() {
      this.job_mid_cd = this.job_mid_cd.substr(1, 2);
      if (this.job_mid_cd[1] == ')') {
        this.job_mid_cd = this.job_mid_cd.substr(0, 1);
      }
      this.$axios
        .get(
          'api/announcements?keywords=' +
            this.keyword +
            '&loc_cd=' +
            this.loc_cd.substr(3, 6) +
            '&count=50&job_mid_cd=' +
            this.job_mid_cd +
            ''
        )
        .then(res => {
          this.events = res;
        });
      let snapshot = await db.collection('job').get();
      let events = [];
      // 모든 data에 대하여
      snapshot.forEach(doc => {
        let appData = doc.data();
        // events에 넣어주고
        appData.id = doc.id;
        if(this.keyword == appData.keyword){
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
      await db.collection('keyword').add({
        name: this.keyword,
      });
    },
    

    changeColor() {
      this.$('li').click(function () {
        $('li').removeClass();
        $(this).addClass('on');
      });
    },
    async AddToDataBase(item){
      
      await db.collection('job').doc(this.Numbers.toString()).set({
        title: item.position.title,
        url: item.url,
        name: item.company.detail.name,
        expire: item['expiration-timestamp'],
        open: item['opening-timestamp'],
        keyword: this.keyword,
      });
      this.Numbers += 1;
      
      await db.collection('job').doc("1").update({
        num: this.Numbers,
      });
      this.getEvents();
    },
    async DeleteAllJob(){
      for (let i = 51; i < 101; i++){ // 여기 범위는 내가 정해야함
        await db.collection('job').doc(i.toString()).delete();
      }
    },
    async AddAllJob1(){
      let items = this.Item;
      for (let i = 0; i < 50; i++){ // 여기 범위는 내가 정해야함
        await db.collection('job').doc((i+this.Numbers).toString()).set({
          title: items[i].position.title,
          url: items[i].url,
          name: items[i].company.detail.name,
          expire: items[i]['expiration-timestamp'],
          open: items[i]['opening-timestamp'],
          keyword: this.keyword,
        });
      }
      this.Numbers += 50;
      await db.collection('job').doc("1").update({
        num: this.Numbers,
      });
      this.getEvents();
    },
  },
};
</script>

<style lang="scss">
.header-wrap {
  font-weight: bold;
  .menu1 {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    font-size: 1.3em;
    margin-top: 10px;
  }
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
