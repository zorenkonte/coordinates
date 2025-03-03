<script lang="ts" setup>
import type { Tables } from '@/types/database.types'

defineProps<{ coordinates: Tables<'coordinates'>[] }>()
</script>

<template>
  <ul class="space-y-4">
    <CoordinateItem v-for="coordinate in coordinates" :key="coordinate.can" :coordinate="coordinate" />
  </ul>
</template>
