#Checkout button does not work, consider importing stripe??? what is the issue?
#ID not recognised? or stripe commands are not functioning

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>
      <button onclick='console.log("haha")'>Basic plan</button>
      <button id="payment2">Intermediate plan</button>
      <button onclick="payment3()">One-time token purchase</button>

      <button
        style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
        id="checkout-button-plan_HED8EQd8RL0AN3"
        role="link"
      >
        Basic Plan
      </button>

      <button
        style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
        id="checkout-button-plan_HED9jNsqacP8sZ"
        role="link"
      >
        Gold Member
      </button>

      <div id="error-message"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
