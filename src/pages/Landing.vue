<template>
  <div>
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image:url('img/main-background.png')"></parallax>
      <div class="content-center">
        <div class="container">
          <transition name="slide">
            <h1
              style="transition-duration: 1s;"
              v-if="isVisible"
              class="title-text"
            >Accounting Services</h1>
          </transition>

          <div class="text-center">
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
          </div>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
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
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div class="image-container image-left" style="background-image: url('img/bg2.jpg')">
                <!-- First image on the left side -->
              </div>
              <!-- Second image on the left side of the article -->
              <div class="image-container" style="background-image: url('img/bg3.jpg')"></div>
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div class="image-container image-right" style="background-image: url('img/bg3.jpg')"></div>
              <h3>Our values.</h3>
              <h4>INTEGRITY.</h4>
              <p>We work integrally with our clients, with rectitude and honesty, respecting the highest ethical values of our profession. This integrity reflects our personal values.</p>
              <h4>INTEGRITY.</h4>
              <p>
                We are committed to providing services with the highest quality standards. Quality
                in our services is not a negotiable aspect.
              </p>
              <h4>INDEPENDENCE.</h4>
              <p>
                All members of our Firm are independent with respect to our Clients.
                Independence means we can practice our freedom of professional criteria above any other
                commitment with our Clients.
              </p>
            </div>
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
          <div class>
            <infinite-slide-bar duration="20s">
              <div class="col-md-12 d-flex mt-5">
                <div class="col-md-2" v-for="client in clients" :key="client.key">
                  <div class="float-left client">
                    <img class="img-client" :src="'img/clients/' + client.key + '.png'" />
                  </div>
                </div>
              </div>
            </infinite-slide-bar>
          </div>
        </div>
      </div>
    </div>
    <div class="section section-team text-center">
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
      showTeam: false,
      showFirstText: false,
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
      if (scrollValue > 1900) {
        console.log("entro");
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
    this.isVisible = true;
    this.startAnimation = true;
  },

  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style>
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
