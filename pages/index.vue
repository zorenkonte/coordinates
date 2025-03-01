<script lang="ts" setup>
import type { Tables } from '@/types/database.types'

const client = useSupabaseClient()
const coordinates = ref<Tables<'coordinates'>[]>([])
const limit = 10
const offset = ref(0)

const { data } = useAsyncData('coordinates', async () => {
  const { data, error } = await client.from('coordinates').select().range(offset.value, offset.value + limit - 1)
  if (error || !data) {
    return []
  }
  return data
})

onMounted(() => {
  if (data.value) {
    coordinates.value = data.value
    offset.value += limit
  }
})

const search = ref('')

async function searchByCAN() {
  const { data, error } = await client.from('coordinates').select().eq('can', search.value)
  if (error || !data) {
    return
  }
  coordinates.value = data
}
</script>

<template>
  <div class="max-w-sm mx-auto p-4">
    <div class="flex items-center gap-2 mb-4">
      <UiInput v-model="search" placeholder="Search CAN" />
      <UiButton @click="searchByCAN">
        Search
      </UiButton>
    </div>
    <CoordinateList :coordinates="coordinates" />
  </div>
</template>
