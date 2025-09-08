import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNotification } from '../contexts/NotificationContext';
import { 
  User, 
  Mail, 
  Building, 
  Calendar, 
  BookOpen,
  Linkedin,
  Github,
  Edit3,
  Save,
  X,
  Plus,
  Award
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
    skills: user?.profile?.skills || [],
    avatar: user?.profile?.avatar || 'https://via.placeholder.com/150'
  });
  const [newSkill, setNewSkill] = useState('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

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
        skills: editData.skills,
        avatar: editData.avatar
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
      skills: user?.profile?.skills || [],
      avatar: user?.profile?.avatar || 'https://via.placeholder.com/150'
    });
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !editData.skills.includes(newSkill.trim())) {
      setEditData({ ...editData, skills: [...editData.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setEditData({ ...editData, skills: editData.skills.filter(skill => skill !== skillToRemove) });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (ev) => setEditData({ ...editData, avatar: ev.target?.result as string });
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden mb-8 transition-colors duration-300">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
          <div className="relative px-6 pb-6">
            <div className="flex items-end space-x-6 -mt-16">
              <div className="relative">
                <img
                  src={editData.avatar}
                  alt={user?.name}
                  className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 object-cover cursor-pointer"
                  onClick={() => setPreviewImage(editData.avatar)}
                />
                {isEditing && (
                  <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 p-1 rounded-full cursor-pointer transition-colors">
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                    <Plus className="h-4 w-4 text-white" />
                  </label>
                )}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{user?.name}</h1>
                    <p className="text-gray-600 dark:text-gray-300 capitalize">{user?.role}</p>
                    {user?.profile?.company && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {user.profile.designation} at {user.profile.company}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                      isEditing
                        ? 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-100'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
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

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Basic Info */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors duration-300">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Basic Information</h2>
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={editData.name}
                      onChange={(e) => setEditData({...editData, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
                    <textarea
                      value={editData.bio}
                      onChange={(e) => setEditData({...editData, bio: e.target.value})}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  {user?.role === 'alumni' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company</label>
                        <input
                          type="text"
                          value={editData.company}
                          onChange={(e) => setEditData({...editData, company: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Designation</label>
                        <input
                          type="text"
                          value={editData.designation}
                          onChange={(e) => setEditData({...editData, designation: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
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
                      className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-100 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 text-gray-900 dark:text-gray-100">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                    <span>{user?.name}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                    <span>{user?.email}</span>
                  </div>
                  {user?.profile?.company && (
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                      <span>{user.profile.designation} at {user.profile.company}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                    <span>Class of {user?.profile?.graduationYear}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                    <span>{user?.profile?.branch}</span>
                  </div>
                  {user?.profile?.bio && (
                    <div className="mt-4">
                      <p>{user.profile.bio}</p>
                    </div>
                  )}
                </div>
              )}
            </div>

              {/* Skills */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors duration-300">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Skills & Expertise</h2>
                {isEditing ? (
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                        placeholder="Add a skill..."
                        className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
                          className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {skill}
                          <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-blue-600 dark:text-blue-200 hover:text-blue-800 dark:hover:text-blue-100"
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
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {(!user?.profile?.skills || user.profile.skills.length === 0) && (
                      <p className="text-gray-500 dark:text-gray-400 italic">No skills added yet</p>
                    )}
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors duration-300">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Social Links</h2>
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">LinkedIn URL</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <Linkedin className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                        </div>
                        <input
                          type="url"
                          value={editData.linkedinUrl}
                          onChange={(e) => setEditData({...editData, linkedinUrl: e.target.value})}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">GitHub URL</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                          <Github className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                        </div>
                        <input
                          type="url"
                          value={editData.githubUrl}
                          onChange={(e) => setEditData({...editData, githubUrl: e.target.value})}
                          className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
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
                        className="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-200 transition-colors"
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
                        className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span>GitHub Profile</span>
                      </a>
                    )}
                    {(!user?.profile?.linkedinUrl && !user?.profile?.githubUrl) && (
                      <p className="text-gray-500 dark:text-gray-400 italic">No social links added yet</p>
                    )}
                  </div>
                )}
              </div>

            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Academic Info */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors duration-300">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Academic Information</h2>
                <div className="space-y-4 text-gray-900 dark:text-gray-100">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Graduation Year</p>
                    <p>{user?.profile?.graduationYear}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Branch</p>
                    <p>{user?.profile?.branch}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Role</p>
                    <p className="capitalize">{user?.role}</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors duration-300">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Achievements</h2>
                <div className="space-y-3 text-gray-900 dark:text-gray-100">
                  {user?.stats?.badges?.map((badge, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                      <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                      <span className="text-sm font-medium">{badge}</span>
                    </div>
                  ))}
                  {(!user?.stats?.badges || user.stats.badges.length === 0) && (
                    <p className="text-gray-500 dark:text-gray-400 italic">No achievements yet</p>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 transition-colors duration-300">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Your Impact</h2>
                <div className="space-y-4 text-gray-900 dark:text-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Mentorship Sessions</span>
                    <span className="font-semibold">{user?.stats?.mentorshipSessions || 0}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Events Hosted</span>
                    <span className="font-semibold">{user?.stats?.eventsHosted || 0}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Community Points</span>
                    <span className="font-semibold">{user?.stats?.points || 0}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Mobile Save/Cancel */}
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
                className="bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-100 p-3 rounded-full shadow-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}

        </div>

        {/* Image Preview Modal */}
        {previewImage && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 transition-opacity">
            <div className="relative max-w-lg w-full">
              <img
                src={previewImage}
                alt="Profile Preview"
                className="rounded-xl max-h-[80vh] mx-auto shadow-lg border border-gray-200 dark:border-gray-700"
              />
              <button
                className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 rounded-full p-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-md"
                onClick={() => setPreviewImage(null)}
              >
                <X className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}