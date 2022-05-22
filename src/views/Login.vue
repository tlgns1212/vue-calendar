<template>
  <div class="loginPage">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col"></div>
        <div class="col">
          <div id="logo">나만의 비서 NAVI</div>
          <div class="mt-4">이메일</div>
          <input type="email" id="email" class="form-control loginInput mt-2" placeholder="이메일을 입력해주세요" />
          <div class="mt-2">Password</div>
          <input type="password" id="pwd" class="form-control loginInput mt-2" placeholder="비밀번호를 입력해주세요" />
          <input
            type="button"
            value="로그인"
            class="btn btn-success btn btn-default btn-sm mt-3"
            @click="this.tryLogin" />

          <br />
          <a href="/findEmailPage" style="margin-right: 30px"><span>이메일 찾기</span></a>
          <a href="/findPwdPage"><span>비밀번호 찾기</span></a>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginPage',
  data() {
    return {
      child: null,
    };
  },
  methods: {
    tryLogin() {
      var email = document.getElementById('email').ariaValueMax;
      var pwd = document.getElementById('pwd').ariaValueMax;
      var url = 'http://localhost:8081/Login';
      var data = JSON.stringify({
        email: email,
        pwd: pwd,
      });
      module.requestToPostServer2(url, data).then(result => {
        console.log(result.flag + ' ss');
        if (result.flag) {
          opener.window.location.reload();
          self.close();
        } else {
          alert(result.message);
        }
      });
    },
  },
};
</script>

<style>
.findButton {
  margin-top: 20px;
}
#logo {
  text-align: center;
  margin-top: 50px;
  color: aliceblue;
  background-color: #f57c18;
  font: italic 3em 'Fira Sans';
}

.loginInput {
  width: 300px;
  height: 30px;
}
</style>
