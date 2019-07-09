import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {    
    'en': require('../locales/en.json'),
    'es': require('../locales/es.json'),
    'pt': require('../locales/pt-BR.json')
}

const i18n = new VueI18n({    
    locale: 'pt', // set locale    
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n;