<template>
<div @click="menuClicked = false" v-if="menuClicked" class="absolute top-0 z-10 w-screen h-screen bg-black opacity-30"></div>
    <div id="sidebar" class="hidden sm:block">
        <Sidebar />
    </div>
    <div @focusout="menuClicked = false" :class="menuClicked ? 'left-0' : '-left-96'" class="fixed z-20 transition-all duration-500 sm:hidden" id="sidebarResponsive">
        <Sidebar />
    </div>
    <div class="lg:ml-[250px] md:ml-[200px] sm:ml-[120px]">
        <Header @clicked="getClicked" />
        <slot></slot>
    </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import { ref } from 'vue';

const menuClicked = ref(false)

const getClicked = (v) => {
    menuClicked.value = v
}

</script>

<style>

</style>