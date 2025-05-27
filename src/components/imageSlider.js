import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

export default function ImageSlider({ imageData }) {
	const [imageIndex, setImageIndex] = useState(0);

	function showNextImage() {
		setImageIndex((prevIndex) =>
			prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
		);
	}

	function showPrevImage() {
		setImageIndex((prevIndex) =>
			prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
		);
	}

	return (
		<div className="relative w-full h-full overflow-hidden animate-fade animate-duration-1500">
			<div
				className="flex w-full h-full transition-transform duration-700 ease-in-out"
				style={{ transform: `translateX(${-100 * imageIndex}%)` }}>
				{imageData.map((img, index) => (
					<img
						key={img.id || img.url || index}
						src={img.url}
						alt={img.altText || `Slide ${index + 1}`}
						className="object-cover w-full h-full flex-shrink-0"
					/>
				))}
			</div>

			{/* Navigation Buttons */}
			<button
				onClick={showPrevImage}
				className="clear block absolute top-0 bottom-0 p-4 cursor-pointer left-0 hover:bg-boxYellow/20 transition duration-500 ease-in-out hover:scale-x-110">
				<ArrowBigLeft className="stroke-white fill-black w-8 h-8" />
			</button>
			<button
				onClick={showNextImage}
				className="clear block absolute top-0 bottom-0 p-4 cursor-pointer right-0 hover:bg-boxYellow/20 transition duration-500 ease-in-out hover:scale-110">
				<ArrowBigRight className="stroke-white fill-black w-8 h-8" />
			</button>

			{/* Indicator Dots */}
			<div className="absolute bottom-[0.5rem] left-1/2 translate-x-[-50%] flex gap-[0.5rem]">
				{imageData.map((_, index) => (
					<button
						key={index}
						className="block cursor-pointer w-[1rem] h-[1rem]"
						onClick={() => setImageIndex(index)}>
						{index === imageIndex ? (
							<CircleDot className="stroke-boxYellow fill-black h-[100%] w-[100%] hover:scale-[1.2] transition-scale duration-500 ease-in-out" />
						) : (
							<Circle className="stroke-white fill-black h-[100%] w-[100%] hover:scale-[1.2] transition-scale duration-500 ease-in-out" />
						)}
					</button>
				))}
			</div>
		</div>
	);
}
