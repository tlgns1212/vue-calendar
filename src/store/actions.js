import { GetAnnounceList } from '../api/index.js';

export default {
  FETCH_ANNOUNCELIST({ commit }) {
    return GetAnnounceList().then(res => commit('SET_ANNOUNCELIST', res.data));
  },
};
