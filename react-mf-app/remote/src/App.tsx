import React from 'react';
import { createRoot } from 'react-dom/client';

import { Counter  } from './Counter';

import './index.scss';

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <Counter />
  </div>
);

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);