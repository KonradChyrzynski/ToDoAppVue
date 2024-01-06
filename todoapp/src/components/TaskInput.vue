<template>
    <div class="task-input">
        <input type="text" v-model="inputModel" />
        <button v-if="!updateButtonStore.updateButton" @click="addTask">Add Task</button>
        <button v-if="updateButtonStore.updateButton" @click="updateTask">Update Task</button>
    </div>
</template>

<script>
import { useTaskButtonStore } from '@/stores/taskButtonStore'
import { useTaskIdStore } from '@/stores/taskIdStore'
export default {
    name: 'TaskInput',
    setup() {
        const updateButtonStore = useTaskButtonStore()
        const taskIdStore = useTaskIdStore()
        return {
            updateButtonStore,
            taskIdStore
        }
    },
    props: ['modelValue', 'id'],
    computed: {
        inputModel: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    },
    methods: {
        addTask() {
            this.taskIdStore.increment()
            this.$emit('add-task', { id: this.taskIdStore.taskId, value: this.inputModel, complete: false });
            this.task = '';
        },
        updateTask() {
            this.updateButtonStore.setIsTaskButtonVisible()
            this.$emit('task-updated', this.inputModel);
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