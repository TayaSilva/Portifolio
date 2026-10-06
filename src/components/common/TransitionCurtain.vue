<script setup lang="ts">
defineProps({
  className: { type: String, required: true },
  lineClass: { type: String, required: true }
})
</script>

<template>
  <div :class="className" aria-hidden="true">
    <span :class="lineClass" />
  </div>
</template>
