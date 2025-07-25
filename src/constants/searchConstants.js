import { HTML_CONTENT } from './HtmlTabConstant';
import { CSS_CONTENT } from './CssTabConstant';
import { JAVASCRIPT_CONTENT } from './JavaScriptTabConstant';
import { REACT_CONTENT } from './ReactTabConstant';
import { TYPESCRIPT_CONTENT } from './TypeScriptTabConstant';
import { NODEJS_CONTENT } from './NodeJSTabConstant';
import { DATABASE_CONTENT } from './DatabaseTabConstant';
import { PROJECTS_CONTENT } from './ProjectsTabConstant';
import { INTRODUCTION_CONTENT } from './IntroductionConstant';
import { INTERVIEW_QUESTIONS_CONTENT } from './interviewQuestionsConstants';

// Content mapping with category information
const CONTENT_MAPPING = [
    { content: HTML_CONTENT, category: 'HTML', path: '/study/html' },
    { content: CSS_CONTENT, category: 'CSS', path: '/study/css' },
    { content: JAVASCRIPT_CONTENT, category: 'JavaScript', path: '/study/javascript' },
    { content: REACT_CONTENT, category: 'React.js', path: '/study/reactjs' },
    { content: TYPESCRIPT_CONTENT, category: 'TypeScript', path: '/study/typescript' },
    { content: NODEJS_CONTENT, category: 'Node.js', path: '/study/nodejs' },
    { content: DATABASE_CONTENT, category: 'Database', path: '/study/database' },
    { content: PROJECTS_CONTENT, category: 'Projects', path: '/study/projects' },
    { content: INTRODUCTION_CONTENT, category: 'Introduction', path: '/study/introduction' },
    { content: INTERVIEW_QUESTIONS_CONTENT, category: 'Interview', path: '/study/interview-questions' }
];

// Function to build search data from existing constants
const buildSearchData = () => {
    const searchData = [];

    // Process each content mapping
    CONTENT_MAPPING.forEach(({ content, category, path }) => {
        if (content && typeof content === 'object') {
            Object.keys(content).forEach(tabKey => {
                const tabContent = content[tabKey];
                if (Array.isArray(tabContent)) {
                    tabContent.forEach(item => {
                        if (item && item.title && item.description) {
                            searchData.push({
                                title: item.title.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '').trim(),
                                description: item.description,
                                category,
                                path,
                                content: `${category.toLowerCase()} ${item.title} ${item.description}`.toLowerCase(),
                                tabKey, // Include tab information for more specific routing if needed
                                itemId: item.id || null
                            });
                        }
                    });
                }
            });
        }
    });

    return searchData;
};

// Dynamic search data built from existing constants
export const SEARCH_DATA = buildSearchData();

// Search configuration constants
export const SEARCH_CONFIG = {
    MAX_RESULTS: 10,
    DEBOUNCE_DELAY: 300,
    DROPDOWN_RESULTS: 5
};
