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
        <img src="img/logo.png" class="logo-header" alt="logo" />
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
      <li class="nav-item">
        <nav-link to="/" class="nav-link top-menu">
          <i class="now-ui-icons education_paper"></i>
          {{$t('home')}}
        </nav-link>
      </li>
      <li class="nav-item">
        <nav-link to="/services" class="nav-link top-menu">
          <i class="now-ui-icons business_chart-pie-36"></i>
          {{$t('services')}}
        </nav-link>
      </li>
      <li class="nav-item">
        <nav-link to="/contact" class="nav-link top-menu">
          <i class="now-ui-icons users_circle-08"></i>
          {{$t('contact')}}
        </nav-link>
      </li>
      <li class="nav-item float-right menu-languages">
        <a
          class="nav-link"
          v-for="entry in languages"
          :key="entry.title"
          @click="changeLocale(entry.language)"
          v-bind:title="entry.title"
          data-placement="bottom"
        >{{entry.title}}</a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from "@/components";
import { Popover } from "element-ui";
import i18n from "@/plugins/i18n";
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
  },
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "es", language: "es", title: "Español" }
      ]
    };
  },
  methods: {
    changeLocale(locale) {
      i18n.locale = locale;
    },
    mounted() {
      console.log(this.props);
    }
  }
};
</script>

<style scoped>
.logo-header {
  width: 170px;
}
.menu-languages {
  justify-content: flex-end;
  display: flex;
  margin-left: 10px;
}
.top-menu,
.top-menu:hover {
  color: #fafafa;
}
</style>
