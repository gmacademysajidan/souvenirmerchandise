/**
 * Main Global Application Script
 * Souvenir Merchandise B2B
 */

// Auto Global High-Res Favicon Injector (Applies to all current & future pages)
(function initGlobalFavicon() {
  const faviconUrl = 'assets/logo/logo.png';
  
  // Ensure primary high-res icon link exists with multiple crisp sizes
  let iconLink = document.querySelector("link[rel='icon']");
  if (!iconLink) {
    iconLink = document.createElement('link');
    iconLink.rel = 'icon';
    document.head.appendChild(iconLink);
  }
  iconLink.type = 'image/png';
  iconLink.sizes = '32x32 48x48 96x96 192x192';
  iconLink.href = faviconUrl;

  // Shortcut icon fallback
  let shortcutLink = document.querySelector("link[rel='shortcut icon']");
  if (!shortcutLink) {
    shortcutLink = document.createElement('link');
    shortcutLink.rel = 'shortcut icon';
    document.head.appendChild(shortcutLink);
  }
  shortcutLink.type = 'image/png';
  shortcutLink.href = faviconUrl;

  // Apple Touch Icon for mobile & enlarged browser shortcuts
  let appleLink = document.querySelector("link[rel='apple-touch-icon']");
  if (!appleLink) {
    appleLink = document.createElement('link');
    appleLink.rel = 'apple-touch-icon';
    document.head.appendChild(appleLink);
  }
  appleLink.sizes = '180x180';
  appleLink.href = faviconUrl;
})();

document.addEventListener('DOMContentLoaded', function () {
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    const toggleBackToTop = function () {
      if (window.scrollY > 250) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    };

    // Initial check on load
    toggleBackToTop();

    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTop, { passive: true });

    // Smooth scroll to top on click
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Offcanvas Mobile Drawer Navbar Handler
  const navbarCollapse = document.getElementById('navbarMain');
  const navbarToggler = document.querySelector('.navbar-toggler');

  if (navbarCollapse && navbarToggler) {
    const navbarNav = navbarCollapse.parentElement || document.body;
    let backdrop = navbarNav.querySelector('.mobile-nav-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'mobile-nav-backdrop';
      navbarNav.insertBefore(backdrop, navbarCollapse);
    }

    // Inject Drawer Header if missing
    if (!navbarCollapse.querySelector('.mobile-drawer-header')) {
      const headerDiv = document.createElement('div');
      headerDiv.className = 'mobile-drawer-header';
      headerDiv.innerHTML = `
        <div class="d-flex align-items-center gap-2">
          <img src="assets/logo/logo.png" alt="Souvenir Merchandise" style="height: 32px; width: auto;">
          <span class="font-serif text-gold fw-bold" style="font-size: 0.95rem;">Souvenir Merchandise</span>
        </div>
        <button type="button" class="mobile-drawer-close" aria-label="Tutup Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      `;
      navbarCollapse.insertBefore(headerDiv, navbarCollapse.firstChild);

      const closeBtn = headerDiv.querySelector('.mobile-drawer-close');
      closeBtn.addEventListener('click', function () {
        closeMobileMenu();
      });
    }

    function closeMobileMenu() {
      if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      } else {
        navbarCollapse.classList.remove('show');
      }
      backdrop.classList.remove('show');
      document.body.style.overflow = '';
    }

    navbarCollapse.addEventListener('show.bs.collapse', function () {
      backdrop.classList.add('show');
      document.body.style.overflow = 'hidden';
    });

    navbarCollapse.addEventListener('hide.bs.collapse', function () {
      backdrop.classList.remove('show');
      document.body.style.overflow = '';
    });

    backdrop.addEventListener('click', closeMobileMenu);

    const navLinks = navbarCollapse.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) {
          closeMobileMenu();
        }
      });
    });
  }
});

