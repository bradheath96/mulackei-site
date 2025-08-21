import { button } from "framer-motion/client";
import { Contact, ListTodo } from "lucide-react";

export const translations = {
	home: {
		en: {
			heading: "Coming Up",
			button: "More Info",
			freeInOption: "Free Entry",
			helpHeading: "We Need Your Help",
			helpParagraph:
				"Dearest friends of Mulackei, Just over two years ago we opened our doors in Mitte to host artistic and cultural events and hold space for people to connect, create, and feel at home. Now, to continue bringing inspiring performances, exhibitions, discussions and events to life, we’re asking for your help.",
			helpParagraph2:
				"The Mulackei has always been entirely non-profit, run by a small team of volunteers who are devoted to the venue and its ethos. We are very proud of the many wonderful events we have hosted, and the community we have found in Mitte and beyond. We have been able to thrive because of the open hearts and generosity of the people who walk through our door every week.",
			helpParagraph3:
				"We want the Mulackei to thrive long into the future, but it’s no secret that rising costs and red tape are threatening many institutions in Berlin. Because of this, we have decided to open an ongoing, online fundraiser, to create an easier route for people who love the Mulackei to participate in its journey. Even a small monthly contribution can provide the steady support that we need to stay open long into the future, and keep Mulackei accessible to everyone.",
			helpParagraph4:
				"If you have ever played, sang, talked, danced, laughed, or cried at the Mulackei, please consider donating to our online fundraiser. We have a wonderful July program coming up before we enter a reduced program in August to work on the implementation of certain necessary improvements in the Mulackei. We will be back fully in September with even more brilliant events.",
			helpParagraph5:
				"Thank you all for your ongoing support, generosity, and participation in this amazing space. Mulackei is beautiful because of you, and we hope that we can continue to honour and develop our community for years to come. Your Mulackei team ♥️",
			helpButton: "Donate Now",
			helpLink: "www.betterplace.org/en/projects/155684-neue-mulackei-e-v",
		},
		de: {
			heading: "Demnächst",
			button: "Mehr Infos",
			freeInOption: "Eintritt Frei",
			helpHeading: "Wir brauchen Ihre Hilfe",
			helpParagraph:
				"Liebste Freund*innen der Mulackei, Vor etwas mehr als zwei Jahren haben wir in Berlin Mitte unsere Türen geöffnet, um künstlerische und kulturelle Veranstaltungen zu ermöglichen – ein Ort, an dem Menschen zusammenkommen, kreativ sein und sich wie zuhause fühlen können. Um auch weiterhin inspirierende Auftritte, Ausstellungen, Gespräche und Veranstaltungen verwirklichen zu können, bitten wir nun um eure Unterstützung.",
			helpParagraph2:
				"Die Mulackei ist seit jeher ein gemeinnütziger Ort, betrieben von einem kleinen ehrenamtlichen Team, das mit Herzblut hinter dem Projekt steht. Wir sind sehr stolz auf die vielen großartigen Veranstaltungen, die wir bisher ausrichten durften, und auf die Gemeinschaft, die wir in Mitte, und darüber hinaus, gefunden haben. Dass wir bisher bestehen konnten, verdanken wir der Großzügigkeit der Menschen, die Woche für Woche durch unsere Tür kommen.",
			helpParagraph3:
				"Wir wünschen uns, dass die Mulackei noch lange weiterlebt – aber es ist kein Geheimnis, dass steigende Kosten und bürokratische Hürden viele Institutionen in Berlin bedrohen. Deshalb haben wir uns entschieden, eine fortlaufende Online-Spendenkampagne zu starten, um es allen, die die Mulackei lieben, einfacher zu machen, an ihrer Zukunft teilzuhaben. Schon ein kleiner monatlicher Beitrag bietet jene Unterstützung, die wir brauchen, um langfristig bestehen zu bleiben und die Mulackei für alle zugänglich zu halten.",
			helpParagraph4:
				"Wenn du jemals in der Mulackei gespielt, gesungen, gesprochen, getanzt, gelacht oder geweint hast, bitten wir dich: Unterstütze unsere Online-Spendenaktion. Im Juli erwarten euch noch einige wundervolle Veranstaltungen, bevor wir im August ein reduziertes Programm anbieten und im September wieder mit vielen weiteren großartigen Events zurückkehren.",
			helpParagraph5:
				"Danke für eure andauernde Unterstützung, Großzügigkeit und eure Teilnahme an diesem besonderen Ort. Die Mulackei ist so schön wegen euch – und wir hoffen, dass wir unsere Gemeinschaft noch viele Jahre gemeinsam gestalten und weiterentwickeln können. Euer Mulackei-Team ♥️",
			helpButton: "Jetzt spenden",
			helpLink: "www.betterplace.org/en/projects/155684-neue-mulackei-e-v",
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
				{
					Isobel: {
						name: "Isobel Hambleton",
						role: "Concert Booking & Sound Engineer",
						bio: "Isobel Hambleton is a musician, producer and sound engineer from Manchester, England. Under the artist name Sable, she released two self-produced EPs, garnering attention from the likes of BBC Radio 1, Radio Berlin-Brandenburg and Wonderland. She is currently in the process of producing her debut album. Alongside her solo work, Isobel has been producing and songwriting for other artists for several years, focusing her energies on creating space for FLINTA+ artists to express themselves and tell their stories. At Mulackei, she is responsible for concerts, alongside her colleague Aurelien.",
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
				{
					Isobel: {
						name: "Isobel Hambleton",
						role: "Konzertbuchung & Tontechniker",
						bio: "Isobel Hambleton ist eine Musikerin, Produzentin und Tontechnikerin aus Manchester, England. Unter dem Künstlernamen Sable hat sie zwei selbstproduzierte EPs veröffentlicht und damit die Aufmerksamkeit von Sendern wie BBC Radio 1, Radio Berlin-Brandenburg und Wonderland auf sich gezogen. Derzeit arbeitet sie an der Produktion ihres Debütalbums. Neben ihrer Soloarbeit produziert und schreibt Isobel seit mehreren Jahren für andere Künstler und konzentriert ihre Energie darauf, Raum für FLINTA+ Künstler zu schaffen, damit sie sich ausdrücken und ihre Geschichten erzählen können. Bei Mulackei ist sie zusammen mit ihrem Kollegen Aurelien für die Konzerte zuständig.",
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
				literature: "Literature",
				workshop: "Workshops",
				other: "Other...",
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
				literature: "Literatur",
				workshop: "Workshops",
				other: "Andere...",
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
			payOnEntry: "Pay on Entry",
			freeInOption: "Free Entry",
		},
		de: {
			buyButton: "Tickets kaufen",
			payOnEntry: "Zahlung bei Eintritt",
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
			credit: "Designed by Bradley Heath",
		},
		de: {
			heading: "Mulackei. Alle Rechte vorbehalten.",
			about: "Über uns",
			events: "Veranstaltungen",
			contact: "Kontakt",
			address: "Mulackstraße 27, 10119 Berlin, Deutschland",
			credit: "Gestaltet von Bradley Heath",
		},
	},
};
