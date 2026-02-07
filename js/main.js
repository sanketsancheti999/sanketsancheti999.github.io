// Minimal bilingual toggle (EN/DE) with localStorage persistence.

const i18n = {
  en: {
    nav_services: "Services",
    nav_clients: "Clients",
    nav_process: "How we work",
    nav_about: "About",
    nav_contact: "Contact",

    hero_eyebrow: "Freelance Business Process Management",
    hero_title: "Business Process Management for Small Manufacturing & Logistics Companies",
    hero_subtitle: "I help teams with 20–200 employees document, improve, and standardize processes — using clear BPMN, practical SOPs, and lightweight ISO 9001-style frameworks.",
    cta_book: "Book a call",
    cta_contact: "Contact me",
    quick_email: "Email",
    quick_cv: "Download CV",

    card_title: "What you get",
    card_b1: "Clear BPMN process maps",
    card_b2: "SOPs your teams actually use",
    card_b3: "KPIs and simple performance tracking",
    card_b4: "ISO 9001-style structure without bureaucracy",

    services_title: "Services",
    services_sub: "Practical, people-friendly process work — designed for real operations.",

    s1_title: "Process Documentation (BPMN + SOPs)",
    s1_b1: "BPMN process maps (end-to-end and detailed)",
    s1_b2: "SOPs and work instructions",
    s1_b3: "Role clarity (e.g., RACI) and handovers",

    s2_title: "Process Improvement & KPI Design",
    s2_b1: "Identify bottlenecks and waste",
    s2_b2: "Define measurable KPIs (quality, delivery, cost)",
    s2_b3: "Simple tracking (Excel/Power BI-ready)",

    s3_title: "ISO 9001-Style Process Framework",
    s3_b1: "Audit-ready process structure (lightweight)",
    s3_b2: "Document control + process ownership",
    s3_b3: "Continuous improvement routines (PDCA)",

    clients_title: "Ideal clients",
    clients_sub: "Best fit: small manufacturers and logistics/service businesses (20–200 employees) who want structure and efficiency — without hiring a full-time Process Manager.",
    clients_h1: "Examples",
    clients_b1: "Manufacturing SMEs (production, engineering, suppliers)",
    clients_b2: "Logistics / operational service companies (e.g., packers & movers)",
    clients_b3: "Growing teams needing standardization and clarity",
    clients_h2: "Common outcomes",
    clients_o1: "Less rework and fewer handover issues",
    clients_o2: "Clear responsibilities and smoother onboarding",
    clients_o3: "Better visibility with KPIs",

    process_title: "How we work",
    process_sub: "A simple approach that delivers fast clarity — then measurable improvements.",
    p1_title: "Discovery call (30 min)",
    p1_text: "We clarify goals, scope, and the most valuable processes to tackle first.",
    p2_title: "Mapping & documentation",
    p2_text: "BPMN maps, SOPs, ownership, and handovers — structured and easy to use.",
    p3_title: "Implementation support",
    p3_text: "KPIs, rollout, training, and a lightweight improvement routine (PDCA).",
    process_note: "Typical engagements: 2–6 weeks depending on scope.",

    about_title: "About",
    about_text: "I’m Sanket Sancheti, a Freelancer specializing in Business Process Management. My approach is pragmatic and people-friendly: clear documentation, realistic improvements, and frameworks that work in day-to-day operations.",
    about_cv: "Download CV",
    about_focus: "Focus areas",
    af1: "BPMN process mapping",
    af2: "SOPs / work instructions",
    af3: "KPI design & governance",
    af4: "ISO 9001-style process frameworks",

    contact_title: "Contact",
    contact_sub: "Book a call or send a message. I typically respond within 24–48 hours.",
    contact_fast: "Fast options",
    contact_book: "Book via Calendly",
    contact_email: "Email me",
    contact_li: "Message on LinkedIn",
    contact_hint: "Prefer email?",
    contact_form_title: "Send a message",
    f_name: "Name",
    f_email: "Email",
    f_company: "Company (optional)",
    f_topic: "Topic",
    t1: "Process documentation",
    t2: "KPI design",
    t3: "ISO 9001 framework",
    t4: "Other",
    f_message: "Message",
    f_send: "Send",
    form_fallback: "If the form doesn’t work, email me at YOUR.EMAIL@example.com.",

    footer_privacy: "Privacy Policy"
  },

  de: {
    nav_services: "Leistungen",
    nav_clients: "Zielkunden",
    nav_process: "Vorgehen",
    nav_about: "Über mich",
    nav_contact: "Kontakt",

    hero_eyebrow: "Freelancer für Business Process Management",
    hero_title: "Business Process Management für kleine Produktions- und Logistikunternehmen",
    hero_subtitle: "Ich unterstütze Teams mit 20–200 Mitarbeitenden dabei, Prozesse zu dokumentieren, zu verbessern und zu standardisieren – mit klaren BPMN-Prozesslandkarten, praxistauglichen SOPs und einem schlanken ISO-9001-orientierten Prozessrahmen.",
    cta_book: "Termin buchen",
    cta_contact: "Kontakt",
    quick_email: "E-Mail",
    quick_cv: "CV herunterladen",

    card_title: "Ihr Nutzen",
    card_b1: "Klare BPMN-Prozesslandkarten",
    card_b2: "SOPs, die wirklich genutzt werden",
    card_b3: "KPIs & einfaches Performance-Tracking",
    card_b4: "ISO-9001-Struktur ohne Bürokratie",

    services_title: "Leistungen",
    services_sub: "Pragmatische Prozessarbeit – verständlich und umsetzbar im Tagesgeschäft.",

    s1_title: "Prozessdokumentation (BPMN + SOPs)",
    s1_b1: "BPMN-Modelle (End-to-End und Detail)",
    s1_b2: "SOPs / Arbeitsanweisungen",
    s1_b3: "Rollenklärung (z. B. RACI) und Schnittstellen",

    s2_title: "Prozessverbesserung & KPI-Design",
    s2_b1: "Engpässe und Ineffizienzen identifizieren",
    s2_b2: "Messbare KPIs definieren (Qualität, Lieferung, Kosten)",
    s2_b3: "Einfaches Tracking (Excel/Power BI-ready)",

    s3_title: "ISO-9001-orientierter Prozessrahmen",
    s3_b1: "Auditfähige Prozessstruktur (schlank)",
    s3_b2: "Dokumentenlenkung + Prozessverantwortung",
    s3_b3: "KVP-Routinen (PDCA)",

    clients_title: "Zielkunden",
    clients_sub: "Ideal: kleine Produktionsbetriebe sowie Logistik-/Serviceunternehmen (20–200 Mitarbeitende), die mehr Struktur und Effizienz möchten – ohne eine Vollzeitrolle zu schaffen.",
    clients_h1: "Beispiele",
    clients_b1: "KMU in der Produktion (Fertigung, Engineering, Zulieferer)",
    clients_b2: "Logistik / operative Serviceunternehmen (z. B. Umzug)",
    clients_b3: "Wachsende Teams mit Bedarf an Standards & Klarheit",
    clients_h2: "Typische Ergebnisse",
    clients_o1: "Weniger Nacharbeit und Übergabeprobleme",
    clients_o2: "Klare Verantwortlichkeiten & schnelleres Onboarding",
    clients_o3: "Bessere Transparenz durch KPIs",

    process_title: "Vorgehen",
    process_sub: "Ein einfacher Ablauf: schnelle Klarheit – dann messbare Verbesserungen.",
    p1_title: "Erstgespräch (30 Min.)",
    p1_text: "Wir klären Ziele, Scope und priorisieren die wichtigsten Prozesse.",
    p2_title: "Aufnahme & Dokumentation",
    p2_text: "BPMN, SOPs, Ownership und Schnittstellen – strukturiert und nutzerfreundlich.",
    p3_title: "Umsetzung & Stabilisierung",
    p3_text: "KPIs, Rollout, Training und eine schlanke KVP-Routine (PDCA).",
    process_note: "Typische Projekte: 2–6 Wochen je nach Umfang.",

    about_title: "Über mich",
    about_text: "Ich bin Sanket Sancheti, Freelancer im Bereich Business Process Management. Mein Fokus: klare Dokumentation, pragmatische Verbesserungen und Standards, die im Tagesgeschäft funktionieren.",
    about_cv: "CV herunterladen",
    about_focus: "Schwerpunkte",
    af1: "BPMN-Prozessmapping",
    af2: "SOPs / Arbeitsanweisungen",
    af3: "KPI-Design & Governance",
    af4: "ISO-9001-orientierte Prozessframeworks",

    contact_title: "Kontakt",
    contact_sub: "Termin buchen oder Nachricht senden – Antwort meist innerhalb von 24–48 Stunden.",
    contact_fast: "Schnelle Optionen",
    contact_book: "Termin via Calendly",
    contact_email: "E-Mail senden",
    contact_li: "LinkedIn-Nachricht",
    contact_hint: "Lieber per E-Mail?",
    contact_form_title: "Nachricht senden",
    f_name: "Name",
    f_email: "E-Mail",
    f_company: "Unternehmen (optional)",
    f_topic: "Thema",
    t1: "Prozessdokumentation",
    t2: "KPI-Design",
    t3: "ISO-9001-Prozessrahmen",
    t4: "Sonstiges",
    f_message: "Nachricht",
    f_send: "Senden",
    form_fallback: "Falls das Formular nicht funktioniert, schreiben Sie mir an YOUR.EMAIL@example.com.",

    footer_privacy: "Datenschutzerklärung"
  }
};

function setLanguage(lang) {
  const dict = i18n[lang] || i18n.en;

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;

    // Special case: option elements
    if (el.tagName.toLowerCase() === "option") {
      el.textContent = dict[key] ?? el.textContent;
      return;
    }

    el.textContent = dict[key] ?? el.textContent;
  });

  // Toggle label shows the other language
  const label = document.getElementById("langLabel");
  if (label) label.textContent = (lang === "en") ? "DE" : "EN";
}

(function init() {
  // year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear().toString();

  const saved = localStorage.getItem("lang");
  const initial = saved ? saved : "en";
  setLanguage(initial);

  const btn = document.getElementById("langToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      const current = localStorage.getItem("lang") || "en";
      setLanguage(current === "en" ? "de" : "en");
    });
  }
})();
