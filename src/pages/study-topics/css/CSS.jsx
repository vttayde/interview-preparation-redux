import { useState } from 'react';
import TopicsNavigation from '../../../components/layout/TopicsNavigation';

const CSS = () => {
    const [activeTab, setActiveTab] = useState('basics');

    const tabs = [
        { id: 'basics', name: 'CSS Fundamentals', icon: '🎨' },
        { id: 'layout', name: 'Layout Systems', icon: '📐' },
        { id: 'advanced', name: 'Advanced CSS', icon: '🚀' },
        { id: 'examples', name: 'Code Examples', icon: '💻' },
        { id: 'responsive', name: 'Responsive Design', icon: '📱' },
        { id: 'interview', name: 'Interview Q&A', icon: '❓' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'basics':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is CSS?</h2>
                            <p className="text-gray-600 mb-4">
                                CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents.
                                It controls layout, colors, fonts, spacing, animations, and visual effects that make web pages beautiful and interactive.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Core Concepts</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">🎯 Selectors</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        CSS selectors are patterns used to select and style HTML elements. They are the foundation of CSS targeting.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Examples:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`/* Element selector */
h1 { color: blue; }

/* Class selector */
.container { max-width: 1200px; }

/* ID selector */
#header { background: #333; }

/* Attribute selector */
input[type="email"] { border: 2px solid blue; }

/* Pseudo-class */
a:hover { color: red; }

/* Pseudo-element */
p::first-line { font-weight: bold; }

/* Descendant selector */
.card p { margin-bottom: 1rem; }

/* Child selector */
.nav > li { display: inline-block; }`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">📦 Box Model</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        The CSS box model describes how elements are structured with content, padding, border, and margin layers.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Structure:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`/* Box model properties */
.box {
  width: 200px;          /* Content width */
  height: 100px;         /* Content height */
  padding: 20px;         /* Space inside border */
  border: 2px solid #333; /* Border around content */
  margin: 15px;          /* Space outside border */
}

/* Box-sizing property */
.border-box {
  box-sizing: border-box; /* Include padding & border in width */
}

/* Total element width = width + padding + border + margin
   Content box: 200 + 40 + 4 + 30 = 274px
   Border box: 200px (padding & border included) */`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-3 text-lg">🎨 Colors & Typography</h4>
                                    <p className="text-yellow-700 text-sm mb-3">
                                        CSS provides multiple ways to define colors and control text appearance for beautiful, readable designs.
                                    </p>
                                    <div className="bg-yellow-100 p-3 rounded text-xs">
                                        <strong>Examples:</strong>
                                        <pre className="mt-2 text-yellow-800">
                                            {`/* Color formats */
.element {
  color: red;                    /* Named color */
  color: #ff0000;               /* Hex color */
  color: rgb(255, 0, 0);        /* RGB */
  color: rgba(255, 0, 0, 0.5);  /* RGBA with transparency */
  color: hsl(0, 100%, 50%);     /* HSL */
  color: hsla(0, 100%, 50%, 0.5); /* HSLA */
}

/* Typography */
.text {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1px;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-purple-800 mb-3 text-lg">⚡ CSS Variables</h4>
                                    <p className="text-purple-700 text-sm mb-3">
                                        CSS custom properties (variables) allow you to store values that can be reused throughout your stylesheet.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Example:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`:root {
  /* Define global variables */
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --font-size-large: 24px;
  --spacing-unit: 8px;
  --border-radius: 4px;
}

/* Use variables */
.button {
  background-color: var(--primary-color);
  font-size: var(--font-size-large);
  padding: calc(var(--spacing-unit) * 2);
  border-radius: var(--border-radius);
}

.button:hover {
  background-color: var(--secondary-color);
}

/* Fallback values */
.element {
  color: var(--text-color, #333); /* Use #333 if --text-color not defined */
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">CSS Specificity</h3>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700 text-sm mb-3">
                                    Specificity determines which CSS rule applies when multiple rules target the same element.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                                    <div className="bg-red-100 p-2 rounded text-center">
                                        <strong className="text-red-800">Inline Styles</strong>
                                        <div className="text-red-700">1000 points</div>
                                    </div>
                                    <div className="bg-orange-100 p-2 rounded text-center">
                                        <strong className="text-orange-800">IDs</strong>
                                        <div className="text-orange-700">100 points</div>
                                    </div>
                                    <div className="bg-yellow-100 p-2 rounded text-center">
                                        <strong className="text-yellow-800">Classes</strong>
                                        <div className="text-yellow-700">10 points</div>
                                    </div>
                                    <div className="bg-blue-100 p-2 rounded text-center">
                                        <strong className="text-blue-800">Elements</strong>
                                        <div className="text-blue-700">1 point</div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'layout':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">CSS Layout Systems</h2>
                            <p className="text-gray-600 mb-4">
                                Modern CSS provides powerful layout systems to create responsive, flexible designs.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Layout Methods</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">📏 Flexbox</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        Flexbox is a one-dimensional layout method for arranging items in rows or columns with flexible sizing.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Flexbox Properties:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`/* Container properties */
.flex-container {
  display: flex;
  flex-direction: row; /* row, column, row-reverse, column-reverse */
  justify-content: center; /* main axis alignment */
  align-items: center; /* cross axis alignment */
  flex-wrap: wrap; /* allow wrapping */
  gap: 1rem; /* space between items */
}

/* Item properties */
.flex-item {
  flex: 1; /* grow, shrink, basis */
  flex-grow: 1; /* how much to grow */
  flex-shrink: 0; /* how much to shrink */
  flex-basis: 200px; /* initial size */
  align-self: flex-start; /* override container alignment */
}

/* Common patterns */
.center-everything {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🎯 CSS Grid</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        CSS Grid is a two-dimensional layout system for creating complex layouts with rows and columns.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Grid Properties:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`/* Container properties */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: 100px auto 100px; /* explicit row sizes */
  gap: 20px; /* row and column gap */
  
  /* Named grid areas */
  grid-template-areas: 
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

/* Item properties */
.grid-item {
  grid-column: 1 / 3; /* span from column 1 to 3 */
  grid-row: 2 / 4; /* span from row 2 to 4 */
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }

/* Responsive grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-yellow-500 pl-6 bg-yellow-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">📍 Positioning</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        CSS positioning allows precise control over element placement in the document flow.
                                    </p>
                                    <div className="bg-yellow-100 p-3 rounded text-xs">
                                        <strong>Position Values:</strong>
                                        <pre className="mt-2 text-yellow-800">
                                            {`/* Static (default) - normal document flow */
.static { position: static; }

/* Relative - relative to its normal position */
.relative {
  position: relative;
  top: 10px; /* move 10px down from normal position */
  left: 20px; /* move 20px right from normal position */
}

/* Absolute - relative to nearest positioned ancestor */
.absolute {
  position: absolute;
  top: 0; /* distance from top of positioned parent */
  right: 0; /* distance from right of positioned parent */
}

/* Fixed - relative to viewport */
.fixed {
  position: fixed;
  top: 0; /* stick to top of screen */
  width: 100%;
  z-index: 1000; /* layer order */
}

/* Sticky - hybrid of relative and fixed */
.sticky {
  position: sticky;
  top: 0; /* becomes fixed when scrolled to this position */
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'advanced':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Advanced CSS Techniques</h2>
                            <p className="text-gray-600 mb-4">
                                Master advanced CSS features for creating interactive and visually stunning web experiences.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Features</h3>
                            <div className="space-y-6">
                                <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🎬 Animations & Transitions</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        CSS animations and transitions bring life to web pages with smooth, performant effects.
                                    </p>
                                    <div className="bg-purple-100 p-3 rounded text-xs">
                                        <strong>Examples:</strong>
                                        <pre className="mt-2 text-purple-800">
                                            {`/* Transitions - smooth property changes */
.button {
  background-color: blue;
  transition: all 0.3s ease;
  /* property duration timing-function delay */
}

.button:hover {
  background-color: red;
  transform: scale(1.1);
}

/* Keyframe animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeIn 0.5s ease-out forwards;
}

/* Complex animation */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.pulse {
  animation: pulse 2s infinite;
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🔄 Transforms</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        CSS transforms allow you to translate, rotate, scale, and skew elements in 2D and 3D space.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Transform Functions:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`/* 2D Transforms */
.transform-2d {
  transform: translateX(50px); /* move horizontally */
  transform: translateY(20px); /* move vertically */
  transform: translate(50px, 20px); /* move both */
  transform: rotate(45deg); /* rotate */
  transform: scale(1.5); /* scale up */
  transform: scale(0.8, 1.2); /* scale width, height differently */
  transform: skew(10deg, 5deg); /* skew */
}

/* 3D Transforms */
.transform-3d {
  transform-style: preserve-3d;
  perspective: 1000px;
  
  transform: translateZ(50px); /* move in 3D space */
  transform: rotateX(45deg); /* rotate around X axis */
  transform: rotateY(45deg); /* rotate around Y axis */
  transform: rotateZ(45deg); /* rotate around Z axis */
}

/* Combine multiple transforms */
.card {
  transform: rotate(5deg) scale(1.1) translateY(-10px);
  transition: transform 0.3s ease;
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">🎨 Advanced Selectors</h4>
                                    <p className="text-gray-600 text-sm mb-3">
                                        CSS provides powerful selectors for precise element targeting and dynamic styling.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Selector Examples:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`/* Pseudo-classes */
:nth-child(odd) { background: #f0f0f0; } /* odd elements */
:nth-child(3n+1) { color: red; } /* every 3rd element starting from 1st */
:first-child { margin-top: 0; }
:last-child { margin-bottom: 0; }
:not(.excluded) { display: block; } /* elements without .excluded class */

/* Pseudo-elements */
::before {
  content: "★ ";
  color: gold;
}

::after {
  content: "";
  display: block;
  clear: both;
}

::first-line { font-weight: bold; }
::first-letter { font-size: 2em; }

/* Attribute selectors */
input[required] { border-color: red; }
a[href^="https"] { color: green; } /* starts with https */
img[src$=".jpg"] { border: 1px solid; } /* ends with .jpg */
div[class*="card"] { padding: 1rem; } /* contains "card" */

/* Combinators */
.parent > .child { /* direct child */ }
.sibling + .next { /* adjacent sibling */ }
.sibling ~ .later { /* general sibling */ }`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'examples':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Practical CSS Examples</h2>
                            <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Complete Card Component</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  max-width: 300px;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
}

.card-description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.card-button {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.card-button:hover {
  background: #0056b3;
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">Navigation Bar</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: white;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.navbar-item {
  position: relative;
}

.navbar-link {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

.navbar-link:hover,
.navbar-link.active {
  background: rgba(255, 255, 255, 0.1);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    padding: 1rem;
  }
  
  .navbar-menu {
    margin-top: 1rem;
    flex-direction: column;
    width: 100%;
  }
}`}
                                    </pre>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h4 className="font-semibold mb-2">CSS Grid Layout System</h4>
                                    <pre className="text-sm text-gray-700 overflow-x-auto">
                                        {`/* Modern CSS Grid Layout */
.layout {
  display: grid;
  min-height: 100vh;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 250px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
}

.header {
  grid-area: header;
  background: #333;
  color: white;
  padding: 1rem;
}

.sidebar {
  grid-area: sidebar;
  background: #f8f9fa;
  padding: 1rem;
}

.main {
  grid-area: main;
  padding: 1rem;
}

.aside {
  grid-area: aside;
  background: #e9ecef;
  padding: 1rem;
}

.footer {
  grid-area: footer;
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

/* Responsive breakpoints */
@media (max-width: 1024px) {
  .layout {
    grid-template-areas:
      "header header"
      "main aside"
      "sidebar sidebar"
      "footer footer";
    grid-template-columns: 1fr 200px;
  }
}

@media (max-width: 768px) {
  .layout {
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "aside"
      "footer";
    grid-template-columns: 1fr;
  }
}`}
                                    </pre>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'responsive':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsive Web Design</h2>
                            <p className="text-gray-600 mb-4">
                                Create layouts that work seamlessly across all device sizes and screen resolutions.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Responsive Techniques</h3>
                            <div className="space-y-6">
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-blue-800 mb-3 text-lg">📱 Media Queries</h4>
                                    <p className="text-blue-700 text-sm mb-3">
                                        Media queries allow you to apply different styles based on device characteristics like screen size.
                                    </p>
                                    <div className="bg-blue-100 p-3 rounded text-xs">
                                        <strong>Breakpoint Examples:</strong>
                                        <pre className="mt-2 text-blue-800">
                                            {`/* Mobile First Approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    max-width: 750px;
    margin: 0 auto;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 2rem;
  }
}

/* Large screens */
@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
}

/* Orientation queries */
@media (orientation: landscape) {
  .hero { height: 60vh; }
}

/* High DPI displays */
@media (-webkit-min-device-pixel-ratio: 2) {
  .logo { background-image: url('logo@2x.png'); }
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-green-800 mb-3 text-lg">📐 Flexible Units</h4>
                                    <p className="text-green-700 text-sm mb-3">
                                        Use relative units and flexible sizing for layouts that adapt to different screen sizes.
                                    </p>
                                    <div className="bg-green-100 p-3 rounded text-xs">
                                        <strong>Unit Examples:</strong>
                                        <pre className="mt-2 text-green-800">
                                            {`/* Relative units */
.responsive-text {
  font-size: 4vw; /* 4% of viewport width */
  font-size: clamp(16px, 4vw, 24px); /* min, flexible, max */
}

/* Container queries (modern browsers) */
.card {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card-title {
    font-size: 1.5rem;
  }
}

/* Flexible grids */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Intrinsic sizing */
.flexible-width {
  width: min(90%, 1200px); /* smaller of 90% or 1200px */
  width: max(300px, 50%); /* larger of 300px or 50% */
  width: fit-content; /* shrink to content size */
}`}
                                        </pre>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-yellow-800 mb-3 text-lg">🖼️ Responsive Images</h4>
                                    <p className="text-yellow-700 text-sm mb-3">
                                        Optimize images for different screen sizes and resolutions to improve performance and user experience.
                                    </p>
                                    <div className="bg-yellow-100 p-3 rounded text-xs">
                                        <strong>Image Techniques:</strong>
                                        <pre className="mt-2 text-yellow-800">
                                            {`/* Basic responsive image */
.responsive-img {
  max-width: 100%;
  height: auto;
}

/* Picture element for different sources */
/* <picture>
  <source media="(min-width: 800px)" srcset="large.jpg">
  <source media="(min-width: 400px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture> */

/* CSS object-fit for aspect ratio control */
.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.fitted-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* cover, contain, fill, scale-down */
  object-position: center top; /* positioning within container */
}

/* Aspect ratio boxes */
.aspect-ratio-16-9 {
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

/* Fallback for older browsers */
.aspect-ratio-16-9-fallback {
  position: relative;
  padding-bottom: 56.25%; /* 9/16 * 100% */
  height: 0;
}

.aspect-ratio-16-9-fallback img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                );

            case 'interview':
                return (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">CSS Interview Questions</h2>
                            <div className="space-y-4">
                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        📦 Explain the CSS Box Model in detail
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            The CSS box model describes how elements are structured and sized on the page.
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                            <div className="bg-blue-50 p-3 rounded text-center">
                                                <strong className="text-blue-800">Content</strong>
                                                <div className="text-blue-700 text-xs mt-1">The actual content (text, images)</div>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded text-center">
                                                <strong className="text-green-800">Padding</strong>
                                                <div className="text-green-700 text-xs mt-1">Space inside the border</div>
                                            </div>
                                            <div className="bg-yellow-50 p-3 rounded text-center">
                                                <strong className="text-yellow-800">Border</strong>
                                                <div className="text-yellow-700 text-xs mt-1">Line around padding & content</div>
                                            </div>
                                            <div className="bg-red-50 p-3 rounded text-center">
                                                <strong className="text-red-800">Margin</strong>
                                                <div className="text-red-700 text-xs mt-1">Space outside the border</div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded">
                                            <code className="text-gray-800 text-xs">
                                                Total width = content + padding + border + margin
                                            </code>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🆚 What's the difference between Flexbox and Grid?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-3 rounded">
                                                <p className="text-blue-800 font-medium text-sm mb-2">Flexbox (1D Layout)</p>
                                                <ul className="text-blue-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>One-dimensional (row OR column)</li>
                                                    <li>Content-driven layout</li>
                                                    <li>Best for component layouts</li>
                                                    <li>Flexible item sizing</li>
                                                    <li>Great for navigation bars, cards</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded">
                                                <p className="text-green-800 font-medium text-sm mb-2">Grid (2D Layout)</p>
                                                <ul className="text-green-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>Two-dimensional (rows AND columns)</li>
                                                    <li>Layout-driven design</li>
                                                    <li>Best for page layouts</li>
                                                    <li>Precise positioning control</li>
                                                    <li>Great for complex layouts, dashboards</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 text-sm">
                                            <strong>Use together:</strong> Grid for overall page layout, Flexbox for component layouts within grid areas.
                                        </p>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🎯 How does CSS specificity work?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            CSS specificity determines which style rule applies when multiple rules target the same element.
                                        </p>
                                        <div className="bg-blue-50 p-3 rounded">
                                            <p className="text-blue-800 font-medium text-sm mb-2">Specificity Calculation:</p>
                                            <div className="text-blue-700 text-xs space-y-1">
                                                <div>Inline styles: 1000 points</div>
                                                <div>IDs: 100 points each</div>
                                                <div>Classes, attributes, pseudo-classes: 10 points each</div>
                                                <div>Elements and pseudo-elements: 1 point each</div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-3 rounded">
                                            <pre className="text-gray-700 text-xs">
                                                {`/* Examples with specificity scores */
h1 { } /* 0,0,0,1 = 1 */
.header h1 { } /* 0,0,1,1 = 11 */
#nav .header h1 { } /* 0,1,1,1 = 111 */
<h1 style="color: red;"> /* 1,0,0,0 = 1000 */`}
                                            </pre>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🌊 What is the CSS cascade and inheritance?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <div className="space-y-3">
                                            <div className="bg-blue-50 p-3 rounded">
                                                <p className="text-blue-800 font-medium text-sm mb-2">CSS Cascade Order:</p>
                                                <ol className="text-blue-700 text-xs space-y-1 list-decimal list-inside">
                                                    <li>Browser default styles</li>
                                                    <li>User stylesheets</li>
                                                    <li>Author stylesheets (your CSS)</li>
                                                    <li>Author !important declarations</li>
                                                    <li>User !important declarations</li>
                                                </ol>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded">
                                                <p className="text-green-800 font-medium text-sm mb-2">Inheritance:</p>
                                                <p className="text-green-700 text-xs">
                                                    Some CSS properties (like color, font-family) are inherited by child elements from their parents.
                                                    Others (like margin, padding) are not inherited.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        🔍 What are pseudo-classes and pseudo-elements?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-yellow-50 p-3 rounded">
                                                <p className="text-yellow-800 font-medium text-sm mb-2">Pseudo-classes (:)</p>
                                                <p className="text-yellow-700 text-xs mb-2">Select elements based on their state or position</p>
                                                <ul className="text-yellow-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>:hover - element is hovered</li>
                                                    <li>:focus - element has focus</li>
                                                    <li>:first-child - first child element</li>
                                                    <li>:nth-child(n) - nth child element</li>
                                                    <li>:not() - elements that don't match</li>
                                                </ul>
                                            </div>
                                            <div className="bg-purple-50 p-3 rounded">
                                                <p className="text-purple-800 font-medium text-sm mb-2">Pseudo-elements (::)</p>
                                                <p className="text-purple-700 text-xs mb-2">Select and style parts of elements</p>
                                                <ul className="text-purple-700 text-xs space-y-1 list-disc list-inside">
                                                    <li>::before - insert content before</li>
                                                    <li>::after - insert content after</li>
                                                    <li>::first-line - first line of text</li>
                                                    <li>::first-letter - first letter</li>
                                                    <li>::placeholder - input placeholder</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <details className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                    <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-blue-600">
                                        📱 How do you create responsive designs?
                                    </summary>
                                    <div className="mt-4 space-y-3">
                                        <p className="text-gray-700 text-sm leading-relaxed">
                                            Responsive design ensures websites work well on all devices and screen sizes.
                                        </p>
                                        <div className="bg-green-50 p-3 rounded">
                                            <p className="text-green-800 font-medium text-sm mb-2">Key Techniques:</p>
                                            <ul className="text-green-700 text-xs space-y-1 list-disc list-inside">
                                                <li><strong>Fluid grids:</strong> Use percentages instead of fixed widths</li>
                                                <li><strong>Flexible images:</strong> max-width: 100% for responsive images</li>
                                                <li><strong>Media queries:</strong> Different styles for different screen sizes</li>
                                                <li><strong>Mobile-first:</strong> Start with mobile styles, enhance for larger screens</li>
                                                <li><strong>Viewport meta tag:</strong> Control how page scales on mobile</li>
                                                <li><strong>CSS units:</strong> Use rem, em, vw, vh for scalable layouts</li>
                                            </ul>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </section>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="bg-white shadow rounded-lg p-6">
            <div className="border-b border-gray-200 pb-4 mb-6">
                <h1 className="text-3xl font-bold text-gray-900">CSS</h1>
                <p className="mt-2 text-gray-600">Cascading Style Sheets - Styling and layout for web pages</p>
            </div>

            {/* Tab Navigation */}
            <div className="mb-6">
                <nav className="flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${activeTab === tab.id
                                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                                : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            <span className="mr-2">{tab.icon}</span>
                            {tab.name}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                {renderTabContent()}
            </div>

            <TopicsNavigation />
        </div>
    );
};

export default CSS;
