"use client";
import React from "react";
import { usePathname } from "next/navigation";

const LanguageSelector = () => {
  const redirectToLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;

    if (language === "Italiano") {
      window.location.href = "/it";
    } else {
      window.location.href = "/en";
    }
  };

  const path = usePathname();
  const currentLanguage = path === "/it" ? "Italiano" : "English";

  return (
    <div>
      <select
        value={currentLanguage}
        onChange={(e) => redirectToLanguage(e)}
        className="p-2"
      >
        <option>Italiano</option>
        <option>English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
