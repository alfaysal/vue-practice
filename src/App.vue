<template>
  <main>
    <header>
      <img src="./assets/logos/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Store</h1>
    </header>

    <!-- task list -->
    <div class="task-list">
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>
  </main>
</template>

<script>
import TaskDetails from './components/TaskDetails.vue'
import { useTaskStores } from './stores/TaskStore'

export default {
  components: { TaskDetails },
  setup () {
    const taskStore = useTaskStores();

    return { taskStore }
  }
}
</script>

<style lang="scss" scoped>

</style>