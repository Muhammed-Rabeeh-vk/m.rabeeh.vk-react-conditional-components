import React from 'react';
const Case = ({ children }) => children;
const Default = ({ children }) => children;

const Switch = ({ value, children }) => {
  let match = null;
  let defaultCase = null;

  React.Children.forEach(children, child => {
    if (!React.isValidElement(child)) return;

    if (child.type === Default) {
      defaultCase = child;
    } else if (child.type === Case && child.props.when === value) {
      match = child;
    }
  });

  return match || defaultCase || null;
};

export { Switch, Case, Default };