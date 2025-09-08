import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Trophy, Calendar, Briefcase, MessageSquare, Shield,
  ArrowRight, Star, Rocket, Award
} from 'lucide-react';

type CountersType = {
  alumni: number;
  students: number;
  sessions: number;
  placement: number;
};

type Testimonial = {
  name: string;
  role: string;
  year: string;
  content: string;
  avatar: string;
};

export default function LandingPage() {
  const [counters, setCounters] = useState<CountersType>({
    alumni: 0,
    students: 0,
    sessions: 0,
    placement: 0,
  });

  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);

  useEffect(() => {
    const target: CountersType = { alumni: 10000, students: 25000, sessions: 500, placement: 95 };
    const interval = setInterval(() => {
      setCounters(prev => {
        const next = { ...prev };
        let finished = true;
        (Object.keys(target) as Array<keyof CountersType>).forEach(key => {
          if (prev[key] < target[key]) {
            next[key] = Math.min(prev[key] + Math.ceil(target[key] / 100), target[key]);
            finished = false;
          }
        });
        if (finished) clearInterval(interval);
        return next;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Users, title: 'AI-Powered Mentorship', description: 'Smart mentor–mentee matching based on skills, interests, and goals.', color: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900' },
    { icon: Calendar, title: 'Events & Networking', description: 'Mentorship sessions, hackathons, workshops, and career fairs.', color: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900' },
    { icon: Briefcase, title: 'Career Support', description: 'Exclusive jobs, company insights, resume reviews, and interview prep.', color: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900' },
    { icon: MessageSquare, title: 'Community Engagement', description: 'Discussion forums, blogs, podcasts, and knowledge sharing.', color: 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900' },
    { icon: Trophy, title: 'Gamification & Recognition', description: 'Badges, leaderboards, and awards to encourage contributions.', color: 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900' },
    { icon: Shield, title: 'Secure & Verified', description: 'Verified alumni, secure data handling, and controlled access.', color: 'text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-900' }
  ];

  const roadmap = [
    { step: 'Phase 1', title: 'Kickstart', description: 'Alumni database, self-registration, basic profile sync & AI mentorship', color: 'bg-blue-600 dark:bg-blue-500' },
    { step: 'Phase 2', title: 'Engage', description: 'Hidden opportunities, resume generator, motivational wall, events & community space', color: 'bg-green-600 dark:bg-green-500' },
    { step: 'Phase 3', title: 'Lead', description: 'Startup & innovation zone, admin dashboards, AI analytics, gamification & rewards', color: 'bg-purple-600 dark:bg-purple-500' },
  ];

  const testimonials: Testimonial[] = [
    {
      name: 'Prachi Sharma',
      role: 'Software Engineer, Google',
      year: '2019 Graduate',
      content: 'My journey to Google was filled with challenges, but the mentorship I found through ReUnix gave me direction and confidence. Today, I share my story so juniors can learn from my path.',
      avatar: 'data:image/png;base64,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'
    },
    {
      name: 'Naitik Gupta',
      role: 'Product Manager, Microsoft',
      year: '2017 Graduate',
      content: 'ReUnix gave me a way to reflect on my journey and guide juniors at the same time. Sharing my story has been as rewarding as building my career at Microsoft.',
      avatar: 'https://images.seeklogo.com/logo-png/16/2/microsoft-logo-png_seeklogo-168319.png'
    },
    
    {
      name: 'Piyush Goel',
      role: 'Product Manager, Anazon',
      year: '2019 Graduate',
      content: 'When I was preparing for my career, stories from seniors helped me immensely. Through ReUnix, I now get to share my own journey and inspire others the same way.',
      avatar: 'https://rocketagency.com.au/wp-content/uploads/2022/05/amazon-logo-300x300.png'
    },
    {
      name: 'Shivank Tyagi',
      role: 'Software Engineer, Google',
      year: '2020 Graduate',
      content: 'Sharing my story on ReUnix helped me look back at my struggles and wins—from coding interviews to finding my place at Google. Juniors connect with those real experiences.',
      avatar: 'data:image/png;base64,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'
    }, 
    {
      name: 'Payal Goswami',
      role: 'Product Manager, Microsoft',
      year: '2017 Graduate',
      content: 'Telling my story through ReUnix has been special. It’s more than mentoring—it’s about showing juniors that every journey has its hurdles, and every hurdle can be crossed.',
      avatar: 'https://images.seeklogo.com/logo-png/16/2/microsoft-logo-png_seeklogo-168319.png'
    },
    {
      name: 'Prakhar',
      role: 'Product Manager, Amazon',
      year: '2015 Graduate',
      content: 'Looking back, the biggest lessons came from people who shared their journeys with me. ReUnix lets me pay it forward by turning my career story into guidance for others.',
      avatar: 'https://rocketagency.com.au/wp-content/uploads/2022/05/amazon-logo-300x300.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Connect. <span className="text-blue-300 dark:text-blue-400">Mentor.</span> <span className="text-purple-300 dark:text-purple-400">Grow.</span>
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-4 font-semibold">
              Learn skills that matter. Build projects. Get certified.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
              {Object.entries(counters).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-white">{value}+</div>
                  <div className="text-blue-200 dark:text-blue-400 text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link to="/register" className="bg-white text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition-all transform hover:scale-105 flex items-center justify-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5"/>
              </Link>
              <Link to="/login" className="border-2 border-white text-white dark:border-gray-100 dark:text-gray-100 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 dark:hover:bg-gray-800 transition-all transform hover:scale-105">
                Sign In
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
              <img src="https://www.univariety.com/blog/wp-content/uploads/2022/02/5853-min-scaled.jpg" alt="Students learning" className="rounded-lg w-full h-64 sm:h-80 md:h-96 object-cover mb-6"/>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Why Choose ReUnix?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Everything you need to create meaningful connections and accelerate career growth
          </p>
          <div className="flex justify-center gap-6 flex-wrap text-sm text-gray-700 dark:text-gray-400 font-medium">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">Verified Alumni</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">AI-Powered</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">Career Growth</span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full">Startup Guidance</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6 transition-transform`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Roadmap</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our phased plan to empower students and alumni
          </p>
        </div>

        <div className="flex overflow-x-auto md:flex-nowrap gap-8 snap-x snap-mandatory scrollbar-hide max-w-6xl mx-auto px-4">
          {roadmap.map((item, index) => {
            const Icon =
              index === 0 ? Rocket :
              index === 1 ? Users :
              Award;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg flex-shrink-0 snap-center transform hover:scale-105 transition-transform duration-300 w-80"
              >
                <div className="relative">
                  <img
                    src={`https://picsum.photos/seed/${index}/600/300`}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                  <div className="absolute top-3 left-3 px-4 py-2 rounded-full text-white font-bold bg-gradient-to-r from-blue-500 to-purple-600 shadow-md">
                    {item.step}
                  </div>
                </div>
                <div className="p-6">
                  <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Hear from our Reunix community members</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-slide whitespace-nowrap">
            {testimonials.concat(testimonials).map((t, i) => (
              <div
                key={i}
                className="inline-block min-w-[220px] max-w-[260px] bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg flex-shrink-0 cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedStory(t)}
              >
                <div className="flex items-center mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-3" />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{t.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{t.role}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">{t.year}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-2 line-clamp-3">"{t.content}"</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-11/12 max-w-2xl p-6 relative shadow-2xl animate-fadeInUp">
            <button
              aria-label="Close Modal"
              className="absolute top-4 right-4 text-gray-800 dark:text-gray-200 text-2xl font-bold"
              onClick={() => setSelectedStory(null)}
            >
              &times;
            </button>
            <div className="flex flex-col md:flex-row gap-4">
              <img
                src={selectedStory.avatar}
                alt={selectedStory.name}
                className="w-28 h-28 rounded-full object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{selectedStory.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{selectedStory.role}</p>
                <p className="text-xs text-blue-600 dark:text-blue-400 mb-4">{selectedStory.year}</p>
                <p className="text-gray-700 dark:text-gray-200 italic">{selectedStory.content}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-black text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 dark:text-blue-200">
            Join thousands of alumni and students building meaningful connections
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-white text-blue-600 dark:text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition-all transform hover:scale-105 inline-flex items-center justify-center">
              I am a Student <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/register" className="bg-white text-purple-600 dark:text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900 transition-all transform hover:scale-105 inline-flex items-center justify-center">
              I am an Alumni <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide var(--slide-duration, 20s) linear infinite;
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </div>
  );
}
