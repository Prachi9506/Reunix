import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  MessageSquare,
  Star,
  Clock,
  Target,
  Award,
  ArrowRight
} from 'lucide-react';

export default function StudentDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Mentorship Sessions', value: user?.stats?.mentorshipSessions || 0, icon: Users, color: 'text-blue-600 bg-blue-100' },
    { label: 'Events Attended', value: 8, icon: Calendar, color: 'text-green-600 bg-green-100' },
    { label: 'Applications Sent', value: 15, icon: Briefcase, color: 'text-purple-600 bg-purple-100' },
    { label: 'Skills Learned', value: 12, icon: BookOpen, color: 'text-orange-600 bg-orange-100' }
  ];

  const recommendedMentors = [
    {
      name: 'Prachi Sharma',
      role: 'Senior Software Engineer at Google',
      skills: ['React', 'Node.js', 'System Design'],
      rating: 4.9,
      sessions: 25,
      avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQEoTUWRrQ324w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731154787061?e=2147483647&v=beta&t=3cQLjElF69WpBb0c3TsQxqT63uVuDN1IIP2rLlcl1e4'
    },
    {
      name: 'Payal Goswami',
      role: 'Product Manager at Microsoft',
      skills: ['Product Strategy', 'Data Analysis', 'Leadership'],
      rating: 4.8,
      sessions: 18,
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQHUGYkLjlQSgQ/profile-displayphoto-scale_200_200/B56Zfuuv87HUAc-/0/1752056923840?e=2147483647&v=beta&t=sZ7fYsF4WubAODdgK2VY54ERkChe1bGKgyHXdHDBjXA'
    }
  ];

  const upcomingEvents = [
    { title: 'React Workshop by Alumni', date: 'Tomorrow, 3:00 PM', type: 'Workshop' },
    { title: 'Mock Interview Session', date: 'Dec 28, 2:00 PM', type: 'Career' },
    { title: 'Hackathon 2025', date: 'Jan 5-7, 2025', type: 'Competition' }
  ];

  const jobOpportunities = [
    { title: 'Frontend Developer Intern', company: 'TechCorp', location: 'Remote', type: 'Internship' },
    { title: 'Software Engineer', company: 'StartupXYZ', location: 'Bangalore', type: 'Full-time' },
    { title: 'Data Analyst', company: 'DataCorp', location: 'Mumbai', type: 'Full-time' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome, {user?.name}!
          </h1>
          <p className="text-gray-600">Your learning and career journey starts here</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Recommended Mentors */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recommended Mentors</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recommendedMentors.map((mentor, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-start space-x-4">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{mentor.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{mentor.role}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {mentor.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" />
                              {mentor.rating}
                            </div>
                            <div>{mentor.sessions} sessions</div>
                          </div>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Connect
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Opportunities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Latest Job Opportunities</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All Jobs
                </button>
              </div>
              <div className="space-y-4">
                {jobOpportunities.map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{job.title}</h3>
                        <p className="text-sm text-gray-600">{job.company} • {job.location}</p>
                        <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          {job.type}
                        </span>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                    <p className="text-sm text-gray-600">{event.date}</p>
                    <p className="text-xs text-blue-600 mt-1">{event.type}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-sm font-medium">Find a Mentor</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm font-medium">Join Event</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 text-left border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-purple-600 mr-3" />
                    <span className="text-sm font-medium">Browse Jobs</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}