// =============================================================================
// CSS STUDY PAGE CONSTANTS
// =============================================================================

export const CSS_TABS = [
  { id: "basics", name: "CSS Fundamentals", icon: "🎨" },
  { id: "layout", name: "Layout Systems", icon: "📐" },
  { id: "advanced", name: "Advanced CSS", icon: "🚀" },
  { id: "examples", name: "Code Examples", icon: "💻" },
  { id: "responsive", name: "Responsive Design", icon: "📱" },
  { id: "interview", name: "Interview Q&A", icon: "❓" },
];

export const CSS_UI_TEXT = {
  title: "CSS Study Guide",
  description:
    "Master CSS fundamentals, layout systems, and modern styling techniques",
};

export const CSS_CONTENT = {
  basics: [
    {
      id: 1,
      title: "🎨 What is CSS?",
      description:
        "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls layout, colors, fonts, spacing, animations, and visual effects that make web pages beautiful and interactive.",
      color: "blue",
    },
    {
      id: 2,
      title: "🎯 Selectors",
      description:
        "CSS selectors are patterns used to select and style HTML elements. They are the foundation of CSS targeting.",
      color: "blue",
      code: `/* Element selector */
h1 { color: blue; }

/* Class selector */
.container { max-width: 1200px; }

/* ID selector */
#header { background: #333; }

/* Attribute selector */
input[type="email"] { border: 2px solid blue; }

/* Descendant selector */
.nav ul li { margin: 0 10px; }

/* Pseudo-classes */
a:hover { color: red; }
li:nth-child(2n) { background: #f0f0f0; }

/* Pseudo-elements */
p::before { content: "→ "; }
h1::after { content: " ←"; }`,
    },
    {
      id: 3,
      title: "🏗️ CSS Box Model",
      description:
        "The CSS box model describes how elements are structured with content, padding, border, and margin layers.",
      color: "green",
      code: `/* Box model properties */
.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    border: 5px solid #333;
    margin: 15px;
    box-sizing: border-box; /* Include padding and border in width */
}

/* Box sizing options */
.content-box { box-sizing: content-box; } /* Default */
.border-box { box-sizing: border-box; } /* Modern approach */

/* Display the box model */
.debug-box {
    border: 1px solid red;
    background: rgba(255,0,0,0.1);
    padding: 10px;
    margin: 10px;
}`,
    },
    {
      id: 4,
      title: "🎨 Colors and Typography",
      description:
        "CSS provides multiple ways to define colors and control text appearance for beautiful typography.",
      color: "purple",
      code: `/* Color values */
.colors {
    color: red;                    /* Named colors */
    background: #ff0000;           /* Hex colors */
    border-color: rgb(255,0,0);    /* RGB */
    box-shadow: rgba(0,0,0,0.5);   /* RGBA with transparency */
    outline: hsl(0,100%,50%);      /* HSL */
}

/* Typography */
.typography {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: center;
    text-decoration: underline;
    text-transform: uppercase;
}

/* Web fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

.custom-font {
    font-family: 'Roboto', sans-serif;
}`,
    },
    {
      id: 5,
      title: "📦 Display Properties",
      description: `<div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Block Elements</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Take full width available</li>
                                        <li>• Start on new line</li>
                                        <li>• Can set width/height</li>
                                        <li>• Examples: div, p, h1-h6</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2">Inline Elements</h4>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        <li>• Take only necessary width</li>
                                        <li>• Stay on same line</li>
                                        <li>• Cannot set width/height</li>
                                        <li>• Examples: span, a, strong</li>
                                    </ul>
                                </div>
                            </div>`,
      color: "yellow",
      code: `/* Display values */
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.none { display: none; }

/* Modern display values */
.flex { display: flex; }
.grid { display: grid; }
.table { display: table; }
.table-cell { display: table-cell; }`,
    },
  ],

  layout: [
    {
      id: 1,
      title: "📐 CSS Layout Systems",
      description:
        "Modern CSS provides powerful layout systems including Flexbox and Grid for creating responsive and flexible designs.",
      color: "blue",
    },
    {
      id: 2,
      title: "🔄 Flexbox Layout",
      description:
        "Flexbox is a one-dimensional layout system perfect for distributing space and aligning items in a container.",
      color: "green",
      code: `/* Flex container */
.flex-container {
    display: flex;
    flex-direction: row; /* row, column, row-reverse, column-reverse */
    justify-content: space-between; /* flex-start, center, space-around, space-evenly */
    align-items: center; /* stretch, flex-start, flex-end, center, baseline */
    flex-wrap: wrap; /* nowrap, wrap, wrap-reverse */
    gap: 20px;
}

/* Flex items */
.flex-item {
    flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: flex-end; /* Override container's align-items */
}

/* Common flex patterns */
.center-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.space-between {
    display: flex;
    justify-content: space-between;
}`,
    },
    {
      id: 3,
      title: "🏗️ CSS Grid Layout",
      description:
        "CSS Grid is a two-dimensional layout system that allows you to work with rows and columns simultaneously.",
      color: "purple",
      code: `/* Grid container */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-rows: 100px auto 50px; /* Fixed, auto, fixed */
    gap: 20px; /* Row and column gap */
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
}

/* Grid items */
.grid-item {
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
    grid-row: 2 / 4;
    grid-area: header; /* Use named area */
}

/* Responsive grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

/* Grid functions */
.advanced-grid {
    grid-template-columns: 
        minmax(200px, 1fr) 
        repeat(auto-fit, minmax(100px, 1fr)) 
        100px;
}`,
    },
    {
      id: 4,
      title: "📍 Positioning",
      description:
        "CSS positioning allows you to precisely control where elements appear on the page.",
      color: "orange",
      code: `/* Position values */
.static { position: static; } /* Default, normal document flow */
.relative { position: relative; } /* Relative to normal position */
.absolute { position: absolute; } /* Relative to nearest positioned ancestor */
.fixed { position: fixed; } /* Relative to viewport */
.sticky { position: sticky; } /* Sticky within scroll container */

/* Positioning with offsets */
.positioned {
    position: absolute;
    top: 20px;
    right: 30px;
    bottom: 10px;
    left: 15px;
    z-index: 100; /* Stacking order */
}

/* Common positioning patterns */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
}

.centered-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`,
    },
    {
      id: 5,
      title: "🌊 Floats and Clear",
      description:
        "Float was traditionally used for layouts, now mainly used for text wrapping around images.",
      color: "yellow",
      code: `/* Float values */
.float-left { float: left; }
.float-right { float: right; }
.float-none { float: none; }

/* Clear floats */
.clear-left { clear: left; }
.clear-right { clear: right; }
.clear-both { clear: both; }

/* Clearfix hack for containers */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Modern clearfix */
.clearfix {
    overflow: auto;
}

/* Image with text wrap */
.article-image {
    float: left;
    margin: 0 15px 15px 0;
    max-width: 300px;
}`,
    },
  ],

  advanced: [
    {
      id: 1,
      title: "🚀 Advanced CSS Features",
      description:
        "Modern CSS includes powerful features like animations, transforms, variables, and advanced selectors for sophisticated designs.",
      color: "blue",
    },
    {
      id: 2,
      title: "🎭 CSS Animations",
      description:
        "CSS animations bring life to web pages with smooth transitions and keyframe animations.",
      color: "green",
      code: `/* Transitions */
.transition-element {
    transition: all 0.3s ease-in-out;
    /* Or specific properties */
    transition: color 0.2s ease, transform 0.3s ease-out;
}

.transition-element:hover {
    color: blue;
    transform: scale(1.1);
}

/* Keyframe animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
    0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
    40%, 43% { transform: translateY(-20px); }
    70% { transform: translateY(-10px); }
    90% { transform: translateY(-4px); }
}

/* Apply animations */
.animated {
    animation: fadeIn 1s ease-out;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;
}

.bouncing {
    animation: bounce 2s infinite;
}`,
    },
    {
      id: 3,
      title: "🔄 CSS Transforms",
      description:
        "Transforms allow you to rotate, scale, skew, and translate elements in 2D and 3D space.",
      color: "purple",
      code: `/* 2D Transforms */
.transform-2d {
    transform: translate(50px, 100px); /* Move x, y */
    transform: scale(1.5); /* Scale up 1.5x */
    transform: rotate(45deg); /* Rotate 45 degrees */
    transform: skew(20deg, 10deg); /* Skew x, y */
    
    /* Combined transforms */
    transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

/* 3D Transforms */
.transform-3d {
    transform-style: preserve-3d;
    perspective: 1000px;
    
    transform: rotateX(45deg); /* Rotate around X-axis */
    transform: rotateY(45deg); /* Rotate around Y-axis */
    transform: rotateZ(45deg); /* Rotate around Z-axis */
    transform: translateZ(50px); /* Move in 3D space */
}

/* Transform origin */
.custom-origin {
    transform-origin: top left; /* Rotation point */
    transform: rotate(45deg);
}

/* 3D Card flip */
.flip-card {
    perspective: 1000px;
}

.flip-card-inner {
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}`,
    },
    {
      id: 4,
      title: "🎨 CSS Variables",
      description:
        "CSS custom properties (variables) allow you to store and reuse values throughout your stylesheet.",
      color: "orange",
      code: `/* Define CSS variables */
:root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --font-size-large: 24px;
    --border-radius: 8px;
    --box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    --transition-speed: 0.3s;
}

/* Use variables */
.button {
    background-color: var(--primary-color);
    color: white;
    font-size: var(--font-size-large);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: all var(--transition-speed);
}

/* Variable with fallback */
.element {
    color: var(--text-color, #333); /* Falls back to #333 if --text-color undefined */
}

/* Dynamic variables with JavaScript */
.theme-dark {
    --primary-color: #2c3e50;
    --background-color: #34495e;
}

/* Calculated values */
:root {
    --base-size: 16px;
    --large-size: calc(var(--base-size) * 1.5);
    --margin: calc(var(--base-size) / 2);
}`,
    },
    {
      id: 5,
      title: "🔍 Advanced Selectors",
      description:
        "CSS provides sophisticated selectors for precise targeting of elements based on structure, attributes, and state.",
      color: "yellow",
      code: `/* Structural pseudo-classes */
li:first-child { color: red; }
li:last-child { color: blue; }
li:nth-child(2n) { background: #f0f0f0; } /* Even items */
li:nth-child(odd) { background: #e0e0e0; } /* Odd items */
li:nth-child(3n+1) { font-weight: bold; } /* Every 3rd starting from 1st */

/* Type selectors */
p:first-of-type { margin-top: 0; }
h2:last-of-type { margin-bottom: 0; }
img:only-of-type { display: block; margin: 0 auto; }

/* State selectors */
input:focus { border-color: blue; }
input:invalid { border-color: red; }
input:required { background: #fffacd; }
input:disabled { opacity: 0.5; }

/* Attribute selectors */
a[href^="https://"] { color: green; } /* Starts with */
a[href$=".pdf"] { color: red; } /* Ends with */
a[href*="example"] { color: blue; } /* Contains */
input[type="email" i] { border: 2px solid blue; } /* Case insensitive */

/* Combinators */
.parent > .child { color: red; } /* Direct child */
.sibling + .next { margin-top: 20px; } /* Adjacent sibling */
.sibling ~ .later { opacity: 0.8; } /* General sibling */`,
    },
  ],

  examples: [
    {
      id: 1,
      title: "💻 CSS Code Examples",
      description:
        "Practical CSS examples demonstrating common patterns, components, and techniques used in modern web development.",
      color: "blue",
    },
    {
      id: 2,
      title: "🎨 Modern Card Component",
      description:
        "A responsive card component with hover effects, shadows, and modern styling techniques.",
      color: "green",
      code: `/* Modern Card Component */
.card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.card:hover .card-image {
    transform: scale(1.05);
}

.card-content {
    padding: 1.5rem;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
}

.card-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.card-footer {
    padding: 1rem 1.5rem;
    background: #f8f9fa;
    border-top: 1px solid #e9ecef;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s ease;
}

.card-button:hover {
    background: #0056b3;
}`,
    },
    {
      id: 3,
      title: "🧭 Navigation Menu",
      description:
        "A responsive navigation menu with dropdown functionality and mobile hamburger menu.",
      color: "purple",
      code: `/* Navigation Menu */
.navbar {
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
}

.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-item {
    position: relative;
}

.nav-link {
    display: block;
    padding: 1rem;
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #007bff;
}

/* Dropdown */
.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    min-width: 200px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.nav-item:hover .dropdown {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Mobile Menu */
.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.hamburger span {
    width: 25px;
    height: 3px;
    background: #333;
    margin: 3px 0;
    transition: 0.3s;
}

@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 60px;
        flex-direction: column;
        background: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0,0,0,0.05);
    }
    
    .nav-menu.active {
        left: 0;
    }
}`,
    },
    {
      id: 4,
      title: "📱 Responsive Grid Layout",
      description:
        "A flexible grid system that adapts to different screen sizes using CSS Grid and media queries.",
      color: "orange",
      code: `/* Responsive Grid Layout */
.grid-container {
    display: grid;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Desktop: 4 columns */
@media (min-width: 1024px) {
    .grid-container {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Tablet: 2 columns */
@media (min-width: 768px) and (max-width: 1023px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }
}

/* Mobile: 1 column */
@media (max-width: 767px) {
    .grid-container {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
    }
}

/* Auto-fit responsive grid */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

/* Grid item variations */
.grid-item {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.grid-item.featured {
    grid-column: span 2;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.grid-item.tall {
    grid-row: span 2;
}

/* Subgrid support */
@supports (grid-template-rows: subgrid) {
    .nested-grid {
        display: grid;
        grid-template-rows: subgrid;
        grid-row: span 3;
    }
}`,
    },
  ],

  responsive: [
    {
      id: 1,
      title: "📱 Responsive Design",
      description:
        "Responsive design ensures your website looks and functions perfectly on all devices and screen sizes.",
      color: "blue",
    },
    {
      id: 2,
      title: "📐 Media Queries",
      description:
        "Media queries allow you to apply different styles based on device characteristics like screen size.",
      color: "green",
      code: `/* Standard breakpoints */
/* Mobile first approach */
.container {
    padding: 1rem;
}

/* Small tablets */
@media (min-width: 576px) {
    .container {
        padding: 1.5rem;
    }
}

/* Large tablets */
@media (min-width: 768px) {
    .container {
        padding: 2rem;
        max-width: 750px;
        margin: 0 auto;
    }
}

/* Small desktops */
@media (min-width: 992px) {
    .container {
        max-width: 970px;
    }
}

/* Large desktops */
@media (min-width: 1200px) {
    .container {
        max-width: 1170px;
    }
}

/* Advanced media queries */
@media (orientation: landscape) {
    .hero { height: 100vh; }
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #e0e0e0;
    }
}`,
    },
    {
      id: 3,
      title: "🔧 Flexible Units",
      description:
        "Using relative units helps create flexible layouts that adapt to different contexts and user preferences.",
      color: "purple",
      code: `/* Relative units */
.flexible-text {
    font-size: 1.2rem; /* Relative to root font-size */
    padding: 0.5em; /* Relative to element's font-size */
    margin: 2vh 5vw; /* Viewport height/width */
    width: 80%; /* Percentage of parent */
    max-width: 60ch; /* Character width */
}

/* Viewport units */
.full-screen {
    width: 100vw; /* Full viewport width */
    height: 100vh; /* Full viewport height */
    min-height: 100svh; /* Small viewport height (mobile) */
}

.hero-text {
    font-size: clamp(2rem, 4vw, 4rem); /* Responsive font size */
}

/* Container queries (modern) */
@container (min-width: 400px) {
    .card {
        display: flex;
        gap: 1rem;
    }
}

/* CSS functions for flexibility */
.responsive-spacing {
    padding: min(5%, 2rem); /* Smaller of 5% or 2rem */
    margin: max(1rem, 3%); /* Larger of 1rem or 3% */
    gap: clamp(1rem, 2.5%, 2rem); /* Between 1rem and 2rem */
}

/* Fluid typography */
.fluid-type {
    font-size: calc(1rem + 2vw);
    line-height: calc(1.4 + 0.2vw);
}`,
    },
    {
      id: 4,
      title: "🖼️ Responsive Images",
      description:
        "Techniques for making images responsive and optimized for different devices and screen densities.",
      color: "orange",
      code: `/* Basic responsive image */
.responsive-image {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Picture element for art direction */
/* HTML:
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="Description">
</picture>
*/

/* Object-fit for maintaining aspect ratio */
.cover-image {
    width: 100%;
    height: 300px;
    object-fit: cover; /* cover, contain, fill, scale-down */
    object-position: center; /* Positioning within container */
}

/* Responsive background images */
.hero-bg {
    background-image: url('mobile-bg.jpg');
    background-size: cover;
    background-position: center;
    min-height: 300px;
}

@media (min-width: 768px) {
    .hero-bg {
        background-image: url('desktop-bg.jpg');
        min-height: 500px;
    }
}

/* High DPI support */
.retina-image {
    background-image: url('image.jpg');
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .retina-image {
        background-image: url('image@2x.jpg');
        background-size: 100% 100%;
    }
}

/* Aspect ratio containers */
.aspect-ratio-16-9 {
    aspect-ratio: 16 / 9;
    overflow: hidden;
}

/* Fallback for older browsers */
.aspect-ratio-16-9::before {
    content: '';
    display: block;
    padding-top: 56.25%; /* 9/16 * 100% */
}`,
    },
  ],

  interview: [
    {
      id: 1,
      title: "What is the CSS Box Model?",
      description: `<div className="text-blue-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> The CSS Box Model describes how elements are structured and how space is calculated around them.</p>
                                        <p><strong>Components (from inside out):</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>Content:</strong> The actual content (text, images, etc.)</li>
                                            <li><strong>Padding:</strong> Space between content and border</li>
                                            <li><strong>Border:</strong> The border around the padding</li>
                                            <li><strong>Margin:</strong> Space outside the border</li>
                                        </ul>
                                        <p><strong>Box-sizing:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><code>content-box</code> (default): Width/height applies to content only</li>
                                            <li><code>border-box</code>: Width/height includes padding and border</li>
                                        </ul>
                                    </div>`,
      color: "blue",
      code: `/* Box model example */
.box {
    width: 300px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
    box-sizing: border-box;
}`,
    },
    {
      id: 2,
      title: "Explain the difference between Flexbox and Grid",
      description: `<div className="text-green-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong></p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <p><strong>Flexbox (1D Layout):</strong></p>
                                                <ul className="list-disc ml-4 space-y-1">
                                                    <li>One-dimensional (row OR column)</li>
                                                    <li>Content-first approach</li>
                                                    <li>Great for component-level layout</li>
                                                    <li>Perfect for navigation, centering</li>
                                                    <li>Items can grow/shrink dynamically</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p><strong>Grid (2D Layout):</strong></p>
                                                <ul className="list-disc ml-4 space-y-1">
                                                    <li>Two-dimensional (rows AND columns)</li>
                                                    <li>Layout-first approach</li>
                                                    <li>Great for page-level layout</li>
                                                    <li>Perfect for complex layouts</li>
                                                    <li>Precise control over placement</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>`,
      color: "green",
      code: `/* Flexbox */
.flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Grid */
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}`,
    },
    {
      id: 3,
      title: "What is CSS Specificity and how is it calculated?",
      description: `<div className="text-purple-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> CSS Specificity determines which styles are applied when multiple rules target the same element.</p>
                                        <p><strong>Specificity hierarchy (highest to lowest):</strong></p>
                                        <ol className="list-decimal ml-4 space-y-1">
                                            <li><strong>Inline styles:</strong> style="..." (1000 points)</li>
                                            <li><strong>IDs:</strong> #header (100 points)</li>
                                            <li><strong>Classes/attributes/pseudo-classes:</strong> .nav, [type="text"], :hover (10 points)</li>
                                            <li><strong>Elements/pseudo-elements:</strong> div, ::before (1 point)</li>
                                        </ol>
                                        <p><strong>Special rules:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><code>!important</code> overrides everything</li>
                                            <li>Equal specificity: last rule wins</li>
                                            <li>Inherited styles have specificity of 0</li>
                                        </ul>
                                    </div>`,
      color: "purple",
      code: `/* Specificity examples */
div.nav#header { } /* 111 points */
.nav a:hover { } /* 21 points */
div a { } /* 2 points */
* { } /* 0 points */`,
    },
    {
      id: 4,
      title: "How do CSS Animations work?",
      description: `<div className="text-orange-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> CSS animations allow elements to gradually change from one style to another over time.</p>
                                        <p><strong>Two main types:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>Transitions:</strong> Animate between two states (hover, focus, etc.)</li>
                                            <li><strong>Keyframe animations:</strong> More complex animations with multiple stages</li>
                                        </ul>
                                        <p><strong>Animation properties:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><code>animation-name</code>: References @keyframes</li>
                                            <li><code>animation-duration</code>: How long animation runs</li>
                                            <li><code>animation-timing-function</code>: Speed curve</li>
                                            <li><code>animation-iteration-count</code>: How many times</li>
                                            <li><code>animation-direction</code>: Forward, reverse, alternate</li>
                                        </ul>
                                    </div>`,
      color: "orange",
      code: `/* Keyframe animation */
@keyframes slideIn {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0); }
}

.animated {
    animation: slideIn 0.5s ease-out;
}

/* Transition */
.button {
    transition: background-color 0.3s ease;
}

.button:hover {
    background-color: blue;
}`,
    },
    {
      id: 5,
      title: "What are CSS Variables and their advantages?",
      description: `<div className="text-red-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> CSS Variables (Custom Properties) allow you to store values that can be reused throughout your stylesheet.</p>
                                        <p><strong>Syntax:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li>Declaration: <code>--variable-name: value;</code></li>
                                            <li>Usage: <code>var(--variable-name)</code></li>
                                            <li>Fallback: <code>var(--variable-name, fallback-value)</code></li>
                                        </ul>
                                        <p><strong>Advantages:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li>Dynamic values (can be changed with JavaScript)</li>
                                            <li>Inheritance and cascading support</li>
                                            <li>Runtime evaluation (unlike Sass variables)</li>
                                            <li>Better theming capabilities</li>
                                            <li>Reduced code duplication</li>
                                        </ul>
                                    </div>`,
      color: "red",
      code: `/* CSS Variables */
:root {
    --primary-color: #3498db;
    --spacing: 1rem;
}

.button {
    background: var(--primary-color);
    padding: var(--spacing);
}

/* JavaScript interaction */
document.documentElement.style
    .setProperty('--primary-color', '#e74c3c');`,
    },
    {
      id: 6,
      title: "Explain CSS Position values and when to use them",
      description: `<div className="text-teal-700 text-sm space-y-2">
                                        <p><strong>Answer:</strong> CSS position property controls how elements are positioned in the document.</p>
                                        <div className="space-y-2">
                                            <div><strong>static (default):</strong> Normal document flow, top/left/right/bottom have no effect</div>
                                            <div><strong>relative:</strong> Positioned relative to its normal position, creates positioning context</div>
                                            <div><strong>absolute:</strong> Positioned relative to nearest positioned ancestor, removed from normal flow</div>
                                            <div><strong>fixed:</strong> Positioned relative to viewport, stays in place when scrolling</div>
                                            <div><strong>sticky:</strong> Switches between relative and fixed based on scroll position</div>
                                        </div>
                                        <p><strong>Use cases:</strong></p>
                                        <ul className="list-disc ml-4 space-y-1">
                                            <li><strong>relative:</strong> Small adjustments, positioning context for children</li>
                                            <li><strong>absolute:</strong> Overlays, tooltips, dropdown menus</li>
                                            <li><strong>fixed:</strong> Navigation bars, chat widgets</li>
                                            <li><strong>sticky:</strong> Table headers, navigation that sticks on scroll</li>
                                        </ul>
                                    </div>`,
      color: "yellow",
      code: `/* Position examples */
.relative {
    position: relative;
    top: 10px; /* Move down 10px */
}

.absolute {
    position: absolute;
    top: 0;
    right: 0; /* Top-right corner of positioned parent */
}

.fixed {
    position: fixed;
    bottom: 20px;
    right: 20px; /* Fixed chat button */
}

.sticky {
    position: sticky;
    top: 0; /* Stick to top when scrolling */
}`,
    },
  ],

  default: [
    {
      id: "default",
      title: "Other CSS Topics",
      color: "purple",
      description: "More CSS concepts and examples coming soon",
    },
  ],
};
