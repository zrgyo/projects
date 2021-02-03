<template>
    <li>
        <span v-bind:class="{done: todo.complited}">
            <input type="checkbox" v-on:change="todo.complited=!todo.complited">
            <strong>{{index + 1}}</strong>
            {{todo.title}}
        </span>
        <button class="rm" v-on:click="$emit('remove-todo', todo.id)"
        >&times;</button>
    </li>
</template>

<script>
    export default {
        props: {
            todo:{
                type: Object,
                required: true
            },
            index: Number
        }
    }
</script>

<style scoped>
    li {
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }
    .rm {
        background: rgb(245, 74, 74);
        color: #fff;
        border-radius: 30%;
        font-weight: bold;
        border: 1px solid black;
    }
    input{
        margin-right: 1rem;
    }
    .done{
        text-decoration: line-through;
    }
</style>