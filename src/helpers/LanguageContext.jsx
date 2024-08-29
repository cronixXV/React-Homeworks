import React, { createContext, useState, useContext } from "react"
import i18n from "i18next"

const LanguageContext = createContext()

export const LanguageProvider = ({ children, initialLanguage = "ru" }) => {
  const [language, setLanguage] = useState(initialLanguage)

  const toggleLanguage = () => {
    const newLanguage =
      language === "ru" ? "en" : language === "en" ? "ar" : "ru"
    setLanguage(newLanguage)
    i18n.changeLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
