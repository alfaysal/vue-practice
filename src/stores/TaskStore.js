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
    })
});