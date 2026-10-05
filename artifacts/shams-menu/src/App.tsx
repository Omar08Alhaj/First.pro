import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft, Check, Clock3, Download, Leaf, MapPin,
  Pizza, Printer, Search, Truck, X,
} from 'lucide-react';
import { categories, menuItems, type MenuCategory, type MenuItem } from './menu-data';

const groups: { id: MenuCategory; title: string; subtitle: string }[] = [
  { id: 'pizza', title: 'بيتزا', subtitle: 'تُخبز على الطلب' },
  { id: 'meals', title: 'وجبات', subtitle: 'وجبات ساخنة ومشبعة' },
  { id: 'manaqeesh', title: 'مناقيش ومعجنات', subtitle: 'من فرننا إلى سفرتكم' },
  { id: 'sides', title: 'مقبلات', subtitle: 'إضافات خفيفة' },
  { id: 'drinks', title: 'مشروبات', subtitle: 'مشروبات باردة' },
];

function getMenuUrl() {
  const base = import.meta.env.BASE_URL || '/';
  return new URL(base, window.location.origin).toString();
}

function normalizeArabic(value: string) {
  return value
    .toLocaleLowerCase('ar')
    .normalize('NFD')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .trim();
}

function MenuPrice({ item }: { item: MenuItem }) {
  if (item.sizes) {
    return (
      <div className="item-price">
        {item.sizes.map((size) => (
          <span key={size.label} style={{ marginInlineStart: 7 }}>
            <small>{size.label}</small> {size.price}
          </span>
        ))}
        <small>₪</small>
      </div>
    );
  }
  if (item.price === undefined) {
    return <div className="item-price"><small>السعر عند الطلب</small></div>;
  }
  return <div className="item-price">{item.price} <small>₪</small></div>;
}

function App() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const [search, setSearch] = useState('');
  const [qrOpen, setQrOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [qrFailed, setQrFailed] = useState(false);
  const menuUrl = getMenuUrl();
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=440x440&margin=1&data=${encodeURIComponent(menuUrl)}`;

  const filteredItems = useMemo(() => {
    const query = normalizeArabic(search);
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesQuery = !query || normalizeArabic(item.name).includes(query);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, search]);

  const shownGroups = groups.filter((group) => filteredItems.some((item) => item.category === group.id));

  useEffect(() => {
    if (!qrOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setQrOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [qrOpen]);

  const downloadQr = async () => {
    try {
      const response = await fetch(qrUrl);
      if (!response.ok) throw new Error('تعذر تحميل الرمز');
      const blobUrl = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'منيو-بيتزا-ومعجنات-الشام.png';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
      setDownloaded(true);
    } catch {
      window.open(qrUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const printQr = () => window.print();
  const browseMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="menu-page" dir="rtl">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="بيتزا ومعجنات الشام، الصفحة الرئيسية">
          <span className="brand-mark"><Pizza size={23} strokeWidth={1.8} /></span>
          <span>
            <span className="brand-title">بيتزا ومعجنات الشام</span>
            <span className="brand-caption" style={{ display: 'block', letterSpacing: '.04em' }}>من قلب أريحا</span>
          </span>
        </a>
        <div className="top-actions">
          <button className="pill-button" onClick={() => setQrOpen(true)} aria-label="عرض رمز القائمة">
            <span>رمز القائمة</span><Download size={16} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="hero-kicker">طازجة من الفرن في أريحا</div>
          <h1>نكهة الشام،<br /><em>على أصولها.</em></h1>
          <p className="hero-lede">
            بيتزا ومناقيش تُحضّر بمحبة، وتصل ساخنة إلى بابكم. اختاروا من قائمتنا وخلّوا الباقي علينا.
          </p>
          <div className="hero-cta">
            <button className="primary-button" onClick={browseMenu}>تصفّحوا القائمة <ArrowLeft size={17} /></button>
            <div className="hero-note"><Clock3 size={15} /> طازجة عند الطلب</div>
          </div>
        </div>
        <div className="hero-art" aria-label="رسم توضيحي لبيتزا طازجة">
          <div className="art-sun" />
          <Leaf className="art-leaf" size={35} strokeWidth={1.4} />
          <div className="pizza-plate"><div className="pizza-crust"><div className="pizza-cheese" /></div></div>
          <div className="art-stamp">طعم البيت<br /><span>من فرننا لكم</span></div>
        </div>
      </section>

      <section className="delivery-ribbon" aria-label="معلومات التوصيل">
        <div className="delivery-inner">
          <span><Truck size={17} /> التوصيل ٧ شواقل للطلبات الأقل من ٣٥ شيكل</span>
          <span className="divider" />
          <span><Check size={16} /> توصيل مجاني للطلبات فوق ٣٥ شيكل</span>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-head">
          <div>
            <div className="eyebrow">منيو بيتزا ومعجنات الشام</div>
            <h2>اختاروا على راحتكم</h2>
          </div>
          <div className="section-note">الأسعار بالشيكل</div>
        </div>

        <div className="menu-tools">
          <label className="search-wrap">
            <Search size={19} aria-hidden="true" />
            <input
              className="search-input"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="ابحثوا عن صنف..."
              aria-label="ابحثوا في القائمة"
            />
          </label>
          <span className="result-count" aria-live="polite">{filteredItems.length} أصناف</span>
        </div>
        <nav className="category-list" aria-label="تصنيفات القائمة">
          {categories.map((category) => (
            <button
              className="category-chip"
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
            >
              {category.label}
            </button>
          ))}
        </nav>

        {shownGroups.length > 0 ? shownGroups.map((group) => (
          <section key={group.id} aria-labelledby={`group-${group.id}`}>
            <div className="group-heading">
              <h3 id={`group-${group.id}`}>{group.title}</h3><span>{group.subtitle}</span>
            </div>
            <div className="items-grid">
              {filteredItems.filter((item) => item.category === group.id).map((item) => (
                <article className="menu-item" key={item.id}>
                  <div className="item-name">
                    {item.name}
                    {item.review && <small className="uncertain" title="يرجى مراجعة قراءة هذا الصنف من صورة القائمة">مراجعة الاسم</small>}
                    {item.sizes && <small>أحجام متعددة</small>}
                  </div>
                  <MenuPrice item={item} />
                </article>
              ))}
            </div>
          </section>
        )) : (
          <div className="empty-state" role="status">
            <strong>ما لقينا هذا الصنف</strong>
            جرّبوا كلمة ثانية أو اختاروا تصنيفاً مختلفاً.
          </div>
        )}
        <p className="section-note" style={{ marginTop: 24, lineHeight: 1.8 }}>
          أدرجنا الأصناف والأسعار الواضحة في صورة القائمة فقط. بعض التفاصيل غير ظاهرة بسبب انعكاس الضوء؛ نراجعها قبل إضافتها.
        </p>
      </section>

      <section className="trust-block">
        <div className="trust-card">
          <div className="trust-copy">
            <h2>أهلًا وسهلًا فيكم</h2>
            <p>منيو بيتزا ومعجنات الشام — طعم طيب، وأسعار واضحة، وتوصيل لأهل الحارة.</p>
          </div>
          <div className="location-line"><MapPin size={18} /> أريحا، أول شارع قصر هشام</div>
        </div>
      </section>

      <footer className="footer">
        <span>بيتزا ومعجنات الشام · أريحا</span>
        <span>للطلبات والتوصيل، تواصلوا معنا مباشرة</span>
      </footer>

      {qrOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setQrOpen(false);
        }}>
          <section className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="qr-title">
            <button className="modal-close" aria-label="إغلاق" onClick={() => setQrOpen(false)}><X size={18} /></button>
            <div className="eyebrow">شاركوها مع الأحباب</div>
            <h2 id="qr-title">القائمة أقرب بلمسة</h2>
            <p>امسحوا الرمز بالكاميرا لفتح قائمة بيتزا ومعجنات الشام مباشرة.</p>
            <div className="qr-frame">
              {qrFailed ? (
                <div className="empty-state" role="alert">
                  <strong>تعذّر تحميل الرمز</strong>
                  <button className="secondary-button" onClick={() => setQrFailed(false)}>إعادة المحاولة</button>
                </div>
              ) : (
                <img
                  src={qrUrl}
                  alt="رمز QR يفتح قائمة بيتزا ومعجنات الشام"
                  onError={() => setQrFailed(true)}
                />
              )}
            </div>
            <div className="qr-url" dir="ltr">{menuUrl}</div>
            <div className="qr-actions">
              <button className="primary-button" onClick={downloadQr}><Download size={15} />{downloaded ? 'تنزيل الرمز مرة أخرى' : 'تنزيل الرمز'}</button>
              <button className="secondary-button" onClick={printQr}><Printer size={15} />طباعة الرمز</button>
            </div>
            <div className="print-only" dir="rtl">
              <h1>بيتزا ومعجنات الشام</h1>
              <p>امسح الرمز لفتح القائمة</p>
              <img src={qrUrl} alt="" />
              <p dir="ltr">{menuUrl}</p>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default App;
