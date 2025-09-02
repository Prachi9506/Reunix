import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  MessageSquare, 
  Heart, 
  Share2, 
  BookOpen, 
  Video, 
  Mic,
  Plus,
  Search,
  Filter,
  Clock,
  Eye,
  ThumbsUp,
  Award,
  TrendingUp
} from 'lucide-react';

export default function CommunityPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      id: 1,
      author: 'John Smith',
      role: 'Senior Software Engineer at Google',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      timeAgo: '2 hours ago',
      type: 'blog',
      title: 'My Journey from College to Google: Lessons Learned',
      content: 'When I graduated 5 years ago, I never imagined I would be working at Google. Here are the key lessons that helped me get here...',
      likes: 45,
      comments: 12,
      shares: 8,
      tags: ['Career', 'Google', 'Software Engineering']
    },
    {
      id: 2,
      author: 'Maria Garcia',
      role: 'Product Manager at Microsoft',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      timeAgo: '1 day ago',
      type: 'video',
      title: 'Product Management 101: What I Wish I Knew Earlier',
      content: 'A 15-minute video sharing insights about transitioning from engineering to product management...',
      likes: 67,
      comments: 23,
      shares: 15,
      tags: ['Product Management', 'Career Transition', 'Microsoft']
    },
    {
      id: 3,
      author: 'David Wilson',
      role: 'Data Scientist at Netflix',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      timeAgo: '3 days ago',
      type: 'podcast',
      title: 'The Future of AI in Entertainment',
      content: 'Discussing how machine learning is revolutionizing content recommendation and personalization...',
      likes: 89,
      comments: 34,
      shares: 22,
      tags: ['AI', 'Machine Learning', 'Netflix', 'Data Science']
    }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      achievement: 'Landed SDE role at Amazon',
      story: 'With guidance from alumni mentors, I improved my coding skills and aced the technical interviews.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      mentor: 'John Smith'
    },
    {
      name: 'Rahul Patel',
      achievement: 'Started successful startup',
      story: 'Alumni network helped me find co-founders and initial funding for my EdTech startup.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      mentor: 'Maria Garcia'
    }
  ];

  const leaderboard = [
    { name: 'John Smith', points: 2450, badge: 'Top Mentor', avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' },
    { name: 'Maria Garcia', points: 2180, badge: 'Community Leader', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' },
    { name: 'David Wilson', points: 1950, badge: 'Knowledge Sharer', avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2' }
  ];

  const getPostIcon = (type: string) => {
    switch (type) {
      case 'blog': return <BookOpen className="h-5 w-5" />;
      case 'video': return <Video className="h-5 w-5" />;
      case 'podcast': return <Mic className="h-5 w-5" />;
      default: return <MessageSquare className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Hub</h1>
            <p className="text-gray-600">Share knowledge, celebrate success, and inspire others</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Create Post</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('feed')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'feed'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Community Feed
              </button>
              <button
                onClick={() => setActiveTab('success-stories')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'success-stories'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Success Stories
              </button>
              <button
                onClick={() => setActiveTab('leaderboard')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'leaderboard'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Leaderboard
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'feed' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {posts.map((post) => (
                    <div key={post.id} className="bg-white border border-gray-200 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <img
                          src={post.avatar}
                          alt={post.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{post.author}</h3>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{post.timeAgo}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{post.role}</p>
                          
                          <div className="flex items-center space-x-2 mb-3">
                            <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center">
                              {getPostIcon(post.type)}
                            </div>
                            <span className="text-sm font-medium text-gray-700 capitalize">{post.type}</span>
                          </div>

                          <h4 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h4>
                          <p className="text-gray-700 mb-4">{post.content}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-6">
                              <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                                <Heart className="h-5 w-5" />
                                <span className="text-sm">{post.likes}</span>
                              </button>
                              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                                <MessageSquare className="h-5 w-5" />
                                <span className="text-sm">{post.comments}</span>
                              </button>
                              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                                <Share2 className="h-5 w-5" />
                                <span className="text-sm">{post.shares}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Trending Topics</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">#ReactJS</span>
                        <span className="text-xs text-gray-500">245 posts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">#CareerAdvice</span>
                        <span className="text-xs text-gray-500">189 posts</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">#MachineLearning</span>
                        <span className="text-xs text-gray-500">156 posts</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Contributors</h3>
                    <div className="space-y-3">
                      {leaderboard.slice(0, 3).map((contributor, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <img
                            src={contributor.avatar}
                            alt={contributor.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{contributor.name}</p>
                            <p className="text-xs text-gray-500">{contributor.badge}</p>
                          </div>
                          <span className="text-sm font-semibold text-blue-600">{contributor.points}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'success-stories' && (
              <div className="space-y-6">
                {successStories.map((story, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Award className="h-5 w-5 text-yellow-500" />
                          <h3 className="text-lg font-semibold text-gray-900">{story.achievement}</h3>
                        </div>
                        <p className="text-gray-600 mb-3">by {story.name}</p>
                        <p className="text-gray-700 mb-4">"{story.story}"</p>
                        <p className="text-sm text-blue-600">Mentored by: {story.mentor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'leaderboard' && (
              <div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Community Leaderboard</h2>
                  <div className="space-y-4">
                    {leaderboard.map((member, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.badge}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-blue-600">{member.points}</p>
                          <p className="text-xs text-gray-500">points</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}