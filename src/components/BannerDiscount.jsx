import { useState, useEffect } from 'react';

const BannerDiscount = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });
  const [claimed, setClaimed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(68);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClaim = () => {
    setClaimed(true);
    setTimeout(() => setClaimed(false), 3000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('CYBER40');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Static Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,rgba(59,130,246,0.1)_50%,transparent_51%)] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(transparent_49%,rgba(59,130,246,0.1)_50%,transparent_51%)] bg-[size:50px_50px]"></div>
      </div>

      {/* Static Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[1px] h-[1px] bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            {/* Neon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-lg border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-semibold text-blue-300 tracking-wider">
                EXCLUSIVE OFFER
              </span>
            </div>

            {/* Main Title */}
            <div className="relative mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  CYBER SALE
                </span>
                <span className="block text-white mt-2">
                  <span className="relative">
                    40% OFF
                    <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
                  </span>
                </span>
              </h1>
              {/* Decorative Lines */}
              <div className="absolute -left-4 top-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent to-blue-500"></div>
              <div className="absolute -right-4 top-1/2 w-8 h-[2px] bg-gradient-to-l from-transparent to-purple-500"></div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Limited time exclusive offer. Premium products at unprecedented prices. 
              Upgrade your tech collection with our cyber edition.
            </p>

            {/* Coupon Code - Cyber Style */}
            <div className="mb-10">
              <div className="relative inline-block group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative px-6 py-4 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <span className="text-2xl font-bold tracking-widest text-cyan-300">CYBER40</span>
                      <div className="absolute -top-1 -right-4 text-xs text-blue-400">※</div>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-2"
                    >
                      {copied ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          COPIED
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          COPY CODE
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold rounded-lg rotate-12">
                  USE CODE
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-3">
                Apply at checkout • Min. spend $75 • One use per customer
              </p>
            </div>

            {/* Tech Specs */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { value: "256-bit", label: "Encryption" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" }
              ].map((spec, index) => (
                <div key={index} className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
                  <div className="text-xl font-bold text-blue-400 mb-1">{spec.value}</div>
                  <div className="text-sm text-gray-400">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Cyber Elements */}
          <div className="space-y-8">
            {/* Countdown Timer - Cyber Style */}
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <h3 className="text-xl font-bold text-gray-200">TIME REMAINING</h3>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="relative text-center group">
                    <div className="relative z-10">
                      <div className="text-3xl md:text-4xl font-bold mb-2 font-mono text-cyan-300">
                        {value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        {unit}
                      </div>
                    </div>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Spots remaining</span>
                  <span className="text-sm font-bold text-cyan-300">{100 - progress}%</span>
                </div>
                <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Cyber */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              
              <button
                onClick={handleClaim}
                disabled={claimed}
                className={`relative w-full py-5 px-8 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden ${
                  claimed 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600' 
                    : 'bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                <div className="relative flex items-center justify-center gap-3">
                  {claimed ? (
                    <>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      ACCESS GRANTED
                    </>
                  ) : (
                    <>
                      <span>CLAIM DISCOUNT</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Cyber Features */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🔒', label: 'Secure Payment', desc: '256-bit SSL' },
                { icon: '🚀', label: 'Fast Delivery', desc: '24-48h' },
                { icon: '💎', label: 'Premium Quality', desc: 'Verified' },
                { icon: '🔄', label: 'Easy Returns', desc: '30 Days' }
              ].map((feature, index) => (
                <div key={index} className="p-3 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="text-xl">{feature.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-gray-200">{feature.label}</div>
                      <div className="text-xs text-gray-500">{feature.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { number: '5000+', label: 'Premium Products', color: 'text-blue-400' },
              { number: '98.7%', label: 'Satisfaction Rate', color: 'text-green-400' },
              { number: '24/7', label: 'Support Available', color: 'text-purple-400' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
                <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent mx-auto mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner Cyber Elements */}
      <div className="absolute top-0 right-0 w-48 h-48">
        <div className="absolute top-8 right-8 w-24 h-24 border border-blue-500/30 rounded-full"></div>
        <div className="absolute top-12 right-12 w-16 h-16 border border-cyan-500/20 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-48 h-48">
        <div className="absolute bottom-8 left-8 w-32 h-32 border border-purple-500/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default BannerDiscount;