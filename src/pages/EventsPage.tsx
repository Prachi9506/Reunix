import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Plus,
  Search,
  Filter,
  Video,
  Award,
  Code,
  Briefcase,
  BookOpen
} from 'lucide-react';

export default function EventsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');

  const events = [
    {
      id: 1,
      title: 'React Workshop: Building Modern UIs',
      description: 'Learn advanced React patterns and best practices from industry experts.',
      date: 'December 28, 2024',
      time: '2:00 PM - 4:00 PM',
      location: 'Virtual',
      host: 'John Smith',
      hostAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      participants: 45,
      maxParticipants: 50,
      type: 'Workshop',
      category: 'Technical',
      status: 'upcoming',
      tags: ['React', 'Frontend', 'JavaScript']
    },
    {
      id: 2,
      title: 'Career Guidance: Breaking into FAANG',
      description: 'Tips and strategies for landing jobs at top tech companies.',
      date: 'January 2, 2025',
      time: '4:00 PM - 5:30 PM',
      location: 'Virtual',
      host: 'Maria Garcia',
      hostAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      participants: 32,
      maxParticipants: 40,
      type: 'Career Talk',
      category: 'Career',
      status: 'upcoming',
      tags: ['Career', 'Interview', 'FAANG']
    },
    {
      id: 3,
      title: 'Hackathon 2025: Innovation Challenge',
      description: '48-hour hackathon focused on solving real-world problems with technology.',
      date: 'January 5-7, 2025',
      time: 'All Day',
      location: 'Campus + Virtual',
      host: 'Alumni Committee',
      hostAvatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      participants: 120,
      maxParticipants: 150,
      type: 'Competition',
      category: 'Technical',
      status: 'upcoming',
      tags: ['Hackathon', 'Innovation', 'Competition']
    }
  ];

  const myEvents = [
    {
      title: 'Mock Interview Session',
      date: 'December 25, 2024',
      time: '3:00 PM',
      status: 'attended',
      feedback: 'Great session! Improved my confidence significantly.'
    },
    {
      title: 'Python Fundamentals Workshop',
      date: 'December 20, 2024',
      time: '2:00 PM',
      status: 'attended',
      feedback: 'Excellent introduction to Python programming.'
    }
  ];

  const getEventIcon = (category: string) => {
    switch (category) {
      case 'Technical': return <Code className="h-5 w-5" />;
      case 'Career': return <Briefcase className="h-5 w-5" />;
      case 'Workshop': return <BookOpen className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Events & Workshops</h1>
            <p className="text-gray-600">Discover learning opportunities and networking events</p>
          </div>
          {user?.role === 'alumni' && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Host Event</span>
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'upcoming'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('my-events')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'my-events'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Events
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'upcoming' && (
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
                      placeholder="Search events..."
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Filter className="h-5 w-5 text-gray-400" />
                    <span>Filter by Category</span>
                  </button>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {events.filter(event => event.status === 'upcoming').map((event) => (
                    <div key={event.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                            {getEventIcon(event.category)}
                          </div>
                          <div>
                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                              {event.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{event.description}</p>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="h-4 w-4 mr-2" />
                          {event.participants}/{event.maxParticipants} participants
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <img
                            src={event.hostAvatar}
                            alt={event.host}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-600">by {event.host}</span>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Register
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'my-events' && (
              <div>
                <div className="space-y-6">
                  {myEvents.map((event, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {event.time}
                            </div>
                          </div>
                          {event.feedback && (
                            <p className="text-sm text-gray-700 mt-2 italic">"{event.feedback}"</p>
                          )}
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}