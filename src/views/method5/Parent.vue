<template>
  <div>
    <child />
  </div>
</template>

<script>
import Child from "./Child";
export default {
  provide: {
    msg:  "parent.msg",
  },
  components: {
    Child,
  },
};
</script>
