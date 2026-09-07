/**
 * StreamEast Soccer - FAQ Page (/faq)
 * Interactive accordion with 8 comprehensive questions and JSON-LD FAQPage schema.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { faqs, generateFaqSchema } from '../data/faqs.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { createFAQAccordion, attachAccordionListeners } from '../components/FAQAccordion.js';

export function renderFAQPage(container) {
  // Update SEO with FAQPage structured data
  updateSEO({
    title: 'Frequently Asked Questions | StreamEast Soccer Schedule & Guide',
    description: 'Find answers to common questions regarding soccer fixtures, kickoff schedules, legal sports streaming options, covered leagues, and platform information.',
    canonical: getCanonicalUrl('/faq'),
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        generateFaqSchema(),
        generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' }
        ])
      ]
    }
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'FAQ', path: '/faq' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <header style="margin-bottom:2.5rem; max-width:800px;">
        <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green); margin-bottom:1rem;">
          Help & Information
        </span>
        <h1 style="margin-bottom:1rem;">Frequently Asked Questions</h1>
        <p class="text-lead">
          Find answers to frequently asked questions about match schedules, kickoff times, coverage details, and legal soccer streaming services.
        </p>
      </header>

      <!-- FAQ Accordion -->
      <div style="max-width:860px; margin-bottom:4rem;">
        ${createFAQAccordion(faqs)}
      </div>

      <!-- Need More Help Card -->
      <div class="card" style="max-width:860px; background:linear-gradient(135deg, #131b26 0%, #0d1219 100%); border-color:var(--border-subtle); padding:2rem; margin-bottom:3rem;">
        <h3 style="margin-bottom:0.75rem;">Have additional questions?</h3>
        <p style="color:var(--text-secondary); margin-bottom:1.5rem;">
          If you have inquiries regarding our soccer schedule listings, data corrections, or broadcaster partnerships, our support team is here to assist.
        </p>
        <a href="/contact" class="btn btn-primary btn-sm" data-link>
          Contact Support Team &rarr;
        </a>
      </div>
    </div>
  `;

  attachAccordionListeners(container);
}
