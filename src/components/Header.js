import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
	{ name: "About", to: "/about" },
	{ name: "Events", to: "/events" },
	{ name: "Contact", to: "/contact" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	return (
		<Disclosure as="nav" className="bg-floralWhite sticky top-0 z-50">
			<div className="max-w-full px-6 sm:px-8 lg:px-10">
				<div className="relative flex h-20 items-center justify-between">
					{/* Logo Section - Aligned Left */}
					<div className="flex items-center">
						<Link key="Home" to="/">
							<h1 className="text-4xl">Mulackei</h1>
						</Link>
					</div>

					{/* Desktop Navigation - Pushed to the Right */}
					<div className="hidden sm:flex ml-auto space-x-2">
						{navigation.map((item) => (
							<Link
								key={item.name}
								to={item.to}
								className={classNames(
									"text-black hover:bg-boxYellow hover:text-black",
									"rounded-sm px-4 py-2 text-lg font-medium"
								)}>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button - Only visible on small screens */}
					<div className="sm:hidden">
						<DisclosureButton className="text-black p-2 focus:outline-none">
							{({ open }) =>
								open ? (
									<XMarkIcon aria-hidden="true" className="size-6" />
								) : (
									<Bars3Icon aria-hidden="true" className="size-6" />
								)
							}
						</DisclosureButton>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Panel */}
			<DisclosurePanel className="sm:hidden">
				<div className="space-y-2 px-4 pb-3">
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.to}
							className="block text-black hover:bg-boxYellow hover:text-black rounded-sm px-3 py-2 text-base font-medium">
							{item.name}
						</Link>
					))}
				</div>
			</DisclosurePanel>
		</Disclosure>
	);
};

export default Header;
