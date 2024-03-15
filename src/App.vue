<template>
  <main>
    <header>
      <img src="./assets/logos/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Store</h1>
    </header>

    <div class="new-task-form">
      <NewTask />
    </div>
    <div v-if="taskStore.loading">
      Loading task ......
    </div>
    <nav class="filters">
      <button class="text-white bg-green-400 mr-3 px-8 py-2 rounded-md mt-2" type="button" @click="filter = 'all'">All</button>
      <button class="text-white bg-green-400 mr-3 px-8 py-2 rounded-md mt-2" type="button" @click="filter = 'favs'">Favs</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>All Tasks. Total ({{ taskStore.totalCount }})</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>Fav Tasks. total ({{ taskStore.favCount }})</p>
      <div v-for="task in taskStore.fav" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

  </main>
</template>

<script>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStores } from './stores/TaskStore'
import NewTask from './components/NewTask.vue';

export default {
  components: { TaskDetails, NewTask },
  setup () {
    const taskStore = useTaskStores();
    const filter = ref('all');

    taskStore.getTask();
    
    return { taskStore, filter }
  }
}
</script>

<style lang="scss" scoped>

</style>