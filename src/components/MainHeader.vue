<template>
  <header>
    <h1>
      <router-link to="/"
        ><img alt="Vue logo" src="@/assets/nabe.png" width="90vm;" style="position: relative; top: 25px; right: 80px"
      /></router-link>
    </h1>
    <div
      class="user_info"
      style="
        position: relative;
        top: 25px;
        right: 3%;
        text-align: right;
        color: aliceblue;
        font-weight: bolder;
        font-size: 2.2vw;
        margin: none;
        margin-top: 10px;
      "
      v-for="item in this.events"
      :key="item.id">
      <span> 김시훈님 </span>
      <ul>
        마일리지 :
        {{
          item.num
        }}
      </ul>
    </div>

    <div class="header-wrap">
      <ul class="menu" @click="PointGoGo">
        <li><router-link to="/Home">Home</router-link></li>
        <li><router-link to="/Announce">Announce</router-link></li>
        <li><router-link to="/public">Store</router-link></li>
        <li><router-link to="/MyPage">MyPage</router-link></li>
      </ul>

      <ul class="login" style="list-style: none"></ul>
    </div>
  </header>
</template>

<script>
import { db } from '@/main';

export default {
  data: () => ({
    events: [],
    myNum: 0,
  }),
  mounted() {
    this.getEvents();
  },
  methods: {
    // 여기가 이벤트를 이벤트로 받아주는곳
    async getEvents() {
      // db에 저장된 걸 가져와서
      let snapshot = await db.collection('point').get();
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
    PointGoGo() {
      this.getEvents();
      console.log(111111);
    },
  },
};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  text-align: center;
  position: relative;
  top: -16px;
  height: 120px;
  border-bottom: 1px solid #35495e;
  background-color: #29ddf2;
}
header h1 {
  position: absolute;
  top: 0;
  left: 100px;
}
header ul.menu:after {
  display: block;
  clear: both;
  content: '';
}
header ul.menu {
  position: absolute;
  top: 30px;
  left: 13%;
  list-style: none;
  width: 80%;
}
header ul.menu li a {
  float: left;
  margin-top: 15px;
  margin-left: 2px;

  font-size: 2.9vw;
  font-weight: bolder;
  width: 20%;
  color: aliceblue;
  border-radius: 15px;
  border-width: 1px;
}

a {
  text-decoration: none;

  font-weight: bolder;
}
.user_info {
  position: relative;
  top: 100px;
}
</style>
