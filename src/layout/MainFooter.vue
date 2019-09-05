<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="row d-flex justify-content-center">
      <nav class="col-md-4">
        <ul>
          <li>
            <a href="./private_policy_mx.pdf" target="_blank">Privacy Policy</a>
          </li>
          <li>
            <router-link to="/contact">Contact Us</router-link>
          </li>
        </ul>
      </nav>
      <div class="col-md-4 row">
        <span class="col-md-12 row">
          <span class="col-lg-6 col-md-12 col-sm-12">Monday to Friday:</span>
          <span class="col-lg-6 col-md-12 col-sm-12">8:15 AM - 6:00 PM</span>
        </span>
        <span class="col-md-12 row">
          <span class="col-lg-6 col-md-12 col-sm-12">Saturday:</span>
          <span class="col-lg-6 col-md-12 col-sm-12">8:15 AM - 2:00 PM</span>
        </span>
      </div>
      <div
        class="col-md-4 d-flex justify-content-end copyright"
      >&copy; Romero Nieblas & Asociados, S.C. - {{ year }}</div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
