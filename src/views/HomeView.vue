<template>
  <div class="home">
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>클릭횟수(조회수)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="letter in $store.state.letters" :key="letter.id" @click="routing(letter.id)">
          <td>{{ letter.id }}</td>
          <td>{{ letter.title }}</td>
          <td>{{ letter.hits }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    routing: function(id) {
      this.$store.commit('addHit', id);
      this.$router.push({ name: 'board', params: { id: id }});
    }
  }
}
</script>
