import React, { useState } from 'react';
import AddQuestionForm from './AddQuestionForm';
import { useQuestions } from '../hooks/useQuestions';

/**
 * Context-aware floating add button for specific study topics
 * @param {string} studyTopic - The current study topic (auto-detected from page)
 * @param {string} subTopic - The current sub topic (auto-detected from active tab)
 */
const FloatingAddButton = ({ studyTopic, subTopic }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { addQuestion } = useQuestions();

    const handleAddQuestion = (questionData) => {
        addQuestion(questionData);
    };

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsFormOpen(true)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`
                        flex items-center justify-center w-14 h-14 
                        bg-gradient-to-r from-blue-500 to-blue-600 
                        text-white rounded-full shadow-lg hover:shadow-xl 
                        transition-all duration-300 ease-in-out
                        hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300
                        ${isHovered ? 'transform scale-110' : ''}
                    `}
                    title={`Add New ${studyTopic} Question`}
                    aria-label={`Add New ${studyTopic} Question`}
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 4v16m8-8H4" 
                        />
                    </svg>
                </button>
                
                {/* Tooltip */}
                {isHovered && (
                    <div className="absolute bottom-16 right-0 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                        Add New {studyTopic} Question
                        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                )}
            </div>

            {/* Add Question Form Modal */}
            <AddQuestionForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleAddQuestion}
                studyTopic={studyTopic}
                subTopic={subTopic}
            />
        </>
    );
};

export default FloatingAddButton;
