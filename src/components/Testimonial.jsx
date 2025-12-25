import { useState, useEffect, useRef } from 'react';

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Fashion Director @ Vogue",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content: "The craftsmanship is extraordinary. Every piece feels like it was made specifically for me. The attention to detail is what sets this brand apart.",
      purchase: "Evening Gown Collection",
      location: "Paris, FR",
      verified: true,
      highlight: true,
      tags: ["Premium", "Luxury", "Quality"],
      social: "@alexandrachen"
    },
    {
      id: 2,
      name: "Marcus Rivera",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content: "Finally found a brand that understands modern minimalism. The fabrics are sustainable and the designs are timeless. My entire wardrobe is from here.",
      purchase: "Minimalist Capsule",
      location: "Berlin, DE",
      verified: true,
      highlight: false,
      tags: ["Sustainable", "Minimalist", "Timeless"],
      social: "@marcusrivera"
    },
    {
      id: 3,
      name: "Sophie Williams",
      role: "Influencer & Model",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content: "Every photo I've taken in their clothing has gone viral. The colors are vibrant, the fits are perfect, and the quality exceeds expectations.",
      purchase: "Summer Collection",
      location: "Los Angeles, CA",
      verified: true,
      highlight: true,
      tags: ["Vibrant", "Photogenic", "Trendy"],
      social: "@sophiewstyle"
    },
    {
      id: 4,
      name: "David Park",
      role: "Tech CEO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 4,
      content: "Perfect blend of professional and casual. I wear their suits to board meetings and their casual wear on weekends. Exceptional versatility.",
      purchase: "Executive Collection",
      location: "San Francisco, CA",
      verified: true,
      highlight: false,
      tags: ["Professional", "Versatile", "Quality"],
      social: "@davidparkceo"
    },
    {
      id: 5,
      name: "Isabella Rossi",
      role: "Art Director",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content: "The color palette is perfection. Each piece tells a story. I've never received so many compliments on my wardrobe choices.",
      purchase: "Artisanal Collection",
      location: "Milan, IT",
      verified: true,
      highlight: true,
      tags: ["Artistic", "Colorful", "Unique"],
      social: "@isabellarossi"
    },
    {
      id: 6,
      name: "Jordan Lee",
      role: "Professional Athlete",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      rating: 5,
      content: "Athlete-friendly fashion that doesn't compromise on style. The activewear collection is revolutionary - both functional and fashionable.",
      purchase: "Activewear Line",
      location: "Miami, FL",
      verified: true,
      highlight: false,
      tags: ["Activewear", "Functional", "Stylish"],
      social: "@jordanleeathlete"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const stats = [
    { value: "4.9/5", label: "Average Rating", icon: "⭐", trend: "+0.2" },
    { value: "10K+", label: "Verified Reviews", icon: "📝", trend: "+500" },
    { value: "98%", label: "Recommend", icon: "❤️", trend: "+2%" },
    { value: "24h", label: "Avg. Response Time", icon: "⚡", trend: "-2h" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border border-purple-100 mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-purple-700">TRUSTED BY 10,000+ CUSTOMERS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 mb-2">
              Voices of
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from fashion-forward individuals who have experienced 
            the quality and style firsthand.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Stats Column */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{stat.icon}</div>
                  <span className="text-sm font-medium px-2 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-emerald-700 rounded-full">
                    {stat.trend}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
            
            {/* Trust Indicators */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Verified & Trusted</h3>
              <p className="text-gray-300 mb-6">Every review is verified from real customers. No bots, no fake reviews.</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">100% Authentic Reviews</span>
              </div>
            </div>
          </div>

          {/* Featured Testimonial - Centerpiece */}
          <div className="lg:col-span-2">
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-30"></div>
              
              <div className="relative bg-white rounded-3xl p-8 md:p-12">
                {/* Top Bar */}
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${testimonials[activeIndex].highlight ? 'bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse' : 'bg-gray-300'}`}></div>
                    <div className="text-sm font-medium text-gray-500">FEATURED REVIEW</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full">
                      {testimonials[activeIndex].tags[0]}
                    </div>
                    {testimonials[activeIndex].verified && (
                      <div className="text-xs font-medium px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-emerald-700 rounded-full flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>
                </div>

                {/* Quote Marks */}
                <div className="text-6xl text-gray-100 mb-6">"</div>
                
                {/* Animated Content */}
                <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                  <p className="text-2xl md:text-3xl text-gray-800 mb-10 leading-relaxed font-light">
                    {testimonials[activeIndex].content}
                  </p>
                  
                  {/* Author Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-30"></div>
                        <img 
                          src={testimonials[activeIndex].avatar} 
                          alt={testimonials[activeIndex].name}
                          className="relative w-16 h-16 rounded-full border-4 border-white shadow-lg"
                        />
                      </div>
                      
                      <div className="ml-6">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="text-xl font-bold text-gray-900">
                            {testimonials[activeIndex].name}
                          </h4>
                          <div className="flex">
                            {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                        <div className="flex items-center mt-2">
                          <svg className="w-4 h-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span className="text-sm text-gray-500">{testimonials[activeIndex].location}</span>
                          <span className="mx-2">•</span>
                          <span className="text-sm text-purple-600 font-medium">{testimonials[activeIndex].social}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Purchase Info */}
                    <div className="hidden md:block text-right">
                      <div className="text-sm text-gray-500 mb-1">Purchased</div>
                      <div className="text-lg font-bold text-gray-900">{testimonials[activeIndex].purchase}</div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-gray-100">
                  {testimonials[activeIndex].tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Navigation Controls */}
              <div className="absolute bottom-8 right-8 flex space-x-3">
                <button 
                  onClick={prevTestimonial}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border border-gray-200 group"
                >
                  <svg className="w-6 h-6 text-gray-700 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-8 bg-gradient-to-r from-purple-600 to-pink-600' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900">More Customer Stories</h3>
            <div className="flex items-center space-x-2 text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span>Swipe to see more</span>
            </div>
          </div>

          <div 
            ref={containerRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className={`bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                  hoveredCard === testimonial.id ? 'border-purple-200' : ''
                }`}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-white shadow"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  {testimonial.highlight && (
                    <div className="px-2 py-1 bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <p className="text-gray-600 mb-6 line-clamp-3">{testimonial.content}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {testimonial.tags.slice(0, 2).map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2.5 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Footer */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Verified Purchase</span>
                    </div>
                    <span className="text-purple-600 font-medium">{testimonial.social}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-5xl mb-6">💫</div>
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Share Your Story?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of satisfied customers and share your experience with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95">
                Write a Review
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                Browse All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;