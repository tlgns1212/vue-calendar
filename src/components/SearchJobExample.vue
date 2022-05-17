<template>
    <div>
		<h2>게시판 리스트</h2>

		<div class="searchWrap">
			<input type="text" v-model="this.keyword" /><a  class="btnSearch btn">검색</a>
		</div>

		<div class="listWrap">
			<table class="tbList">
				<colgroup>
					<col width="6%" />
					<col width="*" />
					<col width="10%" />
					<col width="15%" />
				</colgroup>
				<tr>
					<th>no</th>
					<th>제목</th>
					<th>아이디</th>
					<th>날짜</th>
				</tr>
				<tr v-for="item in this.events" :key="item">
					<td>{{item}}</td>
				</tr>
				<tr v-if="1 == 0">
					<td colspan="4">데이터가 없습니다.</td>
				</tr>
			</table>
		</div>

		<div class="btnRightWrap">
			<a  class="btn">등록</a>
		</div>
	</div>
</template>

<script>
import { db } from "@/main";

export default {
  data: () => ({
    events: [],
    keyword: "",
  }),
  mounted() {
   this.getEvents();
  },
  methods: {
   async getEvents() {
      this.$axios
        .get(
          "api/0/user-targets"
        )
        .then((res) => {
          this.events = res;
        });
   }
}}
</script>
<style scoped>
	.searchWrap{border:1px solid #888; border-radius:5px; text-align:center; padding:20px 0; margin-bottom:40px;}
	.searchWrap input{width:60%; height:36px; border-radius:3px; padding:0 10px; border:1px solid #888;}
	.searchWrap .btnSearch{display:inline-block; margin-left:10px;}
	.tbList th{border-top:1px solid #888;}
	.tbList th, .tbList td{border-bottom:1px solid #eee; padding:5px 0;}
	.tbList td.txt_left{text-align:left;}
	.btnRightWrap{text-align:right; margin:10px 0 0 0;}

	.pagination{margin:20px 0 0 0; text-align:center;}
	.first, .prev, .next, .last{border:1px solid #666; margin:0 5px;}
	.pagination span{display:inline-block; padding:0 5px; color:#333;}
	.pagination a{text-decoration:none; display:inline-blcok; padding:0 5px; color:#666;}
</style>