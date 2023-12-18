<script setup>

defineProps({
  dates: Array
})

const formatDisplayedDate = (date) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString("en-US", options)
}

</script>

<template>
  <div class="popup">
    <div class="rounded-md shadow-xl m-auto w-3/12 border border-[#0098c0] bg-[#f9f9fa]">
      <div class="flex px-12 pt-8 pb-8 mb-8">
        <h1 class="text-xl font-black">Create Reservation</h1>
        <button type="button" class="ml-auto border border-black rounded-2xl" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" @click="$emit('onClose')">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
      </div>
  
      <div class="flex px-14 flex-col mx-auto mb-12 bg-[#f9f9fa]">
        <div class="flex-col mb-8">
          <p class="text-center text-base mb-2">Confirm Reservation for these dates:</p>

          <p class="w-full ml-4 text-base" v-for="date in dates">• {{ formatDisplayedDate(date) }} </p>
        </div>
        <div class="flex mb-2">
          <label class="w-full mr-4 text-base">View Menu</label>
          <button type="button" class="w-6 h-6 m-auto" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </button>
        </div>
        <div class="flex">
          <label class="w-full mr-4 text-base">Lunch Ordered</label>
          <button type="button" class="w-6 h-6 mr-0.5 m-auto">
            <input type="checkbox" @change="this.$emit('onOrderLunchChecked')" name="bordered-checkbox" class="w-5 h-5 text-blue-600 border-gray-300 rounded">
          </button>
        </div>
      </div>
      <div class="flex mx-4 mb-5">
        <button type="button" id="save-button" class="mx-auto bg-[#0072ff] text-[#ffffff] px-5 py-2.5 text-center rounded-lg" @click="$emit('onSubmit')">Reserve</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.436);
    display: flex;
    align-items: center;
	  justify-content: center;
}
</style>
