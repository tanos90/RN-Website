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
    <div class="section pt-0">
      <div class="container">
        <h3
          class="title"
        >At Romero Nieblas we are committed to providing diverse services to our clients.</h3>
        <div class="category text-center my-2">
          among these
          that stand out:
        </div>
        <div class="row">
          <div class="col-md-9 ml-auto mr-auto">
            <div class="row service my-5">
              <div class="col-md-3 service-title">Accounting</div>
              <div
                class="col-md-9"
              >The proper filing and processing of our clients’ operations, pursuant to NIFs (Mexican GAAP), enables the development of timely, quantitative, and qualitative information for decision making.</div>
            </div>
            <div class="row service my-5">
              <div class="col-md-3 service-title">Auditing</div>
              <div class="col-md-9">
                For the confidence of Partners, Advisors, Directors, Administrators, Banks, and Creditors, as well as fiscal audits, we serve our clients through our Audit Area by providing value to ensure their financial information complies with NIFs as well as their obligations.
                Adequate financial information, and compliance with the diverse regulations to which our clients are subject, is the goal in helping to achieve the following, among other objectives: reliable information for partners and investor groups that is necessary to support decision making for business.
              </div>
            </div>
            <div class="row service my-5">
              <div class="col-md-3 service-title">Consultancy</div>
              <div
                class="col-md-9"
              >We deliver confidence to our clients by providing guidance as to how to optimize their contributions and adequate judicial and asset protection for their shareholders, via one of the following services: a. Consulting on optimization of tax and corporate obligations b. Stock disposal c. Capital movements d. Consulting and support in developing tax calculations and statements e. Consulting and assistance in auditing process on behalf of fiscal authorities.</div>
            </div>
            <div class="row service my-5">
              <div class="col-md-3 service-title">
                Return Procedures
                &
                Compensation on Contributions.
              </div>
              <div
                class="col-md-9"
              >We provide added economic value to our clients by supporting them in recovering balances in their favor from contributions, whether through compensation and/or return.</div>
            </div>
            <div class="row service my-5">
              <div class="col-md-3 service-title">Consulting and Tax Compliance.</div>
              <div class="col-md-9">
                We offer our clients ample consulting services
                in tax matters meant to correctly comply with valid tax provisions.
              </div>
            </div>
            <div class="row service my-5">
              <div class="col-md-3 service-title">Tax Planning.</div>
              <div class="col-md-9">
                We offer our clients strategy and alternative designs that
                translate into optimizing their resources within valid legal frameworks.
              </div>
            </div>
            <div class="row service my-5">
              <div class="col-md-3 service-title">Transfer Pricing (EPT).</div>
              <div
                class="col-md-9"
              >We offer clients development of the EPT with related national parties to ensure appropriate compliance with our tax provisions in the matter, which are also taken from transfer price guides issued by the OCDE.</div>
            </div>
            <div class="row service my-5">
              <div class="col-md-3 service-title">Tax Litigation.</div>
              <div class="col-md-9">
                Via strategic alliances, we provide services in tax and corporate
                matters.
              </div>
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
  }
};
</script>
<style>
.services-page .page-header {
  min-height: 350px !important;
}
.service-title {
  font-weight: 400;
  font-size: 18px;
}
</style>
