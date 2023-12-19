<script setup>
import { Qalendar } from "qalendar";

import { useDashboardStore } from "@/stores/dashboard.js";
import { useStorageStore} from "@/stores/storage.js";
import { useReservationStore } from "@/stores/reservation.js";
import PopupCreate from "@/components/PopupCreate.vue";
import PopupEdit from "@/components/PopupEdit.vue";
import {ref} from 'vue';
import {storeToRefs} from "pinia";

import {getDayNumberByDayName, formatToShortDate} from "@/utils/datehelper.js";

const dashboardStore = useDashboardStore()
const storageStore = useStorageStore()
const reservationStore = useReservationStore()

const {settings} = storeToRefs(storageStore)

const userCheckedDayNumbers = settings.value.checkedDays.map(getDayNumberByDayName)

const currentDayNumber = new Date().getDay()

const currentWeekDatesToReserve = userCheckedDayNumbers.map(checkedDayNumber => {
  const date = new Date()
  date.setDate(date.getDate() + (checkedDayNumber - currentDayNumber))
  return date
})


const showDateMenu = (date) => {
  dashboardStore.updateIsDateMenuShown(true)
}

let isCreatePopUpOpen = ref(false)
let createReservationOrderLunch = true

const formatReservationToCalendar = (reservation) => {
  return {
    title: reservation.orderLunch ? "WFO (with Lunch)" : "WFO",
    time: { start: reservation.date, end: reservation.date },
    color: "green",
    isEditable: false
  }
}

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

const createWeeklyReservation = () => {
  const newReservations = currentWeekDatesToReserve.map(dateToReserve => {
    return {
      userId: settings.value.id,
      date: formatToShortDate(dateToReserve),
      orderLunch: createReservationOrderLunch
    }
  })

  newReservations.forEach(reservationStore.addReservations)

  isCreatePopUpOpen = false
}
</script>

<template class="container">
  <div class="h-screen w-10/12 mx-auto my-20 is-light-mode">
    <div class="flex mb-4">
      <p class="text-xl my-auto">Reservation Calendar</p>
      <div class="my-auto ml-auto">
        <button type="button" @click="isCreatePopUpOpen = true" id="save-button" class="mx-auto bg-[#0072ff] text-[#ffffff] text-sm px-5 py-2.5 text-center rounded-2xl" >+ Create Weekly Reservation</button>
      </div>
    </div>
      <Qalendar
          class="w-full"
          :selected-date="new Date()"
          :events="reservationStore.getCurrentUserReservations.map(formatReservationToCalendar)"
          :config="configs"
          @date-was-clicked="showDateMenu"
      />
  </div>
    <popup-edit v-show="isEditVisible" @close="closeEdit"/>
    <popup-create v-show="isCreatePopUpOpen" @on-close="isCreatePopUpOpen = false" :order-lunch="createReservationOrderLunch" @on-order-lunch-checked="createReservationOrderLunch = !createReservationOrderLunch" :dates="currentWeekDatesToReserve" @on-submit="createWeeklyReservation" />
</template>

<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
	justify-content: center;
}

</style>