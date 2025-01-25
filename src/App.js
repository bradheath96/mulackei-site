import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Header from "./components/Header";
import About from "./pages/About";
import EventDetails from "./pages/EventDeatails";
import Footer from "./components/Footer";

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/events" element={<Events />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/events/:slug" element={<EventDetails />} />
		</Routes>
		<Footer/>
	</Router>
);

export default App;
