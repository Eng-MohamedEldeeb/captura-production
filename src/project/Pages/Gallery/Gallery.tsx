import { useState } from "react";
import ImageModal from "./Components/ImageModal";
import { pic1, pic2, pic3, pic4 } from "../../../assets";

const images = [
  { id: 1, src: pic1 },
  { id: 2, src: pic2 },
  { id: 3, src: pic3 },
  { id: 4, src: pic4 },
  { id: 2, src: pic2 },
  { id: 1, src: pic1 },
  { id: 3, src: pic3 },
  { id: 4, src: pic4 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-amber-600 text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-neutral-400 text-lg">
            A selection of our recent visual work
          </p>
        </div>

        {/* Grid */}
        <div
          className="
          grid gap-14
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
        "
        >
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.src)}
              className="
                group relative cursor-pointer
                overflow-hidden 
                bg-neutral-900
              "
            >
              <img
                src={img.src}
                alt=""
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                absolute inset-0
                bg-black/50
                opacity-0
                group-hover:opacity-100
                transition-opacity duration-300
                flex items-center justify-center
              "
              >
                <i className="fa-solid fa-expand text-white text-xl"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default Gallery;
