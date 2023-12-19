<template>
  <div class="h-screen w-1/4 mx-auto my-10">
    <p class="text-2xl my-auto leading-none tracking-tight text-gray-900">Report Type</p>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 max-w-sm">
        <option selected>Choose type</option>
        <option value="RW">Report WFO</option>
        <option value="RL">Report Lunch Order</option>
        <option value="RV">Report Vendor</option>
    </select>

    <div class="flex items-center mb-4 mt-2">
        <input id="default-checkbox" type="checkbox" value="" v-model="isSendEmail" @change="handleCheckboxChange" class="w-4 h-4 text-blue-500 bg-blue-500 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-black-600">
        <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-400">Send to email</label>
    </div>

    <button @click="sendEmail(), downloadPDF()" :style="themeColors" class="fixed rounded p-2 text-white">Submit</button>
  </div>
</template>

<script>
  import axios from 'axios';
  import {jsPDF} from 'jspdf';
  import autoTable from 'jspdf-autotable'
  import { useReservationStore } from "@/stores/reservation.js";
  import { useStorageStore } from '@/stores/storage';
  import { storeToRefs } from 'pinia';

  export default {
  setup() {
    const reservationStore = useReservationStore();
    const storageStore = useStorageStore();

    return {
      reservationStore,
      storageStore
    }
  },
  computed: {
    themeColors() {
      console.log("halo" + this.$colors.primary)
      return {
        "--white": this.$colors.white,
        "--black": this.$colors.black,
        "--primary": this.$colors.primary,
        "--secondary": this.$colors.secondary,
        "--tertiary": this.$colors.tertiary,
        "--error": this.$colors.error,
      };
    },
  },
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
            'from_name': 'Codebli',
            'to_email': 'stevenkristian300900@gmail.com',
            'message': 'Report',
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
    downloadPDF() {
      const doc = new jsPDF();

      doc.text('Report', 10, 10);
      const reservation = this.reservationStore.getAllReservations.map(reservation => {
        return {
          userId: reservation.userId,
          date: reservation.date,
          orderLunch: reservation.orderLunch
        }
      })
      const reservationUser = this.storageStore.settings
      console.log(reservationUser)
      // const reservations = reservation.map(formatReservationToCalendar)
      console.log(reservation)
      // {} = this.reservationStore.getAllReservations
      autoTable(doc, {
        head: [['Name', 'Email', 'Floor', 'Wing Area']],
        body: [ 
          ['Codebli', 'codebli@gdn-commerce.com', '15', 'C'],
          ['Andros', 'andros@gdn-commerce.com', '15', 'B'],
          ['Anton', 'anton@gdn-commerce.com', '15', 'B'],
          ['Steven', 'steven@gdn-commerce.com', '15', 'B'],
          ['Ubai', 'ubai@gdn-commerce.com', '15', 'B'],
        ]
      })

      doc.save('Report.pdf')
    },
  },
};
</script>

<style>
  button {
    background-color: var(--primary);
  }

</style>
