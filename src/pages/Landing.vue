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

          <!-- <div class="text-center">
            <transition name="top">
              <a
                href="#pablo"
                class="button btn-primary btn-icon btn-round title-text"
                style="transition-duration: 2s;"
                v-if="isVisible"
              >
                <i class="fab fa-facebook-square"></i>
              </a>
            </transition>
            <transition name="top">
              <a
                href="#pablo"
                class="button btn-primary btn-icon btn-round"
                style="transition-duration: 2s;"
                v-if="isVisible"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </transition>
            <transition name="top">
              <a
                href="#pablo"
                class="button btn-primary btn-icon btn-round"
                style="transition-duration: 2s;"
                v-if="isVisible"
              >
                <i class="fab fa-google-plus"></i>
              </a>
            </transition>
          </div>-->
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class>
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center first-text-container">
            <transition name="item">
              <h2 class="title" v-if="showFirstText">Who we are?</h2>
            </transition>
            <transition name="item">
              <h5
                class="description"
                v-if="showFirstText"
                style="transition-duration: 3s;"
              >Romero Nieblas y Asociados S.C. (hereinafter “Romero Nieblas”) is a firm that specializes in providing accounting, auditing, tax, and business consultancy services to our clients, ensuring a double benefit based on experience and ample knowledge of their needs. In addition, through a series of strategic alliances, we provide specialized services in the matters of labor and fiscal law.</h5>
            </transition>
          </div>
        </div>
        <div class="section-story-overview">
          <div class="row">
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
                  <h2 class="title title-values" v-if="showValues">Our values</h2>
                </transition>
                <div v-for="value in values" :key="value.title">
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
        <h2
          class="title my-5"
        >Some of the companies and brands who have placed their confidence in us</h2>
        <div class="team">
          <div class="infinite-scroll-container">
            <!-- <infinite-slide-bar duration="20s">
              <div class="col-md-12 d-flex mt-5">
                <div class="col-md-4" v-for="client in clients" :key="client.key">
                  <div class="float-left client">
                    <img class="img-client" :src="'img/clients/' + client.key + '.png'" />
                  </div>
                </div>
              </div>
            </infinite-slide-bar>-->
            <div class="row d-flex mt-5 justify-content-center">
              <div
                class="col-sm-3 col-md-4 d-flex company"
                v-for="client in clients"
                :key="client.key"
              >
                <div class="float-left client m-auto">
                  <img class="img-client" :src="'img/clients/' + client.key + '.png'" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center mb-4">
      <div class="container">
        <h2 class="title">Partners</h2>
        <p class="description">
          Our services are provided through the joint management of our Firm Partners, our strategic
          partners, and the specialized, knowledgeable, and experienced staff members in our office.
        </p>
        <div class="team" v-if="showTeam">
          <template>
            <sequential-entrance class="row">
              <div class="row">
                <div class="col-md-6" v-for="t in team" :key="t.key">
                  <div class="team-player">
                    <img
                      src="img/avatar.png"
                      alt="Thumbnail Image"
                      class="rounded-circle img-fluid img-raised"
                    />
                    <h4 class="title">{{t.name}}</h4>
                    <p class="category text-primary">{{t.title}}</p>
                    <p class="description" v-html="t.description"></p>
                    <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#pablo" class="btn btn-primary btn-icon btn-round">
                      <i class="fab fa-facebook-square"></i>
                    </a>
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
import { Button, FormGroupInput, InfiniteSlideBar } from "@/components";
import { setTimeout } from "timers";
export default {
  name: "landing",
  bodyClass: "landing-page",
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
    InfiniteSlideBar
  },
  methods: {
    toggleDropDown() {}
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
      values: [
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
      team: [
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
      ],
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
    };
  },
  methods: {
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
    width: 33% !important;
  }
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
  filter: grayscale(100%);
  margin: auto;
  text-align: center;
}
.company:hover {
  filter: none;
}

.logo-text {
  width: 500px;
}

.infinite-scroll-container {
  width: 100% !important;
  max-width: 100% !important;
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
