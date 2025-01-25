import { Link } from "react-router-dom";

const Footer = () => {
	return (
		    <footer className="bg-floralWhite text-black py-6 mt-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col sm:flex-row justify-between items-center">
					{/* Footer Brand */}
					<div className="text-lg font-light">
						<p>
							&copy; {new Date().getFullYear()} Mulackei. All Rights Reserved.
						</p>
					</div>

					{/* Footer Navigation */}
					<nav className="mt-4 sm:mt-0 flex space-x-6">
						<Link to="/About" className="hover:underline">
							About
						</Link>
						<Link to="/events" className="hover:underline">
							Events
						</Link>
						<Link to="/contact" className="hover:underline">
							Contact
						</Link>
						<a
							href="https://www.privacypolicygenerator.info/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline">
							Privacy Policy
						</a>
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default Footer