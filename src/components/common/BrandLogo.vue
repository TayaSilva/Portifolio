<script setup lang="ts">
import tsImg from '../../assets/imagens/ts.png'
import tsDarkImg from '../../assets/imagens/ts-dark.png'

defineProps({
  isDark: { type: Boolean, required: true },
  label: { type: String, required: true }
})

defineEmits(['home'])
</script>

<template>
  <button type="button" class="flex size-[52px] items-center border-0 bg-transparent p-0 max-[700px]:size-11" :aria-label="label" @click="$emit('home')">
    <img class="size-full object-contain" :src="isDark ? tsImg : tsDarkImg" alt="" />
  </button>
</template>
