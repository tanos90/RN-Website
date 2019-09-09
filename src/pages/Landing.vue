<template>
  <div>
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image:url('img/bg5.jpg')"></parallax>
      <div class="content-center">
        <div class="container">
          <transition name="top">
            <h1 style="transition-duration: 1s;" v-if="isVisible" class="title-text">
              <img src="img/logo-text.png" class="logo-text" alt="logo" />
            </h1>
          </transition>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class>
        <div class="row mx-0">
          <div class="col-md-8 ml-auto mr-auto text-center first-text-container">
            <transition name="item">
              <h2 class="title" v-if="showFirstText">{{$t('aboutUsTitle')}}</h2>
            </transition>
            <transition name="item">
              <h5
                class="description"
                v-if="showFirstText"
                style="transition-duration: 3s;"
              >{{$t('aboutUsText')}}</h5>
            </transition>
          </div>
        </div>
        <div class="section-story-overview">
          <div class="row mx-0">
            <div class="col-md-6 mx-4">
              <div class="image-container image-left" style="background-image: url('img/bg2.jpg')">
                <!-- First image on the left side -->
              </div>
              <!-- Second image on the left side of the article -->
            </div>
            <div class="col-md-5">
              <div class="image-container image-right" style="background-image: url('img/bg4.jpg')"></div>
            </div>
            <div class="col-md-12 text-center px-0 py-5 values-container">
              <div class="mb-5">
                <!-- First image on the right side, above the article -->

                <transition name="item">
                  <h2 class="title title-values" v-if="showValues">{{$t('valuesTitle')}}</h2>
                </transition>
                <div v-for="value in values[this.$i18n.locale]" :key="value.title">
                  <transition name="item">
                    <h4
                      style="transition-duration: 3s;"
                      v-if="showValues"
                      class="title-values"
                    >{{value.title}}</h4>
                  </transition>
                  <transition name="item">
                    <span
                      style="transition-duration: 3s;"
                      v-if="showValues"
                      class="mx-auto text-values"
                      v-html="value.text"
                    ></span>
                  </transition>
                </div>
              </div>
            </div>
          </div>
          <div class="image-values" style="background-image: url('')">
            <img class="img-client" src="img/bg3.jpg" />
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
      <div class="container">
        <h2 class="title my-5">{{$t('clientsTitle')}}</h2>
        <div class="team mx-0 w-100">
          <slider animation="fade">
            <slider-item
              v-for="(i, index) in pages"
              :key="index"
              :style="i"
              class="w-100 row mx-0 mt-5 justify-content-center"
            >
              <div
                class="col-sm-3 col-md-4 d-flex company"
                v-for="client in i.clients"
                :key="client.key"
              >
                <div class="float-left client mx-auto">
                  <img class="img-client logo-client" :src="'img/clients/' + client.key + '.png'" />
                </div>
              </div>
            </slider-item>
          </slider>
        </div>
      </div>
    </div>
    <div class="section section-team text-center mb-4">
      <div class="container">
        <h2 class="title">{{$t('partnersTitle')}}</h2>
        <p class="description">{{$t('partnersText')}}</p>
        <div class="team" v-if="showTeam">
          <template>
            <sequential-entrance>
              <div class="row mx-0">
                <div class="col-md-6" v-for="t in team[this.$i18n.locale]" :key="t.key">
                  <div class="team-player">
                    <img
                      src="img/avatar.png"
                      alt="Thumbnail Image"
                      class="rounded-circle img-fluid img-raised"
                    />
                    <h4 class="title">{{t.name}}</h4>
                    <p class="category text-primary">{{t.title}}</p>
                    <p class="description" v-html="t.description"></p>
                    <!-- <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                      <i class="fab fa-facebook-square"></i>
                    </a>-->
                  </div>
                </div>
              </div>
            </sequential-entrance>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
          
<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}
import { Button, FormGroupInput } from "@/components";
import { setTimeout } from "timers";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: ""
      },
      isVisible: false,
      startAnimation: false,
      showValues: false,
      showTeam: false,
      showFirstText: false,
      pages: [
        {
          name: "1",
          clients: [
            {
              key: 1
            },
            {
              key: 2
            },
            {
              key: 3
            },
            {
              key: 4
            },
            {
              key: 5
            },
            {
              key: 6
            }
          ]
        },
        {
          name: "2",
          clients: [
            {
              key: 7
            },
            {
              key: 8
            },
            {
              key: 9
            },
            {
              key: 10
            },
            {
              key: 11
            },
            {
              key: 12
            }
          ]
        }
      ],
      values: {
        en: [
          {
            title: "INTEGRITY",
            text:
              "We work integrally with our clients, with rectitude and honesty, respecting the highest ethical values of our profession.<br >This integrity reflects our personal values."
          },
          {
            title: "QUALITY",
            text:
              "We are committed to providing services with the <b>highest quality standards</b>.<br >Quality in our services is not a negotiable aspect."
          },
          {
            title: "INDEPENDENCE",
            text:
              "All members of our Firm are independent with respect to our <b>Clients</b>.<br >Independence means we can practice our freedom of professional criteria above any other commitment with our Clients."
          }
        ],
        es: [
          {
            title: "INTEGRIDAD",
            text:
              "Actuamos con nuestros Clientes de manera íntegra, con rectitud y honestidad, respetando los más altos valores éticos de nuestra profesión. Esta integridad es reflejo de nuestros valores personales."
          },
          {
            title: "CALIDAD",
            text:
              "Estamos comprometidos a prestar servicios con los más altos estándares de calidad. La calidad en nuestros servicios no debe ser un aspecto negociable."
          },
          {
            title: "INDEPENDENCIA",
            text:
              "Todos los miembros de la Firma somos independientes en relación a nuestros Clientes. La Independencia significa ejercer nuestra libertad de criterio profesional sobre cualquier otro compromiso con nuestros Clientes."
          }
        ]
      },

      team: {
        es: [
          {
            key: 1,
            name: "Francisco Everardo Romero Ozuna",
            title: "Contador Público",
            description:
              "Licenciado en Contaduría Pública por la Universidad de Sonora (2000-04), con Maestría en Impuestos por la Universidad del Valle de México (2005-07)."
          },
          {
            key: 2,
            name: "Jorge Alberto Nieblas Mendivil",
            title: "Contador Público",
            description:
              "Contador Público por la Universidad de Sonora (1990-94). Con más de 16 años de experiencia en el Sector Hotelero - Turístico, donde se desempeñó como Contador General y más tarde como Contralor (2000-2016)."
          }
        ],
        en: [
          {
            key: 1,
            name: "Francisco Everardo Romero Ozuna",
            title: "Public Accountant",
            description:
              "With degree from the Universidad de Sonora (2000-04), with a Masters in Taxes from the Universidad del Valle de México (2005-07)."
          },
          {
            key: 2,
            name: "Jorge Alberto Nieblas Mendivil",
            title: "Public Accountant",
            description:
              "Degree from the Universidad de Sonora (1990-94) <br/ > More than 15 years of experience in the Hotel-Tourism sector, where he has worked as General Accountant as well as Comptroller (2000-2016)."
          }
        ]
      }
    };
  },
  methods: {
    toggleDropDown() {},
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      this.currentScrollValue = scrollValue;
      if (scrollValue > 400) {
        this.showValues = true;
      }
      if (scrollValue > 1700) {
        this.showTeam = true;
      }
      if (scrollValue > 1) {
        this.showFirstText = true;
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
    this.handleScroll();
    this.isVisible = true;
    this.startAnimation = true;
    setTimeout(() => {
      if (!this.showFirstText) {
        this.showFirstText = true;
      }
    }, 1200);
  },

  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style>
@media (max-width: 600px) {
  .company {
    width: 30% !important;
  }
}

.company {
  max-height: 250px;
}
.slider {
  width: 100% !important;
  height: 400px !important;
}
.slider-btn {
  width: 0px !important;
}
.slider-indicator-icon {
  background-color: #c7c7c7 !important;
}
.slider-indicator-active {
  background-color: #004364 !important;
}
.slider-btn-right,
.slider-btn-left {
  background: #ffffff !important;
}
.image-values {
  height: 200px;
}
.title-values {
  color: #fafafa;
}
.text-values {
  color: #c7c7c7;
}
.values-container {
  background: #1d1c1c;
}
.company {
  margin: 10px auto;
  text-align: center;
}

.logo-client {
  width: 80%;
  max-height: 80px;
  width: auto;
  height: auto;
}

.logo-text {
  width: 500px;
}

.first-text-container {
  min-height: 240px !important;
}
.description {
  color: #212529 !important;
  font-weight: 400 !important;
}
.button {
  padding: 0.7rem 0.9rem !important;
  margin: 3px !important;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

.slide-enter {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(400px, 0, 0);
}

.slide-enter-to {
  transform: scale3d(1, 1, 1);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.slide-leave {
  transform: scale3d(1, 1, 1);
}

.slide-leave-to {
  opacity: 0;
  transform: scale3d(2, 0.5, 1) translate3d(-400px, 0, 0);
}

.rotate-enter {
  transform: perspective(500px) rotate3d(0, 1, 0, 90deg);
}
.rotate-enter-active,
.rotate-leave-active {
  transition: 0.5s;
}
.rotate-leave-to {
  transform: perspective(500px) rotate3d(0, 1, 0, -90deg);
}

.top-enter-active,
.top-leave-active {
  transition: 0.5s;
}
.top-enter,
.top-leave-to {
  opacity: 0;
  transform: translate3d(0, -40px, 0);
}

.top-move {
  opacity: 0.5;
  transition: 0.5s;
}

.item-enter-active,
.list-leave-active {
  transition: all 1s;
}
.item-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
