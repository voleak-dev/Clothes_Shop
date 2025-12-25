import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Spring Collection 2024",
      subtitle: "Fresh Beginnings",
      description: "Lightweight fabrics and vibrant colors for the season ahead",
      bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      textColor: "text-white",
      buttonColor: "bg-white text-black hover:bg-gray-100",
      accentColor: "text-yellow-300"
    },
    {
      id: 2,
      title: "Urban Minimalism",
      subtitle: "Less is More",
      description: "Clean lines, premium fabrics, effortless style",
      bgImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      textColor: "text-white",
      buttonColor: "bg-black text-white hover:bg-gray-800",
      accentColor: "text-gray-300"
    },
    {
      id: 3,
      title: "Evening Elegance",
      subtitle: "Night Out Collection",
      description: "Statement pieces for unforgettable moments",
      bgImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      textColor: "text-white",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      accentColor: "text-pink-300"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        disabled={isAnimating}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        disabled={isAnimating}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 w-full">
          <div className={`transition-all duration-1000 transform ${
            isAnimating ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'
          }`}>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                {slides[currentSlide].subtitle}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className={`block ${slides[currentSlide].textColor}`}>
                {slides[currentSlide].title.split(' ')[0]}
              </span>
              <span className={`block ${slides[currentSlide].accentColor}`}>
                {slides[currentSlide].title.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl">
              {slides[currentSlide].description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 ${slides[currentSlide].buttonColor}`}>
                Shop Collection
              </button>
              <button className="px-10 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                View Lookbook
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-12' 
                : 'bg-white/50 w-4 hover:bg-white/80'
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>

      {/* Slide Numbers */}
      <div className="absolute bottom-12 right-12 text-white/60 text-sm font-mono z-20">
        <span className="text-2xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-2">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
};

export default HeroSection;