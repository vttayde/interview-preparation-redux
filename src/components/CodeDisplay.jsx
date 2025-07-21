import React, { useEffect, useRef } from 'react';

const CodeDisplay = ({ code, language = 'javascript' }) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current && window.Prism) {
            window.Prism.highlightElement(codeRef.current);
        }
    }, [code]);

    return (
        <div className="bg-[var(--color-gray-800)] rounded-lg shadow-xl overflow-hidden">
            {/* VS Code-like header */}
            <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                    <div className="flex space-x-1.5">
                        <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                    </div>
                    <span className="text-gray-300 text-sm font-mono">main.js</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-xs bg-gray-700 px-2 py-1 rounded">{language}</span>
                </div>
            </div>
            
            {/* Code content */}
            <div className="flex bg-[var(--color-gray-800)]">
                {/* Line Numbers */}
                <div className="bg-gray-800 text-gray-500 font-mono text-sm px-3 py-4 select-none min-w-[50px]">
                    {code.split('\n').map((_, index) => (
                        <div key={index} className="text-right leading-6 h-6">
                            {index + 1}
                        </div>
                    ))}
                </div>
                
                {/* Code Content */}
                <div className="flex-1 p-4 overflow-x-auto">
                    <pre className="text-sm leading-6 !bg-transparent !m-0 !p-0 !border-0 !rounded-none !shadow-none">
                        <code 
                            ref={codeRef}
                            className={`language-${language} !bg-transparent !text-gray-100 !font-mono !border-0 !rounded-none !shadow-none`}
                            style={{
                                fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
                                fontSize: '14px',
                                lineHeight: '1.5',
                                background: 'transparent !important',
                                border: 'none !important',
                                borderRadius: '0 !important',
                                boxShadow: 'none !important',
                                padding: '0 !important',
                                margin: '0 !important'
                            }}
                        >
                            {code}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default CodeDisplay;
