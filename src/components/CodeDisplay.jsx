import React, { useState } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-dark.css'; // Better dark theme

// Register JavaScript language
hljs.registerLanguage('javascript', javascript);

const CodeDisplay = ({ code, language = 'javascript', onTryCode }) => {
    const [copied, setCopied] = useState(false);

    // Highlight the code
    const highlightedCode = hljs.highlight(code, { language }).value;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    const handleTryCode = () => {
        if (onTryCode) {
            onTryCode(code);
        }
    };

    return (
        <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700">
            {/* VS Code-like header with built-in actions */}
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-600">
                <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                    </div>
                    <span className="text-gray-200 text-sm font-mono">main.js</span>
                </div>
                
                {/* Built-in action buttons */}
                <div className="flex items-center space-x-2">
                    <span className="text-gray-300 text-xs bg-gray-700 px-2 py-1 rounded border border-gray-600">{language}</span>
                    
                    {/* Copy Button */}
                    <button
                        onClick={handleCopy}
                        className="flex items-center space-x-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                        title="Copy code"
                    >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"/>
                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"/>
                        </svg>
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                    
                    {/* Try Code Button */}
                    <button
                        onClick={handleTryCode}
                        className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
                        title="Try this code"
                    >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                        </svg>
                        <span>Try Code</span>
                    </button>
                </div>
            </div>
            
            {/* Code content */}
            <div className="flex bg-gray-900">
                {/* Line Numbers */}
                <div className="bg-gray-800 text-gray-400 font-mono text-sm px-3 py-4 select-none min-w-[50px] border-r border-gray-600">
                    {code.split('\n').map((_, index) => (
                        <div key={index} className="text-right leading-6 h-6">
                            {index + 1}
                        </div>
                    ))}
                </div>
                
                {/* Code Content with Syntax Highlighting */}
                <div className="flex-1 p-4 overflow-x-auto bg-gray-900">
                    <pre className="text-sm leading-6 !bg-transparent !m-0 !p-0">
                        <code 
                            className={`language-${language} hljs !bg-transparent !font-mono text-gray-100`}
                            style={{
                                fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                                fontSize: '14px',
                                lineHeight: '1.5',
                                background: 'transparent !important',
                                color: '#e5e7eb !important'
                            }}
                            dangerouslySetInnerHTML={{ __html: highlightedCode }}
                        />
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default CodeDisplay;
