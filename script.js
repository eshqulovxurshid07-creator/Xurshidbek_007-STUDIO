const dict = {
  uz: {
    nav_home: "Bosh sahifa",
    nav_portfolio: "Portfolio",
    nav_services: "Xizmatlar",
    nav_pricing: "Narxlar",
    nav_about: "About me",
    nav_contact: "Aloqa",
    cta_start: "Boshlash",
    hero_eyebrow: "Cinematic video editor",
    hero_title: "Brendingiz uchun premium video kontent",
    hero_text:
      "Men shaxsiy brendlar, bizneslar va kontent creatorlar uchun reklama, reels va storytelling videolarni professional uslubda montaj qilaman.",
    hero_btn_works: "Ishlarim",
    hero_btn_tg: "Telegram yozish",
    hero_badge_1: "Tez topshirish",
    hero_badge_2: "Brendga mos montaj",
    hero_badge_3: "Premium vizual sifat",
    hero_stat_1: "Topshirilgan loyihalar",
    hero_stat_2: "Yillik tajriba",
    hero_stat_3: "Birinchi javob vaqti",
    portfolio_title: "Portfolio",
    portfolio_subtitle: "So'nggi ishlardan tanlangan previewlar",
    portfolio_item_1: "Dinamik cuts, color grading, premium sound design.",
    portfolio_item_2: "Konversiyaga yo'naltirilgan reklamaviy montaj.",
    portfolio_item_3: "Storytelling va zamonaviy motion transitions.",
    services_title: "Xizmatlar",
    service_1_title: "Reels / Shorts",
    service_1_desc: "Qisqa format uchun yuqori retention beradigan montaj.",
    service_2_title: "Commercial Ads",
    service_2_desc: "Biznes va mahsulotlar uchun sotuvga yo'naltirilgan video.",
    service_3_title: "YouTube Editing",
    service_3_desc: "Uzun videolar uchun strukturali, professional post-production.",
    pricing_title: "Narxlar",
    pricing_subtitle: "Loyihaga qarab moslashuvchan paketlar",
    price_1_desc: "Oyiga 4 ta reels, basic color va sound.",
    price_2_desc: "Oyiga 12 ta reels, advanced motion va thumbnail guidance.",
    price_3_title: "Kelishiladi",
    price_3_desc: "Reklama kampaniyalari va katta hajmli loyihalar uchun.",
    about_title: "About me",
    about_text:
      "Men Xurshid, video editor. Maqsadim oddiy videoni premium darajadagi brend kontentga aylantirish. Ish jarayonida strategiya, kreativ va texnik sifatga birdek e'tibor beraman.",
    about_point_1: "Narrativga asoslangan yondashuv",
    about_point_2: "Platformaga mos strategiya",
    about_point_3: "Barqaror brend uslubi",
    contact_title: "Aloqa",
    contact_subtitle: "Loyihangiz haqida yozing, 24 soat ichida javob beraman",
    form_name: "Ism",
    form_message: "Xabar",
    form_send: "Telegramga yuborish",
    contact_direct: "To'g'ridan-to'g'ri bog'lanish",
  },
  en: {
    nav_home: "Home",
    nav_portfolio: "Portfolio",
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_about: "About me",
    nav_contact: "Contact",
    cta_start: "Start",
    hero_eyebrow: "Cinematic video editor",
    hero_title: "Premium video content for your brand",
    hero_text:
      "I create professional ad edits, reels, and storytelling videos for personal brands, businesses, and creators.",
    hero_btn_works: "My work",
    hero_btn_tg: "Message on Telegram",
    hero_badge_1: "Fast delivery",
    hero_badge_2: "Brand-focused editing",
    hero_badge_3: "Premium visual quality",
    hero_stat_1: "Completed projects",
    hero_stat_2: "Years of experience",
    hero_stat_3: "First response time",
    portfolio_title: "Portfolio",
    portfolio_subtitle: "Selected previews from recent projects",
    portfolio_item_1: "Dynamic cuts, color grading, premium sound design.",
    portfolio_item_2: "Conversion-focused ad editing for products.",
    portfolio_item_3: "Storytelling with modern motion transitions.",
    services_title: "Services",
    service_1_title: "Reels / Shorts",
    service_1_desc: "High-retention edits built for short-form content.",
    service_2_title: "Commercial Ads",
    service_2_desc: "Sales-oriented video editing for products and businesses.",
    service_3_title: "YouTube Editing",
    service_3_desc: "Structured, professional post-production for long videos.",
    pricing_title: "Pricing",
    pricing_subtitle: "Flexible packages based on project goals",
    price_1_desc: "4 reels/month with basic color and sound polish.",
    price_2_desc: "12 reels/month with advanced motion and thumbnail guidance.",
    price_3_title: "Custom",
    price_3_desc: "For large campaigns and high-volume production.",
    about_title: "About me",
    about_text:
      "I'm Xurshid, a video editor focused on transforming raw footage into premium brand content. My workflow combines strategy, creativity, and technical quality.",
    about_point_1: "Narrative-first approach",
    about_point_2: "Platform-specific strategy",
    about_point_3: "Consistent brand identity",
    contact_title: "Contact",
    contact_subtitle: "Tell me about your project and get a response within 24 hours",
    form_name: "Name",
    form_message: "Message",
    form_send: "Send to Telegram",
    contact_direct: "Direct contact",
  },
};

const langButton = document.querySelector("#langToggle");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("main .section");
let lang = localStorage.getItem("site_lang") || "uz";

function applyLanguage(nextLang) {
  const map = dict[nextLang];
  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (map[key]) {
      node.textContent = map[key];
    }
  });

  document.documentElement.lang = nextLang;
  langButton.textContent = nextLang.toUpperCase();
  localStorage.setItem("site_lang", nextLang);
}

langButton.addEventListener("click", () => {
  lang = lang === "uz" ? "en" : "uz";
  applyLanguage(lang);
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  const content =
    lang === "uz"
      ? `Salom, ismim ${name}. Email: ${email}. Xabar: ${message}`
      : `Hi, my name is ${name}. Email: ${email}. Message: ${message}`;

  const text = encodeURIComponent(content);
  window.open(`https://t.me/Xurshidbek0211?text=${text}`, "_blank", "noopener,noreferrer");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  },
  { threshold: 0.14 }
);

sections.forEach((section) => observer.observe(section));

function activateCurrentNav() {
  let current = "home";
  sections.forEach((section) => {
    const top = section.offsetTop - 140;
    if (window.scrollY >= top) {
      current = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", activateCurrentNav);
activateCurrentNav();
applyLanguage(lang);
