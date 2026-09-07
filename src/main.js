/**
 * StreamEast Soccer - Main Application Entry Point
 * Initializes router, global search overlay, and UI event listeners.
 */

import { initRouter } from './router.js';
import { initSearchModal } from './components/SearchBar.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Global Search Modal Overlay
  initSearchModal();

  // Initialize Client-Side Router
  initRouter();

  console.log('StreamEast Soccer platform initialized successfully.');
});
