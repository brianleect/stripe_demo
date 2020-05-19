#Checkout button does not work, consider importing stripe??? what is the issue?
#ID not recognised? or stripe commands are not functioning

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>
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

      <button
        style="background-color:#6772E5;color:#FFF;padding:8px 12px;border:0;border-radius:4px;font-size:1em"
        id="checkout-button-sku_HEW2W2BNinxyYk"
        role="link"
      >
        One-Time-Purchase (5 POINTS)
      </button>

      <div id="error-message"></div>
    </div>
  </div>
</template>

<script src="https://js.stripe.com/v3"></script>

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
(function() {
  var stripe = Stripe("pk_test_LIc2NCzFeOD5ng6VrGwNE8Dx00Z67P4mCD");

  var checkoutButton2 = document.getElementById(
    "checkout-button-plan_HED9jNsqacP8sZ"
  );
  checkoutButton2.addEventListener("click", function() {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe
      .redirectToCheckout({
        lineItems: [{ price: "plan_HED9jNsqacP8sZ", quantity: 1 }],
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
(function() {
  var stripe = Stripe("pk_test_LIc2NCzFeOD5ng6VrGwNE8Dx00Z67P4mCD");

  var checkoutButton3 = document.getElementById(
    "checkout-button-sku_HEW2W2BNinxyYk"
  );
  checkoutButton3.addEventListener("click", function() {
    // When the customer clicks on the button, redirect
    // them to Checkout.
    stripe
      .redirectToCheckout({
        lineItems: [{ price: "sku_HEW2W2BNinxyYk", quantity: 1 }],
        mode: "payment",
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
