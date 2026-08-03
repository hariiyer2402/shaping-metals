import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import IntroAnimation from "../components/IntroAnimation";
import { Autoplay } from "swiper/modules";
import Hero from "../components/Hero";
<link rel="icon" type="image/png" href="/logo.png" />

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slide1 from "../assets/images/gates/gate1.jpg";
import slide2 from "../assets/images/gates/gate4.jpg";
import slide3 from "../assets/images/murals/mural1.jpg";
import slide4 from "../assets/images/railings/railing1.jpg";
import slide5 from "../assets/images/accessories/acc1.jpg";

import proj1 from "../assets/images/projects/proj1.jpg";
import proj2 from "../assets/images/projects/proj2.jpg";
import proj3 from "../assets/images/projects/proj3.jpg";
import proj4 from "../assets/images/projects/proj4.jpg";
import proj5 from "../assets/images/projects/proj5.jpg";
import aboutImg from "../assets/images/about/about1.webp";

import { useSEO } from "../hooks/useSEO";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {

const [showIntro, setShowIntro] = useState(true);
const [pageVisible, setPageVisible] = useState(false);

useEffect(() => {
  if (!showIntro) {
    setPageVisible(true);
  }
}, [showIntro]);

  useSEO({
    title: "Luxury Metal Art & Bespoke Fabrication",
    description: "Premium bespoke metal gates, railings, murals, and architectural design elements for luxury residential and commercial spaces across South India."
  });

const collections = [slide1, slide2, slide3, slide4, slide5];

const projects = [
  { image: proj1, title: "Hyderabad | Telangana" },
  { image: proj2, title: "Bangalore | Karnataka" },
  { image: proj3, title: "Chennai | Tamil Nadu" },
  { image: proj4, title: "Mumbai | Maharashtra" },
  { image: proj5, title: "Vizag | Andhra Pradesh" },
];

const testimonials = [
  {
    name: "Thejaswini C Gowda",
    review:
      "The craftsmanship is exceptional, with intricate handmade detailing and a flawless finish. Every piece reflects true artistry and quality. Highly recommended for anyone seeking premium metal craftsmanship.",
  },
  {
    name: "Shwetha Swamy",
    review:
      "Amazing work done by the team , coordination is something to be appreciated. Came out so well and at a reasonable price compared to many vendors.",
  },
  {
    name: "Narendra Pai",
    review:
      "From design guidance to flawless execution, every step was handled with professionalism. The finished work is stunning, and we couldn't be happier with the result.",
  },
    {
    name: "Srini RK",
    review:
      "Working with Shaping Metals was a fantastic experience. Their team guided us through every step, delivered exceptional quality on time, and brought our custom design to life with remarkable craftsmanship. Highly recommended.",
  },
    {
    name: "RAMAMURTHY PRASHANTH",
    review:
      "I had recently purchased the asta lakshmi idol's from here and the work was amazing be it the detailing and everything. Overall I loved their products and they had delivered the item on time without any delay",
  },
    {
    name: "Priya Darshini",
    review:
      "Hand crafted brass fittings fir pooja room & main door. Mr. Vikas's Customization created unique & Divine ambiance for the overall look & feel of the house.",
  },
];

if (showIntro) {
  return (
    <IntroAnimation
      onComplete={() => {
        setShowIntro(false);
      }}
    />
  );
}

return (
<div
  className={`
    bg-white text-primary-navy
    transition-all duration-[1500ms] ease-out
    ${
      pageVisible
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-10"
    }
  `}
>

{/* HERO SECTION */}
<Hero onNavigate={onNavigate} />

{/* PREMIUM METAL COLLECTIONS */}
<section className="py-12 md:py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-serif text-center mb-10 md:mb-16">
  Premium Metal Collections
</h2>

<Swiper
  modules={[Autoplay]}
  spaceBetween={40}
  slidesPerView={3}
  loop={true}
  speed={9000}
  autoplay={{ delay: 0, disableOnInteraction: false }}
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {collections.map((img, index) => (
    <SwiperSlide key={index}>
      <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
        <img
          src={img}
          className="h-[320px] w-full object-cover hover:scale-110 transition duration-700"
          alt="Metal collection"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

<div className="text-center mt-14">
  <button
    onClick={() => onNavigate("gallery")}
    className="border border-black px-10 py-4 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
  >
    View Full Gallery
  </button>
</div>
</div>
</section>

{/* ABOUT SECTION */}
<section className="py-12 md:py-24 bg-[#1E2A38] text-white">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

  <img
    src={aboutImg}
    className="rounded-lg shadow-xl w-full h-[450px] object-cover"
    alt="Shaping Metals craftsmanship"
  />

  <div>
    <h2 className="text-3xl md:text-5xl font-serif mb-6">
      Craftsmanship Since 2020
    </h2>
    <p className="text-gray-300 text-lg mb-6">
      With over a decade of experience, we specialize in creating bespoke
      metal gates, railings, wall murals, and luxury design elements for
      premium residential and commercial spaces across South India.
    </p>
    <p className="text-gray-300 text-lg mb-8">
      Our skilled artisans combine traditional craftsmanship with modern
      engineering to create timeless metal masterpieces that stand the test
      of time.
    </p>
    <button
      onClick={() => onNavigate("about")}
      className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-[#1E2A38] transition"
    >
      Learn More About Us
    </button>
  </div>

</div>
</section>

{/* RECENT PROJECTS */}
<section className="py-12 md:py-24 bg-[#F5F6F7]">
<div className="max-w-7xl mx-auto px-6">
  <h2 className="text-center text-3xl md:text-4xl font-serif mb-10 md:mb-16">Recent Projects</h2>

  <Swiper
    modules={[Autoplay]}
    spaceBetween={24}
    slidesPerView={3}
    loop={true}
    speed={6000}
    autoplay={{ delay: 0, disableOnInteraction: false }}
    breakpoints={{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {projects.map((project, index) => (
<SwiperSlide key={index}>
  <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
    <img
      src={project.image}
      className="h-[300px] w-full object-cover hover:scale-110 transition duration-700"
      alt="Project"
    />
  </div>
</SwiperSlide>
    ))}
  </Swiper>
</div>
</section>

{/* CATALOG SECTION */}

{/* -------------------------------------------------------------------------------------------------------------- */}
{/* TESTIMONIALS */}
<section className="py-20 md:py-28 bg-[#F5F6F7]">
  <div className="max-w-7xl mx-auto px-6">

    <h2 className="text-3xl md:text-5xl font-serif text-center mb-4">
      What Our Clients Say
    </h2>

    <p className="text-center text-gray-500 mb-14 text-lg">
      Trusted by homeowners, architects and interior designers.
    </p>

    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      speed={6000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {testimonials.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full hover:-translate-y-2 transition duration-500">

            <div className="text-[#C9A45C] text-xl mb-4">
              ★★★★★
            </div>

            <p className="text-gray-600 leading-8 italic mb-8">
              "{item.review}"
            </p>

            <div className="border-t pt-6">
              <h4 className="text-lg font-semibold text-[#1E2A38]">
                {item.name}
              </h4>

            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>
{/* -------------------------------------------------------------------------------------------------------------- */} 

{/* CTA */}
<section className="py-20 md:py-32 bg-[#1E2A38] text-white text-center">
<h2 className="text-3xl md:text-5xl font-serif mb-6 px-4">
  Start Your Custom Project
</h2>
<p className="text-xl text-gray-300 mb-10">
  Collaborate with us to create extraordinary metal designs for your space.
</p>
<button
  onClick={() => onNavigate("contact")}
  className="bg-[#C9A45C] px-10 py-5 uppercase tracking-widest text-sm"
>
  Contact Us
</button>
</section>

</div>
);
}
