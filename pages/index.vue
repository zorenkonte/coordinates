<script lang="ts" setup>
import { Search } from 'lucide-vue-next'

const client = useSupabaseClient()

const { data } = useAsyncData('coordinates', async () => {
  const { data } = await client.from('coordinates').select().range(0, 9)
  return data || []
}, {
  default: () => [],
})

const search = ref('')

async function searchByCAN() {
  const { data: searchData, error } = await client.from('coordinates').select().eq('can', search.value)
  if (error || !searchData) {
    return
  }
  data.value = searchData
}
</script>

<template>
  <div class="max-w-sm mx-auto p-4">
    <div class="flex items-center gap-2 mb-4">
      <UiInput v-model="search" placeholder="Search CAN" />
      <UiButton @click="searchByCAN">
        <Search />
      </UiButton>
    </div>
    <CoordinateList :coordinates="data" />
  </div>
</template>
