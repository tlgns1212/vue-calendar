import Vue from 'vue';
import Vuex from 'vuex';
import actions from '../store/actions.js';
import getters from '../store/getters.js';
import mutations from '../store/mutations.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    AnnounceList: [],
    headerText: '마이페이지',
  },
  getters,
  mutations,
  actions,
});

/*
Vuex : 무수히 많은 데이터들을 관리하기위한 모듈

-Flux란? -> 데이터를 단방향으로만 처리.
MVC패턴의 복잡한 데이터 흐름 문제를 해결하는 개발 패턴
1. action : 화면에서 발생하는 이벤트 또는 사용자의 입력
2. dispatcher : 데이터를 변경하는 방법, 메소드
3. store : 화면에 표시할 데이터.
4. view 사용자에게 비춰지는 화면.

** Vuex 기술요소
1. state : 여러 컴포넌트에 공유되는 데이터 data
2. getters : 연산된 stste 값을 접근하는 속성 computed
3. mutations : state 값을 변경하는 이벤트 메소드 methods
4. actions : 비동기 처리 로직을 선언하는 메소드 aysnc methods.
*/
