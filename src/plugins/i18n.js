import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    aboutUsTitle: 'Who we are?',
    aboutUsText:
      'Romero Nieblas y Asociados S.C. is a firm that specializes in providing accounting, auditing, tax, and business consultancy services to our clients, ensuring a double benefit based on experience and ample knowledge of their needs. In addition, through a series of strategic alliances, we provide specialized services in the matters of labor and tax law.',
    valuesTitle: 'Our values',
    clientsTitle:
      'Some of the companies and brands who have placed their confidence in us',
    partnersTitle: 'Partners',
    partnersText:
      'Our services are provided through the joint management of our Firm Partners, our strategic partners, and the specialized, knowledgeable, and experienced staff members in our office.',

    serviceTitle: 'Our Services',
    serviceSubtitle: 'What we do for our clients.',
    serviceDescription: 'Among These That Stand Out:',
    home: 'Home',
    services: 'Services',
    contact: 'Contact',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    mondayToFriday: 'Monday to Friday',
    saturday: 'Saturday'
  },
  es: {
    aboutUsTitle: '¿Quiénes Somos?',
    aboutUsText:
      'Romero Nieblas y Asociados S.C. es una firma especializada en proveer a sus clientes servicios en materia de contabilidad, auditoría, impuestos y asesoría de negocios, ofreciendo un beneficio doble a nuestros clientes: experiencia y amplio conocimiento de sus necesidades. Así mismo, mediante una serie de alianzas estratégicas, se proveen servicios especializados en materia laboral y derecho fiscal.',
    valuesTitle: 'Nuestros Valores',
    clientsTitle:
      'Algunas de las empresas y marcas que han confiado en nosotros',
    partnersTitle: 'Equipo de Trabajo',
    partnersText:
      'Nuestros servicios son proporcionados bajo la dirección conjunta de los Socios de la Firma, así como de nuestros socios estratégicos y miembros de staff de nuestra oficina, contando con personal especializado, con conocimiento y experiencia necesaria.',
    serviceTitle: 'Nuestros Servicios',
    serviceSubtitle: 'Que hacemos por nuestros clientes',
    serviceDescription: 'Entre los servicios que ofrecemos destacan:',
    home: 'Inicio',
    services: 'Servicios',
    contact: 'Contacto',
    contactUs: 'Contáctanos',
    privacyPolicy: 'Aviso de Privacidad',
    mondayToFriday: 'Lunes a Viernes',
    saturday: 'Sábado'
  }
};

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'es', // set fallback locale
  messages // set locale messages
});

export default i18n;
