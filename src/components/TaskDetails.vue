<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons">favorite</i>
        </div>
    </div>
</template>

<script>
import { useTaskStores } from '../stores/TaskStore'

export default {
    props: ['task'],
    setup () {
        const taskStore = useTaskStores();

        return {taskStore}
    }
}
</script>

<style lang="scss" scoped>

</style>