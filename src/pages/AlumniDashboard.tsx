import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Users, Calendar, Briefcase, Award, MessageSquare, Clock, Target, Sun, Moon, X 
} from 'lucide-react';

export default function AlumniDashboard() {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [counters, setCounters] = useState({
    mentorshipSessions: 0,
    eventsHosted: 0,
    studentsHelped: 0,
    points: 0
  });

  const [scale, setScale] = useState({
    mentorshipSessions: 1,
    eventsHosted: 1,
    studentsHelped: 1,
    points: 1
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<any>(null);

  const avatars = [
    '/avatars/ananya.png',
    '/avatars/rohan.png',
    '/avatars/siddharth.png',
    '/avatars/priya.png'
  ];

  const [userAvatar, setUserAvatar] = useState(
    user?.avatar || avatars[Math.floor(Math.random() * avatars.length)]
  );

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // Counters animation with scale effect
  useEffect(() => {
    const targetCounters = {
      mentorshipSessions: user?.stats?.mentorshipSessions || 0,
      eventsHosted: user?.stats?.eventsHosted || 0,
      studentsHelped: 45,
      points: user?.stats?.points || 0
    };

    const interval = setInterval(() => {
      setCounters(prev => {
        let updated = { ...prev };
        let finished = true;
        for (let key in targetCounters) {
          if (prev[key] < targetCounters[key]) {
            updated[key] = Math.min(prev[key] + Math.ceil(targetCounters[key]/50), targetCounters[key]);
            finished = false;

            // Trigger scale animation
            setScale(prevScale => ({ ...prevScale, [key]: 1.2 }));
            setTimeout(() => {
              setScale(prevScale => ({ ...prevScale, [key]: 1 }));
            }, 150);
          }
        }
        if (finished) clearInterval(interval);
        return updated;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [user]);

  const stats = [
    { key: 'mentorshipSessions', label: 'Mentorship Sessions', value: counters.mentorshipSessions, icon: Users, tooltip: 'Number of sessions you conducted', color: 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900' },
    { key: 'eventsHosted', label: 'Events Hosted', value: counters.eventsHosted, icon: Calendar, tooltip: 'Number of events you organized', color: 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900' },
    { key: 'studentsHelped', label: 'Students Helped', value: counters.studentsHelped, icon: Target, tooltip: 'Students you guided', color: 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900' },
    { key: 'points', label: 'Community Points', value: counters.points, icon: Award, tooltip: 'Points earned for contribution', color: 'text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900' }
  ];

  const recentActivities = [
    { type: 'mentorship', title: 'Mentored Ananya Sharma on React development', time: '2 hours ago', icon: Users, description: 'Guided Ananya through React concepts and project structure.' },
    { type: 'event', title: 'Hosted "Career in Tech" webinar', time: '1 day ago', icon: Calendar, description: 'Organized an interactive webinar for students on tech careers.' },
    { type: 'job', title: 'Posted Software Engineer position at TechCorp', time: '3 days ago', icon: Briefcase, description: 'Shared an opening for software engineers with the community.' },
    { type: 'community', title: 'Shared blog post about career transitions', time: '1 week ago', icon: MessageSquare, description: 'Published insights about switching careers in tech.' }
  ];

  const upcomingEvents = [
    { title: 'Mock Interview Session', date: 'Tomorrow, 3:00 PM', participants: 5, description: 'Practice mock interviews for job prep.', icon: Users },
    { title: 'React Workshop', date: 'Dec 28, 2:00 PM', participants: 12, description: 'Hands-on React learning session.', icon: Calendar },
    { title: 'Career Guidance Session', date: 'Jan 2, 4:00 PM', participants: 8, description: 'Tips on career planning and growth.', icon: Calendar }
  ];

  const activityColors = {
    mentorship: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
    event: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
    job: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
    community: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400'
  };

  const filteredActivities = recentActivities.filter(a => activeTab === 'all' || a.type === activeTab);

  const openModal = (content: any) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={userAvatar} 
              alt={`${user?.name || 'Rohan Verma'} avatar`} 
              className="w-10 h-10 rounded-full ring-2 ring-blue-500 mr-3" 
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">Welcome back, {user?.name || 'Rohan Verma'}!</h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm">AlumniConnect Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-400 rounded hover:bg-blue-700 transition">Schedule Mentorship</button>
            <button className="px-3 py-2 bg-green-600 text-white dark:bg-green-500 dark:hover:bg-green-400 rounded hover:bg-green-700 transition">Create Event</button>
            <button className="px-3 py-2 bg-purple-600 text-white dark:bg-purple-500 dark:hover:bg-purple-400 rounded hover:bg-purple-700 transition">Share Resource</button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {darkMode ? <Sun className="w-5 h-5 mr-1" /> : <Moon className="w-5 h-5 mr-1" />}
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow relative group">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{stat.label}</p>
                    <p 
                      className="text-3xl font-bold text-gray-900 dark:text-gray-100 transition-transform duration-150"
                      style={{ transform: `scale(${scale[stat.key]})` }}
                    >
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs bg-gray-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.tooltip}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Recent Activities</h2>
              <div className="flex space-x-4 mb-4 text-sm">
                {['all','mentorship','event','job','community'].map(tab => (
                  <button
                    key={tab}
                    className={`px-3 py-1 rounded font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white dark:from-blue-500 dark:to-blue-400 dark:text-white shadow-md'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-900 dark:hover:to-blue-800'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {filteredActivities.length ? filteredActivities.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer`}
                      onClick={() => openModal(activity)}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${activityColors[activity.type]}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-900 dark:text-gray-100 font-medium">{activity.title}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-300 flex items-center mt-1">
                          <Clock className="h-4 w-4 mr-1" /> {activity.time}
                        </p>
                      </div>
                    </div>
                  );
                }) : <p className="text-gray-500 dark:text-gray-300 text-sm">No activities in this category.</p>}
              </div>
            </div>
          </div>

          {/* Upcoming Events & Achievements */}
          <div>
            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 mb-6 transition-transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-blue-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.length ? upcomingEvents.map((event, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900 dark:hover:to-blue-800 cursor-pointer"
                    onClick={() => openModal(event)}
                  >
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{event.date}</p>
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                      <Users className="h-4 w-4 mr-1" /> {event.participants} participants
                    </div>
                  </div>
                )) : <p className="text-gray-500 dark:text-gray-300 text-sm">No upcoming events.</p>}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-yellow-900">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Your Achievements</h2>
              <div className="space-y-3">
                {(user?.stats?.badges?.length ? user.stats.badges : []).map((badge, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg transition-colors hover:bg-yellow-100 dark:hover:bg-yellow-800 cursor-pointer"
                    onClick={() => openModal({title: badge, type:'badge', icon: Award})}
                  >
                    <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{badge}</span>
                  </div>
                ))}
                {!user?.stats?.badges?.length && <p className="text-gray-500 dark:text-gray-300 text-sm">No achievements yet.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-11/12 max-w-md relative shadow-lg transition-all duration-300">
            <button 
              onClick={closeModal} 
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon + Badge */}
            {modalContent?.title && (
              <div className="flex items-center space-x-2 mb-2">
                {modalContent.icon ? <modalContent.icon className="w-6 h-6 text-gray-600 dark:text-gray-300" /> : null}
                {modalContent.type && modalContent.type !== 'badge' && (
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    modalContent.type === 'mentorship' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' :
                    modalContent.type === 'event' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                    modalContent.type === 'job' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' :
                    modalContent.type === 'community' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400' :
                    'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                  }`}>
                    {modalContent.type?.charAt(0).toUpperCase() + modalContent.type?.slice(1)}
                  </span>
                )}
              </div>
            )}

            {modalContent?.title && <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{modalContent.title}</h3>}
            {modalContent?.description && <p className="text-gray-700 dark:text-gray-300">{modalContent.description}</p>}
            {modalContent?.time && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2"><Clock className="inline mr-1" /> {modalContent.time}</p>}
            {modalContent?.participants && <p className="text-sm text-blue-600 dark:text-blue-400 mt-1"><Users className="inline mr-1" /> {modalContent.participants} participants</p>}
          </div>
        </div>
      )}
    </div>
  );
}
