<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const counter = ref(0);

const counterHandler = (arg, event) => {
  console.log(event ,arg, "i am called");
}

const outer = () => {
  console.log("outer");
}

const middler = () => {
  console.log("middler");
}

const inner = () => {
  console.log("inner");
}

const eventHandler = (event) => {
  console.log(event);
  console.log("i am called from event");
}

</script>

<template>
  <h2 class="text-red-600">Successfully Install Tailwind</h2>
  <button @click="counter++" class="p-4 bg-slate-50 text-blue-300">{{ counter }}</button>
  <button @click.once="counterHandler('from argument', $event)" class="p-4 bg-slate-50 text-blue-300">'once' {{ counter }}</button>
  
  <button @click="eventHandler" class="p-4 bg-yellow-800 text-blue-300">{{ counter }}</button>

  <!-- capturing -->
  <div id="outer" @click="outer" class="p-8 bg-red-300 my-8">
    <!-- stop propagation from here -->
    <div id="middler" @click.stop="middler" class="p-8 bg-blue-400"> 
      <div id="innser" @click="inner" class="p-8 bg-green-400">

      </div>
    </div>
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
