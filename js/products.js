/**
 * Products Module - Bootstrap 5 Integration
 * Handles category filtering, product card rendering, WhatsApp direct URL creation,
 * and Bootstrap Modal Markdown detail viewer.
 */

window.ProductsModule = {
  activeCategory: 'all',
  searchQuery: '',

  init() {
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    if (catParam) {
      this.activeCategory = catParam;
    }
    this.renderCategoryTabs();
    this.bindEvents();
    this.renderProducts();
  },

  bindEvents() {
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderProducts();
      });
    }
  },

  renderCategoryTabs() {
    const container = document.getElementById('category-tabs-container');
    if (!container) return;

    const categories = window.AppData.categories;
    container.innerHTML = categories.map(cat => `
      <button class="cat-tab ${cat.id === this.activeCategory ? 'active' : ''}" data-cat="${cat.id}">
        <span>${cat.name}</span>
      </button>
    `).join('');

    container.querySelectorAll('.cat-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const catId = e.currentTarget.dataset.cat;
        this.activeCategory = catId;
        
        container.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');

        this.renderProducts();
      });
    });
  },

  getFilteredProducts() {
    return window.AppData.products.filter(prod => {
      const matchCat = (this.activeCategory === 'all') || (prod.category === this.activeCategory);
      const matchSearch = !this.searchQuery || 
        prod.title.toLowerCase().includes(this.searchQuery) ||
        prod.shortDesc.toLowerCase().includes(this.searchQuery) ||
        prod.categoryName.toLowerCase().includes(this.searchQuery);
      return matchCat && matchSearch;
    });
  },

  renderProducts() {
    const grid = document.getElementById('products-grid-container');
    if (!grid) return;

    const filtered = this.getFilteredProducts();

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="display-3 mb-2 text-gold d-flex justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </div>
          <h3 class="h4 text-gold font-serif">Produk Tidak Ditemukan</h3>
          <p class="text-muted">Coba gunakan kata kunci lain atau ubah filter kategori.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(prod => {
      const waUrl = this.generateWhatsAppUrl(prod);
      return `
        <div class="col-md-6 col-lg-4" data-id="${prod.id}">
          <div class="product-card">
            <div class="product-image-wrap">
              <span class="product-badge">${prod.badge}</span>
              <img src="${prod.image}" alt="${prod.title}" loading="lazy" onerror="this.src='assets/hero_souvenir.jpg'">
              <span class="product-category-tag">${prod.categoryName}</span>
            </div>

            <div class="product-body">
              <h3 class="product-title font-serif">${prod.title}</h3>
              <p class="product-desc">${prod.shortDesc}</p>

              <div class="product-details-bar">
                <span class="fw-bold text-gold">${prod.priceRange}</span>
                <span class="badge bg-dark border border-secondary text-muted">${prod.moq}</span>
              </div>

              <div class="row g-2">
                <div class="col-6">
                  <button class="btn btn-outline-gold btn-sm w-100 d-inline-flex align-items-center justify-content-center gap-1" onclick="window.ProductsModule.openMarkdownModal('${prod.id}')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                    </svg>
                    Markdown Detail
                  </button>
                </div>
                <div class="col-6">
                  <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-wa btn-sm w-100 d-inline-flex align-items-center justify-content-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    Order WA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  generateWhatsAppUrl(product) {
    const phone = window.AppData.phoneWhatsApp;
    const text = encodeURIComponent(
      `Halo Souvenir Merchandise, saya tertarik ingin memesan produk souvenir:\n` +
      `📌 *Nama Produk*: ${product.title}\n` +
      `🏷️ *Kategori*: ${product.categoryName}\n` +
      `💰 *Estimasi*: ${product.priceRange}\n` +
      `📦 *Jumlah Rencana*: (Mohon isi estimasi pcs)\n\n` +
      `Mohon bantuan info penawaran harga & opsi custom logo perusahaan kami. Terima kasih!`
    );
    return `https://wa.me/${phone}?text=${text}`;
  },

  openMarkdownModal(productId) {
    const product = window.AppData.products.find(p => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById('modal-product-title');
    const modalBody = document.getElementById('modal-markdown-content');
    const modalWaBtn = document.getElementById('modal-wa-btn');

    if (!modalBody) return;

    if (modalTitle) modalTitle.textContent = product.title;

    // Parse Markdown text
    const htmlContent = window.MarkdownParser.parse(product.markdownDetail);
    modalBody.innerHTML = `
      <div class="d-flex gap-3 align-items-center bg-dark p-3 rounded-3 mb-4 border border-secondary">
        <img src="${product.image}" alt="${product.title}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
        <div>
          <h4 class="h6 text-gold mb-1 font-serif">${product.title}</h4>
          <p class="extra-small text-muted mb-1">${product.categoryName} • ${product.moq}</p>
          <span class="fw-bold text-white small">${product.priceRange}</span>
        </div>
      </div>
      <div class="markdown-rendered">${htmlContent}</div>
    `;

    if (modalWaBtn) {
      modalWaBtn.href = this.generateWhatsAppUrl(product);
    }

    // Trigger Bootstrap Modal instance
    const modalElement = document.getElementById('productModalBootstrap');
    if (modalElement) {
      const bsModal = new bootstrap.Modal(modalElement);
      bsModal.show();
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  window.ProductsModule.init();
});
