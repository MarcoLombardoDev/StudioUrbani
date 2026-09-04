/* ==========================================================================
   Studio Urbani — bilingue IT / EN
   L'italiano è la lingua sorgente e vive nell'HTML: qui sono raccolte
   soltanto le stringhe inglesi, indicizzate dagli attributi data-i18n.
   ========================================================================== */
(function () {
  'use strict';

  var STORAGE_KEY = 'su_lang';

  var EN = {
    /* --- meta --- */
    'meta.home.title': "Studio Urbani — Chartered accountants, tax and labour advisers | Rome",
    'meta.home.desc': "Studio Urbani assists companies, professionals and private clients in accounting, tax, labour and litigation matters. Corporate, tax, employment and legal advice in Rome.",
    'meta.contatti.title': "Contact — Studio Urbani | Rome, Via Cristoforo Colombo 348",
    'meta.contatti.desc': "Contact Studio Urbani: Via Cristoforo Colombo 348, Sc. D int. 3 — 00145 Rome. Phone, email, opening hours and interactive map.",
    'meta.note.title': "Legal notice — Studio Urbani",
    'meta.note.desc': "Legal notice for the Studio Urbani website: ownership, use of contents, limitation of liability, intellectual property and applicable law.",
    'meta.privacy.title': "Privacy policy — Studio Urbani",
    'meta.privacy.desc': "Information on the processing of personal data under Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR) — Studio Urbani, Rome.",
    'meta.cookie.title': "Cookie policy — Studio Urbani",
    'meta.cookie.desc': "Cookie policy of the Studio Urbani website: technical tools only, Google Maps loaded on explicit consent, how to manage preferences.",

    /* --- generali --- */
    'a11y.skip': "Skip to content",
    'a11y.top': "Back to top",
    'brand.payoff': "Tax &amp; legal advisory · Employment consultancy",
    'nav.studio': "Firm",
    'nav.servizi': "Services",
    'nav.team': "Team",
    'nav.contatti': "Contact",
    'nav.rapporto': "Method",
    'bc.home': "Home",

    /* --- hero --- */
    'hero.eyebrow': "Chartered accountants · Statutory auditors · Labour consultants",
    'hero.title1': "Accounting, tax and labour.",
    'hero.title2': "One point of contact, for every decision.",
    'hero.lead': "We assist companies, professionals and private clients: whoever knows your case is the same person who follows its figures, filings and deadlines.",
    'hero.link1': "About the firm",
    'hero.link2': "The people",
    'hero.link3': "How we work",
    'hero.link4': "What we do",

    /* --- valori --- */
    'values.1.t': "A stable contact person",
    'values.1.d': "The same person follows your file over time: you never start from scratch on the next call.",
    'values.2.t': "Litigation included",
    'values.2.d': "Tax assessments, demands and appeals handled in-house, with a lawyer when the case needs one.",
    'values.3.t': "A network of specialists",
    'values.3.d': "University lecturers, audit firms, foreign practices and trade associations.",
    'values.4.t': "Figures that speak",
    'values.4.d': "Data processed to be read and used: financial statements, budgets, management indicators.",

    /* --- chi siamo --- */
    'about.eyebrow': "About us",
    'about.title': "A firm built on the continuity of the relationship.",
    'about.p1': "Studio Urbani devotes its work to assisting companies, professionals and private clients in accounting, tax, employment and litigation matters.",
    'about.p2': "With its own resources and in cooperation with experienced professionals, the firm provides tax, administrative, banking and financial advice, statutory audit services, data processing and public relations. Every file has a stable contact person: whoever knows the client is the same person who follows their figures, filings and deadlines.",
    'about.p3': "For matters of particular international, corporate, criminal-tax and legal relevance, the firm draws on relationships with university lecturers, audit and certification firms, foreign professional practices, merchant banks, service companies and trade associations.",
    'about.li1': "<strong>Companies, professionals and private clients:</strong> the same method, calibrated to the scale of those who need it.",
    'about.li2': "<strong>Chartered accountants and statutory auditors:</strong> expertise qualified for the audit and certification of accounts.",
    'about.li3': "<strong>Support in litigation:</strong> tax appeals, self-review requests and dealings with the tax authorities.",
    'about.quote': "«To meet our clients' expectations and to make the relationship between the tax authorities and the taxpayer easier.»",
    'about.quoteRole': "Managing partner",

    /* --- servizi --- */
    'services.eyebrow': "What we do",
    'services.title': "Nine practice areas, under one roof.",
    'services.lead': "Studio Massimo Urbani, with its own resources and in cooperation with experienced professionals, provides services in the areas below.",

    'srv.1.t': "Corporate",
    'srv.1.l1': "Incorporation of companies and partnerships, feasibility studies and drafting of deeds",
    'srv.1.l2': "Management of relations between shareholders and shareholders' agreements",
    'srv.1.l3': "Assistance at shareholders' meetings and board meetings",
    'srv.1.l4': "Extraordinary transactions: mergers, demergers, contributions, disposals and acquisitions",
    'srv.1.l5': "Boards of statutory auditors and statutory audit of accounts",

    'srv.2.t': "Accounting and administrative services",
    'srv.2.l1': "Simplified and ordinary bookkeeping",
    'srv.2.l2': "Recording of the mandatory accounting entries required by civil and tax law",
    'srv.2.l3': "Preparation of annual financial statements and interim accounts",
    'srv.2.l4': "VAT compliance and maintenance of statutory registers",

    'srv.3.t': "Tax",
    'srv.3.l1': "Assistance and defence in tax appeals, with a lawyer available: drafting of appeals and self-review requests",
    'srv.3.l2': "Tax advice on accounting and financial statements",
    'srv.3.l3': "Tax returns for companies, businesses, professionals and private clients",
    'srv.3.l4': "Tax planning and management of deadlines",

    'srv.4.t': "Business advisory",
    'srv.4.l1': "Financial statement analysis, budgeting and management control",
    'srv.4.l2': "Administrative, banking and financial advice",
    'srv.4.l3': "Business valuations and support in investment decisions",
    'srv.4.l4': "Reorganisation of administrative processes",

    'srv.5.t': "Employment consultancy",
    'srv.5.l1': "Advice on personnel management under every national collective agreement",
    'srv.5.l2': "Payroll processing and related annual filings (CU, 770)",
    'srv.5.l3': "Assistance to the employer or the employee during disputes",
    'srv.5.l4': "Hirings, terminations and mandatory notifications",

    'srv.6.t': "Court proceedings",
    'srv.6.l1': "Certified plans and debt restructuring agreements",
    'srv.6.l2': "Assistance in business crisis composition procedures",
    'srv.6.l3': "Appointments and expert reports on instruction of the judicial authorities",

    'srv.7.t': "Associations and non-profits",
    'srv.7.l1': "Incorporation and compliance for associations and third-sector entities",
    'srv.7.l2': "Accounting and tax regimes for non-commercial entities",
    'srv.7.l3': "Financial reports, corporate books and dealings with public registers",

    'srv.8.t': "Legal",
    'srv.8.l1': "Legal advice on contracts and commercial relationships",
    'srv.8.l2': "Assistance with debt collection and civil disputes",
    'srv.8.l3': "Support in criminal-tax matters with dedicated professionals",

    'srv.9.t': "Technology",
    'srv.9.l1': "The firm works in the cloud: accounting and payroll can be managed remotely",
    'srv.9.l2': "Client area for managing bookkeeping and issuing electronic invoices",
    'srv.9.l3': "Digital archiving of documents and secure file exchange",

    /* --- fatturazione --- */
    'billing.eyebrow': "Electronic invoicing",
    'billing.title': "Bookkeeping and invoices in the cloud, if you prefer.",
    'billing.lead': "As an alternative to the classic method, the firm provides a client area for bookkeeping and electronic invoicing: issuing and receiving in XML, compliant archiving, documents always available to consult.",
    'billing.panel.cta': "Request information",

    /* --- come lavoriamo --- */
    'rel.eyebrow': "How we work",
    'rel.title': "One point of contact, from beginning to end.",
    'rel.lead': "From the first call to routine administration the path is always the same: no handovers, no file that starts again from zero.",
    'rel.s1.t': "First contact",
    'rel.s1.d': "A phone call or an email: you describe the situation and we tell you straight away whether and how we can take it on.",
    'rel.s2.t': "A meeting, at the office or by video",
    'rel.s2.d': "We look at the documents and agree what is needed and by when. No commitment until the engagement is signed.",
    'rel.s3.t': "An assigned contact person",
    'rel.s3.d': "One professional at the firm becomes your reference point: they know the file and they answer directly.",
    'rel.s4.t': "Compliance over time",
    'rel.s4.d': "Bookkeeping, tax returns, payroll and deadlines followed over time, with the firm's other practice areas available whenever they are needed.",
    'rel.panel.t': "Talking to the firm",
    'rel.panel.d': "The first contact commits you to nothing. We answer during office hours, Monday to Friday.",
    'rel.panel.l1': "Monday to Friday, 9am-1pm and 2pm-6pm",
    'rel.panel.l2': "Via Cristoforo Colombo 348, Sc. D int. 3 — Rome",
    'rel.panel.l3': "Meeting at the office or by video call",

    /* --- dicono di noi --- */
    'reviews.eyebrow': "What they say",
    'reviews.title': "Our Google reviews.",
    'reviews.all': "Read them all",
    'reviews.carousel': "Google reviews",
    'reviews.prev': "Previous review",
    'reviews.next': "Next review",

    /* --- team --- */
    'team.eyebrow': "The people",
    'team.title': "The person who answers is the person on your file.",
    'team.lead': "The staff of Studio Massimo Urbani is made up of the professionals below, each following their own portfolio of clients over time.",
    'team.role1': "Managing partner · Chartered accountant, statutory auditor",
    'team.role2': "Chartered accountant",
    'team.role3': "Chartered accountant, statutory auditor",
    'team.role4': "Labour consultant",
    'team.role5': "Tax adviser",
    'team.role6': "Associate",
    'team.role7': "Associate",

    /* --- cta --- */
    'cta.eyebrow': "Contact",
    'cta.title': "Let's talk about you.",
    'cta.lead': "Ask for an appointment: we will be glad to understand what you need and to give you all the help required.",
    'cta.btn1': "How to reach us",

    /* --- footer --- */
    'footer.about': "Assistance to companies, professionals and private clients in accounting, tax, employment and litigation matters.",
    'footer.nav': "Navigation",
    'footer.contact': "Contact",
    'footer.legalTitle': "Legal information",
    'footer.note': "Legal notice",
    'footer.privacy': "Privacy policy",
    'footer.cookie': "Cookie policy",
    'footer.rights': "All rights reserved",

    /* --- cookie bar --- */
    'cookiebar.t': "This site only uses technical tools",
    'cookiebar.d': "We do not use profiling cookies. The Google Maps map is loaded only after your explicit consent. Further details in the <a href='pages/cookie-policy.html'>cookie policy</a>.",
    'cookiebar.ok': "Understood",
    'cookiebar.more': "Cookie policy",

    /* --- contatti --- */
    'contatti.eyebrow': "Where we are",
    'contatti.title': "Rome, Via Cristoforo Colombo 348.",
    'contatti.lead': "A phone call or an email is enough to get started: we arrange a meeting at the office or by video call and review your situation together.",
    'contatti.addr.t': "Office",
    'contatti.addr.cta': "Get directions",
    'contatti.tel.t': "Phone and fax",
    'contatti.mail.t': "Email",
    'contatti.mail.l1': "General enquiries",
    'contatti.mail.l2': "Administrative matters",
    'contatti.mail.l3': "Privacy matters",
    'contatti.hours.t': "Opening hours",
    'contatti.hours.l1': "Monday - Friday",
    'contatti.hours.l2': "Saturday and Sunday",
    'contatti.hours.closed': "Closed",
    'contatti.map.eyebrow': "Map",
    'contatti.map.title': "How to reach the firm.",
    'contatti.map.consentT': "Interactive Google Maps map",
    'contatti.map.consentD': "Loading the map will send some data (including your IP address) to Google. The map is not loaded without your consent.",
    'contatti.map.consentBtn': "Load the map",
    'contatti.map.error': "The map did not load. Try again, or use the «Get directions» button in the office card.",
    'contatti.map.consentLink': "Read the cookie policy",
    'contatti.map.note': "Studio Urbani — Via Cristoforo Colombo 348, Sc. D int. 3, 00145 Rome (RM), Italy.",

    /* --- pagine legali: comuni --- */
    'legal.eyebrow': "Legal information",
    'legal.updated': "Last updated",
    'legal.updatedDate': "September 2026",
    'legal.toc': "On this page",

    /* --- note legali --- */
    'note.title': "Legal notice",
    'note.lead': "Terms of use of the website www.studiourbani.it. Accessing and browsing the site implies acceptance of this notice.",
    'note.h1': "1. Site ownership",
    'note.p1': "The website www.studiourbani.it is operated by Studio Urbani (Studio Massimo Urbani), with offices at Via Cristoforo Colombo 348, Sc. D int. 3 — 00145 Rome (RM), Italy, hereinafter «the firm». For any request concerning the site you may write to <a href='mailto:info@studiourbani.it'>info@studiourbani.it</a> or call (+39) 06 5123225.",
    'note.h2': "2. Purpose of the site and nature of the information",
    'note.p2': "The site is purely informative: it describes how the firm is organised and the areas in which it operates. The information published does not constitute professional advice — whether tax, accounting, employment or legal — nor an invitation to carry out transactions of any kind.",
    'note.callout': "No content on this site can replace advice given on an actual case. A review of your situation requires a professional engagement with the firm.",
    'note.p3': "Browsing the site and sending messages to the firm do not create any professional relationship, which arises solely upon written acceptance of the engagement.",
    'note.h3': "3. Limitation of liability",
    'note.p4': "The firm takes care to keep the contents up to date but does not warrant that they are at all times complete, accurate and current with legislative, case-law and practice developments. Liability is therefore excluded for direct or indirect damages arising from:",
    'note.li1': "decisions taken on the basis of the information published on the site, without specific professional advice;",
    'note.li2': "interruptions, unavailability or malfunctioning of the site and related services;",
    'note.li3': "viruses or other harmful elements spread by third parties over the network.",
    'note.h4': "4. Links to third-party sites",
    'note.p5': "The site may contain links to external resources (for example the Google Maps map on the contact page). The firm exercises no control over such resources and is not responsible for their contents, privacy notices or terms of use applied by their respective owners.",
    'note.h5': "5. Intellectual property",
    'note.p6': "Texts, graphics, the logo, the «Studio Urbani» name, layout, icons and site code are protected by copyright and trademark law. Reproduction, modification, distribution and communication to the public, in whole or in part and by any means, is prohibited without the firm's prior written consent.",
    'note.p7': "You may browse the site and print individual pages for personal, non-commercial use, provided that ownership notices are kept intact.",
    'note.h6': "6. Personal data and cookies",
    'note.p8': "The processing of users' personal data is described in the <a href='privacy-policy.html'>privacy policy</a>. The tracking tools in use are listed in the <a href='cookie-policy.html'>cookie policy</a>.",
    'note.h7': "7. Changes to this notice",
    'note.p9': "The firm may update this legal notice at any time by publishing the current version on this page together with its update date.",
    'note.h8': "8. Applicable law and jurisdiction",
    'note.p10': "This notice is governed by Italian law. The Court of Rome has exclusive jurisdiction over any dispute relating to the site, without prejudice to the mandatory jurisdictions established by law for the protection of consumers.",
    'note.toc1': "Ownership",
    'note.toc2': "Purpose",
    'note.toc3': "Liability",
    'note.toc4': "External links",
    'note.toc5': "Intellectual property",
    'note.toc6': "Data and cookies",
    'note.toc7': "Changes",
    'note.toc8': "Applicable law",

    /* --- privacy --- */
    'privacy.title': "Privacy policy",
    'privacy.lead': "Information on the processing of personal data provided under Articles 13 and 14 of Regulation (EU) 2016/679 («GDPR») and Italian Legislative Decree 196/2003 as amended by Legislative Decree 101/2018.",
    'privacy.h1': "1. Data controller",
    'privacy.p1': "The data controller is Studio Urbani (Studio Massimo Urbani), Via Cristoforo Colombo 348, Sc. D int. 3 — 00145 Rome (RM), Italy. To exercise your rights or for any data protection request, write to <a href='mailto:privacy@studiourbani.it'>privacy@studiourbani.it</a> or call (+39) 06 5123225.",
    'privacy.h2': "2. What data we process",
    'privacy.p2': "Depending on the relationship in place, the firm may process:",
    'privacy.li1': "<strong>contact and identification data</strong> (first name, surname, company name, address, telephone, email, tax code, VAT number) provided voluntarily by email, telephone or during meetings;",
    'privacy.li2': "<strong>accounting, tax, corporate and payroll data</strong> needed to perform the engagement, including data relating to the client's employees and collaborators;",
    'privacy.li3': "<strong>special categories of data</strong> (Art. 9 GDPR), where indispensable for employment, social security and welfare compliance;",
    'privacy.li4': "<strong>browsing data</strong> collected automatically by the site (IP address, browser and device type, pages visited) within the limits described in the <a href='cookie-policy.html'>cookie policy</a>.",
    'privacy.h3': "3. Purposes and legal bases",
    'privacy.th1': "Purpose",
    'privacy.th2': "Legal basis",
    'privacy.th3': "Retention",
    'privacy.t1a': "Replying to requests for information sent by email or telephone",
    'privacy.t1b': "Performance of pre-contractual measures (Art. 6.1.b GDPR)",
    'privacy.t1c': "12 months from the last contact",
    'privacy.t2a': "Performance of the professional engagement and related compliance",
    'privacy.t2b': "Contract (Art. 6.1.b) and legal obligation (Art. 6.1.c)",
    'privacy.t2c': "10 years from the end of the relationship, subject to longer statutory terms",
    'privacy.t3a': "Anti-money-laundering, tax and social security compliance",
    'privacy.t3b': "Legal obligation (Art. 6.1.c GDPR)",
    'privacy.t3c': "Terms set by the applicable legislation",
    'privacy.t4a': "Defence of rights in and out of court",
    'privacy.t4b': "Legitimate interest (Art. 6.1.f GDPR)",
    'privacy.t4c': "Duration of the proceedings and time limits for appeal",
    'privacy.t5a': "Security and proper functioning of the website",
    'privacy.t5b': "Legitimate interest (Art. 6.1.f GDPR)",
    'privacy.t5c': "Maximum 12 months for technical logs",
    'privacy.p3': "Providing the data required to perform the engagement or requested by law is essential: without it, the firm cannot accept or continue the engagement.",
    'privacy.h4': "4. Who we share data with",
    'privacy.p4': "Data may be disclosed, to the extent necessary, to: professionals and consultants cooperating with the firm; providers of IT services and of the client area and electronic invoicing platform; public bodies and authorities (the Italian Revenue Agency, INPS, INAIL, Chambers of Commerce, judicial authorities); banks; audit firms. Providers processing data on the firm's behalf act as data processors under Article 28 GDPR.",
    'privacy.p5': "Data is neither disseminated nor transferred outside the European Economic Area, unless this is necessary to perform the engagement or to use technology services: in that case the transfer takes place on the basis of adequacy decisions or standard contractual clauses adopted by the European Commission.",
    'privacy.h5': "5. Your rights",
    'privacy.p6': "Data subjects may exercise the rights set out in Articles 15-22 GDPR at any time:",
    'privacy.d1': "access to the data and obtaining a copy;",
    'privacy.d2': "rectification of inaccurate data and completion of incomplete data;",
    'privacy.d3': "erasure, where retention obligations do not prevent it;",
    'privacy.d4': "restriction of processing and objection to processing based on legitimate interest;",
    'privacy.d5': "portability of data processed by automated means on the basis of the contract or consent;",
    'privacy.d6': "withdrawal of consent, where given, without prejudice to processing already carried out.",
    'privacy.p7': "Requests should be sent to <a href='mailto:privacy@studiourbani.it'>privacy@studiourbani.it</a>: the firm replies without undue delay and in any event within one month. You may also lodge a complaint with the Italian Data Protection Authority (<a href='https://www.garanteprivacy.it' target='_blank' rel='noopener noreferrer'>garanteprivacy.it</a>) or bring proceedings before the courts.",
    'privacy.h6': "6. Security and methods of processing",
    'privacy.p8': "Processing is carried out on paper and by electronic means, by authorised and trained staff, applying technical and organisational measures appropriate to ensure the confidentiality, integrity and availability of the data (access control, encryption of transmission channels, backups, storage of documents in protected areas). No automated decision-making or profiling is carried out.",
    'privacy.h7': "7. Updates to this notice",
    'privacy.p9': "This notice may be updated to reflect regulatory or organisational changes. The current version is always published on this page together with its last update date.",
    'privacy.toc1': "Controller",
    'privacy.toc2': "Data processed",
    'privacy.toc3': "Purposes",
    'privacy.toc4': "Recipients",
    'privacy.toc5': "Rights",
    'privacy.toc6': "Security",
    'privacy.toc7': "Updates",

    /* --- cookie --- */
    'cookie.title': "Cookie policy",
    'cookie.lead': "Information on the use of cookies and other tracking tools, provided under Article 122 of Italian Legislative Decree 196/2003 and the Italian Data Protection Authority guidelines of 10 June 2021.",
    'cookie.h1': "1. What cookies are",
    'cookie.p1': "Cookies are small text files that the sites you visit send to your browser, where they are stored and then sent back to the site on your next visit. Similar technologies (local storage, pixels, third-party scripts) perform comparable functions and are treated in this notice in the same way as cookies.",
    'cookie.h2': "2. What this site uses",
    'cookie.p2': "The site is built from static pages and <strong>does not use profiling, advertising or analytics cookies</strong>. We do not track user browsing and we do not share data with advertising networks. Only technical tools are used, for which consent is not required.",
    'cookie.th1': "Name",
    'cookie.th2': "Type and purpose",
    'cookie.th3': "Duration",
    'cookie.t1b': "Technical (local storage): stores the language chosen by the user, Italian or English.",
    'cookie.t1c': "Persistent, until browser data is cleared",
    'cookie.t2b': "Technical (local storage): remembers that the information notice at the bottom of the page has been read, so it is not shown again.",
    'cookie.t2c': "Persistent, until browser data is cleared",
    'cookie.t3b': "Technical (local storage): records consent to loading the Google Maps map on the contact page.",
    'cookie.t3c': "Persistent, until browser data is cleared",
    'cookie.p3': "The fonts used by the site are hosted on our own servers: no request is sent to external services to load the typography or graphics.",
    'cookie.h3': "3. Google Maps",
    'cookie.p4': "An interactive map provided by Google Ireland Limited is available on the <a href='contatti.html'>contact page</a>. The map <strong>is not loaded automatically</strong>: a placeholder is shown instead, and the content is requested from Google only after the user presses «Load the map».",
    'cookie.p5': "Once loaded, Google may receive data such as your IP address and information about your device and browser, and may set its own cookies, in accordance with its own notice: <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>policies.google.com/privacy</a>. Consent is optional, may be withdrawn at any time and does not affect the rest of the site: the firm's address and directions remain available as text.",
    'cookie.h4': "4. How to manage your preferences",
    'cookie.p6': "You can withdraw consent to the map and reset the stored preferences by clearing this site's data in your browser, or with the button below.",
    'cookie.reset': "Reset stored preferences",
    'cookie.resetOk': "Preferences reset: consent for the map will be requested again on the next load.",
    'cookie.p7': "Cookie settings can also be managed directly in your browser, which allows you to block, limit or delete them. Instructions are available in the guides for <a href='https://support.google.com/chrome/answer/95647' target='_blank' rel='noopener noreferrer'>Chrome</a>, <a href='https://support.mozilla.org/kb/protezione-antitracciamento-avanzata-firefox-desktop' target='_blank' rel='noopener noreferrer'>Firefox</a>, <a href='https://support.apple.com/it-it/guide/safari/sfri11471/mac' target='_blank' rel='noopener noreferrer'>Safari</a> and <a href='https://support.microsoft.com/it-it/microsoft-edge' target='_blank' rel='noopener noreferrer'>Edge</a>. Blocking technical tools may limit some site features, such as remembering the selected language.",
    'cookie.h5': "5. Controller and contact details",
    'cookie.p8': "The data controller is Studio Urbani, Via Cristoforo Colombo 348, Sc. D int. 3 — 00145 Rome (RM), Italy, email <a href='mailto:privacy@studiourbani.it'>privacy@studiourbani.it</a>. Information on data subjects' rights and on how data is processed is set out in the <a href='privacy-policy.html'>privacy policy</a>.",
    'cookie.toc1': "What they are",
    'cookie.toc2': "Tools used",
    'cookie.toc3': "Google Maps",
    'cookie.toc4': "Preferences",
    'cookie.toc5': "Controller"
  };

  /* Le stringhe italiane restano quelle scritte nell'HTML: al primo avvio
     vengono memorizzate qui, così il ritorno a IT è sempre fedele. */
  var itCache = new Map();
  var cached = false;

  function nodes() {
    return document.querySelectorAll('[data-i18n], [data-i18n-content], [data-i18n-aria-label], [data-i18n-title], [data-i18n-placeholder]');
  }

  function attrTargets(el) {
    var out = [];
    for (var i = 0; i < el.attributes.length; i++) {
      var name = el.attributes[i].name;
      if (name.indexOf('data-i18n-') === 0) {
        out.push({ attr: name.slice('data-i18n-'.length), key: el.attributes[i].value });
      }
    }
    return out;
  }

  function cacheItalian() {
    if (cached) return;
    nodes().forEach(function (el) {
      var entry = { html: el.hasAttribute('data-i18n') ? el.innerHTML : null, attrs: {} };
      attrTargets(el).forEach(function (t) { entry.attrs[t.attr] = el.getAttribute(t.attr); });
      itCache.set(el, entry);
    });
    cached = true;
  }

  function apply(lang) {
    cacheItalian();
    nodes().forEach(function (el) {
      var saved = itCache.get(el) || { attrs: {} };

      if (el.hasAttribute('data-i18n')) {
        var key = el.getAttribute('data-i18n');
        if (lang === 'en' && EN[key]) el.innerHTML = EN[key];
        else if (saved.html !== null && saved.html !== undefined) el.innerHTML = saved.html;
      }

      attrTargets(el).forEach(function (t) {
        if (lang === 'en' && EN[t.key]) el.setAttribute(t.attr, EN[t.key]);
        else if (saved.attrs[t.attr] != null) el.setAttribute(t.attr, saved.attrs[t.attr]);
      });
    });

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage non disponibile */ }
    document.dispatchEvent(new CustomEvent('su:langchange', { detail: { lang: lang } }));
  }

  function stored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function init() {
    cacheItalian();
    var saved = stored();
    var lang = saved === 'en' || saved === 'it' ? saved : 'it';
    if (lang !== 'it') apply(lang);
    else apply('it');

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.getAttribute('data-lang')); });
    });
  }

  window.SUi18n = { apply: apply, current: function () { return document.documentElement.lang; }, init: init };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
