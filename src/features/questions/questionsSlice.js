import { createSlice } from '@reduxjs/toolkit';
import { loadQuestionsFromStorage, saveQuestionsToStorage } from '../../utils/questionsStorage';

/**
 * Redux slice for managing user-added questions with localStorage persistence
 */
const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        userQuestions: loadQuestionsFromStorage(), // Load from storage
        isLoading: false,
        error: null
    },
    reducers: {
        addQuestion: (state, action) => {
            const { studyTopic, subTopic, ...questionData } = action.payload;
            
            // Initialize nested structure if it doesn't exist
            if (!state.userQuestions[studyTopic]) {
                state.userQuestions[studyTopic] = {};
            }
            if (!state.userQuestions[studyTopic][subTopic]) {
                state.userQuestions[studyTopic][subTopic] = [];
            }
            
            // Add the new question
            state.userQuestions[studyTopic][subTopic].push({
                ...questionData,
                id: questionData.id || Date.now(),
                createdAt: new Date().toISOString(),
                isUserAdded: true // Flag to identify user-added questions
            });
            
            // Save to localStorage
            saveQuestionsToStorage(state.userQuestions);
        },
        
        removeQuestion: (state, action) => {
            const { studyTopic, subTopic, questionId } = action.payload;
            
            if (state.userQuestions[studyTopic]?.[subTopic]) {
                state.userQuestions[studyTopic][subTopic] = 
                    state.userQuestions[studyTopic][subTopic].filter(
                        question => question.id !== questionId
                    );
            }
            
            // Save to localStorage
            saveQuestionsToStorage(state.userQuestions);
        },
        
        updateQuestion: (state, action) => {
            const { studyTopic, subTopic, questionId, updates } = action.payload;
            
            if (state.userQuestions[studyTopic]?.[subTopic]) {
                const questionIndex = state.userQuestions[studyTopic][subTopic]
                    .findIndex(question => question.id === questionId);
                    
                if (questionIndex !== -1) {
                    state.userQuestions[studyTopic][subTopic][questionIndex] = {
                        ...state.userQuestions[studyTopic][subTopic][questionIndex],
                        ...updates,
                        updatedAt: new Date().toISOString()
                    };
                }
            }
            
            // Save to localStorage
            saveQuestionsToStorage(state.userQuestions);
        },
        
        clearAllQuestions: (state) => {
            state.userQuestions = {};
            // Save to localStorage
            saveQuestionsToStorage(state.userQuestions);
        },
        
        clearTopicQuestions: (state, action) => {
            const { studyTopic } = action.payload;
            if (state.userQuestions[studyTopic]) {
                delete state.userQuestions[studyTopic];
            }
            // Save to localStorage
            saveQuestionsToStorage(state.userQuestions);
        },
        
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const {
    addQuestion,
    removeQuestion,
    updateQuestion,
    clearAllQuestions,
    clearTopicQuestions,
    setLoading,
    setError
} = questionsSlice.actions;

// Selectors
export const selectUserQuestions = (state) => state.questions.userQuestions;
export const selectQuestionsByTopic = (state, studyTopic) => 
    state.questions.userQuestions[studyTopic] || {};
export const selectQuestionsBySubTopic = (state, studyTopic, subTopic) => 
    state.questions.userQuestions[studyTopic]?.[subTopic] || [];
export const selectQuestionsLoading = (state) => state.questions.isLoading;
export const selectQuestionsError = (state) => state.questions.error;

// Helper selector to get total count of user questions
export const selectTotalQuestionsCount = (state) => {
    const userQuestions = state.questions.userQuestions;
    let total = 0;
    
    Object.values(userQuestions).forEach(topicQuestions => {
        Object.values(topicQuestions).forEach(subTopicQuestions => {
            total += subTopicQuestions.length;
        });
    });
    
    return total;
};

export default questionsSlice.reducer;
