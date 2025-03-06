import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import mulackeiImage from "../assets/images/Mulackei-2.jpg";

const Contact = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Create a FormData object to send form data
		const form = e.target;

		emailjs
			.sendForm(
				"service_mhuqmdo", // Service ID
				"template_wi4pwdk",
				form, // Use form instead of templateParams
				"lnzsxhUl3YINQGmQL" // Public Key
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					alert("Email sent successfully!");
					setEmail("");
					setMessage("");
				},
				(error) => {
					console.log("FAILED...", error);
					alert("Failed to send email. Please try again.");
				}
			);
	};
	return (
		<div className="bg-primary min-h-screen text-white">
			<div className="grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-1  mb-10">
				<div className="lg:px-4 lg:pt-4 md:px-4 md:pt-4">
					<div>
						<img
							src={mulackeiImage}
							alt={mulackeiImage}
							className="w-[500px] h-[500px] md:w-full md:h-[400px] lg:w-[600px] lg:h-[620px] object-cover"
						/>
					</div>
				</div>
				<div className="md:place-content-end px-4 pt-4 md:h-full lg:place-content-end animate-fade animate-duration-1500">
					<div className="relative flex items-center mb-8 mt-3 ">
						<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />

						<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal">
							Where to find us
						</h2>
						<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
					</div>
					<p className="font-bodyFont text-2xl lg:text-3xl font-bold">
						Mulackstraße 27,
						<br />
						10119 Berlin,
						<br />
						Germany
					</p>
					<button
						className="font-bodyFont lg:w-full md:w-full w-full mt-5 py-3 bg-boxYellow hover:bg-secondary-dark text-black font-medium "
						onClick={() =>
							window.open("https://maps.app.goo.gl/PwvuUPaUE7i6eEZd7", "_blank")
						}>
						Get Directions
					</button>
				</div>
			</div>
			<div className="grid grid-flow-col-1 md:grid-cols-1 lg:grid-cols-1 lg:grid-rows-1 animate-fade animate-duration-1000 px-4 lg:pl-0">
				<div className="relative flex items-center mb-8 mt-3 animate-fade animate-duration-1000">
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto lg:hidden" />

					<h2 className="px-4 text-3xl font-bold text-white font-titleFont whitespace-nowrap lg:text-5xl  lg:pr-4 lg:whitespace-normal">
						Conact Us
					</h2>
					<hr className="flex-grow border-t-2 border-boxYellow lg:w-auto" />
				</div>
				<form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10">
					<input
						type="email"
						name="from_email" // Add "name" attribute
						placeholder="Your email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full p-3 mb-4 text-black focus:outline-none focus:ring-2 focus:ring-boxYellow"
					/>
					<textarea
						name="message" // Add "name" attribute
						placeholder="Your message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						required
						className="w-full p-3 h-32 text-black focus:outline-none focus:ring-2 focus:ring-boxYellow"></textarea>
					<button
						type="submit"
						className="w-full mt-4 py-3 bg-boxYellow hover:bg-secondary-dark text-black font-medium ">
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
