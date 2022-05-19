import axios from 'axios';

function GetAnnounceList() {
  return axios.get('api/announcements?keywords=개발&job_type=1&edu_lv=0&loc_cd=101010&job_mid_cd=2');
}
export { GetAnnounceList };
