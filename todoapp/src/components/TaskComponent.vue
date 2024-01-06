<template>
    <div v-if="show">
        <p :class="{ 'complete-task': task.complete }">{{ task.value }}</p>
        <button @click="removeTask"><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button @click="changeTaskState"><i class="fa-solid fa-check"></i></button>
        <button @click="updateTask"><i class="fa-solid fa-edit"></i></button>
    </div>
</template>

<script>
import { useTaskButtonStore } from '@/stores/taskButtonStore'
export default {
    name: 'TaskComponent',
    setup() {
        const updateButtonStore = useTaskButtonStore()
        return {
            updateButtonStore
        }
    },
    props: ['task', 'selected'],
    methods: {
        removeTask() {
            this.$emit('remove-task', this.task);
        },
        changeTaskState() {
            this.$emit('change-task-state', this.task);
        },
        updateTask() {
            if (!this.updateButtonStore.updateButton) {
                this.updateButtonStore.setIsTaskButtonVisible()
            }
            this.$emit('update-task', this.task);
        }
    },
    computed: {
        show() {
            console.log(this.selected)
            return this.selected === 'all' || (this.selected === 'complete' && this.task.complete) || (this.selected === 'incomplete' && !this.task.complete);
        }
    }
}
</script>
<style scoped>
p {
    font-size: 16px;
    margin: 0;
}

.complete-task {
    text-decoration: line-through;
}

button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
    p {
        font-size: 18px;
    }

    button {
        font-size: 18px;
    }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    p {
        font-size: 20px;
    }

    button {
        font-size: 20px;
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    p {
        font-size: 22px;
    }

    button {
        font-size: 22px;
    }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
    p {
        font-size: 24px;
    }

    button {
        font-size: 24px;
    }
}
</style>