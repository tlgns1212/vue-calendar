import axios from 'axios';

function GetAnnounceList() {
  return axios.get('api/announcements?keywords=개발&job_type=1&edu_lv=0&loc_cd=101010&job_mid_cd=2');
}
export { GetAnnounceList };

//http://uocnas.kut.ac.kr:8081/api/announcements?keywords=%EA%B0%9C%EB%B0%9C&job_type=1&edu_lv=0&loc_cd=101010&job_mid_cd=2
