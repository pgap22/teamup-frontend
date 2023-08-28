import { useEffect } from "react";
const TranslationComponent = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        includedLanguages: "en,es",
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  return (
    <>
      <div
        className="fixed z-50 px-5 py-2 font-bold bg-white rounded-full shadow-xl bottom-5 right-10"
        id="google_translate_element"
      ></div>
    </>
  );
};

export default TranslationComponent;
