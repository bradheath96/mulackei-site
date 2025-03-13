import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ImageSlider({ imageUrls }) {
	const [imageIndex, setImageIndex] = useState(0);

	return (
		<div>
			<img src={imageUrls[imageIndex]} alt={`Slide ${imageIndex + 1}`} />
			<button>
				<ArrowBigLeft />
			</button>
			<button>
				<ArrowBigRight />
			</button>
		</div>
	);
}
