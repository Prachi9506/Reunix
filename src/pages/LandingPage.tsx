import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Trophy, 
  Calendar, 
  Briefcase, 
  MessageSquare, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Users,
      title: 'AI-Powered Mentorship',
      description: 'Smart matching between alumni mentors and students based on skills, interests, and career goals.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Calendar,
      title: 'Events & Networking',
      description: 'Host and participate in mentorship sessions, hackathons, workshops, and career fairs.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Briefcase,
      title: 'Career Support',
      description: 'Access job opportunities, company insights, resume reviews, and interview preparation.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: MessageSquare,
      title: 'Community Engagement',
      description: 'Share experiences, blogs, success stories, and connect with fellow alumni and students.',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: Trophy,
      title: 'Gamification & Recognition',
      description: 'Earn badges, climb leaderboards, and get recognized for your contributions to the community.',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Shield,
      title: 'Secure & Verified',
      description: 'Verified profiles, secure data handling, and controlled access to protect user information.',
      color: 'text-teal-600 bg-teal-100'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Active Alumni' },
    { number: '25,000+', label: 'Students Connected' },
    { number: '500+', label: 'Mentorship Sessions' },
    { number: '95%', label: 'Placement Rate' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer, Google',
      year: '2019 Graduate',
      content: 'The mentorship I received through AlumniConnect was invaluable. It helped me land my dream job and continues to guide my career growth.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, Microsoft',
      year: '2017 Graduate',
      content: 'Being able to give back to juniors while expanding my own network has been incredibly rewarding. The platform makes mentoring seamless.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Emily Davis',
      role: 'Current Student, CS',
      year: 'Class of 2025',
      content: 'The career guidance and real industry insights from alumni have been game-changing for my internship applications.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInUp">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Connect. <span className="text-blue-300">Mentor.</span> <span className="text-purple-300">Grow.</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                The ultimate platform for alumni-student engagement. Foster meaningful connections, 
                accelerate career growth, and build a thriving educational community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/register"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
                >
                  Sign In
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2"
                  alt="Alumni networking"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-blue-200 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Platform Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create meaningful connections and accelerate career growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Create Your Profile</h3>
              <p className="text-gray-600">Sign up with your college credentials and build a comprehensive profile</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Get Matched</h3>
              <p className="text-gray-600">Our AI connects you with relevant mentors, events, and opportunities</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Growing</h3>
              <p className="text-gray-600">Engage in mentorship, attend events, and accelerate your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our community members</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600">{testimonial.year}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of alumni and students who are already building meaningful connections
          </p>
          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 inline-flex items-center"
          >
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}