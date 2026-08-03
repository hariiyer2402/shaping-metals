import { useState } from "react";
import EntranceDoorGallery from "../components/galleries/EntranceDoorGallery";
import PoojaRoomGallery from "../components/galleries/PoojaRoomGallery";
import RoomDoorsGallery from "../components/galleries/RoomDoorsGallery";
import HandlesGallery from "../components/galleries/HandlesGallery";
import GateDesignGallery from "../components/galleries/GateDesignGallery";
import MirrorFramesGallery from "../components/galleries/MirrorFramesGallery";
import RailingsGallery from "../components/galleries/RailingsGallery";
import VaskalsGallery from "../components/galleries/VaskalsGallery";
import NameBoardGallery from "../components/galleries/NameBoardGallery";
import MuralsGallery from "../components/galleries/MuralsGallery";
import PartitionGrillsGallery from "../components/galleries/PartitionGrillsGallery";

import { useSEO } from "../hooks/useSEO";

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  useSEO({
    title: "Our Metalwork Portfolio",
    description:
      "Explore our collection of bespoke metalwork projects including gates, railings, and architectural installations across India.",
  });

  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    "Entrance Door",
    "Pooja Room",
    "Room Door",
    "Handles",
    "Gate Design",
    "Mirror Frames",
    "railings",
    "Name Board",
    "Murals",
    "Vaskal Thresshold",
    "Partition Grills",
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#F5F6F7]">
      {/* Header */}
      <section className="py-10 md:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-6xl font-serif font-bold text-[#1E2A38] mb-4">
              Our Portfolio
            </h1>

            <p className="text-xl text-gray-600">
              Discover our collection of bespoke metalwork projects crafted
              across India.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === category
                    ? "bg-[#C9A45C] text-white"
                    : "bg-white text-[#1E2A38] border border-gray-300 hover:border-[#C9A45C] hover:text-[#C9A45C]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {activeCategory === "Entrance Door" && <EntranceDoorGallery />}

          {activeCategory === "Pooja Room" && <PoojaRoomGallery />}

          {activeCategory === "Room Door" && <RoomDoorsGallery />}

          {activeCategory === "Handles" && <HandlesGallery />}

          {activeCategory === "Gate Design" && <GateDesignGallery />}

          {activeCategory === "Mirror Frames" && <MirrorFramesGallery />}

          {activeCategory === "railings" && <RailingsGallery />}

          {activeCategory === "Vaskal Thresshold" && <VaskalsGallery />}

          {activeCategory === "Name Board" && <NameBoardGallery />}

          {activeCategory === "Murals" && <MuralsGallery />}

          {activeCategory === "Partition Grills" && (
            <PartitionGrillsGallery />
            
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-24 bg-[#1E2A38]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life with exceptional
            metalwork craftsmanship.
          </p>

          <button
            onClick={() => onNavigate("contact")}
            className="bg-[#C9A45C] text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#B8934B] transition-colors"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}