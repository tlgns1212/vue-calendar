<template>
  <div>
    <div class="header-wrap">
      <ul class="menu1" style="list-style: none">
        <li>
          <router-link
            to="/Announce"
            style="
              text-decoration: none;
              box-sizing: border-box;
              padding: 10px 20px;
              background-color: #c7f9ff;
              display: table-cell;
              font-size: 1.1rem;
              border-radius: 10px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            ">
            채용공고 검색</router-link
          >
        </li>
        <p style="width: 5%"></p>
        <li>
          <router-link
            to="/CustomAnnoun"
            style="
              text-decoration: none;
              box-sizing: border-box;
              padding: 10px 20px;
              background-color: #c7f9ff;
              display: table-cell;
              font-size: 1.1rem;
              border-radius: 10px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            ">
            맞춤 채용공고</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-wrap {
  font-weight: bold;
  .menu1 {
    display: flex;
    justify-content: center;
    padding: 0 20px;
    font-size: 1.3em;
    margin-top: 10px;
  }
}
</style>
