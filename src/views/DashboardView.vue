<script setup>
import { Qalendar } from "qalendar";

import { useDashboardStore } from "@/stores/dashboard.js";
import PopupCreate from "@/components/PopupCreate.vue";
import PopupEdit from "@/components/PopupEdit.vue";

const dashboardStore = useDashboardStore()

const showDateMenu = (date) => {
  console.log('muncul sesuatu dong', date)
  dashboardStore.updateIsDateMenuShown(true)
}

const hehe = true

const events = [
  {
    title: "WFO (with Lunch)",
    time: { start: "2023-12-01", end: "2023-12-01" },
    color: "green",
    isEditable: false,
    id: "de471c78cb5c"
  }
]

const configs = {
  locale: "en-US",
  defaultMode: "month",
  week: {
    startsOn: "sunday"
  },
  style: {
    fontFamily: "Noto Sans",
    colorSchemes: {
      meetings: {
        color: "#fff",
        backgroundColor: "#131313",
      },
      sports: {
        color: "#fff",
        backgroundColor: "#ff4081",
      },
    },
  },
}
</script>

<template class="container">
  <div class="container max-w-2xl max-y-4xl mx-auto my-40 is-light-mode">
    <div class="flex mb-4 align">
      <p class="text-xl">Reservation Calendar</p>
      <div class="my-auto ml-auto">
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer">
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm">Recurring</span>
        </label>
      </div>
    </div>
      <Qalendar
          class="w-full"
          :selected-date="new Date()"
          :events="events"
          :config="configs"
          @date-was-clicked="showDateMenu"
      />
  </div>
  <popup-edit />
  <popup-create />

</template>

<style scoped>
</style>