import { useState, useMemo, useCallback } from 'react';

/**
 * Custom hook for study topic functionality
 * Encapsulates common logic for better reusability and testing
 */
export const useStudyTopic = (tabs, content, defaultTab = null) => {
    // Initialize with first tab or provided default
    const initialTab = defaultTab || tabs?.[0]?.id || 'default';
    const [activeTab, setActiveTab] = useState(initialTab);
    const [terminalOpen, setTerminalOpen] = useState(false);
    const [terminalCode, setTerminalCode] = useState('');

    // Memoize tab content to prevent unnecessary re-calculations
    const tabContent = useMemo(() => {
        return content[activeTab] || content.default || [];
    }, [content, activeTab]);

    // Memoized handlers to prevent unnecessary re-renders
    const handleTryCode = useCallback((code) => {
        setTerminalCode(code);
        setTerminalOpen(true);
    }, []);

    const handleCloseTerminal = useCallback(() => {
        setTerminalOpen(false);
    }, []);

    const handleTabChange = useCallback((tabId) => {
        if (tabs.some(tab => tab.id === tabId)) {
            setActiveTab(tabId);
        }
    }, [tabs]);

    // Keyboard navigation support
    const handleKeyDown = useCallback((event, tabId) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleTabChange(tabId);
        }
        // Arrow key navigation
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            event.preventDefault();
            const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
            let nextIndex;
            
            if (event.key === 'ArrowLeft') {
                nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
            } else {
                nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
            }
            
            handleTabChange(tabs[nextIndex].id);
        }
    }, [tabs, activeTab, handleTabChange]);

    // Return state and handlers
    return {
        // State
        activeTab,
        terminalOpen,
        terminalCode,
        tabContent,
        
        // Handlers
        handleTryCode,
        handleCloseTerminal,
        handleTabChange,
        handleKeyDown,
        
        // Computed values
        hasContent: tabContent.length > 0,
        currentTabIndex: tabs.findIndex(tab => tab.id === activeTab),
        totalTabs: tabs.length
    };
};
