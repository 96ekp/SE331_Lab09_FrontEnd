<template>
  <br />
  <h1 class="text-center font-bold font-mono text-black">Events For Great</h1>
  <br />
  <main class="flex flex-col items-center">
    <StudentCard v-for="student in students" :student="student" :key="student.id"></StudentCard>
  </main>
</template>

<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import StuedntService from '@/services/StudentService'
import type { StudentItem } from '@/type'
import { ref, type Ref } from 'vue'

const students: Ref<Array<StudentItem>> = ref([])
StuedntService.getEvent().then((res) => {
  students.value = res.data
})
</script>
