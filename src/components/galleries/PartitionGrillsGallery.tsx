import partition1 from '../../assets/images/Partition Grills/Partition Grills 01.jpg';
import partition2 from '../../assets/images/Partition Grills/Partition Grills 02.jpg';
import partition3 from '../../assets/images/Partition Grills/Partition Grills 03.jpg';
import partition4 from '../../assets/images/Partition Grills/Partition Grills 04.jpg';
import partition5 from '../../assets/images/Partition Grills/Partition Grills 05.jpg';
import partition6 from '../../assets/images/Partition Grills/Partition Grills 06.jpg';


import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    image: partition1,
    title: "Geometric Partition Grill",
    description: "Elegant partition with geometric metal patterns.",
  },
  {
    id: 2,
    image: partition2,
    title: "Heritage Border Partition",
    description: "Decorative partition with handcrafted metal borders.",
  },
  {
    id: 3,
    image: partition3,
    title: "Modern Glass Partition",
    description: "Contemporary glass partition with metal accents.",
  },
  {
    id: 4,
    image: partition4,
    title: "Modern Glass Partition",
    description: "Contemporary glass partition with metal accents.",
  },
  {
    id: 5,
    image: partition5,
    title: "Modern Glass Partition",
    description: "Contemporary glass partition with metal accents.",
  },
  {
    id: 6,
    image: partition6,
    title: "Modern Glass Partition",
    description: "Contemporary glass partition with metal accents.",
  },

];

export default function PartitionGrillsGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

const openLightbox = (index: number) => {
  console.log("Opening", index);
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
                className="w-full h-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <p className="text-[#C9A45C] text-xs font-semibold uppercase tracking-wider mb-2">
                Partition Grills
              </p>

              <h3 className="text-2xl font-serif font-bold text-[#1E2A38] mb-2 group-hover:text-[#C9A45C] transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-8 right-8 text-white hover:text-gray-300"
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
                className={`w-2 h-2 rounded-full ${
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