import { Target, Users, Lightbulb, Hammer } from 'lucide-react';
<link rel="icon" type="image/png" href="/logo.png" />
import heroImg from '../assets/images/gates/gate9.jpg';
import storyImg from '../assets/images/gates/gate10.jpg';
import craft1 from '../assets/images/MD 3 Template/MD 2 Template.jpg';
import craft2 from '../assets/images/Partition Grills 3 Template/Partition Grills 2 Template.jpg';
import about1 from '../assets/images/miror 3 Template/miror 2 Template.jpg';
import about2 from '../assets/images/Vaskal 3 Template/Vaskal 2 Template.jpg';

import { useSEO } from '../hooks/useSEO';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  useSEO({
    title: "About Our Craftsmanship",
    description: "Learn about Shaping Metals' history since 2010. Our master craftsmen combine traditional metalworking techniques with modern engineering to create bespoke art."
  });
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Every measurement matters. We bring engineering exactitude to artistic expression.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with architects and designers to realize their most ambitious visions.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge techniques while honoring traditional craftsmanship.',
    },
    {
      icon: Hammer,
      title: 'Craftsmanship',
      description: 'Master artisans dedicated to perfecting every weld, finish, and detail.',
    },
  ];


  return (
    <div className="min-h-screen">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="About Shaping Metals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-6xl font-serif font-bold mb-6">
            Forging the Future of
            <br />
            <span className="text-[#C9A45C]">Architectural Metalwork</span>
          </h1>
          <p className="text-xl text-gray-200">
            Where artistry meets engineering excellence
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-[#F5F6F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A38] mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2020, Shaping Metals began as a small workshop driven by a passion for transforming raw metal into extraordinary works of art. What started with just three craftsmen and a vision has grown into one of the most respected names in bespoke metal fabrication across South India.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our journey has been defined by an unwavering commitment to quality and innovation. We have had the privilege of working on landmark projects across PAN India, from luxury residences to commercial spaces, with each project pushing us to refine our craft further.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we combine traditional metalworking techniques with modern engineering, allowing us to bring even the most ambitious designs to life. Our team of master craftsmen doesn't just fabricate metal; we sculpt, we engineer, and we create lasting impressions.
              </p>
            </div>

            <div className="relative">
              <img
                src={storyImg}
                alt="Workshop"
                className="w-full h-[300px] md:h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#C9A45C] p-8 max-w-xs">
                <p className="text-white text-2xl font-serif font-bold">
                  "Excellence in every detail, artistry in every piece."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1E2A38] mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that exceptional metalwork is born from the perfect harmony of vision, skill, and dedication
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-[#ECEDEF] group-hover:bg-[#C9A45C] rounded-full flex items-center justify-center mb-6 mx-auto transition-colors">
                  <value.icon className="text-[#1E2A38] group-hover:text-white transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1E2A38] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="py-20 bg-[#ECEDEF]">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Side */}
      <div>

        <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-10">

          <p className="text-[#C9A45C] uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl font-serif font-bold text-[#1E2A38] mb-10">
            Why Choose
            <br />
            <span className="text-[#C9A45C]">
              Shaping Metals?
            </span>
          </h2>

          <div className="space-y-6">

            {[
              {
                icon: Target,
                title: "Premium Quality Materials",
              },
              {
                icon: Lightbulb,
                title: "100% Customization",
              },
              {
                icon: Users,
                title: "Modern Technology & Skilled Team",
              },
              {
                icon: Hammer,
                title: "Timely Delivery & Installation",
              },
              {
                icon: Target,
                title: "Affordable Pricing",
              },
              {
                icon: Users,
                title: "Trusted by Thousands",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-5 pb-5 border-b border-gray-200 last:border-none"
                >
                  <div className="w-12 h-12 rounded-full border-2 border-[#C9A45C] flex items-center justify-center flex-shrink-0">
                    <Icon
                      className="text-[#C9A45C]"
                      size={22}
                    />
                  </div>

                  <span className="text-lg font-medium text-[#1E2A38]">
                    {item.title}
                  </span>
                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div>

        <h2 className="text-5xl font-serif font-bold text-[#1E2A38] mb-8">
          Expertise That Defines Excellence
        </h2>

        <p className="text-lg text-gray-600 leading-9 mb-8">
          Our team brings together diverse specializations — from structural engineers to fine artists, welders to polishers — each contributing their mastery to create pieces that are both structurally sound and visually stunning.
        </p>

        <p className="text-lg text-gray-600 leading-9 mb-12">
          We work with stainless steel, wrought iron, brass, copper and specialty alloys using CNC machinery and precision fabrication techniques to deliver exceptional craftsmanship.
        </p>

        {/* <div className="grid grid-cols-2 gap-6">

          {expertise.map((item, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <div className="text-5xl font-serif text-[#C9A45C] mb-3">
                {item.number}
              </div>

              <div className="uppercase tracking-widest text-sm text-gray-600">
                {item.label}
              </div>

            </div>

          ))}

        </div> */}

      </div>

    </div>

  </div>
</section>

      {/* Workshop Photo Feature */}
      {/* <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1E2A38] text-center mb-12">
            Mirror Frames
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src={about1}
              alt="Installation 1"
              className="w-full h-[400px] object-cover shadow-xl"
            />
            <img
              src={about2}
              alt="Installation 2"
              className="w-full h-[400px] object-cover shadow-xl"
            />
          </div>
        </div>
      </section> */}

      <section className="py-12 md:py-24 bg-[#1E2A38]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're an architect with a bold vision or a homeowner seeking a unique statement piece, we're ready to bring your ideas to life.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            className="bg-[#C9A45C] px-10 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1E2A38] transition text-white font-semibold"
          >
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
