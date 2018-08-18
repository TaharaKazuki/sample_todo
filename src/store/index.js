import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

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
    [types.ADD_TASK] ({ commit }, title ) {
      const newItem = {
        title,
        is_do:false,
      };
      commit( types.ADD_TASK,{ data: newItem });
    },
    [types.DONE_TASK] ({ commit }, item ) {
      commit( types.DONE_TASK, { data: item });
    },
    [types.DELETE_TASK] ({ commit }, item ) {
      commit( types.DELETE_TASK, { data: item });
    }
  },
  mutations: {
    [types.ADD_TASK] ( state, payload ) {
      state.items.push(payload.data)
    },
    [types.DONE_TASK] (state, payload) {
      const index = state.items.indexOf(payload.data);
      state.items[index].is_do = !payload.data.is_do;
    },
    [types.DELETE_TASK] (state, payload) {
      const index = state.items.indexOf(payload.data);
      state.items.splice(index, 1);
    }
  }
});

export default store;
