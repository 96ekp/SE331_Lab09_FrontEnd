<template>
  <div id="app">
    <header class="max-h-screen leading-normal">
      <h1 class="text-1.5xl">Create by Saw Eh Kalane Phaung</h1>
      <div id="flashMessage" v-if="message" class="animate-yellowfade">
        <h4 class="text-lg">{{ message }}</h4>
      </div>
      <nav class="p-8">
        <!-- <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink>|
      <RouterLink to="/categories">Categories</RouterLink>|
      <router-link to="/students">Students</router-link> -->

        <RouterLink
          :to="{ name: 'event-list' }"
          class="font-bold text-gray-700 hover:text-green-500"
          >Home</RouterLink
        >
        |
        <RouterLink :to="{ name: 'about' }" class="font-bold text-gray-700 hover:text-green-500"
          >About</RouterLink
        >
        <!--        |-->
        <!--        <RouterLink-->
        <!--          :to="{ name: 'categories' }"-->
        <!--          class="font-bold text-gray-700 hover:text-green-500"-->
        <!--          >Categories</RouterLink-->
        <!--        >-->
        <!--        |-->
        <!--        <RouterLink :to="{ name: 'students' }" class="font-bold text-gray-700 hover:text-green-500"-->
        <!--          >Students</RouterLink-->
        <!--        >-->
        |
        <RouterLink :to="{ name: 'add-event' }" class="font-bold text-gray-700 hover:text-green-500"
          >New Event
        </RouterLink>
        |
        <RouterLink
          :to="{ name: 'add-organizer' }"
          class="font-bold text-gray-700 hover:text-green-500"
          >New Organizer
        </RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* Add your styles here */
.page-size-selection {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  margin-right: 5px;
}
@keyframes yellowfade {
  from {
    background: yellow;
  }

  to {
    background: transparent;
  }
}

.animate-yellowfade {
  animation: yellowfade 3s ease-in-out;
}
</style>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'

const store = useMessageStore()
const { message } = storeToRefs(store)
const sizes = ref<number>(2)
</script>
