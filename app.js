/* ============================================================
   LUENZA - Loja de Tecnologia Premium
   ============================================================ */

/* ---------- Theme ---------- */
const savedTheme = localStorage.getItem('luenza_theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', current);
        localStorage.setItem('luenza_theme', current);
    });
}

const topHeader = document.querySelector('.top-header');
const toggleHeaderState = () => {
    if (topHeader) topHeader.classList.toggle('scrolled', window.scrollY > 12);
};
window.addEventListener('scroll', toggleHeaderState, { passive: true });
toggleHeaderState();

/* ---------- Catalog ---------- */
const CATEGORIES = [
    { id: 'audio', label: 'Áudio' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'carga', label: 'Carregadores & Cabos' },
    { id: 'smart', label: 'Smartwatches' }
];

const CAT_SHORT = {
    audio: 'Áudio',
    gaming: 'Gaming',
    carga: 'Carga',
    smart: 'Smart'
};

const IMG = {
    ps3: 'assets/Screenshot_20260915-182025.jpg',
    cabo: 'assets/Screenshot_20260915-182028.jpg',
    fios: 'assets/Screenshot_20260915-182031.jpg',
    watch: 'assets/Screenshot_20260915-182033.jpg',
    anc: 'assets/Screenshot_20260915-182037.jpg'
};

const esc = (value) => String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const products = [
    { id: 1, cat: 'gaming', title: 'Teclado e Mouse Gamer BAJEAL T350', short: 'BAJEAL T350', price: 10000, rating: 5, reviews: 18, desc: 'Setup gamer completo com iluminação RGB, ideal para jogos.', img: 'assets/p-1.svg' },
    { id: 2, cat: 'audio', title: 'Fones Bluetooth ANC/ENC', short: 'ANC/ENC', price: 9500, rating: 5, reviews: 31, desc: 'Cancelamento de ruído ativo, som de alta qualidade.', img: IMG.anc },
    { id: 3, cat: 'audio', title: 'Fones Bluetooth X30', short: 'X30', price: 6000, rating: 4, reviews: 12, desc: 'Som potente, design moderno e máximo conforto.', img: 'assets/p-3.svg' },
    { id: 4, cat: 'audio', title: 'AirPods ANC 4ª Geração', short: 'AirPods ANC', price: 14000, rating: 5, reviews: 26, featured: true, desc: 'Cancelamento de ruído premium e carregamento rápido.', img: 'assets/p-4.svg' },
    { id: 5, cat: 'gaming', title: 'Comando PS4 DualShock 4', short: 'PS4 Dual', price: 13500, rating: 5, reviews: 22, featured: true, desc: 'Controle original, alta precisão, compatível com PS4.', img: 'assets/p-5.svg' },
    { id: 6, cat: 'gaming', title: 'Comando PS3 Edição Original', short: 'PS3', price: 6500, rating: 4, reviews: 19, desc: 'Controle clássico, confortável e compatível com PS3.', img: IMG.ps3 },
    { id: 7, cat: 'audio', title: "Fones Wireless I'm a Monster", short: 'Monster', price: 8000, rating: 4, reviews: 9, desc: 'Design moderno com som de qualidade, sem fios.', img: 'assets/p-7.svg' },
    { id: 8, cat: 'smart', title: 'Smartwatch T900 Ultra 2 Big', short: 'T900 Ultra', price: 10000, rating: 5, reviews: 40, featured: true, desc: 'Tela grande, monitoramento de saúde e várias funções.', img: IMG.watch },
    { id: 9, cat: 'audio', title: 'Fones Bluetooth P9', short: 'P9', price: 5000, rating: 4, reviews: 11, desc: 'Som nítido, leves, confortáveis e bateria longa.', img: 'assets/p-9.svg' },
    { id: 10, cat: 'audio', title: 'Fones de Ouvido com Fio Lightning', short: 'Lightning', price: 2000, rating: 4, reviews: 7, desc: 'Áudio de qualidade compatível com iPhone.', img: IMG.fios },
    { id: 11, cat: 'carga', title: 'Carregador Inteligente 33W + Tipo-C', short: '33W Turbo', price: 3000, rating: 5, reviews: 15, featured: true, desc: 'Carregamento rápido, seguro e eficiente.', img: 'assets/p-11.svg' },
    { id: 12, cat: 'carga', title: 'Cabo USB-C para Lightning 2M', short: 'Cabo 2M', price: 2500, rating: 4, reviews: 8, desc: 'Alta resistência e carregamento rápido, 2 metros.', img: IMG.cabo },
    { id: 13, cat: 'carga', title: 'Carregador iPhone 17 Pro (Max) 35W', short: 'iPhone 35W', price: 2000, rating: 4, reviews: 6, desc: 'Alta potência para carga rápida de iPhone.', img: 'assets/p-13.svg' },
    { id: 14, cat: 'carga', title: 'Adaptador Wi-Fi + Bluetooth 4.0', short: 'Wi-Fi + BT', price: 6500, rating: 4, reviews: 10, desc: 'Conexão estável e de alta velocidade.', img: 'assets/p-14.svg' },
    { id: 15, cat: 'audio', title: 'Auricular Bluetooth KL-30', short: 'KL-30', price: 3500, rating: 4, reviews: 5, desc: 'Som de qualidade, confortável e bateria longa.', img: 'assets/p-15.svg' },
    { id: 16, cat: 'audio', title: 'Fones Bluetooth TWS', short: 'TWS', price: 4000, rating: 4, reviews: 13, desc: 'Sem fios, práticos, modernos, com estojo de carga.', img: 'assets/p-16.svg' }
];

const catLabel = (id) => (CATEGORIES.find(c => c.id === id) || {}).label || 'Produto';
const catShort = (id) => CAT_SHORT[id] || 'Produto';

const formatCurrency = (value) => new Intl.NumberFormat('pt-AO', {
    style: 'currency',
    currency: 'AOA',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
}).format(value);

/* ---------- Cart ---------- */
let cart = [];
try {
    cart = JSON.parse(localStorage.getItem('luenza_cart')) || [];
} catch (e) {
    cart = [];
}

const mergedCart = {};
cart.forEach((item) => {
    const pid = item.product && item.product.id;
    if (pid === undefined || pid === null) return;
    item.qty = item.qty || 1;
    if (mergedCart[pid]) {
        mergedCart[pid].qty += item.qty;
        if (!mergedCart[pid].comment && item.comment) mergedCart[pid].comment = item.comment;
    } else {
        mergedCart[pid] = item;
    }
});
cart = Object.values(mergedCart);

const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const mobileCartBtn = document.getElementById('mobileCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartBadges = document.querySelectorAll('.cart-badge');

const saveCart = () => localStorage.setItem('luenza_cart', JSON.stringify(cart));

const updateCartUI = (quiet) => {
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    cartBadges.forEach((badge) => {
        badge.textContent = totalQty;
    });

    let total = 0;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML =
            '<div class="cart-empty"><i class="ph ph-shopping-cart-simple"></i>O seu carrinho está vazio.' +
            '<p>Adicione produtos e finalize a encomenda no WhatsApp.</p></div>';
        checkoutBtn.disabled = true;
    } else {
        cart.forEach((item) => {
            const qty = item.qty || 1;
            total += item.product.price * qty;
            const itemEl = document.createElement('div');
            itemEl.classList.add('cart-item');
            itemEl.innerHTML = `
                <img src="${item.product.img}" alt="${item.product.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.product.title}</div>
                    <div class="cart-item-price">${formatCurrency(item.product.price * qty)}</div>
                    <div class="cart-item-unit">${qty} × ${formatCurrency(item.product.price)}</div>
                    ${item.comment ? `<div class="cart-item-comment">Obs: ${esc(item.comment)}</div>` : ''}
                </div>
                <div class="cart-qty">
                    <button class="qty-btn" data-dec="${item.cartId}" aria-label="Diminuir quantidade">&minus;</button>
                    <span class="qty-num">${qty}</span>
                    <button class="qty-btn" data-inc="${item.cartId}" aria-label="Aumentar quantidade">+</button>
                </div>
                <button class="cart-item-remove" data-remove="${item.cartId}" aria-label="Remover"><i class="ph ph-trash"></i></button>
            `;
            cartItemsContainer.appendChild(itemEl);
        });
        checkoutBtn.disabled = false;
    }

    cartTotalPrice.textContent = formatCurrency(total);

    if (!quiet) {
        [openCartBtn, mobileCartBtn].forEach((btn) => {
            if (!btn) return;
            btn.classList.remove('bump');
            void btn.offsetWidth;
            btn.classList.add('bump');
        });
    }
};

let toastTimer;
const showToast = (message) => {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.classList.add('toast');
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="ph ph-check-circle"></i> ${message}`;
    clearTimeout(toastTimer);
    requestAnimationFrame(() => toast.classList.add('show'));
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
};

const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    const note = productNotes[productId] || {};
    const existing = cart.find((item) => item.product.id === productId);

    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
        if (note.comment) existing.comment = note.comment;
    } else {
        cart.push({
            cartId: `${Date.now()}-${productId}`,
            product,
            comment: note.comment || '',
            qty: 1,
            photo: null
        });
    }

    saveCart();
    updateCartUI();
    syncBadges();

    const btn = document.querySelector(`.add-btn[data-pid="${productId}"]`);
    if (btn) {
        clearTimeout(btn._resetTimer);
        btn.classList.add('added');
        btn._resetTimer = setTimeout(() => btn.classList.remove('added'), 1300);
    }

    const item = cart.find((it) => it.product.id === productId);
    showToast(`Adicionado ao carrinho (${item.qty} no carrinho)`);
};

const syncBadges = () => {
    document.querySelectorAll('.qty-badge').forEach((badge) => {
        const item = cart.find((it) => String(it.product.id) === badge.dataset.qty);
        if (item && item.qty > 0) {
            badge.textContent = item.qty;
            badge.hidden = false;
        } else {
            badge.hidden = true;
        }
    });
};

const changeQty = (cartId, delta) => {
    const item = cart.find((it) => it.cartId === cartId);
    if (!item) return;
    item.qty = Math.max(1, (item.qty || 1) + delta);
    saveCart();
    updateCartUI();
    syncBadges();
};

cartItemsContainer.addEventListener('click', (e) => {
    const incBtn = e.target.closest('[data-inc]');
    const decBtn = e.target.closest('[data-dec]');
    const removeBtn = e.target.closest('[data-remove]');

    if (incBtn) {
        changeQty(incBtn.dataset.inc, 1);
    } else if (decBtn) {
        changeQty(decBtn.dataset.dec, -1);
    } else if (removeBtn) {
        cart = cart.filter((item) => item.cartId !== removeBtn.dataset.remove);
        saveCart();
        updateCartUI();
        syncBadges();
    }
});

const openCart = () => cartOverlay.classList.add('active');
const closeCart = () => cartOverlay.classList.remove('active');

if (openCartBtn) openCartBtn.addEventListener('click', openCart);
if (mobileCartBtn) mobileCartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
});
if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;

    let total = 0;
    let message = 'Olá Luenza! Gostaria de fazer uma encomenda:\n\n';

    cart.forEach((item, index) => {
        const qty = item.qty || 1;
        const subtotal = item.product.price * qty;
        total += subtotal;
        message += `${index + 1}. ${qty} × *${item.product.title}* — ${formatCurrency(subtotal)}\n`;
        if (qty > 1) {
            message += `   _un. ${formatCurrency(item.product.price)}_\n`;
        }
        if (item.comment) {
            message += `   _Obs: ${item.comment}_\n`;
        }
    });

    message += `\n*Total: ${formatCurrency(total)}*\n`;
    message += '\nAguardo instruções para pagamento e entrega. Obrigado!';

    const phoneNumber = '244946091842';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
});

/* ---------- Product Notes (Modal) ---------- */
const productNotes = {};

const noteOverlay = document.createElement('div');
noteOverlay.className = 'note-overlay';
noteOverlay.innerHTML = `
    <div class="note-modal" role="dialog" aria-modal="true" aria-label="Adicionar observação">
        <div class="note-modal-header">
            <h3><i class="ph ph-chat-circle"></i> Observação</h3>
            <button class="close-btn" id="closeNoteBtn" aria-label="Fechar"><i class="ph ph-x"></i></button>
        </div>
        <textarea id="noteText" placeholder="Ex: cor, modelo, tamanho, detalhe da entrega..."></textarea>
        <div class="note-photo">
            <i class="ph ph-image"></i>
            <span>Espaço para foto (ilustrativo)</span>
        </div>
        <div class="note-modal-actions">
            <button class="btn btn-ghost" id="cancelNoteBtn">Cancelar</button>
            <button class="btn btn-primary" id="saveNoteBtn">Guardar</button>
        </div>
    </div>
`;
document.body.appendChild(noteOverlay);

const noteText = noteOverlay.querySelector('#noteText');
const closeNoteBtn = noteOverlay.querySelector('#closeNoteBtn');
const cancelNoteBtn = noteOverlay.querySelector('#cancelNoteBtn');
const saveNoteBtn = noteOverlay.querySelector('#saveNoteBtn');

let activeNoteId = null;

const openNoteModal = (productId) => {
    activeNoteId = productId;
    noteText.value = (productNotes[productId] || {}).comment || '';
    noteOverlay.classList.add('active');
    noteText.focus();
};

const closeNoteModal = () => noteOverlay.classList.remove('active');

noteOverlay.addEventListener('click', (e) => {
    if (e.target === noteOverlay) closeNoteModal();
});
closeNoteBtn.addEventListener('click', closeNoteModal);
cancelNoteBtn.addEventListener('click', closeNoteModal);

saveNoteBtn.addEventListener('click', () => {
    if (activeNoteId === null) return;
    const comment = noteText.value.trim();
    if (comment) {
        productNotes[activeNoteId] = { comment };
    } else if (productNotes[activeNoteId]) {
        delete productNotes[activeNoteId];
    }
    const btn = document.querySelector(`.note-btn[data-note="${activeNoteId}"]`);
    if (btn) btn.classList.toggle('has-note', Boolean(comment));
    showToast(comment ? 'Observação guardada' : 'Observação removida');
    closeNoteModal();
});

/* ---------- Image Viewer (Lightbox) ---------- */
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Fechar imagem"><i class="ph ph-x"></i></button>
        <img class="lightbox-img" alt="">
    </div>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

const openLightbox = (imgSrc, alt) => {
    lightboxImg.src = imgSrc;
    lightboxImg.alt = alt || 'Imagem do produto';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
};

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
lightboxClose.addEventListener('click', closeLightbox);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
});

/* ---------- Product Rendering ---------- */
const featuredProductsGrid = document.getElementById('featuredProductsGrid');
const allProductsGrid = document.getElementById('allProductsGrid');
const filterChips = document.getElementById('filterChips');
const searchInput = document.getElementById('searchInput');
const productCount = document.getElementById('productCount');

const createProductCard = (product, index) => {
    const card = document.createElement('article');
    card.classList.add('product-card');
    card.style.animationDelay = `${Math.min(index, 10) * 70}ms`;

    card.innerHTML = `
        <div class="product-media">
            <span class="product-badge">${catShort(product.cat)}</span>
            <img src="${product.img}" alt="${product.title}" loading="lazy">
            <span class="product-rating"><i class="ph-fill ph-star"></i> ${product.rating}.0 · ${product.reviews} avaliações</span>
        </div>
        <div class="product-body">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-desc">${product.desc}</p>
            <div class="product-foot">
                <div class="product-price">${formatCurrency(product.price)}</div>
                <div class="card-actions">
                    <button class="icon-btn note-btn" data-note="${product.id}" aria-label="Adicionar observação" title="Observação">
                        <i class="ph ph-chat-circle"></i>
                    </button>
                    <button class="icon-btn add-btn" data-pid="${product.id}" aria-label="Adicionar ao carrinho" title="Adicionar ao carrinho">
                        <i class="ph ph-shopping-cart"></i>
                        <span class="qty-badge" data-qty="${product.id}" hidden></span>
                    </button>
                </div>
            </div>
        </div>
    `;

    card.querySelector('.note-btn').addEventListener('click', () => openNoteModal(product.id));
    card.querySelector('.add-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        addToCart(product.id);
    });

    card.addEventListener('click', (e) => {
        if (e.target.closest('button')) return;
        openLightbox(product.img, product.title);
    });

    return card;
};

const renderFeatured = () => {
    if (!featuredProductsGrid) return;
    featuredProductsGrid.innerHTML = '';
    products.filter((p) => p.featured).slice(0, 4).forEach((product, i) => {
        featuredProductsGrid.appendChild(createProductCard(product, i));
    });
    syncBadges();
};

/* ---------- Store Filters ---------- */
const urlCat = new URLSearchParams(location.search).get('cat') || 'all';
let activeCat = CATEGORIES.some((c) => c.id === urlCat) ? urlCat : 'all';
let searchQuery = '';

if (filterChips) {
    const renderChips = () => {
        filterChips.innerHTML = '';

        const counts = {};
        products.forEach((p) => {
            counts[p.cat] = (counts[p.cat] || 0) + 1;
        });

        const lists = [
            { id: 'all', label: 'Todos', count: products.length },
            ...CATEGORIES.map((c) => ({ id: c.id, label: c.label, count: counts[c.id] || 0 }))
        ];

        lists.forEach((cat) => {
            const chip = document.createElement('button');
            chip.className = 'chip' + (cat.id === activeCat ? ' active' : '');
            chip.dataset.cat = cat.id;
            chip.textContent = `${cat.label} (${cat.count})`;
            filterChips.appendChild(chip);
        });
    };

    filterChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        activeCat = chip.dataset.cat;
        renderChips();
        renderStore();
    });

    renderChips();
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderStore();
    });
}

const renderStore = () => {
    if (!allProductsGrid) return;

    const filtered = products.filter((p) =>
        (activeCat === 'all' || p.cat === activeCat) &&
        (!searchQuery ||
            p.title.toLowerCase().includes(searchQuery) ||
            p.desc.toLowerCase().includes(searchQuery))
    );

    if (productCount) {
        productCount.innerHTML = filtered.length > 0
            ? `A mostrar <strong>${filtered.length}</strong> ${filtered.length === 1 ? 'produto' : 'produtos'}`
            : '';
    }

    allProductsGrid.innerHTML = '';

    if (filtered.length === 0) {
        allProductsGrid.innerHTML = `
            <div class="empty-state">
                <i class="ph ph-magnifying-glass"></i>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente outra categoria ou termo de pesquisa.</p>
                <button class="btn btn-outline" id="clearFilters">Limpar filtros</button>
            </div>
        `;
        document.getElementById('clearFilters').addEventListener('click', () => {
            activeCat = 'all';
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            renderChips();
            renderStore();
        });
        return;
    }

    filtered.forEach((product, i) => {
        allProductsGrid.appendChild(createProductCard(product, i));
    });

    syncBadges();
};

/* ---------- Init ---------- */
renderFeatured();
renderStore();
updateCartUI(true);