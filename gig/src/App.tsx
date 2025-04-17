import React from 'react';
import { Briefcase, Users, Zap, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 via-blue-100 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-32">
  <div className="text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
      Your Creative Gig Journey Starts Here
    </h1>
    <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
      Connect with top clients, showcase your talent, and take control of your freelance career with
      <span className="font-semibold text-white"> GigFloww</span>'s innovative platform.
    </p>
    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-400 flex items-center gap-2 mx-auto">
      Join Now <ArrowRight className="w-5 h-5" />
    </button>
  </div>


      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-20">
  <div className="bg-white/60 backdrop-blur-md border border-blue-200 rounded-3xl shadow-xl p-10 max-w-4xl mx-auto text-center transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-300">
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 tracking-tight">
      About <span className="text-blue-600">GigFloww</span>
    </h2>
    <p className="text-lg md:text-xl text-blue-800 leading-relaxed">
      <span className="block mb-4">
        GigFloww is revolutionizing the freelance marketplace by providing a seamless platform
        where talented professionals connect with quality clients.
      </span>
      Our mission is to empower creative individuals to build successful freelance careers while helping
      businesses find the perfect talent for their projects.
    </p>
  </div>
</div>


     {/* Features Section */}
<div className="container mx-auto px-4 py-24">
  <div className="grid md:grid-cols-3 gap-10">
    
    {/* Feature Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-[1.08] hover:shadow-2xl hover:shadow-blue-300">
      <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
        <Briefcase className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">
        Quality Projects
      </h3>
      <p className="text-blue-700">
        Access a curated selection of high-value projects from reputable clients across various creative industries.
      </p>
    </div>

    {/* Feature Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-[1.08] hover:shadow-2xl hover:shadow-blue-300">
      <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
        <Zap className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">
        Smart Matching
      </h3>
      <p className="text-blue-700">
        Our intelligent algorithm matches you with projects that align perfectly with your skills and experience.
      </p>
    </div>

    {/* Feature Card */}
    <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-[1.08] hover:shadow-2xl hover:shadow-blue-300">
      <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
        <Users className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">
        Community Growth
      </h3>
      <p className="text-blue-700">
        Join a thriving community of creative professionals, share insights, and grow your network.
      </p>
    </div>

  </div>
</div>


      {/* Final CTA */}
      <div className="container mx-auto px-4 py-24 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-10 leading-tight">
    Ready to Transform Your Freelance Career?
  </h2>
  <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-400 flex items-center gap-3 mx-auto">
    Get Started Today <ArrowRight className="w-5 h-5" />
  </button>
</div>

    </div>
  );
}

export default App;