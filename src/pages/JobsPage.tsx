import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Briefcase, 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign,
  Building,
  Users,
  BookmarkPlus,
  ExternalLink,
  Star,
  Calendar
} from 'lucide-react';

export default function JobsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹8-12 LPA',
      postedBy: 'John Smith',
      postedDate: '2 days ago',
      description: 'We are looking for a skilled Frontend Developer to join our dynamic team...',
      requirements: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
      benefits: ['Health Insurance', 'Flexible Hours', 'Remote Work', 'Learning Budget'],
      applicants: 23,
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      id: 2,
      title: 'Data Scientist Intern',
      company: 'DataFlow Analytics',
      location: 'Mumbai, India',
      type: 'Internship',
      experience: '0-1 years',
      salary: '₹25,000/month',
      postedBy: 'Maria Garcia',
      postedDate: '1 week ago',
      description: 'Join our data science team to work on cutting-edge ML projects...',
      requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      benefits: ['Mentorship', 'Certificate', 'Flexible Schedule', 'Learning Resources'],
      applicants: 67,
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      id: 3,
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹15-20 LPA',
      postedBy: 'David Wilson',
      postedDate: '3 days ago',
      description: 'Lead product strategy and development for our growing SaaS platform...',
      requirements: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
      benefits: ['Equity', 'Remote Work', 'Health Insurance', 'Professional Development'],
      applicants: 15,
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

  const myApplications = [
    {
      title: 'Software Engineer',
      company: 'Google',
      appliedDate: 'December 20, 2024',
      status: 'Under Review',
      stage: 'Technical Interview'
    },
    {
      title: 'Frontend Developer',
      company: 'Microsoft',
      appliedDate: 'December 15, 2024',
      status: 'Shortlisted',
      stage: 'HR Round'
    }
  ];

  const savedJobs = [
    {
      title: 'Backend Developer',
      company: 'Amazon',
      location: 'Hyderabad',
      type: 'Full-time',
      savedDate: '1 day ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Shortlisted': return 'bg-green-100 text-green-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || job.type.toLowerCase() === selectedFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Job Opportunities</h1>
            <p className="text-gray-600">Discover career opportunities shared by our alumni network</p>
          </div>
          {user?.role === 'alumni' && (
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <Briefcase className="h-5 w-5" />
              <span>Post Job</span>
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('browse')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'browse'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Browse Jobs
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'applications'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Applications
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'saved'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Saved Jobs
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'browse' && (
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
                      placeholder="Search by title, company, or skills..."
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Types</option>
                    <option value="full-time">Full-time</option>
                    <option value="internship">Internship</option>
                    <option value="part-time">Part-time</option>
                  </select>
                </div>

                {/* Jobs List */}
                <div className="space-y-6">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-colors">
                      <div className="flex items-start space-x-4">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                              <p className="text-gray-600 mb-2">{job.company}</p>
                            </div>
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                <BookmarkPlus className="h-5 w-5" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                                <ExternalLink className="h-5 w-5" />
                              </button>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.experience}
                            </div>
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 mr-1" />
                              {job.salary}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {job.applicants} applicants
                            </div>
                          </div>

                          <p className="text-gray-700 mb-4">{job.description}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.requirements.map((req, index) => (
                              <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                                {req}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-sm text-gray-500">
                              Posted by {job.postedBy} • {job.postedDate}
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div>
                <div className="space-y-6">
                  {myApplications.map((application, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{application.title}</h3>
                          <p className="text-gray-600 mb-2">{application.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              Applied: {application.appliedDate}
                            </div>
                            <div>Current Stage: {application.stage}</div>
                          </div>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                          {application.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div>
                <div className="space-y-6">
                  {savedJobs.map((job, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
                          <p className="text-gray-600 mb-2">{job.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div>{job.type}</div>
                            <div>Saved: {job.savedDate}</div>
                          </div>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                          Apply
                        </button>
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