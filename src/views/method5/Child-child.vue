<template>
  <div>msg: {{msg}}</div>
</template>

<script>
export default {
  inject: ["msg"],
  created() {
    console.log('this.msg :>> ', this.msg);
  },
};
</script>

<style></style>
