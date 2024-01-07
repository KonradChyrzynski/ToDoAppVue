<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TaskInput @add-task="afterAddTask" @task-updated="afterTaskUpdate" v-model="modelValue" />
  <p>Sort by:</p>
  <select v-model="sortBy" @click.prevent="sortTasks">
    <option value="complete">Complete</option>
    <option value="incomplete">Incomplete</option>
  </select>
  <p>Filter by:</p>
  <select v-model="select">
    <option value="all">All</option>
    <option value="complete">Complete</option>
    <option value="incomplete">Incomplete</option>
  </select>
  <div v-for="task in tasks" :key="task">
    <TaskComponent @update-task="onTaskUpdate" @change-task-state="onChangeTaskState" @remove-task="onRemoveTask"
      :task="task" :selected="select" />
  </div>
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
    let tasks;
    if (localStorage.getItem('tasks')) {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    } else {
      tasks = [
        { id: 1, value: 'Learn Vue.js', complete: true },
        { id: 2, value: 'Learn about single-file components', complete: false },
        { id: 3, value: 'Fall in love', complete: false }
      ].sort((a, b) => a.complete - b.complete);
    }

    return {
      tasks: tasks,
      modelValue: '',
      select: 'all',
      sortBy: 'incomplete',
      id: undefined
    }
  },
  methods: {
    sortTasks() {
      this.tasks = this.tasks.sort((a, b) => {
        if (this.sortBy === 'incomplete') {
          return a.complete - b.complete;
        } else {
          return b.complete - a.complete;
        }
      });
    },
    afterAddTask(task) {
      this.tasks = [...this.tasks, task];
    },
    onRemoveTask(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    },
    onChangeTaskState(task) {
      this.tasks = this.tasks.map(t => t.id === task.id ? { ...t, complete: !t.complete } : t);
    },
    onTaskUpdate(task) {
      this.id = task.id;
      this.modelValue = task.value;
    },
    afterTaskUpdate(task) {
      this.tasks = this.tasks.map(t => t.id === this.id ? { ...t, value: task } : t);
      this.id = undefined;
      this.modelValue = '';
    }
  },
  watch: {
    tasks: {
      handler(newTasksArray) {
        localStorage.setItem('tasks', JSON.stringify(newTasksArray));
        this.sortTasks(this.tasks)
      },
      deep: true
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
