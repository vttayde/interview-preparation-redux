import { useState } from 'react';

export const useGlobalTerminal = () => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [terminalCode, setTerminalCode] = useState('');
    const [output, setOutput] = useState('');

    const runCode = (code) => {
        try {
            // Clear previous output
            setOutput('');
            
            // Create a custom console to capture output
            const logs = [];
            const originalLog = console.log;
            const originalError = console.error;
            
            console.log = (...args) => {
                logs.push(args.map(arg => 
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(' '));
                originalLog(...args);
            };
            
            console.error = (...args) => {
                logs.push('ERROR: ' + args.map(arg => 
                    typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
                ).join(' '));
                originalError(...args);
            };

            // Execute the code
            eval(code);
            
            // Restore original console functions
            console.log = originalLog;
            console.error = originalError;
            
            // Set output
            setOutput(logs.join('\n') || 'Code executed successfully (no console output)');
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        }
    };

    const openTerminal = (initialCode = '') => {
        setTerminalCode(initialCode);
        setIsTerminalOpen(true);
        setOutput(''); // Clear previous output
    };

    const closeTerminal = () => {
        setIsTerminalOpen(false);
        setTerminalCode('');
        setOutput('');
    };

    const clearTerminal = () => {
        setTerminalCode('');
        setOutput('');
    };

    return {
        isTerminalOpen,
        terminalCode,
        output,
        setTerminalCode,
        runCode,
        openTerminal,
        closeTerminal,
        clearTerminal
    };
};
