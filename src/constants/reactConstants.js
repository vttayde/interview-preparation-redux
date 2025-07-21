// =============================================================================
// REACT PAGE CONSTANTS  
// =============================================================================

export const REACT_STUDY_DATA = {
  "Components": [
    {
      id: 1,
      question: "What are React components?",
      answer: "Components are independent, reusable pieces of UI. They can be functional or class-based.",
      code: `// Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Class Component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Using components
function App() {
  return (
    <div>
      <Welcome name="John" />
      <Welcome name="Jane" />
    </div>
  );
}`
    }
  ],
  "Hooks": [
    {
      id: 2,
      question: "What is useState hook?",
      answer: "useState allows you to add state to functional components. It returns current state and a setter function.",
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`
    }
  ]
};
