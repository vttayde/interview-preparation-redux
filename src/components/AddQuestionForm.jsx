import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
    HTML_TABS, HTML_UI_TEXT,
    CSS_TABS, CSS_UI_TEXT,
    JAVASCRIPT_TABS, JAVASCRIPT_UI_TEXT,
    REACT_TABS, REACT_UI_TEXT,
    TYPESCRIPT_TABS, TYPESCRIPT_UI_TEXT,
    NODEJS_TABS, NODEJS_UI_TEXT,
    DATABASE_TABS, DATABASE_UI_TEXT,
    PROJECTS_TABS, PROJECTS_UI_TEXT,
    INTRODUCTION_TABS, INTRODUCTION_UI_TEXT,
    INTERVIEW_QUESTIONS_TABS, INTERVIEW_QUESTIONS_UI_TEXT
} from '../constants';

// =============================================================================
// CONSTANTS
// =============================================================================

const COLOR_OPTIONS = [
    'blue', 'green', 'purple', 'yellow', 'red', 'pink', 'orange', 'gray', 'cyan', 'teal'
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Extracts clean label from UI_TEXT title by removing common suffixes
 * @param {string} title - The original title from UI_TEXT
 * @returns {string} - Clean label for display
 */
const extractCleanLabel = (title) => {
    return title
        .replace(' Mastery Guide', '')
        .replace(' Development', '')
        .replace(' Guide', '')
        .replace('Master ', '')
        .trim();
};

/**
 * Generates random color from predefined options
 * @returns {string} - Random color string
 */
const getRandomColor = () => {
    return COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length)];
};

/**
 * Creates study topics configuration from existing constants
 * @returns {Object} - Dynamic configuration object
 */
const createStudyTopicsConfig = () => ({
    'html': { 
        label: extractCleanLabel(HTML_UI_TEXT.title), 
        subTopics: HTML_TABS.map(tab => tab.id) 
    },
    'css': { 
        label: extractCleanLabel(CSS_UI_TEXT.title), 
        subTopics: CSS_TABS.map(tab => tab.id) 
    },
    'javascript': { 
        label: extractCleanLabel(JAVASCRIPT_UI_TEXT.title), 
        subTopics: JAVASCRIPT_TABS.map(tab => tab.id) 
    },
    'reactjs': { 
        label: extractCleanLabel(REACT_UI_TEXT.title), 
        subTopics: REACT_TABS.map(tab => tab.id) 
    },
    'typescript': { 
        label: extractCleanLabel(TYPESCRIPT_UI_TEXT.title), 
        subTopics: TYPESCRIPT_TABS.map(tab => tab.id) 
    },
    'nodejs': { 
        label: extractCleanLabel(NODEJS_UI_TEXT.title), 
        subTopics: NODEJS_TABS.map(tab => tab.id) 
    },
    'database': { 
        label: extractCleanLabel(DATABASE_UI_TEXT.title), 
        subTopics: DATABASE_TABS.map(tab => tab.id) 
    },
    'projects': { 
        label: extractCleanLabel(PROJECTS_UI_TEXT.title), 
        subTopics: PROJECTS_TABS.map(tab => tab.id) 
    },
    'introduction': { 
        label: extractCleanLabel(INTRODUCTION_UI_TEXT.title), 
        subTopics: INTRODUCTION_TABS.map(tab => tab.id) 
    },
    'interview-questions': { 
        label: extractCleanLabel(INTERVIEW_QUESTIONS_UI_TEXT.title), 
        subTopics: INTERVIEW_QUESTIONS_TABS.map(tab => tab.id) 
    }
});

// =============================================================================
// MAIN COMPONENT
// =============================================================================

// =============================================================================
// MAIN COMPONENT
// =============================================================================

/**
 * AddQuestionForm - Context-aware modal form for adding questions
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether modal is open
 * @param {Function} props.onClose - Close modal callback
 * @param {Function} props.onSubmit - Form submission callback
 * @param {string} props.studyTopic - Current study topic (auto-detected)
 * @param {string} props.subTopic - Current sub-topic/tab (auto-detected)
 */
const AddQuestionForm = ({ isOpen, onClose, onSubmit, studyTopic, subTopic }) => {
    // =============================================================================
    // STATE MANAGEMENT
    // =============================================================================
    
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        code: '',
        color: 'blue'
    });
    
    const [errors, setErrors] = useState({});
    const modalRef = useRef(null);

    // =============================================================================
    // DYNAMIC CONFIGURATION
    // =============================================================================
    
    // Generate study topics configuration from constants (memoized for performance)
    const studyTopicsConfig = useMemo(() => createStudyTopicsConfig(), []);

    // =============================================================================
    // FORM MANAGEMENT
    // =============================================================================

    // =============================================================================
    // FORM MANAGEMENT
    // =============================================================================
    
    /**
     * Initialize/Reset form with random color when modal opens
     */
    const initializeForm = () => {
        setFormData({
            title: '',
            description: '',
            code: '',
            color: getRandomColor()
        });
        setErrors({});
    };

    /**
     * Handle input field changes and clear related errors
     */
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    /**
     * Validate form fields and return validation status
     * @returns {boolean} - True if form is valid
     */
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.title.trim()) {
            newErrors.title = 'Question title is required';
        }
        
        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Handle form submission with validation
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const newQuestion = {
                ...formData,
                studyTopic,
                subTopic,
                id: Date.now(),
                timestamp: new Date().toISOString()
            };
            
            onSubmit(newQuestion);
            initializeForm();
            onClose();
        }
    };

    // =============================================================================
    // EFFECTS
    // =============================================================================

    // =============================================================================
    // EFFECTS
    // =============================================================================
    
    /**
     * Initialize form when modal opens
     */
    useEffect(() => {
        if (isOpen) {
            initializeForm();
        }
    }, [isOpen]);

    /**
     * Handle click outside modal to close
     */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
            
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
                document.body.style.overflow = 'auto';
            };
        }
    }, [isOpen, onClose]);

    /**
     * Handle escape key to close modal
     */
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            return () => document.removeEventListener('keydown', handleEscape);
        }
    }, [isOpen, onClose]);

    // =============================================================================
    // RENDER HELPERS
    // =============================================================================
    
    /**
     * Capitalize first letter of string
     */
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    // Early return if modal is closed
    if (!isOpen) return null;

    // =============================================================================
    // RENDER
    // =============================================================================

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div 
                ref={modalRef}
                className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Add New Question</h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Create a new question for the study topics
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg p-2"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    
                    {/* Question Title Field */}
                    <div>
                        <label 
                            htmlFor="title" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Question Title *
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="e.g., 📊 Array Methods - Filter and Map"
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-colors ${
                                errors.title ? 'border-red-300' : 'border-gray-300'
                            }`}
                        />
                        {errors.title && (
                            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                        )}
                    </div>

                    {/* Description Field */}
                    <div>
                        <label 
                            htmlFor="description" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Description/Answer *
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder="Provide a detailed explanation or answer. You can use HTML for formatting."
                            className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transition-colors ${
                                errors.description ? 'border-red-300' : 'border-gray-300'
                            }`}
                        />
                        {errors.description && (
                            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                        )}
                    </div>

                    {/* Code Example Field */}
                    <div>
                        <label 
                            htmlFor="code" 
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Code Example (Optional)
                        </label>
                        <textarea
                            id="code"
                            name="code"
                            value={formData.code}
                            onChange={handleInputChange}
                            rows={6}
                            placeholder="// Add your code example here
const example = () => {
    return 'Hello World';
};"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 font-mono text-sm transition-colors"
                        />
                    </div>

                    {/* Current Context Display */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h3 className="text-blue-800 font-semibold mb-2">
                            📍 Adding Question To:
                        </h3>
                        <div className="flex items-center text-blue-700">
                            <span className="font-medium">
                                {studyTopicsConfig[studyTopic]?.label || studyTopic}
                            </span>
                            <span className="mx-2">→</span>
                            <span className="font-medium">
                                {capitalize(subTopic)}
                            </span>
                        </div>
                        <p className="text-blue-600 text-xs mt-1">
                            Auto-detected from current tab
                        </p>
                    </div>

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
                        >
                            Add Question
                        </button>
                        <button
                            type="button"
                            onClick={initializeForm}
                            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
                        >
                            Reset Form
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 bg-gray-100 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddQuestionForm;
