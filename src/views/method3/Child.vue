<template>
  <div>
    <button @click="changeData">child.btn</button>
  </div>
</template>

<script>
import eventBus from "./events";
export default {
  data(){
    return {
      num: 0
    }
  },
  methods:{
    changeData(){
      this.num++
      eventBus.$emit('getValue', this.num)
    }
  }
}
</script>
