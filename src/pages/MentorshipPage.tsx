import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Calendar,
  MessageSquare,
  Video,
  Phone,
  ArrowRight,
  Award,
  BookOpen
} from 'lucide-react';

export default function MentorshipPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('find-mentors');
  const [searchQuery, setSearchQuery] = useState('');

  const mentors = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Senior Software Engineer at Google',
      skills: ['React', 'Node.js', 'System Design', 'Leadership'],
      rating: 4.9,
      sessions: 45,
      experience: '8 years',
      graduationYear: 2015,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Passionate about helping students transition into tech careers. Specialized in full-stack development and system architecture.',
      availability: 'Weekends'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Product Manager at Microsoft',
      skills: ['Product Strategy', 'Data Analysis', 'Leadership', 'UX Design'],
      rating: 4.8,
      sessions: 32,
      experience: '6 years',
      graduationYear: 2017,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Former engineer turned product manager. Love helping students understand the product development lifecycle.',
      availability: 'Evenings'
    },
    {
      id: 3,
      name: 'David Wilson',
      role: 'Data Scientist at Netflix',
      skills: ['Python', 'Machine Learning', 'Statistics', 'SQL'],
      rating: 4.7,
      sessions: 28,
      experience: '5 years',
      graduationYear: 2018,
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      bio: 'Data science enthusiast with experience in recommendation systems and ML at scale.',
      availability: 'Flexible'
    }
  ];

  const myMentorships = [
    {
      mentor: 'Sarah Johnson',
      topic: 'React Development',
      nextSession: 'Tomorrow, 3:00 PM',
      status: 'active',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      mentor: 'Michael Chen',
      topic: 'Career Guidance',
      nextSession: 'Dec 28, 2:00 PM',
      status: 'scheduled',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
    mentor.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentorship Hub</h1>
          <p className="text-gray-600">Connect with experienced alumni for guidance and career support</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('find-mentors')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'find-mentors'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Find Mentors
              </button>
              <button
                onClick={() => setActiveTab('my-mentorships')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'my-mentorships'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Mentorships
              </button>
              {user?.role === 'alumni' && (
                <button
                  onClick={() => setActiveTab('mentor-requests')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'mentor-requests'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Mentor Requests
                </button>
              )}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'find-mentors' && (
              <div>
                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search by name, skills, or company..."
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="h-5 w-5 text-gray-400" />
                    <span>Filters</span>
                  </button>
                </div>

                {/* Mentors Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredMentors.map((mentor) => (
                    <div key={mentor.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                      <div className="flex items-start space-x-4">
                        <img
                          src={mentor.avatar}
                          alt={mentor.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{mentor.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{mentor.role}</p>
                          <p className="text-sm text-gray-700 mb-3">{mentor.bio}</p>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {mentor.skills.slice(0, 3).map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                            {mentor.skills.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                +{mentor.skills.length - 3} more
                              </span>
                            )}
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                                {mentor.rating}
                              </div>
                              <div>{mentor.sessions} sessions</div>
                              <div>{mentor.experience} exp</div>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              Request Mentorship
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                              <MessageSquare className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'my-mentorships' && (
              <div>
                <div className="space-y-6">
                  {myMentorships.map((mentorship, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={mentorship.avatar}
                          alt={mentorship.mentor}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{mentorship.mentor}</h3>
                          <p className="text-sm text-gray-600">{mentorship.topic}</p>
                          <p className="text-sm text-blue-600 mt-1">Next: {mentorship.nextSession}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Video className="h-5 w-5" />
                          </button>
                          <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Phone className="h-5 w-5" />
                          </button>
                          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                            <MessageSquare className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'mentor-requests' && user?.role === 'alumni' && (
              <div>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Pending Requests</h3>
                  <p className="text-gray-600">You'll see mentorship requests from students here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}