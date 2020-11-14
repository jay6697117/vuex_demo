<template>
  <div>
    <child ref="child" />
  </div>
</template>

<script>
import Child from './Child';
export default {
  data() {
    return {
      msg: '我是parent msg'
    };
  },
  components: {
    Child
  },
  mounted() {
    //父组件中通过ref拿到子组件，需要调用ref注册的属性名才能拿到组件实例
    console.log('this.$refs :>> ', this.$refs);
    //父组件拿子组件，子组件可能有多个
    console.log('this.$children :>> ', this.$children);
    console.log('this.$refs.child.msg :>> ', this.$refs.child.msg);
    console.log('this.$children[0].msg :>> ', this.$children[0].msg);
  }
};
</script>
