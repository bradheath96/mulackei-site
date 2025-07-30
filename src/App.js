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
	const currentLang = lang === "de" ? "de" : "en"; 

	return (
		<>
			<Header currentLang={currentLang} />
			<main className="bg-primary flex-grow">
				<Routes>
					<Route index element={<Home currentLang={currentLang} />} />
					<Route path="about" element={<About currentLang={currentLang} />} />
					<Route path="events" element={<Events currentLang={currentLang} />} />
					<Route path="events/:slug" element={<EventDetails currentLang={currentLang} />} />
					<Route path="contact" element={<Contact currentLang={currentLang} />} />
				</Routes>
			</main>
			<Footer currentLang={currentLang} />
		</>
	);
};

const App = () => (
	<div className="flex flex-col min-h-screen bg-primary text-black">
		<Router>
			<Routes>
				<Route path="/" element={<RedirectToDefaultLang />} />
				<Route path="/:lang/*" element={<Layout />} />
			</Routes>
		</Router>
	</div>
);

export default App;
