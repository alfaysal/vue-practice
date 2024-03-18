<script setup>
import { reactive, ref } from 'vue'
import  TodoItem  from './components/TodoItem.vue'
const items = ref([
  {
    item:1,
    message: "first message",
  },
  {
    item: 2,
    message: "second message",
  }
]);
const itemObjects = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10',
});

</script>

<template>
  <h2 class="text-red-600" v-for="(item, index) in items" :key="item.item">{{ index }} message ->{{ item.message }}</h2>
  <br>
  <h2 class="text-red-600" v-for="({message}, index) in items" :key="index">{{ index }} message ->{{ message }}</h2>
  <br>
  <h2 class="text-red-600" v-for="(value, key, index) in itemObjects" :key="index">{{ index }} key-> {{ key }} message ->{{ value }}</h2>
  <br>

  <TodoItem v-for="item in items" :key="item.item" :item="item"/>

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
