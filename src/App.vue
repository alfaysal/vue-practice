<script setup>
import { reactive, ref, watch, watchEffect } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Child from './components/Child.vue'
const questions = ref("");
const answers = ref("questions contain ? mark");
const isDisabled = ref(false);
const reactiveWatch = reactive({count: 0});

const x = ref(0);
const y = ref(8);

// single reactive
watch(questions, (newValue) => {
  console.log("i called", newValue);
},
{ once: true }
);

// getters
watch(
  () => x.value + y.value,
  (sum) => {
    console.log("getters", sum);
  }
,
{ immediate: true }
);


// multiple source
watch([questions, () => x.value], ([newQuestions, newX]) => {
  console.log(newQuestions, newX);
})

// reactive object
watch(() => reactiveWatch.count, (count, oldCount) => {
  console.log('reactive', count, oldCount);
})

//watcheffect

watchEffect(()=> {
  console.log("watch effetc ", x.value);
});

</script>

<template>
  <div>
    <h4>Ask Questions</h4>
    <input type="text" v-model="questions" :disabled="isDisabled" />
  </div>
  <div>
    <h2>Answers {{ answers }}</h2>
  </div>

  <div>
    <button class="m-8 bg-red-800 text-white" @click="x++">click</button>
  </div>

  <div>
    <Child :reactiveWatch="reactiveWatch.count"/>
    <button class="m-8 bg-yellow-800 text-white" @click="reactiveWatch.count++">Reactive click</button>
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
