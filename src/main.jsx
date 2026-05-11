import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Gem,
  Menu,
  Ruler,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Timer,
  Waves,
  X,
} from "lucide-react";
import "./styles.css";

const imageModules = import.meta.glob("../Watch/*.png", {
  eager: true,
  import: "default",
});

const images = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

const fallbackImages = [
  "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1619134778706-7015533a6150?auto=format&fit=crop&w=1200&q=80",
];

const getImage = (index) => images[index % images.length] || fallbackImages[index % fallbackImages.length];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const rawProducts = [
  {
    name: "Aureon Meridian",
    line: "Diver",
    price: "$1,280",
    finish: "Black ceramic bezel",
    strap: "Brushed steel bracelet",
    movement: "Automatic date",
    accent: "Graphite",
    caseSize: "40 mm",
    waterResistance: "200 m",
    powerReserve: "41 hours",
    description: "A focused steel diver with a clean black dial, strong lume, and a bezel built for daily timing.",
  },
  {
    name: "Aureon Vale",
    line: "Dress",
    price: "$1,140",
    finish: "Sunburst black dial",
    strap: "Polished steel bracelet",
    movement: "Self-winding",
    accent: "Onyx",
    caseSize: "38 mm",
    waterResistance: "100 m",
    powerReserve: "40 hours",
    description: "A refined dress reference with restrained shine, a low-profile case, and an easy formal fit.",
  },
  {
    name: "Aureon Coast",
    line: "Diver",
    price: "$1,360",
    finish: "Rotating timing bezel",
    strap: "Three-link bracelet",
    movement: "Automatic date",
    accent: "Ivory",
    caseSize: "41 mm",
    waterResistance: "200 m",
    powerReserve: "41 hours",
    description: "A capable shoreline watch with practical timing, crisp markers, and a secure steel bracelet.",
  },
  {
    name: "Aureon Atlas",
    line: "Travel",
    price: "$1,520",
    finish: "Multi-angle case study",
    strap: "Solid-link bracelet",
    movement: "Dual-time automatic",
    accent: "Steel",
    caseSize: "40 mm",
    waterResistance: "150 m",
    powerReserve: "48 hours",
    description: "A travel watch tuned for changing schedules, with dual-time utility and a sturdy everyday case.",
  },
  {
    name: "Aureon Regent",
    line: "Dress",
    price: "$1,210",
    finish: "Applied baton markers",
    strap: "Tapered bracelet",
    movement: "Sweep seconds",
    accent: "Slate",
    caseSize: "39 mm",
    waterResistance: "100 m",
    powerReserve: "40 hours",
    description: "A dress watch with polished markers, a tapered bracelet, and enough presence for evening wear.",
  },
  {
    name: "Aureon Forge",
    line: "Sport",
    price: "$1,430",
    finish: "Crown-guard case",
    strap: "Oyster-style bracelet",
    movement: "Automatic date",
    accent: "Charcoal",
    caseSize: "42 mm",
    waterResistance: "150 m",
    powerReserve: "41 hours",
    description: "A sport model with broad shoulders, clear legibility, and bracelet finishing made for repeated wear.",
  },
  {
    name: "Aureon Vantage",
    line: "Travel",
    price: "$1,680",
    finish: "Boardroom-ready profile",
    strap: "Steel bracelet",
    movement: "Caliber A24",
    accent: "Navy",
    caseSize: "40 mm",
    waterResistance: "100 m",
    powerReserve: "48 hours",
    description: "A travel-ready reference with a tailored profile, balanced dial, and confident steel construction.",
  },
  {
    name: "Aureon Solace",
    line: "Dress",
    price: "$1,090",
    finish: "Minimal black dial",
    strap: "Articulated bracelet",
    movement: "Automatic",
    accent: "Silver",
    caseSize: "37 mm",
    waterResistance: "100 m",
    powerReserve: "40 hours",
    description: "A compact dress model built around calm proportions, clear hands, and a versatile silver finish.",
  },
  {
    name: "Aureon Pelagos",
    line: "Diver",
    price: "$1,390",
    finish: "Deep black timing bezel",
    strap: "Three-link steel bracelet",
    movement: "Automatic date",
    accent: "Lume",
    caseSize: "41 mm",
    waterResistance: "300 m",
    powerReserve: "44 hours",
    description: "A deeper-water diver with a bolder bezel, generous markers, and a bracelet ready for hard use.",
  },
  {
    name: "Aureon Harbor",
    line: "Diver",
    price: "$1,310",
    finish: "Matte black dial",
    strap: "Brushed steel bracelet",
    movement: "Automatic date",
    accent: "Pearl",
    caseSize: "40 mm",
    waterResistance: "200 m",
    powerReserve: "41 hours",
    description: "A cleaner daily diver with a softened case profile and practical date window.",
  },
  {
    name: "Aureon Trident",
    line: "Diver",
    price: "$1,470",
    finish: "Notched unidirectional bezel",
    strap: "Solid-link bracelet",
    movement: "Caliber D20",
    accent: "Black",
    caseSize: "42 mm",
    waterResistance: "300 m",
    powerReserve: "48 hours",
    description: "A heavier dive reference with more wrist presence, high contrast, and robust timing action.",
  },
  {
    name: "Aureon Reef",
    line: "Diver",
    price: "$1,250",
    finish: "Gloss black bezel",
    strap: "Tapered steel bracelet",
    movement: "Automatic date",
    accent: "Cream",
    caseSize: "39 mm",
    waterResistance: "200 m",
    powerReserve: "40 hours",
    description: "A smaller diver that keeps the essential timing language while wearing closer to a dress case.",
  },
  {
    name: "Aureon Embassy",
    line: "Dress",
    price: "$1,180",
    finish: "Polished smooth bezel",
    strap: "Five-link bracelet",
    movement: "Self-winding",
    accent: "Mirror",
    caseSize: "38 mm",
    waterResistance: "50 m",
    powerReserve: "40 hours",
    description: "A polished office-to-evening watch with a softer bracelet feel and minimal dial markings.",
  },
  {
    name: "Aureon Nocturne",
    line: "Dress",
    price: "$1,240",
    finish: "Black lacquer dial",
    strap: "Polished center links",
    movement: "Automatic",
    accent: "Midnight",
    caseSize: "39 mm",
    waterResistance: "100 m",
    powerReserve: "42 hours",
    description: "A dark formal reference with a high-gloss dial and a quiet case that sits easily under a cuff.",
  },
  {
    name: "Aureon Verve",
    line: "Dress",
    price: "$1,060",
    finish: "Fine brushed bezel",
    strap: "Slim steel bracelet",
    movement: "Sweep seconds",
    accent: "Champagne",
    caseSize: "36 mm",
    waterResistance: "50 m",
    powerReserve: "38 hours",
    description: "A slimmer dress model for smaller wrists, built around warm markers and a light bracelet.",
  },
  {
    name: "Aureon Marquis",
    line: "Dress",
    price: "$1,320",
    finish: "Applied Roman markers",
    strap: "Tapered polished bracelet",
    movement: "Automatic date",
    accent: "Ivory",
    caseSize: "40 mm",
    waterResistance: "100 m",
    powerReserve: "42 hours",
    description: "A more classical dress watch with extra dial formality and a practical automatic date.",
  },
  {
    name: "Aureon Compass",
    line: "Travel",
    price: "$1,590",
    finish: "Dual-zone chapter ring",
    strap: "Brushed steel bracelet",
    movement: "GMT automatic",
    accent: "Blue",
    caseSize: "40 mm",
    waterResistance: "150 m",
    powerReserve: "48 hours",
    description: "A clean GMT watch for frequent route changes, with simple time-zone reading and sturdy finishing.",
  },
  {
    name: "Aureon Layover",
    line: "Travel",
    price: "$1,440",
    finish: "24-hour inner scale",
    strap: "Comfort-link bracelet",
    movement: "Dual-time automatic",
    accent: "Steel",
    caseSize: "39 mm",
    waterResistance: "100 m",
    powerReserve: "45 hours",
    description: "A lighter travel watch made for airport days, hotel meetings, and quick schedule checks.",
  },
  {
    name: "Aureon Horizon",
    line: "Travel",
    price: "$1,720",
    finish: "World-time inspired dial",
    strap: "Solid-link bracelet",
    movement: "Caliber T31",
    accent: "Teal",
    caseSize: "41 mm",
    waterResistance: "150 m",
    powerReserve: "52 hours",
    description: "A broader travel reference with stronger dial detail and enough reserve for weekends away.",
  },
  {
    name: "Aureon Route",
    line: "Travel",
    price: "$1,380",
    finish: "Clean travel scale",
    strap: "Three-link bracelet",
    movement: "Automatic GMT",
    accent: "Red",
    caseSize: "40 mm",
    waterResistance: "100 m",
    powerReserve: "44 hours",
    description: "A direct, legible GMT with a restrained dial and a sport-leaning bracelet.",
  },
  {
    name: "Aureon Sprint",
    line: "Sport",
    price: "$1,360",
    finish: "Black performance dial",
    strap: "Brushed steel bracelet",
    movement: "Automatic date",
    accent: "White",
    caseSize: "41 mm",
    waterResistance: "150 m",
    powerReserve: "41 hours",
    description: "A compact sport watch with high-contrast markers and enough water resistance for active days.",
  },
  {
    name: "Aureon Rally",
    line: "Sport",
    price: "$1,490",
    finish: "Tachymeter-style bezel",
    strap: "Solid steel bracelet",
    movement: "Automatic",
    accent: "Redline",
    caseSize: "42 mm",
    waterResistance: "100 m",
    powerReserve: "44 hours",
    description: "A motorsport-inspired reference with a bolder bezel and a more assertive case stance.",
  },
  {
    name: "Aureon Field",
    line: "Sport",
    price: "$1,190",
    finish: "Matte utility dial",
    strap: "Brushed bracelet",
    movement: "Automatic",
    accent: "Olive",
    caseSize: "39 mm",
    waterResistance: "150 m",
    powerReserve: "40 hours",
    description: "A utility sport watch with fast readability, a practical case size, and brushed finishing.",
  },
  {
    name: "Aureon Apex",
    line: "Sport",
    price: "$1,620",
    finish: "Crown-guard sport case",
    strap: "Integrated steel bracelet",
    movement: "Caliber S18",
    accent: "Graphite",
    caseSize: "42 mm",
    waterResistance: "200 m",
    powerReserve: "48 hours",
    description: "A higher-spec sport model with an integrated feel, heavier case profile, and sharp dial contrast.",
  },
  {
    name: "Aureon Tempo",
    line: "Chronograph",
    price: "$1,850",
    finish: "Three-register black dial",
    strap: "Brushed steel bracelet",
    movement: "Automatic chronograph",
    accent: "Silver",
    caseSize: "42 mm",
    waterResistance: "100 m",
    powerReserve: "46 hours",
    description: "A classic steel chronograph with balanced subdials, tactile pushers, and a versatile black dial.",
  },
  {
    name: "Aureon Sector",
    line: "Chronograph",
    price: "$1,780",
    finish: "Sector timing layout",
    strap: "Polished-link bracelet",
    movement: "Mechanical chronograph",
    accent: "Cream",
    caseSize: "41 mm",
    waterResistance: "100 m",
    powerReserve: "44 hours",
    description: "A more graphic chronograph with strong registers and a dial layout built for quick elapsed timing.",
  },
  {
    name: "Aureon Lap",
    line: "Chronograph",
    price: "$1,690",
    finish: "Sport timing bezel",
    strap: "Oyster-style bracelet",
    movement: "Automatic chronograph",
    accent: "Red",
    caseSize: "42 mm",
    waterResistance: "150 m",
    powerReserve: "48 hours",
    description: "A sportier timing watch with faster visual readouts and a bracelet that suits casual wear.",
  },
  {
    name: "Aureon Archive",
    line: "Chronograph",
    price: "$1,940",
    finish: "Vintage-inspired registers",
    strap: "Tapered steel bracelet",
    movement: "Column-wheel automatic",
    accent: "Panda",
    caseSize: "40 mm",
    waterResistance: "100 m",
    powerReserve: "50 hours",
    description: "A heritage chronograph with a more compact case, vintage dial balance, and modern automatic reliability.",
  },
];

const products = rawProducts.map((product, index) => ({
  ...product,
  slug: slugify(product.name),
  image: getImage(index),
  gallery: [getImage(index), getImage(index + 4), getImage(index + 9)],
}));

const categories = ["All", ...Array.from(new Set(products.map((product) => product.line)))];
const ITEMS_PER_PAGE = 8;

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [collectionPage, setCollectionPage] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState(window.location.pathname);

  const productSlug = path.match(/^\/watch\/([^/]+)/)?.[1];
  const selectedProduct = products.find((product) => product.slug === productSlug);
  const isCollectionPage = path === "/collection";

  const navigateToHomeSection = (event, sectionId = "top") => {
    event.preventDefault();
    const hash = sectionId === "top" ? "" : `#${sectionId}`;
    window.history.pushState({}, "", `/${hash}`);
    setPath("/");
    setMenuOpen(false);

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ block: "start" });
    }, 0);
  };

  const navigateToCollection = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", "/collection");
    setPath("/collection");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToProduct = (event, slug) => {
    event.preventDefault();
    window.history.pushState({}, "", `/watch/${slug}`);
    setPath(window.location.pathname);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateBackToCollection = (event) => {
    navigateToCollection(event);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCollectionPage(1);
    window.setTimeout(() => {
      document.getElementById("collection-grid")?.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 0);
  };

  const handlePageChange = (page) => {
    setCollectionPage(page);
    window.setTimeout(() => {
      document.getElementById("collection-grid")?.scrollIntoView({ block: "start", behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [activeCategory, path]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter((product) => product.line === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const normalizedPage = Math.min(collectionPage, totalPages);
  const paginatedProducts = filteredProducts.slice(
    (normalizedPage - 1) * ITEMS_PER_PAGE,
    normalizedPage * ITEMS_PER_PAGE,
  );

  const relatedProducts = selectedProduct
    ? products.filter((product) => product.line === selectedProduct.line && product.slug !== selectedProduct.slug).slice(0, 4)
    : [];

  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" onClick={(event) => navigateToHomeSection(event)} aria-label="Aureon Watches home">
          <span className="brand-mark">A</span>
          <span>Aureon</span>
        </a>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Primary navigation">
          <a href="/collection" onClick={navigateToCollection}>
            Collection
          </a>
          <a href="/#craft" onClick={(event) => navigateToHomeSection(event, "craft")}>
            Craft
          </a>
          <a href="/#journal" onClick={(event) => navigateToHomeSection(event, "journal")}>
            Journal
          </a>
          <a href="/#visit" onClick={(event) => navigateToHomeSection(event, "visit")}>
            Visit
          </a>
        </nav>

        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Search watches">
            <Search size={18} />
          </button>
          <button className="icon-button" type="button" aria-label="Shopping bag">
            <ShoppingBag size={18} />
          </button>
          <button
            className="icon-button menu-button"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {selectedProduct ? (
        <ProductPage
          product={selectedProduct}
          relatedProducts={relatedProducts}
          onBack={navigateBackToCollection}
          onProductClick={navigateToProduct}
        />
      ) : isCollectionPage ? (
        <CollectionPage
          activeCategory={activeCategory}
          filteredCount={filteredProducts.length}
          onCategoryChange={handleCategoryChange}
          onPageChange={handlePageChange}
          onProductClick={navigateToProduct}
          page={normalizedPage}
          products={paginatedProducts}
          totalPages={totalPages}
        />
      ) : productSlug ? (
        <ProductNotFound onBack={navigateBackToCollection} />
      ) : (
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-bg" src={getImage(11)} alt="Aureon stainless steel watches on a dark surface" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Stainless steel automatic watches</p>
            <h1 id="hero-title">Aureon Watches</h1>
            <p className="hero-copy">
              Precise, resilient timepieces with polished profiles for workdays, travel, and evening wear.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/collection" onClick={navigateToCollection}>
                Shop collection <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="/#craft" onClick={(event) => navigateToHomeSection(event, "craft")}>
                Explore craft
              </a>
            </div>
          </div>
          <div className="hero-specs" aria-label="Collection highlights">
            <span>316L steel</span>
            <span>Automatic calibers</span>
            <span>Two-year service cover</span>
          </div>
        </section>

        <section className="intro-band reveal" data-reveal aria-label="Aureon positioning">
          <div>
            <span className="section-kicker">Current collection</span>
            <h2>Built for the dressed commute and the late return.</h2>
          </div>
          <p>
            Aureon focuses on clean black dials, steel bracelets, timing bezels, and practical automatic movements.
            The current visual library uses the available watch renders and lifestyle shots, with repeated images filling
            open catalog slots until more models are added.
          </p>
        </section>

        <section className="collection-section" id="collection" aria-labelledby="collection-title">
          <div className="section-heading reveal" data-reveal>
            <div>
              <span className="section-kicker">Shop</span>
              <h2 id="collection-title">Collection</h2>
            </div>
            <div className="filter-tabs" aria-label="Filter watches by collection">
              {categories.map((category) => (
                <button
                  key={category}
                  className={activeCategory === category ? "tab active" : "tab"}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <CollectionSummary total={filteredProducts.length} page={normalizedPage} totalPages={totalPages} />
          <ProductGrid products={paginatedProducts} onProductClick={navigateToProduct} />
          <Pagination page={normalizedPage} totalPages={totalPages} onPageChange={handlePageChange} />
          <div className="collection-more reveal" data-reveal>
            <a className="button collection-button" href="/collection" onClick={navigateToCollection}>
              View full collection <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <section className="feature-section reveal" data-reveal id="craft" aria-labelledby="craft-title">
          <div className="feature-media">
            <img src={getImage(6)} alt="Aureon watch worn with a tailored navy suit" loading="lazy" />
          </div>
          <div className="feature-copy">
            <span className="section-kicker">Craft</span>
            <h2 id="craft-title">Quiet mechanics, clear daily purpose.</h2>
            <p>
              Each model is presented with legible markers, bracelet finishing, and proportions meant for repeated wear.
              The site is structured so new watch images can drop into the existing catalog without redesigning the page.
            </p>
            <ul className="craft-list">
              <li>
                <ShieldCheck size={19} />
                Two-year service coverage
              </li>
              <li>
                <Timer size={19} />
                Automatic and dual-time references
              </li>
              <li>
                <Waves size={19} />
                Sport and diver-ready profiles
              </li>
              <li>
                <Gem size={19} />
                Brushed and polished steel finishing
              </li>
            </ul>
          </div>
        </section>

        <section className="journal-section" id="journal" aria-labelledby="journal-title">
          <div className="section-heading reveal" data-reveal>
            <div>
              <span className="section-kicker">Journal</span>
              <h2 id="journal-title">Notes from the bench</h2>
            </div>
            <a className="text-link" href="/#visit" onClick={(event) => navigateToHomeSection(event, "visit")}>
              Book a fitting <ChevronRight size={18} />
            </a>
          </div>

          <div className="journal-grid">
            <article className="journal-feature reveal" data-reveal>
              <img src={getImage(8)} alt="Aureon watch angles on a dark product set" loading="lazy" />
              <div>
                <span>Design study</span>
                <h3>The case shape behind the Meridian line</h3>
                <p>Timing bezels, crown guards, and steel bracelet geometry come together in one compact silhouette.</p>
              </div>
            </article>
            <article className="journal-card reveal" data-reveal style={{ "--delay": "90ms" }}>
              <CalendarDays size={22} />
              <h3>Private appointments</h3>
              <p>Reserve a 30-minute fitting for bracelet sizing, dial comparison, and model selection.</p>
            </article>
            <article className="journal-card reveal" data-reveal style={{ "--delay": "160ms" }}>
              <Sparkles size={22} />
              <h3>Care service</h3>
              <p>Annual bracelet cleaning and timing checks keep the watch ready for daily wear.</p>
            </article>
          </div>
        </section>

        <section className="visit-section reveal" data-reveal id="visit" aria-labelledby="visit-title">
          <div>
            <span className="section-kicker">Visit</span>
            <h2 id="visit-title">Aureon Studio</h2>
            <p>View the collection, compare bracelet fits, and reserve upcoming references as new imagery is added.</p>
          </div>
          <a className="button button-primary" href="mailto:studio@aureon.example">
            Contact studio <ArrowRight size={18} />
          </a>
        </section>
      </main>
      )}
    </>
  );
}

function ProductPage({ product, relatedProducts, onBack, onProductClick }) {
  return (
    <main className="product-page" id="top">
      <section className="detail-hero">
        <div className="detail-copy reveal is-visible">
          <a className="back-link" href="/collection" onClick={onBack}>
            <ArrowLeft size={18} />
            Collection
          </a>
          <span className="section-kicker">{product.line}</span>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <div className="detail-actions">
            <a className="button button-primary" href="mailto:studio@aureon.example">
              Reserve this watch <ArrowRight size={18} />
            </a>
            <button className="button detail-button" type="button">
              <ShoppingBag size={18} />
              Add to bag
            </button>
          </div>
        </div>

        <div className="detail-main-image reveal is-visible">
          <img src={product.image} alt={`${product.name} watch`} />
        </div>
      </section>

      <section className="detail-specs reveal" data-reveal aria-label={`${product.name} specifications`}>
        <div>
          <Ruler size={21} />
          <span>Case</span>
          <strong>{product.caseSize}</strong>
        </div>
        <div>
          <ShieldCheck size={21} />
          <span>Resistance</span>
          <strong>{product.waterResistance}</strong>
        </div>
        <div>
          <Timer size={21} />
          <span>Reserve</span>
          <strong>{product.powerReserve}</strong>
        </div>
        <div>
          <Gem size={21} />
          <span>Movement</span>
          <strong>{product.movement}</strong>
        </div>
      </section>

      <section className="detail-story reveal" data-reveal>
        <div>
          <span className="section-kicker">Details</span>
          <h2>{product.finish}</h2>
        </div>
        <p>
          Finished with a {product.strap.toLowerCase()}, the {product.name} keeps the collection language precise:
          black-dial clarity, steel durability, and proportions designed for everyday rotation. Its {product.accent.toLowerCase()}
          accent gives the reference its own identity without making it difficult to wear.
        </p>
      </section>

      <section className="detail-gallery" aria-label={`${product.name} image gallery`}>
        {product.gallery.map((image, index) => (
          <figure className="gallery-item reveal" data-reveal key={`${product.slug}-${index}`}>
            <img src={image} alt={`${product.name} gallery view ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </section>

      <section className="related-section" aria-labelledby="related-title">
        <div className="section-heading reveal" data-reveal>
          <div>
            <span className="section-kicker">More {product.line}</span>
            <h2 id="related-title">Related watches</h2>
          </div>
          <a className="text-link" href="/collection" onClick={onBack}>
            View all <ChevronRight size={18} />
          </a>
        </div>

        <ProductGrid products={relatedProducts} onProductClick={onProductClick} />
      </section>
    </main>
  );
}

function CollectionPage({
  activeCategory,
  filteredCount,
  onCategoryChange,
  onPageChange,
  onProductClick,
  page,
  products,
  totalPages,
}) {
  return (
    <main className="collection-page" id="top">
      <section className="collection-hero">
        <div className="reveal is-visible">
          <span className="section-kicker">Catalog</span>
          <h1>Complete Collection</h1>
          <p>
            Browse every current Aureon reference across diver, dress, travel, sport, and chronograph lines. Each page
            shows up to eight watches for easier comparison.
          </p>
        </div>
      </section>

      <section className="collection-section collection-page-list" aria-labelledby="collection-page-title">
        <div className="section-heading reveal is-visible">
          <div>
            <span className="section-kicker">All watches</span>
            <h2 id="collection-page-title">{activeCategory === "All" ? "All references" : activeCategory}</h2>
          </div>
          <div className="filter-tabs" aria-label="Filter watches by collection">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? "tab active" : "tab"}
                type="button"
                onClick={() => onCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <CollectionSummary total={filteredCount} page={page} totalPages={totalPages} />
        <ProductGrid products={products} onProductClick={onProductClick} />
        <Pagination page={page} totalPages={totalPages} onPageChange={onPageChange} />
      </section>
    </main>
  );
}

function CollectionSummary({ total, page, totalPages }) {
  const first = total === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1;
  const last = Math.min(page * ITEMS_PER_PAGE, total);

  return (
    <div className="collection-summary reveal" data-reveal id="collection-grid">
      <span>
        Showing {first}-{last} of {total} watches
      </span>
      <span>
        Page {page} of {totalPages}
      </span>
    </div>
  );
}

function ProductGrid({ products, onProductClick }) {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={product.slug}
          product={product}
          index={index}
          onProductClick={onProductClick}
        />
      ))}
    </div>
  );
}

function ProductCard({ product, index, onProductClick }) {
  return (
    <a
      className="product-card reveal"
      data-reveal
      href={`/watch/${product.slug}`}
      aria-label={`View ${product.name}`}
      onClick={(event) => onProductClick(event, product.slug)}
      style={{ "--delay": `${Math.min(index * 70, 280)}ms` }}
    >
      <span className="product-media">
        <img src={product.image} alt={`${product.name} watch`} loading="lazy" />
        <span>{product.line}</span>
      </span>
      <div className="product-info">
        <div>
          <h3>{product.name}</h3>
          <p>
            {product.finish} · {product.strap}
          </p>
        </div>
        <div className="product-meta">
          <span>{product.price}</span>
          <span className="round-button" aria-hidden="true">
            <ShoppingBag size={17} />
          </span>
        </div>
      </div>
    </a>
  );
}

function Pagination({ page, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="pagination reveal" data-reveal aria-label="Collection pagination">
      <button type="button" disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        <ArrowLeft size={17} />
        Previous
      </button>
      <div>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={pageNumber}
              type="button"
              className={pageNumber === page ? "page-dot active" : "page-dot"}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={pageNumber === page ? "page" : undefined}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type="button" disabled={page === totalPages} onClick={() => onPageChange(page + 1)}>
        Next
        <ArrowRight size={17} />
      </button>
    </nav>
  );
}

function ProductNotFound({ onBack }) {
  return (
    <main className="product-page not-found-page" id="top">
      <section className="detail-story reveal is-visible">
        <div>
          <span className="section-kicker">Unavailable</span>
          <h1>Watch not found</h1>
        </div>
        <p>The requested watch page does not match the current Aureon catalog.</p>
        <a className="button button-primary" href="/collection" onClick={onBack}>
          Back to collection <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
