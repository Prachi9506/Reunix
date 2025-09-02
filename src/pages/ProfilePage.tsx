import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNotification } from '../contexts/NotificationContext';
import { 
  User, 
  Mail, 
  Building, 
  Calendar, 
  MapPin, 
  Link as LinkIcon, 
  Github, 
  Linkedin,
  Edit3,
  Save,
  X,
  Plus,
  Award,
  BookOpen
} from 'lucide-react';

export default function ProfilePage() {
  const { user, updateProfile } = useAuth();
  const { addNotification } = useNotification();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || '',
    bio: user?.profile?.bio || '',
    company: user?.profile?.company || '',
    designation: user?.profile?.designation || '',
    linkedinUrl: user?.profile?.linkedinUrl || '',
    githubUrl: user?.profile?.githubUrl || '',
    skills: user?.profile?.skills || []
  });
  const [newSkill, setNewSkill] = useState('');

  const handleSave = () => {
    updateProfile({
      name: editData.name,
      profile: {
        ...user?.profile,
        bio: editData.bio,
        company: editData.company,
        designation: editData.designation,
        linkedinUrl: editData.linkedinUrl,
        githubUrl: editData.githubUrl,
        skills: editData.skills
      }
    });
    
    addNotification({
      type: 'success',
      title: 'Profile Updated',
      message: 'Your profile has been successfully updated.'
    });
    
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      name: user?.name || '',
      bio: user?.profile?.bio || '',
      company: user?.profile?.company || '',
      designation: user?.profile?.designation || '',
      linkedinUrl: user?.profile?.linkedinUrl || '',
      githubUrl: user?.profile?.githubUrl || '',
      skills: user?.profile?.skills || []
    });
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !editData.skills.includes(newSkill.trim())) {
      setEditData({
        ...editData,
        skills: [...editData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setEditData({
      ...editData,
      skills: editData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
          <div className="relative px-6 pb-6">
            <div className="flex items-end space-x-6 -mt-16">
              <img
                src={user?.profile?.avatar || `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`}
                alt={user?.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
                    <p className="text-gray-600 capitalize">{user?.role}</p>
                    {user?.profile?.company && (
                      <p className="text-sm text-gray-500 mt-1">
                        {user.profile.designation} at {user.profile.company}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                  >
                    <Edit3 className="h-4 w-4" />
                    <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({...editData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      value={editData.bio}
                      onChange={(e) => setEditData({...editData, bio: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  {user?.role === 'alumni' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <input
                          type="text"
                          value={editData.company}
                          onChange={(e) => setEditData({...editData, company: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Designation</label>
                        <input
                          type="text"
                          value={editData.designation}
                          onChange={(e) => setEditData({...editData, designation: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </>
                  )}
                  <div className="flex space-x-4">
                    <button
                      onClick={handleSave}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-900">{user?.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-900">{user?.email}</span>
                  </div>
                  {user?.profile?.company && (
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-900">{user.profile.designation} at {user.profile.company}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-900">Class of {user?.profile?.graduationYear}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-900">{user?.profile?.branch}</span>
                  </div>
                  {user?.profile?.bio && (
                    <div className="mt-4">
                      <p className="text-gray-700">{user.profile.bio}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills & Expertise</h2>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                      placeholder="Add a skill..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={addSkill}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {editData.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {user?.profile?.skills?.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {(!user?.profile?.skills || user.profile.skills.length === 0) && (
                    <p className="text-gray-500 italic">No skills added yet</p>
                  )}
                </div>
              )}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Social Links</h2>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <Linkedin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        value={editData.linkedinUrl}
                        onChange={(e) => setEditData({...editData, linkedinUrl: e.target.value})}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <Github className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        value={editData.githubUrl}
                        onChange={(e) => setEditData({...editData, githubUrl: e.target.value})}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {user?.profile?.linkedinUrl && (
                    <a
                      href={user.profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                  {user?.profile?.githubUrl && (
                    <a
                      href={user.profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span>GitHub Profile</span>
                    </a>
                  )}
                  {(!user?.profile?.linkedinUrl && !user?.profile?.githubUrl) && (
                    <p className="text-gray-500 italic">No social links added yet</p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Academic Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Academic Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Graduation Year</p>
                  <p className="text-gray-900">{user?.profile?.graduationYear}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Branch</p>
                  <p className="text-gray-900">{user?.profile?.branch}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Role</p>
                  <p className="text-gray-900 capitalize">{user?.role}</p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Achievements</h2>
              <div className="space-y-3">
                {user?.stats?.badges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm font-medium text-gray-900">{badge}</span>
                  </div>
                ))}
                {(!user?.stats?.badges || user.stats.badges.length === 0) && (
                  <p className="text-gray-500 italic">No achievements yet</p>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Impact</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Mentorship Sessions</span>
                  <span className="font-semibold text-gray-900">{user?.stats?.mentorshipSessions || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Events Hosted</span>
                  <span className="font-semibold text-gray-900">{user?.stats?.eventsHosted || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Community Points</span>
                  <span className="font-semibold text-gray-900">{user?.stats?.points || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save/Cancel Buttons for Mobile */}
        {isEditing && (
          <div className="fixed bottom-4 right-4 flex space-x-2 md:hidden">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors"
            >
              <Save className="h-5 w-5" />
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-full shadow-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}