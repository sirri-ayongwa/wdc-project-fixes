import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchOverlayProps {
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus input when overlay opens
    if (inputRef.current) {
      inputRef.current.focus();
    }
    
    // Prevent scrolling on the body
    document.body.style.overflow = "hidden";
    
    // Listen for Escape key
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    
    return () => {
      // Restore scrolling when component unmounts
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Mock search suggestions - replace with your actual data
  const suggestions = [
    { text: "Disaster response strategies", category: "Resources" },
    { text: "Membership benefits", category: "Get Involved" },
    { text: "Latest disaster alerts", category: "Global Products" },
    { text: "Training opportunities", category: "Academy" },
    { text: "Partnering with WDC", category: "About Us" },
  ];
  
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Background overlay with opacity */}
      <div 
        className="fixed inset-0 bg-n-8 bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Search container */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 flex flex-col pt-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-950 w-full max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden animate-fade-in">
            {/* Search header */}
            <div className="p-4 border-b border-gray-200 flex items-center">
              <Search className="h-5 w-5 text-gray-500 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search World Disaster Center..."
                className="flex-1 outline-none text-lg text-white bg-blue-950"
                autoComplete="off"
              />
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            {/* Search content */}
            <div className="max-h-[calc(100vh-200px)] overflow-y-auto p-4">
              {searchQuery ? (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">SEARCH RESULTS</h3>
                  <div className="space-y-2 ">
                    {suggestions
                      .filter(item => 
                        item.text.toLowerCase().includes(searchQuery.toLowerCase())
                      )
                      .map((item, index) => (
                        <a 
                          key={index}
                          href="#"
                          className="block p-3 text-white hover:bg-gray-700 rounded-md transition-colors"
                        >
                          <p className="text-white font-medium">{item.text}</p>
                          <p className="text-sm text-gray-500">{item.category}</p>
                        </a>
                      ))
                    }
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-500">SUGGESTIONS</h3>
                  <div className="space-y-2">
                    {suggestions.map((item, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="block p-3 hover:bg-gray-700 rounded-md transition-colors"
                      >
                        <p className="text-white font-medium">{item.text}</p>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Search footer */}
            <div className="p-4 bg-gray-800 text-sm text-gray-300">
              Press ESC to close or enter to search
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;