<template>
    <div v-if="show">
        <p :class="{ 'complete-task': task.complete }">{{ task.value }}</p>
        <button @click="removeTask"><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button @click="changeTaskState">
            <i v-if="!task.complete" class="fa-solid fa-check"></i>
            <i v-if="task.complete" class="fa-solid fa-x"></i>
        </button>
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

/* Dostosowanie rozmiaru czcionki dla różnych urządzeń */

/* Małe urządzenia (landscape phones, 576px i więcej) */
@media (min-width: 576px) {
    p {
        font-size: 18px;
        /* Dostosowanie rozmiaru tekstu na małych ekranach */
    }

    button {
        font-size: 18px;
        /* Dostosowanie rozmiaru przycisków na małych ekranach */
    }
}

/* Średnie urządzenia (tablety, 768px i więcej) */
@media (min-width: 768px) {
    p {
        font-size: 20px;
        /* Dostosowanie rozmiaru tekstu na tabletach */
    }

    button {
        font-size: 20px;
        /* Dostosowanie rozmiaru przycisków na tabletach */
    }
}

/* Duże urządzenia (komputery, 992px i więcej) */
@media (min-width: 992px) {
    p {
        font-size: 22px;
        /* Dostosowanie rozmiaru tekstu na dużych ekranach */
    }

    button {
        font-size: 22px;
        /* Dostosowanie rozmiaru przycisków na dużych ekranach */
    }
}

/* Bardzo duże urządzenia (duże komputery, 1200px i więcej) */
@media (min-width: 1200px) {
    p {
        font-size: 24px;
        /* Dostosowanie rozmiaru tekstu na bardzo dużych ekranach */
    }

    button {
        font-size: 24px;
        /* Dostosowanie rozmiaru przycisków na bardzo dużych ekranach */
    }
}</style>