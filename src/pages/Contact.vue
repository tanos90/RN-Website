<template>
  <div>
    <div class="page-header clear-filter" filter-color="blue">
      <parallax class="page-header-image"></parallax>
      <div class="container">
        <h3 class="title">Contact Us</h3>
        <h2 class="title mt-1">Want to work with us?</h2>
        <p class="category"></p>
        <div class="content"></div>
      </div>
    </div>
    <div class="section pt-0 mx-5">
      <div class="container">
        <div class="row justify-content-md-center sharing-area text-center mt-5 mb-4">
          <div class="text-center col-md-12 col-lg-8">
            <span class="social-networks-title">Social Networks</span>
          </div>
          <div class="text-center col-md-12 col-lg-8">
            <a
              target="_blank"
              href="https://www.twitter.com/creativetim"
              class="btn btn-neutral btn-icon btn-twitter btn-round btn-lg"
              rel="tooltip"
              title="Follow us"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/creativetim"
              class="btn btn-neutral btn-icon btn-facebook btn-round btn-lg"
              rel="tooltip"
              title="Like us"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company-beta/9430489/"
              class="btn btn-neutral btn-icon btn-linkedin btn-lg btn-round"
              rel="tooltip"
              title="Follow us"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div class="row service">
          <div class="text-center col-md-12 contact-title my-2">Address</div>
          <div
            class="text-center col-md-12 my-2"
          >Calle 34 y Avenida Guadalupe Victoria S/N, Burócrata, 83449 San Luis Río Colorado, Son.</div>
        </div>
        <div class="row service">
          <div class="text-center col-md-12 contact-title my-2">Phone</div>
          <div class="text-center col-md-12 my-2">653 517 0821</div>
        </div>
      </div>
      <p class="description my-5">Your project is very important to us.</p>
      <div class="row">
        <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
          <fg-input
            class="input-lg"
            placeholder="First Name..."
            v-model="form.firstName"
            addon-left-icon="now-ui-icons users_circle-08"
          ></fg-input>
          <fg-input
            class="input-lg"
            placeholder="Email Here..."
            v-model="form.email"
            addon-left-icon="now-ui-icons ui-1_email-85"
          ></fg-input>
          <div class="textarea-container">
            <textarea
              class="form-control"
              name="name"
              rows="4"
              cols="80"
              v-model="form.message"
              placeholder="Type a message..."
            ></textarea>
          </div>
          <div class="send-button">
            <n-button type="primary" round block size="lg">Send Message</n-button>
          </div>
        </div>
      </div>
    </div>

    <GmapMap
      :center="{lat: 32.4596253,lng:-114.7431169 }"
      :zoom="16"
      map-type-id="terrain"
      style="width: 100%; height: 300px"
    >
      <GmapMarker
        :position="{lat: 32.4596253,lng:-114.7431169 }"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>
<script>
import { Tabs, TabPane, FormGroupInput, Button } from "@/components";
export default {
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: ""
      }
    };
  },
  name: "contact",
  bodyClass: "contact-page",
  components: {
    Tabs,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    TabPane
  }
};
</script>
<style>
.contact-page .page-header {
  min-height: 350px !important;
}
.contact-title {
  font-weight: 400;
  font-size: 18px;
}
.social-networks-title {
  font-weight: 400;
  font-size: 18px;
}
</style>
