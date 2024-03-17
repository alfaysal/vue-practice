<script setup>
import { computed, ref } from 'vue';
const author = ref({
  firstName: 'All',
  secondName: '',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
});

const addNewBook = () => {
  author.value.books.push('new book added');
} 

const booksCount = computed(() => {

  return author.value.books.length > 0 ? author.value.books.length : 'No Book Available';
});

// getters setters
const fullName = computed({
  get() {
    return author.value.firstName + ' ' + author.value.secondName
  },
  set(newName) {
    [author.value.firstName, author.value.secondName] = newName.split(' ');
  }
})

if (! author.value.firstName || !author.value.secondName) {
  fullName.value = "Al Faysal";
}


</script>

<template>
  <div>
    <div>
      <h2>Author Name: {{ fullName }}</h2>
    </div>
    <h2 class="text-red-600">
      Books Count - {{ booksCount }}
    </h2>
    <a @click="addNewBook">Click me</a>
  </div>
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
