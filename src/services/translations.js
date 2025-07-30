import { button } from "framer-motion/client";
import { Contact } from "lucide-react";

export const translations = {
	home: {
		en: {
			heading: "Coming Up",
			button: "More Info",
			freeInOption: "Free Entry",
		},
		de: {
			heading: "Demnächst",
			button: "Mehr Infos",
			freeInOption: "Eintritt Frei",
		},
	},
	about: {
		en: {
			heading: "About Us",
			teamHeading: "Meet the Team",
			team: [
				{
					Julius: {
						name: "Julius Bahner",
						role: "Head of Chess",
						bio: "Julius Bahner was born in Munich in 1990. He is an academic Philosopher who hosts and develops humanistic events in the Mulackei. Being a passionate Chess Player, who you used to play for the first Team of the legendary SC Kreuzberg alongside Grandmasters and German Champions, he is also offering a weekly Chess Class for Children as well as hosting a monthly Chess Tournament in the Mulackei called CHAZZ, in which the games are accompanied by live Jazz Music.",
					},
				},
				{
					Frida: {
						name: "Frida Bahner",
						role: "Head of Heads",
						bio: "She was born in Berlin in 1992. From 2015 to 2022, she studied stage and costume design at the Weißensee Academy of Art and Design, graduating with a diploma in fine art. In 2019/20, she received a scholarship from the Deutschland/Mart Stam scholarship. Since 2014, she has worked as a freelance stage and costume designer for both independent and state theater productions.",
					},
				},
				{
					Oisín: {
						name: "Oisín Large",
						role: "Community Outreach",
						bio: "Born in 1998 in London, Oisín is a strategic professional with a strong background in operations, client relations, and project leadership. Holding a Bachelor of Applied Sciences in Media & Communication Management from Macromedia University of Applied Sciences in Berlin, Oisín currently supports Mulackei e.V. in areas such as concerts, chess, writing, social media, and marketing. His career highlights include significant achievements at WeWork and Futurepath, where he improved operational efficiency and client satisfaction. Fluent in English and German, Oisín is also passionate about rugby, poetry, photography, and music. He is pursuing dreams of writing a novel, becoming a drone pilot, and sharing his creative talents with the world, with an ultimate goal of founding a sustainability-focused organization.",
					},
				},
				{
					Hannah: {
						name: "Hannah Ugé",
						role: "Technical Coordinator",
						bio: "Hannah was born in 1997 at the Baltic Sea and grew up in Berlin. She holds a Bachelor’s degree in Sociolinguistics, Philosophy, and English Philology from the Free University of Berlin and is currently pursuing her Master’s degrees in Linguistics and Applied Cultural Studies in Berlin and Potsdam. Hannah has completed internships in directing for documentary film and theater and teaches German as a foreign language. Her passion is dedicated to writing and engaging with societal issues in creative and artistic formats.",
					},
				},
				{
					Aurelien: {
						name: "Aurelien Falconnet",
						role: "Macgyver",
						bio: "Aurelien is a musician, sound engineer and producer. Born in Paris and trained as a pianist from an early age, he diversified his approach to music with drums, guitar, vocals and finally specialised as a bass player. Growing up in the hectic and multicultural Parisian music scene, he quickly fell in love with African and Afro-influenced music. Touring in France & Europe with various Afrobeat, Reggae, Soul, Jazz and Hip-hop projects, he had the opportunity to meet some of the most influential musicians of the last decades. In 2016, he moved to Berlin and has since worked as a music producer, sound engineer and live musician for a wide range of German and international artists. He is one of the founder of Mulackei and takes care of the day-to-day operations.",
					},
				},
			],

			paragraph1:
				"The Mulackei is a non-profit association dedicated to art, readings, workshops, concerts and other cultural events. Our goal is to create a space for encounters and creative exchange that brings together people from different backgrounds.",
			paragraph2:
				'The name "Mulackei" originates from a legendary Restaurant/Bar at Mulackstraße 15, which was the second home for many of Berlin’s most famous artists and con-artists, as well as for outsiders of society. In the 40s, the courageous Minna Mahlich hid trans- and homosexuals from the Nazis in the Mulackei. The name was also used for the entire neighborhood surrounding Mulackstraße.',
			paragraph3:
				"Our Mulackei is at Mulackstraße 27, across the street from Sodtkes Restaurant, which was replaced by shiny apartment buildings a long time ago. We want to honour the tradition of our historical neighbours by offering a tolerant gathering place for both residents and visitors of the area. But we are not a restaurant, nor a bar. Instead, we focus on artistic and cultural nourishment.",
		},
		de: {
			heading: "Über uns",
			teamHeading: "Lernen Sie das Team kennen",
			team: [
				{
					Julius: {
						name: "Julius Bahner",
						role: "Schachleiter",
						bio: "Julius Bahner wurde 1990 in München geboren. Er ist akademischer Philosoph und veranstaltet und entwickelt humanistische Events in der Mulackei. Als leidenschaftlicher Schachspieler, der früher für die erste Mannschaft des legendären SC Kreuzberg neben Großmeistern und deutschen Meistern gespielt hat, bietet er auch einen wöchentlichen Schachkurs für Kinder an und veranstaltet ein monatliches Schachturnier in der Mulackei namens CHAZZ, bei dem die Spiele von Live-Jazzmusik begleitet werden.",
					},
				},
				{
					Frida: {
						name: "Frida Bahner",
						role: "Kopf der Köpfe",
						bio: "Sie wurde 1992 in Berlin geboren. Von 2015 bis 2022 studierte sie Bühnen- und Kostümbild an der Weißensee Kunsthochschule Berlin und schloss mit einem Diplom in Bildender Kunst ab. 2019/20 erhielt sie ein Stipendium des Deutschland/Mart Stam Stipendiums. Seit 2014 arbeitet sie als freiberufliche Bühnen- und Kostümbildnerin für sowohl freie als auch staatliche Theaterproduktionen.",
					},
				},
				{
					Oisín: {
						name: "Oisín Large",
						role: "Öffentlichkeitsarbeit",
						bio: "Born in 1998 in London, Oisín is a strategic professional with a strong background in operations, client relations, and project leadership. Holding a Bachelor of Applied Sciences in Media & Communication Management from Macromedia University of Applied Sciences in Berlin, Oisín currently supports Mulackei in areas such as concerts, chess, writing, social media, and marketing. His career highlights include significant achievements at WeWork and Futurepath, where he improved operational efficiency and client satisfaction. Fluent in English and German, Oisín is also passionate about rugby, poetry, photography, and music. He is pursuing dreams of writing a novel, becoming a drone pilot, and sharing his creative talents with the world, with an ultimate goal of founding a sustainability-focused organisation.",
					},
				},
				{
					Hannah: {
						name: "Hannah Ugé",
						role: "Technische Koordinatorin",
						bio: "Hannah wurde 1997 an der Ostsee geboren und wuchs in Berlin auf. Sie hat einen Bachelor-Abschluss in Soziolinguistik, Philosophie und Anglistik von der Freien Universität Berlin und studiert derzeit im Master Linguistik und Angewandte Kulturwissenschaften in Berlin und Potsdam. Hannah hat Praktika in Regie für Dokumentarfilm und Theater absolviert und unterrichtet Deutsch als Fremdsprache. Ihre Leidenschaft gilt dem Schreiben und der Auseinandersetzung mit gesellschaftlichen Themen in kreativen und künstlerischen Formaten.",
					},
				},
				{
					Aurelien: {
						name: "Aurelien Falconnet",
						role: "Macgyver",
						bio: "Aurelien ist Musiker, Toningenieur und Produzent. Er wurde in Paris geboren und erhielt von klein auf Klavierunterricht. Er erweiterte seinen musikalischen Horizont mit Schlagzeug, Gitarre, Gesang und spezialisierte sich schließlich auf den Bass. Aufgewachsen in der hektischen und multikulturellen Pariser Musikszene verliebte er sich schnell in afrikanische und afro-inspirierte Musik. Auf Tournee in Frankreich und Europa mit verschiedenen Afrobeat-, Reggae-, Soul-, Jazz- und Hip-Hop-Projekten hatte er die Gelegenheit, einige der einflussreichsten Musiker der letzten Jahrzehnte zu treffen. 2016 zog er nach Berlin und arbeitet seitdem als Musikproduzent, Tontechniker und Live-Musiker für eine Vielzahl von deutschen und internationalen Künstlern. Er ist einer der Gründer der Mulackei und kümmert sich um die täglichen Abläufe.",
					},
				},
			],
			paragraph1:
				"Die Mulackei ist ein gemeinnütziger Verein für Kunst, Lesungen, Workshops, Konzerte und andere kulturelle Veranstaltungen. Unser Ziel ist es, einen Raum für Begegnungen und kreativen Austausch zu schaffen, der Menschen aus unterschiedlichen Hintergründen zusammenbringt.",
			paragraph2:
				'Der Name "Mulackei" stammt von einem legendären Restaurant/Bar in der Mulackstraße 15, das das zweite Zuhause vieler bekannter Berliner Künstler*innen und Hochstapler*innen sowie von gesellschaftlichen Außenseitern war. In den 40er Jahren versteckte die mutige Minna Mahlich Trans- und Homosexuelle vor den Nazis in der Mulackei. Der Begriff "Mulackei" stand auch stellvertretend für das gesamte Viertel rund um die Mulackstraße.',
			paragraph3:
				"Unsere Mulackei befindet sich in der Mulackstraße 27, gegenüber vom ehemaligen Restaurant Sodtkes, das längst modernen Apartmenthäusern gewichen ist. Wir wollen die Tradition unserer historischen Nachbarn ehren, indem wir einen toleranten Treffpunkt für Anwohner*innen und Besucher*innen bieten. Doch wir sind kein Restaurant, keine Bar – unser Fokus liegt auf künstlerischer und kultureller Nahrung.",
		},
	},
	events: {
		en: {
			button: "More Info",
			freeInOption: "Free Entry",
			category: {
				all: "All",
				music: "Music",
				chess: "Chess",
				art: "Art",
				film: "Film",
			},
			alerts: {
				noEvents: "No events found.",
				checkBackSoon: "Check back soon for more updates!",
			},
		},
		de: {
			button: "Mehr Infos",
			freeInOption: "Eintritt Frei",
			category: {
				all: "Alle",
				music: "Musik",
				chess: "Schach",
				art: "Kunst",
				film: "Film",
			},
			alerts: {
				noEvents: "Keine Veranstaltungen gefunden.",
				checkBackSoon: "Schau bald wieder vorbei für mehr Updates!",
			},
		},
	},
	eventsDetails: {
		en: {
			buyButton: "Buy Tickets",
			freeInOption: "Free Entry",
		},
		de: {
			buyButton: "Tickets kaufen",
			freeInOption: "Eintritt Frei",
		},
	},
	contact: {
		en: {
			heading: "Where to find us",
			address: ["Mulackstraße 27", "10119 Berlin", "Germany"],
			getDirectionsButton: "Get Directions",
			ContactUs: "Contact Us",
			emailPlaceholder: "Your email",
			messagePlaceholder: "Your message",
			sendMessageButton: "Send Message",
		},
		de: {
			heading: "Wo Sie uns finden",
			address: ["Mulackstraße 27", "10119 Berlin", "Deutschland"],
			getDirectionsButton: "Wegbeschreibung",
			ContactUs: "Kontaktieren Sie uns",
			emailPlaceholder: "Ihre E-Mail",
			messagePlaceholder: "Ihre Nachricht",
			sendMessageButton: "Nachricht senden",
		},
	},
	header: {
		en: {
			About: "About",
			Events: "Events",
			Contact: "Contact",
		},
		de: {
			About: "Über uns",
			Events: "Veranstaltungen",
			Contact: "Kontakt",
		},
	},
	footer: {
		en: {
			heading: "Mulackei. All Rights Reserved.",
			about: "About Us",
			events: "Events",
			contact: "Contact",
			address: "Mulackstraße 27, 10119 Berlin, Germany",
		},
		de: {
			heading: "Mulackei. Alle Rechte vorbehalten.",
			about: "Über uns",
			events: "Veranstaltungen",
			contact: "Kontakt",
			address: "Mulackstraße 27, 10119 Berlin, Deutschland",
		},
	},
};
