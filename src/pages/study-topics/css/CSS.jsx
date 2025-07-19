const CSS = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">CSS</h1>
        <p className="mt-2 text-gray-600">Cascading Style Sheets - Styling and layout for web pages</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is CSS?</h2>
          <p className="text-gray-600 mb-4">
            CSS is a stylesheet language used to describe the presentation of HTML documents. 
            It controls layout, colors, fonts, spacing, and visual effects.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Selectors</h4>
              <p className="text-blue-700 text-sm">Target elements: .class, #id, element, attribute selectors</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Box Model</h4>
              <p className="text-green-700 text-sm">Content, padding, border, margin structure</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Flexbox</h4>
              <p className="text-yellow-700 text-sm">One-dimensional layout method for flexible layouts</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Grid</h4>
              <p className="text-purple-700 text-sm">Two-dimensional layout system for complex designs</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Layout Techniques</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Positioning</h4>
              <p className="text-gray-600 text-sm">Static, relative, absolute, fixed, sticky positioning</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">Responsive Design</h4>
              <p className="text-gray-600 text-sm">Media queries, viewport meta tag, flexible grids</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">CSS Animations</h4>
              <p className="text-gray-600 text-sm">Transitions, keyframes, transform properties</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">Preprocessors</h4>
              <p className="text-gray-600 text-sm">Sass, Less - variables, mixins, nesting</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">CSS Example</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-700 overflow-x-auto">
{`/* CSS Grid Layout */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

/* Flexbox Centering */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}`}
            </pre>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Interview Questions</h3>
          <div className="space-y-2">
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Explain the CSS Box Model</summary>
              <p className="mt-2 text-gray-600 text-sm">The box model consists of content, padding, border, and margin. It determines how elements are sized and spaced.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What's the difference between Flexbox and Grid?</summary>
              <p className="mt-2 text-gray-600 text-sm">Flexbox is for 1D layouts (row or column), Grid is for 2D layouts (rows and columns). Grid is better for complex layouts.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">How does CSS specificity work?</summary>
              <p className="mt-2 text-gray-600 text-sm">Specificity determines which CSS rule applies: inline styles &gt; IDs &gt; classes &gt; elements. More specific selectors override less specific ones.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What are CSS pseudo-classes and pseudo-elements?</summary>
              <p className="mt-2 text-gray-600 text-sm">Pseudo-classes target element states (:hover, :focus), pseudo-elements target parts of elements (::before, ::after).</p>
            </details>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">✅ Do</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Use semantic class names</li>
                <li>Organize CSS with comments</li>
                <li>Use CSS variables for consistency</li>
                <li>Optimize for performance</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">❌ Avoid</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Inline styles in HTML</li>
                <li>!important overuse</li>
                <li>Deep nesting in preprocessors</li>
                <li>Non-responsive designs</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CSS;
