<template>
  <div>
    {{ msg }}
    <child @changParent="changData" />
  </div>
</template>

<script>
import Child from './Child';
export default {
  data() {
    return {
      msg: 0,
    };
  },
  methods: {
    changData(value) {
      this.msg = value;
    },
  },
  components: {
    Child,
  },
};
</script>
