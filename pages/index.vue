<script lang="ts" setup>
import type { Coordinate } from '@/types/Coordinate'

const client = useSupabaseClient()
const coordinates = ref<Coordinate[]>([])
const limit = 10
const offset = ref(0)

const { data, refresh } = useAsyncData('coordinates', async () => {
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

async function loadCoordinates() {
  await refresh()
  if (data.value) {
    coordinates.value = [...coordinates.value, ...data.value]
    offset.value += limit
  }
}
</script>

<template>
  <div class="max-w-sm mx-auto p-4">
    <CoordinateList :coordinates="coordinates" />
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600" @click="loadCoordinates">
      Load More
    </button>
  </div>
</template>
