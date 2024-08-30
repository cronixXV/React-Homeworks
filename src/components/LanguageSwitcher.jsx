import React from "react"
import { useLanguage } from "../Helpers/LanguageContext.jsx"
import { Button } from "react-bootstrap"

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="language-switcher mb-3 d-flex justify-content-end">
      <Button
        onClick={toggleLanguage}
        variant="primary"
      >
        {language === "ru" ? "English" : language === "en" ? "عربي" : "Русский"}
      </Button>
    </div>
  )
}

export default LanguageSwitcher
