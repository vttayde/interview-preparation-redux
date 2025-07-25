/**
 * Code generation templates for study topics
 * Helps maintain consistency across all study topic components
 */

/**
 * Generate a complete study topic component
 * @param {Object} config - Configuration object
 * @param {string} config.componentName - Name of the component (e.g., 'ReactJS')
 * @param {string} config.topicName - Display name (e.g., 'React.js')
 * @param {string} config.constantsFile - Constants file name (e.g., 'ReactTabConstant')
 * @param {string} config.description - Brief description of the topic
 */
export const generateStudyTopicComponent = (config) => {
    const { componentName, topicName, description } = config;
    
    return `import StudyTopicLayout from '../../components/layout/StudyTopicLayout';
import { 
    ${componentName.toUpperCase()}_TABS, 
    ${componentName.toUpperCase()}_UI_TEXT, 
    ${componentName.toUpperCase()}_CONTENT 
} from '../../../constants';

/**
 * ${topicName} study topic component
 * ${description}
 */
const ${componentName} = () => {
    return (
        <StudyTopicLayout
            tabs={${componentName.toUpperCase()}_TABS}
            uiText={${componentName.toUpperCase()}_UI_TEXT}
            content={${componentName.toUpperCase()}_CONTENT}
        />
    );
};

export default ${componentName};`;
};

/**
 * Generate constants file structure
 * @param {Object} config - Configuration object
 * @param {string} config.topicName - Display name
 * @param {string} config.description - Topic description
 * @param {Array} config.tabs - Tab definitions
 * @param {Array} config.contentSections - Content sections
 */
export const generateConstantsFile = (config) => {
    const { topicName, description, tabs, contentSections } = config;
    const constantPrefix = topicName.toUpperCase().replace(/[^A-Z]/g, '');
    
    const tabsCode = `export const ${constantPrefix}_TABS = ${JSON.stringify(tabs, null, 4)};`;
    
    const uiTextCode = `export const ${constantPrefix}_UI_TEXT = {
    title: "${topicName}",
    description: "${description}"
};`;
    
    const contentCode = contentSections.map(section => {
        return `    ${section.id}: ${JSON.stringify(section.items, null, 8)}`;
    }).join(',\n');
    
    const contentObject = `export const ${constantPrefix}_CONTENT = {
${contentCode}
};`;
    
    return `/**
 * ${topicName} study topic constants
 * ${description}
 */

${tabsCode}

${uiTextCode}

${contentObject}`;
};

/**
 * Generate test file for study topic component
 * @param {Object} config - Configuration object
 * @param {string} config.componentName - Component name
 * @param {string} config.topicName - Display name
 */
export const generateTestFile = (config) => {
    const { componentName, topicName } = config;
    
    return `import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ${componentName} from './${componentName}';

describe('${componentName}', () => {
    it('renders ${topicName} study topic', () => {
        render(<${componentName} />);
        expect(screen.getByText('${topicName}')).toBeInTheDocument();
    });
    
    it('renders all tabs', () => {
        render(<${componentName} />);
        
        // Check that tabs are rendered
        const tabList = screen.getByRole('tablist');
        expect(tabList).toBeInTheDocument();
    });
    
    it('handles tab switching', () => {
        render(<${componentName} />);
        
        const tabs = screen.getAllByRole('tab');
        if (tabs.length > 1) {
            fireEvent.click(tabs[1]);
            expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
        }
    });
    
    it('renders content for active tab', () => {
        render(<${componentName} />);
        
        // Should have content displayed
        const contentArea = screen.getByTestId('tab-content');
        expect(contentArea).toBeInTheDocument();
    });
    
    it('handles Try Code button clicks', () => {
        render(<${componentName} />);
        
        const tryCodeButtons = screen.getAllByText('Try Code');
        if (tryCodeButtons.length > 0) {
            fireEvent.click(tryCodeButtons[0]);
            // Should open terminal
            expect(screen.getByTestId('code-terminal')).toBeInTheDocument();
        }
    });
});`;
};

/**
 * Generate README documentation for study topic
 * @param {Object} config - Configuration object
 */
export const generateReadmeFile = (config) => {
    const { componentName, topicName, description, tabs } = config;
    
    const tabsList = tabs.map(tab => `- **${tab.name}**: ${tab.description || 'Core concepts and examples'}`).join('\n');
    
    return `# ${topicName} Study Topic

${description}

## Component Structure

### Location
\`src/pages/study-topics/${componentName.toLowerCase()}/${componentName}.jsx\`

### Dependencies
- \`StudyTopicLayout\` - Reusable layout component
- \`${componentName.toUpperCase()}_TABS\` - Tab definitions
- \`${componentName.toUpperCase()}_UI_TEXT\` - UI text constants
- \`${componentName.toUpperCase()}_CONTENT\` - Learning content

## Tabs Available

${tabsList}

## Features

- ✅ Interactive tabs for different ${topicName} concepts
- ✅ Code examples with syntax highlighting
- ✅ Try Code functionality with integrated terminal
- ✅ Responsive design
- ✅ Keyboard navigation support
- ✅ Accessibility features (ARIA labels, semantic HTML)

## Usage

\`\`\`jsx
import ${componentName} from './pages/study-topics/${componentName.toLowerCase()}/${componentName}';

function App() {
    return <${componentName} />;
}
\`\`\`

## Content Structure

Each content item follows this structure:

\`\`\`javascript
{
    id: 'unique-identifier',
    title: 'Content Title',
    description: 'Content description',
    color: 'bg-color-class',
    code: 'code-example' // optional
}
\`\`\`

## Adding New Content

1. Update the constants file: \`src/constants/${componentName}TabConstant.js\`
2. Add new items to the appropriate content section
3. Include code examples where applicable
4. Test the component to ensure proper rendering

## Performance Considerations

- Uses React.memo for optimization
- Implements proper dependency arrays in useEffect
- Memoizes expensive computations
- Supports code splitting with React.lazy

## Accessibility

- Full keyboard navigation
- ARIA labels and roles
- Semantic HTML structure
- Screen reader support
- High contrast support

## Testing

Run tests with:
\`\`\`bash
npm test ${componentName}.test.jsx
\`\`\`

Test coverage includes:
- Component rendering
- Tab functionality
- Content display
- User interactions
- Accessibility features`;
};

/**
 * Template for creating a complete study topic package
 * @param {Object} config - Complete configuration
 */
export const generateCompletePackage = (config) => {
    return {
        component: generateStudyTopicComponent(config),
        constants: generateConstantsFile(config),
        test: generateTestFile(config),
        readme: generateReadmeFile(config)
    };
};

/**
 * Predefined templates for common study topics
 */
export const STUDY_TOPIC_TEMPLATES = {
    frontend: {
        componentName: 'Frontend',
        topicName: 'Frontend Development',
        constantsFile: 'FrontendTabConstant',
        description: 'Modern frontend development concepts, tools, and best practices',
        tabs: [
            { id: 'basics', name: 'Basics', icon: '🌟' },
            { id: 'frameworks', name: 'Frameworks', icon: '⚛️' },
            { id: 'tools', name: 'Tools', icon: '🛠️' },
            { id: 'performance', name: 'Performance', icon: '⚡' }
        ],
        contentSections: [
            {
                id: 'basics',
                items: [
                    {
                        id: 'html-semantics',
                        title: 'HTML Semantics',
                        description: 'Understanding semantic HTML elements and their importance',
                        color: 'bg-orange-100'
                    }
                ]
            }
        ]
    },
    
    backend: {
        componentName: 'Backend',
        topicName: 'Backend Development',
        constantsFile: 'BackendTabConstant',
        description: 'Server-side development, APIs, databases, and architecture patterns',
        tabs: [
            { id: 'fundamentals', name: 'Fundamentals', icon: '🏗️' },
            { id: 'apis', name: 'APIs', icon: '🔌' },
            { id: 'databases', name: 'Databases', icon: '🗄️' },
            { id: 'security', name: 'Security', icon: '🔒' }
        ],
        contentSections: [
            {
                id: 'fundamentals',
                items: [
                    {
                        id: 'server-concepts',
                        title: 'Server Concepts',
                        description: 'Understanding client-server architecture and HTTP',
                        color: 'bg-blue-100'
                    }
                ]
            }
        ]
    },
    
    testing: {
        componentName: 'Testing',
        topicName: 'Software Testing',
        constantsFile: 'TestingTabConstant',
        description: 'Testing strategies, frameworks, and best practices for quality assurance',
        tabs: [
            { id: 'unit', name: 'Unit Testing', icon: '🧪' },
            { id: 'integration', name: 'Integration', icon: '🔗' },
            { id: 'e2e', name: 'E2E Testing', icon: '🎯' },
            { id: 'tools', name: 'Tools', icon: '🛠️' }
        ],
        contentSections: [
            {
                id: 'unit',
                items: [
                    {
                        id: 'unit-basics',
                        title: 'Unit Testing Basics',
                        description: 'Writing effective unit tests with Jest and Testing Library',
                        color: 'bg-green-100'
                    }
                ]
            }
        ]
    }
};

/**
 * Generate files for a study topic using a template
 * @param {string} templateName - Name of the template to use
 * @param {Object} overrides - Custom configuration overrides
 */
export const generateFromTemplate = (templateName, overrides = {}) => {
    const template = STUDY_TOPIC_TEMPLATES[templateName];
    if (!template) {
        throw new Error(`Template "${templateName}" not found`);
    }
    
    const config = { ...template, ...overrides };
    return generateCompletePackage(config);
};

/**
 * Utility to create file structure for a new study topic
 * @param {string} templateName - Template to use
 * @param {Object} config - Configuration overrides
 */
export const createStudyTopicFiles = (templateName, config = {}) => {
    const files = generateFromTemplate(templateName, config);
    const componentName = config.componentName || STUDY_TOPIC_TEMPLATES[templateName].componentName;
    
    return {
        [`src/pages/study-topics/${componentName.toLowerCase()}/${componentName}.jsx`]: files.component,
        [`src/constants/${componentName}TabConstant.js`]: files.constants,
        [`src/pages/study-topics/${componentName.toLowerCase()}/${componentName}.test.jsx`]: files.test,
        [`src/pages/study-topics/${componentName.toLowerCase()}/README.md`]: files.readme
    };
};
