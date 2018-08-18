<template>
  <li :class="{'is-do': item.is_do }" @click="DONE_TASK(item)">{{ item.title }}<button @click.stop="DELETE_TASK(item)">削除</button></li>
</template>
<script>
  import { mapActions } from 'vuex';
  import * as types from './store/mutation-types';
  export default {
    props:{ item: Object },
    methods: {
      ...mapActions([
        types.DONE_TASK,
        types.DELETE_TASK
      ])
    }
  }
</script>
<style lang="scss">
  li {
    cursor: pointer;
  }
  li.is-do {
    text-decoration: line-through;
  }
</style>
