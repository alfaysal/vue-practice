import { defineStore } from 'pinia'

export const useTaskStores = defineStore('taskStore',{
    state: () => ({
        tasks: [
            {
                id: 1,
                title: "first tasks",
                isFav: false,
            },
            {
                id: 2,
                title: "Seconds tasks",
                isFav: true,
            },
        ]
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
        addTask(task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id === id);
        }
    }
});