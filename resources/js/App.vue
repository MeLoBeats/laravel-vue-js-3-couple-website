<template>
  <router-view v-slot="{ Component }">
      <auth-layout>
          <component :is="Component"></component>
      </auth-layout>
  </router-view>
</template>

<script setup>

  import { ref, onMounted } from 'vue';
import AuthLayout from './layout/AuthLayout.vue';

  const auth = ref(false)
  onMounted(() => {
    auth.value = true
  })

</script>

<style>

</style>