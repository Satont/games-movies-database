<script setup lang="ts">
import MainGrades from '@src/components/tooltips/tooltip-grade.vue'
import { Info } from 'lucide-vue-next'
import { NPopover } from 'naive-ui'
</script>

<template>
  <div class="grade">
    Оценка
    <NPopover raw trigger="hover" arrow-style="background-color: #0c0c0c">
      <template #trigger>
        <Info style="width: 1rem; height: 1rem" />
      </template>
      <MainGrades />
    </NPopover>
  </div>
</template>

<style scoped>
.grade {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
</style>
