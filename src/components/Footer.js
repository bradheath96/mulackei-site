import { Link } from "react-router-dom";
import { translations } from "../services/translations";

const Footer = ({ currentLang }) => {
	const t = translations.footer[currentLang];
	return (
		<footer className="bg-floralWhite text-black py-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col sm:flex-row justify-between items-center">
					{/* Footer Brand */}
					<div className="text-sm lg:text-lg font-light font-bodyFont">
						<p>
							&copy; {new Date().getFullYear()} {t.heading}
						</p>
					</div>

					{/* Footer Navigation */}
					<nav className="mt-4 sm:mt-0 flex space-x-6 text-sm font-bodyFont">
						<Link to="/About" className="hover:underline">
							{t.about}
						</Link>
						<Link to="/events" className="hover:underline">
							{t.events}
						</Link>
						<Link to="/contact" className="hover:underline">
							{t.contact}
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
