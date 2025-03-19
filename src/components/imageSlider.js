import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ImageSlider({ imageUrls }) {
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<div className="w-full h-full relative">
			<img
				src={imageUrls[imageIndex]}
				alt={`Slide ${imageIndex + 1}`}
				className="object-cover w-full h-full block"
			/>
			<button className="clear block absolute top-0 bottom-0 p-4 cursor-pointer ">
				<ArrowBigLeft className="stroke-white fill-black" />
			</button>
			<button>
				<ArrowBigRight className="stroke-white fill-black" />
			</button>
		</div>
	);
}
