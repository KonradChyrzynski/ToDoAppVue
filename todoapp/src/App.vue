<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TaskInput />
  <select>
    <option value="all">All</option>
    <option value="complete">Complete</option>
    <option value="incomplete">Incomplete</option>
  </select>
  <TaskComponent @change-task-state="onChangeTaskState" @remove-task="onRemoveTask" v-for="task in tasks" :key="task"
    :task="task" />
</template>
<script>
import TaskInput from './components/TaskInput.vue'
import TaskComponent from './components/TaskComponent.vue'

export default {
  name: 'App',
  components: {
    TaskInput,
    TaskComponent
  },
  data() {
    return {
      tasks: [
        { id: 1, value: 'Learn Vue.js', complete: true },
        { id: 2, value: 'Learn about single-file components', complete: false },
        { id: 3, value: 'Fall in love', complete: false }
      ]
    }
  },
  methods: {
    onRemoveTask(task) {
      console.log('onRemoveTask', task)
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    },
    onChangeTaskState(task) {
      console.log('onChangeTaskState', task)
      this.tasks = this.tasks.map(t => t.id === task.id ? { ...t, complete: !t.complete } : t);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

select {
  width: 200px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin: 10px 0;

  /* Optional: Add some fancy box shadow */
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

/* Style for the dropdown options */
select option {
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
}
</style>
