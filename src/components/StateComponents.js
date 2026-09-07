/**
 * StreamEast Soccer - State Components
 * Reusable Empty States, Loading States, and Toast Notifications.
 */

export function createEmptyState({
  title = 'No matches found',
  message = 'There are no matches scheduled matching your current filter criteria. Check back soon or select another league or date.',
  actionLabel = 'Reset Filters',
  actionCallback = null
} = {}) {
  return `
    <div class="empty-state" role="status">
      <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <div>
        <h3 style="margin-bottom:0.5rem; font-size:1.25rem;">${title}</h3>
        <p style="margin-bottom:1.25rem; max-width:480px;">${message}</p>
        ${actionLabel ? `<button type="button" class="btn btn-secondary btn-sm" id="empty-state-reset-btn">${actionLabel}</button>` : ''}
      </div>
    </div>
  `;
}

export function createLoadingState(message = 'Loading match fixtures...') {
  return `
    <div class="empty-state" style="border-style:solid;" role="status" aria-busy="true">
      <svg width="40" height="40" viewBox="0 0 38 38" stroke="#00e676" style="animation: spin 1s linear infinite;" aria-hidden="true">
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="3">
            <circle stroke-opacity=".2" cx="18" cy="18" r="18"/>
            <path d="M36 18c0-9.94-8.06-18-18-18"/>
          </g>
        </g>
      </svg>
      <p style="margin:0; font-size:0.95rem; color:var(--text-muted);">${message}</p>
    </div>
  `;
}

export function showToast(message, duration = 3500) {
  const toastRoot = document.getElementById('toast-root');
  if (!toastRoot) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toastRoot.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
