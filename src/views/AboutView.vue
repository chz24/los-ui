<script lang="js">
  import axios from 'axios';

  export default {
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
        this.posts = response.data;
        console.log(this.posts);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="sendEmail">button</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
