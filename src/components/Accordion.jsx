import React, { useState, useCallback, useMemo, useEffect, createContext, useContext } from 'react';

/**
 * Accordion Context for managing shared state between compound components
 */
const AccordionContext = createContext();

/**
 * Hook to access accordion context
 */
const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within an Accordion provider');
  }
  return context;
};

/**
 * Custom hook to extract accordion item IDs from children
 */
const useAccordionItemIds = (children) => {
  return useMemo(() => {
    const itemIds = [];
    React.Children.forEach(children, (child) => {
      if (child.type === AccordionItem && child.props.id) {
        itemIds.push(child.props.id);
      }
    });
    return itemIds;
  }, [children]);
};

/**
 * Main Accordion Component (Container)
 * Provides context and manages state for child components
 */
const Accordion = ({ 
  children,
  allowMultiple = true,
  defaultExpandedItems = [],
  autoExpandFirst = false,
  className = "",
  onItemToggle = null
}) => {
  const [expandedSections, setExpandedSections] = useState(() => new Set(defaultExpandedItems));
  const itemIds = useAccordionItemIds(children);

  // Toggle accordion section
  const toggleAccordion = useCallback((sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      
      if (!allowMultiple) {
        // In single mode, if clicking on already expanded item, collapse it
        // Otherwise, clear all and expand the clicked item
        if (newSet.has(sectionId)) {
          newSet.clear();
        } else {
          newSet.clear();
          newSet.add(sectionId);
        }
      } else {
        // In multiple mode, simply toggle the item
        newSet.has(sectionId) ? newSet.delete(sectionId) : newSet.add(sectionId);
      }
      
      onItemToggle?.(sectionId, newSet.has(sectionId));
      return newSet;
    });
  }, [allowMultiple, onItemToggle]);

  // Check if section is expanded
  const isExpanded = useCallback((sectionId) => expandedSections.has(sectionId), [expandedSections]);

  // Expand/Collapse all sections
  const expandAll = useCallback(() => {
    if (!allowMultiple) return;
    setExpandedSections(new Set(itemIds));
  }, [itemIds, allowMultiple]);

  const collapseAll = useCallback(() => {
    setExpandedSections(new Set());
  }, []);

  // Check if all sections are expanded
  const allExpanded = useMemo(() => 
    itemIds.length > 0 && itemIds.every(id => expandedSections.has(id)), 
    [itemIds, expandedSections]
  );

  // Auto-expand first item on mount (only if no default items are provided)
  useEffect(() => {
    if (autoExpandFirst && expandedSections.size === 0 && itemIds[0] && defaultExpandedItems.length === 0) {
      setExpandedSections(new Set([itemIds[0]]));
    }
  }, [autoExpandFirst, itemIds, expandedSections.size, defaultExpandedItems.length]);

  const contextValue = useMemo(() => ({
    expandedSections,
    toggleAccordion,
    isExpanded,
    expandAll,
    collapseAll,
    allExpanded,
    allowMultiple
  }), [expandedSections, toggleAccordion, isExpanded, expandAll, collapseAll, allExpanded, allowMultiple]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div className={`accordion ${className}`} role="region">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

/**
 * Accordion Controls Component
 * Provides expand/collapse all functionality
 */
const AccordionControls = ({ 
  className = "",
  expandText = "Expand All",
  collapseText = "Collapse All"
}) => {
  const { expandAll, collapseAll, allExpanded, allowMultiple } = useAccordion();

  const buttonContent = useMemo(() => ({
    icon: allExpanded ? '📁' : '📂',
    text: allExpanded ? collapseText : expandText,
    action: allExpanded ? collapseAll : expandAll
  }), [allExpanded, collapseText, expandText, collapseAll, expandAll]);

  if (!allowMultiple) return null;

  return (
    <div className={`flex justify-end mb-4 ${className}`}>
      <button
        onClick={buttonContent.action}
        className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors focus:outline-none focus:underline"
        type="button"
      >
        <span className="mr-1">{buttonContent.icon}</span>
        {buttonContent.text}
      </button>
    </div>
  );
};

/**
 * Accordion Item Component
 * Individual accordion section with header and content
 */
const AccordionItem = ({ 
  id,
  children,
  className = "",
  disabled = false
}) => {
  const { isExpanded, toggleAccordion } = useAccordion();
  
  if (!id) {
    throw new Error('AccordionItem requires an id prop');
  }

  const expanded = isExpanded(id);

  const handleToggle = useCallback(() => {
    if (!disabled) {
      toggleAccordion(id);
    }
  }, [disabled, toggleAccordion, id]);

  const enhancedChildren = useMemo(() => 
    React.Children.map(children, (child) => {
      if (child.type === AccordionHeader) {
        return React.cloneElement(child, { 
          expanded, 
          onToggle: handleToggle, 
          disabled,
          itemId: id
        });
      }
      if (child.type === AccordionPanel) {
        return React.cloneElement(child, { expanded, itemId: id });
      }
      return child;
    }),
    [children, expanded, handleToggle, disabled, id]
  );

  return (
    <div 
      className={`rounded-lg border border-gray-200 mb-4 overflow-hidden transition-all duration-300 hover:shadow-md ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {enhancedChildren}
    </div>
  );
};

/**
 * Accordion Header Component
 * Clickable header for each accordion item
 */
const AccordionHeader = ({ 
  children,
  expanded,
  onToggle,
  disabled,
  itemId,
  className = "",
  icon = null
}) => {
  const defaultIcon = useMemo(() => (
    <svg 
      className={`w-5 h-5 transform transition-transform duration-200 ${
        expanded ? 'rotate-180' : 'rotate-0'
      }`}
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  ), [expanded]);

  return (
    <button
      onClick={onToggle}
      disabled={disabled}
      className={`w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-200 hover:bg-gray-50 ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      aria-expanded={expanded}
      aria-controls={`accordion-panel-${itemId}`}
      type="button"
    >
      <div className="flex items-center justify-between">
        <div className="flex-grow pr-4">
          {children}
        </div>
        <div className="flex-shrink-0 text-gray-600">
          {icon || defaultIcon}
        </div>
      </div>
    </button>
  );
};

/**
 * Accordion Panel Component  
 * Collapsible content area for each accordion item
 */
const AccordionPanel = ({ 
  children,
  expanded,
  itemId,
  className = "",
  animationDuration = "300ms"
}) => {
  const panelStyle = useMemo(() => ({ 
    transitionDuration: animationDuration 
  }), [animationDuration]);

  return (
    <div
      id={`accordion-panel-${itemId}`}
      className={`transition-all ease-in-out ${
        expanded 
          ? 'max-h-[2000px] opacity-100' 
          : 'max-h-0 opacity-0'
      } ${className}`}
      style={panelStyle}
      aria-hidden={!expanded}
    >
      <div className="p-6 pt-0">
        {children}
      </div>
    </div>
  );
};

// Compound component pattern - attach sub-components to main component
Accordion.Controls = AccordionControls;
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Panel = AccordionPanel;

export default Accordion;
export { AccordionControls, AccordionItem, AccordionHeader, AccordionPanel };
