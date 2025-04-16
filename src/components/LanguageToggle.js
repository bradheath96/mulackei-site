import { useState } from "react";

const LanguageToggle = ({onToggle}) => {
    const [language, setLanguage] = useState("EN");

    const toggleLanguage = () => {
        const newLang = language === "EN" ? "DE" : "EN";
        setLanguage(newLang);
        if (onToggle) {
            onToggle(newLang);
        }
    }

    return (
			<button
				onClick={toggleLanguage}
				className="flex items-center border rounded-full px-2 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200">
				<span
					className={`px-2 py-0.5 rounded-full ${
						language === "EN" ? "bg-black text-white" : "text-black"
					}`}>
					EN
				</span>
				<span
					className={`px-2 py-0.5 rounded-full ${
						language === "DE" ? "bg-black text-white" : "text-black"
					}`}>
					DE
				</span>
			</button>
		);
}

export default LanguageToggle;