<template>
  <div class="min-h-screen sm:flex">
    <div class="flex-1 m-3 border-gray-400 sm:border-r">
      <div>
        <h1 class="text-sm sm:text-lg sm:text-left md:text-xl">Toutes nos choses a faire !</h1>
      </div>
      <div class="mt-4 sm:block">
        <label for="todo" class="text-sm sm:text-base">Entre une activitée</label>
          <div class="mt-2 h-9 w-44 sm:w-60">
            <input @keyup.enter="handleSubmit()" v-model="currentTask" id="todo" type="text" class="w-full h-full p-4 border border-gray-500 rounded outline-none">
          </div>
          <button @click="handleSubmit()" class="px-3 py-2 mt-2 text-sm text-white bg-blue-400 border rounded shadow-xl w-44 sm:w-60 sm:text-lg">Valider</button>
      </div>
    </div>
    <div class="md:flex-[2] flex-1 mt-6">
      <div class="flex w-full h-10 text-xs border-b border-gray-400 sm:text-sm">
        <div class="flex items-center justify-center flex-1 w-full h-full pr-2 border-r sm:text-xs lg:text-sm">
          <p>Auteur</p>
        </div>
        <div class="flex items-center justify-center flex-1 w-full h-full pr-2 border-r sm:text-xs lg:text-sm">
          <p>Activité</p>
        </div>
        <div class="flex items-center justify-center flex-1 w-full h-full pr-2 border-r sm:text-xs lg:text-sm">
          <p>Fait</p>
        </div>
        <div class="flex items-center justify-center flex-1 w-full h-full pr-2 border-r sm:text-xs lg:text-sm">
          <p>Supprimer</p>
        </div>
      </div>
      <template v-for="task in tasks" :key="task.task">
        <div class="flex w-full h-10 text-xs border-b border-gray-400 odd:bg-neutral-300 even:bg-gray-100 sm:text-sm">
          <div class="flex items-center justify-center flex-1 w-full h-full pr-2 text-center capitalize border-r sm:text-xs lg:text-sm">
            {{ task.author }}
          </div>
          <div class="flex items-center justify-center flex-1 w-full h-full pr-2 text-center capitalize border-r sm:text-xs lg:text-sm">
            {{ task.task }}
          </div>
          <div class="flex items-center justify-center flex-1 w-full h-full pr-2 text-center capitalize border-r sm:text-xs lg:text-sm">
            <input type="checkbox" class="p-2" :checked="task.completed" @change="(e) => handleCheck(e, task)">
          </div>
          <div @click="handleDelete(task)" class="flex items-center justify-center flex-1 w-full h-full pr-2 text-center border-r cursor-pointer sm:text-xs lg:text-sm">
            <button class="p-2 text-white bg-red-500 rounded sm:p-1 md:p-2">
                Supprimer
            </button>
          </div>
        </div>
      </template>
      <!-- <ul>
        <template v-for="task in tasks" :key="task.task">
          <li>- {{ task.task }}</li>
        </template>
      </ul> -->
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

  const tasks = ref([])
  const currentTask = ref("")

  const handleSubmit = () => {
    tasks.value.push({
      id: tasks.value[tasks.value.length - 1] ? tasks.value[tasks.value.length - 1].id + 1 : 1,
      task: currentTask.value,
      author: "Mayssa",
      completed: false
      })
    currentTask.value = ""
  }

  const handleDelete = (task) => {
    // if(confirm("Tu veux vrm la supprimer ? ;(")) {
        tasks.value = tasks.value.filter((v) => {
          return v !== task
        })
      // }
  }

  const completedText = (task) => {
    return task.completed ? "Fait !" : "A faire !"
  }

  const handleCheck = (e, task) => {
    console.log(e.target.checked);
    tasks.value.forEach((v) => {
      if(v == task) {
        v.completed = e.target.checked
      }
    })
  }

</script>

<style>

</style>