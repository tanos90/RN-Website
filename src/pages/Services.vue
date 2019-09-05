<template>
  <div>
    <div class="page-header clear-filter" filter-color="orange">
      <parallax class="page-header-image" style="background-image:url('img/bg5.jpg')"></parallax>
      <div class="container">
        <h3 class="title">Our Services</h3>
        <p class="category"></p>
        <div class="content"></div>
      </div>
    </div>
    <div class="section pt-1 service-container">
      <div class="service-container">
        <h3 class="service-subtitle title">What we do for our clients.</h3>

        <div class="row services-list">
          <div class="category d-flex mx-auto text-center my-2">
            among these
            that stand out:
          </div>
          <div class="row mx-auto d-flex justify-content-center">
            <div
              class="col-md-6 text-center service my-5"
              v-for="service in services"
              :key="service.title"
            >
              <font-awesome-icon v-bind:icon="service.icon" class="service-icon" />
              <div class="col-md-12 service-title">{{service.title}}</div>
              <div class="col-md-12 description-text">{{service.description}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Tabs, TabPane } from "@/components";

export default {
  name: "services",
  bodyClass: "services-page",
  components: {
    Tabs,
    TabPane
  },
  data() {
    return {
      services: [
        {
          title: "Accounting",
          icon: "calculator",
          description:
            "The proper filing and processing of our clients’ operations, pursuant to NIFs (Mexican GAAP), enables the development of timely, quantitative, and qualitative information for decision making."
        },
        {
          title: "Auditing",
          icon: "clipboard-list",
          description:
            "For the confidence of Partners, Advisors, Directors, Administrators, Banks, and Creditors, as well as fiscal audits, we serve our clients through our Audit Area by providing value to ensure their financial information complies with NIFs as well as their obligations. Adequate financial information, and compliance with the diverse regulations to which our clients are subject, is the goal in helping to achieve the following, among other objectives: reliable information for partners and investor groups that is necessary to support decision making for business."
        },
        {
          title: "Consultancy",
          icon: "user-check",
          description:
            "We deliver confidence to our clients by providing guidance as to how to optimize their contributions and adequate judicial and asset protection for their shareholders, via one of the following services: a. Consulting on optimization of tax and corporate obligations b. Stock disposal c. Capital movements d. Consulting and support in developing tax calculations and statements e. Consulting and assistance in auditing process on behalf of fiscal authorities."
        },
        {
          title: "Return Procedures & Compensation on Contributions.",
          icon: "money-check-alt",
          description:
            "We provide added economic value to our clients by supporting them in recovering balances in their favor from contributions, whether through compensation and/or return."
        },
        {
          title: "Consulting and Tax Compliance.",
          icon: "tasks",
          description:
            " We offer our clients ample consulting services in tax matters meant to correctly comply with valid tax provisions."
        },
        {
          title: "Tax Planning.",
          icon: "calendar-check",
          description:
            "We offer our clients strategy and alternative designs that translate into optimizing their resources within valid legal frameworks."
        },
        {
          title: "Transfer Pricing (EPT).",
          icon: "money-bill-wave",
          description:
            "We offer clients development of the EPT with related national parties to ensure appropriate compliance with our tax provisions in the matter, which are also taken from transfer price guides issued by the OCDE."
        }
      ]
    };
  }
};
</script>
<style>
.section {
  padding-bottom: 0px !important;
}
.services-page .page-header {
  min-height: 350px !important;
}
.service-title {
  font-weight: 400;
  font-size: 18px;
}
.title {
  font-size: 32px;
}
.service-subtitle {
}
.category {
  font-size: 24px;
  font-weight: 400 !important;
  color: #fafafa !important;
}
.services-list {
  padding: 50px;
  background-color: #1d1c1c;
  color: white;
}
.description-text {
  color: #c0c0c0;
}
.service-icon {
  font-size: 50px;
  margin: 10px 0px;
  color: #fafafa;
  background: none;
  width: 50px !important;
  padding: 8px;
  height: 50px;
  line-height: 4.4em;
  border: 2px solid #fafafa;
  border-radius: 50%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
}
.service-container {
  /* background: #1d1c1c !important; */
}
</style>
