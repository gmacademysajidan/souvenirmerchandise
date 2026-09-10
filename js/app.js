/**
 * Core Application Logic - Router, Hero Banner Renderer, Breadcrumbs, 
 * Markdown Live Tester, & Global Event Handlers.
 */

window.App = {
  currentPage: 'home',

  init() {
    this.bindNavigation();
    this.bindMobileDrawer();
    this.bindMarkdownTester();
    this.bindLightbox();
    this.handleInitialRoute();
  },

  handleInitialRoute() {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'about', 'services', 'catalog', 'portfolio', 'products', 'blog', 'gallery'];
    if (hash && validPages.includes(hash)) {
      this.navigateTo(hash);
    } else {
      this.navigateTo('home');
    }
  },

  bindNavigation() {
    // Intercept clicks on links with data-page attribute
    document.addEventListener('click', (e) => {
      const pageLink = e.target.closest('[data-page]');
      if (pageLink) {
        e.preventDefault();
        const pageId = pageLink.dataset.page;
        this.navigateTo(pageId);
        
        // Close mobile drawer if open
        const navMenu = document.getElementById('nav-menu');
        if (navMenu) navMenu.classList.remove('open');
      }
    });

    window.addEventListener('popstate', () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) this.navigateTo(hash, false);
    });
  },

  bindMobileDrawer() {
    const mobileBtn = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileBtn && navMenu) {
      mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
      });
    }
  },

  navigateTo(pageId, updateHistory = true) {
    const pageConfig = window.AppData.pages[pageId];
    if (!pageConfig) return;

    this.currentPage = pageId;

    if (updateHistory) {
      window.location.hash = pageId;
    }

    // Update active navbar item
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.dataset.page === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update Hero Banner
    this.renderHeroBanner(pageConfig);

    // Update Breadcrumbs
    this.renderBreadcrumb(pageConfig.breadcrumb);

    // Switch Page View Content Containers
    document.querySelectorAll('.page-view').forEach(view => {
      if (view.id === `view-${pageId}`) {
        view.style.display = 'block';
      } else {
        view.style.display = 'none';
      }
    });

    // If navigated to products, trigger product render
    if (pageId === 'products' && window.ProductsModule) {
      window.ProductsModule.renderProducts();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderHeroBanner(config) {
    const heroBanner = document.getElementById('main-hero-banner');
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');

    if (heroTitle) heroTitle.textContent = config.title;
    if (heroSubtitle) heroSubtitle.textContent = config.subtitle;

    if (heroBanner && config.heroImage) {
      heroBanner.style.backgroundImage = `url('${config.heroImage}')`;
    }
  },

  renderBreadcrumb(crumbs) {
    const container = document.getElementById('breadcrumb-container');
    if (!container) return;

    container.innerHTML = crumbs.map((crumb, idx) => {
      const isLast = idx === crumbs.length - 1;
      if (isLast) {
        return `<li class="breadcrumb-item active"><span>${crumb}</span></li>`;
      }
      return `
        <li class="breadcrumb-item">
          <a href="#home" data-page="home">${crumb}</a>
          <span class="breadcrumb-separator">/</span>
        </li>
      `;
    }).join('');
  },

  bindMarkdownTester() {
    const input = document.getElementById('md-tester-input');
    const output = document.getElementById('md-tester-output');

    if (input && output) {
      const updateTester = () => {
        const markdownText = input.value;
        output.innerHTML = window.MarkdownParser.parse(markdownText);
      };

      input.addEventListener('input', updateTester);
      // Run once on load
      updateTester();
    }
  },

  bindLightbox() {
    // Lightbox for Gallery & Portfolio image preview
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');

    if (!modal || !img) return;

    document.addEventListener('click', (e) => {
      const galleryItem = e.target.closest('[data-lightbox-src]');
      if (galleryItem) {
        const src = galleryItem.dataset.lightboxSrc;
        const title = galleryItem.dataset.lightboxTitle || '';
        img.src = src;
        if (caption) caption.textContent = title;
        modal.classList.add('active');
      }
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    }
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
};

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  window.App.init();
  if (window.ProductsModule) {
    window.ProductsModule.init();
  }
});
