import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BannerDiscount = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const [soldCount, setSoldCount] = useState(156);
  const [customerCount, setCustomerCount] = useState(2347);

  useEffect(() => {
    const soldInterval = setInterval(() => {
      setSoldCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);

    const customerInterval = setInterval(() => {
      setCustomerCount(prev => prev + Math.floor(Math.random() * 5));
    }, 5000);

    return () => {
      clearInterval(soldInterval);
      clearInterval(customerInterval);
    };
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Shapes */}
        {[1, 2, 3, 4, 5].map(i => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-white/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${i * 15}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
            >
              <span className="mr-2">🔥</span>
              <span className="font-bold">LIMITED TIME OFFER</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block">FLASH SALE</span>
              <span className="block text-yellow-300 drop-shadow-lg">UP TO 70% OFF</span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-8 max-w-xl"
            >
              Don't miss this incredible opportunity! Shop our biggest sale of the year with massive discounts on premium fashion items.
            </motion.p>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold flex items-center">
                  {soldCount.toLocaleString()}
                  <span className="ml-2 text-sm font-normal">+</span>
                </div>
                <div className="text-white/80">Items Sold Today</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold flex items-center">
                  {customerCount.toLocaleString()}
                  <span className="ml-2 text-sm font-normal">+</span>
                </div>
                <div className="text-white/80">Happy Customers</div>
              </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10"
            >
              <div className="flex justify-between text-sm font-medium mb-2">
                <span>Sale Progress</span>
                <span>85% Sold</span>
              </div>
              <div className="h-3 bg-white/30 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
                />
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-red-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg flex items-center group"
            >
              <span>SHOP NOW & SAVE BIG</span>
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>

          {/* Right Side - Timer & Discount Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Timer Container */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-2xl font-bold text-white mb-2">OFFER ENDS IN</div>
                <div className="text-white/80">Hurry up before it's gone!</div>
              </div>

              {/* Timer */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <motion.div 
                      key={value}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="bg-white text-gray-900 text-3xl md:text-4xl font-bold py-4 rounded-xl mb-2 shadow-lg"
                    >
                      {String(value).padStart(2, '0')}
                    </motion.div>
                    <div className="text-white/90 font-medium uppercase text-sm">
                      {unit}
                    </div>
                  </div>
                ))}
              </div>

              {/* Discount Tiers */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors cursor-pointer group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold">70%</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Premium Collection</div>
                      <div className="text-white/70 text-sm">Limited quantities</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors cursor-pointer group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold">50%</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Accessories</div>
                      <div className="text-white/70 text-sm">All items included</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-colors cursor-pointer group">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold">30%</span>
                    </div>
                    <div>
                      <div className="text-white font-bold">Footwear</div>
                      <div className="text-white/70 text-sm">Selected styles only</div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Discount Badge */}
            <motion.div 
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900 px-6 py-3 rounded-xl shadow-2xl font-bold text-lg"
            >
              EXTRA 10% OFF
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm p-4 rounded-2xl"
            >
              <div className="text-white text-center">
                <div className="text-sm">Use Code</div>
                <div className="font-bold text-lg">FLASH2024</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Countdown Alert */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-black/30 backdrop-blur-sm rounded-full">
            <span className="mr-2">⏰</span>
            <span className="text-white/90">Sale ends in </span>
            <span className="ml-2 text-yellow-300 font-bold">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerDiscount;