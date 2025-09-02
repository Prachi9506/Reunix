import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  Award, 
  TrendingUp, 
  MessageSquare,
  Star,
  Clock,
  Target,
  BookOpen
} from 'lucide-react';

export default function AlumniDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Mentorship Sessions', value: user?.stats?.mentorshipSessions || 0, icon: Users, color: 'text-blue-600 bg-blue-100' },
    { label: 'Events Hosted', value: user?.stats?.eventsHosted || 0, icon: Calendar, color: 'text-green-600 bg-green-100' },
    { label: 'Students Helped', value: 45, icon: Target, color: 'text-purple-600 bg-purple-100' },
    { label: 'Community Points', value: user?.stats?.points || 0, icon: Award, color: 'text-orange-600 bg-orange-100' }
  ];

  const recentActivities = [
    { type: 'mentorship', title: 'Mentored Sarah Johnson on React development', time: '2 hours ago', icon: Users },
    { type: 'event', title: 'Hosted "Career in Tech" webinar', time: '1 day ago', icon: Calendar },
    { type: 'job', title: 'Posted Software Engineer position at TechCorp', time: '3 days ago', icon: Briefcase },
    { type: 'community', title: 'Shared blog post about career transitions', time: '1 week ago', icon: MessageSquare }
  ];

  const upcomingEvents = [
    { title: 'Mock Interview Session', date: 'Tomorrow, 3:00 PM', participants: 5 },
    { title: 'React Workshop', date: 'Dec 28, 2:00 PM', participants: 12 },
    { title: 'Career Guidance Session', date: 'Jan 2, 4:00 PM', participants: 8 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600">Here's your impact on the AlumniConnect community</p>
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
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-500 flex items-center mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <h3 className="font-medium text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                    <div className="flex items-center text-sm text-blue-600">
                      <Users className="h-4 w-4 mr-1" />
                      {event.participants} participants
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Achievements</h2>
              <div className="space-y-3">
                {user?.stats?.badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-medium text-gray-900">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}