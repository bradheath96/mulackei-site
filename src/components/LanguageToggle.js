import { useLocation } from "react-router-dom";

const LanguageToggle = () => {
	const location = useLocation();

	const pathSegments = location.pathname.split("/").filter(Boolean);
	const currentLang = pathSegments[0] === "de" ? "de" : "en";
	const newLang = currentLang === "en" ? "de" : "en";

	const toggleLanguage = () => {
		pathSegments[0] = newLang;

		const newPath = "/" + pathSegments.join("/") + location.search;
		window.location.href = newPath;
	};

	return (
		<button
			onClick={toggleLanguage}
			className="flex items-center px-2 py-1  font-medium rounded-sm bg-boxYellow transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5">
			<span
				className={`transition-all font-bodyFont duration-300 ease-in-out px-2 py-0.5 rounded-full bg-opacity-75 ${
					currentLang === "en" ? "bg-black text-white" : "text-black"
				}`}>
				EN
			</span>
			<span
				className={`transition-all font-bodyFont duration-300 ease-in-out px-2 py-0.5 rounded-full bg-opacity-75 ${
					currentLang === "de" ? "bg-black text-white" : "text-black"
				}`}>
				DE
			</span>
		</button>
	);
};

export default LanguageToggle;
