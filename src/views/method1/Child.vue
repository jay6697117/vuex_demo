<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  // props:['msg']
  props: {
    msg: {
      required: true,
      type: String,
      default() {
        return "123";
      },
    },
  },
};
</script>
