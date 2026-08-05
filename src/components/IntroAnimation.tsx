import { useEffect, useState } from "react";
import logo from "../assets/logo/logo1.png";


interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({
  onComplete,
}: IntroAnimationProps) {
  const [showText, setShowText] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const t1 = setTimeout(() => setShowText(true), 50);

    const fullText = "Exploring Innovations";

const typing = setTimeout(() => {
  let i = 0;

  const interval = setInterval(() => {
    setTypedText(fullText.slice(0, i + 1));
    i++;

    if (i === fullText.length) {
      clearInterval(interval);
    }
  }, 70);
}, 900);

    const t2 = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(typing);
    };
  }, [onComplete]);

  return (
  <div className="fixed inset-0 z-[9999] bg-[#0B0B0B] flex items-center justify-center overflow-hidden">
    {/* Background Glow */}
    <div className="
    absolute
    w-[500px]
    h-[500px]
    sm:w-[450px]
    sm:h-[450px]
    md:w-[650px]
    md:h-[650px]
    rounded-full
    bg-[#C9A45C]/10
    blur-3xl
  " />

          <div
        className={`
          flex flex-col items-center
          transition-all duration-1000 ease-out
          ${
            showText
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 rotate-180"
          }
        `}
      >
      {/* Logo */}
<img
  src={logo}
  alt="Shaping Metals"
  className="
    object-contain
    w-56
    sm:w-60
    md:w-72
    lg:w-[420px]
    xl:w-[460px]
    mx-auto
  "
/>

      {/* Company Name + Subtitle */}
<div
  className="
    w-full
    flex
    flex-col
    items-center
    justify-center
    -mt-6
    md:-mt-12
  "
>
        {/* Company Name */}
        <h1
className="
text-center
font-semibold
leading-tight
tracking-wide
text-[2.5rem]
sm:text-[3rem]
md:text-6xl
lg:text-7xl
"
          style={{
            fontFamily: "Cinzel, serif",
            background: "linear-gradient(180deg, #E5D6AC 0%, #A48B41 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          SHAPING METALS
        </h1>

        {/* Subtitle */}
<div
  className="
    w-full
    flex
    justify-end
    mt-1
    pr-6
    md:pr-0
  "
>
  <p
className="
text-sm
sm:text-lg
md:text-xl
lg:text-2xl
tracking-wider
whitespace-nowrap
    "
            style={{
              fontFamily: "Cinzel, serif",
              letterSpacing: "0.08em",
              background: "linear-gradient(180deg, #E5D6AC 0%, #A48B41 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
}