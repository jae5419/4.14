<template>
  <div class="about">
    <h1>글을 작성하는 공간입니다</h1>
    <input type="text" v-model="text.title">
    <br>
    <textarea name="" id="" cols="30" rows="10" v-model="text.main"></textarea>
    <br>
    <button @click="send">완료</button>
  </div>
</template>

<script>
export default {
  name: 'WriteView',
  data: function() {
    return {
      text: {title: "", main: ""}
    }
  },
  methods: {
    send: function() {
      this.$store.commit('addLetter', this.text)
      this.text.title="";
      this.text.main="";
    }
  }
}
</script>
