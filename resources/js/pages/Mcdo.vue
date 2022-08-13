<template>
    <div class="m-3">
        Compteur de Mcdo : {{ McDo }} Mcdo a notre actif !
    </div>
    <div class="select-none flex ml-3 mt-4">
        <p @click="increment()" class="cursor-pointer p-2 bg-blue-200 font-bold rounded mr-2">+</p>
        <p @click="decrement()" class="cursor-pointer p-2 bg-blue-200 font-bold rounded">-</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const McDo = ref(14)
    const increment = () => {
        McDo.value++
    }
    const decrement = () => {
        McDo.value--
    }

</script>

<style>

</style>