/**
 * StreamEast Soccer - Legal & Compliance Pages
 * Privacy Policy, Terms of Use, Disclaimer, and Copyright Policy.
 */

import { updateSEO, generateBreadcrumbSchema, getCanonicalUrl } from '../utils/seo.js';
import { createBreadcrumbs } from '../components/Breadcrumbs.js';

export function renderPrivacyPage(container) {
  updateSEO({
    title: 'Privacy Policy | StreamEast Soccer',
    description: 'Privacy policy for StreamEast Soccer outlining data handling, cookie practices, and user privacy commitments.',
    canonical: getCanonicalUrl('/privacy'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Privacy Policy', url: '/privacy' }
    ])
  });

  const breadcrumbs = createBreadcrumbs([{ label: 'Privacy Policy', path: '/privacy' }]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbs}
      <article style="max-width:820px; margin:0 auto 4rem;">
        <h1 style="margin-bottom:1.5rem;">Privacy Policy</h1>
        <div class="card" style="padding:2.5rem; line-height:1.8; color:var(--text-secondary);">
          <p><strong>Last Updated: September 2026</strong></p>
          <p>StreamEast Soccer ("we", "our", or "the platform") is committed to safeguarding the privacy of visitors to our website. This Privacy Policy details the minimal information we collect, how it is used, and how your privacy is protected.</p>
          
          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">1. Information We Collect</h3>
          <p>We do not require user account registration to view match schedules, scores, or guides. We collect non-personally identifiable browser information (such as browser type, operating system, and anonymous page visit metrics) solely to improve site performance and responsiveness.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">2. Contact Form Submissions</h3>
          <p>If you submit an inquiry through our contact form, your name and email address are used exclusively to respond to your specific request. We do not sell, rent, or share personal contact details with third-party marketers.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">3. Cookies & Local Storage</h3>
          <p>Our website utilizes lightweight client-side storage solely to preserve your preferred user interface settings (such as selected fixture filters and search preferences). No cross-site tracking cookies are deployed by our core software.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">4. Third-Party Links</h3>
          <p>Our website provides informational links to official league websites and licensed broadcasters. We are not responsible for the privacy practices or contents of these external services.</p>
        </div>
      </article>
    </div>
  `;
}

export function renderTermsPage(container) {
  updateSEO({
    title: 'Terms of Use | StreamEast Soccer',
    description: 'Terms of Use governing access to match schedules, scores, and editorial content on StreamEast Soccer.',
    canonical: getCanonicalUrl('/terms'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Terms of Use', url: '/terms' }
    ])
  });

  const breadcrumbs = createBreadcrumbs([{ label: 'Terms of Use', path: '/terms' }]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbs}
      <article style="max-width:820px; margin:0 auto 4rem;">
        <h1 style="margin-bottom:1.5rem;">Terms of Use</h1>
        <div class="card" style="padding:2.5rem; line-height:1.8; color:var(--text-secondary);">
          <p><strong>Last Updated: September 2026</strong></p>
          <p>By accessing and utilizing StreamEast Soccer, you agree to comply with and be bound by the following Terms of Use.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">1. Informational Purposes Only</h3>
          <p>StreamEast Soccer is an informational sports platform providing soccer schedules, fixtures, kickoff times, news, and official broadcaster guides. Content is provided on an "as is" basis for personal, non-commercial fan use.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">2. No Video Streaming Services</h3>
          <p>StreamEast Soccer does not broadcast, transmit, host, or embed live sporting events. Users are directed to official licensed broadcasters and sports television networks.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">3. Intellectual Property</h3>
          <p>All original software code, UI designs, and editorial previews are protected under copyright. Club names and competition titles are used strictly under fair-use editorial principles to identify sporting events.</p>
        </div>
      </article>
    </div>
  `;
}

export function renderDisclaimerPage(container) {
  updateSEO({
    title: 'Legal Disclaimer | StreamEast Soccer',
    description: 'Legal disclaimer and non-affiliation notice for StreamEast Soccer.',
    canonical: getCanonicalUrl('/disclaimer'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Disclaimer', url: '/disclaimer' }
    ])
  });

  const breadcrumbs = createBreadcrumbs([{ label: 'Disclaimer', path: '/disclaimer' }]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbs}
      <article style="max-width:820px; margin:0 auto 4rem;">
        <h1 style="margin-bottom:1.5rem;">Legal Disclaimer</h1>
        <div class="card" style="padding:2.5rem; line-height:1.8; color:var(--text-secondary);">
          <div class="card" style="background:rgba(0, 230, 118, 0.04); border-color:var(--border-green); margin-bottom:1.5rem; padding:1.5rem;">
            <strong style="color:var(--accent-green);">Important Non-Affiliation Declaration:</strong>
            <p style="margin:0.5rem 0 0;">
              StreamEast Soccer is an independent soccer information website and is not affiliated with any sports league, club, broadcaster, or streaming service unless explicitly stated.
            </p>
          </div>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">1. Broadcast Distribution Notice</h3>
          <p>We do NOT host, embed, link to, or distribute unauthorized copyrighted sports broadcasts or streams. The website focuses strictly on soccer schedules, match information, news, and legal viewing information.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">2. Schedule & Fixture Accuracy</h3>
          <p>While every reasonable effort is made to guarantee the precision of fixture dates, venues, and television listings, soccer governing bodies and broadcasters frequently reschedule matches due to weather or cup competitions. Users should verify critical broadcast times with their local provider.</p>
        </div>
      </article>
    </div>
  `;
}

export function renderCopyrightPage(container) {
  updateSEO({
    title: 'Copyright Policy & DMCA Notice | StreamEast Soccer',
    description: 'Copyright policy and DMCA designated contact procedure for StreamEast Soccer.',
    canonical: getCanonicalUrl('/copyright'),
    structuredData: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Copyright Policy', url: '/copyright' }
    ])
  });

  const breadcrumbs = createBreadcrumbs([{ label: 'Copyright Policy', path: '/copyright' }]);

  container.innerHTML = `
    <div class="container" style="padding-top:2rem;">
      ${breadcrumbs}
      <article style="max-width:820px; margin:0 auto 4rem;">
        <h1 style="margin-bottom:1.5rem;">Copyright & DMCA Policy</h1>
        <div class="card" style="padding:2.5rem; line-height:1.8; color:var(--text-secondary);">
          <p>StreamEast Soccer respects the intellectual property rights of content owners, broadcasters, and athletic organizations.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">No Copyrighted Media Hosting</h3>
          <p>As a schedule and informational portal, StreamEast Soccer does not store, host, retransmit, or embed video or audio media files. All trademarks and team names are referenced solely for descriptive and informational purposes.</p>

          <h3 style="margin:1.5rem 0 0.5rem; color:var(--text-primary);">Notice & Takedown Inquiries</h3>
          <p>If you believe that any editorial content or listing on our website infringes upon your copyright, please submit a formal inquiry via our <a href="/contact" data-link style="color:var(--accent-green);">Contact Page</a> with the relevant details.</p>
        </div>
      </article>
    </div>
  `;
}
