// =============================================================================
// INTERVIEW QUESTIONS PAGE CONSTANTS
// =============================================================================

export const HTML_TABS = [
  { id: "basics", name: "HTML Fundamentals", icon: "🏗️" },
  { id: "semantic", name: "Semantic HTML", icon: "📋" },
  { id: "forms", name: "Forms & Input", icon: "📝" },
  { id: "accessibility", name: "Accessibility", icon: "♿" },
  { id: "examples", name: "Code Examples", icon: "💻" },
  { id: "interview", name: "Interview Q&A", icon: "❓" },
];

export const HTML_UI_TEXT = {
  title: "HTML Study Guide",
  description:
    "Master HTML fundamentals, semantic markup, and modern best practices",
};

export const HTML_CONTENT = {
  basics: [
    {
      id: 1,
      title: "📊 What is HTML?",
      description:
        "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure and content of web pages using elements and tags that tell browsers how to display content.",
      color: "blue",
    },
    {
      id: 2,
      title: "🏷️ Elements & Tags",
      description:
        "HTML elements are the building blocks of web pages. They consist of opening tags, content, and closing tags that define the structure and meaning of content.",
      color: "green",
      code: `Basic Structure:
<!-- Opening tag, content, closing tag -->
<tagname attribute="value">Content</tagname>

<!-- Self-closing tags -->
<img src="image.jpg" alt="Description" />
<br />
<hr />

<!-- Common block elements -->
<div>Division/container</div>
<p>Paragraph</p>
<h1>Heading 1</h1>
<section>Section</section>

<!-- Common inline elements -->
<span>Inline text</span>
<a href="#">Link</a>
<strong>Bold text</strong>
<em>Italic text</em>`,
    },
    {
      id: 3,
      title: "📄 Document Structure",
      description:
        "Every HTML document follows a standard structure with DOCTYPE, html, head, and body elements that organize the page content and metadata.",
      color: "purple",
      code: `HTML5 Document:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <meta name="description" content="Page description">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Site Title</h1>
        <nav>Navigation</nav>
    </header>
    <main>
        <section>Content</section>
    </main>
    <footer>Footer</footer>
</body>
</html>`,
    },
    {
      id: 4,
      title: "🎯 Attributes",
      description:
        "Attributes provide additional information about HTML elements, defining their behavior, appearance, and accessibility.",
      color: "orange",
      code: `Common Attributes:
<!-- Global attributes -->
<div id="unique-id" class="css-class" title="Tooltip">

<!-- Link attributes -->
<a href="https://example.com" target="_blank" rel="noopener">

<!-- Image attributes -->
<img src="image.jpg" alt="Description" width="300" height="200">

<!-- Form attributes -->
<input type="text" name="username" placeholder="Enter username" required>

<!-- Data attributes -->
<div data-user-id="123" data-role="admin">`,
    },
    {
      id: 5,
      title: "⏱️ Block vs Inline Elements",
      description: `<div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Block Elements</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Take full width available</li>
                                        <li>• Start on new line</li>
                                        <li>• Can contain other block/inline elements</li>
                                        <li>• Examples: div, p, h1-h6, section, article</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Inline Elements</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Take only necessary width</li>
                                        <li>• Stay on same line</li>
                                        <li>• Cannot contain block elements</li>
                                        <li>• Examples: span, a, strong, em, img</li>
                                    </ul>
                                </div>
                            </div>`,
      color: "yellow",
    },
  ],
  semantic: [
    {
      id: 1,
      title: "Semantic HTML",
      description: "Semantic HTML",
      color: "blue",
      code: ``,
    },
    {
      id: 2,
      title: "HTML5 Semantic Elements",
      description: ` <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="space-y-2">
                                            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                                <strong>&lt;header&gt;</strong> - Page/section header
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                                <strong>&lt;nav&gt;</strong> - Navigation links
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                                <strong>&lt;main&gt;</strong> - Main content area
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                                <strong>&lt;footer&gt;</strong> - Page/section footer
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                                <strong>&lt;section&gt;</strong> - Thematic grouping
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                                <strong>&lt;article&gt;</strong> - Independent content
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                                <strong>&lt;aside&gt;</strong> - Sidebar content
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                                <strong>&lt;figure&gt;</strong> - Self-contained content
                                            </div>
                                        </div>
                                    </div>`,
      color: "green",
      code: ``,
    },
    {
      id: 3,
      title: "Content Elements",
      description: "",
      color: "purple",
      code: `<!-- Text content -->
<h1>Main heading</h1>
<h2>Sub heading</h2>
<p>Paragraph text</p>
<blockquote cite="source">Quote</blockquote>
<cite>Citation</cite>

<!-- Lists -->
<ul>Unordered list</ul>
<ol>Ordered list</ol>
<dl>Description list</dl>

<!-- Inline semantics -->
<strong>Important text</strong>
<em>Emphasized text</em>
<mark>Highlighted text</mark>
<time datetime="2024-01-01">New Year</time>
<code>Code snippet</code>
<kbd>Keyboard input</kbd>
<samp>Sample output</samp>`,
    },
    {
      id: 4,
      title: "Semantic Page Structure",
      description: "",
      color: "orange",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Website Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="hero">
            <h2>Welcome Section</h2>
            <p>Introduction content</p>
        </section>
        
        <section id="content">
            <article>
                <header>
                    <h3>Article Title</h3>
                    <time datetime="2024-01-15">January 15, 2024</time>
                </header>
                <p>Article content...</p>
                <footer>
                    <p>Author: <cite>John Doe</cite></p>
                </footer>
            </article>
        </section>
        
        <aside>
            <h4>Related Links</h4>
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
            </ul>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 Website Name</p>
    </footer>
</body>
</html>`,
    },
  ],
  forms: [
    {
      id: 1,
      title: "HTML Forms & Input",
      description:
        "Forms are essential for user interaction, allowing data collection and submission. HTML5 provides various input types and validation features.",
      color: "blue",
      code: ``,
    },
    {
      id: 2,
      title: "Form Structure",
      description: "",
      color: "green",
      code: `<form action="/submit" method="POST" enctype="multipart/form-data">
    <fieldset>
        <legend>Personal Information</legend>
        
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone">
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>
        
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </fieldset>
</form>`,
    },
    {
      id: 3,
      title: "HTML5 Input Types",
      description: "",
      color: "purple",
      code: `<div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3">Text Inputs</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="bg-white p-2 rounded"><code>text</code> - Basic text input</div>
                                        <div className="bg-white p-2 rounded"><code>email</code> - Email validation</div>
                                        <div className="bg-white p-2 rounded"><code>password</code> - Hidden text</div>
                                        <div className="bg-white p-2 rounded"><code>url</code> - URL validation</div>
                                        <div className="bg-white p-2 rounded"><code>search</code> - Search input</div>
                                        <div className="bg-white p-2 rounded"><code>tel</code> - Telephone number</div>
                                    </div>
                                </div>
                                
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3">Special Inputs</h4>
                                    <div className="space-y-2 text-sm">
                                        <div className="bg-white p-2 rounded"><code>number</code> - Numeric input</div>
                                        <div className="bg-white p-2 rounded"><code>range</code> - Slider control</div>
                                        <div className="bg-white p-2 rounded"><code>date</code> - Date picker</div>
                                        <div className="bg-white p-2 rounded"><code>time</code> - Time picker</div>
                                        <div className="bg-white p-2 rounded"><code>color</code> - Color picker</div>
                                        <div className="bg-white p-2 rounded"><code>file</code> - File upload</div>
                                    </div>
                                </div>
                            </div>`,
    },
    {
      id: 4,
      title: "HTML5 Form Validation",
      description: "HTML5 Validation Attributes",
      color: "orange",
      code: `<!-- Required validation -->
<input type="text" name="username" required>

<!-- Pattern validation -->
<input type="text" pattern="[A-Za-z]{3,}" title="Minimum 3 letters">

<!-- Length validation -->
<input type="text" minlength="3" maxlength="20">

<!-- Number validation -->
<input type="number" min="1" max="100" step="1">

<!-- Custom validation message -->
<input type="email" required 
       oninvalid="this.setCustomValidity('Please enter a valid email')"
       oninput="this.setCustomValidity('')">

<!-- Disable validation -->
<form novalidate>
    <input type="email" name="email">
</form>`,
    },
  ],
  accessibility: [
    {
      id: 1,
      title: "HTML Accessibility",
      description:
        "Creating accessible HTML ensures your content is usable by everyone, including people with disabilities who use assistive technologies.",
      color: "blue",
      code: ``,
    },
    {
      id: 2,
      title: "ARIA Attributes",
      description:
        "Core ARIA Attributes provide additional information about elements to assistive technologies.",
      color: "green",
      code: `<!-- Labels and descriptions -->
<button aria-label="Close dialog">×</button>
<input aria-describedby="password-help">
<div id="password-help">Password must be 8+ characters</div>

<!-- Roles -->
<div role="button" tabindex="0">Custom button</div>
<nav role="navigation">
<main role="main">

<!-- States -->
<button aria-pressed="false">Toggle</button>
<div aria-expanded="false">Collapsible content</div>
<input aria-invalid="true" aria-required="true">

<!-- Live regions -->
<div aria-live="polite">Status updates</div>
<div aria-live="assertive">Important alerts</div>

<!-- Relationships -->
<ul role="tablist">
    <li role="tab" aria-controls="panel1">Tab 1</li>
</ul>
<div role="tabpanel" id="panel1" aria-labelledby="tab1">`,
    },
    {
      id: 3,
      title: "Semantic HTML for Accessibility",
      description:
        "Using semantic HTML elements helps convey meaning and structure to assistive technologies.",
      color: "purple",
      code: `<!-- Proper heading hierarchy -->
<h1>Main Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>

<!-- Meaningful link text -->
<a href="/article">Read full article about accessibility</a>
<!-- Avoid: <a href="/article">Click here</a> -->

<!-- Image alt text -->
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2">
<img src="decorative.png" alt="" role="presentation">

<!-- Form labels -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email">

<!-- Table headers -->
<table>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
</table>`,
    },
    {
      id: 4,
      title: "Keyboard Navigation",
      description:
        "Ensuring your web content is navigable using a keyboard is essential for accessibility.",
      color: "orange",
      code: `<!-- Tab order -->
<input tabindex="1" placeholder="First">
<input tabindex="2" placeholder="Second">
<input tabindex="-1" placeholder="Not in tab order">

<!-- Skip links -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Focus indicators -->
<style>
    button:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
    }
</style>

<!-- Custom interactive elements -->
<div role="button" tabindex="0" 
     onkeydown="if(event.key==='Enter'||event.key===' ') handleClick()">
    Custom Button
</div>`,
    },
    {
      id: 5,
      title: "Accessibility Best Practices",
      description: `<div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">✅ Do</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Use semantic HTML elements</li>
                                        <li>• Provide alt text for images</li>
                                        <li>• Maintain proper heading hierarchy</li>
                                        <li>• Ensure sufficient color contrast</li>
                                        <li>• Test with keyboard navigation</li>
                                        <li>• Use descriptive link text</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">❌ Don't</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Use div/span for interactive elements</li>
                                        <li>• Rely only on color for information</li>
                                        <li>• Skip heading levels</li>
                                        <li>• Use placeholder as label</li>
                                        <li>• Remove focus indicators</li>
                                        <li>• Use "click here" for links</li>
                                    </ul>
                                </div>
                            </div>`,
      color: "yellow",
      code: ``,
    },
  ],
  examples: [
    {
      id: 1,
      title: "HTML Code Examples",
      description:
        "Practical examples demonstrating common HTML patterns and best practices for building modern web pages.<h1>Complete Page Example</h1>",
      color: "blue",
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="A complete HTML5 page example">
    <title>Modern HTML5 Page</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav role="navigation" aria-label="Main navigation">
            <ul>
                <li><a href="#home" aria-current="page">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="hero">
            <h1>Welcome to Our Website</h1>
            <p>Discover amazing content and services</p>
            <a href="#services" class="cta-button">Get Started</a>
        </section>

        <section id="content">
            <h2>Our Services</h2>
            <div class="services-grid">
                <article class="service-card">
                    <h3>Web Design</h3>
                    <p>Beautiful, responsive designs</p>
                </article>
                <article class="service-card">
                    <h3>Development</h3>
                    <p>Modern web applications</p>
                </article>
            </div>
        </section>
    </main>

    <aside>
        <h2>Latest News</h2>
        <article>
            <h3>New Website Launch</h3>
            <time datetime="2024-01-15">January 15, 2024</time>
            <p>We're excited to announce...</p>
        </article>
    </aside>

    <footer>
        <div class="footer-content">
            <div class="contact-info">
                <h3>Contact Us</h3>
                <address>
                    123 Web Street<br>
                    Digital City, DC 12345<br>
                    <a href="tel:+1234567890">Phone: (123) 456-7890</a><br>
                    <a href="mailto:info@example.com">Email: info@example.com</a>
                </address>
            </div>
            <div class="social-links">
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="#" aria-label="Facebook">Facebook</a></li>
                    <li><a href="#" aria-label="Twitter">Twitter</a></li>
                    <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
</body>
</html>`,
    },
    {
      id: 2,
      title: "Contact Form Example",
      description: ``,
      color: "green",   
      code: `<form action="/contact" method="POST" class="contact-form" novalidate>
    <fieldset>
        <legend>Contact Information</legend>
        
        <div class="form-group">
            <label for="fullname">Full Name *</label>
            <input type="text" 
                   id="fullname" 
                   name="fullname" 
                   required 
                   aria-describedby="fullname-error"
                   autocomplete="name">
            <span id="fullname-error" class="error-message" aria-live="polite"></span>
        </div>

        <div class="form-group">
            <label for="email">Email Address *</label>
            <input type="email" 
                   id="email" 
                   name="email" 
                   required 
                   aria-describedby="email-help email-error"
                   autocomplete="email">
            <div id="email-help" class="help-text">We'll never share your email</div>
            <span id="email-error" class="error-message" aria-live="polite"></span>
        </div>

        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" 
                   id="phone" 
                   name="phone" 
                   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                   placeholder="123-456-7890"
                   autocomplete="tel">
        </div>

        <div class="form-group">
            <label for="subject">Subject *</label>
            <select id="subject" name="subject" required>
                <option value="">Choose a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing Question</option>
                <option value="feedback">Feedback</option>
            </select>
        </div>

        <div class="form-group">
            <label for="message">Message *</label>
            <textarea id="message" 
                      name="message" 
                      rows="5" 
                      required 
                      minlength="10"
                      aria-describedby="message-counter">
            </textarea>
            <div id="message-counter" class="character-count">0/500 characters</div>
        </div>

        <div class="form-group">
            <fieldset>
                <legend>Contact Preferences</legend>
                <div class="checkbox-group">
                    <input type="checkbox" id="newsletter" name="newsletter" value="yes">
                    <label for="newsletter">Subscribe to newsletter</label>
                </div>
                <div class="radio-group">
                    <input type="radio" id="contact-email" name="contact-method" value="email" checked>
                    <label for="contact-email">Email</label>
                    
                    <input type="radio" id="contact-phone" name="contact-method" value="phone">
                    <label for="contact-phone">Phone</label>
                </div>
            </fieldset>
        </div>

        <div class="form-actions">
            <button type="submit" class="submit-btn">Send Message</button>
            <button type="reset" class="reset-btn">Clear Form</button>
        </div>
    </fieldset>
</form>`,
    },
    {
      id: 3,
      title: "Data Table Example",
      description: "",
      color: "purple",
      code: `<table class="data-table" role="table" aria-label="Employee Information">
    <caption>Company Employee Directory - Q1 2024</caption>
    <thead>
        <tr>
            <th scope="col" role="columnheader" aria-sort="none">
                <button type="button" aria-label="Sort by Name">
                    Name <span aria-hidden="true">↕</span>
                </button>
            </th>
            <th scope="col" role="columnheader">Department</th>
            <th scope="col" role="columnheader">Position</th>
            <th scope="col" role="columnheader">Start Date</th>
            <th scope="col" role="columnheader">Email</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">John Smith</th>
            <td>Engineering</td>
            <td>Senior Developer</td>
            <td><time datetime="2020-03-15">March 15, 2020</time></td>
            <td><a href="mailto:john.smith@company.com">john.smith@company.com</a></td>
        </tr>
        <tr>
            <th scope="row">Sarah Johnson</th>
            <td>Marketing</td>
            <td>Marketing Manager</td>
            <td><time datetime="2019-08-22">August 22, 2019</time></td>
            <td><a href="mailto:sarah.johnson@company.com">sarah.johnson@company.com</a></td>
        </tr>
        <tr>
            <th scope="row">Mike Davis</th>
            <td>Engineering</td>
            <td>Frontend Developer</td>
            <td><time datetime="2021-11-10">November 10, 2021</time></td>
            <td><a href="mailto:mike.davis@company.com">mike.davis@company.com</a></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="5">
                <div class="table-pagination" role="navigation" aria-label="Table pagination">
                    <button type="button" disabled>Previous</button>
                    <span aria-current="page">Page 1 of 5</span>
                    <button type="button">Next</button>
                </div>
            </td>
        </tr>
    </tfoot>
</table>`,
    },
  ],

  interview: [
    {
      id: 1,
      title: "What is HTML and what does it stand for?",
      description: `<div className="text-blue-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> HTML stands for HyperText Markup Language. It's the standard markup language used to create web pages and web applications.</p>
                                        <p><strong>Key points:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>HyperText:</strong> Text that contains links to other texts</li>
                                            <li><strong>Markup:</strong> System of annotating text to indicate structure and presentation</li>
                                            <li><strong>Language:</strong> Set of rules and syntax for creating documents</li>
                                            <li>HTML uses tags to define elements and structure content</li>
                                            <li>It's interpreted by web browsers to display web pages</li>
                                        </ul>
                                    </div>`,
      color: "blue",
      code: ``,
    },
    {
      id: 2,
      title: "What's the difference between HTML elements and tags?",
      description: `<div className="text-green-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>HTML Tag:</strong> The markup syntax used to define elements (e.g., &lt;p&gt;, &lt;/p&gt;)</li>
                                            <li><strong>HTML Element:</strong> The complete structure including opening tag, content, and closing tag</li>
                                        </ul>
                                        <p><strong>Example:</strong></p>
                                        <div className="bg-green-100 p-2 rounded font-mono text-xs">
                                            &lt;p&gt;This is content&lt;/p&gt;<br/>
                                            ↑ Opening tag ↑ Content ↑ Closing tag<br/>
                                            ← Entire HTML Element →
                                        </div>
                                    </div>`,
      color: "green",
      code: ``,
    },
    {
      id: 3,
      title: "Explain the HTML5 DOCTYPE declaration",
      description: `<div className="text-purple-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> The DOCTYPE declaration tells the browser which version of HTML the document is written in.</p>
                                        <p><strong>HTML5 DOCTYPE:</strong></p>
                                        <div className="bg-purple-100 p-2 rounded font-mono text-xs">
                                            &lt;!DOCTYPE html&gt;
                                        </div>
                                        <p><strong>Why it's important:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li>Triggers standards mode in browsers</li>
                                            <li>Ensures consistent rendering across browsers</li>
                                            <li>Must be the first line in HTML document</li>
                                            <li>HTML5 DOCTYPE is much simpler than previous versions</li>
                                        </ul>
                                    </div>`,
      color: "purple",
      code: ``,
    },
    {
      id: 4,
      title: "What are semantic HTML elements and why are they important?",
      description: `<div className="text-orange-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> Semantic HTML elements clearly describe their meaning and purpose to both browsers and developers.</p>
                                        <p><strong>Examples:</strong></p>
                                        <div className="bg-orange-100 p-2 rounded font-mono text-xs">
                                            &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;
                                        </div>
                                        <p><strong>Benefits:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>Accessibility:</strong> Screen readers understand content structure</li>
                                            <li><strong>SEO:</strong> Search engines better understand page content</li>
                                            <li><strong>Maintainability:</strong> Code is more readable and maintainable</li>
                                            <li><strong>Standards:</strong> Follow web standards and best practices</li>
                                        </ul>
                                    </div>`,
      color: "orange",
      code: ``,
    },
    {
      id: 5,
      title: "What's the difference between block and inline elements?",
      description: `<div className="text-red-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong></p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <p><strong>Block Elements:</strong></p>
                                                <ul className="list-disc ml-4 space-y-1">
                                                    <li>Take full width available</li>
                                                    <li>Start on a new line</li>
                                                    <li>Can contain other block/inline elements</li>
                                                    <li>Height and width can be set</li>
                                                    <li>Examples: div, p, h1-h6, section</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p><strong>Inline Elements:</strong></p>
                                                <ul className="list-disc ml-4 space-y-1">
                                                    <li>Take only necessary width</li>
                                                    <li>Stay on the same line</li>
                                                    <li>Cannot contain block elements</li>
                                                    <li>Height and width ignored</li>
                                                    <li>Examples: span, a, strong, em</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>`,
      color: "green",
      code: ``,
    },
    {
      id: 6,
      title: "Explain HTML5 form validation attributes",
      description: `<div className="text-teal-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> HTML5 provides built-in form validation without JavaScript:</p>
                                        <div className="bg-teal-100 p-2 rounded font-mono text-xs space-y-1">
                                            <div><strong>required</strong> - Field must be filled</div>
                                            <div><strong>pattern</strong> - Must match regex pattern</div>
                                            <div><strong>min/max</strong> - Minimum/maximum values</div>
                                            <div><strong>minlength/maxlength</strong> - String length limits</div>
                                            <div><strong>type</strong> - Input type validation (email, url, etc.)</div>
                                        </div>
                                        <p><strong>Example:</strong></p>
                                        <div className="bg-teal-100 p-2 rounded font-mono text-xs">
                                            {<input type="email" required minLength="5" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" />}
                                        </div>
                                    </div>`,
      color: "yellow",
      code: ``,
    },
    {
      id: 7,
      title: " What are ARIA attributes and how do they improve accessibility?",
      description: `<div className="text-indigo-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> ARIA (Accessible Rich Internet Applications) attributes provide semantic information to assistive technologies.</p>
                                        <p><strong>Common ARIA attributes:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>aria-label:</strong> Provides accessible name</li>
                                            <li><strong>aria-describedby:</strong> References descriptive text</li>
                                            <li><strong>aria-expanded:</strong> Indicates if collapsible content is open</li>
                                            <li><strong>aria-hidden:</strong> Hides decorative content from screen readers</li>
                                            <li><strong>role:</strong> Defines what an element is or does</li>
                                        </ul>
                                        <p><strong>Example:</strong></p>
                                        <div className="bg-indigo-100 p-2 rounded font-mono text-xs">
                                            &lt;button aria-label="Close dialog" aria-expanded="false"&gt;×&lt;/button&gt;
                                        </div>
                                    </div>`,
      color: "orange",
      code: ``,
    },
    {
      id: 8,
      title: "How do you optimize HTML for SEO?",
      description: `<div className="text-pink-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> SEO optimization involves proper structure and metadata:</p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>Title tag:</strong> Unique, descriptive page titles</li>
                                            <li><strong>Meta description:</strong> Compelling page summaries</li>
                                            <li><strong>Heading hierarchy:</strong> Proper H1-H6 structure</li>
                                            <li><strong>Semantic HTML:</strong> Use appropriate elements</li>
                                            <li><strong>Alt text:</strong> Descriptive image alternatives</li>
                                            <li><strong>Structured data:</strong> Schema.org markup</li>
                                            <li><strong>Clean URLs:</strong> Descriptive, readable URLs</li>
                                        </ul>
                                        <p><strong>Example:</strong></p>
                                        <div className="bg-pink-100 p-2 rounded font-mono text-xs">
                                            &lt;title&gt;Best HTML Practices - Web Development Guide&lt;/title&gt;<br/>
                                            &lt;meta name="description" content="Learn HTML best practices..."&gt;
                                        </div>
                                    </div>`,
      color: "purple",
      code: ``,
    },
    {
      id: 9,
      title: "What are Web Components and how do they relate to HTML?",
      description: `<div className="text-yellow-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> Web Components are a set of web platform APIs that allow you to create custom, reusable HTML elements.</p>
                                        <p><strong>Core technologies:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>Custom Elements:</strong> Define new HTML tags</li>
                                            <li><strong>Shadow DOM:</strong> Encapsulated DOM and styles</li>
                                            <li><strong>HTML Templates:</strong> Reusable markup patterns</li>
                                            <li><strong>ES Modules:</strong> Component distribution</li>
                                        </ul>
                                        <p><strong>Example:</strong></p>
                                        <div className="bg-yellow-100 p-2 rounded font-mono text-xs">
                                            &lt;my-custom-button color="primary" size="large"&gt;<br/>
                                            &nbsp;&nbsp;Click me<br/>
                                            &lt;/my-custom-button&gt;
                                        </div>
                                    </div>`,
      color: "green",
      code: ``,
    },
  ],

  default: [
    {
      id: "default",
      title: "Other Interview Topics",
      color: "purple",
      description: "more questions and answers coming soon",
    },
  ],
};
