// =============================================================================
// CONSTANTS INDEX - CENTRALIZED IMPORTS
// =============================================================================
// This file provides a single point of import for all constants
// Reduces import complexity and improves maintainability

// Study Topics Constants
export {
    REACT_TABS,
    REACT_UI_TEXT,
    REACT_CONTENT
} from './ReactTabConstant';

export {
    TYPESCRIPT_TABS,
    TYPESCRIPT_UI_TEXT,
    TYPESCRIPT_CONTENT
} from './TypeScriptTabConstant';

export {
    NODEJS_TABS,
    NODEJS_UI_TEXT,
    NODEJS_CONTENT
} from './NodeJSTabConstant';

export {
    JAVASCRIPT_TABS,
    JAVASCRIPT_UI_TEXT,
    JAVASCRIPT_CONTENT
} from './JavaScriptTabConstant';

export {
    HTML_TABS,
    HTML_UI_TEXT,
    HTML_CONTENT
} from './HtmlTabConstant';

export {
    CSS_TABS,
    CSS_UI_TEXT,
    CSS_CONTENT
} from './CssTabConstant';

export {
    DATABASE_TABS,
    DATABASE_UI_TEXT,
    DATABASE_CONTENT
} from './DatabaseTabConstant';

export {
    PROJECTS_TABS,
    PROJECTS_UI_TEXT,
    PROJECTS_CONTENT
} from './ProjectsTabConstant';

export {
    INTERVIEW_QUESTIONS_TABS,
    INTERVIEW_QUESTIONS_CONTENT,
    INTERVIEW_QUESTIONS_UI_TEXT
} from './interviewQuestionsConstants';

export {
    INTRODUCTION_TABS,
    INTRODUCTION_UI_TEXT,
    INTRODUCTION_CONTENT
} from './IntroductionConstant';

// Dashboard Constants
export {
    DASHBOARD_STUDY_TOPICS,
    DASHBOARD_UI_TEXT,
    colorMap
} from './dashboardConstants';

// Study Navigation Constants
export {
    STUDY_TOPICS
} from './studyNavigationConstants';

// ==============================================================================
// CONSTANTS STRUCTURE DOCUMENTATION
// ==============================================================================
/*
This file centralizes all constants imports for better maintainability.

Standard structure for study topic constants:
- TABS: Array of { id, name, icon }
- UI_TEXT: Object with { title, description }  
- CONTENT: Object mapping tab IDs to content arrays

Content items structure:
- id: unique identifier
- title: display title
- description: HTML content description
- color: CSS color class
- code: optional code example
*/
