import React, { createContext, useState, useContext } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children, initialLanguage = "ru" }) => {
  const [language, setLanguage] = useState(initialLanguage)

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "en-US" : "ru")
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
