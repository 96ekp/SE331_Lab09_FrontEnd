<!-- // creat studdents card to display student name, surname and gpa -->

<template>
  <div class="mb-3 p-2 border-2 border-solid border-black w-60 h-30">
    <span> @ {{ student?.name }} {{ student?.surname }} </span>
    <h4 class="text-center font-semibold">{{ student?.gpa }}</h4>
  </div>
</template>

<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'
const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true
  }
})
</script>

<style scoped></style>
