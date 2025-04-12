<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Loader2, Search } from 'lucide-vue-next'

useHead({
  title: 'Home',
})

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
    const { data: searchData, error } = await client.from('coordinates').select().eq('can', Number(search.value))
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
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header class="flex h-16 shrink-0 items-center gap-2">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{{ $t('coordinates') }}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="max-w-sm mx-auto">
        <div class="flex items-center gap-2 mb-4">
          <UiInput v-model.number="search" placeholder="Search CAN" />
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
    </SidebarInset>
  </SidebarProvider>
</template>
