"use client";
import React, { useState } from "react";
import Image from "next/image";
import flag from "../../../public/assets/headerImg/flagLogo.png";
import flag1 from "../../../public/assets/headerImg/flagLogo1.png";
import flag2 from "../../../public/assets/headerImg/flagLogo2.png";
import flag3 from "../../../public/assets/headerImg/flagLogo3.png";

interface LanguageSelectorProps {
  position?: "top" | "bottom"; // prop add kiya
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ position = "bottom" }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    name: "Eng",
    flag: flag,
  });

  const languages = [
    { name: "Eng", flag: flag },
    { name: "Urdu", flag: flag1 },
    { name: "Chinese", flag: flag2 },
    { name: "Russian", flag: flag3 },
  ];

  const handleSelect = (lang: any) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
  };

  // agar bottom ho to neeche dropdown, agar top ho to upar dropdown
  const dropdownPosition =
    position === "bottom"
      ? "top-full mt-2 origin-top-right"
      : "bottom-full mb-2 origin-bottom-right";

  return (
    <div className="flex gap-2 items-center relative">
      <Image src={selectedLang.flag} alt="flag" height={20} width={20} />
      <div className="inline-block relative">
        <div
          onClick={() => setIsLangOpen(!isLangOpen)}
          className="inline-flex items-center gap-1 text-white text-sm shadow-xs cursor-pointer"
        >
          {selectedLang.name}
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </div>

        {isLangOpen && (
          <div
            className={`absolute z-10 right-0 w-40 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition ${dropdownPosition}`}
          >
            <div className="py-1">
              {languages.map((lang, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(lang)}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <Image src={lang.flag} alt={lang.name} height={20} width={20} />
                  {lang.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
