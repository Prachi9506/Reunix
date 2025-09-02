import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'alumni' | 'student' | 'admin';
  profile?: {
    avatar?: string;
    bio?: string;
    company?: string;
    designation?: string;
    graduationYear?: number;
    branch?: string;
    skills?: string[];
    linkedinUrl?: string;
    githubUrl?: string;
  };
  stats?: {
    mentorshipSessions: number;
    eventsHosted: number;
    badges: string[];
    points: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored auth data
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string, role: string): Promise<boolean> => {
    // Mock authentication - in real app, this would be an API call
    try {
      const mockUser: User = {
        id: Date.now().toString(),
        name: role === 'alumni' ? 'John Doe' : role === 'student' ? 'Jane Smith' : 'Admin User',
        email,
        role: role as 'alumni' | 'student' | 'admin',
        profile: {
          avatar: `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2`,
          bio: role === 'alumni' ? 'Senior Software Engineer with 5+ years experience' : 'Computer Science Student',
          company: role === 'alumni' ? 'Tech Corp' : undefined,
          designation: role === 'alumni' ? 'Senior Software Engineer' : undefined,
          graduationYear: role === 'alumni' ? 2018 : 2025,
          branch: 'Computer Science',
          skills: ['React', 'Node.js', 'Python', 'MongoDB'],
          linkedinUrl: 'https://linkedin.com/in/johndoe',
          githubUrl: 'https://github.com/johndoe',
        },
        stats: {
          mentorshipSessions: role === 'alumni' ? 15 : 3,
          eventsHosted: role === 'alumni' ? 5 : 1,
          badges: ['Mentor of the Month', 'Top Contributor'],
          points: 1250,
        },
      };

      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    } catch (error) {
      return false;
    }
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      const newUser: User = {
        id: Date.now().toString(),
        ...userData,
        stats: {
          mentorshipSessions: 0,
          eventsHosted: 0,
          badges: [],
          points: 0,
        },
      };

      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return true;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const updateProfile = (updates: any) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}