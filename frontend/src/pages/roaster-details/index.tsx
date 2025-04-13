import React, { useState, useEffect } from 'react';
import { Search,  Users, User, Building, FileText,  } from 'lucide-react';

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: "individual" | "company" | "organization";
  registrationDate: string;
  status: "active" | "pending" | "rejected";
}

const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof UserData; direction: 'asc' | 'desc' } | null>(null);
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  useEffect(() => {
    // Replace with your actual API call
    const fetchUsers = async () => {
      try {
        setLoading(true);
        // This is where you'd fetch data from your API
        // const response = await fetch('/api/users');
        // const data = await response.json();
        // setUsers(data);
        
        // For development, we'll just set loading to false

        // In production, you'd uncomment the above and remove this timeout
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to load user data. Please try again.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setSelectedUser(null);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSelectedUser(null);
  };

  const handleSort = (key: keyof UserData) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
    setSelectedUser(null);
  };

  const handleUserSelect = (user: UserData) => {
    setSelectedUser(user);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'individual':
        return <User className="w-4 h-4 text-blue-500" />;
      case 'company':
        return <Building className="w-4 h-4 text-green-500" />;
      case 'organization':
        return <Users className="w-4 h-4 text-purple-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      rejected: "bg-red-100 text-red-800"
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen  p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-100">Registration Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage and view user registrations</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left panel - Users list */}
          <div className="lg:col-span-1 bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search users..."
                  className="pl-10 pr-4 py-2 w-full border  rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              
              <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
                <button
                  className={`px-3 py-1 rounded-full  hover:text-white text-sm ${activeFilter === 'all' ? 'bg-blue-100 text-blue-700' : 'bg-blue-700 text-gray-50'}`}
                  onClick={() => handleFilterChange('all')}
                >
                  All
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm  hover:text-white flex items-center space-x-1 ${activeFilter === 'individual' ? 'bg-blue-100 text-blue-700' : 'bg-blue-700 text-gray-50'}`}
                  onClick={() => handleFilterChange('individual')}
                >
                  <User className="h-3 w-3" />
                  <span>Individual</span>
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm  hover:text-white flex items-center space-x-1 ${activeFilter === 'company' ? 'bg-blue-100 text-blue-700' : 'bg-blue-700 text-gray-50'}`}
                  onClick={() => handleFilterChange('company')}
                >
                  <Building className="h-3 w-3" />
                  <span>Company</span>
                </button>
                <button
                  className={`px-3 py-1 rounded-full text-sm  hover:text-white flex items-center space-x-1 ${activeFilter === 'organization' ? 'bg-blue-100 text-blue-700' : 'bg-blue-700 text-gray-50'}`}
                  onClick={() => handleFilterChange('organization')}
                >
                  <Users className="h-3 w-3" />
                  <span>Organization</span>
                </button>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {loading ? (
                <div className="p-8 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="p-4 text-center text-red-500">{error}</div>
              ) : users.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  <p className="text-lg font-medium">No registrations found</p>
                  <p className="mt-1">Connect your API to view user data</p>
                </div>
              ) : (
                users.map(user => (
                  <div
                    key={user.id}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${selectedUser?.id === user.id ? 'bg-blue-50' : ''}`}
                    onClick={() => handleUserSelect(user)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {getTypeIcon(user.type)}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{user.name}</h3>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>
                      {getStatusBadge(user.status)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right panel - User details */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow">
            {selectedUser ? (
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">{selectedUser.name}</h2>
                  {getStatusBadge(selectedUser.status)}
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Registration Type</p>
                      <div className="mt-1 flex items-center space-x-2">
                        {getTypeIcon(selectedUser.type)}
                        <span className="capitalize">{selectedUser.type}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Registration Date</p>
                      <p className="mt-1">{selectedUser.registrationDate}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="mt-1">{selectedUser.email}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="mt-1">{selectedUser.phone}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">Submitted Documents</h3>
                    <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                      <p>Document viewer will appear here when connected to API</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-3">AI-Extracted Information</h3>
                    <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                      <p>Document data will appear here when connected to API</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-10 text-center text-gray-500">
                <FileText className="h-16 w-16 mb-4 text-gray-300" />
                <h3 className="text-lg font-medium mb-2">No User Selected</h3>
                <p>Select a user from the list to view their details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;