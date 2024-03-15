<template>
  <main>
    <header>
      <img src="./assets/logos/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Store</h1>
    </header>

    <div class="new-task-form">
      <NewTask />
    </div>
    <div v-if="loading">
      Loading task ......
    </div>
    <nav class="filters">
      <button class="text-white bg-green-400 mr-3 px-8 py-2 rounded-md mt-2" type="button" @click="filter = 'all'">All</button>
      <button class="text-white bg-green-400 mr-3 px-8 py-2 rounded-md mt-2" type="button" @click="filter = 'favs'">Favs</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>All Tasks. Total ({{ totalCount }})</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <div class="task-list" v-if="filter === 'favs'">
      <p>Fav Tasks. total ({{ favCount }})</p>
      <div v-for="task in fav" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <div>
      <button @click="taskStore.$reset">Reset State</button>
    </div>

  </main>
</template>

<script>
import { ref } from 'vue';
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStores } from './stores/TaskStore'
import NewTask from './components/NewTask.vue';
import { storeToRefs } from 'pinia';

export default {
  components: { TaskDetails, NewTask },
  setup () {
    const taskStore = useTaskStores();
    const {loading, tasks, totalCount, favCount, fav} = storeToRefs(taskStore);
    const filter = ref('all');

    taskStore.getTask();
    
    return { taskStore, filter, loading, tasks, totalCount, favCount, fav }
  }
}
</script>

<style lang="scss" scoped>

</style>