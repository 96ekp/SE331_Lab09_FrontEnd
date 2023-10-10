<template>
  <div>
    <h1>Categories and Organizers</h1>
    <div class="category-list">
      <EventList v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EventList from '../components/EventList.vue'

import type { EventItem } from '@/type'
import { ref } from 'vue'

const events = ref<EventItem[]>([
  {
    id: 5928101,
    category: 'animal welfare',
    title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
    location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
    organizer: 'Kat Laydee'
  },
  {
    id: 4582797,
    category: 'food',
    title: 'Community Gardening',
    description: 'Join us as we tend to the community edible plants.',
    location: 'Flora City',
    date: 'March 14, 2022',
    time: '10:00',
    organizer: 'Fern Pollin'
  },
  {
    id: 8419988,
    category: 'sustainability',
    title: 'Beach Cleanup',
    description: 'Help pick up trash along the shore.',
    location: 'Playa Del Carmen',
    date: 'July 22, 2022',
    time: '11:00',
    organizer: 'Carey Wales'
  }
])
</script>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  -ms-flex-item-align: center;
  align-items: center;
}

h1 {
  margin-bottom: 20px;
}
.category,
.organizer {
  text-align: center; /* Center text within each element */
}

.category {
  margin-bottom: 5px; /* Add space between category and organizer */
}
</style>
