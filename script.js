/**
 * The Commerce League — Main Script
 * Bilingual (ES/EN), ticker, scroll-spy, fade-up animations.
 */

'use strict';

// ============================================================
// i18n — all UI text in both languages
// ============================================================
const i18n = {
  es: {
    'nav.agenda':         'Agenda',
    'nav.tour':           'Tour',
    'nav.speakers':       'Speakers',
    'nav.sponsors':       'Sponsors',
    'nav.registro':       'Registro',
    'nav.cta':            'Inscribirme',
    'hero.eyebrow':       'avenida+ presenta · Temporada 01',
    'hero.subtitle':      'El primer evento donde los comercios del marketplace bancario se <strong>encuentran, crecen y construyen comunidad</strong>. Un día para conectar con quienes están moviendo el comercio digital en Argentina.',
    'hero.cta1':          'Quiero mi lugar →',
    'hero.cta2':          'Ver agenda',
    'metric.comercios':   'Comercios',
    'metric.dia':         'Día',
    'metric.acceso':      'Acceso',

    // Sponsors
    'sponsors.eyebrow':         'Nos acompañan',
    'sponsors.title':           'Nuestros Partners',
    'sponsors.tier.main':       'Colaborador Principal',
    'sponsors.tier.second':     'Colaborador',
    'sponsors.tier.secondary':  'Con el apoyo de',

    // Speakers
    'speakers.eyebrow':      'Los protagonistas',
    'speakers.title':        'Speakers',
    'speakers.subtitle':     'Reunimos al equipo de avenida+, referentes del ecosistema fintech y comercios con resultados reales.',
    'speakers.badge1':       '11 speakers confirmados',
    'speakers.badge2':       'Q&A abierto',
    'speakers.badge3':       'Meet & greet',
    'speakers.role1':        'CEO & Co-Founder',
    'speakers.spec1':        'Visión & Estrategia',
    'speakers.quote1':       '"El marketplace bancario es la oportunidad más grande para el comercio digital argentino."',
    'speakers.role2':        'CTO & Tech Lead',
    'speakers.spec2':        'Tecnología & Arquitectura',
    'speakers.quote2':       '"Construimos la infraestructura que va a mover el comercio del futuro."',
    'speakers.company':      'avenida+',
    'speakers.soon.name':    'Speaker Sorpresa',
    'speakers.soon.role':    'Por confirmar',
    'speakers.soon.spec':    'Próximamente',
    'speakers.soon.quote':   '"Revelación próxima..."',

    // Agenda
    'agenda.eyebrow':        'Programa del día',
    'agenda.title':          'Agenda',
    'agenda.cat.networking': 'Networking',
    'agenda.cat.keynote':    'Keynote',
    'agenda.cat.panel':      'Panel',
    'agenda.cat.workshop':   'Workshop',
    'agenda.cat.cierre':     'Cierre',
    'agenda.item1.title':    'Desayuno & Networking',
    'agenda.item1.desc':     'Bienvenida y los primeros cruces entre comercios.',
    'agenda.item2.title':    'Apertura: Palabras de bienvenida',
    'agenda.item2.desc':     'Apertura oficial de The Commerce League S01.',
    'agenda.item3.title':    'Comercio Agéntico Abierto',
    'agenda.item3.desc':     'MODO presenta su visión sobre el comercio agéntico y el futuro de los pagos digitales.',
    'agenda.item4.title':    'Estrategia Comercial: Las tiendas bancarias se preparan para Hot Sale',
    'agenda.item4.desc':     'Cómo prepararte para la temporada de mayor venta del año.',
    'agenda.item5.title':    'La importancia de la cadena de los marketplaces',
    'agenda.item5.desc':     'Análisis profundo del ecosistema y la cadena de valor de los marketplaces bancarios.',
    'agenda.item6.title':    'Redefiniendo el Marketing Automation con AI',
    'agenda.item6.desc':     'Cómo automatizar y escalar tu estrategia de marketing dentro del marketplace.',
    'agenda.item7.title':    'Marketplaces bancarios',
    'agenda.item7.desc':     'Expertos de tiendas bancarias comparten su visión y experiencia.',
    'agenda.item8.title':    'Innovación logística para marketplaces bancarios',
    'agenda.item8.desc':     'Los referentes de logística del ecosistema comparten tendencias y soluciones.',
    'agenda.item9.title':    'Conectando marketplaces: el rol de los integradores',
    'agenda.item9.desc':     'El papel clave de los integradores en el crecimiento del ecosistema bancario.',

    // Registro
    'reg.eyebrow':           'Temporada 01',
    'reg.title':             'Asegurá tu lugar en la Liga',
    'reg.subtitle':          'Acceso gratuito · Cupos limitados',
    'reg.b1':                'Acceso completo al evento (full day)',
    'reg.b2':                'Desayuno y cocktail de cierre incluidos',
    'reg.b3':                'Materiales exclusivos de Liga S01',
    'reg.b4':                'Acceso anticipado a anuncios de producto',
    'reg.b5':                'Meet & greet con el equipo avenida+',
    'reg.f.name':            'Nombre completo',
    'reg.f.email':           'Email',
    'reg.f.whatsapp':        'WhatsApp',
    'reg.f.rubro':           'Rubro',
    'reg.f.interes':         'Interés principal',
    'reg.f.select':          'Seleccioná una opción',
    'reg.rubro.1':           'Electrónica',
    'reg.rubro.2':           'Indumentaria',
    'reg.rubro.3':           'Hogar & Deco',
    'reg.rubro.4':           'Alimentos',
    'reg.rubro.5':           'Servicios',
    'reg.rubro.6':           'Otro',
    'reg.int.1':             'Networking con otros comercios',
    'reg.int.2':             'Integraciones técnicas',
    'reg.int.3':             'Nuevas funcionalidades de avenida+',
    'reg.int.4':             'Estrategias de crecimiento',
    'reg.int.5':             'Todo lo anterior',
    'reg.cta.headline':      'Cupos limitados — ¡reservá el tuyo!',
    'reg.cta':               'Registrarme en Eventbrite →',
    'reg.cta.note':          'Serás redirigido a Eventbrite, nuestra plataforma oficial de registro',

    // Chatbot
    'chat.name':          'Commerce League',
    'chat.status':        'Online',
    'chat.greeting':      '¡Hola! ¿Cómo puedo ayudarte?',
    'chat.btn.yes':       'Tengo preguntas sobre el evento',
    'chat.btn.no':        'Por ahora no, muchas gracias',
    'chat.no_reply':      '¡Me alegro! Avisame cuando pueda ayudarte 😊',
    'chat.menu.q1':       '¿Qué es The Commerce League?',
    'chat.menu.q2':       '¿Cómo me puedo inscribir?',
    'chat.menu.q3':       '¿Quiénes son los sponsors?',
    'chat.menu.q4':       '¿Qué es avenida+?',
    'chat.menu.q5':       '¿Qué es el Tour?',
    'chat.a.q1':          'Es un nuevo evento que engloba a los comercios más grandes de Argentina que operan en marketplaces bancarios. Con foco en logística, medios de pago, inteligencia artificial y mucho más.',
    'chat.a.q2':          '¡Muy fácil! Podés hacerlo apretando el botón \'Inscribirme\' en el menú superior, o directamente desde este link 👉',
    'chat.a.q2.link':     'Registrarme en Eventbrite →',
    'chat.a.q3a':         'Nos acompañan: avenida+, Southpost, Workplace, Producteca y Hop Envíos.',
    'chat.a.q3b':         '¿Hay alguno que no conozcas?',
    'chat.a.q4a':         'Empresa de tecnología enfocada en Marketplaces marca blanca para instituciones financieras. avenida+ gestiona y opera la mayoría de los marketplaces bancarios más reconocidos de Argentina y LATAM, con foco en Inteligencia Artificial.',
    'chat.a.q4b':         '¿Querés conocer más? Visitá avenidamas.com',
    'chat.a.q5':          '¡Es la guía interactiva para recorrer la página de The Commerce League! Te lleva sección por sección para que no te pierdas nada 🗺️. Encontrás el botón Tour en el menú superior.',
    'chat.sponsor.visit': 'Visitá su página web para conocerlo mejor 👉',
    'chat.back':          'Ver otras preguntas',

    // Tour
    'tour.step':   'Paso',
    'tour.of':     'de',
    'tour.next':   'Siguiente →',
    'tour.finish': 'Finalizar Tour',
    'tour.exit':   'Salir del Tour',
    'tour.step1':  'Introducción a The Commerce League',
    'tour.step2':  'Conocé la Agenda del evento',
    'tour.step3':  'Conocé a nuestros grandes Speakers',
    'tour.step4':  'Nuestros Partners: conocé quiénes hacen posible este evento',
    'tour.step5':  '¿Te gustaría acceder al evento? Registrate, ¡es gratis!',
    'tour.step6':  '¿Te quedó alguna duda? Accedé a nuestro chatbot',

    // Season 02 modal
    's2.badge':    'COMING SOON · TEMPORADA 02',
    's2.title':    'Se viene la Temporada 02',
    's2.subtitle': 'Estamos preparando algo aún más grande',
    's2.date':     '28 de septiembre de 2026',
    's2.time':     '14:00 a 18:00 hs',
    's2.place':    'Workplace by IRSA — Vedia 3892, CABA',
    's2.cta':      'Inscribirme →',
    's2.note':     '¡Los cupos son limitados!',
  },
  en: {
    'nav.agenda':         'Agenda',
    'nav.tour':           'Tour',
    'nav.speakers':       'Speakers',
    'nav.sponsors':       'Sponsors',
    'nav.registro':       'Register',
    'nav.cta':            'Register Now',
    'hero.eyebrow':       'avenida+ presents · Season 01',
    'hero.subtitle':      'The first event where marketplace merchants <strong>meet, grow and build community</strong>. A full day to connect with those driving digital commerce in Argentina.',
    'hero.cta1':          'Claim my spot →',
    'hero.cta2':          'View agenda',
    'metric.comercios':   'Merchants',
    'metric.dia':         'Day',
    'metric.acceso':      'Access',

    // Sponsors
    'sponsors.eyebrow':         'Our partners',
    'sponsors.title':           'Our Partners',
    'sponsors.tier.main':       'Main Partner',
    'sponsors.tier.second':     'Partner',
    'sponsors.tier.secondary':  'Supported by',

    // Speakers
    'speakers.eyebrow':      'The protagonists',
    'speakers.title':        'Speakers',
    'speakers.subtitle':     'We bring together the avenida+ team, fintech ecosystem leaders and merchants with real results.',
    'speakers.badge1':       '11 confirmed speakers',
    'speakers.badge2':       'Open Q&A',
    'speakers.badge3':       'Meet & greet',
    'speakers.role1':        'CEO & Co-Founder',
    'speakers.spec1':        'Vision & Strategy',
    'speakers.quote1':       '"The banking marketplace is the biggest opportunity for Argentine digital commerce."',
    'speakers.role2':        'CTO & Tech Lead',
    'speakers.spec2':        'Technology & Architecture',
    'speakers.quote2':       '"We are building the infrastructure that will power the commerce of the future."',
    'speakers.company':      'avenida+',
    'speakers.soon.name':    'Mystery Speaker',
    'speakers.soon.role':    'To be confirmed',
    'speakers.soon.spec':    'Coming Soon',
    'speakers.soon.quote':   '"Coming soon..."',

    // Agenda
    'agenda.eyebrow':        'Day program',
    'agenda.title':          'Agenda',
    'agenda.cat.networking': 'Networking',
    'agenda.cat.keynote':    'Keynote',
    'agenda.cat.panel':      'Panel',
    'agenda.cat.workshop':   'Workshop',
    'agenda.cat.cierre':     'Closing',
    'agenda.item1.title':    'Breakfast & Networking',
    'agenda.item1.desc':     'Welcome and the first connections among merchants.',
    'agenda.item2.title':    'Opening Remarks',
    'agenda.item2.desc':     'Official opening of The Commerce League S01.',
    'agenda.item3.title':    'Open Agentic Commerce',
    'agenda.item3.desc':     'MODO presents its vision on agentic commerce and the future of digital payments.',
    'agenda.item4.title':    'Commercial Strategy: Banking Stores Get Ready for Hot Sale',
    'agenda.item4.desc':     'How to prepare your banking store for the highest-sales season of the year.',
    'agenda.item5.title':    'The Importance of the Marketplace Chain',
    'agenda.item5.desc':     'In-depth analysis of the ecosystem and value chain of banking marketplaces.',
    'agenda.item6.title':    'Marketing Automation',
    'agenda.item6.desc':     'How to automate and scale your marketing strategy within the marketplace.',
    'agenda.item7.title':    'Banking Marketplaces',
    'agenda.item7.desc':     'Banking store experts share their vision and experience.',
    'agenda.item8.title':    'Logistics Innovation for Banking Marketplaces',
    'agenda.item8.desc':     'Logistics leaders from the ecosystem share trends and solutions.',
    'agenda.item9.title':    'Connecting Marketplaces: The Role of Integrators',
    'agenda.item9.desc':     'The key role of integrators in the growth of the banking ecosystem.',

    // Registro
    'reg.eyebrow':           'Season 01',
    'reg.title':             'Secure your spot in the League',
    'reg.subtitle':          'Free access · Limited spots',
    'reg.b1':                'Full event access (full day)',
    'reg.b2':                'Breakfast and closing cocktail included',
    'reg.b3':                'Exclusive Liga S01 materials',
    'reg.b4':                'Early access to product announcements',
    'reg.b5':                'Meet & greet with the avenida+ team',
    'reg.f.name':            'Full name',
    'reg.f.email':           'Email',
    'reg.f.whatsapp':        'WhatsApp',
    'reg.f.rubro':           'Industry',
    'reg.f.interes':         'Main interest',
    'reg.f.select':          'Select an option',
    'reg.rubro.1':           'Electronics',
    'reg.rubro.2':           'Apparel',
    'reg.rubro.3':           'Home & Decor',
    'reg.rubro.4':           'Food',
    'reg.rubro.5':           'Services',
    'reg.rubro.6':           'Other',
    'reg.int.1':             'Networking with other merchants',
    'reg.int.2':             'Technical integrations',
    'reg.int.3':             'New avenida+ features',
    'reg.int.4':             'Growth strategies',
    'reg.int.5':             'All of the above',
    'reg.cta.headline':      'Limited spots — grab yours!',
    'reg.cta':               'Register on Eventbrite →',
    'reg.cta.note':          'You\'ll be redirected to Eventbrite, our official registration platform',

    // Chatbot
    'chat.name':          'Commerce League',
    'chat.status':        'Online',
    'chat.greeting':      'Hi! How can I help you?',
    'chat.btn.yes':       'I have questions about the event',
    'chat.btn.no':        'Not right now, thanks',
    'chat.no_reply':      'Got it! Let me know whenever I can help 😊',
    'chat.menu.q1':       'What is The Commerce League?',
    'chat.menu.q2':       'How do I register?',
    'chat.menu.q3':       'Who are the sponsors?',
    'chat.menu.q4':       'What is avenida+?',
    'chat.menu.q5':       'What is the Tour?',
    'chat.a.q1':          'It\'s a new event that brings together the largest merchants in Argentina operating in banking marketplaces — with a focus on logistics, payments, AI, and more.',
    'chat.a.q2':          'Easy! You can register by clicking the \'Register\' button in the top menu, or directly from this link 👉',
    'chat.a.q2.link':     'Register on Eventbrite →',
    'chat.a.q3a':         'Our partners: avenida+, Southpost, Workplace, Producteca and Hop Envíos.',
    'chat.a.q3b':         'Want to learn more about any of them?',
    'chat.a.q4a':         'A technology company focused on white-label Marketplaces for financial institutions. avenida+ manages and operates most of the leading banking marketplaces in Argentina and LATAM, with a focus on Artificial Intelligence.',
    'chat.a.q4b':         'Want to learn more? Visit avenidamas.com',
    'chat.a.q5':          'It\'s the interactive guide to explore The Commerce League page! It walks you section by section so you don\'t miss anything 🗺️. Find the Tour button in the top menu.',
    'chat.sponsor.visit': 'Visit their website to learn more 👉',
    'chat.back':          'See other questions',

    // Tour
    'tour.step':   'Step',
    'tour.of':     'of',
    'tour.next':   'Next →',
    'tour.finish': 'Finish Tour',
    'tour.exit':   'Exit Tour',
    'tour.step1':  'Introduction to The Commerce League',
    'tour.step2':  'Explore the Event Agenda',
    'tour.step3':  'Meet our amazing Speakers',
    'tour.step4':  'Our Partners: meet the people making this event possible',
    'tour.step5':  'Want to join the event? Register — it\'s free!',
    'tour.step6':  'Still have questions? Open our chatbot',

    // Season 02 modal
    's2.badge':    'COMING SOON · SEASON 02',
    's2.title':    'Season 02 is coming',
    's2.subtitle': 'We\'re preparing something even bigger',
    's2.date':     'September 28, 2026',
    's2.time':     '2:00 PM to 6:00 PM',
    's2.place':    'Workplace by IRSA — Vedia 3892, CABA',
    's2.cta':      'Register →',
    's2.note':     'Spots are limited!',
  },
};

// ============================================================
// Utilities
// ============================================================
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

// ============================================================
// Language system
// ============================================================
let currentLang = localStorage.getItem('tcl-lang') || 'es';

function switchLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('tcl-lang', lang);

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update all data-i18n elements
  $$('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = i18n[lang][key];
    if (value === undefined) return;
    // Use innerHTML only for subtitle (contains <strong>); textContent elsewhere
    if (key === 'hero.subtitle') {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  // Update toggle active state
  $$('.lang-toggle__opt').forEach((opt) => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
}

function initLangToggle() {
  const toggle = $('#lang-toggle');
  if (!toggle) return;

  // Wire individual option clicks
  $$('.lang-toggle__opt', toggle).forEach((opt) => {
    opt.addEventListener('click', () => switchLanguage(opt.dataset.lang));
  });

  // Apply saved / default language
  switchLanguage(currentLang);
}

// ============================================================
// Ticker — duplicate items so scroll loops seamlessly
// ============================================================
function initTicker() {
  const track = $('#ticker-track');
  if (!track) return;

  // Clone the original items to create a seamless loop
  const clone = track.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  track.parentElement.appendChild(clone);
}

// ============================================================
// Scroll-spy — add .scrolled to header on scroll
// ============================================================
function initScrollSpy() {
  const header = $('#site-header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
}

// ============================================================
// Fade-up — IntersectionObserver for .fade-up elements
// ============================================================
function initFadeUp() {
  const targets = $$('.fade-up');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

// ============================================================
// Tour — guided interactive walkthrough
// ============================================================
function initTour() {
  const tourBtn  = $('.btn-tour');
  const overlay  = $('#tour-overlay');
  const card     = $('#tour-card');
  const progress = $('#tour-progress');
  const text     = $('#tour-text');
  const dots     = $('#tour-dots');
  const nextBtn  = $('#tour-next');
  const exitBtn  = $('#tour-exit');
  if (!tourBtn || !overlay || !card) return;

  const STEPS = [
    { sectionId: 'hero'     },
    { sectionId: 'agenda'   },
    { sectionId: 'speakers' },
    { sectionId: 'sponsors' },
    { sectionId: 'registro' },
    { sectionId: 'chatbot', openChatbot: true },
  ];
  const TOTAL = STEPS.length;
  let currentStep = 0;
  let active = false;
  let prevSection = null;

  function t(key) { return i18n[currentLang][key] || key; }

  // ── Open / close ──
  function startTour() {
    active = true;
    currentStep = 0;
    overlay.hidden = false;
    card.hidden = false;
    document.body.style.overflow = 'hidden';
    renderStep();
  }

  function endTour() {
    active = false;
    overlay.hidden = true;
    card.hidden = true;
    document.body.style.overflow = '';
    clearHighlight();
  }

  // ── Section highlight ──
  function clearHighlight() {
    if (prevSection) {
      prevSection.classList.remove('tour-step-active');
      prevSection = null;
    }
    const chatbotEl = $('#chatbot');
    if (chatbotEl) chatbotEl.classList.remove('tour-step-active');
  }

  function highlightSection(sectionId) {
    clearHighlight();
    const el = sectionId === 'chatbot' ? $('#chatbot') : $(`#${sectionId}`);
    if (!el) return;
    el.classList.add('tour-step-active');
    prevSection = el;
  }

  // ── Scroll ──
  function scrollToSection(sectionId) {
    if (sectionId === 'chatbot') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      return;
    }
    const el = $(`#${sectionId}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // ── Render step ──
  function renderStep() {
    const step   = STEPS[currentStep];
    const stepNum = currentStep + 1;

    progress.textContent = `${t('tour.step')} ${stepNum} ${t('tour.of')} ${TOTAL}`;
    text.textContent     = t(`tour.step${stepNum}`);
    nextBtn.textContent  = stepNum === TOTAL ? t('tour.finish') : t('tour.next');
    exitBtn.textContent  = t('tour.exit');

    // Dots
    dots.innerHTML = '';
    for (let i = 0; i < TOTAL; i++) {
      const dot = document.createElement('span');
      dot.className = 'tour-dot' + (i === currentStep ? ' tour-dot--active' : '');
      dots.appendChild(dot);
    }

    highlightSection(step.sectionId);
    scrollToSection(step.sectionId);

    // Step 6: open chatbot if not already open
    if (step.openChatbot) {
      const chatbotEl = $('#chatbot');
      if (chatbotEl && !chatbotEl.classList.contains('is-open')) {
        const chatbotToggle = $('#chatbot-toggle');
        if (chatbotToggle) chatbotToggle.click();
      }
    }
  }

  // ── Navigation ──
  nextBtn.addEventListener('click', () => {
    if (currentStep < TOTAL - 1) {
      currentStep++;
      renderStep();
    } else {
      endTour();
    }
  });

  exitBtn.addEventListener('click', endTour);

  tourBtn.addEventListener('click', (e) => {
    e.preventDefault();
    startTour();
  });
}

// ============================================================
// Chatbot FAQ — floating bubble
// ============================================================
function initChatbot() {
  const chatbot  = $('#chatbot');
  const toggle   = $('#chatbot-toggle');
  const panel    = $('#chatbot-panel');
  const closeBtn = $('#chatbot-close');
  const messages = $('#chatbot-messages');
  const actions  = $('#chatbot-actions');
  if (!toggle) return;

  let isOpen     = false;
  let hasStarted = false;

  // ── Helpers ──
  function t(key) { return i18n[currentLang][key] || key; }
  function scrollBottom() { messages.scrollTop = messages.scrollHeight; }
  function clearActions() { actions.innerHTML = ''; }

  // ── Open / close ──
  function openChat() {
    isOpen = true;
    chatbot.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    if (!hasStarted) { hasStarted = true; startConversation(); }
  }
  function closeChat() {
    isOpen = false;
    chatbot.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
  }
  toggle.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  // ── Message renderers ──
  function appendBotMsg(text) {
    const el = document.createElement('div');
    el.className = 'chatbot__msg chatbot__msg--bot';
    el.textContent = text;
    messages.appendChild(el);
    scrollBottom();
  }
  function appendBotMsgWithLink(text, linkLabel, url) {
    const el = document.createElement('div');
    el.className = 'chatbot__msg chatbot__msg--bot';
    el.appendChild(document.createTextNode(text + ' '));
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = linkLabel;
    a.className = 'chatbot__link';
    el.appendChild(a);
    messages.appendChild(el);
    scrollBottom();
  }
  function appendUserMsg(text) {
    const el = document.createElement('div');
    el.className = 'chatbot__msg chatbot__msg--user';
    el.textContent = text;
    messages.appendChild(el);
    scrollBottom();
  }
  function showTyping() {
    const el = document.createElement('div');
    el.className = 'chatbot__typing';
    el.id = 'chatbot-typing';
    el.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(el);
    scrollBottom();
    return el;
  }
  function botWithDelay(text, cb) {
    clearActions();
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      if (text) appendBotMsg(text);
      if (cb) cb();
    }, 1000);
  }

  // ── Button renderer ──
  function renderButtons(buttons) {
    clearActions();
    buttons.forEach(({ label, onClick }) => {
      const btn = document.createElement('button');
      btn.className = 'chatbot__action-btn';
      btn.textContent = label;
      btn.addEventListener('click', onClick);
      actions.appendChild(btn);
    });
  }

  function backBtn() {
    renderButtons([{ label: t('chat.back'), onClick: showMenu }]);
  }

  // ── Conversational flow ──
  function startConversation() {
    botWithDelay(t('chat.greeting'), () => {
      renderButtons([
        { label: t('chat.btn.yes'), onClick: chooseYes },
        { label: t('chat.btn.no'),  onClick: chooseNo  },
      ]);
    });
  }

  function chooseYes() {
    appendUserMsg(t('chat.btn.yes'));
    clearActions();
    showMenu();
  }

  function chooseNo() {
    appendUserMsg(t('chat.btn.no'));
    botWithDelay(t('chat.no_reply'));
  }

  function showMenu() {
    renderButtons([
      { label: t('chat.menu.q1'), onClick: answerQ1 },
      { label: t('chat.menu.q2'), onClick: answerQ2 },
      { label: t('chat.menu.q3'), onClick: answerQ3 },
      { label: t('chat.menu.q4'), onClick: answerQ4 },
      { label: t('chat.menu.q5'), onClick: answerQ5 },
    ]);
  }

  function answerQ1() {
    appendUserMsg(t('chat.menu.q1'));
    botWithDelay(t('chat.a.q1'), backBtn);
  }
  function answerQ2() {
    const urls = {
      es: 'https://www.eventbrite.com.ar/e/1987362221904?aff=oddtdtcreator',
      en: 'https://www.eventbrite.com.ar/e/the-commerce-league-tickets-1987362221904?aff=oddtdtcreator&keep_tld=true',
    };
    appendUserMsg(t('chat.menu.q2'));
    clearActions();
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      appendBotMsgWithLink(t('chat.a.q2'), t('chat.a.q2.link'), urls[currentLang] || urls.es);
      backBtn();
    }, 1000);
  }

  function answerQ3() {
    appendUserMsg(t('chat.menu.q3'));
    botWithDelay(t('chat.a.q3a'), () => {
      botWithDelay(t('chat.a.q3b'), () => {
        const sponsors = [
          { label: 'avenida+',   url: 'https://avenidamas.com/' },
          { label: 'Southpost',  url: 'https://www.southpost.com.ar/' },
          { label: 'Workplace',  url: 'https://www.workplaceirsa.com.ar/' },
          { label: 'Producteca', url: 'https://www.producteca.com/' },
          { label: 'Hop Envíos', url: 'https://hopenvios.com.ar/' },
        ];
        const btns = sponsors.map((s) => ({
          label: s.label,
          onClick: () => {
            appendUserMsg(s.label);
            botWithDelay(t('chat.sponsor.visit') + ' ' + s.url, () => {
              window.open(s.url, '_blank', 'noopener,noreferrer');
              backBtn();
            });
          },
        }));
        btns.push({ label: t('chat.back'), onClick: showMenu });
        renderButtons(btns);
      });
    });
  }

  function answerQ4() {
    appendUserMsg(t('chat.menu.q4'));
    botWithDelay(t('chat.a.q4a'), () => {
      renderButtons([
        {
          label: t('chat.a.q4b'),
          onClick: () => window.open('https://avenidamas.com/', '_blank', 'noopener,noreferrer'),
        },
        { label: t('chat.back'), onClick: showMenu },
      ]);
    });
  }

  function answerQ5() {
    appendUserMsg(t('chat.menu.q5'));
    botWithDelay(t('chat.a.q5'), backBtn);
  }
}

// ============================================================
// Season 02 modal — auto-popup announcement
// ============================================================
function initSeasonModal() {
  const overlay = $('#s2-modal-overlay');
  if (!overlay) return;

  const closeBtn = $('#s2-modal-close');

  function openModal() {
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeModal();
  });

  setTimeout(openModal, 1000);
}

// ============================================================
// Registro CTA — Eventbrite redirect (language-aware)
// ============================================================
function initRegistroCTA() {
  const urls = {
    es: 'https://www.eventbrite.com.ar/e/1987362221904?aff=oddtdtcreator',
    en: 'https://www.eventbrite.com.ar/e/the-commerce-league-tickets-1987362221904?aff=oddtdtcreator&keep_tld=true',
  };

  function openEventbrite(e) {
    e.preventDefault();
    window.open(urls[currentLang] || urls.es, '_blank', 'noopener,noreferrer');
  }

  const regBtn = $('#reg-cta-btn');
  if (regBtn) regBtn.addEventListener('click', openEventbrite);

  const navBtn = $('#nav-cta-btn');
  if (navBtn) navBtn.addEventListener('click', openEventbrite);
}

// ============================================================
// Boot
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('[Commerce League] App initialized.');

  initLangToggle();
  initTicker();
  initScrollSpy();
  initFadeUp();
  initRegistroCTA();
  initChatbot();
  initTour();
  initSeasonModal();
});
