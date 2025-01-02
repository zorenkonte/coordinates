<template>
  <ul class="space-y-4">
    <CoordinateItem v-for="coordinate in coordinates" :key="coordinate.id" :coordinate="coordinate" />
  </ul>
</template>

<script lang="ts" setup>
import type { Coordinate } from '@/types/Coordinate'

defineProps<{ coordinates: Coordinate[] }>()
</script>
