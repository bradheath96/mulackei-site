import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/events" element={<Events />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/events/:slug" element={<EventDetails />} />
				</Routes>
			</main>
			<Footer />
		</Router>
	</div>
);

export default App;
