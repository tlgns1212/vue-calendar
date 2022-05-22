<template>
  <header>
    <h1>
      <router-link to="/"
        ><img alt="Vue logo" src="@/assets/nabe.png" width="90vm;" style="position: absolute; top: 6px; right: -3px"
      /></router-link>
    </h1>
    <div class="header-wrap">
      <ul class="menu">
        <li><router-link to="/Home">Home</router-link></li>
        <li><router-link to="/Announce">채용공고</router-link></li>
        <li><router-link to="/PublicAnnounce">연습화면</router-link></li>
        <li><router-link to="/MyPage">MyPage</router-link></li>
      </ul>
      <ul class="login" style="list-style: none">
        <li>
          <router-link
            to="/Login"
            class="btn1 btn-warning pull-right"
            style="
              border-radius: 15px;
              border-width: 1px;
              border-color: black;
              background-color: #26b7ff;
              color: aliceblue;
              font-size: 2vh;
              position: absolute;
              left: 92%;
              top: 5px;
            "
            >Login</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  width: 100%;
  text-align: center;
  position: relative;
  top: -15px;
  height: 100px;
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
  margin-right: 10px;
  padding: 10px 10px;
  list-style: none;
  font-size: 2vh;
  font-weight: bolder;
  width: 23%;
  color: aliceblue;
  background-color: #26b7ff;
  border-radius: 15px;
  border-width: 1px;
}

a {
  text-decoration: none;

  font-weight: bolder;
}
</style>