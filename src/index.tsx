import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { actions, store } from './store';
import { App } from './components/App';
import { loader } from '@monaco-editor/react';
import { initializeEditor } from './util/editor';
import { runUpdateChecker } from './util/updater';
import { updateZoom, watchNativeTheme } from './util/helpers';
import { adapter } from './adapter';

dayjs.extend(relativeTime);

// Load existing config
adapter.loadConfig().then(config => {
	store.dispatch(actions.initialize(config));

	const { tabs, updateChecker } = store.getState().config;

	// Select the first tab
	if (tabs.length > 0) {
		store.dispatch(actions.setActiveTab(tabs[0].id));
	}

	// Check for updates
	if (adapter.isUpdateCheckSupported && updateChecker) {
		runUpdateChecker();
	}

	// Apply zoom level
	updateZoom();
});

// Render the app component
const root = document.querySelector('#root')!;

createRoot(root).render(
	<Provider store={store}>
		<App />
	</Provider>
);

// Init monaco
loader.init().then(monaco => {
	initializeEditor(monaco);
});

// Listen for theme changes
watchNativeTheme();