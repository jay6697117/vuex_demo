<template>
  <div>
      <child :msg="msg"/>
  </div>
</template>

<script>
import Child from './Child'
export default {
    data(){
        return{
            msg: 'parent.msg'
        }
    },
    components: {
        Child
    }
}
</script>