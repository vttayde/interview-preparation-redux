import React, { useState, useRef, useEffect, useCallback } from 'react';
import Editor from '@monaco-editor/react';

const CodeTerminal = ({ isOpen, onClose, initialCode = '', title = "JavaScript Terminal" }) => {
    const [code, setCode] = useState(initialCode);
    const [output, setOutput] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const editorRef = useRef(null);
    const modalRef = useRef(null);

    // Update code when initialCode changes
    useEffect(() => {
        setCode(initialCode);
    }, [initialCode]);

    // Click outside to close modal
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [isOpen, onClose]);

    // Simple code execution
    const runCode = useCallback(async () => {
        if (isRunning) return;
        
        setIsRunning(true);
        setOutput([]);

        try {
            // Add execution start message
            setOutput([{ 
                type: 'info', 
                content: '🚀 Running code...', 
                timestamp: new Date().toLocaleTimeString() 
            }]);

            // Simple console capture
            const logs = [];
            const originalLog = console.log;
            console.log = (...args) => {
                logs.push(args.join(' '));
                originalLog.apply(console, args);
            };

            // Simple code execution with Function constructor
            const func = new Function(code);
            const result = func();

            // Restore console
            console.log = originalLog;

            // Show console logs
            logs.forEach(log => {
                setOutput(prev => [...prev, { 
                    type: 'log', 
                    content: log, 
                    timestamp: new Date().toLocaleTimeString() 
                }]);
            });

            // Show result if any
            if (result !== undefined) {
                setOutput(prev => [...prev, { 
                    type: 'result', 
                    content: `Result: ${String(result)}`, 
                    timestamp: new Date().toLocaleTimeString() 
                }]);
            }

            // Success message
            setOutput(prev => [...prev, { 
                type: 'success', 
                content: '✅ Code executed successfully', 
                timestamp: new Date().toLocaleTimeString() 
            }]);

        } catch (error) {
            setOutput(prev => [...prev, { 
                type: 'error', 
                content: `❌ Error: ${error.message}`, 
                timestamp: new Date().toLocaleTimeString() 
            }]);
        } finally {
            setIsRunning(false);
        }
    }, [code, isRunning]);

    // Simple keyboard shortcut (after runCode is defined)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isOpen) return;
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                runCode();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, runCode]);

    const clearOutput = () => {
        setOutput([]);
    };

    const formatCode = () => {
        if (editorRef.current) {
            editorRef.current.getAction('editor.action.formatDocument').run();
        }
    };

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    };

    const getOutputStyle = (type) => {
        switch (type) {
            case 'error': return 'text-red-400';
            case 'success': return 'text-green-400';
            case 'info': return 'text-blue-400';
            case 'result': return 'text-cyan-400';
            case 'log': return 'text-gray-300';
            default: return 'text-gray-300';
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div 
                ref={modalRef}
                className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-6xl h-5/6 flex flex-col"
            >
                {/* Header */}
                <div className="flex items-center justify-between bg-gray-800 px-6 py-3 rounded-t-lg border-b border-gray-700">
                    <div className="flex items-center space-x-3">
                        <div className="flex space-x-1.5">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <h3 className="text-white font-medium">{title}</h3>
                    </div>
                    
                    {/* Simple Action Buttons */}
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={formatCode}
                            className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
                        >
                            Format
                        </button>
                        <button
                            onClick={clearOutput}
                            className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded"
                        >
                            Clear
                        </button>
                        <button
                            onClick={runCode}
                            disabled={isRunning}
                            className="px-4 py-1 bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white text-sm rounded"
                        >
                            {isRunning ? 'Running...' : 'Run'}
                        </button>
                        <button
                            onClick={onClose}
                            className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 overflow-hidden">
                    {/* Editor */}
                    <div className="flex-1 border-r border-gray-700">
                        <Editor
                            height="100%"
                            language="javascript"
                            theme="vs-dark"
                            value={code}
                            onChange={setCode}
                            onMount={handleEditorDidMount}
                            options={{
                                minimap: { enabled: false },
                                scrollBeyondLastLine: false,
                                fontSize: 14,
                                lineNumbers: 'on',
                                roundedSelection: false,
                                automaticLayout: true,
                                formatOnPaste: true,
                                formatOnType: true,
                                wordWrap: 'on',
                                tabSize: 2,
                                insertSpaces: true,
                            }}
                        />
                    </div>

                    {/* Simple Output Panel */}
                    <div className="w-1/3 bg-gray-900 flex flex-col">
                        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
                            <h4 className="text-white text-sm font-medium">Output</h4>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-2 font-mono text-sm">
                            {output.length === 0 ? (
                                <div className="text-gray-500 italic text-center py-8">
                                    <div>No output yet.</div>
                                    <div className="text-xs mt-1">Run your code to see results.</div>
                                </div>
                            ) : (
                                output.map((item, index) => (
                                    <div key={index} className="py-2 border-b border-gray-700">
                                        <div className="text-xs text-gray-400 mb-1">
                                            {item.timestamp} - {item.type}
                                        </div>
                                        <div className={getOutputStyle(item.type)}>
                                            {item.content}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Simple Footer */}
                <div className="bg-gray-800 px-6 py-2 rounded-b-lg border-t border-gray-700">
                    <div className="text-xs text-gray-400 text-center">
                        Monaco Editor - Press Ctrl+Enter to run code
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeTerminal;
