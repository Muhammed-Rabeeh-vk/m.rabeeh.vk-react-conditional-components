import React from 'react';
/**
 * If Component
 * A versatile component that handles conditional rendering based on various types of conditions.
 * Supports synchronous, asynchronous, and array-like conditions.
 *
 * @param {Object} props - The properties for the If component.
 * @param {boolean|Promise|Array} props.condition - The condition to evaluate.
 * @param {React.ReactNode} [props.then] - The content to render if the condition is true.
 * @param {React.ReactNode} [props.else] - The content to render if the condition is false.
 * @param {React.ReactNode} [props.children] - Fallback content to render if no condition matches.
 * @param {React.ReactNode} [props.fallback] - Content to render while waiting for an async condition.
 * @param {Function} [props.render] - A function that returns content to render based on the condition.
 */

const If = ({
  condition,
  then,
  else: elseProp,
  render,
  fallback,
  children,
}) => {
  if (typeof condition === 'undefined') return fallback || null;

  if (condition) {
    if (then) return then;
    if (render) return render();
    return <>{children}</>;
  }

  return elseProp || null;
}

export default If;