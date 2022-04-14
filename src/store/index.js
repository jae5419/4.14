import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    letters: [
      {id: 1, title: "첫번째 제목", main: "첫번째 작성된 내용입니다", hits: 0},
      {id: 2, title: "두번째", main: "두번째 작성된 내용입니다", hits: 0}
    ]
  },
  getters: {
  },
  mutations: {
    addLetter: function(state, text) {
      const temp={id: state.letters.length+1, title: text.title, main: text.main, hits: 0};
      return state.letters.push(temp);
    },
    addHit: function(state, i) {
      return state.letters[i-1].hits++;
    }
  },
  actions: {
  },
  modules: {
  }
})
