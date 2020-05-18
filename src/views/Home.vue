<script src="https://js.stripe.com/v3"></script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <div>
      <button onclick="payment1()">Basic plan</button>
      <button onclick="payment2()">Intermediate plan</button>
      <button onclick="payment3()">One-time token purchase</button>

      <button
        style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
        id="checkout-button-plan_HED8EQd8RL0AN3"
        role="link"
      >
        Basic Plan
      </button>

      <div id="error-message"></div>
    </div>
  </div>
</template>

<script>
(function() {
  var stripe = Stripe("pk_test_LIc2NCzFeOD5ng6VrGwNE8Dx00Z67P4mCD");

  var checkoutButton = document.getElementById(
    "checkout-button-plan_HED8EQd8RL0AN3"
  );
  checkoutButton.addEventListener("click", function() {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe
      .redirectToCheckout({
        lineItems: [{ price: "plan_HED8EQd8RL0AN3", quantity: 1 }],
        mode: "subscription",
        // Do not rely on the redirect to the successUrl for fulfilling
        // purchases, customers may not always reach the success_url after
        // a successful payment.
        // Instead use one of the strategies described in
        // https://stripe.com/docs/payments/checkout/fulfillment
        successUrl: "http://localhost:8080/#/purchased",
        cancelUrl: "http://localhost:8080/#/cancelled"
      })
      .then(function(result) {
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer.
          var displayError = document.getElementById("error-message");
          displayError.textContent = result.error.message;
        }
      });
  });
})();
</script>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
