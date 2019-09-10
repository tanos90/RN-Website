import Vue from 'vue';
import Router from 'vue-router';
import Landing from './pages/Landing.vue';
import Services from './pages/Services.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';
import Contact from './pages/Contact.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'landing',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      },
      alias: 'landing'
    },
    {
      path: '/services',
      name: 'services',
      components: { default: Services, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    },
    {
      path: '/contact',
      name: 'contact',
      components: { default: Contact, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 200 },
        footer: { backgroundColor: 'black' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
