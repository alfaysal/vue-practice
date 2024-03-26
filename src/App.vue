<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Child from './components/Child.vue'

const ref_name = ref(null);
const refs = ref([]);
const lists = ref([1,2,3]);
const childComponent = ref(null);

onMounted(() => {
  console.log(ref_name.value);
  console.log(refs.value);
  console.log(childComponent.value.childVar);
  return ref_name.value.focus();
});
</script>

<template>
  <h2 class="text-red-600">Successfully Install Tailwind</h2>

  <div>
    <input type="text" ref="ref_name" name="name">
  </div>

  <div>
    <h3 :ref="(el) => console.log(el)">function ref</h3>
  </div>

  <div>
    <ul>
      <li v-for="(list, index) in lists" :key="index" ref="refs">
        {{ list }}
      </li>
    </ul>
  </div>

  <div>
    <Child ref="childComponent"/>
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
