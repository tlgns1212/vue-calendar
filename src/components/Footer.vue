<template>
  <header>
    <h1>
      <router-link to="/"
        ><img alt="Vue logo" src="@/assets/nabe.png" width="90vm;" style="position: absolute; top: 6px; right: -3px"
      /></router-link>
    </h1>
    <div class="header-wrap">
      <ul class="login" style="list-style: none"></ul>
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
  position: fixed;
  top: 1090px;
  height: 100px;
  border-bottom: 1px solid #35495e;
  background-color: #29ddf2;
  bottom: 0;
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
  font-size: 2.3vh;
  font-weight: bolder;
  width: 23%;
  color: aliceblue;

  border-radius: 15px;
  border-width: 1px;
}

a {
  text-decoration: none;

  font-weight: bolder;
}
</style>
