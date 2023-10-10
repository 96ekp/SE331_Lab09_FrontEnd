<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <div id="nav" class="space-x-2">
      <router-link :to="{ name: 'event-detail', params: { id } }" class="nav-link"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'event-register', params: { id } }" class="nav-link"
        >Register</router-link
      >
      |
      <router-link :to="{ name: 'event-edit', params: { id } }" class="nav-link">Edit</router-link>
    </div>

    <!-- Content for sub-pages will be rendered here -->
    <router-view :event="event"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)
</script>
<style scoped>
.nav-link {
  @apply no-underline text-black;
}

.nav-link:hover {
  @apply underline;
}
</style>
