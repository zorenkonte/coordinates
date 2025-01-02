<template>
  <li class="border border-gray-300 rounded-lg p-4 shadow-sm">
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
</template>

<script lang="ts" setup>
import type { Coordinate } from '@/types/Coordinate'

defineProps<{ coordinate: Coordinate }>()
</script>
