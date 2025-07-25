import React, { Suspense, lazy } from 'react';

// Simple loading component
const Loading = () => (
    <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-gray-600">Loading...</p>
        </div>
    </div>
);

// Lazy loaded study topic components
export const LazyIntroduction = lazy(() => import('../pages/study-topics/introduction/Introduction'));
export const LazyHTML = lazy(() => import('../pages/study-topics/html/HTML'));
export const LazyCSS = lazy(() => import('../pages/study-topics/css/CSS'));
export const LazyJavaScript = lazy(() => import('../pages/study-topics/javascript/JavaScript'));
export const LazyReactJS = lazy(() => import('../pages/study-topics/reactjs/ReactJS'));
export const LazyTypeScript = lazy(() => import('../pages/study-topics/typescript/TypeScript'));
export const LazyNodeJS = lazy(() => import('../pages/study-topics/nodejs/NodeJS'));
export const LazyDatabase = lazy(() => import('../pages/study-topics/database/Database'));
export const LazyProjects = lazy(() => import('../pages/study-topics/projects/Projects'));
export const LazyInterviewQuestions = lazy(() => import('../pages/study-topics/interview-questions/InterviewQuestions'));

// Simple wrapper component for lazy loading
export const LazyWrapper = ({ children }) => (
    <Suspense fallback={<Loading />}>
        {children}
    </Suspense>
);
