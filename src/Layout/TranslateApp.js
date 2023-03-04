




















import React, { useState, useEffect } from "react";
import "../home/home2.css";

function TranslateApp() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState("");
  const [initialized, setInitialized] = useState(true);

  function handleLanguageChange(event) {
    setSelectedLanguage(event.target.value);
  }

  function handleTranslate() {
    const currentLanguage = window.navigator.language.split("-")[0];
    const googleTranslateUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${currentLanguage}&tl=${selectedLanguage}&dt=t&q=${encodeURIComponent(
      document.documentElement.innerHTML
    )}`;

    fetch(googleTranslateUrl)
      .then((response) => response.json())
      .then((data) => {
        const translatedHtml = data[0].map((item) => item[0]).join("");
        setTranslatedText(translatedHtml);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <div id="google_translate_element" className=""></div>
      <select className="translateBTN" id="language-dropdown" onChange={handleLanguageChange}>
        <option value="en">🇺🇸 EN</option>
        <option value="es">🇪🇸 ES</option>
        <option value="fr">🇫🇷 FR</option>
        <option value="de">🇩🇪 DE</option>
        <option value="it">🇮🇹 IT</option>
        <option value="ja">🇯🇵 JA</option>
        <option value="ko">🇰🇷 KO</option>
        <option value="pt">🇵🇹 PT</option>
        <option value="ru">🇷🇺 RU</option>
        <option value="zh-CN">🇨🇳 zh-CN</option>
        <option value="zh-TW">🇹🇼 zh-TW</option>
      </select>
      <div dangerouslySetInnerHTML={{ __html: translatedText }}></div>
    </div>
  );
}

export default TranslateApp;
