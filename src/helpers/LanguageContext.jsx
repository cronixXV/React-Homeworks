import React, { createContext, useState, useContext } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children, initialLanguage = "ru" }) => {
  const [language, setLanguage] = useState(initialLanguage)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
