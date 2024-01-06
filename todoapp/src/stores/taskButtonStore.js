import { defineStore } from 'pinia'

export const useTaskButtonStore = defineStore('taskButtonStore', {
    state: () => ({
        updateButton: false,
    }),
    getters: {
        getIsTaskButtonVisible() {
            return this.updateButton
        },
    },
    actions: {
        setIsTaskButtonVisible() {
            this.updateButton = !this.updateButton
        },
    },
})