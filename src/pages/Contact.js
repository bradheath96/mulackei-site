import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { fetchImagesByFilenames } from "../services/EventServices";
import { translations } from "../services/translations";

const Contact = ({ currentLang }) => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [venueImage, setVenueImage] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const t = translations.contact[currentLang];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const getImage = async () => {
			const image = await fetchImagesByFilenames(["Mulackei_1.webp"]);
			setVenueImage(image);
			setIsLoading(false);
		};
		getImage();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		const form = e.target;

		emailjs
			.sendForm(
				"service_o9j381q",
				"template_wi4pwdk",
				form,
				"lnzsxhUl3YINQGmQL"
			)
			.then(
				(response) => {
					alert("Email sent successfully!");
					setEmail("");
					setMessage("");
				},
				(error) => {
					alert("Failed to send email. Please try again.");
				}
			);
	};
	return (
		<div className="flex flex-col flex-grow bg-primary text-white">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-flow-col-1 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-1  mb-10">
					<div className="lg:px-2 lg:pt-2 md:px-2 md:pt-2">
						<div className="animate-fade animate-duration-1500">
							{isLoading ? (
								<div className="w-[500px] min-h-[500px] md:w-full md:h-[400px] lg:w-[600px] lg:h-[620px] bg-primary "></div>
							) : (
								<img
									src={venueImage[0].url}
									alt={venueImage[0].alt}
									className="w-[500px] h-[500px] md:w-full md:h-[400px] lg:w-[600px] lg:h-[620px] object-cover"
								/>
							)}
						</div>
						<hr className="border-t-2 lg:hidden md:hidden border-boxYellow" />
					</div>
					<div className="md:place-content-end px-4 pt-4 md:h-full lg:place-content-end animate-fade animate-duration-1500">
						<div
							className="relative flex items-center mb-8 mt-3 
                  justify-center lg:justify-start">
							{/* Left HR (hidden on lg+) */}
							<hr className="flex-grow border-t-2 border-boxYellow -mx-4 sm:mx-0 lg:hidden" />

							<h2
								className="px-7 text-2xl font-bold text-white font-titleFont 
                   whitespace-nowrap lg:text-5xl lg:px-0 lg:pr-4 lg:whitespace-normal 
                   text-center lg:text-left">
								{t.heading}
							</h2>

							{/* Right HR (always visible, but grows differently on mobile vs lg) */}
							<hr className="flex-grow border-t-2 border-boxYellow -mx-4 sm:mx-0 lg:w-auto" />
						</div>

						<p className="font-bodyFont text-2xl lg:text-3xl font-bold">
							{t.address.map((line, index) => (
								<span key={index}>
									{line}
									<br />
								</span>
							))}
						</p>

						<button
							className="font-bodyFont lg:w-full md:w-full w-full mt-5 py-3 bg-boxYellow 
               hover:bg-secondary-dark text-black font-medium  
               transition duration-300 ease-in-out hover:-translate-y-0.5 hover:-translate-x-0.5"
							onClick={() =>
								window.open(
									"https://maps.app.goo.gl/PwvuUPaUE7i6eEZd7",
									"_blank"
								)
							}>
							{t.getDirectionsButton}
						</button>
					</div>
				</div>
			</div>
			<div className="relative w-full animate-fade animate-duration-1000 mb-5">
				<hr className="absolute left-0 right-0 border-t-2 border-boxYellow top-1/2 -translate-y-1/2" />

				{/* Container keeps content aligned */}
				<div className="relative flex max-w-7xl mx-auto  items-center justify-center lg:justify-start ">
					<h2 className="text-2xl font-bold text-white font-titleFont bg-primary px-4 relative z-10 lg:text-5xl inline-block">
						{t.ContactUs}
					</h2>
				</div>
			</div>
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid grid-flow-col-1 md:grid-cols-1 lg:grid-cols-1 lg:grid-rows-1 animate-fade animate-duration-1000 px-4 lg:pl-0">
					<form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10">
						<input
							type="email"
							name="from_email"
							placeholder={t.emailPlaceholder}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="w-full p-3 mb-4 text-black focus:outline-none focus:ring-2 focus:ring-boxYellow"
						/>
						<textarea
							name="message"
							placeholder={t.messagePlaceholder}
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							className="w-full p-3 h-32 text-black focus:outline-none focus:ring-2 focus:ring-boxYellow"></textarea>
						<button
							type="submit"
							className="w-full mt-4 py-3 bg-boxYellow hover:bg-secondary-dark text-black font-medium ">
							{t.sendMessageButton}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
