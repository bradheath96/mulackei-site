import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import { translations } from "../services/translations";
import { ReactComponent as InstagramIcon } from "../assets/images/icons/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/images/icons/facebook.svg";

const Header = ({ currentLang }) => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	const navItems = [
		{ key: "About", path: "about" },
		{ key: "Events", path: "events" },
		{ key: "Contact", path: "contact" },
	];

	const navLabels = translations.header[currentLang];

	return (
		<nav className="bg-floralWhite sticky top-0 z-[100]">
			<div className="w-full px-6 sm:px-8 lg:px-10">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Link to={`/${currentLang}`}>
							<h1 className="text-3xl font-logoFont">Mulackei</h1>
						</Link>
					</div>

					<div className="hidden sm:flex ml-auto space-x-2 content-center gap-1">
						{navItems.map((item) => (
							<Link
								key={item.key}
								to={`/${currentLang}/${item.path}`}
								className="font-bodyFont text-black hover:bg-boxYellow hover:text-black rounded-sm px-4 py-2 text-lg font-medium transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5">
								{navLabels[item.key]}
							</Link>
						))}
						<LanguageToggle currentLang={currentLang} />
						<a
							href="https://www.instagram.com/mulackei_/"
							target="_blank"
							rel="noopener noreferrer"
							className="transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5 flex items-center ">
							<InstagramIcon className="w-8 h-8 fill-black transition duration-300 ease-in-out hover:bg-boxYellow rounded-lg" />
						</a>
						<a
							href="https://www.facebook.com/profile.php?id=100092280880824"
							target="_blank"
							rel="noopener noreferrer"
							className="transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5 flex items-center">
							<FacebookIcon className="w-8 h-8 fill-black transition duration-300 ease-in-out hover:bg-boxYellow rounded-[0.9rem] " />
						</a>
					</div>

					<div className="sm:hidden flex items-center gap-3">
						<LanguageToggle currentLang={currentLang} />
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-black p-2 focus:outline-none">
							{isOpen ? (
								<XMarkIcon aria-hidden="true" className="size-6" />
							) : (
								<Bars3Icon aria-hidden="true" className="size-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="sm:hidden absolute w-full bg-floralWhite shadow-lg">
					<div className="space-y-2 pb-3 px-36 text-center">
						{navItems.map((item) => (
							<Link
								key={item.key}
								to={`/${currentLang}/${item.path}`}
								onClick={() => setIsOpen(false)}
								className="block text-black hover:bg-boxYellow hover:text-black py-2 text-base font-medium">
								{navLabels[item.key]}
							</Link>
						))}
						<div className="flex justify-center items-center gap-4 mt-3">
							<a
								href="https://www.instagram.com/mulackei_/"
								target="_blank"
								rel="noopener noreferrer"
								className="transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5 flex items-center ">
								<InstagramIcon className="w-8 h-8 fill-black transition duration-300 ease-in-out hover:bg-boxYellow rounded-lg" />
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=100092280880824"
								target="_blank"
								rel="noopener noreferrer"
								className="transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5 flex items-center">
								<FacebookIcon className="w-8 h-8 fill-black transition duration-300 ease-in-out hover:bg-boxYellow rounded-[0.9rem] " />
							</a>
						</div>
					</div>

					<hr className="border-b-[1.5px] border-boxYellow" />
				</div>
			)}
			<hr className="border-b-[1.5px] border-boxYellow" />
		</nav>
	);
};

export default Header;
