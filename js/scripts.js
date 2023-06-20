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
                    done: true,
                    text: 'Complete Todolist Vue project'
                }
            ]
        };
    },

    computed: {
        /**
         * Returns a number higher than all ids, when a you task is added it can takes the value returned from this function
         * @returns {number} the number higher than all ids
         */
        nextId() {
            let highestId = this.tasks.reduce((highest, { id }) => id > highest ? id : highest, 0);
            return ++highestId;
        },

        /**
         * Filters the task by the search word
         * @returns all the tasks that include the searched word
         */
        filteredBySearchTasks() {
            const searched = this.searchedTask.trim().toLowerCase();
            return this.tasks.filter(({ text }) => text.toLowerCase().includes(searched));
        },

        /**
         * 
         * @returns all the tasks, filtered by search, that are set to complete
         */
        completedTasks() {
            return this.filteredBySearchTasks.filter(task => task.done);
        },

        /**
         * 
         * @returns all the tasks, filtered by search, that are set to to do
         */
        toDoTasks() {
            return this.filteredBySearchTasks.filter(task => !task.done);
        },

    },

    methods: {

        /**
         * Deletes a task the by id
         * @param {number} taskToDeleteId the id of the task to delete
         */
        deleteTask(taskToDeleteId) {
            this.tasks = this.tasks.filter(({ id }) => id !== taskToDeleteId)
        },

        /**
         * Add a new task
         */
        addTask() {
            const text = this.newTask.trim();
            this.newTask = ''; // immediately empties the html input

            if (!text) return; // if empty text is inserted exit the function

            // the next available id
            const id = this.nextId;

            const newTask = {
                id,
                text,
                done: false
            }

            this.tasks.push(newTask);

            // focus on the input
            this.$refs.addInput.focus();
        },

        /**
         * Sets all tasks to complete
         */
        setAllDone() {
            this.tasks.forEach(task => task.done = true)
        },

        /**
         * Sets all task to todo
         */
        setAllToDo() {
            this.tasks.forEach(task => task.done = false);
        },

        /**
         * Delete all the tasks
         */
        deleteAll() {
            this.tasks = [];
        }
    }

})


app.mount('#root');