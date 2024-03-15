<template>
    <form @submit.prevent="handleSubmit">
        <input 
            type="text"
            placeholder="Enter tasks"
            v-model="newTask"
        >
        <button type="submit" class="text-black bg-yellow-300 mr-3 px-8 py-2 rounded-md ">Add</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useTaskStores } from '../stores/TaskStore'

export default {
    setup () {
        const taskStore = useTaskStores();
        const newTask = ref('');
        const handleSubmit = () => {

            if (newTask.value.length > 0) {
                taskStore.addTask({
                    id: 18,
                    title: newTask.value,
                    isFav: true,
                })
                newTask.value = ''
            }
        }

        return { handleSubmit, newTask }
    }
}
</script>

<style lang="scss" scoped>

</style>