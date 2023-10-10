<template>
  <div class="mb-3 p-2 border-2 border-solid border-gray w-60 h-30">
    <span> {{ event?.category }} </span>
    <h4 class="text-center font-semibold">{{ event?.organizer }}</h4>
  </div>
</template>

<script setup lang="ts">
import type { OrganizerItem } from "@/type";
import type { PropType } from "vue";
const props = defineProps({
  event: {
    type: Object as PropType<OrganizerItem>,
    require: true,
  },
});
</script>
<style scoped>
.event-list {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-bottom: 10px;
}

.category,
.organizer {
  font-size: 20px;
  margin-right: 20px;
}

.category {
  flex: 1;
}

.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12 px 0 rgba(0, 0, 0, 0.2);
}
</style>
