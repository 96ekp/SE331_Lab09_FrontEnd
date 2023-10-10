<script setup lang="ts">
import { type EventItem } from '@/type'
import type { PropType } from 'vue'
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
function register() {
  store.updateMessage('You are successfully registerd for' + props.event?.title)
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
    <p class="font-bold text-gray-600">Event Registration</p>
    <button
      @click="register"
      class="bg-black border-none rounded-full font-bold text-white p-2 mt-2 hover:bg-sky-blue"
    >
      Register ME
    </button>
  </div>
</template>
<style scoped></style>
