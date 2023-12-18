<template>
  <h1 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-black">Report type</h1>
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-sm">
      <option selected>Choose type</option>
      <option value="RW">Report WFO</option>
      <option value="RL">Report Lunch Order</option>
      <option value="RV">Report Vendor</option>
  </select>

  <div class="flex items-center mb-4 mt-2">
      <input id="default-checkbox" type="checkbox" value="" v-model="isSendEmail" @change="handleCheckboxChange" class="w-4 h-4 text-blue-500 bg-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-black-600">
      <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Send to email</label>
  </div>

  <button @click="sendEmail" class="bg-blue-500 rounded p-2">Submit</button>
</template>

<script setup>
</script>

<script lang="js">
  import axios from 'axios';

  export default {
  components: {},
  data() {
    return {
      isSendEmail: false,
      status: [],
      emailSend: {
        service_id: 'service_qwf13rn',
        template_id: 'template_0vfh7c2',
        user_id: 'AedF6x9VpztaX-zg_',
        template_params: {
            'to_name': 'Steven',
            'from_name': 'Andros',
            'to_email': 'hesir60123@astegol.com',
            'message': 'Halo',
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
      },
    };
  },

  methods: {
    async sendEmail() {
      console.log(this.isSendEmail)
      if (!this.isSendEmail) {
        return
      }
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
    handleCheckboxChange() {
      // This method will be called when the checkbox state changes
      console.log("Checkbox state changed. Checked:", this.isChecked);
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
