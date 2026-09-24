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
    'agenda.expand':         'Ver detalle ↓',
    'agenda.collapse':       'Cerrar ↑',
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

    // Season 02 full page (index.html) — content unique to the S02 landing
    's02.hero.eyebrow':        'avenida+ presenta · Temporada 02',
    's02.hero.subtitle':       'Donde la logística, el ecommerce y los marketplaces bancarios se encuentran para construir el futuro del comercio en Argentina.',
    's02.reg.eyebrow':         'Temporada 02',
    's02.reg.b1':              '4 horas de contenido sobre logística y ecommerce',
    's02.reg.b2':              '4 paneles con expertos de logística real',
    's02.reg.b3':              'Casos reales: Same Day, Next Day y más',
    's02.reg.b4':              'Estrategia comercial para Cyber Monday',
    's02.reg.b5':              'Meet & greet con el equipo avenida+',
    's02.speakers.badge1':     '20 speakers confirmados',
    's02.tbd':                 'Speaker Sorpresa',
    's02.agenda.item1.title':  'Café | Networking',
    's02.agenda.item1.desc':   'Bienvenida y los primeros cruces entre asistentes.',
    's02.agenda.item2.title':  'Apertura | Palabras de bienvenida',
    's02.agenda.item2.desc':   'Apertura oficial de The Commerce League S02.',
    's02.agenda.item3.title':  'Panel 1 — De la promesa de entrega a la puerta del cliente',
    's02.agenda.item3.desc':   'Llegar a todo el país y cumplir la promesa.',
    's02.agenda.item4.title':  'Marketplaces bancarios',
    's02.agenda.item4.desc':   'Expertos de tiendas bancarias comparten su visión y experiencia.',
    's02.agenda.item5.title':  'Panel 2 — Same Day, Next Day: cuando la logística se convierte en parte de la decisión de compra',
    's02.agenda.item5.desc':   'La velocidad también es experiencia.',
    's02.agenda.item6.title':  'Break',
    's02.agenda.item6.desc':   'Pausa.',
    's02.agenda.item7.title':  'Semillero Digital',
    's02.agenda.item7.desc':   'Una iniciativa para potenciar el ecosistema digital.',
    's02.agenda.item8.title':  'Panel 3 — Más opciones de entrega, mejor experiencia',
    's02.agenda.item8.desc':   'El cliente elige dónde recibir.',
    's02.agenda.item9.title':  'Estrategia Comercial | Las tiendas bancarias se preparan para Cyber Monday',
    's02.agenda.item9.desc':   'Cómo prepararte para uno de los eventos más grandes del año.',
    's02.agenda.item10.title': 'Panel 4 — Una integración, múltiples alternativas logísticas',
    's02.agenda.item10.desc':  'Escalar sin perder el control.',
    's02.agenda.item11.title': 'Palabras de Cierre',
    's02.agenda.item11.desc':  'Cierre oficial de The Commerce League S02.',
    's02.sponsor.placeholder': 'Sponsor a confirmar',
    's02.footer.viewS01':      'Ver Temporada 01 →',
    's02.map.tagline':         'Descubrí cómo la logística mueve Argentina',

    // Season 01 page (s01.html) — announcement banner pointing to S02
    's01.banner.viewS02':      '🎉 Se viene la Temporada 02 — Ver detalles →',
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
    'agenda.expand':         'See details ↓',
    'agenda.collapse':       'Close ↑',
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

    // Season 02 full page (index.html) — content unique to the S02 landing
    's02.hero.eyebrow':        'avenida+ presents · Season 02',
    's02.hero.subtitle':       'Where logistics, ecommerce and banking marketplaces come together to build the future of commerce in Argentina.',
    's02.reg.eyebrow':         'Season 02',
    's02.reg.b1':              '4 hours of content on logistics and ecommerce',
    's02.reg.b2':              '4 panels with real logistics experts',
    's02.reg.b3':              'Real cases: Same Day, Next Day and more',
    's02.reg.b4':              'Commercial strategy for Cyber Monday',
    's02.reg.b5':              'Meet & greet with the avenida+ team',
    's02.speakers.badge1':     '20 speakers confirmed',
    's02.tbd':                 'Mystery Speaker',
    's02.agenda.item1.title':  'Coffee | Networking',
    's02.agenda.item1.desc':   'Welcome and the first connections among attendees.',
    's02.agenda.item2.title':  'Opening | Welcome Remarks',
    's02.agenda.item2.desc':   'Official opening of The Commerce League S02.',
    's02.agenda.item3.title':  'Panel 1 — From the Delivery Promise to the Customer\'s Door',
    's02.agenda.item3.desc':   'Reaching the whole country and keeping the promise.',
    's02.agenda.item4.title':  'Banking Marketplaces',
    's02.agenda.item4.desc':   'Banking store experts share their vision and experience.',
    's02.agenda.item5.title':  'Panel 2 — Same Day, Next Day: When Logistics Becomes Part of the Purchase Decision',
    's02.agenda.item5.desc':   'Speed is also part of the experience.',
    's02.agenda.item6.title':  'Break',
    's02.agenda.item6.desc':   'Short break.',
    's02.agenda.item7.title':  'Semillero Digital',
    's02.agenda.item7.desc':   'An initiative to boost the digital ecosystem.',
    's02.agenda.item8.title':  'Panel 3 — More Delivery Options, Better Experience',
    's02.agenda.item8.desc':   'The customer chooses where to receive.',
    's02.agenda.item9.title':  'Commercial Strategy | Banking Stores Get Ready for Cyber Monday',
    's02.agenda.item9.desc':   'How to prepare for one of the biggest events of the year.',
    's02.agenda.item10.title': 'Panel 4 — One Integration, Multiple Logistics Options',
    's02.agenda.item10.desc':  'Scaling without losing control.',
    's02.agenda.item11.title': 'Closing Remarks',
    's02.agenda.item11.desc':  'Official closing of The Commerce League S02.',
    's02.sponsor.placeholder': 'Sponsor TBA',
    's02.footer.viewS01':      'View Season 01 →',
    's02.map.tagline':         'Discover how logistics moves Argentina',

    // Season 01 page (s01.html) — announcement banner pointing to S02
    's01.banner.viewS02':      '🎉 Season 02 is coming — See details →',
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
// Agenda accordion — expand/collapse timeline items (S02 only;
// s01.html's agenda has no .timeline__toggle buttons, so this is a
// no-op there).
// ============================================================
function initAgendaAccordion() {
  const toggles = $$('.timeline__toggle');
  if (!toggles.length) return;

  function t(key) { return i18n[currentLang][key] || key; }

  function setState(btn, isOpen) {
    const details = btn.closest('.timeline__card').querySelector('.timeline__details');
    details.style.maxHeight = isOpen ? `${details.scrollHeight}px` : null;
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.dataset.i18n = isOpen ? 'agenda.collapse' : 'agenda.expand';
    btn.textContent = t(btn.dataset.i18n);
  }

  toggles.forEach((btn) => {
    btn.addEventListener('click', () => {
      const opening = btn.getAttribute('aria-expanded') !== 'true';
      toggles.forEach((other) => { if (other !== btn) setState(other, false); });
      setState(btn, opening);
    });
  });
}

// ============================================================
// Timeline dot sequence — S02 agenda "event progress" animation.
// Dots start off; one at a time lights up solid orange with a
// glow/pulse, blinks a few times, then hands off to the next dot.
// Loops forever. Guard clause makes this a no-op on s01.html,
// which never has .timeline__dot--anim elements.
// ============================================================
function initTimelineDotSequence() {
  const dots = $$('.timeline__dot--anim');
  if (!dots.length) return;

  const INITIAL_DELAY = 1000;  // ms before the first dot lights up
  const ON_DURATION = 3000;    // ms solid glow before blinking starts
  const BLINK_DURATION = 300;  // ms per blink cycle (fade out + in)
  const BLINK_COUNT = 4;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    dots[0].classList.add('is-on');
    return;
  }

  function activate(index) {
    dots[index].classList.add('is-on');
    setTimeout(() => startBlink(index), ON_DURATION);
  }

  function startBlink(index) {
    dots[index].classList.remove('is-on');
    dots[index].classList.add('is-blinking');
    setTimeout(() => deactivate(index), BLINK_DURATION * BLINK_COUNT);
  }

  function deactivate(index) {
    dots[index].classList.remove('is-blinking');
    activate((index + 1) % dots.length);
  }

  setTimeout(() => activate(0), INITIAL_DELAY);
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
    const eventbriteUrl = 'https://www.eventbrite.com.ar/e/the-commerce-league-2da-edicion-tickets-2000522374274';
    appendUserMsg(t('chat.menu.q2'));
    clearActions();
    const typing = showTyping();
    setTimeout(() => {
      typing.remove();
      appendBotMsgWithLink(t('chat.a.q2'), t('chat.a.q2.link'), eventbriteUrl);
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
// Registro CTA — reg-cta-btn, nav-cta-btn and the S02 modal CTA all
// link directly to the Season 02 Eventbrite page via href/target — no
// JS redirect needed.
// ============================================================

// ============================================================
// Hero particles — floating light dots on #hero-particles (S02 hero
// only; script.js is shared with s01.html, which has no canvas).
// ============================================================
function initHeroParticles() {
  const canvas = $('#hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  // Warm (orange) dominates at ~70%; the logo's cyan/violet accent
  // shows up in the remaining ~30% via pickParticleColor() below.
  const COLORS_WARM = ['#FF6B35', '#FF8C00', '#FFF0E0'];
  const COLORS_ACCENT = ['#4FC3F7', '#7B5EA7'];

  function pickParticleColor() {
    const palette = Math.random() < 0.3 ? COLORS_ACCENT : COLORS_WARM;
    return palette[Math.floor(Math.random() * palette.length)];
  }
  const PARTICLE_COUNT = 90;
  const reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let particles = [];
  let rafId = null;
  let resizeTimeout = null;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function resize() {
    // The canvas is a fixed, full-viewport background (see
    // .hero__particles in style.css) — size it to the viewport, not
    // any particular section.
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function createParticles() {
    particles = [];
    // Stratified Y: split the height into one band per particle and
    // drop each particle at a jittered position inside its own band.
    // Guarantees even top-to-bottom coverage regardless of how tall
    // .hero__content turns out to be — plain Math.random() can clump
    // particles by chance, especially if it runs before web fonts
    // finish loading and the hero's real height settles.
    const band = height / PARTICLE_COUNT;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const speed = randomBetween(0.2, 0.5);
      const angle = Math.random() * Math.PI * 2;
      const baseOpacity = randomBetween(0.2, 0.8);
      particles.push({
        x: Math.random() * width,
        y: band * i + Math.random() * band,
        r: randomBetween(1, 3),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: pickParticleColor(),
        baseOpacity,
        opacity: baseOpacity,
        isPulsing: Math.random() < 0.25, // ~20-30% of particles
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: randomBetween(0.01, 0.02),
      });
    }
  }

  function update() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x - p.r < 0 || p.x + p.r > width) {
        p.vx *= -1;
        p.x = clamp(p.x, p.r, width - p.r);
      }
      if (p.y - p.r < 0 || p.y + p.r > height) {
        p.vy *= -1;
        p.y = clamp(p.y, p.r, height - p.r);
      }

      if (p.isPulsing) {
        p.pulsePhase += p.pulseSpeed;
        p.opacity = clamp(p.baseOpacity + Math.sin(p.pulsePhase) * 0.25, 0.05, 0.9);
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function loop() {
    update();
    draw();
    rafId = requestAnimationFrame(loop);
  }

  resize();
  createParticles();

  if (reduceMotion) {
    draw();
  } else {
    loop();
  }

  // Web fonts (Montserrat) load async; if line-wrapping changes after
  // they land, .hero__content's real height can differ from what we
  // measured at DOMContentLoaded. Re-measure and reseed once fonts are
  // actually ready so particles stay spread across the true height.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      resize();
      createParticles();
      if (reduceMotion) draw();
    });
  }

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (rafId) cancelAnimationFrame(rafId);
      resize();
      createParticles();
      if (reduceMotion) {
        draw();
      } else {
        loop();
      }
    }, 150);
  });
}

// ============================================================
// Hero Argentina map — animated dotted-country intro on #hero-map
// (S02 hero only). Draws a stylized, hand-simplified outline of
// continental Argentina (no islands) as a field of dots, animates
// 4 logistics routes fanning out from Buenos Aires, then reveals
// the event date/time/place overlaid on top. Runs once; after the
// intro the map stays as a static backdrop with a subtle city pulse.
// ============================================================
function initHeroMap() {
  const canvas = $('#hero-map');
  const infoEl = $('#hero-map-info');
  if (!canvas || !infoEl) return;

  const ctx = canvas.getContext('2d');
  const offscreen = document.createElement('canvas');
  const octx = offscreen.getContext('2d');

  const reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hand-simplified outline of continental Argentina (no islands),
  // [lon, lat] pairs, clockwise from La Quiaca (Jujuy, N tip): east
  // along the Bolivia/Paraguay border through Formosa and Chaco,
  // out to the Misiones salient (the country's easternmost point,
  // near Iguazú, ~-53.8°/-26°), back down along the Uruguay river
  // through Corrientes/Entre Ríos and the Litoral mesopotámico into
  // Buenos Aires, then Patagonia to Tierra del Fuego, then back
  // north along the Andes (Chile border) to La Quiaca. ~52 points.
  const ARGENTINA_OUTLINE = [
    [-65.6, -22.1], [-64.5, -22.0], [-62.5, -22.2], [-60.5, -22.4],
    [-58.4, -23.2], [-57.9, -24.3], [-57.3, -25.4], [-55.8, -25.7],
    [-53.8, -25.6], [-53.8, -26.9], [-54.7, -27.8], [-55.5, -28.3],
    [-57.1, -29.7], [-57.9, -31.4], [-58.5, -33.0], [-58.5, -34.2],
    [-58.4, -34.6], [-57.5, -35.5], [-57.1, -37.0], [-57.5, -38.0],
    [-58.7, -38.6], [-62.3, -38.9], [-63.0, -40.8], [-64.9, -40.7],
    [-64.0, -42.5], [-65.0, -42.8], [-67.5, -45.9], [-65.9, -47.7],
    [-67.7, -49.3], [-68.0, -50.5], [-69.2, -51.6], [-68.6, -52.6],
    [-67.7, -53.8], [-68.3, -54.8], [-68.6, -54.9], [-69.5, -54.7],
    [-70.0, -52.8], [-73.0, -50.3], [-72.0, -47.9], [-71.8, -46.5],
    [-71.7, -43.0], [-71.5, -41.1], [-71.2, -39.6], [-70.5, -38.0],
    [-70.2, -35.5], [-70.0, -32.8], [-69.3, -31.5], [-69.0, -30.0],
    [-68.6, -28.5], [-68.0, -27.0], [-67.5, -24.5], [-66.8, -23.0],
  ];

  const CITIES = [
    { key: 'ba',  name: 'Buenos Aires',       lon: -58.42, lat: -34.61, isPrimary: true },
    { key: 'cba', name: 'Córdoba',            lon: -64.18, lat: -31.42 },
    { key: 'ros', name: 'Rosario',            lon: -60.64, lat: -32.95 },
    { key: 'mza', name: 'Mendoza',            lon: -68.85, lat: -32.89 },
    { key: 'tuc', name: 'Tucumán',            lon: -65.22, lat: -26.82 },
    { key: 'sal', name: 'Salta',              lon: -65.41, lat: -24.79 },
    { key: 'res', name: 'Resistencia',        lon: -59.00, lat: -27.45 },
    { key: 'neu', name: 'Neuquén',            lon: -68.06, lat: -38.95 },
    { key: 'chu', name: 'Comodoro Rivadavia', lon: -67.48, lat: -45.86 },
    { key: 'ush', name: 'Ushuaia',            lon: -68.30, lat: -54.80 },
  ];

  // Waypoints exist only to bend a route so it travels down the
  // Patagonian mainland instead of cutting a straight line over the
  // Atlantic — they're not drawn as city markers.
  const WAYPOINTS = {
    patN: { lon: -64.9, lat: -40.7 }, // Río Negro coast (San Antonio Oeste)
    patS: { lon: -69.2, lat: -51.6 }, // Río Gallegos
  };

  // Every route starts at Buenos Aires (element 0) and may pass
  // through one or more Patagonia waypoints before its destination
  // (the last element) — drawRoutes() walks each route's points in
  // order, so the line and its glowing head always travel outward
  // FROM Buenos Aires, following the country's shape rather than a
  // straight line over open ocean.
  const ROUTES = [
    ['ba', 'cba'],
    ['ba', 'ros'],
    ['ba', 'mza'],
    ['ba', 'tuc'],
    ['ba', 'sal'],
    ['ba', 'res'],
    ['ba', 'neu'],
    ['ba', 'patN', 'chu'],
    ['ba', 'patN', 'patS', 'ush'],
  ];

  const PHASE1_END = 2000;   // dots fade in
  const PHASE2_START = 2000;
  const PHASE2_END = 5000;   // routes travel
  const ROUTE_DURATION = 1500;
  const ROUTE_STAGGER = 180;
  const INFO_FADE_START = 5000;

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;
  let bounds = null;
  let projectedOutline = [];
  let projectedPoints = {}; // cities + waypoints, keyed by key
  let routeGeometry = [];   // parallel to ROUTES: { pts, cumFrac }
  let dots = [];
  let staticLayerFinalized = false;
  let startTime = performance.now();
  let rafId = null;
  let resizeTimeout = null;
  let infoRevealed = false;

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function computeBounds(outline) {
    let lonMin = Infinity, lonMax = -Infinity, latMin = Infinity, latMax = -Infinity;
    for (const [lon, lat] of outline) {
      if (lon < lonMin) lonMin = lon;
      if (lon > lonMax) lonMax = lon;
      if (lat < latMin) latMin = lat;
      if (lat > latMax) latMax = lat;
    }
    const lonScale = Math.cos(((latMin + latMax) / 2) * Math.PI / 180);
    return { lonMin, lonMax, latMin, latMax, lonScale };
  }

  function project(lon, lat) {
    const { lonMin, latMax, lonScale } = bounds;
    const spanX = (bounds.lonMax - bounds.lonMin) * lonScale;
    const spanY = bounds.latMax - bounds.latMin;
    const padding = 0.06;
    const availW = width * (1 - padding * 2);
    const availH = height * (1 - padding * 2);
    const scale = Math.min(availW / spanX, availH / spanY);
    const drawW = spanX * scale;
    const drawH = spanY * scale;
    const offsetX = (width - drawW) / 2;
    const offsetY = (height - drawH) / 2;
    return [
      offsetX + (lon - lonMin) * lonScale * scale,
      offsetY + (latMax - lat) * scale,
    ];
  }

  function pointInPolygon(x, y, poly) {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i];
      const [xj, yj] = poly[j];
      const intersect = (yi > y) !== (yj > y) &&
        x < (xj - xi) * (y - yi) / (yj - yi) + xi;
      if (intersect) inside = !inside;
    }
    return inside;
  }

  function buildDots() {
    const spacing = 6;
    const built = [];
    for (let gy = spacing / 2; gy < height; gy += spacing) {
      for (let gx = spacing / 2; gx < width; gx += spacing) {
        const x = gx + (Math.random() - 0.5) * 3;
        const y = gy + (Math.random() - 0.5) * 3;
        if (pointInPolygon(x, y, projectedOutline)) {
          built.push({
            x, y,
            r: randomBetween(1, 2),
            baseOpacity: randomBetween(0.4, 0.6),
            delay: randomBetween(0, PHASE1_END - 500),
            duration: randomBetween(400, 900),
          });
        }
      }
    }
    return built;
  }

  function buildRouteGeometry() {
    routeGeometry = ROUTES.map((route) => {
      const pts = route.map((key) => projectedPoints[key]);
      const lens = [];
      let total = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        const [x1, y1] = pts[i];
        const [x2, y2] = pts[i + 1];
        const d = Math.hypot(x2 - x1, y2 - y1);
        lens.push(d);
        total += d;
      }
      const cumFrac = [0];
      let acc = 0;
      for (const d of lens) {
        acc += d;
        cumFrac.push(total > 0 ? acc / total : 1);
      }
      return { pts, cumFrac };
    });
  }

  // Point along a (possibly multi-segment) route at overall progress
  // t (0..1), moving at roughly constant speed across segments of
  // different lengths.
  function pointAtProgress(geometry, t) {
    const { pts, cumFrac } = geometry;
    if (t <= 0) return pts[0];
    if (t >= 1) return pts[pts.length - 1];
    let segIndex = 0;
    for (let i = 0; i < cumFrac.length - 1; i++) {
      if (t >= cumFrac[i] && t <= cumFrac[i + 1]) { segIndex = i; break; }
    }
    const segStart = cumFrac[segIndex];
    const segEnd = cumFrac[segIndex + 1];
    const localT = segEnd > segStart ? (t - segStart) / (segEnd - segStart) : 1;
    const [x1, y1] = pts[segIndex];
    const [x2, y2] = pts[segIndex + 1];
    return [x1 + (x2 - x1) * localT, y1 + (y2 - y1) * localT];
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    offscreen.width = width * dpr;
    offscreen.height = height * dpr;
    octx.setTransform(dpr, 0, 0, dpr, 0, 0);

    bounds = computeBounds(ARGENTINA_OUTLINE);
    projectedOutline = ARGENTINA_OUTLINE.map(([lon, lat]) => project(lon, lat));

    projectedPoints = {};
    CITIES.forEach((c) => { projectedPoints[c.key] = project(c.lon, c.lat); });
    Object.keys(WAYPOINTS).forEach((key) => {
      const wp = WAYPOINTS[key];
      projectedPoints[key] = project(wp.lon, wp.lat);
    });
    buildRouteGeometry();

    dots = buildDots();
    staticLayerFinalized = false;
  }

  function drawStaticLayer(elapsed) {
    octx.clearRect(0, 0, width, height);
    octx.fillStyle = '#FF6B35';
    for (const d of dots) {
      const t = clamp((elapsed - d.delay) / d.duration, 0, 1);
      const opacity = d.baseOpacity * t;
      if (opacity <= 0) continue;
      octx.globalAlpha = opacity;
      octx.beginPath();
      octx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      octx.fill();
    }
    octx.globalAlpha = 1;
  }

  function routeProgress(index, elapsed) {
    const startT = PHASE2_START + index * ROUTE_STAGGER;
    return clamp((elapsed - startT) / ROUTE_DURATION, 0, 1);
  }

  function drawRoutes(elapsed) {
    ROUTES.forEach((route, i) => {
      const t = routeProgress(i, elapsed);
      if (t <= 0) return;
      const geometry = routeGeometry[i];
      const [hx, hy] = pointAtProgress(geometry, t);

      // Trace from Buenos Aires (pts[0]) through every fully-completed
      // waypoint segment, then partway into the current segment up to
      // the glowing head — the path always grows outward from BA.
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 107, 53, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(geometry.pts[0][0], geometry.pts[0][1]);
      for (let p = 1; p < geometry.pts.length; p++) {
        if (geometry.cumFrac[p] <= t) {
          ctx.lineTo(geometry.pts[p][0], geometry.pts[p][1]);
        } else {
          ctx.lineTo(hx, hy);
          break;
        }
      }
      ctx.stroke();
      ctx.restore();

      if (t < 1) {
        ctx.save();
        ctx.shadowColor = '#FF6B35';
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#FFDDBB';
        ctx.beginPath();
        ctx.arc(hx, hy, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });
  }

  function cityGrowProgress(city, elapsed) {
    if (city.isPrimary) return 1;
    const routeIndex = ROUTES.findIndex((r) => r[r.length - 1] === city.key);
    if (routeIndex === -1) return 1;
    return routeProgress(routeIndex, elapsed);
  }

  function drawCities(elapsed) {
    CITIES.forEach((city) => {
      const [x, y] = projectedPoints[city.key];
      const grow = cityGrowProgress(city, elapsed);
      const baseR = city.isPrimary ? 5 : 2 + grow * 1.5;
      let r = baseR;
      let glow = city.isPrimary ? 10 : grow * 6;

      if (elapsed >= INFO_FADE_START) {
        const pulse = Math.sin((elapsed - INFO_FADE_START) * 0.0015 + (city.pulseOffset || 0));
        r = baseR + pulse * 1.2;
        glow += pulse * 4;
      }

      ctx.save();
      ctx.shadowColor = '#FF6B35';
      ctx.shadowBlur = Math.max(glow, 0);
      ctx.fillStyle = city.isPrimary ? '#FFB088' : '#FF6B35';
      ctx.globalAlpha = city.isPrimary ? 1 : clamp(0.5 + grow * 0.5, 0, 1);
      ctx.beginPath();
      ctx.arc(x, y, Math.max(r, 1), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  function revealInfo() {
    if (infoRevealed) return;
    infoRevealed = true;
    infoEl.classList.add('hero__map-info--visible');
  }

  function renderFrame(elapsed) {
    if (!staticLayerFinalized) {
      drawStaticLayer(elapsed);
      if (elapsed >= PHASE1_END) staticLayerFinalized = true;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(offscreen, 0, 0, width, height);
    drawRoutes(elapsed);
    drawCities(elapsed);

    if (elapsed >= INFO_FADE_START) revealInfo();
  }

  function loop() {
    renderFrame(performance.now() - startTime);
    rafId = requestAnimationFrame(loop);
  }

  CITIES.forEach((c) => { c.pulseOffset = Math.random() * Math.PI * 2; });

  resize();

  if (reduceMotion) {
    // Skip the intro entirely — render the finished state right away.
    drawStaticLayer(PHASE1_END);
    staticLayerFinalized = true;
    renderFrame(INFO_FADE_START + 1);
  } else {
    loop();
  }

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (rafId) cancelAnimationFrame(rafId);
      resize();
      if (reduceMotion) {
        drawStaticLayer(PHASE1_END);
        staticLayerFinalized = true;
        renderFrame(performance.now() - startTime);
      } else {
        loop();
      }
    }, 150);
  });
}

// ============================================================
// Boot
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('[Commerce League] App initialized.');

  initLangToggle();
  initTicker();
  initAgendaAccordion();
  initTimelineDotSequence();
  initScrollSpy();
  initFadeUp();
  initChatbot();
  initTour();
  initSeasonModal();
  initHeroParticles();
  initHeroMap();
});
