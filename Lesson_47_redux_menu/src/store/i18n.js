import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      "All Recipes": "All Recipes",
      "Categories": "Categories",
      "Menu": "Menu",
      "Add to menu": "Add to menu",
      // другие тексты
    },
  },
  ru: {
    translation: {
      "All Recipes": "Все Рецепты",
      "Categories": "Категории",
      "Menu": "Меню",
      "Add to menu": "Добавить в меню",
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