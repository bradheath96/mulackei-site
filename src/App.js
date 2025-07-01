import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Header from "./components/Header";
import About from "./pages/About";
import EventDetails from "./pages/EventDeatails";
import Footer from "./components/Footer";
import RedirectToDefaultLang from "./components/RedirectToDefaultLang";

const AppRoutes = () => {
	const { lang } = useParams();
	const currentLang = lang === "de" ? "de" : "en";

	return (
		<>
			<Header currentLang={currentLang} />
			<main className="bg-primary flex-grow">
				<Routes>
					<Route path="/" element={<RedirectToDefaultLang />} />
					<Route path="/:lang" element={<Home />} />
					<Route path="/:lang/about" element={<About />} />
					<Route path="/:lang/events" element={<Events />} />
					<Route path="/:lang/contact" element={<Contact />} />
					<Route path="/:lang/events/:slug" element={<EventDetails />} />
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
				{/* This wrapper allows useParams to work above Header */}
				<Route path="/*" element={<AppRoutes />} />
			</Routes>
		</Router>
	</div>
);

export default App;
