import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      "Recipe": "Recipe",
      // другие тексты
    },
  },
  ru: {
    translation: {
      "Recipe": "Рецепт",
      // другие переводы
    },
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru', // язык по умолчанию
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n