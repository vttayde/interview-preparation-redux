/**
 * Performance monitoring utilities for React components
 * Helps identify performance bottlenecks and optimization opportunities
 */

import { useRef, useEffect, useCallback, memo } from 'react';

/**
 * Simple performance timer utility
 */
export class PerformanceTimer {
    constructor(name) {
        this.name = name;
        this.startTime = null;
        this.measurements = [];
    }
    
    start() {
        this.startTime = performance.now();
        return this;
    }
    
    end() {
        if (!this.startTime) {
            console.warn(`Timer ${this.name} was not started`);
            return 0;
        }
        
        const duration = performance.now() - this.startTime;
        this.measurements.push(duration);
        
        if (import.meta.env?.DEV) {
            console.log(`⏱️ ${this.name}: ${duration.toFixed(2)}ms`);
        }
        
        this.startTime = null;
        return duration;
    }
    
    getAverageTime() {
        if (this.measurements.length === 0) return 0;
        return this.measurements.reduce((sum, time) => sum + time, 0) / this.measurements.length;
    }
    
    getStats() {
        if (this.measurements.length === 0) {
            return { count: 0, average: 0, min: 0, max: 0 };
        }
        
        return {
            count: this.measurements.length,
            average: this.getAverageTime(),
            min: Math.min(...this.measurements),
            max: Math.max(...this.measurements),
            latest: this.measurements[this.measurements.length - 1]
        };
    }
}

/**
 * Performance monitoring hook for React components
 * @param {string} componentName - Name of the component being monitored
 * @param {Object} dependencies - Dependencies to watch for re-renders
 */
export const usePerformanceMonitor = (componentName, dependencies = {}) => {
    const timer = useRef(new PerformanceTimer(componentName));
    const renderCount = useRef(0);
    const mountTime = useRef(performance.now());
    
    // Track renders
    useEffect(() => {
        renderCount.current++;
        
        if (import.meta.env?.DEV) {
            console.log(`🔄 ${componentName} render #${renderCount.current}`);
            
            // Log dependency changes
            const dependencyKeys = Object.keys(dependencies);
            if (dependencyKeys.length > 0) {
                console.log(`📊 ${componentName} dependencies:`, dependencies);
            }
        }
    });
    
    // Track mount/unmount
    useEffect(() => {
        const startTime = performance.now();
        const currentTimer = timer.current;
        const currentMountTime = mountTime.current;
        
        if (import.meta.env?.DEV) {
            const mountDuration = startTime - currentMountTime;
            console.log(`🚀 ${componentName} mounted in ${mountDuration.toFixed(2)}ms`);
        }
        
        return () => {
            if (import.meta.env?.DEV) {
                const unmountTime = performance.now();
                const totalLifetime = unmountTime - currentMountTime;
                console.log(`💀 ${componentName} unmounted after ${totalLifetime.toFixed(2)}ms`);
                console.log(`📈 ${componentName} final stats:`, currentTimer.getStats());
            }
        };
    }, [componentName]);
    
    return {
        startTimer: () => timer.current.start(),
        endTimer: () => timer.current.end(),
        getRenderCount: () => renderCount.current,
        getStats: () => timer.current.getStats()
    };
};

/**
 * HOC to wrap components with performance monitoring
 * @param {React.Component} Component - Component to monitor
 * @param {string} displayName - Optional display name for monitoring
 */
export const withPerformanceMonitoring = (Component, displayName) => {
    const componentName = displayName || Component.displayName || Component.name || 'UnknownComponent';
    
    return memo(function MonitoredComponent(props) {
        const monitor = usePerformanceMonitor(componentName, props);
        
        useEffect(() => {
            monitor.startTimer();
            return () => monitor.endTimer();
        });
        
        return <Component {...props} />;
    });
};

/**
 * Debounce utility for expensive operations
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 */
export const useDebounce = (func, delay) => {
    const timeoutRef = useRef(null);
    
    return useCallback((...args) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
            func(...args);
        }, delay);
    }, [func, delay]);
};

/**
 * Throttle utility for high-frequency events
 * @param {Function} func - Function to throttle
 * @param {number} delay - Delay in milliseconds
 */
export const useThrottle = (func, delay) => {
    const lastCallRef = useRef(0);
    
    return useCallback((...args) => {
        const now = performance.now();
        
        if (now - lastCallRef.current >= delay) {
            lastCallRef.current = now;
            func(...args);
        }
    }, [func, delay]);
};

/**
 * Memory usage tracker (simplified)
 */
export const trackMemoryUsage = (label = 'Memory Check') => {
    if (import.meta.env?.DEV && performance.memory) {
        const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } = performance.memory;
        
        console.log(`🧠 ${label}:`, {
            used: `${(usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
            total: `${(totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
            limit: `${(jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`,
            usage: `${((usedJSHeapSize / totalJSHeapSize) * 100).toFixed(1)}%`
        });
    }
};

/**
 * Bundle size analyzer utility
 */
export const analyzeBundleSize = () => {
    if (import.meta.env?.DEV) {
        console.group('📦 Bundle Analysis');
        
        // Analyze loaded modules (simplified)
        const scripts = document.querySelectorAll('script[src]');
        
        scripts.forEach(script => {
            if (script.src.includes('assets')) {
                console.log(`📄 Script: ${script.src.split('/').pop()}`);
            }
        });
        
        // Memory snapshot
        trackMemoryUsage('Bundle Load');
        
        console.groupEnd();
    }
};
/**
 * Component render tracking utility
 * @param {string} componentName - Name of the component
 * @param {Object} props - Component props to track
 */
export const trackComponentRender = (componentName, props = {}) => {
    if (import.meta.env?.DEV) {
        const propsKeys = Object.keys(props);
        const timestamp = new Date().toLocaleTimeString();
        
        console.group(`🎨 ${componentName} @ ${timestamp}`);
        
        if (propsKeys.length > 0) {
            console.log('Props:', props);
        }
        
        // Check for potential performance issues
        const warnings = [];
        
        // Check for large objects in props
        propsKeys.forEach(key => {
            const value = props[key];
            if (Array.isArray(value) && value.length > 100) {
                warnings.push(`Large array in prop '${key}': ${value.length} items`);
            }
            if (typeof value === 'object' && value !== null) {
                const objKeys = Object.keys(value);
                if (objKeys.length > 20) {
                    warnings.push(`Large object in prop '${key}': ${objKeys.length} properties`);
                }
            }
        });
        
        if (warnings.length > 0) {
            console.warn('⚠️ Performance warnings:', warnings);
        }
        
        console.groupEnd();
    }
};

// Global performance tracking setup
if (import.meta.env?.DEV) {
    // Track page load performance
    window.addEventListener('load', () => {
        setTimeout(() => {
            const timing = performance.getEntriesByType('navigation')[0];
            if (timing) {
                console.group('🚀 App Performance Metrics');
                console.log(`DOM Content Loaded: ${timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart}ms`);
                console.log(`Total Load Time: ${timing.loadEventEnd - timing.loadEventStart}ms`);
                
                const paintEntries = performance.getEntriesByType('paint');
                if (paintEntries.length > 0) {
                    console.log(`First Paint: ${paintEntries[0].startTime.toFixed(2)}ms`);
                }
                
                analyzeBundleSize();
                console.groupEnd();
            }
        }, 1000);
    });
}
