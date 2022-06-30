<script setup>
import { isMobileTerminal } from "@/utils/flexible";
</script>

<template>
  <router-view />
</template>

<style>
.btn {
  @apply py-2 px-4 rounded-sm shadow-sm;
}
.btn-green {
  @apply bg-green-600 text-white transition shadow-green-600 hover:bg-green-700 hover:shadow-green-700;
}
</style>
