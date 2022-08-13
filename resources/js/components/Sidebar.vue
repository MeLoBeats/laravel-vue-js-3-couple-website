<template>
          <div class="fixed sm:fixed h-full shadow-xl shadow-neutral-900 w-[200px] lg:w-[250px] md:w-[200px] sm:w-[120px]">
            <div class="flex items-center justify-start w-full bg-blue-400 h-14">
                <h1 class="ml-1 text-white sm:text-md md:text-lg">{{ user }}</h1>
            </div>
            <div class="flex flex-col w-full h-full overflow-x-hidden bg-blue-50">
                <template :key="item" v-for="item in menuItems">
                    <router-link :to="item.link">
                        <div class="relative flex items-center justify-center w-full transition-all border-b shadow-sm cursor-pointer h-14 hover:translate-x-2">
                            <p class="text-center sm:text-xs md:text-sm">
                                {{ item.name }}
                            </p>
                        </div>
                    </router-link>
                </template>
            </div>
        </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';

    const user = ref("")
    const hoveringItem = ref(false);
    const menuItems = [
        {
            item: "todo",
            name: "Choses à faire",
            link: "/todo"
        },
        {
            item: "timer",
            name: "Compte à rebours",
            link: "/timer"
        },
        {
            item: "mcdo",
            name: "Compteur McDo",
            link: "/mcdo"
        },
        {
            item: "notes",
            name: "Cahier de notes",
            link: "/notes"
        },
        {
            item: "planning",
            name: "Planning",
            link: "/planning"
        },
    ]
    onMounted(() => {
        user.value = "Mayssa"
    })
</script>

<style>

</style>