<script lang="ts" setup>
import type { Coordinate } from '@/types/Coordinate'

defineProps<{ coordinate: Coordinate }>()
</script>

<template>
  <li class="border border-gray-300 rounded-lg px-2 py-1 shadow-sm">
    <dl class="divide-y divide-gray-200">
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          CAN
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.can }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          Meter Code
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.meter_code }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          MRU
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.mru }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          BA
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.ba }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          Name
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.name }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-8">
          Address
        </dt>
        <dd class="whitespace-nowrap text-gray-900 truncate max-w-sm">
          {{ coordinate.address }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          Street
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.street }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          DMA
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.dma }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          DMZ
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.dmz }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          Latitude
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.lat }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium">
        <dt class="text-gray-500 mr-2">
          Longitude
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.long }}
        </dd>
      </div>
      <div class="flex justify-between p-1 text-sm font-medium border-b border-gray-200">
        <dt class="text-gray-500 mr-2">
          Source
        </dt>
        <dd class="whitespace-nowrap text-gray-900">
          {{ coordinate.source }}
        </dd>
      </div>
    </dl>
  </li>
</template>
