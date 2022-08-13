<template>
  <div class="m-3 ">
    <div class="flex items-center justify-between w-full">
        <h1 class="flex items-center justify-start font-bold">Cahier de notes</h1>
        <div @click="currentComponent = 0">
            <button class="sm:text-base text-sm px-3 py-1.5 shadow-lg bg-blue-50 flex items-center">Nouvelle note <PlusIcon class="w-4 ml-1 sm:w-5" /></button>
        </div>
    </div>
    <div class="mt-3">
        <component :is="components[currentComponent]"></component>
    </div>
  </div>
</template>

<script setup>
    import { markRaw, ref, shallowRef } from "vue";
    import { PlusIcon } from "@heroicons/vue/solid"
    import CreateNote from "../components/notes/CreateNote.vue"
    import AllNotes from "../components/notes/AllNotes.vue"
    const components = [CreateNote, AllNotes]
    const currentComponent = ref(1)
    
</script>

<style>

</style>