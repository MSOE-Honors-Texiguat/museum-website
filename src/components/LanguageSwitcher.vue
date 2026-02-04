<script setup lang="ts">
import { useLanguage } from '../composables/useLanguage';

const { toggleLanguage, getNextLanguageLabel } = useLanguage();
</script>

<template>
  <button
    @click="toggleLanguage"
    class="px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-zinc-300 hover:text-white bg-zinc-800/50 hover:bg-zinc-700 border border-zinc-700/50 hover:border-brand/50"
    :title="`Switch to ${getNextLanguageLabel()}`"
  >
    {{ getNextLanguageLabel() }}
  </button>
</template>
