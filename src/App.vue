<template>
  <div id="app">
    <ul>
      <item v-for="item in items" :item="item"></item>
    </ul>
    <div>
      <input type="text" v-model="inputTitle">
      <button @click="ADD_TASK(inputTitle)">追加</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import { ADD_TASK } from './store/mutation-types';
  import Item from './Item.vue';

  export default {
    name: 'app',
    components: { Item },
    data() {
      return {
        inputTitle: ''
      }
    },
    computed: {
      ...mapState(['items'])
    },
    methods: {
      ...mapActions([
        ADD_TASK
      ])
    }
  }
</script>

<style lang="scss">

</style>
