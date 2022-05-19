<template>
  <header>
    <h1>
      <router-link to="/"><img alt="Vue logo" src="@/assets/logo.png" width="80" /></router-link>
    </h1>
    <div class="header-wrap">
      <ul class="menu">
        <li><router-link to="/Home">Home</router-link></li>
        <li><router-link to="/Announce">채용공고</router-link></li>
        <li><router-link to="/PublicAnnounce">연습화면</router-link></li>
        <li><router-link to="/MyPage">MyPage</router-link></li>
      </ul>
      <ul class="login">
        <li><router-link to="/Login">Login</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  text-align: center;
  position: relative;
  height: 120px;
  border-bottom: 1px solid #35495e;
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
  top: 20px;
  left: 20%;
  list-style: none;
}
header ul.menu li {
  float: left;
  padding: 10px 20px;
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}
</style>
