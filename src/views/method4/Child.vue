<template>
  <div>
    <child-child v-bind:a="a" v-bind="$attrs" v-on="$listeners" @showAttrs="logAttrs" />
    <!-- <child-child v-bind="$attrs" v-on="$listeners" v-on:showAttrs="logAttrs" /> -->
  </div>
</template>

<script>
import ChildChild from './Child-child';
export default {
  components: {
    ChildChild
  },
  methods: {
    logAttrs() {
      console.log(this.$attrs);
    }
  },
  /**
   * Tip：Vue组件属性的 inheritAttrs。Vue官网对于inheritAttrs的属性解释：如果你不希望组件的根元素继承* 特性，你可以在组件的选项中设置 inheritAttrs: false, 该属性默认为true.
   */
  inheritAttrs: false,
  props: ['a'],
  created() {
    console.log('this.a :>> ', this.a);
    console.log(this.$attrs);
    console.log(this.$listeners);
  }
};
</script>
