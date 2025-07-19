/**
 * useForm - Advanced custom hook for Redux-based form state management
 * 
 * This hook provides a comprehensive interface for managing form state with Redux,
 * including form values, validation errors, submission state, and validation rules.
 * 
 * @example
 * // Basic usage
 * const { formData, errors, handleChange, handleSubmit, reset } = useForm({
 *   name: '',
 *   email: '',
 *   password: ''
 * });
 * 
 * @example
 * // With validation
 * const { formData, errors, handleChange, handleSubmit } = useForm(
 *   { email: '', password: '' },
 *   {
 *     email: (value) => !value ? 'Email is required' : 
 *            !value.includes('@') ? 'Invalid email format' : null,
 *     password: (value) => !value ? 'Password is required' : 
 *               value.length < 8 ? 'Password must be at least 8 characters' : null
 *   }
 * );
 */
import { useDispatch, useSelector } from 'react-redux';
import { 
  setFormData, 
  setValidationErrors,
  clearFormData, 
  setSubmitting,
  setSubmitted 
} from '../features/form/formSlice';
import { useCallback } from 'react';

/**
 * Custom hook for comprehensive form handling with Redux
 * 
 * @param {Object} initialState - Initial form state with field names as keys
 * @param {Object} validationRules - Optional validation rules as functions for each field
 * @returns {Object} Form handling methods and state
 * @property {Object} formData - Current form data values
 * @property {Object} errors - Current validation errors by field name
 * @property {boolean} isSubmitting - Whether the form is currently submitting
 * @property {boolean} submitted - Whether the form has been successfully submitted
 * @property {Function} handleChange - Event handler for form input changes
 * @property {Function} handleSubmit - Form submission handler that performs validation
 * @property {Function} validateField - Function to validate a specific field
 * @property {Function} validateForm - Function to validate all form fields
 * @property {Function} setError - Function to set an error for a specific field
 * @property {Function} clearErrors - Function to clear all validation errors
 * @property {Function} reset - Function to reset form to initial state
 * @property {Function} setFormData - Function to directly update form data
 */
export const useForm = (initialState = {}, validationRules = {}) => {
    const dispatch = useDispatch();
    const formData = useSelector(state => state.form.formData);
    const errors = useSelector(state => state.form.validationErrors);
    const isSubmitting = useSelector(state => state.form.isSubmitting);
    const submitted = useSelector(state => state.form.submitted);

    /**
     * Handle form input changes
     * @param {Event} e - Change event from form input
     */
    const handleChange = useCallback(e => {
        const { name, value, type, checked } = e.target;
        // Handle different input types appropriately
        const inputValue = type === 'checkbox' ? checked : value;
        
        dispatch(setFormData({ [name]: inputValue }));
        
        // Clear error when user starts typing
        if (errors && errors[name]) {
            // Create a new errors object without the current field
            const updatedErrors = { ...errors };
            delete updatedErrors[name];
            dispatch(setValidationErrors(updatedErrors));
        }
        
        // Validate field if validation rule exists
        if (validationRules[name]) {
            const fieldError = validationRules[name](inputValue, formData);
            if (fieldError) {
                dispatch(setValidationErrors({ ...errors, [name]: fieldError }));
            }
        }
    }, [dispatch, errors, formData, validationRules]);

    /**
     * Validate a specific field
     * @param {string} fieldName - Name of the field to validate
     * @returns {string|null} Error message or null if valid
     */
    const validateField = useCallback((fieldName) => {
        if (!validationRules[fieldName]) return null;
        
        const fieldValue = formData[fieldName];
        const fieldError = validationRules[fieldName](fieldValue, formData);
        
        if (fieldError) {
            dispatch(setValidationErrors({ ...errors, [fieldName]: fieldError }));
            return fieldError;
        }
        
        return null;
    }, [dispatch, errors, formData, validationRules]);

    /**
     * Validate all form fields
     * @returns {boolean} Whether the form is valid
     */
    const validateForm = useCallback(() => {
        const newErrors = {};
        let isValid = true;

        // Check each field with a validation rule
        Object.keys(validationRules).forEach(field => {
            if (validationRules[field]) {
                const fieldError = validationRules[field](formData[field], formData);
                if (fieldError) {
                    newErrors[field] = fieldError;
                    isValid = false;
                }
            }
        });

        if (!isValid) {
            dispatch(setValidationErrors(newErrors));
        }

        return isValid;
    }, [dispatch, formData, validationRules]);

    /**
     * Handle form submission with validation
     * @param {Function} onSubmit - Function to call with form data if valid
     * @returns {Function} Form submit event handler
     */
    const handleSubmit = useCallback((onSubmit) => async (e) => {
        e.preventDefault();
        
        dispatch(setSubmitting(true));
        
        // Validate all fields before submission
        const isValid = validateForm();
        
        if (isValid) {
            try {
                await onSubmit(formData);
                dispatch(setSubmitted(true));
            } catch (error) {
                console.error('Form submission error:', error);
                // You might want to set a general form error here
            } finally {
                dispatch(setSubmitting(false));
            }
        } else {
            dispatch(setSubmitting(false));
        }
    }, [dispatch, formData, validateForm]);

    /**
     * Set validation error for a specific field
     * @param {string} field - Field name
     * @param {string} message - Error message
     */
    const setError = useCallback((field, message) => {
        dispatch(setValidationErrors({ 
            ...errors, 
            [field]: message 
        }));
    }, [dispatch, errors]);

    /**
     * Clear all validation errors
     */
    const clearErrors = useCallback(() => {
        dispatch(setValidationErrors({}));
    }, [dispatch]);

    /**
     * Reset form to initial state
     */
    const reset = useCallback(() => {
        dispatch(clearFormData());
        if (initialState && Object.keys(initialState).length > 0) {
            dispatch(setFormData(initialState));
        }
        dispatch(setSubmitted(false));
    }, [dispatch, initialState]);

    /**
     * Directly update form data (useful for programmatic updates)
     * @param {Object} data - New form data to merge with existing data
     */
    const updateFormData = useCallback((data) => {
        dispatch(setFormData(data));
    }, [dispatch]);

    return {
        formData,
        errors,
        isSubmitting,
        submitted,
        handleChange,
        handleSubmit,
        validateField,
        validateForm,
        setError,
        clearErrors,
        reset,
        updateFormData,
        setFormData: updateFormData,
        setSubmitting: useCallback((isSubmitting) => dispatch(setSubmitting(isSubmitting)), [dispatch]),
        setSubmitted: useCallback((isSubmitted) => dispatch(setSubmitted(isSubmitted)), [dispatch])
    };
};

export default useForm;
