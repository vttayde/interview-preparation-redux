import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import Editor from '@monaco-editor/react';

const CodeTerminal = ({ isOpen, onClose, initialCode = '', language = "javascript" }) => {
    const [code, setCode] = useState(initialCode);
    const [selectedLanguage, setSelectedLanguage] = useState(language);
    const [output, setOutput] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const editorRef = useRef(null);
    const modalRef = useRef(null);

    // Memoized languages array
    const languages = useMemo(() => [
        { value: 'javascript', label: 'JavaScript', filename: 'main.js' },
        { value: 'typescript', label: 'TypeScript', filename: 'main.ts' },
        { value: 'python', label: 'Python', filename: 'main.py' },
        { value: 'java', label: 'Java', filename: 'Main.java' },
        { value: 'cpp', label: 'C++', filename: 'main.cpp' },
        { value: 'csharp', label: 'C#', filename: 'Program.cs' },
        { value: 'php', label: 'PHP', filename: 'index.php' },
        { value: 'ruby', label: 'Ruby', filename: 'main.rb' },
        { value: 'go', label: 'Go', filename: 'main.go' },
        { value: 'rust', label: 'Rust', filename: 'main.rs' },
        { value: 'swift', label: 'Swift', filename: 'main.swift' },
        { value: 'kotlin', label: 'Kotlin', filename: 'Main.kt' },
        { value: 'html', label: 'HTML', filename: 'index.html' },
        { value: 'css', label: 'CSS', filename: 'styles.css' },
        { value: 'sql', label: 'SQL', filename: 'query.sql' },
        { value: 'json', label: 'JSON', filename: 'data.json' },
        { value: 'yaml', label: 'YAML', filename: 'config.yml' },
        { value: 'bash', label: 'Bash', filename: 'script.sh' }
    ], []);

    // Memoized current language
    const currentLanguage = useMemo(() => 
        languages.find(lang => lang.value === selectedLanguage) || languages[0], 
        [languages, selectedLanguage]
    );

    // Memoized editor options
    const editorOptions = useMemo(() => ({
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
    }), []);

    // Optimized format argument function
    const formatArg = useCallback((arg) => {
        if (typeof arg === 'object' && arg !== null) {
            try {
                return JSON.stringify(arg, null, 2);
            } catch {
                return String(arg);
            }
        }
        if (typeof arg === 'undefined') return 'undefined';
        if (typeof arg === 'function') return arg.toString();
        return String(arg);
    }, []);

    // Optimized output style function
    const getOutputStyle = useCallback((type) => {
        const styles = {
            error: 'text-red-400 font-medium',
            success: 'text-green-400',
            info: 'text-blue-400',
            result: 'text-cyan-400 font-medium',
            log: 'text-gray-300',
            warn: 'text-yellow-400'
        };
        return styles[type] || 'text-gray-300';
    }, []);

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

    // Optimized code execution
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

            // Optimized console capture
            const logs = [];
            const originalConsole = {
                log: console.log,
                error: console.error,
                warn: console.warn
            };
            
            const createConsoleHandler = (type) => (...args) => {
                const formattedArgs = args.map(formatArg);
                logs.push({ type, content: formattedArgs.join(' ') });
                originalConsole[type].apply(console, args);
            };

            console.log = createConsoleHandler('log');
            console.error = createConsoleHandler('error');
            console.warn = createConsoleHandler('warn');

            // Execute code
            const func = new Function(code);
            const result = func();

            // Restore console methods
            Object.assign(console, originalConsole);

            // Add logs to output
            logs.forEach(log => {
                setOutput(prev => [...prev, { 
                    ...log, 
                    timestamp: new Date().toLocaleTimeString() 
                }]);
            });

            // Add result if any
            if (result !== undefined) {
                const resultContent = typeof result === 'object' && result !== null
                    ? `Return Value:\n${JSON.stringify(result, null, 2)}`
                    : `Return Value: ${String(result)}`;
                
                setOutput(prev => [...prev, { 
                    type: 'result', 
                    content: resultContent, 
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
                content: `❌ Runtime Error:\n${error.name}: ${error.message}${error.stack ? '\n\nStack trace:\n' + error.stack : ''}`, 
                timestamp: new Date().toLocaleTimeString() 
            }]);
        } finally {
            setIsRunning(false);
        }
    }, [code, isRunning, formatArg]);

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

    const handleEditorDidMount = useCallback((editor) => {
        editorRef.current = editor;
    }, []);

    // Optimized clear and format functions
    const clearOutput = useCallback(() => {
        setOutput([]);
    }, []);

    const formatCode = useCallback(() => {
        if (editorRef.current) {
            editorRef.current.getAction('editor.action.formatDocument').run();
        }
    }, []);

    // Memoized output item component for better performance
    const OutputItem = useCallback(({ item, index }) => (
        <div key={index} className="py-2 border-b border-gray-700 last:border-b-0">
            <div className="text-xs text-gray-400 mb-1 flex justify-between">
                <span>{item.timestamp}</span>
                <span className="capitalize">{item.type}</span>
            </div>
            <div className={`${getOutputStyle(item.type)} whitespace-pre-wrap break-words`}>
                {item.content}
            </div>
        </div>
    ), [getOutputStyle]);

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
                        <h3 className="text-white font-medium">{currentLanguage.filename}</h3>
                    </div>
                    
                    {/* Action Buttons with Language Dropdown */}
                    <div className="flex items-center space-x-2">
                        {/* Language Dropdown */}
                        <select
                            value={selectedLanguage}
                            onChange={(e) => setSelectedLanguage(e.target.value)}
                            className="text-gray-300 text-xs bg-gray-700 px-3 py-1 rounded border border-gray-600 focus:outline-none focus:border-blue-500 hover:border-gray-500 transition-colors cursor-pointer"
                            title="Select Language"
                        >
                            {languages.map(lang => (
                                <option key={lang.value} value={lang.value} className="bg-gray-700 text-gray-300">
                                    {lang.label}
                                </option>
                            ))}
                        </select>
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
                            language={selectedLanguage}
                            theme="vs-dark"
                            value={code}
                            onChange={setCode}
                            onMount={handleEditorDidMount}
                            options={editorOptions}
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
                                    <OutputItem key={index} item={item} index={index} />
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
