import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, 
  Calendar, 
  Briefcase, 
  TrendingUp, 
  Activity,
  UserCheck,
  Star,
  Clock,
  Sun,
  Moon
} from 'lucide-react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

// ----------------- Types -----------------
type StatType = {
  label: string;
  value: string;
  icon: any;
  bgColor: string;
  change: string;
};

type DepartmentType = {
  name: string;
  alumni: number;
  students: number;
  placement: number;
};

type ActivityType = {
  type: string;
  title: string;
  time: string;
};

type MentorType = {
  name: string;
  sessions: number;
  rating: number;
  department: string;
};

// ----------------- Components -----------------
const StatCard: React.FC<StatType> = ({ label, value, change, icon: Icon, bgColor }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-transform duration-200 hover:scale-105">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
        <p className={`text-sm font-medium ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
          {change} from last month
        </p>
      </div>
      <div className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center`}>
        <Icon className="h-6 w-6" />
      </div>
    </div>
  </div>
);

const MentorCard: React.FC<{ mentor: MentorType; index: number }> = ({ mentor, index }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-transform duration-200 hover:scale-105">
    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
      {index + 1}
    </div>
    <div className="flex-1">
      <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">{mentor.name}</p>
      <p className="text-xs text-gray-600 dark:text-gray-400">{mentor.department} • {mentor.sessions} sessions</p>
      <div className="flex items-center mt-1">
        <Star className="h-3 w-3 text-yellow-400 mr-1" />
        <span className="text-xs text-gray-500 dark:text-gray-300">{mentor.rating}</span>
      </div>
    </div>
  </div>
);

const ActivityCard: React.FC<{ activity: ActivityType }> = ({ activity }) => {
  const renderIcon = () => {
    switch (activity.type) {
      case 'registration': return <Users className="h-5 w-5 text-blue-600" />;
      case 'event': return <Calendar className="h-5 w-5 text-purple-600" />;
      case 'mentorship': return <TrendingUp className="h-5 w-5 text-green-600" />;
      case 'job': return <Briefcase className="h-5 w-5 text-orange-600" />;
      default: return <Activity className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
        {renderIcon()}
      </div>
      <div className="flex-1">
        <p className="text-gray-900 dark:text-gray-100 font-medium">{activity.title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-300 flex items-center mt-1">
          <Clock className="h-4 w-4 mr-1" />
          {activity.time}
        </p>
      </div>
    </div>
  );
};

// ----------------- Dark Mode Toggle -----------------
const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('dark') === 'true' || window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('dark', dark.toString());
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition"
      title="Toggle Dark Mode"
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

// ----------------- Main Component -----------------
export default function AdminDashboard() {
  const { user } = useAuth();

  const stats: StatType[] = [
    { label: 'Total Alumni', value: '10,247', icon: Users, bgColor: 'bg-blue-100 dark:bg-blue-900', change: '+12%' },
    { label: 'Active Students', value: '25,680', icon: UserCheck, bgColor: 'bg-green-100 dark:bg-green-900', change: '+8%' },
    { label: 'Events This Month', value: '45', icon: Calendar, bgColor: 'bg-purple-100 dark:bg-purple-900', change: '+25%' },
    { label: 'Job Placements', value: '1,234', icon: Briefcase, bgColor: 'bg-orange-100 dark:bg-orange-900', change: '+15%' }
  ];

  const departmentStats: DepartmentType[] = [
    { name: 'Computer Science', alumni: 3245, students: 8920, placement: 95 },
    { name: 'Information Technology', alumni: 2156, students: 6540, placement: 92 },
    { name: 'Electronics', alumni: 1890, students: 4320, placement: 88 },
    { name: 'Mechanical', alumni: 2956, students: 5680, placement: 85 }
  ];

  const recentActivities: ActivityType[] = [
    { type: 'registration', title: 'New alumni registration: Taniya Singh (CS 2024)', time: '2 hours ago' },
    { type: 'event', title: 'AI Workshop organized by Rohit Sharma', time: '4 hours ago' },
    { type: 'mentorship', title: '5 new mentorship sessions scheduled today', time: '6 hours ago' },
    { type: 'job', title: 'Infosys posted 3 new job opportunities', time: '1 day ago' }
  ];

  const topMentors: MentorType[] = [
    { name: 'Taniya Singh', sessions: 45, rating: 4.9, department: 'CS' },
    { name: 'Rohit Sharma', sessions: 38, rating: 4.8, department: 'IT' },
    { name: 'Priya Verma', sessions: 32, rating: 4.7, department: 'ECE' },
    { name: 'Vikram Mehta', sessions: 28, rating: 4.6, department: 'Mechanical' },
    { name: 'Neha Gupta', sessions: 25, rating: 4.5, department: 'CS' }
  ];

  const statsChartData = {
    labels: stats.map(s => s.label),
    datasets: [{
      label: 'Count',
      data: stats.map(s => Number(s.value.replace(/,/g, ''))),
      backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f97316']
    }]
  };

  const deptChartData = {
    labels: departmentStats.map(d => d.name),
    datasets: [{
      label: 'Placement %',
      data: departmentStats.map(d => d.placement),
      backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f97316']
    }]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Admin Dashboard</h1>
          <DarkModeToggle />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
        </div>

        {/* Platform Overview Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Platform Overview</h2>
          <div className="h-64">
            <Bar data={statsChartData} options={{ responsive: true, plugins: { legend: { display: false } }, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Department Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Department Analytics</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Department</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Alumni</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Students</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700 dark:text-gray-300">Placement %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentStats.map((dept, i) => (
                      <tr key={i} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">{dept.name}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{dept.alumni.toLocaleString()}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{dept.students.toLocaleString()}</td>
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                            {dept.placement}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Department Pie Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Department Placements</h2>
              <div className="h-64">
                <Pie data={deptChartData} options={{ responsive: true, plugins: { legend: { position: 'bottom', labels: { color: '#fff' } } }, maintainAspectRatio: false }} />
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Recent Platform Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((act, i) => <ActivityCard key={i} activity={act} />)}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Top Mentors</h2>
              <div className="space-y-4">
                {topMentors.map((mentor, i) => <MentorCard key={i} mentor={mentor} index={i} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
