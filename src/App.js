import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Header from "./components/Header";
import About from "./pages/About";
import EventDetails from "./pages/EventDeatails";
import Footer from "./components/Footer";

const App = () => (
	<div className="flex flex-col min-h-screen">
		<Router>
			<Header />
			<main className="bg-primary flex-grow">
				<Routes>
					{/* Redirect root to /en */}
					<Route path="/" element={<Navigate to="/en" replace />} />

					{/* Language-specific routes */}
					<Route path="/:lang" element={<Home />} />
					<Route path="/:lang/about" element={<About />} />
					<Route path="/:lang/events" element={<Events />} />
					<Route path="/:lang/contact" element={<Contact />} />
					<Route path="/:lang/events/:slug" element={<EventDetails />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	</div>
);

export default App;
