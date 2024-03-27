<template>
    <div>
        <button 
            v-for="(_, tab) in tabs" 
            :key="tab"
            @click="currentTab = tab"
        > 
            {{ tab }}
        </button>
        <component :is="tabs[currentTab]"></component>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Home from './Home.vue'
import About from './About.vue'

const currentTab = ref('Home');
const tabs = { Home: Home, About: About }

</script>

<style>

</style>