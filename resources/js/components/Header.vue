<template>
    <div class="w-full bg-blue-500 h-14">
        <div class="flex items-center w-11/12 h-full mx-auto sm:mx-2">
            <div @click="handleActive()" id="menu" class="relative flex p-2 mr-6 cursor-pointer sm:hidden"> 
                <div class="hamburger"></div>
            </div>
            <div class="flex items-center w-full h-full">
                <h1 class="text-2xl italic font-extrabold tracking-wider text-white font-caveat">M&L</h1>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['clicked'])
const menuActive = ref(false)
    const handleActive = () => {
        menuActive.value = true
        emit("clicked", menuActive.value)
    }
</script>

<style>

</style>