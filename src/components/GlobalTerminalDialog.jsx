import React from 'react';

const GlobalTerminalDialog = ({ 
    isOpen, 
    onClose, 
    code, 
    onCodeChange, 
    onRunCode, 
    onClearCode, 
    output 
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[95vh] flex flex-col">
                {/* Dialog Header */}
                <div className="flex justify-between items-center p-4 border-b bg-gray-50 rounded-t-lg">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            💻 JavaScript Terminal
                        </h3>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 text-xl font-bold hover:bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        title="Close Terminal"
                    >
                        ×
                    </button>
                </div>

                {/* Terminal Content */}
                <div className="flex-1 flex flex-col min-h-0">
                    {/* Editor Controls */}
                    <div className="bg-gray-100 border-b px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium text-gray-600">📝 main.js</span>
                            <span className="text-xs text-gray-500">- Global JavaScript Terminal</span>
                            <div className="flex items-center space-x-1 ml-4">
                                <div className="w-2 h-2 bg-orange-400 rounded-full" title="Unsaved changes"></div>
                                <span className="text-xs text-gray-500">Modified</span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={onClearCode}
                                className="px-3 py-1.5 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors flex items-center gap-1 shadow-sm"
                                title="Clear All Code"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                                Clear
                            </button>
                            <button
                                onClick={() => onRunCode(code)}
                                className="px-3 py-1.5 bg-green-500 text-white text-sm rounded hover:bg-green-600 transition-colors flex items-center gap-1 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-sm"
                                disabled={!code.trim()}
                                title="Run JavaScript Code"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                                </svg>
                                Run Code
                            </button>
                        </div>
                    </div>
                    
                        {/* Code Editor Area */}
                        <div className="flex flex-1 min-h-0">
                            <div className="flex-1 flex flex-col">
                                {/* Line numbers and editor container */}
                                <div className="flex flex-1 bg-gray-900">
                                    {/* Line Numbers */}
                                    <div className="bg-gray-800 p-4 text-gray-400 font-mono text-sm select-none border-r border-gray-700" style={{ minWidth: '60px' }}>
                                        {code.split('\n').map((_, index) => (
                                            <div key={index} className="text-right pr-2 leading-6">
                                                {index + 1}
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Code Editor */}
                                    <textarea
                                        value={code}
                                        onChange={(e) => onCodeChange(e.target.value)}
                                        placeholder={`// Welcome to the Global JavaScript Terminal!
// Write your JavaScript code here and click "Run Code" to execute.

// Examples:
console.log('Hello World!');

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log('Doubled:', doubled);

// You can also test complex logic:
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log('Fibonacci(8):', fibonacci(8));`}
                                        className="flex-1 p-4 font-mono text-sm bg-gray-900 text-green-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 border-none"
                                        spellCheck="false"
                                        style={{ 
                                            minHeight: '300px',
                                            lineHeight: '1.5',
                                            tabSize: '2'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Output Panel */}
                        <div className="border-t bg-gray-50 flex flex-col" style={{ maxHeight: '200px' }}>
                            <div className="px-4 py-2 bg-gray-200 border-b flex justify-between items-center">
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-gray-600">📟 Console Output</span>
                                    {output && (
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                                            ✓ Executed
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs text-gray-500">
                                    {output ? 'Ready' : 'Click "Run Code" to see output'}
                                </span>
                            </div>
                            <div className="flex-1 p-4 overflow-y-auto bg-black">
                                <pre className="text-sm text-green-400 whitespace-pre-wrap font-mono leading-relaxed">
                                    {output || (
                                        <span className="text-gray-500">
                                            No output yet. Run some code to see results here...
                                            <br />
                                            <br />
                                            <span className="text-xs">
                                                💡 Tip: Use console.log(), console.error(), or any JavaScript expressions
                                            </span>
                                        </span>
                                    )}
                                </pre>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalTerminalDialog;
