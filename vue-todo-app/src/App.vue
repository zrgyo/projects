<template>
  <div id="app">
    <h1>To-do app</h1>
    <AddTodo 
      @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="complited">Complited</option>
      <option value="not-complited">Not Complited</option>
    </select>
    <hr>
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>Nothing to do!</p>
  </div>

</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
export default {
  name: 'App',
  data() {
    return {
      todos: [],
      loading: true,
      filter: 'all'
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then (response => response.json())
    .then (json => {
      this.todos = json
      this.loading = false 
    })
  },

 /* watch:{
    filter (){

    }
  },*/
  computed:{
    filteredTodos(){
      if (this.filter === 'all'){
        return this.todos
      }
      if (this.filter === 'complited'){
        return this.todos.filter(t => t.complited)
      }
      if (this.filter === 'not-complited'){
        return this.todos.filter(t => !t.complited)
      }
    }
  },
  methods:{
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo (todo){
      this.todos.push(todo)
    }
  },
  components: {
    TodoList,AddTodo, Loader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
