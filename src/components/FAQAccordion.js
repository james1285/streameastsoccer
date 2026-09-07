/**
 * StreamEast Soccer - FAQ Accordion Component
 * Accessible, keyboard-navigable collapsible FAQ list.
 */

export function createFAQAccordion(faqs = []) {
  return `
    <div class="accordion" role="region" aria-label="Frequently Asked Questions List">
      ${faqs.map((faq, index) => `
        <div class="accordion-item ${index === 0 ? 'open' : ''}" id="faq-item-${faq.id}">
          <button 
            type="button" 
            class="accordion-header" 
            aria-expanded="${index === 0 ? 'true' : 'false'}"
            aria-controls="faq-content-${faq.id}"
            id="faq-btn-${faq.id}">
            <span>${faq.question}</span>
            <svg class="accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div 
            class="accordion-content" 
            id="faq-content-${faq.id}" 
            role="region" 
            aria-labelledby="faq-btn-${faq.id}">
            <p style="margin:0;">${faq.answer}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export function attachAccordionListeners(container = document) {
  const headers = container.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.accordion-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');

      // Toggle this item
      if (isOpen) {
        item.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
