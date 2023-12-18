<script>
export default {
  mounted() {
    document.addEventListener('save-button', this.setupMainNavigatorMotion);
  },
  methods: {
    sendData() {
      console.log(this.region, this.distance, this.transportation);
    },
  },

  data: function () {
    return {
      region: "Select",
      distance: "0",
      transportation: "Select",
    };
  },
};
</script>

<template>
  <div id="form-page" class="container mx-auto my-40">
    <div id="registration-form" class="container mx-auto">
      <p id="registration-text" class="text-lg font-bold">Registration Form</p>
      <p id="office-region-text" class="text-lg font-bold">Office Region</p>
      <select id="office-region-selection" class="text-sm" v-model="region">
        <option selected="true" disabled="true">Select</option>
        <option value="kstubun">KS Tubun</option>
        <option value="saranajaya">Sarana Jaya</option>
        <option value="wtc">WTC</option>
        <option value="rise">Rise</option>
        <option value="others">Others</option>
      </select>

      <p id="transportation-text" class="text-lg font-bold">Transportation</p>
      <p id="travel-distance-text" class="text-sm">
        Travel Distance to Office (in km)
      </p>
      <input v-model="distance" />
      <br /><br />

      <p id="transportation-used-text" class="text-sm">Transportation Used</p>
      <select
        id="transportation-selection"
        class="text-sm"
        v-model="transportation"
      >
        <option selected="true" disabled="true">Select</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="car">Car</option>
        <option value="bus">Public Transportation</option>
        <option value="others">Others</option>
      </select>

      <button id="save-button" type="button" v-on:click="sendData">Save</button>
    </div>
  </div>
</template>

<style scoped>
#form-page {
  background-color: #0098c0;
  width: 100vw;
  height: 100vh;
}

#registration-form {
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: auto;
  height: 45rem;
  width: 40rem;
  border-radius: 12px;
}

#registration-text {
  padding: 3rem;
  text-align: center;
}

*:focus {
  outline: none;
}

select {
  position: relative;
  border: 1px solid blue;
  position: relative;
  width: 80%;
}

input {
  background: none;
  width: 80%;
  border: none;
  border-bottom: 1px solid blue;
}

#transportation-text {
  padding-top: 3em;
}

#office-region-text,
#transportation-used-text,
#travel-distance-text {
  padding: 2rem 0;
}

#save-button {
  margin: auto;
}

button {
  background-color: #0098c0;
  color: #ffffff;
  width: 8em;
  height: 3.2em;
  border-radius: 1.3em;
}

p,
select,
input {
  margin: 0 4rem;
}
</style>
