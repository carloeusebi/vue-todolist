const app = Vue.createApp({
    name: 'Todolist',
    data() {
        return {
            searchedTask: '',
            newTask: '',
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
        nextId() {
            let highestId = this.tasks.reduce((highest, { id }) => id > highest ? id : highest, 0);
            return ++highestId;
        },
        filteredTasks() {
            const searched = this.searchedTask.trim().toLowerCase();
            return this.tasks.filter(({ text }) => text.toLowerCase().includes(this.searchedTask));
        },
        completedTasks() {
            return this.filteredTasks.filter(task => task.done);
        },
        toDoTasks() {
            return this.filteredTasks.filter(task => !task.done);
        },

    },

    methods: {
        deleteTask(taskToDeleteId) {
            this.tasks = this.tasks.filter(({ id }) => id !== taskToDeleteId)
        },
        addTask() {
            const text = this.newTask.trim();
            this.newTask = '';

            if (!text) return;

            const id = this.nextId;

            const newTask = {
                id,
                text,
                done: false
            }

            this.tasks.push(newTask);

            this.$refs.addInput.focus();
        },
        setAllDone() {
            this.tasks.forEach(task => task.done = true)
        },
        setAllToDo() {
            this.tasks.forEach(task => task.done = false);
        },
        deleteAll() {
            this.tasks = [];
        }
    }

})


app.mount('#root');