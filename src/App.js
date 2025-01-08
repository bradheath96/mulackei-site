import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Events from "./pages/Events"

const App = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/events" element={<Events />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</Router>
)

export default App;
