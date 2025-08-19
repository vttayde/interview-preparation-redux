import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import {
    addQuestion,
    removeQuestion,
    updateQuestion,
    clearAllQuestions,
    clearTopicQuestions,
    selectUserQuestions,
    selectTotalQuestionsCount,
    selectQuestionsLoading,
    selectQuestionsError
} from '../features/questions/questionsSlice';

/**
 * Custom hook for managing user-added questions
 * Provides a clean interface for question operations
 */
export const useQuestions = () => {
    const dispatch = useDispatch();
    
    // Selectors
    const userQuestions = useSelector(selectUserQuestions);
    const totalCount = useSelector(selectTotalQuestionsCount);
    const isLoading = useSelector(selectQuestionsLoading);
    const error = useSelector(selectQuestionsError);

    // Actions
    const handleAddQuestion = useCallback((questionData) => {
        try {
            dispatch(addQuestion(questionData));
            return { success: true, message: 'Question added successfully!' };
        } catch (error) {
            console.error('Error adding question:', error);
            return { success: false, message: 'Failed to add question' };
        }
    }, [dispatch]);

    const handleRemoveQuestion = useCallback((studyTopic, subTopic, questionId) => {
        try {
            dispatch(removeQuestion({ studyTopic, subTopic, questionId }));
            return { success: true, message: 'Question removed successfully!' };
        } catch (error) {
            console.error('Error removing question:', error);
            return { success: false, message: 'Failed to remove question' };
        }
    }, [dispatch]);

    const handleUpdateQuestion = useCallback((studyTopic, subTopic, questionId, updates) => {
        try {
            dispatch(updateQuestion({ studyTopic, subTopic, questionId, updates }));
            return { success: true, message: 'Question updated successfully!' };
        } catch (error) {
            console.error('Error updating question:', error);
            return { success: false, message: 'Failed to update question' };
        }
    }, [dispatch]);

    const handleClearAllQuestions = useCallback(() => {
        dispatch(clearAllQuestions());
    }, [dispatch]);

    const handleClearTopicQuestions = useCallback((studyTopic) => {
        dispatch(clearTopicQuestions({ studyTopic }));
    }, [dispatch]);

    // Helper functions to get questions
    const getQuestionsByTopic = useCallback((studyTopic) => {
        return userQuestions[studyTopic] || {};
    }, [userQuestions]);

    const getQuestionsBySubTopic = useCallback((studyTopic, subTopic) => {
        return userQuestions[studyTopic]?.[subTopic] || [];
    }, [userQuestions]);

    // Merge user questions with existing content
    const mergeWithExistingContent = useCallback((existingContent, studyTopic, subTopic) => {
        const userQuestions = getQuestionsBySubTopic(studyTopic, subTopic);
        
        if (userQuestions.length === 0) {
            return existingContent;
        }

        // Add user questions at the beginning with a special marker
        return [
            ...userQuestions.map(question => ({
                ...question,
                isUserAdded: true
            })),
            ...existingContent
        ];
    }, [getQuestionsBySubTopic]);

    // Get statistics
    const getStatistics = useCallback(() => {
        const stats = {
            total: 0,
            byTopic: {}
        };

        Object.entries(userQuestions).forEach(([topic, subTopics]) => {
            stats.byTopic[topic] = 0;
            Object.values(subTopics).forEach(questions => {
                const count = questions.length;
                stats.byTopic[topic] += count;
                stats.total += count;
            });
        });

        return stats;
    }, [userQuestions]);

    return {
        // State
        userQuestions,
        totalCount,
        isLoading,
        error,
        
        // Actions
        addQuestion: handleAddQuestion,
        removeQuestion: handleRemoveQuestion,
        updateQuestion: handleUpdateQuestion,
        clearAllQuestions: handleClearAllQuestions,
        clearTopicQuestions: handleClearTopicQuestions,
        
        // Helpers
        getQuestionsByTopic,
        getQuestionsBySubTopic,
        mergeWithExistingContent,
        getStatistics
    };
};

/**
 * Hook specifically for use in StudyTopicLayout components
 * Automatically merges user questions with existing content
 */
export const useStudyTopicQuestions = (studyTopic, subTopic, existingContent = []) => {
    const { getQuestionsBySubTopic, mergeWithExistingContent } = useQuestions();
    
    const userQuestions = getQuestionsBySubTopic(studyTopic, subTopic);
    const mergedContent = mergeWithExistingContent(existingContent, studyTopic, subTopic);
    
    return {
        userQuestions,
        mergedContent,
        hasUserQuestions: userQuestions.length > 0
    };
};
