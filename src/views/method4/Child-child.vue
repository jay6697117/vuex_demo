<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$attrs);
    console.log(this.$listeners);
    this.$listeners.showAttrs();
  }
};
</script>

<style></style>
