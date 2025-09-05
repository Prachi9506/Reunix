import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, Trophy, Calendar, Briefcase, MessageSquare, Shield,
  ArrowRight, Star
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
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson', role: 'Software Engineer, Google', year: '2019 Graduate',
      content: 'The mentorship I received through Reunix was invaluable. It helped me land my dream job and continues to guide my career growth.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Michael Chen', role: 'Product Manager, Microsoft', year: '2017 Graduate',
      content: 'Being able to give back to juniors while expanding my own network has been incredibly rewarding. Reunix makes mentoring seamless.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Emily Davis', role: 'Current Student, CS', year: 'Class of 2025',
      content: 'The career guidance and real industry insights from alumni on Reunix have been game-changing for my internship applications.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect. <span className="text-blue-300 dark:text-blue-400">Mentor.</span> <span className="text-purple-300 dark:text-purple-400">Grow.</span>
            </h1>
            <p className="text-xl text-blue-100 dark:text-blue-200 mb-6">
              Empowering <span className="font-semibold">{counters.students}+ students</span> with mentorship from <span className="font-semibold">{counters.alumni}+ alumni</span> worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
              <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2" alt="Alumni networking" className="rounded-lg w-full h-64 object-cover mb-6"/>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{counters.alumni}+</div>
                  <div className="text-blue-200 dark:text-blue-400 text-sm">Active Alumni</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{counters.students}+</div>
                  <div className="text-blue-200 dark:text-blue-400 text-sm">Students Connected</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Why Choose Reunix?</h2>
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                  <IconComponent className="h-6 w-6"/>
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
          <p className="text-xl text-gray-600 dark:text-gray-300">Our phased plan to empower students and alumni</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-8">
          {roadmap.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg flex-1 overflow-hidden">
              <img src={`https://picsum.photos/seed/${index}/600/300`} alt={item.title} className="w-full h-40 object-cover"/>
              <div className="p-6">
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center text-white font-bold mb-4`}>{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section - Auto Sliding */}
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
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover mr-3"/>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{t.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{t.role}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">{t.year}</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-2 truncate">"{t.content}"</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current"/> )} 
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
              I am a Student <ArrowRight className="ml-2 h-5 w-5"/>
            </Link>
            <Link to="/register" className="bg-white text-purple-600 dark:text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 dark:hover:bg-purple-900 transition-all transform hover:scale-105 inline-flex items-center justify-center">
              I am an Alumni <ArrowRight className="ml-2 h-5 w-5"/>
            </Link>
          </div>
        </div>
      </section>

      {/* Tailwind CSS Animations */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
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
