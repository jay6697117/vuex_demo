<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'Home',
  computed: {
    ...mapState({
      appState: (state) => state.app.num,
    }),
    ...mapGetters(['stateApp']),
  },
  methods: {
    ...mapMutations('app', ['CHANGE_NUM']),
    ...mapActions('app', ['async_change_num']),
  },
};
</script>
