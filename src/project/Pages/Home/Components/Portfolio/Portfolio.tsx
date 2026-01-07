import { useState } from "react";
import { pic1, pic2, pic3 } from "../../../../../assets";
import ImageModal from "./ImageModal";

const Portfolio = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const imgs: string[] = [pic1, pic2, pic3];

  return (
    <section className="py-20 lg:py-28 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Work
          </h2>
          {/* <p className="text-lg md:text-xl text-gray-900">
            Professional real estate consulting, marketing, and sales services
          </p> */}
        </div>

        {/* Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {imgs.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className="group cursor-pointer relative"
            >
              {/* Frame */}
              <div className="absolute inset-0 translate-x-1 translate-y-1" />

              {/* Image */}
              <div className="relative overflow-hidden shadow-2xl h-65 md:h-80">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
};

export default Portfolio;
