/**
 * StreamEast Soccer - Contact Page (/contact)
 * Accessible contact form with honeypot anti-spam protection, field validation, and toast feedback.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';
import { showToast } from '../components/StateComponents.js';

export function renderContactPage(container) {
  // Update SEO
  updateSEO({
    title: 'Contact Us & Editorial Support | StreamEast Soccer',
    description: 'Get in touch with the StreamEast Soccer team for match schedule feedback, corrections, legal inquiries, or general support.',
    canonical: getCanonicalUrl('/contact'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' }
    ])
  });

  const breadcrumbsHtml = createBreadcrumbs([
    { label: 'Contact', path: '/contact' }
  ]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbsHtml}

      <div style="max-width:760px; margin:0 auto 4rem;">
        <header style="margin-bottom:2.5rem;">
          <span class="badge badge-league" style="border-color:var(--border-green); color:var(--accent-green); margin-bottom:1rem;">
            Support & Inquiries
          </span>
          <h1 style="margin-bottom:1rem;">Contact StreamEast Soccer</h1>
          <p class="text-lead">
            Have questions regarding soccer fixture timings, broadcaster directory updates, or copyright inquiries? Send us a message and our editorial team will respond promptly.
          </p>
        </header>

        <form id="contact-form" class="card" style="padding:2.5rem;" novalidate>
          <!-- Anti-Spam Honeypot Field (Hidden from legitimate users) -->
          <div style="display:none;" aria-hidden="true">
            <label for="website-check">Leave this field blank</label>
            <input type="text" id="website-check" name="website-check" tabindex="-1" autocomplete="off">
          </div>

          <!-- Name Input -->
          <div class="form-group">
            <label for="contact-name" class="form-label">Your Name *</label>
            <input type="text" id="contact-name" name="name" class="form-control" placeholder="e.g. Alex Morgan" required>
            <span class="form-error" id="name-error" style="display:none; color:var(--status-live); font-size:0.8rem; margin-top:0.25rem;">Please enter your name.</span>
          </div>

          <!-- Email Input -->
          <div class="form-group">
            <label for="contact-email" class="form-label">Email Address *</label>
            <input type="email" id="contact-email" name="email" class="form-control" placeholder="name@example.com" required>
            <span class="form-error" id="email-error" style="display:none; color:var(--status-live); font-size:0.8rem; margin-top:0.25rem;">Please enter a valid email address.</span>
          </div>

          <!-- Subject Input -->
          <div class="form-group">
            <label for="contact-subject" class="form-label">Subject *</label>
            <select id="contact-subject" name="subject" class="form-control" required>
              <option value="">Select a subject...</option>
              <option value="schedule-correction">Schedule or Kickoff Time Correction</option>
              <option value="broadcaster-update">Broadcaster / TV Channel Update</option>
              <option value="editorial">News / Editorial Feedback</option>
              <option value="legal">Legal / Copyright Inquiry</option>
              <option value="other">General Support</option>
            </select>
            <span class="form-error" id="subject-error" style="display:none; color:var(--status-live); font-size:0.8rem; margin-top:0.25rem;">Please select a subject.</span>
          </div>

          <!-- Message Textarea -->
          <div class="form-group">
            <label for="contact-message" class="form-label">Your Message *</label>
            <textarea id="contact-message" name="message" class="form-control" rows="5" placeholder="How can we assist you with our soccer schedule or broadcasting guide?" required></textarea>
            <span class="form-error" id="message-error" style="display:none; color:var(--status-live); font-size:0.8rem; margin-top:0.25rem;">Please enter a message (minimum 10 characters).</span>
          </div>

          <button type="submit" class="btn btn-primary" style="width:100%; margin-top:1rem;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Send Message
          </button>
        </form>

        <div style="margin-top:2rem; text-align:center; font-size:0.85rem; color:var(--text-dim);">
          Typical response time: Within 24-48 business hours &bull; Your details are kept strictly private.
        </div>
      </div>
    </div>
  `;

  // Form submission & anti-spam handler
  const form = container.querySelector('#contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check honeypot spam field
    const honeypot = container.querySelector('#website-check');
    if (honeypot && honeypot.value.trim() !== '') {
      // Silently drop bot submission
      showToast('Thank you! Your message has been received.');
      form.reset();
      return;
    }

    const nameInput = container.querySelector('#contact-name');
    const emailInput = container.querySelector('#contact-email');
    const subjectInput = container.querySelector('#contact-subject');
    const messageInput = container.querySelector('#contact-message');

    let isValid = true;

    // Reset error messages
    container.querySelectorAll('.form-error').forEach(el => el.style.display = 'none');

    if (!nameInput.value.trim()) {
      container.querySelector('#name-error').style.display = 'block';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      container.querySelector('#email-error').style.display = 'block';
      isValid = false;
    }

    if (!subjectInput.value) {
      container.querySelector('#subject-error').style.display = 'block';
      isValid = false;
    }

    if (messageInput.value.trim().length < 10) {
      container.querySelector('#message-error').style.display = 'block';
      isValid = false;
    }

    if (isValid) {
      showToast('Thank you! Your message has been sent successfully.');
      form.reset();
    }
  });
}
