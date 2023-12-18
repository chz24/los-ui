<script setup>
import { ref } from 'vue'
import { useReservationStore } from "@/stores/reservation.js";
import router from "@/router/index.js";

const reservationStore = useReservationStore()

const checkedDays = ref([])

const tempData = {
  region: "",
  floor: "",
  wing: "",
  distance: 0,
  transportation: "",
  orderLunch: false
}

const storeFormDataAndRedirect = () => {
  reservationStore.updateData(
      tempData.region,
      tempData.floor,
      tempData.wing,
      tempData.distance,
      tempData.transportation,
      checkedDays,
      tempData.orderLunch
  )

  router.push('/dashboard')
}


</script>

<template>
  <div id="registration-form" class="container-md mx-auto my-40 max-w-2xl rounded-lg bg-white">
    <div id="inner-registration-form" class="mx-8">

      <p id="registration-text" class="text-lg text-center pt-12 font-bold">Registration Form</p>

      <div class="p-12 m-8 border">
        <p class="text-base mb-8 font-bold">Office Region</p>

        <p class="text-sm mb-1">Office Region</p>
        <select class="text-sm mb-8 w-full" v-model="tempData.region">
          <option selected disabled>Choose a region</option>
          <option value="Sarana Jaya">Sarana Jaya</option>
        </select>

        <p class="text-sm mb-1">Floor</p>
        <select class="text-sm mb-8 w-full" v-model="tempData.floor">
          <option selected="true" disabled="true">Choose a floor</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
        </select>

        <p class="text-sm mb-1 ">Wing</p>
        <select class="text-sm w-full" v-model="tempData.wing">
          <option selected="true" disabled="true">Choose a wing</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>

      </div>

      <div class="p-12 m-8 border">
        <p class="text-base mb-8 font-bold">Transportation</p>

        <p class="text-sm mb-1">Travel Distance to Office (in km)</p>
        <input class="border-b border-[#0098c0] mb-8 w-full" v-model="tempData.distance" />

        <p class="text-sm mb-1">Transportation Used</p>
        <select class="text-sm w-full" v-model="tempData.transportation">
          <option selected="true" disabled="true">Choose a transportation</option>
          <option value="Motorcycle">Motorcycle</option>
          <option value="Car">Car</option>
          <option value="Bus">Public Transportation</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div class="p-12 m-8 border">
        <p class="text-base mb-8 font-bold">Recurring WFO </p>

        <p class="text-sm mb-1">WFO Days</p>
        <div class="flex space-x-4 mb-8">
          <label class="flex items-center">
            <input type="checkbox" class="h-5 w-5 bg-gray-200" disabled>
            <span class="text-sm ml-2 inline-block checkbox-label">Su</span>
          </label>

          <label class="flex items-center">
            <input type="checkbox" class="h-5 w-5 bg-white" value="Monday" v-model="checkedDays">
            <span class="text-sm ml-2 inline-block checkbox-label">M</span>
          </label>

          <label class="flex items-center">
            <input type="checkbox" class="h-5 w-5 bg-white" value="Tuesday" v-model="checkedDays">
            <span class="text-sm ml-2 inline-block checkbox-label">Tu</span>
          </label>

          <label class="flex items-center">
            <input type="checkbox" class="h-5 w-5 bg-white" value="Wednesday" v-model="checkedDays">
            <span class="text-sm ml-2 inline-block checkbox-label">W</span>
          </label>

          <label class="flex items-center">
            <input type="checkbox" class="h-5 w-5 bg-white" value="Thursday" v-model="checkedDays">
            <span class="text-sm ml-2 inline-block checkbox-label">Th</span>
          </label>

          <label class="flex items-center">
            <input type="checkbox" class="h-5 w-5 bg-white" value="Friday" v-model="checkedDays">
            <span class="text-sm ml-2 inline-block checkbox-label">F</span>
          </label>

          <label class="flex items-center">
            <input type="checkbox" class="h-5 w-5 bg-gray-200">
            <span class="text-sm ml-2 inline-block checkbox-label">Sa</span>
          </label>
        </div>

        <p class="text-sm mb-1">Order Lunch by Default?</p>
        <label class="checkbox-container flex items-center">
          <input type="checkbox" class="h-5 w-5 bg-white" v-model="tempData.orderLunch">
          <span class="text-sm ml-2 checkbox-label">Yes</span>
        </label>
      </div>

      <div class="flex justify-center">
        <button id="save-button" class="bg-[#0098c0] text-[#ffffff] w-24 h-10 rounded-lg" type="button" @click="storeFormDataAndRedirect">Save</button>
      </div>
      <p class="text-sm text-center py-6">You can change this later in settings</p>

    </div>
  </div>
</template>

<style scoped>
#form-page {
  background-color: #0098c0;
}

*:focus {
  outline: none;
}

select {
  position: relative;
  border: 1px solid blue;
}

.border {
  border: 1px solid blue;
}

</style>
