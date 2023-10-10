<!-- views/event/EventEditView.vue -->

<script setup lang="ts">
import { type EventItem } from '@/type'
import { type PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps({
  event: {
    type: Object as PropType<EventItem>,
    require: true
  }
})

const router = useRouter()
const store = useMessageStore()

function edit() {
  store.updateMessage(' You are Edit succesfully for' + props.event?.title)
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({
    name: 'event-detail',
    params: {
      id: props.event?.id
    }
  })
}
</script>

<template>
  <div v-if="event" class="p-3 mt-2">
    <p class="font-bold text-gray-600">Edit Event</p>
    <button
      @click="edit"
      class="bg-black border border-none rounded-full font-bold text-white p-2 mt-2 hover:bg-sky-blue"
    >
      Update
    </button>
  </div>
</template>
