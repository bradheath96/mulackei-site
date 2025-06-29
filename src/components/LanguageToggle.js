import { useLocation, useNavigate, useParams } from "react-router-dom";

const LanguageToggle = () => {
	const { lang } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	// Determine the current language (fallback to 'en')
	const currentLang = lang === "de" ? "de" : "en";
	const newLang = currentLang === "en" ? "de" : "en";

	const toggleLanguage = () => {
		const newPath = location.pathname.replace(`/${currentLang}`, `/${newLang}`);
		window.location.href = newPath + location.search; // Full reload
	};

	return (
		<button
			onClick={toggleLanguage}
			className="flex items-center border rounded-full px-2 py-1 bg-gray-200 hover:bg-gray-300 transition duration-200">
			<span
				className={`transition-all duration-300 ease-in-out px-2 py-0.5 rounded-full ${
					currentLang === "en" ? "bg-black text-white" : "text-black"
				}`}>
				EN
			</span>
			<span
				className={`transition-all duration-300 ease-in-out px-2 py-0.5 rounded-full ${
					currentLang === "de" ? "bg-black text-white" : "text-black"
				}`}>
				DE
			</span>
		</button>
	);
};

export default LanguageToggle;
