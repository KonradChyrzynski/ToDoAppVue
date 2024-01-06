import { defineStore } from 'pinia'

export const useTaskIdStore = defineStore('taskIdStore', {
  state: () => ({
    taskId: 3,
  }),
  actions: {
    increment() {
      this.taskId++
    }
  },
})