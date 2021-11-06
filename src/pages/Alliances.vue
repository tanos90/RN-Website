<template>
    <div>
        <div class="page-header clear-filter" filter-color="orange">
            <parallax
                class="page-header-image"
                style="background-image:url('img/bg5.jpg')"
            ></parallax>
            <div class="container">
                <h3 class="title">{{ $t("alliances") }}</h3>
                <p class="category"></p>
                <div class="content"></div>
            </div>
        </div>
        <div class="section pt-1 alliance-container">
            <div class="alliance-container">
                <div class="alliance-text">
                    <span>
                        {{ $t("allianceText") }}
                    </span>
                </div>

                <div class="row alliances-list">
                    <div
                        class="row mx-auto d-flex justify-content-center alliance-row"
                    >
                        <div
                            class="col-md-4 card-logo my-5"
                            v-for="alliance in alliances"
                            :key="alliance.name"
                            :class="alliance.expanded ? 'expanded' : ''"
                            v-on:click="onClickAlliance(alliance)"
                        >
                            <div class="image-container">
                                <img
                                    class="label alliance-image"
                                    :class="alliance.cssStyleClass"
                                    :src="
                                        'img/alliances/' + alliance.key + '.png'
                                    "
                                />
                            </div>

                            <div class="text2" v-if="alliance.expanded">
                                <a
                                    class="alliance-title"
                                    v-html="alliance.name"
                                    v-on:click="select(alliance)"
                                ></a>
                                <div class="text-content">
                                    <span
                                        class="alliance-description"
                                        v-html="
                                            alliance.description[$i18n.locale]
                                        "
                                    >
                                    </span>
                                </div>
                            </div>
                            <font-awesome-icon
                                v-bind:icon="
                                    alliance.expanded
                                        ? 'chevron-down'
                                        : 'chevron-up'
                                "
                                class="toggle-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "alliances",
    bodyClass: "alliances-page",
    components: {},
    data() {
        return {
            alliances: [
                {
                    key: 1,
                    name: "SAE",
                    cssStyleClass: "sae",
                    url: "http://www.sae-cia.com/index.php",
                    expanded: false,
                    description: {
                        es:
                            "Abogados especialistas en derecho fiscal, aduanero, administrativo, corporativo, en prevención de lavado de dinero",
                        en:
                            "Lawyers specialized in tax, customs, administrative and corporate law in the prevention of money laundering",
                    },
                },
                {
                    key: 2,
                    name: "Mendiburu",
                    cssStyleClass: "mendiburu",
                    url: " http://www.mendiburu.mx",
                    expanded: false,
                    description: {
                        es:
                            "Firma de asesores fiscales que, a través de una atención personalizada y cuidadosa ofrece sus servicios a medianas y grandes empresas con operaciones en México que buscan una planeación fiscal de alto nivel",
                        en:
                            "Firm of tax advisers that, through personalized and careful attention, offers its services to medium and large companies with operations in Mexico that seek high-level tax planning",
                    },
                },
                {
                    key: 3,
                    name: "Selecta RH",
                    cssStyleClass: "selecta",
                    url: "http://selectarh.com.mx/",
                    expanded: false,
                    description: {
                        es:
                            "Experiencia y profesionalismo en la colocación del capital humano requerido por las empresas",
                        en:
                            "Experience and professionalism in the placement of human capital required by companies",
                    },
                },
                {
                    key: 4,
                    name: "Torres Lindsey",
                    url: "http://www.torreslindsey.com.mx/public/",
                    expanded: false,
                    description: {
                        es:
                            "Bufete de abogados dedicado a brindar representación legal a empresas que realizan negocios internacionales en los EE. UU., México y América Latina",
                        en:
                            "Law firm dedicated to providing legal representation to companies conducting international business in the US, Mexico and Latin America",
                    },
                },
                {
                    key: 5,
                    name: "Notaría Pública Num. 3, de H, Caborca Sonora",
                    expanded: false,
                    description: {
                        es:
                            "Ofreciendo servicios notariales y legales diversos en la ciudad de Caborca Sonora",
                        en:
                            "Offering diverse legal and notarial services in the city of Caborca ​​Sonora",
                    },
                },
                {
                    key: 6,
                    name:
                        "Notaría Pública Num. 26, de Puerto Peñasco y Sonoyta, Sonora",
                    expanded: false,
                    cssStyleClass: "notaria",
                    description: {
                        es:
                            "Ofreciendo servicios notariales y legales diversos en la ciudades de Puerto Peñasco y Sonoyta, Sonora",
                        en:
                            "Offering diverse legal and notarial services in the citys of Puerto Peñasco and Sonoyta, Sonora",
                    },
                },
            ],
        };
    },
    methods: {
        select(alliance) {
            if (alliance.url.length > 0) {
                window.open(alliance.url, "_blank");
            }
        },
        onClickAlliance(alliance) {
            alliance.expanded = !alliance.expanded;
        },
    },
};
</script>
<style>
.section {
    padding-bottom: 0px !important;
}
.alliance-row {
    justify-content: center;
    max-width: 900px;
}
.toggle-icon {
    color: #8b8b8b;
    font-size: 18px;
    position: absolute;
    bottom: 15px;
    left: calc(50% - 9px);
    transform-origin: 50%;
    transform: rotate(180deg);
    transition: transform 1000ms;
}
.alliance {
    min-width: 250px;
    min-height: 250px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.image-container {
    display: flex;
    text-align: center;
    align-self: center;
    justify-content: center;
}
.alliance-image {
    height: 53px;
    width: auto;
}

.sae {
    height: 70px !important;
    margin-top: 20px !important;
}

.notaria {
    height: 100px !important;
    margin-top: 5px !important;
}

.selecta {
    height: 90px !important;
    margin-top: 10px !important;
}

.alliances-page .page-header {
    min-height: 350px !important;
}
.alliance-title {
    font-weight: 400;
    font-size: 18px;
    color: #2c2c2c;
    /*position: absolute;
    bottom: 20px;*/
}
.title {
    font-size: 32px;
    padding-bottom: 30px;
}

.alliance-text > span {
    font-size: 18px;
    font-weight: 600;
    max-width: 700px;
    text-align: center;
}

.alliance-text {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 175px;
}

.category {
    font-size: 24px;
    font-weight: 400 !important;
    color: #fafafa !important;
}
.alliances-list {
    padding: 50px;
    background-color: #e9e9e9;
    color: white;
    min-height: calc(100vh - 623px);
    justify-content: center;
}
.description-text {
    color: #c0c0c0;
}
.alliance-icon {
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

.alliance-description {
    color: #2c2c2c;
    text-align: center;
}
</style>
