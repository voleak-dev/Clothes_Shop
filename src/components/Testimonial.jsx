import { useState, useEffect } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Fashion Editor",
      company: "Vogue Magazine",
      rating: 5,
      content: "The quality and craftsmanship are exceptional. Every piece feels like it was made just for me. The attention to detail is what sets this brand apart from others in the market.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      verified: true,
      purchase: "Premium Wool Collection",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Marcus Rivera",
      role: "Creative Director",
      company: "Apple",
      rating: 4.5,
      content: "As someone who values minimalist design and quality, I was blown away by the clean aesthetics and premium materials. The customer service was outstanding throughout.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      verified: true,
      purchase: "Minimalist Essentials",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Architect",
      company: "Foster + Partners",
      rating: 5,
      content: "The perfect blend of form and function. I've been searching for pieces that match my architectural sensibilities, and I finally found them here. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      verified: true,
      purchase: "Architectural Collection",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "David Park",
      role: "Tech Entrepreneur",
      company: "TechFlow Inc.",
      rating: 4.8,
      content: "Impeccable quality and sustainable practices. It's rare to find a brand that delivers on both style and ethics. My go-to for professional and casual wear.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      verified: true,
      purchase: "Business Casual Bundle",
      date: "2 weeks ago"
    },
    {
      id: 5,
      name: "Isabella Rossi",
      role: "Art Curator",
      company: "MoMA",
      rating: 5,
      content: "Each piece feels like a work of art. The textures, colors, and cuts are carefully considered. It's more than clothing—it's wearable art.",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      verified: true,
      purchase: "Artisan Collection",
      date: "5 days ago"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const stats = [
    { value: "4.9/5", label: "Average Rating" },
    { value: "2K+", label: "Happy Customers" },
    { value: "98%", label: "Would Recommend" },
    { value: "24h", label: "Response Time" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">Customer Voices</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Designers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from creative professionals who appreciate quality, craftsmanship, and timeless design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Main Testimonial */}
          <div className="relative">
            {/* Main Card */}
            <div 
              className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-8 transition-all duration-500 ${
                isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-6xl text-gray-100">"</div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(testimonials[activeIndex].rating)
                        ? 'text-yellow-400 fill-current'
                        : i < testimonials[activeIndex].rating
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {testimonials[activeIndex].rating.toFixed(1)}
                </span>
              </div>

              {/* Content */}
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic relative z-10">
                "{testimonials[activeIndex].content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                  />
                  {testimonials[activeIndex].verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-gray-600">{testimonials[activeIndex].role}</div>
                  <div className="text-sm text-gray-500">{testimonials[activeIndex].company}</div>
                </div>
              </div>

              {/* Purchase Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Purchased</div>
                    <div className="font-medium text-gray-900">{testimonials[activeIndex].purchase}</div>
                  </div>
                  <div className="text-sm text-gray-500">{testimonials[activeIndex].date}</div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                disabled={isAnimating}
                className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md disabled:opacity-30 transition-all"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                disabled={isAnimating}
                className="p-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md disabled:opacity-30 transition-all"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  disabled={isAnimating}
                  className="relative group"
                >
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? 'bg-gray-900' 
                      : 'bg-gray-300 group-hover:bg-gray-400'
                  }`} />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs text-gray-600 whitespace-nowrap">
                      {testimonials[index].name.split(' ')[0]}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Side Testimonials & Stats */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Side Testimonials */}
            <div className="space-y-4">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                    activeIndex === index ? 'border-blue-500 ring-2 ring-blue-100' : ''
                  }`}
                  onClick={() => goToTestimonial(index)}
                  onMouseEnter={() => setHoveredCard(testimonial.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">{testimonial.name}</div>
                          <div className="text-xs text-gray-500">{testimonial.role}</div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(testimonial.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {testimonial.content}
                      </p>
                      <div className="text-xs text-gray-500 mt-2">{testimonial.date}</div>
                    </div>
                  </div>
                  {hoveredCard === testimonial.id && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50/0 via-blue-50/50 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Verified Reviews</div>
                  <div className="text-sm text-gray-600">All testimonials are verified purchases</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Purchase Verified', 'Photo Verified', 'Identity Verified', 'Review Verified'].map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brands Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Featured In</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            {['Vogue', 'Forbes', 'Architectural Digest', 'TechCrunch'].map((brand, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-gray-900">{brand}</div>
                <div className="text-xs text-gray-500 mt-1">Featured Story</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;