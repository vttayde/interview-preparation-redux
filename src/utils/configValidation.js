/**
 * Utility functions for validating study topic constants
 * Helps prevent runtime errors and ensures consistent data structure
 */

/**
 * Validates tab structure
 * @param {Array} tabs - Array of tab objects
 * @returns {Object} - Validation result
 */
export const validateTabs = (tabs) => {
    const errors = [];
    
    if (!Array.isArray(tabs)) {
        errors.push('Tabs must be an array');
        return { isValid: false, errors };
    }
    
    if (tabs.length === 0) {
        errors.push('Tabs array cannot be empty');
    }
    
    tabs.forEach((tab, index) => {
        if (!tab.id) {
            errors.push(`Tab at index ${index} missing required 'id' property`);
        }
        if (!tab.name) {
            errors.push(`Tab at index ${index} missing required 'name' property`);
        }
        if (!tab.icon) {
            errors.push(`Tab at index ${index} missing required 'icon' property`);
        }
        if (typeof tab.id !== 'string') {
            errors.push(`Tab at index ${index} 'id' must be a string`);
        }
    });
    
    // Check for duplicate IDs
    const ids = tabs.map(tab => tab.id).filter(Boolean);
    const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicateIds.length > 0) {
        errors.push(`Duplicate tab IDs found: ${duplicateIds.join(', ')}`);
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
};

/**
 * Validates UI text structure
 * @param {Object} uiText - UI text object
 * @returns {Object} - Validation result
 */
export const validateUIText = (uiText) => {
    const errors = [];
    
    if (!uiText || typeof uiText !== 'object') {
        errors.push('UIText must be an object');
        return { isValid: false, errors };
    }
    
    if (!uiText.title || typeof uiText.title !== 'string') {
        errors.push('UIText must have a title property as string');
    }
    
    if (!uiText.description || typeof uiText.description !== 'string') {
        errors.push('UIText must have a description property as string');
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
};

/**
 * Validates content structure
 * @param {Object} content - Content object
 * @param {Array} tabs - Tabs array for cross-validation
 * @returns {Object} - Validation result
 */
export const validateContent = (content, tabs = []) => {
    const errors = [];
    
    if (!content || typeof content !== 'object') {
        errors.push('Content must be an object');
        return { isValid: false, errors };
    }
    
    // Check if all tab IDs have corresponding content
    const tabIds = tabs.map(tab => tab.id);
    
    tabIds.forEach(tabId => {
        if (!content[tabId]) {
            errors.push(`Missing content for tab ID: ${tabId}`);
        }
    });
    
    // Validate each content section
    Object.entries(content).forEach(([key, items]) => {
        if (!Array.isArray(items)) {
            errors.push(`Content for '${key}' must be an array`);
            return;
        }
        
        items.forEach((item, index) => {
            if (!item.id) {
                errors.push(`Content item at ${key}[${index}] missing 'id' property`);
            }
            if (!item.title) {
                errors.push(`Content item at ${key}[${index}] missing 'title' property`);
            }
            if (!item.description) {
                errors.push(`Content item at ${key}[${index}] missing 'description' property`);
            }
            if (!item.color) {
                errors.push(`Content item at ${key}[${index}] missing 'color' property`);
            }
        });
    });
    
    return {
        isValid: errors.length === 0,
        errors
    };
};

/**
 * Validates complete study topic configuration
 * @param {Object} config - Configuration object with tabs, uiText, and content
 * @returns {Object} - Validation result with details
 */
export const validateStudyTopicConfig = (config) => {
    const { tabs, uiText, content } = config;
    const allErrors = [];
    
    // Validate each section
    const tabValidation = validateTabs(tabs);
    const uiTextValidation = validateUIText(uiText);
    const contentValidation = validateContent(content, tabs);
    
    // Collect all errors
    if (!tabValidation.isValid) {
        allErrors.push(...tabValidation.errors.map(err => `Tabs: ${err}`));
    }
    
    if (!uiTextValidation.isValid) {
        allErrors.push(...uiTextValidation.errors.map(err => `UIText: ${err}`));
    }
    
    if (!contentValidation.isValid) {
        allErrors.push(...contentValidation.errors.map(err => `Content: ${err}`));
    }
    
    return {
        isValid: allErrors.length === 0,
        errors: allErrors,
        details: {
            tabs: tabValidation,
            uiText: uiTextValidation,
            content: contentValidation
        }
    };
};

/**
 * Development helper to log validation errors
 * @param {string} componentName - Name of the component being validated
 * @param {Object} config - Configuration to validate
 */
export const validateAndLog = (componentName, config) => {
    const validation = validateStudyTopicConfig(config);
    
    if (!validation.isValid) {
        console.group(`⚠️ Configuration Issues in ${componentName}`);
        validation.errors.forEach(error => console.warn(error));
        console.groupEnd();
    } else {
        console.log(`✅ ${componentName} configuration is valid`);
    }
    
    return validation;
};

/**
 * Create a wrapper that validates props before rendering
 * Usage: const ValidatedComponent = withConfigValidation(MyComponent);
 */
export const withConfigValidation = (/* ComponentToWrap */) => {
    // Note: This is a development utility for HOC pattern demonstration
    // In practice, use validateAndLog in component constructor or useEffect
    return function ValidatedWrapper(props) {
        const { tabs, uiText, content } = props;
        
        // Validate configuration in development
        const isDevelopment = import.meta.env?.DEV || false;
        
        if (isDevelopment) {
            const validation = validateStudyTopicConfig({ tabs, uiText, content });
            
            if (!validation.isValid) {
                console.error('Study Topic Configuration Errors:', validation.errors);
                
                return (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 m-4">
                        <h2 className="text-red-800 font-semibold mb-2">Configuration Error</h2>
                        <ul className="text-red-600 text-sm space-y-1">
                            {validation.errors.map((error, index) => (
                                <li key={index}>• {error}</li>
                            ))}
                        </ul>
                    </div>
                );
            }
        }
        
        // In practice, you would return <ComponentToWrap {...props} />
        // For now, return a placeholder since this is a utility demonstration
        return <div>Component would render here with validated props</div>;
    };
};
