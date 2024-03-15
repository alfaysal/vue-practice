import { defineStore } from 'pinia'

export const useTaskStores = defineStore('taskStore',{
    state: () => ({
        tasks: [],
        loading: false,
    }),
    getters: {
        fav() {

            return this.tasks.filter(task => task.isFav);
        },
        favCount() {

            return this.tasks.reduce((prev, task) => {

                return task.isFav ? prev + 1 : prev;
            }, 0);
        },
        totalCount: (state) => state.tasks.length
    },
    actions: {
        async addTask(task) {
            this.tasks.push(task);

            const res = await fetch('http://localhost:3000/tasks',{
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            if (res.error) {
                console.log(res.error);
            }
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id === id);
        },
        async getTask() {
            this.loading = true;
            const response = await fetch('http://localhost:3000/tasks');
            const data = await response.json();
            this.loading = false;
            this.tasks = data;
        }
    }
});