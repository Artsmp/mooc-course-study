<script setup></script>

<template>
  <div>
    <span
      class="text-lg bg-pink-400 inline-block m-2 p-3 rounded-md shadow-2xl shadow-pink-400 text-center"
      >123</span
    >
    <button class="btn btn-green">TEST</button>
  </div>
</template>

<style>
.btn {
  @apply py-2 px-4 rounded-sm shadow-sm;
}
.btn-green {
  @apply bg-green-600 text-white transition shadow-green-600 hover:bg-green-700 hover:shadow-green-700;
}
</style>
