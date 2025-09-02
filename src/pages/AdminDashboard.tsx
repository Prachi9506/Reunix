import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  TrendingUp, 
  BarChart3, 
  PieChart,
  Activity,
  DollarSign,
  UserCheck,
  Building
} from 'lucide-react';

export default function AdminDashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Total Alumni', value: '10,247', icon: Users, color: 'text-blue-600 bg-blue-100', change: '+12%' },
    { label: 'Active Students', value: '25,680', icon: UserCheck, color: 'text-green-600 bg-green-100', change: '+8%' },
    { label: 'Events This Month', value: '45', icon: Calendar, color: 'text-purple-600 bg-purple-100', change: '+25%' },
    { label: 'Job Placements', value: '1,234', icon: Briefcase, color: 'text-orange-600 bg-orange-100', change: '+15%' }
  ];

  const departmentStats = [
    { name: 'Computer Science', alumni: 3245, students: 8920, placement: 95 },
    { name: 'Information Technology', alumni: 2156, students: 6540, placement: 92 },
    { name: 'Electronics', alumni: 1890, students: 4320, placement: 88 },
    { name: 'Mechanical', alumni: 2956, students: 5680, placement: 85 }
  ];

  const recentActivities = [
    { type: 'registration', title: 'New alumni registration: Sarah Johnson (CS 2023)', time: '2 hours ago' },
    { type: 'event', title: 'Tech Talk event created by Michael Chen', time: '4 hours ago' },
    { type: 'mentorship', title: '15 new mentorship connections made today', time: '6 hours ago' },
    { type: 'job', title: 'Google posted 5 new job opportunities', time: '1 day ago' }
  ];

  const topMentors = [
    { name: 'John Smith', sessions: 45, rating: 4.9, department: 'CS' },
    { name: 'Maria Garcia', sessions: 38, rating: 4.8, department: 'IT' },
    { name: 'David Wilson', sessions: 32, rating: 4.7, department: 'ECE' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Comprehensive overview of platform analytics and management</p>
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
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
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
            {/* Department Analytics */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Department Analytics</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Department</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Alumni</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Students</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Placement %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentStats.map((dept, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{dept.name}</td>
                        <td className="py-3 px-4 text-gray-600">{dept.alumni.toLocaleString()}</td>
                        <td className="py-3 px-4 text-gray-600">{dept.students.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {dept.placement}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Platform Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Activity className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Mentors */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Mentors</h2>
              <div className="space-y-4">
                {topMentors.map((mentor, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 text-sm">{mentor.name}</p>
                      <p className="text-xs text-gray-600">{mentor.department} • {mentor.sessions} sessions</p>
                      <div className="flex items-center mt-1">
                        <Star className="h-3 w-3 text-yellow-400 mr-1" />
                        <span className="text-xs text-gray-500">{mentor.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Platform Health</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Active Users Today</span>
                  <span className="font-semibold text-gray-900">2,456</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">New Registrations</span>
                  <span className="font-semibold text-gray-900">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mentorship Sessions</span>
                  <span className="font-semibold text-gray-900">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Events This Week</span>
                  <span className="font-semibold text-gray-900">12</span>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">System Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Server Status</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Healthy
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">API Response</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    125ms
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}