/**
 * Simple storage utility for user questions
 * Uses localStorage as primary storage with sessionStorage as backup
 */

const STORAGE_KEY = 'interviewQuestions';
const SESSION_KEY = 'interviewQuestions_session';

/**
 * Save questions to both localStorage and sessionStorage
 */
export const saveQuestionsToStorage = (questions) => {
    try {
        const questionsString = JSON.stringify(questions);
        
        // Save to localStorage (primary)
        localStorage.setItem(STORAGE_KEY, questionsString);
        
        // Save to sessionStorage (backup)
        sessionStorage.setItem(SESSION_KEY, questionsString);
        
        return { success: true };
    } catch (error) {
        console.error('Failed to save questions to storage:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Load questions from storage
 * Try localStorage first, then sessionStorage as fallback
 */
export const loadQuestionsFromStorage = () => {
    try {
        // Try localStorage first
        let questionsString = localStorage.getItem(STORAGE_KEY);
        
        // If localStorage is empty, try sessionStorage
        if (!questionsString) {
            questionsString = sessionStorage.getItem(SESSION_KEY);
        }
        
        if (questionsString) {
            const questions = JSON.parse(questionsString);
            
            // If we loaded from sessionStorage, restore to localStorage
            if (!localStorage.getItem(STORAGE_KEY) && questionsString) {
                localStorage.setItem(STORAGE_KEY, questionsString);
            }
            
            return questions;
        }
        
        return {};
    } catch (error) {
        console.error('Failed to load questions from storage:', error);
        return {};
    }
};
