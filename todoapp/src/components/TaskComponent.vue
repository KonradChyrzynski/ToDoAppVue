<template>
    <div>
        <p :class="{ 'complete-task': task.complete }">{{ task.value }}</p>
        <button @click="removeTask">Remove Task</button>
        <button @click="changeTaskState"><i class="fa-solid fa-check"></i></button>
    </div>
</template>

<script>
export default {
    name: 'TaskComponent',
    props: {
        task: {
            type: String,
            required: true
        }
    },
    methods: {
        removeTask() {
            this.$emit('remove-task', this.task);
        },
        changeTaskState() {
            this.$emit('change-task-state', this.task);
        },
        updateTask() {
            this.$emit('update-task', this.task);
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