import React from 'react';
import ReactDOM from 'react-dom/client';

const nestedHeading = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'h1', key: 'heading1' }, 'I am h1 tag'),
    React.createElement('h2', { id: 'h2', key: 'heading2' }, 'I am h2 tag'),
  ])
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(nestedHeading);
