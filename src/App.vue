<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import ButtonCounter from './components/ButtonCounter.vue'
import Alert from './components/Alert.vue'
import DynamicComponent from './components/DynamicComponent.vue'

const counterFontSize = ref(1);
</script>

<template>
  <h2 class="text-red-600">Successfully Install Tailwind</h2>

  <div class="mt-4">
    <div :style="{ fontSize: counterFontSize + 'em'}">
      <ButtonCounter 
        fromProps="10" 
        @enlarge-text="counterFontSize += 0.1"
        @short-text="counterFontSize -= 0.1"
      />
    </div>
  </div>

  <div class="mt-4">
    <h2>Slot</h2>
    <Alert>
      From Slot
    </Alert>
  </div>

  <div class="mt-4">
    <h2>Dynamic Component</h2>
    <DynamicComponent />
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
