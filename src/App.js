import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Header from "./components/Header";
import About from "./pages/About";
import EventDetails from "./pages/EventDeatails";
import Footer from "./components/Footer";
import RedirectToDefaultLang from "./components/RedirectToDefaultLang";

const Layout = () => {
	const { lang } = useParams();
	const currentLang = lang === "de" ? "de" : "en"; // fallback to en if lang is invalid

	return (
		<>
			<Header currentLang={currentLang} />
			<main className="bg-primary flex-grow">
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="events" element={<Events />} />
					<Route path="events/:slug" element={<EventDetails />} />
					<Route path="contact" element={<Contact />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
};

const App = () => (
	<div className="flex flex-col min-h-screen">
		<Router>
			<Routes>
				{/* Redirect root to /en */}
				<Route path="/" element={<RedirectToDefaultLang />} />
				{/* Mount Layout under /:lang so useParams() works correctly */}
				<Route path="/:lang/*" element={<Layout />} />
			</Routes>
		</Router>
	</div>
);

export default App;
