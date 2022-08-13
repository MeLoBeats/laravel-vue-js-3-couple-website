<template>
  <div class="m-3">
    Mayssa est de retour dans : {{ dayLast }} jours, {{ hourLast }} heures {{ minLast }} minutes et {{ secLast }} secondes
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';


const backTime = new Date(1661288400000)
let nowTime = new Date()
let dayLast = ref(backTime.getDate() - nowTime.getDate())
let hourLast = ref(backTime.getHours() - nowTime.getHours())
let minLast = ref(59 - nowTime.getMinutes())
let secLast = ref(59 - nowTime.getSeconds())
const timeInterval = setInterval(() => {
    nowTime = new Date()
    dayLast.value = backTime.getDate() - nowTime.getDate()
    hourLast.value = backTime.getHours() - nowTime.getHours() - 1
    minLast.value = 59 - nowTime.getMinutes()
    secLast.value = 59 - nowTime.getSeconds()

}, 300)

watch(dayLast, (day) => {
    if(day == 0 && minLast.value == 0 && secLast.value == 0) {
        clearInterval(timeInterval);
    }
})


</script>

<style>

</style>