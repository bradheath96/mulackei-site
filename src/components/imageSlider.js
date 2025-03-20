import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ImageSlider({ imageUrls }) {
	const [imageIndex, setImageIndex] = useState(0);

	function showNextImage() {
		setImageIndex((prevIndex) =>
			prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
		);
	}

	function showPrevImage() {
		setImageIndex((prevIndex) =>
			prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
		);
	}

	return (
		<div className="w-full h-full relative overflow-hidden">
			<div className="w-full h-full flex overflow-hidden">
				{imageUrls.map((url, index) => (
					<img
						key={url}
						src={url}
						alt={`Slide ${imageIndex + 1}`}
						className="object-cover w-full h-full block flex-shrink-0 flex-grow-0 transition-transform duration-700 ease-in-out"
						style={{ transform: `translateX(${-100 * imageIndex}%)` }}
					/>
				))}
			</div>

			<button
				onClick={showPrevImage}
				className="clear block absolute top-0 bottom-0 p-4 cursor-pointer left-0 hover:bg-boxYellow/20 transition duration-500 ease-in-out hover:scale-x-110">
				<ArrowBigLeft className="stroke-white fill-black w-8 h-8  " />
			</button>
			<button
				onClick={showNextImage}
				className="clear block absolute top-0 bottom-0 p-4 cursor-pointer right-0 hover:bg-boxYellow/20  transition duration-500 ease-in-out hover:scale-110">
				<ArrowBigRight className="stroke-white fill-black right-0 w-8 h-8" />
			</button>
		</div>
	);
}
