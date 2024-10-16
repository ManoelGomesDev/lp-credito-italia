import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import enTranslations from "../locale/en.json"
import ptTranslations from "../locale/pt.json"
import itTranslations from "../locale/it.json"

i18n.use(initReactI18next).init({
    resources: {
        en:{
            ...enTranslations
        },
        pt: {
            ...ptTranslations
        },
        it: {
            ...itTranslations
        }
    },
    lng: 'pt',
})