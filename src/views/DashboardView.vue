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
  disableModes: ["week", "day"],
  week: {
    startsOn: "sunday"
  },
  month: {
    showTrailingAndLeadingDates: false,
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
  <div class="container h-full max-w-2xl max-y-4xl mx-auto my-20 is-light-mode">
    <div class="flex mb-4">
      <p class="text-xl my-auto">Reservation Calendar</p>
      <div class="my-auto ml-auto">
        <button type="button" id="save-button" class="mx-auto bg-[#0072ff] text-[#ffffff] text-sm px-5 py-2.5 text-center rounded-2xl" v-on:click="sendData">+ Create Reservation</button>
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