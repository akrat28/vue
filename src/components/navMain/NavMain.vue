<template>
    <div v-for="(item,index) in list" :key="index">
        <div  class="item">
            <input type="checkbox" v-model="item.components">
            {{ item.title }}
            <button class="del" @click="del(item,index)">删除</button>
        </div>
    </div>
</template>

<script>
   import { defineComponent,ref} from 'vue';
    export default defineComponent({
        name:'navMain',
        setup(){
            let list = ref([
                {
                    title:'吃陈石磊',
                    components:false
                },

                {
                    title:'吃蒋前程',
                    components:false
                },

                {
                    title:'吃吃吃',
                    components:false
                },
                
            ])
                //删除任务
            let del = (item,index) =>{
                console.log(item)
                console.log(index)
            }
            return{
                list,
                del
            }
        }
    })
</script>

<style scoped lang="scss"> 
    .item{
        height: 35px;
        width: 160px;
        line-height: 35px;
        position: relative;
        cursor: pointer;
        button{
            position: absolute;
            right: 20px;
            top: 6px;
            display: none;
            z-index: 99;
        }
        &:hover{
            background-color: #ddd;
            button{
                display: block;
            }

        }
    }
</style>