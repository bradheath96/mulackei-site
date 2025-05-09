import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";

const navigation = [
	{ name: "About", to: "/about" },
	{ name: "Events", to: "/events" },
	{ name: "Contact", to: "/contact" },
];

const Header = () => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	return (
		<nav className="bg-floralWhite sticky top-0 z-[100]">
			<div className="w-full px-6 sm:px-8 lg:px-10">
				<div className="relative flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Link key="Home" to="/">
							<h1 className="text-3xl font-logoFont">Mulackei</h1>
						</Link>
					</div>

					<div className="hidden sm:flex ml-auto space-x-2">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.to}
								className="font-bodyFont text-black hover:bg-boxYellow hover:text-black rounded-sm px-4 py-2 text-lg font-medium transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5">
								{item.name}
							</Link>
						))}
						<LanguageToggle
							onToggle={(lang) => {
								console.log("Language switched to:", lang);
							}}
						/>
					</div>

					<div className="sm:hidden">
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
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.to}
								onClick={() => setIsOpen(false)}
								className="block text-black hover:bg-boxYellow hover:text-black py-2 text-base font-medium">
								{item.name}
							</Link>
						))}
					</div>
					<hr className="border-b-[1.5px] border-boxYellow" />
				</div>
			)}
			<hr className="border-b-[1.5px] border-boxYellow" />
		</nav>
	);
};

export default Header;
