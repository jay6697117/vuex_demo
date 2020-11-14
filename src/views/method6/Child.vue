<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      msg: '我是child msg'
    };
  },
  mounted() {
    // $parent 指向当前组件树的父实例。如果当前实例没有父实例，此实例将会是其自己。
    //子组件拿父组件，父组件只有一个
    console.log('this.$parent :>> ', this.$parent);
    console.log(this.$parent.msg);
  }
};
</script>
