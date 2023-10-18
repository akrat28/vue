<template>
    <div >
      <h1>这是dttlaa组件</h1>
      <chlid :msg="msg" @send="send"></chlid>
    </div>
  </template>

  <script>
  import { defineComponent, ref} from 'vue';
  import chlid from "../components/child/Child.vue"

  export default defineComponent({
    name:"dttall",
    components:{
      chlid
    },
    setup(){
      let msg = ref('这是父组件的数据')
      let send = (val) =>{
        console.log(val)
      }
      return{
        msg,
        send,
      }
    }
  })
</script>



  