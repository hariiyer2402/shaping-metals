import room1 from '../../assets/images/Room Door/Room 01.webp';
import room2 from '../../assets/images/Room Door/Room 02.webp';
import room3 from '../../assets/images/Room Door/Room 03.webp';
import room4 from '../../assets/images/Room Door/Room 04.webp';
import room5 from '../../assets/images/Room Door/Room 05.webp';
import room6 from '../../assets/images/Room Door/Room 06.webp';

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    image: room1,
    title: 'Premium Room Door',
  },
  {
    id: 2,
    image: room2,
    title: 'Designer Wooden Door',
  },
  {
    id: 3,
    image: room3,
    title: 'Luxury Interior Door',
  },
  {
    id: 4,
    image: room4,
    title: 'Contemporary Room Door',
  },
  {
    id: 5,
    image: room5,
    title: 'Classic Wooden Door',
  },
  {
    id: 6,
    image: room6,
    title: 'Designer Bedroom Door',
  },
];

export default function RoomDoorsGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % projects.length);

  const prevImage = () =>
    setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => openLightbox(index)}
            className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <p className="text-[#C9A45C] text-xs font-semibold uppercase tracking-wider mb-2">
                Room Doors
              </p>

              <h3 className="text-2xl font-serif font-bold text-[#1E2A38] mb-2 group-hover:text-[#C9A45C] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {/* {project.description} */}
              </p>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white hover:text-gray-300 z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="max-w-6xl max-h-[80vh] px-20">
            <img
              src={projects[lightboxIndex].image}
              alt={projects[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain mx-auto"
            />

            <div className="text-center mt-8">
              <h3 className="text-white font-serif text-2xl">
                {projects[lightboxIndex].title}
              </h3>

              <p className="text-gray-300 mt-2">
                {/* {projects[lightboxIndex].description} */}
              </p>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setLightboxIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === lightboxIndex
                    ? "bg-[#C9A45C] w-8"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}