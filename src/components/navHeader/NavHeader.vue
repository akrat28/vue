<template>
    <div>
        <!-- @keydown 键盘绑定事件 -->
        <input placeholder="请输入任务名称" v-model="value" @keydown.enter="enter"> 
    </div>
</template>

<script>
import { defineComponent,ref} from 'vue';
    export default defineComponent({
        name:'navHeader',
        setup(props,ctx){
            let value = ref('')

            let enter = () =>{
                // 把输入框的值传递给父组件
                ctx.emit('add',value.value)
                //传递之后清空输入框
                value.value = ''
            }

            return{
                value,
                enter
            }
        },
    })
</script>

<style scoped lang="scss"> 
    input{
        margin-bottom: 10px;
    }
</style>