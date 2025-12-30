import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "Elevate Your",
      highlight: "Essentials",
      subtitle: "Minimalist Collection",
      description: "Timeless pieces crafted with precision and purpose for the modern wardrobe",
      bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overlay: "bg-gradient-to-r from-black/60 via-black/40 to-black/20",
      buttonColor: "bg-white text-black hover:bg-gray-100 border border-white",
      accentColor: "text-gray-300",
      stats: [
        { label: "Designers", value: "42+" },
        { label: "Collections", value: "8" },
        { label: "Materials", value: "Premium" }
      ]
    },
    {
      id: 2,
      title: "Urban",
      highlight: "Minimalism",
      subtitle: "Clean Aesthetics",
      description: "Where simplicity meets sophistication in contemporary design",
      bgImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overlay: "bg-gradient-to-l from-gray-900/70 via-black/50 to-black/30",
      buttonColor: "bg-black text-white hover:bg-gray-900 border border-gray-800",
      accentColor: "text-gray-400",
      stats: [
        { label: "Sustainability", value: "100%" },
        { label: "Quality", value: "Premium" },
        { label: "Design", value: "Awarded" }
      ]
    },
    {
      id: 3,
      title: "Evening",
      highlight: "Elegance",
      subtitle: "Formal Collection",
      description: "Statement pieces designed for memorable occasions",
      bgImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      overlay: "bg-gradient-to-tr from-purple-900/60 via-black/50 to-pink-900/40",
      buttonColor: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white",
      accentColor: "text-pink-300",
      stats: [
        { label: "Crafted", value: "Handmade" },
        { label: "Materials", value: "Luxury" },
        { label: "Exclusivity", value: "Limited" }
      ]
    }
  ];

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-slide and visibility
  useEffect(() => {
    setIsVisible(true);
    
    let interval;
    if (isPlaying && !isAnimating) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isAnimating]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(255,255,255,0.02)_50%,transparent_52%)] bg-[size:100px_100px]"></div>
      </div>

      {/* Background Slides with Parallax */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
            style={{
              transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className={`absolute inset-0 ${slide.overlay}`}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative h-screen flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-white/90 font-medium">{slides[currentSlide].subtitle}</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
                <span className="block text-white mb-2">{slides[currentSlide].title}</span>
                <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  {slides[currentSlide].highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/70 mt-6 mb-10 max-w-xl leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button className={`group relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95 ${slides[currentSlide].buttonColor}`}>
                  <span className="relative z-10 flex items-center gap-3">
                    Shop Collection
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                
                <button className="group px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95">
                  <span className="flex items-center gap-3">
                    View Lookbook
                    <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8">
                {slides[currentSlide].stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                    <div className="w-full h-px bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="hidden lg:block">
              {/* Floating Card */}
              <div 
                className="relative w-full aspect-square rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm"
                style={{
                  transform: `translate3d(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px, 0) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img 
                  src={slides[currentSlide].bgImage} 
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${slides[currentSlide].overlay}`}></div>
                
                {/* Card Content */}
                <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="text-white text-sm opacity-80">Featured</div>
                  <div className="text-white text-2xl font-bold">{slides[currentSlide].subtitle}</div>
                </div>
                
                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white text-lg font-semibold">Collection #{currentSlide + 1}</div>
                      <div className="text-white/60 text-sm">Season {new Date().getFullYear()}</div>
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                      View
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-30">
        
        {/* Slide Progress */}
        <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
        
        {/* Slide Numbers */}
        <div className="text-white/70 font-mono text-sm flex items-center gap-2">
          <span className="text-2xl font-bold text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-white/30">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-300 hover:scale-110 disabled:opacity-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={togglePlay}
            className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-300 hover:scale-110 disabled:opacity-30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className="group relative"
          >
            <div className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white/30 group-hover:bg-white/60'
            }`} />
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-white/70">0{index + 1}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-16 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-1/2 bg-gradient-to-t from-white to-white/50 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;