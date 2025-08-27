import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { AuthProvider } from './authContext.tsx';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
	<AuthProvider>
		<App />
	</AuthProvider>
);
