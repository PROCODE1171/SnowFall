/**
 * SNOWFALL - Main Application Logic & Single-Page Router
 * =====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // App State
  // ==========================================
  const state = {
    currentRoute: "home",
    searchQueries: {
      mods: "",
      "resource-packs": "",
      launchers: "",
      macros: "",
      "hack-clients": ""
    },
    activeFilters: {
      mods: "all",
      "resource-packs": "all",
      launchers: "all",
      macros: "all",
      "hack-clients": "all"
    },
    activeSorts: {
      mods: "featured",
      "resource-packs": "featured",
      launchers: "featured",
      macros: "featured",
      "hack-clients": "featured"
    },
    selectedResource: null
  };

  // DOM Elements Cache
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
  const views = document.querySelectorAll(".app-view");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
  const modalOverlay = document.getElementById("resource-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const toastContainer = document.getElementById("toast-container");
  const snowToggleBtn = document.getElementById("snow-toggle");

  // ==========================================
  // Router & Navigation
  // ==========================================
  function getRouteFromHash() {
    const hash = window.location.hash.replace("#", "").trim();
    const validRoutes = ["home", "mods", "resource-packs", "launchers", "macros", "hack-clients", "rules"];
    return validRoutes.includes(hash) ? hash : "home";
  }

  function navigateTo(route, updateHistory = true) {
    state.currentRoute = route;
    if (updateHistory) {
      window.location.hash = route === "home" ? "" : `#${route}`;
    }

    // Update active nav states
    navLinks.forEach((link) => {
      const target = link.getAttribute("data-route");
      link.classList.toggle("active", target === route);
    });

    mobileNavLinks.forEach((link) => {
      const target = link.getAttribute("data-route");
      link.classList.toggle("active", target === route);
    });

    // Toggle view visibility
    views.forEach((view) => {
      const isCurrent = view.id === `view-${route}`;
      view.style.display = isCurrent ? "block" : "none";
    });

    // Close mobile drawer if open
    if (mobileNavDrawer && mobileNavDrawer.classList.contains("open")) {
      mobileNavDrawer.classList.remove("open");
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Render resources for current view
    renderCurrentView(route);
  }

  window.addEventListener("hashchange", () => {
    const route = getRouteFromHash();
    navigateTo(route, false);
  });

  // Nav link click events
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = link.getAttribute("data-route");
      navigateTo(route);
    });
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = link.getAttribute("data-route");
      navigateTo(route);
    });
  });

  // Mobile menu toggle
  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileNavDrawer.classList.toggle("open");
    });
  }

  // Snow Particle Toggle
  if (snowToggleBtn) {
    snowToggleBtn.addEventListener("click", () => {
      if (window.snowEngineInstance) {
        const isRunning = window.snowEngineInstance.toggle();
        snowToggleBtn.innerHTML = isRunning ? "❄" : "✕";
        showToast(isRunning ? "Snowfall enabled" : "Snowfall paused");
      }
    });
  }

  // ==========================================
  // Card Creation & Rendering
  // ==========================================
  function createResourceCard(resource) {
    const card = document.createElement("div");
    card.className = "resource-card";
    card.setAttribute("data-id", resource.id);

    // Dynamic tags HTML
    const tagsHtml = resource.tags
      .slice(0, 3)
      .map((t) => `<span class="tag-pill">${t}</span>`)
      .join("");

    // Category-specific specs
    let specHtml = "";
    let actionBtnLabel = "VIEW";

    if (resource.category === "mods") {
      specHtml = `
        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">Loader</span>
            <span class="spec-val">${resource.loader}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">MC Version</span>
            <span class="spec-val">${resource.minecraftVersion}</span>
          </div>
        </div>
      `;
      actionBtnLabel = "VIEW";
    } else if (resource.category === "resource-packs") {
      specHtml = `
        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">Resolution</span>
            <span class="spec-val">${resource.resolution || "16x"}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">MC Version</span>
            <span class="spec-val">${resource.minecraftVersion}</span>
          </div>
        </div>
      `;
      actionBtnLabel = "PREVIEW";
    } else if (resource.category === "launchers") {
      specHtml = `
        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">Platform</span>
            <span class="spec-val">${resource.platform}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Minecraft</span>
            <span class="spec-val">Java Edition</span>
          </div>
        </div>
      `;
      actionBtnLabel = "WEBSITE";
    } else if (resource.category === "macros") {
      specHtml = `
        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">Platform</span>
            <span class="spec-val">${resource.platform}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Category</span>
            <span class="spec-val">${resource.subcategory}</span>
          </div>
        </div>
      `;
      actionBtnLabel = "VIEW";
    } else if (resource.category === "hack-clients") {
      specHtml = `
        <div class="card-specs">
          <div class="spec-item">
            <span class="spec-label">Status</span>
            <span class="spec-val" style="color:var(--safe-green)">${resource.status}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Supported MC</span>
            <span class="spec-val">${resource.minecraftVersion}</span>
          </div>
        </div>
      `;
      actionBtnLabel = "DETAILS";
    }

    // Secondary button logic
    let secondaryBtn = "";
    if (resource.category === "hack-clients") {
      secondaryBtn = `
        <a href="${resource.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          OFFICIAL SITE ↗
        </a>
      `;
    } else if (resource.category === "launchers") {
      secondaryBtn = `
        <a href="${resource.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          DOWNLOAD ↗
        </a>
      `;
    } else {
      secondaryBtn = `
        <a href="${resource.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          DOWNLOAD ↗
        </a>
      `;
    }

    card.innerHTML = `
      <div class="card-media">
        <img src="${resource.image}" alt="${resource.name} preview" class="card-image" loading="lazy" />
        <div class="card-media-overlay"></div>
        <div class="card-badges">
          ${resource.featured ? '<span class="badge badge-featured">★ Featured</span>' : ""}
          <span class="badge badge-category">${resource.subcategory}</span>
        </div>
        <div class="badge-version">${resource.version}</div>
      </div>
      <div class="card-content">
        <div class="card-header-row">
          <h3 class="card-title">${resource.name}</h3>
        </div>
        <div class="card-author">by ${resource.author}</div>
        <p class="card-description">${resource.description}</p>
        ${specHtml}
        <div class="card-tags">${tagsHtml}</div>
        <div class="card-footer-actions">
          <button class="btn btn-secondary btn-sm btn-open-modal" data-id="${resource.id}">
            ${actionBtnLabel}
          </button>
          ${secondaryBtn}
        </div>
      </div>
    `;

    // Click handler for opening modal
    const viewBtn = card.querySelector(".btn-open-modal");
    if (viewBtn) {
      viewBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openResourceModal(resource);
      });
    }

    card.addEventListener("click", (e) => {
      // Don't trigger if user clicked directly on an external download link
      if (e.target.tagName === "A" || e.target.closest("a")) return;
      openResourceModal(resource);
    });

    return card;
  }

  // ==========================================
  // Render View Lists
  // ==========================================
  function renderCurrentView(route) {
    if (route === "home") {
      renderHomePage();
    } else if (["mods", "resource-packs", "launchers", "macros", "hack-clients"].includes(route)) {
      renderCategoryPage(route);
    }
  }

  function renderHomePage() {
    // Featured grid
    const featuredContainer = document.getElementById("home-featured-grid");
    if (featuredContainer) {
      featuredContainer.innerHTML = "";
      const featured = ResourceAPI.getFeatured().slice(0, 6);
      featured.forEach((item) => {
        featuredContainer.appendChild(createResourceCard(item));
      });
    }

    // Latest grid
    const latestContainer = document.getElementById("home-latest-grid");
    if (latestContainer) {
      latestContainer.innerHTML = "";
      const latest = ResourceAPI.getLatest(6);
      latest.forEach((item) => {
        latestContainer.appendChild(createResourceCard(item));
      });
    }
  }

  function renderCategoryPage(category) {
    const grid = document.getElementById(`${category}-grid`);
    const countEl = document.getElementById(`${category}-count`);
    if (!grid) return;

    grid.innerHTML = "";

    const query = state.searchQueries[category] || "";
    const activeFilter = state.activeFilters[category] || "all";
    const activeSort = state.activeSorts[category] || "featured";

    let items = ResourceAPI.search(query, category);

    // Subcategory pill filtering
    if (activeFilter !== "all") {
      items = items.filter((r) => {
        const sub = (r.subcategory || "").toLowerCase();
        const tags = (r.tags || []).map((t) => t.toLowerCase());
        const filterKey = activeFilter.toLowerCase();
        return sub.includes(filterKey) || tags.includes(filterKey);
      });
    }

    // Sorting
    if (activeSort === "name-asc") {
      items.sort((a, b) => a.name.localeCompare(b.name));
    } else if (activeSort === "newest") {
      items.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else {
      // featured
      items.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Update count display
    if (countEl) {
      countEl.textContent = `${items.length} resource${items.length === 1 ? "" : "s"} found`;
    }

    // Check empty state
    if (items.length === 0) {
      grid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">❄</div>
          <h3>No matching resources found</h3>
          <p>We couldn't find any resources matching "${escapeHtml(query)}". Try different keywords or reset your filters.</p>
          <button class="btn btn-secondary btn-reset-filters" data-category="${category}">
            Reset Filters
          </button>
        </div>
      `;
      const resetBtn = grid.querySelector(".btn-reset-filters");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => resetCategoryFilters(category));
      }
      return;
    }

    // Append cards
    items.forEach((item) => {
      grid.appendChild(createResourceCard(item));
    });
  }

  function resetCategoryFilters(category) {
    state.searchQueries[category] = "";
    state.activeFilters[category] = "all";
    state.activeSorts[category] = "featured";

    // Update UI elements
    const searchInput = document.getElementById(`${category}-search`);
    if (searchInput) {
      searchInput.value = "";
      const clearBtn = searchInput.parentElement.querySelector(".clear-search-btn");
      if (clearBtn) clearBtn.style.display = "none";
    }

    const pillContainer = document.getElementById(`${category}-pills`);
    if (pillContainer) {
      pillContainer.querySelectorAll(".filter-pill").forEach((pill) => {
        pill.classList.toggle("active", pill.getAttribute("data-filter") === "all");
      });
    }

    const sortSelect = document.getElementById(`${category}-sort`);
    if (sortSelect) sortSelect.value = "featured";

    renderCategoryPage(category);
    showToast("Filters reset");
  }

  // ==========================================
  // Search & Filter Listeners Setup
  // ==========================================
  const categories = ["mods", "resource-packs", "launchers", "macros", "hack-clients"];

  categories.forEach((cat) => {
    // Search input
    const searchInput = document.getElementById(`${cat}-search`);
    if (searchInput) {
      const clearBtn = searchInput.parentElement.querySelector(".clear-search-btn");

      searchInput.addEventListener("input", (e) => {
        const val = e.target.value;
        state.searchQueries[cat] = val;
        if (clearBtn) {
          clearBtn.style.display = val.length > 0 ? "block" : "none";
        }
        renderCategoryPage(cat);
      });

      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          searchInput.value = "";
          state.searchQueries[cat] = "";
          clearBtn.style.display = "none";
          searchInput.focus();
          renderCategoryPage(cat);
        });
      }
    }

    // Filter pills
    const pillContainer = document.getElementById(`${cat}-pills`);
    if (pillContainer) {
      const pills = pillContainer.querySelectorAll(".filter-pill");
      pills.forEach((pill) => {
        pill.addEventListener("click", () => {
          pills.forEach((p) => p.classList.remove("active"));
          pill.classList.add("active");
          state.activeFilters[cat] = pill.getAttribute("data-filter");
          renderCategoryPage(cat);
        });
      });
    }

    // Sort select
    const sortSelect = document.getElementById(`${cat}-sort`);
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        state.activeSorts[cat] = e.target.value;
        renderCategoryPage(cat);
      });
    }
  });

  // Global Quick Search Bar Button in Navbar
  const navSearchBtn = document.getElementById("nav-search-btn");
  if (navSearchBtn) {
    navSearchBtn.addEventListener("click", () => {
      // If not on a resource page, jump to mods
      if (!categories.includes(state.currentRoute)) {
        navigateTo("mods");
      }
      setTimeout(() => {
        const input = document.getElementById(`${state.currentRoute}-search`);
        if (input) {
          input.focus();
          input.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    });
  }

  // Keyboard shortcut Ctrl+K / Cmd+K
  window.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      if (!categories.includes(state.currentRoute)) {
        navigateTo("mods");
      }
      setTimeout(() => {
        const input = document.getElementById(`${state.currentRoute}-search`);
        if (input) {
          input.focus();
          input.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 100);
    }
  });

  // ==========================================
  // Resource Detail Modal
  // ==========================================
  function openResourceModal(resource) {
    state.selectedResource = resource;

    document.getElementById("modal-img").src = resource.image;
    document.getElementById("modal-title").textContent = resource.name;
    document.getElementById("modal-author").textContent = `Created by ${resource.author}`;
    document.getElementById("modal-desc").textContent = resource.longDescription || resource.description;

    // Tags
    const tagsContainer = document.getElementById("modal-tags");
    tagsContainer.innerHTML = resource.tags
      .map((t) => `<span class="tag-pill">${t}</span>`)
      .join("");

    // Specs Grid
    const specsContainer = document.getElementById("modal-specs");
    specsContainer.innerHTML = `
      <div class="spec-item">
        <span class="spec-label">Minecraft Version</span>
        <span class="spec-val">${resource.minecraftVersion || "All Versions"}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">${resource.category === "resource-packs" ? "Resolution" : "Mod Loader / Engine"}</span>
        <span class="spec-val">${resource.resolution || resource.loader || "Vanilla / Any"}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Supported Platform</span>
        <span class="spec-val">${resource.platform}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Release Version</span>
        <span class="spec-val" style="color:var(--cyan-primary)">${resource.version}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Security & Status</span>
        <span class="spec-val" style="color:var(--safe-green)">${resource.status}</span>
      </div>
      <div class="spec-item">
        <span class="spec-label">Date Added</span>
        <span class="spec-val">${resource.dateAdded}</span>
      </div>
    `;

    // Action Buttons
    const officialBtn = document.getElementById("modal-btn-official");
    officialBtn.href = resource.officialUrl;

    const downloadBtn = document.getElementById("modal-btn-download");
    if (resource.category === "hack-clients") {
      downloadBtn.textContent = "VISIT OFFICIAL REPO ↗";
      downloadBtn.href = resource.officialUrl;
    } else {
      downloadBtn.textContent = "DOWNLOAD RESOURCE ↗";
      downloadBtn.href = resource.downloadUrl;
    }

    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
    state.selectedResource = null;
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  // Modal Copy Link Button
  const modalCopyBtn = document.getElementById("modal-btn-copy");
  if (modalCopyBtn) {
    modalCopyBtn.addEventListener("click", () => {
      if (state.selectedResource) {
        const url = `${window.location.origin}${window.location.pathname}#${state.selectedResource.category}`;
        navigator.clipboard.writeText(url).then(() => {
          showToast(`Link copied for ${state.selectedResource.name}!`);
        }).catch(() => {
          showToast("Link copied to clipboard!");
        });
      }
    });
  }

  // ==========================================
  // Toast Notification System
  // ==========================================
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>❄</span> <span>${escapeHtml(message)}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Explore Resources Hero Button Click Handler
  const heroExploreBtn = document.getElementById("hero-explore-btn");
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener("click", () => {
      navigateTo("mods");
    });
  }

  // Category card clicks on home page
  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      const target = card.getAttribute("data-target");
      if (target) navigateTo(target);
    });
  });

  // Footer nav clicks
  document.querySelectorAll(".footer-link[data-route]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = link.getAttribute("data-route");
      navigateTo(route);
    });
  });

  // Initialize Route
  const initialRoute = getRouteFromHash();
  navigateTo(initialRoute, false);
});
