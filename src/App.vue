<template>
  <div id="app">
    <div id="nav">
      <router-link to="/method1">method1</router-link>
      <router-link to="/method2">method2</router-link>
      <router-link to="/method3">method3</router-link>
      <router-link to="/method4">method4</router-link>
      <router-link to="/method5">method5</router-link>
      <router-link to="/method6">method6</router-link>
    </div>
    <hr />
    <router-view />
    <hr />
    <div>{{ $customStore.state.customNum }}</div>
    <button @click="changeNum">customBtn</button>
  </div>
</template>
<script>
export default {
  methods: {
    changeNum() {
      this.$customStore.commit('CUSTOM_CHANGE', {
        num: this.$customStore.state.customNum + 1
      });
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  width: 60vw;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
