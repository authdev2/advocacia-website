import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    welcome: 'Welcome',
    hello: 'Hello {name}!'
  },
  pt: {
    welcome: 'Bem-vindo',
    hello: 'Olá {name}!'
  }
}

const i18n = createI18n({
  legacy: false, 
  locale: 'pt',  
  fallbackLocale: 'en',
  messages
})

export default i18n
