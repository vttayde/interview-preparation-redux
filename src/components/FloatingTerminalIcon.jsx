import React from 'react';

const FloatingTerminalIcon = ({ onOpenTerminal }) => {
    return (
        <button
            onClick={() => onOpenTerminal()}
            className="fixed top-20 right-6 z-40 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
            title="Open JavaScript Terminal"
        >
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 group-hover:animate-pulse"
            >
                {/* Terminal icon */}
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M6 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                JavaScript Terminal
            </div>
        </button>
    );
};

export default FloatingTerminalIcon;
