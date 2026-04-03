import React, { useEffect, useState } from "react";

const images = [
  "/images/hero-01.webp",
  "/images/hero-02.jpg",
  "/images/hero-03.webp",
  "/images/hero-04.webp",
  "/images/hero-05.webp",
  "/images/hero-06.webp",
];

const Index = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-screen min-h-screen bg-black">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered brand name */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="font-roboto-condensed-light font-light text-[24px] text-white max-sm:text-[20px] max-[375px]:text-[18px]">
          co+ studio
        </h1>
      </div>

      {/* Footer - positioned below the fold */}
      <footer className="relative mt-[calc(100vh-6rem+3cm)] p-6 text-white/70">
        <div className="flex justify-between items-end">
          <p className="text-neutral-50 opacity-60 font-thin font-sans text-sm">
            architecture &amp; design
          </p>
          <a
            href="mailto:info@coplusstudio.com"
            className="text-[rgba(251,251,251,1)] hover:opacity-80 transition-opacity font-sans font-light text-sm"
          >
            info@coplusstudio.com
          </a>
          <p className="text-neutral-50 opacity-60 text-sm font-thin font-sans">
            portugal // norway // egypt
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
