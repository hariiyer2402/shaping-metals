import { useState } from 'react';
<link rel="icon" type="image/png" href="/logo.png" />


import gate1 from '../assets/images/gates/gate1.jpg';
import gate2 from '../assets/images/gates/gate2.jpg';
import gate3 from '../assets/images/gates/gate3.jpg';

import railing1 from '../assets/images/railings/railing2.jpg';
import railing3 from '../assets/images/railings/railing5.jpg';
import railing4 from '../assets/images/railings/railing7.jpg';

import mural1 from '../assets/images/murals/mural1.jpg';
import mural2 from '../assets/images/murals/mural3.jpg';
import mural3 from '../assets/images/murals/mural4.jpg';

import nameboard1 from '../assets/images/nameboard/name1.jpg';
import nameboard2 from '../assets/images/nameboard/name2.jpg';
import nameboard3 from '../assets/images/nameboard/name3.jpg';

import poojaroom1 from '../assets/images/poojaroom/pooja1.jpg';
import poojaroom2 from '../assets/images/poojaroom/pooja2.jpg';
import poojaroom3 from '../assets/images/poojaroom/pooja3.jpg';

import Mantapam1 from '../assets/images/Mantapam/mantap1.jpg';
import Mantapam2 from '../assets/images/Mantapam/mantap3.jpg';
import Mantapam3 from '../assets/images/Mantapam/mantap4.jpg';

import PHandles1 from '../assets/images/Pull Handles/phandles1.jpg';
import PHandles2 from '../assets/images/Pull Handles/phandles2.jpg';
import PHandles3 from '../assets/images/Pull Handles/phandles3.jpg';

import Vaskals1 from '../assets/images/Vaskal/vaskal1.jpg';
import Vaskals2 from '../assets/images/Vaskal/vaskal2.jpg';
import Vaskals3 from '../assets/images/Vaskal/vaskal3.jpg';

import Partition1 from '../assets/images/PGrills/PG1.jpg';
import Partition2 from '../assets/images/PGrills/PG2.jpg';
import Partition3 from '../assets/images/PGrills/PG4.jpg';

import GateD1 from '../assets/images/Gate/g1.jpg';
import GateD2 from '../assets/images/Gate/g2.jpg';
import GateD3 from '../assets/images/Gate/g3.jpg';

import accc1 from '../assets/images/accessories/acc1.jpg';
import accc2 from '../assets/images/accessories/acc5.jpg';
import accc3 from '../assets/images/accessories/acc11.jpg';
import accc4 from '../assets/images/accessories/acc12.jpg';
import accc5 from '../assets/images/accessories/acc13.jpg';
import accc6 from '../assets/images/accessories/acc14.jpg';


import { useSEO } from '../hooks/useSEO';

interface ProjectsProps {
  onNavigate: (page: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  useSEO({
    title: "Our Metalwork Portfolio",
    description: "Explore our collection of bespoke metalwork projects including gates, railings, murals, and architectural installations across India."
  });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Entrance', 'railings', 'murals', 'Name Board', 'Pooja Room',  'Mantapam 3D Designs', 'Pull Handles',  'Vaskal Designs',  'Partition Grills',  'Gate Designs',  'Accessories'];

  const projects = [
    { id: 1, image: gate1, title: 'Floral Corner Main Door', category: 'Entrance', description: 'Elegant main door with floral metal accents.' },
    { id: 2, image: gate2, title: 'Geometric Heritage Door', category: 'Entrance', description: 'Traditional entrance with geometric metal detailing.' },
    { id: 3, image: gate3, title: 'Classic Panel Entrance', category: 'Entrance', description: 'Premium wooden entrance with decorative panels.' },

    { id: 4, image: railing1, title: 'Twisted Metal Baluster', category: 'railings', description: 'Elegant handcrafted baluster with twisted detailing.' },
    { id: 5, image: railing3, title: 'Floral Door Railing Accent', category: 'railings', description: 'Decorative floral railing with timeless elegance.' },
    { id: 6, image: railing4, title: 'Classic Pillar Baluster', category: 'railings', description: 'Premium pillar baluster with refined craftsmanship.' },   

    { id: 7, image: mural1, title: 'Nature Inspired Wall Mural', category: 'murals', description: 'Hand-crafted metal mural with nature motifs ' },
    { id: 8, image: mural2, title: 'Heritage Metal Artwork', category: 'murals', description: 'Intricate heritage artwork panel ' },
    { id: 9, image: mural3, title: 'Lord Ganesha Metal Wall Mural', category: 'murals', description: 'Intricate handcrafted Ganesha artwork.' },

    { id: 10, image: nameboard1, title: 'Luxury Villa Name Board', category: 'Name Board', description: 'Elegant handcrafted villa name plaque. ' },
    { id: 11, image: nameboard2, title: 'Decorative Entrance Name Board', category: 'Name Board', description: 'Custom metal name board for grand entrances. ' },
    { id: 12, image: nameboard3, title: 'Custom Logo Name Board', category: 'Name Board', description: 'Premium metal logo signage with a modern finish. ' },

    { id: 13, image: poojaroom1, title: 'Classic Pooja Room Entrance', category: 'Pooja Room', description: 'Elegant handcrafted pooja room entrance doors.' },
    { id: 14, image: poojaroom2, title: 'Heritage Pooja Room Doors', category: 'Pooja Room', description: 'Traditional metal doors with timeless craftsmanship.' },
    { id: 15, image: poojaroom3, title: 'Divine Pooja Room Shrine', category: 'Pooja Room', description: 'Sacred pooja room with elegant metal detailing.' },

    { id: 16, image: Mantapam1, title: 'Royal Pooja Mantapam', category: 'Mantapam 3D Designs', description: 'Grand handcrafted pooja mantapam design.' },
    { id: 17, image: Mantapam2, title: 'Traditional Temple Mantapam', category: 'Mantapam 3D Designs', description: 'Elegant temple-style pooja enclosure.' },
    { id: 18, image: Mantapam3, title: 'Sacred Mandir Showcase', category: 'Mantapam 3D Designs', description: 'Premium pooja shrine with glass enclosure.' },

    { id: 19, image: PHandles1, title: 'Lakshmi Designer Pull Handle', category: 'Pull Handles', description: 'Divine pull handle with Lakshmi detailing.' },
    { id: 20, image: PHandles2, title: 'Heritage Scroll Pull Handle', category: 'Pull Handles', description: 'Elegant scrollwork pull handle design.' },
    { id: 21, image: PHandles3, title: 'Mandala Designer Pull Handle', category: 'Pull Handles', description: 'Premium circular mandala pull handle.' },

    { id: 22, image: Vaskals1, title: 'Royal Floral Vaskal', category: 'Vaskal Designs', description: 'Elegant floral threshold with heritage detailing.' },
    { id: 23, image: Vaskals2, title: 'Heritage Scroll Vaskale', category: 'Vaskal Designs', description: 'Traditional scrollwork border with premium finish' },
    { id: 24, image: Vaskals3, title: 'Classic Floral Vaskal', category: 'Vaskal Designs', description: 'Decorative floral border for grand entrances.' },

    { id: 25, image: Partition1, title: 'Geometric Partition Grill', category: 'Partition Grills', description: 'Elegant partition with geometric metal patterns.' },
    { id: 26, image: Partition2, title: 'Heritage Border Partition', category: 'Partition Grills', description: 'Decorative partition with handcrafted metal borders.' },
    { id: 27, image: Partition3, title: 'Modern Glass Partition', category: 'Partition Grills', description: 'Contemporary glass partition with metal accents.' },

    { id: 28, image: GateD1, title: 'Lotus Entrance Gate', category: 'Gate Designs', description: 'Elegant entrance gate with lotus metal motifs.' },
    { id: 29, image: GateD2, title: 'Royal Heritage Gate', category: 'Gate Designs', description: 'Grand heritage gate with handcrafted detailing.' },
    { id: 30, image: GateD3, title: 'Contemporary Sliding Gate', category: 'Gate Designs', description: 'Modern sliding gate with premium metalwork.' },

    { id: 31, image: accc1, title: 'Heritage Scroll Medallion', category: 'Accessories', description: 'Elegant scrollwork decorative wall accessory.' },
    { id: 32, image: accc2, title: 'Lotus Metal Emblem', category: 'Accessories', description: 'Handcrafted lotus motif for premium interiors.' },
    { id: 33, image: accc3, title: 'Sacred Lotus Rosette', category: 'Accessories', description: 'Decorative lotus rosette with timeless craftsmanship.' },
    { id: 34, image: accc4, title: 'Radha Krishna Plaque', category: 'Accessories', description: 'Divine handcrafted Radha Krishna wall ornament.' },
    { id: 35, image: accc5, title: 'Floral Mandala Medallion', category: 'Accessories', description: 'Intricate floral medallion with heritage detailing.' },
    { id: 36, image: accc6, title: 'Lotus Wall Ornament', category: 'Accessories', description: 'Artistic lotus décor for elegant spaces.' },

  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 bg-[#F5F6F7]">
      <section className="py-10 md:py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-6xl font-serif font-bold text-[#1E2A38] mb-4">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600">
              Discover our collection of bespoke metalwork projects crafted across India
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                  activeCategory === category
                    ? 'bg-[#C9A45C] text-white'
                    : 'bg-white text-[#1E2A38] border border-gray-300 hover:border-[#C9A45C] hover:text-[#C9A45C]'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-[#C9A45C] text-xs font-semibold uppercase tracking-wider mb-2">
                    {project.category}
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

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 md:py-24 bg-[#1E2A38]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can bring your vision to life with exceptional metalwork craftsmanship.
          </p>
          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#C9A45C] text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#B8934B] transition-colors"
            >
              Get In Touch
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
