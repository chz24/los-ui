<script setup>

const date = "4 Dec 2023";

const viewMenu = () => {
  window.open('/image', '_blank').focus();
  return 
}

</script>

<template>
  <div class="container rounded-md shadow-xl m-auto w-3/12 h-1/3 border border-[#0098c0]">
    <div class="flex px-12 pt-8 pb-8 mb-12 bg-[#f9f9fa]">
      <h1 class="text-xl font-black">Edit Reservation</h1>
      <button type="button" class="ml-auto border border-black rounded-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
      </button>
    </div>
    <div class="flex px-14 flex-col mx-auto mb-12">
      <p class="text-center text-base mb-8">Update Reservation for {{ date }} </p>
      <div class="flex mb-2">
        <label class="w-full mr-4 text-base" v-on:click="viewMenu">View Menu</label>
        <button type="button" class="w-6 h-6 m-auto" >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </button>
      </div>
      <div class="flex mb-2">
        <label class="w-full mr-4 text-base">Lunch Ordered</label>
        <button type="button" class="w-6 h-6 mr-0.5 m-auto">
          <input type="checkbox" value="" name="bordered-checkbox" class="w-5 h-5 text-blue-600 border-gray-300 rounded">
        </button>
      </div>
    </div>
    <div class="flex mx-4 mb-8">
      <button type="button" id="delete-button" class="mx-auto bg-[#bf343d] text-[#ffffff] px-5 py-2.5 text-center rounded-lg" v-on:click="sendData">Delete</button>
      <button type="button" id="save-button" class="mx-auto bg-[#0072ff] text-[#ffffff] px-5 py-2.5 text-center rounded-lg" v-on:click="sendData">Save</button>
    </div>
  </div>
</template>

<style scoped>
</style>
