<script lang="ts" setup>
interface Coordinate {
  id: number;
  can: number;
  meter_code: string;
  mru: number;
  ba: string;
  name: string;
  address: string;
  street: string;
  dma: string;
  dmz: string;
  lat: number;
  long: number;
  source: string;
}

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

const loadCoordinates = async () => {
  await refresh()
  if (data.value) {
    coordinates.value = [...coordinates.value, ...data.value]
    offset.value += limit
  }
}
</script>

<template>
  <div class="container mx-auto p-4">
    <ul class="space-y-4">
      <li v-for="coordinate in coordinates" :key="coordinate.id" class="border border-gray-300 rounded-lg p-4 shadow-sm">
        <p><strong>CAN:</strong> {{ coordinate.can }}</p>
        <p><strong>Meter Code:</strong> {{ coordinate.meter_code }}</p>
        <p><strong>MRU:</strong> {{ coordinate.mru }}</p>
        <p><strong>BA:</strong> {{ coordinate.ba }}</p>
        <p><strong>Name:</strong> {{ coordinate.name }}</p>
        <p><strong>Address:</strong> {{ coordinate.address }}</p>
        <p><strong>Street:</strong> {{ coordinate.street }}</p>
        <p><strong>DMA:</strong> {{ coordinate.dma }}</p>
        <p><strong>DMZ:</strong> {{ coordinate.dmz }}</p>
        <p><strong>Latitude:</strong> {{ coordinate.lat }}</p>
        <p><strong>Longitude:</strong> {{ coordinate.long }}</p>
        <p><strong>Source:</strong> {{ coordinate.source }}</p>
      </li>
    </ul>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600" @click="loadCoordinates">Load More</button>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>