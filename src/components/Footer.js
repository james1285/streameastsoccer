/**
 * StreamEast Soccer - Footer Component
 * Navigation links, legal disclaimers, competition hubs, and copyright details.
 */

export function renderFooter() {
  const footerRoot = document.getElementById('footer-root');
  if (!footerRoot) return;

  footerRoot.innerHTML = `
    <footer class="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Column -->
          <div class="footer-brand">
            <div style="display:flex; align-items:center; gap:0.6rem; margin-bottom:1rem;">
              <svg width="30" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M5 8L19 3L33 8V22C33 30 19 35 19 35C19 35 5 30 5 22V8Z" fill="#0c131d" stroke="#00e676" stroke-width="2"/>
                <polygon points="19,10 24,14 22,21 16,21 14,14" fill="#00e676"/>
              </svg>
              <h4 style="margin:0; font-family:var(--font-heading); font-size:1.3rem;">StreamEast <span class="text-green">Soccer</span></h4>
            </div>
            <p>Your premier destination for soccer match fixtures, live score updates, kickoff times, tactical news, and legal sports broadcast information across the world's greatest leagues.</p>
          </div>

          <!-- Quick Navigation -->
          <div class="footer-col">
            <h5>Navigation</h5>
            <ul class="footer-links">
              <li><a href="/" data-link>Home</a></li>
              <li><a href="/live-scores" data-link>Live Scores</a></li>
              <li><a href="/schedule" data-link>Soccer Schedule</a></li>
              <li><a href="/leagues" data-link>All Leagues</a></li>
              <li><a href="/blog" data-link>Soccer Blog & Guides</a></li>
              <li><a href="/how-to-watch" data-link>How to Watch</a></li>
              <li><a href="/faq" data-link>FAQ</a></li>
              <li><a href="/about" data-link>About Us</a></li>
              <li><a href="/contact" data-link>Contact & Support</a></li>
            </ul>
          </div>

          <!-- Popular Leagues -->
          <div class="footer-col">
            <h5>Top Competitions</h5>
            <ul class="footer-links">
              <li><a href="/premier-league" data-link>Premier League</a></li>
              <li><a href="/champions-league" data-link>UEFA Champions League</a></li>
              <li><a href="/la-liga" data-link>La Liga</a></li>
              <li><a href="/serie-a" data-link>Serie A</a></li>
              <li><a href="/bundesliga" data-link>Bundesliga</a></li>
              <li><a href="/ligue-1" data-link>Ligue 1</a></li>
              <li><a href="/mls" data-link>Major League Soccer</a></li>
            </ul>
          </div>

          <!-- Legal & Compliance -->
          <div class="footer-col">
            <h5>Legal & Policies</h5>
            <ul class="footer-links">
              <li><a href="/privacy" data-link>Privacy Policy</a></li>
              <li><a href="/terms" data-link>Terms of Use</a></li>
              <li><a href="/disclaimer" data-link>Disclaimer</a></li>
              <li><a href="/copyright" data-link>Copyright Policy</a></li>
            </ul>
          </div>
        </div>

        <!-- Mandatory Non-Affiliation Disclaimer Box -->
        <div class="footer-disclaimer-box" role="note">
          <p style="margin:0;">
            <strong>Legal Notice:</strong> StreamEast Soccer is an independent soccer information website and is not affiliated with any sports league, club, broadcaster, or streaming service unless explicitly stated. StreamEast Soccer does not host, embed, link to, or distribute unauthorized copyrighted sports broadcasts. All match information, kickoff times, and schedules are provided for editorial and informational purposes.
          </p>
        </div>

        <!-- Copyright & Timestamp -->
        <div class="footer-bottom">
          <span>&copy; 2026 StreamEast Soccer. All rights reserved.</span>
          <span>Designed with pitch-dark aesthetics for global football enthusiasts.</span>
        </div>
      </div>
    </footer>
  `;
}
