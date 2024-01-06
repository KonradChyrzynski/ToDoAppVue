<template>
    <div class="task-input">
        <input type="text" v-model="task" />
        <button @click="addTask">Add Task</button>
    </div>
</template>

<script>
export default {
    name: 'TaskInput',
    data() {
        return {
            task: ''
        }
    },
    // props: ['modelValue'],
    // computed: {
    //     inputModel: {
    //         get() {
    //             return this.modelValue
    //         },
    //         set(value) {
    //             this.$emit('update:modelValue', value)
    //         }
    //     }
    // },
    methods: {
        addTask() {
            this.$emit('add-task', this.task);
            this.task = '';
        }
    }
}
</script>

<style scoped>
.task-input {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.task-input input {
    width: 200px;
    height: 35px;
    padding: 0 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.task-input button {
    margin-left: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.task-input button:hover {
    background-color: #45a049;
    /* Darker green */
}
</style>