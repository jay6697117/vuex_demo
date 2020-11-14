<template>
  <div>
    <child v-bind="{ a, b, c }" v-on="{ changeA, changeB }" />
  </div>
</template>

<script>
import Child from './Child';
export default {
  data() {
    return {
      a: '111',
      b: '222',
      c: '333'
    };
  },
  methods: {
    changeA(value) {
      this.a = value;
    },
    changeB(value) {
      this.b = value;
    }
  },
  components: {
    Child
  }
};
</script>
