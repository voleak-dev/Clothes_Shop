import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', name: 'Our Story' },
    { id: 'mission', name: 'Mission' },
    { id: 'team', name: 'Our Team' },
    { id: 'values', name: 'Values' },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Former fashion editor with 15+ years of industry experience",
      social: { instagram: '@alexandrachen', twitter: '@alex_chen' }
    },
    {
      id: 2,
      name: "Marcus Rivera",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Award-winning designer specializing in sustainable fashion",
      social: { instagram: '@marcusriv', twitter: '@marcus_r' }
    },
    {
      id: 3,
      name: "Sophia Williams",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Supply chain expert committed to ethical production",
      social: { instagram: '@sophiaw', twitter: '@sophia_w' }
    },
    {
      id: 4,
      name: "David Park",
      role: "Customer Experience",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Building meaningful connections with our community",
      social: { instagram: '@davidpark', twitter: '@david_p' }
    }
  ];

  const values = [
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We source eco-friendly materials and implement ethical production practices"
    },
    {
      icon: "🎨",
      title: "Design Excellence",
      description: "Every piece is thoughtfully designed for both aesthetics and functionality"
    },
    {
      icon: "🤝",
      title: "Transparency",
      description: "We're open about our processes, pricing, and supply chain"
    },
    {
      icon: "💫",
      title: "Innovation",
      description: "Constantly exploring new materials and production techniques"
    }
  ];

  const milestones = [
    { year: "2018", title: "Founded", description: "Started in a small studio" },
    { year: "2019", title: "First Collection", description: "Launched with 12 pieces" },
    { year: "2020", title: "Sustainability Focus", description: "Switched to 100% organic materials" },
    { year: "2021", title: "International", description: "Expanded to 15+ countries" },
    { year: "2022", title: "Award Winner", description: "Best Sustainable Fashion Brand" },
    { year: "2023", title: "Community", description: "10,000+ happy customers" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-20 bg-cover bg-center"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Redefining Modern Fashion
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Where timeless design meets sustainable innovation. Creating pieces that last beyond seasons.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="sticky top-20 bg-white border-b border-gray-100 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Our Story */}
        {activeTab === 'story' && (
          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Founded in 2018, NEO began as a simple idea: create timeless fashion that doesn't compromise on ethics or quality.
                    What started in a small studio has grown into a brand recognized for its commitment to sustainable luxury.
                  </p>
                  <p>
                    Our founder, Alexandra Chen, spent years in the fashion industry witnessing the environmental impact of fast fashion.
                    She envisioned a different approach—one where design excellence and environmental responsibility coexist.
                  </p>
                  <p>
                    Today, we work with artisans around the world, using sustainable materials and ethical production methods
                    to create pieces that you'll cherish for years to come.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our studio"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-gray-100 to-white rounded-2xl shadow-lg p-6">
                  <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years of Crafting Excellence</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Timeline</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                    <div className="font-semibold text-gray-900 mb-1">{milestone.title}</div>
                    <div className="text-sm text-gray-600">{milestone.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mission */}
        {activeTab === 'mission' && (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 mb-8">
                To create beautiful, functional clothing that respects both people and planet,
                proving that fashion can be both stylish and sustainable.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-4">🌍</div>
                  <h3 className="font-bold text-gray-900 mb-2">Planet First</h3>
                  <p className="text-gray-600">Minimizing environmental impact at every step</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-4">👥</div>
                  <h3 className="font-bold text-gray-900 mb-2">People Focused</h3>
                  <p className="text-gray-600">Fair wages and safe working conditions</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-3xl mb-4">💎</div>
                  <h3 className="font-bold text-gray-900 mb-2">Quality Always</h3>
                  <p className="text-gray-600">Craftsmanship that stands the test of time</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Sustainable materials"
                  className="rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">100% organic and recycled materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Carbon-neutral shipping worldwide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Transparent pricing and supply chain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">30-day return policy for peace of mind</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Team */}
        {activeTab === 'team' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Passionate individuals dedicated to creating fashion that makes a difference
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex gap-2">
                          <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                            <span className="text-white text-xs">IG</span>
                          </a>
                          <a href="#" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                            <span className="text-white text-xs">TW</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our vision for sustainable fashion.
              </p>
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                View Open Positions
              </button>
            </div>
          </div>
        )}

        {/* Values */}
        {activeTab === 'values' && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="p-8 border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg transition-all group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Partnerships</h3>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { name: "Fair Trade", logo: "🤝" },
                    { name: "GOTS Certified", logo: "🌿" },
                    { name: "B Corp", logo: "✅" },
                  ].map((cert, index) => (
                    <div key={index} className="text-center p-4 bg-white border border-gray-200 rounded-xl">
                      <div className="text-3xl mb-2">{cert.logo}</div>
                      <div className="text-sm font-medium text-gray-900">{cert.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Carbon reduced</span>
                    <span className="font-bold text-gray-900">45 tons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Water saved</span>
                    <span className="font-bold text-gray-900">120,000L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Artisans supported</span>
                    <span className="font-bold text-gray-900">150+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Organic materials used</span>
                    <span className="font-bold text-gray-900">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Movement?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our collection of sustainable, beautifully designed pieces that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Shop Collection
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;