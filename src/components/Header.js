import { Link } from "react-router-dom";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";

const Header = () => (
	<header class="bg-floralWhite sticky top-0 z-50 p-3 flex justify-between items-center">
		{/*Logo*/}
		<h1 class="text-xl text-black font-light ml-5">
			<Link to="/">Mulackei</Link>
		</h1>

		{/* Navigation Links */}
		<nav class="flex items-center space-x-5 mr-5 justify-center  p-2">
			{/* Page Links */}
			<Link to="/about" class="text-xl text-black font-light">
				About
			</Link>
			<Link to="/events" class="text-xl text-black font-light">
				Events
			</Link>
			<Link to="/contact" class="text-xl text-black font-light text-left">
				Contact
			</Link>

			{/* Social Media Links */}
			<a
				href="https://www.facebook.com/profile.php?id=100092280880824"
				target="_blank"
				rel="noopener noreferrer">
				<img src={FacebookIcon} alt="Facebook" class="w-8 h-8" />
			</a>
			<a
				href="https://www.instagram.com/mulackei_/"
				target="_blank"
				rel="noopener noreferrer">
				<img src={InstagramIcon} alt="Instagram" class="w-8 h-8" />
			</a>
		</nav>
	</header>
);

export default Header;
