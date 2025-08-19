import React, { useMemo } from 'react';
import parse from 'html-react-parser';
import TopicsNavigation from './TopicsNavigation';
import CodeDisplay from '../CodeDisplay';
import CodeTerminal from '../CodeTerminal';
import Accordion from '../Accordion';
import FloatingAddButton from '../FloatingAddButton';
import { useStudyTopic } from '../../hooks/useStudyTopic';
import { useStudyTopicQuestions } from '../../hooks/useQuestions';

/**
 * Reusable layout component for study topics with accordion functionality
 * Features: Custom hook, accessibility, compound accordion pattern
 */
const StudyTopicLayout = ({ 
    tabs, 
    uiText, 
    content, 
    language = 'javascript',
    terminalTitle = 'Code Terminal',
    defaultTab = null,
    studyTopicKey = '' // Key to identify the study topic (e.g., 'javascript', 'html', etc.)
}) => {
    // Hooks
    const {
        activeTab,
        terminalOpen,
        terminalCode,
        tabContent,
        handleTryCode,
        handleCloseTerminal,
        handleTabChange,
        handleKeyDown,
        hasContent
    } = useStudyTopic(tabs, content, defaultTab);

    // Get user questions for current topic and merge with existing content
    const { mergedContent } = useStudyTopicQuestions(
        studyTopicKey, 
        activeTab, 
        tabContent
    );

    // Render accordion content with merged user questions
    const renderTabContent = useMemo(() => {
        if (!hasContent && mergedContent.length === 0) {
            return (
                <div className="flex items-center justify-center h-64 text-gray-500">
                    <div className="text-center">
                        <div className="text-4xl mb-4">📚</div>
                        <p>No content available for this section</p>
                    </div>
                </div>
            );
        }

        const contentToRender = mergedContent.length > 0 ? mergedContent : tabContent;

        return (
            <Accordion allowMultiple>
                <Accordion.Controls 
                    expandText="Expand All"
                    collapseText="Collapse All"
                />
                
                {contentToRender.map((example) => (
                    <Accordion.Item 
                        key={example.id}
                        id={`${activeTab}-${example.id}`}
                        className={`bg-${example.color}-50 border-${example.color}-100 hover:shadow-md`}
                    >
                        <Accordion.Header className={`hover:bg-${example.color}-100`}>
                            <div className="flex items-center justify-between w-full">
                                <h3 className={`font-semibold text-${example.color}-800 text-lg`}>
                                    {example.title}
                                </h3>
                                {example.isUserAdded && (
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-2">
                                        User Added
                                    </span>
                                )}
                            </div>
                        </Accordion.Header>
                        
                        <Accordion.Panel>
                            <div className={`text-${example.color}-700 text-sm mb-4 prose max-w-none`}>
                                {parse(example.description)}
                            </div>
                            {example.code && (
                                <div className="mt-4">
                                    <CodeDisplay
                                        code={example.code}
                                        language={language}
                                        onTryCode={() => handleTryCode(example.code)}
                                    />
                                </div>
                            )}
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
        );
    }, [mergedContent, tabContent, activeTab, hasContent, language, handleTryCode]);

    // Error boundary fallback
    if (!tabs || !uiText || !content) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h2 className="text-red-800 font-semibold mb-2">Configuration Error</h2>
                <p className="text-red-600 text-sm">
                    Required props (tabs, uiText, content) are missing.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white shadow rounded-lg p-6">
            {/* Header */}
            <header className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900">{uiText.title}</h1>
                <p className="mt-2 text-gray-600">{uiText.description}</p>
            </header>

            {/* Tab Navigation */}
            {tabs?.length > 0 && (
                <nav className="mb-6" role="tablist" aria-label={`${uiText.title} sections`}>
                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                role="tab"
                                aria-selected={activeTab === tab.id}
                                aria-controls={`panel-${tab.id}`}
                                tabIndex={activeTab === tab.id ? 0 : -1}
                                onClick={() => handleTabChange(tab.id)}
                                onKeyDown={(e) => handleKeyDown(e, tab.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                                    activeTab === tab.id
                                        ? 'bg-blue-100 text-blue-700 border border-blue-200 shadow-sm'
                                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200 hover:shadow-sm'
                                }`}
                            >
                                <span className="mr-2" aria-hidden="true">{tab.icon}</span>
                                <span>{tab.name}</span>
                            </button>
                        ))}
                    </div>
                </nav>
            )}

            {/* Main Content */}
            <main 
                className="min-h-[400px]"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                role="tabpanel" 
                aria-label={`${uiText.title} content`}
            >
                {renderTabContent}
            </main>

            {/* Navigation */}
            <nav aria-label="Topic navigation">
                <TopicsNavigation />
            </nav>

            {/* Terminal */}
            {terminalOpen && (
                <aside aria-label="Code terminal">
                    <CodeTerminal
                        isOpen={terminalOpen}
                        onClose={handleCloseTerminal}
                        initialCode={terminalCode}
                        title={terminalTitle}
                        language={language}
                    />
                </aside>
            )}

            {/* Context-aware floating add button */}
            {studyTopicKey && (
                <FloatingAddButton 
                    studyTopic={studyTopicKey} 
                    subTopic={activeTab} 
                />
            )}

        </div>
    );
};

export default StudyTopicLayout;
