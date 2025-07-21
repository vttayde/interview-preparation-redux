import React, { useState } from 'react';

const TryCodeButton = ({ codeSnippet = '', onOpenTerminal, title = 'Try Code in Terminal' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopyCode = async (e) => {
        e.stopPropagation(); // Prevent opening terminal when copying
        try {
            await navigator.clipboard.writeText(codeSnippet);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div className="flex gap-2">
            {/* Copy Button */}
            <button
                onClick={handleCopyCode}
                className="inline-flex items-center px-3 py-1.5 bg-gray-500 text-white text-sm rounded-md hover:bg-gray-600 transition-colors shadow-sm"
                title="Copy Code to Clipboard"
            >
                {copied ? (
                    <>
                        <span className="mr-1">✅</span>
                        Copied!
                    </>
                ) : (
                    <>
                        <span className="mr-1">📋</span>
                        Copy
                    </>
                )}
            </button>

            {/* Try Code Button */}
            <button
                onClick={() => onOpenTerminal(codeSnippet)}
                className="inline-flex items-center px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors shadow-sm"
                title={title}
            >
                <span className="mr-1">💻</span>
                Try Code
            </button>
        </div>
    );
};

export default TryCodeButton;
