<script lang="ts" setup>
import { Loader2, Search } from 'lucide-vue-next'

const client = useSupabaseClient()

const { data } = useAsyncData('coordinates', async () => {
  const { data } = await client.from('coordinates').select().range(0, 9)
  return data || []
}, {
  default: () => [],
})

const search = ref('')

const { status, execute } = useAsyncData(
  'search-coordinates',
  async () => {
    const { data: searchData, error } = await client.from('coordinates').select().eq('can', search.value)
    if (error || !searchData) {
      return
    }
    data.value = searchData
  },
  { immediate: false },
)

const isSearching = computed(() => status.value === 'pending')
</script>

<template>
  <div class="max-w-sm mx-auto p-4">
    <div class="flex items-center gap-2 mb-4">
      <UiInput v-model="search" placeholder="Search CAN" />
      <UiButton :disabled="isSearching" @click="execute">
        <template v-if="isSearching">
          <Loader2 class="w-4 h-4 animate-spin" />
        </template>
        <template v-else>
          <Search />
        </template>
      </UiButton>
    </div>
    <CoordinateList :coordinates="data" />
  </div>
</template>
