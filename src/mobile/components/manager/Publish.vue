<template>
    <div v-bind:style="{minHeight:clientHeight + 'px'}" class="approveBox">
        <mt-search   
            autofocus   
            v-model="value"   
            :result="filterResult" class="publishSearch">  
        </mt-search> 
        <mt-checklist  
            title="选择消费方式"   
            v-model="val"   
            :options="options">  
        </mt-checklist>
    </div>
</template>
<style scoped>
    .approveBox {
        background-color: #f5f5f5;
    }
</style>
<script>
import { Toast } from 'mint-ui';
export default {
    components:{
        
    },
    data () {
        return {
            clientHeight: document.documentElement.clientHeight,
            value: '',  
            // 默认数据  
            defaultResult: [  
                'Apple',  
                'Banana',  
                'Orange',  
                'Durian',  
                'Lemon',  
                'Peach',  
                'Cherry',  
                'Berry',  
                'Core',  
                'Fig',  
                'Haw',  
                'Melon',  
                'Plum',  
                'Pear',  
                'Peanut',  
                'Other'  
            ],
            val:[],  
            //checklist设置  
            options : [{  
            label: '选项A',  
            value: 'A',
            },  
            {  
            label: '选项B',  
            value: 'B',
            },  
            {  
            label: '选项C',  
            value: 'C'  
            },  
            {  
            label: '选项D',  
            value: 'D'  
            }] 
        }
    },
    methods:{
        filterResult() {  
          return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));  
        }
    },
    mounted() {
        
    }
}
</script>