const app = Vue.createApp({
    name: 'Todolist',
    data() {
        return {
            searchedTask: '',
            tasks: [
                {
                    id: 1,
                    done: true,
                    text: 'Learn HTML'
                },
                {
                    id: 2,
                    done: true,
                    text: 'Learn CSS'
                },
                {
                    id: 3,
                    done: true,
                    text: 'Learn Javascript'
                },
                {
                    id: 4,
                    done: false,
                    text: 'Learn Vue'
                },
                {
                    id: 5,
                    done: false,
                    text: 'Learn PHP'
                },
                {
                    id: 6,
                    done: false,
                    text: 'Learn Laravel'
                },
                {
                    id: 7,
                    done: false,
                    text: 'Learn Mysql'
                },
                {
                    id: 8,
                    done: false,
                    text: 'Complete Todolist Vue project'
                }
            ]
        };
    },

    computed: {
        filteredTasks() {
            const searched = this.searchedTask.trim().toLowerCase();
            return this.tasks.filter(({ text }) => text.toLowerCase().includes(this.searchedTask));
        },
        completedTasks() {
            return this.filteredTasks.filter(task => task.done);
        },
        toDoTasks() {
            return this.filteredTasks.filter(task => !task.done);
        }

    },

    methods: {
        deleteTask(taskToDeleteId) {
            this.tasks = this.tasks.filter(({ id }) => id !== taskToDeleteId)
        }
    }

})


app.mount('#root');