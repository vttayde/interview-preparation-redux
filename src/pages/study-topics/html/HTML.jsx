import StudyNavigation from '../../../components/layout/StudyNavigation';

const HTML = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">HTML</h1>
        <p className="mt-2 text-gray-600">HyperText Markup Language - The foundation of web development</p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is HTML?</h2>
          <p className="text-gray-600 mb-4">
            HTML is the standard markup language for creating web pages. It describes the structure of a web page
            using elements and tags that tell the browser how to display content.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Elements & Tags</h4>
              <p className="text-blue-700 text-sm">Building blocks of HTML: &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, etc.</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Attributes</h4>
              <p className="text-green-700 text-sm">Properties that provide additional information: id, class, src</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Semantic HTML</h4>
              <p className="text-yellow-700 text-sm">Meaningful elements: &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Forms</h4>
              <p className="text-purple-700 text-sm">User input elements: &lt;form&gt;, &lt;input&gt;, &lt;select&gt;</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Common Interview Topics</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-gray-800">Document Structure</h4>
              <p className="text-gray-600 text-sm">DOCTYPE, html, head, body elements and their purposes</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-gray-800">HTML5 Features</h4>
              <p className="text-gray-600 text-sm">New semantic elements, form input types, and APIs</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-gray-800">Accessibility</h4>
              <p className="text-gray-600 text-sm">ARIA attributes, alt text, proper heading structure</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-gray-800">SEO Best Practices</h4>
              <p className="text-gray-600 text-sm">Meta tags, structured data, proper heading hierarchy</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Essential HTML Elements</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm text-gray-700 overflow-x-auto">
{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <header>
        <nav>Navigation</nav>
    </header>
    <main>
        <section>
            <h1>Main Heading</h1>
            <p>Paragraph content</p>
        </section>
    </main>
    <footer>Footer content</footer>
</body>
</html>`}
            </pre>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Practice Questions</h3>
          <div className="space-y-2">
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What's the difference between &lt;div&gt; and &lt;span&gt;?</summary>
              <p className="mt-2 text-gray-600 text-sm">&lt;div&gt; is a block-level element, &lt;span&gt; is inline. Div takes full width, span only takes necessary width.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">Explain HTML5 semantic elements</summary>
              <p className="mt-2 text-gray-600 text-sm">Elements like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt; provide meaning to content structure.</p>
            </details>
            <details className="bg-gray-50 p-3 rounded">
              <summary className="font-semibold cursor-pointer">What is the purpose of DOCTYPE?</summary>
              <p className="mt-2 text-gray-600 text-sm">DOCTYPE tells the browser which HTML version to use and triggers standards mode for proper rendering.</p>
            </details>
          </div>
        </section>
      </div>
      
      <StudyNavigation />
    </div>
  );
};

export default HTML;
