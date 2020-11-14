<template>
  <div>
    <button @click="changeValue">child.btn</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      num: 1
    }
  },
  methods:{
    changeValue(){
      this.num++
      this.$emit('changParent',this.num)
    }
  }
}
</script>
