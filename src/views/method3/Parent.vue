<template>
  <div>
    <div>父组件msg值: {{ msg }}</div>
    <div style="border:1px solid red;width:50%;margin:10px auto;"></div>
    <child />
  </div>
</template>

<script>
import eventBus from './events';
import Child from './Child';
export default {
  data() {
    return {
      msg: 0
    };
  },
  components: {
    Child
  },
  created() {
    eventBus.$on('getValue', data => {
      console.log('eventBus data :>> ', data);
      this.msg = data * 2;
    });
  }
};
</script>
