import { Link } from "react-router-dom";

const Header = () => (
	<header
		className="bg-secondary sticky top-0 z-50 text-white p-4 flex justify-between items-center">
		<h1 className="font-bold px-32">
			<Link to="/">Mulackei</Link>
		</h1>
		<nav>
			<Link to="/About" className="px-3">
				About
			</Link>
			<Link to="/events" className="px-3">
				Events
			</Link>
			<Link to="/contact" className="px-3">
				Contact
			</Link>
		</nav>
	</header>
);

export default Header;
