<template>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600">
        <option selected>Choose type</option>
        <option value="MO">Monthly</option>
        <option value="WE">Weekly</option>
        <option value="DA">Daily</option>
    </select>

    <div class="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-500 bg-red-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-black-600">
        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send to email</label>
    </div>

    <fwb-button @click="sendEmail" color="dark">button</fwb-button>
</template>

<script setup>
</script>


<script lang="js">
  import axios from 'axios';
  import {FwbButton} from "flowbite-vue";

  export default {
    components: {FwbButton},
  data() {
    return {
      posts: [],
      emailSend: {
        service_id: 'service_qwf13rn',
        template_id: 'template_0vfh7c2',
        user_id: 'AedF6x9VpztaX-zg_',
        template_params: {
            'to_name': 'Steven',
            'from_name': 'Andros',
            'to_email': 'stevenkristian300900@gmail.com',
            'message': 'Halo',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
      },
    };
  },

  methods: {
    async sendEmail() {
      try {
        const response = await axios.post(
          "https://api.emailjs.com/api/v1.0/email/send",
          this.emailSend
        )
        // JSON responses are automatically parsed.
        this.status = response.data;
        console.log(this.status);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
