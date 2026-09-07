/**
 * StreamEast Soccer - Breadcrumbs Component
 * Accessible semantic breadcrumb navigation.
 */

export function createBreadcrumbs(items = []) {
  if (!items.length) return '';

  return `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/" data-link>Home</a>
      ${items.map((item, index) => {
        const isLast = index === items.length - 1;
        if (isLast) {
          return `
            <span class="breadcrumb-separator" aria-hidden="true">&rsaquo;</span>
            <span aria-current="page" style="color:var(--text-primary); font-weight:500;">${item.label}</span>
          `;
        }
        return `
          <span class="breadcrumb-separator" aria-hidden="true">&rsaquo;</span>
          <a href="${item.path}" data-link>${item.label}</a>
        `;
      }).join('')}
    </nav>
  `;
}
