import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_TASK, DONE_TASK, DELETE_TASK } from './mutation-types';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [
      {is_do: false, title: 'タスク1'},
      {is_do: true, title: 'タスク2'},
      {is_do: false, title: 'タスク3'}
    ]
  },
  actions: {
    [ADD_TASK] ({ commit }, title ) {
      const newItem = {
        title,
        is_do:false,
      };
      commit( ADD_TASK,{ data: newItem });
    },
    [DONE_TASK] ({ commit }, item ) {
      commit( DONE_TASK, { data: item });
    },
    [DELETE_TASK] ({ commit }, item ) {
      commit( DELETE_TASK, { data: item });
    }
  },
  mutations: {
    [ADD_TASK] ( state, payload ) {
      state.items.push(payload.data)
    },
    [DONE_TASK] (state, payload) {
      const index = state.items.indexOf(payload.data);
      state.items[index].is_do = !payload.data.is_do;
    },
    [DELETE_TASK] (state, payload) {
      const index = state.items.indexOf(payload.data);
      state.items.splice(index, 1);
    }
  }
});

export default store;
