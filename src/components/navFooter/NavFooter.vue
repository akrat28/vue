<template>
    <div class="container">
        <div>已完成{{ isComplete }} / 全部{{ list.length }}</div>
        <div v-if="isComplete > 0" class="btn"><button @click="clear">清除已完成</button></div>
    </div>
</template>

<script>
    import { defineComponent, ref, computed ,ctx} from 'vue';
    export default defineComponent({
        name:'navfooter',
        props:{
            list:{
                type:Array,
                required:true,
            }
        },
        setup(props,ctx){
            let isComplete = computed(()=>{
                                // filter 用于创建一个新数组，其中包含满足指定条件的原数组中的元素
                let arr = props.list.filter(item =>{
                    return item.components
                })
                return arr.length
            })
            //清除已完成
            let clear =()=>{
                //过滤未完成的
                let arr = props.list.filter(item =>{
                    return item.components ===false
                })
                ctx.emit('clear',arr)
                // console.log("hhhhh")
            }
            return{
                isComplete,
                clear
            }
        },
    })
</script>

<style scoped lang="scss"> 
    .container{
        display: flex;
        align-items: center;
    }
    .btn{
        margin-left: 10px;
    }
</style>