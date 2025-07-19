/**
 * Form Slice
 * 
 * This Redux slice handles sophisticated form state management including:
 * - Form data tracking for multiple forms
 * - Field-level and form-level validation errors
 * - Form submission state and history
 * - Form reset and initialization functionality
 * - Form metadata tracking (dirty state, touched fields, etc.)
 * 
 * Part of the feature-based architecture recommended by Redux Toolkit.
 */
import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial form state
 * @typedef {Object} FormState
 * @property {Object} formData - Current form values
 * @property {Object} validationErrors - Validation errors by field name
 * @property {boolean} isSubmitting - Whether form submission is in progress
 * @property {boolean} submitted - Whether form was successfully submitted
 * @property {Array} touchedFields - Fields that user has interacted with
 * @property {boolean} isDirty - Whether form has been modified from initial state
 */
const initialState = {
  formData: {},            // Holds the current form data values
  validationErrors: {},    // Validation error messages by field name
  isSubmitting: false,     // Whether a form is currently being submitted
  submitted: false,        // Whether a form has been successfully submitted
  touchedFields: [],       // Fields the user has interacted with
  isDirty: false           // Whether the form has been modified
};

/**
 * Form slice that manages form state through Redux
 */
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    /**
     * Update form data with new values
     * @param {FormState} state - Current form state
     * @param {Object} action - Action with payload of new form values
     */
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
      
      // Mark form as dirty when data is modified
      state.isDirty = true;
      
      // Track touched fields
      const updatedFields = Object.keys(action.payload);
      updatedFields.forEach(field => {
        // Add field to touchedFields if not already present
        if (!state.touchedFields.includes(field)) {
          state.touchedFields.push(field);
        }
        
        // Clear validation errors for updated fields
        if (state.validationErrors[field]) {
          delete state.validationErrors[field];
        }
      });
    },
    
    /**
     * Set validation errors for form fields
     * @param {FormState} state - Current form state
     * @param {Object} action - Action with payload of error messages by field
     */
    setValidationErrors: (state, action) => {
      state.validationErrors = action.payload;
    },
    
    /**
     * Reset the form to its initial empty state
     * @param {FormState} state - Current form state
     */
    clearFormData: (state) => {
      state.formData = {};
      state.validationErrors = {};
      state.submitted = false;
      state.touchedFields = [];
      state.isDirty = false;
    },
    
    /**
     * Update form submission status
     * @param {FormState} state - Current form state
     * @param {Object} action - Action with boolean payload
     */
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    
    /**
     * Mark form as submitted
     * @param {FormState} state - Current form state
     * @param {Object} action - Action with boolean payload
     */
    setSubmitted: (state, action) => {
      state.submitted = action.payload;
      
      // When form is successfully submitted, it's no longer dirty
      if (action.payload === true) {
        state.isDirty = false;
      }
    },
    
    /**
     * Mark specific fields as touched
     * @param {FormState} state - Current form state
     * @param {Object} action - Action with array of field names
     */
    setTouchedFields: (state, action) => {
      const fieldsToAdd = action.payload.filter(
        field => !state.touchedFields.includes(field)
      );
      
      state.touchedFields = [...state.touchedFields, ...fieldsToAdd];
    },
    
    /**
     * Reset dirty state flag
     * @param {FormState} state - Current form state
     * @param {Object} action - Action with boolean payload
     */
    setDirty: (state, action) => {
      state.isDirty = action.payload;
    }
  }
});

export const { 
  setFormData, 
  setValidationErrors,
  clearFormData, 
  setSubmitting,
  setSubmitted,
  setTouchedFields,
  setDirty
} = formSlice.actions;

/**
 * Common form validation utility functions
 */
export const validators = {
  /**
   * Check if a value is not empty
   * @param {string} value - Value to check
   * @param {string} message - Custom error message
   * @returns {string|null} Error message or null if valid
   */
  required: (value, message = 'This field is required') => 
    !value && value !== 0 ? message : null,
  
  /**
   * Check if a value is a valid email format
   * @param {string} value - Value to check
   * @param {string} message - Custom error message
   * @returns {string|null} Error message or null if valid
   */
  email: (value, message = 'Invalid email format') => 
    value && !/\S+@\S+\.\S+/.test(value) ? message : null,
  
  /**
   * Check if a value meets minimum length requirement
   * @param {number} min - Minimum length
   * @param {string} message - Custom error message
   * @returns {Function} Validator function
   */
  minLength: (min, message) => (value) => 
    value && value.length < min ? (message || `Must be at least ${min} characters`) : null,
  
  /**
   * Check if a value meets maximum length requirement
   * @param {number} max - Maximum length
   * @param {string} message - Custom error message
   * @returns {Function} Validator function
   */
  maxLength: (max, message) => (value) => 
    value && value.length > max ? (message || `Cannot exceed ${max} characters`) : null,
  
  /**
   * Combine multiple validators
   * @param {...Function} validators - Validator functions to combine
   * @returns {Function} Combined validator function
   */
  compose: (...validators) => (value) => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return null;
  }
};

export default formSlice.reducer;
