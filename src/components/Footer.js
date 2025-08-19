import { Link } from "react-router-dom";
import { translations } from "../services/translations";

const Footer = ({ currentLang }) => {
	const t = translations.footer[currentLang];

	const navItems = [
		{ key: "about", label: t.about, path: "about" },
		{ key: "events", label: t.events, path: "events" },
		{ key: "contact", label: t.contact, path: "contact" },
	];

	return (
		<footer className="bg-floralWhite text-black py-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col sm:flex-row justify-between items-center">
					{/* Footer Brand & Credit */}
					<div className="text-sm lg:text-lg font-light font-bodyFont text-center sm:text-left">
						<p>
							&copy; {new Date().getFullYear()} {t.heading} ·{" "}
							<a
								href="https://www.bradleyheath.com"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline">
								{t.credit}
							</a>
						</p>
					</div>

					{/* Footer Navigation */}
					<nav className="mt-4 sm:mt-0 flex space-x-6 text-sm font-bodyFont">
						{navItems.map((item) => (
							<Link
								key={item.key}
								to={`/${currentLang}/${item.path}`}
								className="hover:underline">
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
