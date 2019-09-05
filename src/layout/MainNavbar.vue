<template>
  <navbar
    class="p-0"
    position="fixed"
    type="primary"
    :transparent="false"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/logo-small.png" class="logo-header" alt="logo" />
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body"></div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item nav-item-link"></li>
      <li class="nav-item nav-item-link"></li>
      <drop-down tag="li" title="Menu" icon="now-ui-icons design_image" class="nav-item">
        <nav-link to="/landing">
          <i class="now-ui-icons education_paper"></i> Home
        </nav-link>
        <nav-link to="/services">
          <i class="now-ui-icons business_chart-pie-36"></i> Services
        </nav-link>
        <nav-link to="/contact">
          <i class="now-ui-icons users_circle-08"></i> Contact
        </nav-link>
      </drop-down>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/CreativeTim"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/CreativeTimOfficial"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
export default {
  name: "main-navbar",
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped>
.logo-header {
  width: 170px;
}
.nav-item-link {
  color: #fafafa;
}
</style>
