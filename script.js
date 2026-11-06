'use strict';

/* JB V11 — Portfolio completo, sin dependencias de JavaScript.
   Archivos web: img/webs/*.png. Detecta nombres FireShot en Live Server cuando
   éste ofrece índice de carpetas; para GitHub Pages usar nombres estandarizados. */

const $ = (s, scope = document) => scope.querySelector(s);
const $$ = (s, scope = document) => [...scope.querySelectorAll(s)];

const node = (tag, cls = '', value = '') => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (value) e.textContent = value;
  return e;
};

const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const getPref = k => {
  try { return localStorage.getItem(k); }
  catch { return null; }
};
const setPref = (k, v) => {
  try { localStorage.setItem(k, v); }
  catch {}
};

let locale = getPref('jb-language') === 'en' ? 'en' : 'es';
let theme = getPref('jb-theme') === 'dark' ? 'dark' : 'light';

const b = (es, en) => ({ es, en });
const inLang = value =>
  typeof value === 'string' ? value : (value[locale] || value.es);
const serie = (dir, ids) =>
  ids.map(n => `img/${dir}/Instagram post - ${n}.png`);
const work = (title, images) => ({ title, images });
const clip = (title, file) => ({ title, file });

/* DATOS / ACTIVOS DEL PROYECTO */

const PROJECTS = [
  {
    key: 'eco360',
    number: '01',
    name: 'ECO360',
    logo: 'img/eco360/logos/ECO360 logo-png 1.png',
    site: 'https://eco360latam.com/',
    host: 'eco360latam.com',
    shot: 'img/webs/eco360-desktop.png',
    fireShot: /(?:FireShot.*087|ECO360.*higiene)/i,
    sector: b(
      'HIGIENE PROFESIONAL / DISEÑO INTEGRAL',
      'PROFESSIONAL HYGIENE / INTEGRATED DESIGN'
    ),
    intro: b(
      'Diseño de contenido, comunicación impresa y una web de productos y soluciones de higiene profesional.',
      'Content design, print communication and a product-driven website for professional hygiene.'
    ),
    webTitle: b(
      'Productos, soluciones y pedidos.',
      'Products, solutions and orders.'
    ),
    webDescription: b(
      'Diseñé e implementé páginas de productos y sectores, formularios, el carrito de pedidos y ajustes responsive en GoHighLevel.',
      'I designed and implemented product and industry pages, forms, the order cart and responsive improvements in GoHighLevel.'
    ),
    tools: ['GoHighLevel', 'HTML / CSS / JS', 'Responsive'],
    works: [
      work(
        b('Higiene y hotelería', 'Hygiene and hospitality'),
        serie('eco360/post1', [185,186,187,188,189,190])
      ),
      work(
        b('Procesos de higiene', 'Hygiene processes'),
        serie('eco360/post2', [90,91,92,93,94,95])
      ),
      work(
        b('Hotelga', 'Hotelga'),
        serie('eco360/post3', [204,205])
      ),
      work(
        b('Productos y aplicaciones', 'Products and applications'),
        serie('eco360/post4', [96,97,98,100,140])
      )
    ],
    videos: [
      clip(
        b('Hotelga en video', 'Hotelga video'),
        'img/eco360/video/WhatsApp Video 2026-08-18 at 09.25.12.mp4'
      )
    ]
  },
  {
    key: 'follow',
    number: '02',
    name: 'FOLLOW',
    logo: 'img/follow/logos/Group 3.svg',
    site: 'https://followlog.com/',
    host: 'followlog.com',
    shot: 'img/webs/follow-desktop.png',
    fireShot: /(?:FireShot.*085|Follow.*Referidos)/i,
    sector: b(
      'LOGÍSTICA B2B / COMUNICACIÓN',
      'B2B LOGISTICS / COMMUNICATION'
    ),
    intro: b(
      'Contenido y campañas para explicar procesos logísticos, herramientas digitales y soluciones de FOLLOW.',
      'Content and campaigns that explain logistics processes, digital tools and FOLLOW solutions.'
    ),
    webTitle: b(
      'Una web para explicar mejor.',
      'A website that explains things better.'
    ),
    webDescription: b(
      'Diseño y ajustes de páginas de soluciones, organización de contenidos y mejoras responsive en WordPress.',
      'Solution-page design, content structure and responsive improvements in WordPress.'
    ),
    tools: ['WordPress', 'Web design', 'SEO'],
    works: [
      work(
        b('Precio y respaldo', 'Pricing and confidence'),
        serie('follow/post 1', [47,48,49])
      ),
      work(
        b('Una operación, demasiados canales', 'One operation, too many channels'),
        serie('follow/post 2', [118,119,120,122])
      ),
      work(
        b('Torre de control', 'Control tower'),
        serie('follow/post 3', [127,128])
      ),
      work(
        b('La logística nos conecta', 'Logistics connects us'),
        ['img/follow/efemerides/Instagram post - 43.png']
      )
    ],
    videos: []
  },
  {
    key: 'cima',
    number: '03',
    name: 'CIMA AI',
    logo: 'img/CIMA AI/logos/Frame 4.png',
    site: 'https://upcima.ai/',
    host: 'upcima.ai',
    shot: 'img/webs/cima-desktop.png',
    fireShot: /(?:FireShot.*086|Soluciones de IA para distintas)/i,
    sector: b(
      'INTELIGENCIA ARTIFICIAL / CONTENIDO',
      'ARTIFICIAL INTELLIGENCE / CONTENT'
    ),
    intro: b(
      'Comunicación digital, páginas web y exploración audiovisual para una plataforma de agentes IA.',
      'Digital communication, web pages and audiovisual experiments for an AI agents platform.'
    ),
    webTitle: b(
      'Contenido para tres idiomas.',
      'Content in three languages.'
    ),
    webDescription: b(
      'Páginas para agentes, industrias, demos y contenido en español, inglés y portugués.',
      'Pages for agents, industries and demos, with Spanish, English and Portuguese content.'
    ),
    tools: ['Web design', 'UX/UI', 'ES · EN · PT'],
    works: [
      work(
        b('Cinco señales para tu equipo', 'Five signs for your team'),
        serie('CIMA AI/carrusel', [41,42,43,44,45,46])
      ),
      work(
        b('Conversaciones que importan', 'Conversations that matter'),
        ['img/CIMA AI/Posteos placa unica/Instagram post - 55.png']
      ),
      work(
        b('No sobra trabajo', 'Not enough capacity'),
        ['img/CIMA AI/carrusel/Instagram post - 62.png']
      ),
      work(
        b('Responder a tiempo', 'Responding on time'),
        ['img/CIMA AI/Posteos placa unica/Instagram post - 64.png']
      )
    ],
    videos: [
      clip(
        b('Asistente con avatar IA', 'AI assistant avatar'),
        'img/CIMA AI/videos con ia/WhatsApp Video 2026-10-26 at 11.52.24.mp4'
      ),
      clip(
        b('IA en movimiento', 'AI in motion'),
        'img/CIMA AI/videos con ia/WhatsApp Video 2026-10-15 at 12.46.34.mp4'
      )
    ]
  }
];

/* TRADUCCIONES */

const COPY = {
  es: {
    skip: 'Ir a proyectos',
    position: 'DISEÑADOR GRÁFICO & DIGITAL',
    navProjects: 'PROYECTOS',
    navVideo: 'VIDEO',
    navAbout: 'SOBRE MÍ',
    navContact: 'CONTACTO',
    place: 'MENDOZA / ARGENTINA — PORTFOLIO 2026',
    heroOne: 'IDEAS QUE',
    heroTwo: 'SE VEN.',
    heroThree: 'Diseño que funciona.',
    heroDesc: 'Diseño gráfico, piezas impresas y sitios web. Un recorrido por proyectos reales, desde el concepto hasta su implementación.',
    viewProjects: 'VER PROYECTOS',
    aboutMe: 'SOBRE MÍ ↓',
    featureHeading: 'TRABAJO EN PRIMER PLANO',
    projectTitle: 'EL TRABAJO<br><em>HABLA.</em>',
    projectSubtitle: 'Cada proyecto reúne el sitio web, las publicaciones y otros materiales de la marca. Las piezas se muestran directamente, sin esconderlas detrás de un clic.',
    aboutTitle: 'LA PERSONA<br><em>DETRÁS.</em>',
    aboutStatement: 'Soy Julián, diseñador gráfico y digital. Me gusta llevar una idea desde el primer boceto hasta verla funcionando, ya sea en una etiqueta, una campaña o una web.',
    storyTitle: 'MI RECORRIDO',
    storyText: 'Me formé en Diseño Multimedia y continué aprendiendo UX/UI, diseño web y desarrollo. Trabajé con ECO360, FOLLOW y CIMA AI.',
    doingTitle: 'QUÉ HAGO',
    doingText: 'Campañas, contenido digital, etiquetas, brochures, piezas impresas y sitios web. Combino diseño con implementación.',
    nextTitle: 'QUÉ BUSCO',
    nextText: 'Un equipo donde seguir aprendiendo, trabajar con criterio visual y aportar soluciones reales.',
    talk: 'HABLEMOS ↗',
    availability: 'ABIERTO A NUEVAS OPORTUNIDADES',
    contactTitle: '¿HACEMOS<br><em>ALGO BUENO?</em>',
    email: 'EMAIL ↗',
    top: 'VOLVER ARRIBA ↑',
    zoom: 'ZOOM 100%',
    openWebsite: 'IR AL SITIO ↗',
    missingWeb: 'No se encontró la captura. Revisá la carpeta img/webs/.',
    openFile: 'ABRIR ORIGINAL ↗',
    webHeading: '01 / DISEÑO WEB',
    scrollLabel: 'DESLIZÁ LA CAPTURA PARA RECORRERLA ↓',
    fullScreen: 'VER CAPTURA COMPLETA ↗',
    visitSite: 'VISITAR SITIO ↗',
    graphicsHeading: '02 / COMUNICACIÓN VISUAL',
    graphicsDescription: 'PIEZAS VISIBLES / CLIC PARA VER EL CARRUSEL',
    viewSeries: 'VER CARRUSEL ↗',
    motionIndex: '02 / AUDIOVISUAL',
    motionTitle: 'DISEÑO EN<br><em>MOVIMIENTO.</em>',
    motionDescription: 'Edición, ritmo y exploraciones audiovisuales realizadas para ECO360 y CIMA AI.',
    motionCount: '03 PIEZAS SELECCIONADAS',
    motionInstruction: 'PASÁ EL MOUSE PARA PREVISUALIZAR · CLIC PARA VER COMPLETO',
    motionPlay: 'VER VIDEO COMPLETO ↗',
    videoHeading: '03 / VIDEO Y EXPLORACIÓN',
    videoDescription: 'LOOP SILENCIOSO / PASÁ EL MOUSE PARA PAUSAR',
    openVideo: 'VER VIDEO ↗',
    unavailable: 'No se encontró la imagen.',
    noWorks: 'No se pudieron cargar estas publicaciones: revisá las rutas de la carpeta img/.',
    galleryType: 'DISEÑO GRÁFICO',
    videoType: 'VIDEO',
    lofiOn: 'LO-FI ON',
    moreGraphics: 'VER MÁS PIEZAS  +',
    lessGraphics: 'VER MENOS  −',
    labIndex: '05 / PROYECTOS PERSONALES',
    labTitle: 'LABORATORIO<br><em>VISUAL.</em>',
    labDesc: 'Pósters, branding y exploraciones visuales realizadas por iniciativa propia.',
    lofiOff: 'LO-FI OFF'
  },
  en: {
    skip: 'Skip to projects',
    position: 'GRAPHIC & DIGITAL DESIGNER',
    navProjects: 'PROJECTS',
    navVideo: 'VIDEO',
    navAbout: 'ABOUT',
    navContact: 'CONTACT',
    place: 'MENDOZA / ARGENTINA — PORTFOLIO 2026',
    heroOne: 'IDEAS THAT',
    heroTwo: 'STAND OUT.',
    heroThree: 'Design that works.',
    heroDesc: 'Graphic design, printed work and websites. A selection of real projects, from concept to implementation.',
    viewProjects: 'VIEW PROJECTS',
    aboutMe: 'ABOUT ME ↓',
    featureHeading: 'WORK IN FOCUS',
    projectTitle: 'LET THE WORK<br><em>SPEAK.</em>',
    projectSubtitle: 'Each brand brings together its website, posts and visual materials. The work is shown directly, not hidden behind a click.',
    aboutTitle: 'THE PERSON<br><em>BEHIND IT.</em>',
    aboutStatement: 'I’m Julián, a graphic and digital designer. I like turning a first sketch into something that works, whether it’s a label, a campaign or a website.',
    storyTitle: 'MY BACKGROUND',
    storyText: 'I studied Multimedia Design and continued learning UX/UI, web design and development. I worked with ECO360, FOLLOW and CIMA AI.',
    doingTitle: 'WHAT I DO',
    doingText: 'Campaigns, digital content, labels, brochures, printed pieces and websites. I combine design with implementation.',
    nextTitle: 'WHAT I’M LOOKING FOR',
    nextText: 'A team where I can keep learning, apply visual judgment and contribute practical solutions.',
    talk: 'LET’S TALK ↗',
    availability: 'OPEN TO NEW OPPORTUNITIES',
    contactTitle: 'LET’S MAKE<br><em>SOMETHING GOOD.</em>',
    email: 'EMAIL ↗',
    top: 'BACK TO TOP ↑',
    zoom: 'ZOOM 100%',
    openWebsite: 'VISIT WEBSITE ↗',
    missingWeb: 'Screenshot not found. Check the img/webs/ folder.',
    openFile: 'OPEN ORIGINAL ↗',
    webHeading: '01 / WEB DESIGN',
    scrollLabel: 'SCROLL THE SCREENSHOT TO EXPLORE ↓',
    fullScreen: 'VIEW FULL SCREENSHOT ↗',
    visitSite: 'VISIT SITE ↗',
    graphicsHeading: '02 / VISUAL COMMUNICATION',
    graphicsDescription: 'VISIBLE WORK / CLICK TO SEE EACH SERIES',
    viewSeries: 'VIEW SERIES ↗',
    motionIndex: '02 / VIDEO',
    motionTitle: 'DESIGN IN<br><em>MOTION.</em>',
    motionDescription: 'Editing, rhythm and audiovisual experiments created for ECO360 and CIMA AI.',
    motionCount: '03 SELECTED PIECES',
    motionInstruction: 'HOVER TO PREVIEW · CLICK TO WATCH IN FULL',
    motionPlay: 'WATCH FULL VIDEO ↗',
    videoHeading: '03 / VIDEO & EXPERIMENTS',
    videoDescription: 'SILENT LOOP / HOVER TO PAUSE',
    openVideo: 'OPEN VIDEO ↗',
    unavailable: 'Image unavailable.',
    noWorks: 'Unable to load these images. Check the img/ folder paths.',
    galleryType: 'GRAPHIC DESIGN',
    videoType: 'VIDEO',
    lofiOn: 'LO-FI ON',
    moreGraphics: 'MORE GRAPHICS  +',
    lessGraphics: 'SHOW LESS  −',
    labIndex: '05 / PERSONAL WORK',
    labTitle: 'VISUAL<br><em>LAB.</em>',
    labDesc: 'Posters, branding and visual explorations made independently.',
    lofiOff: 'LO-FI OFF'
  }
};

const t = key => COPY[locale][key] || key;

/* IDIOMA, TEMA Y NAVEGACIÓN */

function translate() {
  document.documentElement.lang = locale;
  document.body.dataset.theme = theme;

  $$('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  $$('[data-html]').forEach(el => {
    el.innerHTML = t(el.dataset.html);
  });

  $('#lang-btn').textContent = locale === 'es' ? 'ES / EN' : 'EN / ES';

  $('#lang-btn').setAttribute(
    'aria-label',
    locale === 'es' ? 'Switch to English' : 'Cambiar a español'
  );

  $('#theme-symbol').textContent = theme === 'dark' ? '☀' : '☾';

  $('#theme-btn').setAttribute(
    'aria-label',
    theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'
  );

  $('meta[name="theme-color"]').content =
    theme === 'dark' ? '#151b19' : '#f4f1ea';

  $('#sound-label').textContent =
    t(musicActive ? 'lofiOn' : 'lofiOff');
}

$('#lang-btn').addEventListener('click', () => {
  locale = locale === 'es' ? 'en' : 'es';
  setPref('jb-language', locale);
  translate();
  renderProjects();
  refreshSpot();
  refreshWorkModal();
});

$('#theme-btn').addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  setPref('jb-theme', theme);
  translate();
});

const nav = $('#nav');
const menu = $('#menu-btn');

function closeMenu() {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

$$('#nav a').forEach(el =>
  el.addEventListener('click', closeMenu)
);

matchMedia('(min-width:701px)')
  .addEventListener('change', closeMenu);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});

/* LOCALIZACIÓN DE CAPTURAS WEB */

async function exists(path) {
  try {
    const response = await fetch(path, { method: 'HEAD' });
    return response.ok &&
      (response.headers.get('content-type') || '')
        .startsWith('image/');
  } catch {
    return false;
  }
}


async function locateWebShots() {
  const repo =
    'https://api.github.com/repos/julianbastias99/julianbastias2026/contents/img/webs?ref=main';

  const captureNumbers = {
    eco360: '087',
    follow: '085',
    cima: '086'
  };

  try {
    const response = await fetch(repo, {
      headers: {
        Accept: 'application/vnd.github+json'
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(
        `No se pudo consultar GitHub: ${response.status}`
      );
    }

    const files = await response.json();

    if (!Array.isArray(files)) {
      throw new Error('La respuesta no contiene archivos');
    }

    for (const project of PROJECTS) {
      const number = captureNumbers[project.key];

      const match = files.find(file =>
        file.type === 'file' &&
        file.name.toLowerCase().includes('fireshot') &&
        new RegExp(
          `Capture\\s+${number}(?!\\d)`,
          'i'
        ).test(file.name) &&
        /\.(png|jpe?g|webp)$/i.test(file.name)
      );

      if (match) {
        project.shot =
          './' +
          match.path
            .split('/')
            .map(encodeURIComponent)
            .join('/');

        console.log(
          `${project.name}: captura encontrada`,
          project.shot
        );
      } else {
        console.warn(
          `No se encontró la captura ${number} de ${project.name}`
        );
      }
    }
  } catch (error) {
    console.error(
      'Error al localizar las capturas web:',
      error
    );
  }
}


/* IMÁGENES REALES Y VALIDACIÓN */

function loadImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

async function firstExisting(files) {
  for (const src of files) {
    if (await loadImage(src)) return src;
  }
  return null;
}

/* PROYECTOS INTEGRALES */

let videoObserver = null;
let appearObserver = null;

function fadeInSetup() {
  appearObserver?.disconnect();

  if (
    reduced.matches ||
    !('IntersectionObserver' in window)
  ) return;

  document.documentElement.classList.add('motion-enabled');

  appearObserver = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.classList.remove('is-pending');
        appearObserver.unobserve(target);
      }
    });
  }, {
    threshold: .05,
    rootMargin: '0px 0px 15px 0px'
  });

  $$(
    '.project.reveal, .section-intro.reveal, .about-layout .reveal'
  ).forEach(item => {
    if (!item.dataset.animated) {
      item.dataset.animated = 'true';
      item.classList.add('is-pending');
    }
    appearObserver.observe(item);
  });
}

function renderProjects() {
  videoObserver?.disconnect();
  appearObserver?.disconnect();

  const root = $('#projects-root');
  root.replaceChildren();

  PROJECTS.forEach(project => {
    const article = node(
      'article',
      `project ${project.key} reveal`
    );
    article.id = `proyecto-${project.key}`;

    /* CABECERA DE MARCA */

    const top = node('div', 'project-topline');
    top.append(
      node(
        'span', '',
        `${project.number} / ${inLang(project.sector)}`
      ),
      node('span', '', 'JB — SELECTED WORK / 2026')
    );

    const titlebar = node('div', 'project-head');
    const lockup = node('div', 'brand-title');
    const logo = node(
      'div',
      `brand-logo ${project.key === 'follow' ? 'follow-logo' : ''}`
    );

    const logoImg = node('img');
    logoImg.src = project.logo;
    logoImg.alt = `Logo ${project.name}`;
    logoImg.onerror = () => logoImg.classList.add('failed');

    logo.append(
      logoImg,
      node('span', 'brand-fallback', project.name)
    );

    const title = node('h3');
    title.append(
      document.createTextNode(project.name),
      node('span', '', '.')
    );

    lockup.append(logo, title);
    titlebar.append(
      lockup,
      node('p', '', inLang(project.intro))
    );

    article.append(top, titlebar);

    /* WEB — CAPTURA REAL CON SCROLL */

    const webheading = node('div', 'project-label-row');

    webheading.append(
      node('strong', '', t('webHeading')),
      node('small', '', project.host)
    );

    const web = node('div', 'website-work');
    const visual = node('div', 'site-visual');
    const window = node('div', 'site-window');
    const chrome = node('div', 'window-nav');

    for (let i = 0; i < 3; i++) {
      chrome.append(node('i'));
    }

    chrome.append(node('span', '', project.host));

    const scroll = node('div', 'site-scroll');
    scroll.setAttribute('tabindex', '0');
    scroll.setAttribute(
      'aria-label',
      `Captura de ${project.name}, desplazamiento vertical`
    );

    const screenshot = node('img');
    screenshot.alt = `Sitio web real de ${project.name}`;
    screenshot.loading = 'lazy';
    screenshot.src = project.shot;

    const missing = node('div', 'site-missing');
    missing.append(
      node('small', '', project.host),
      node('strong', '', t('missingWeb')),
      node('small', '', project.shot)
    );

    screenshot.addEventListener('load', () => {
      scroll.classList.add('has-image');
    });

    screenshot.addEventListener('error', () => {
      scroll.classList.remove('has-image');
    });

    if (
      screenshot.complete &&
      screenshot.naturalWidth
    ) {
      scroll.classList.add('has-image');
    }

    scroll.append(missing, screenshot);
    window.append(chrome, scroll);

    visual.append(
      window,
      node('span', 'scroll-hint', t('scrollLabel'))
    );

    const description = node('div', 'site-description');

    description.append(
      node(
        'span',
        'project-kicker',
        `${project.number} / ${t('webHeading')}`
      ),
      node('h4', '', inLang(project.webTitle)),
      node('p', '', inLang(project.webDescription))
    );

    const tags = node('div', 'tags');

    project.tools.forEach(tool => {
      tags.append(node('span', '', tool));
    });

    description.append(tags);

    const actions = node('div', 'site-actions');
    const enlarge = node(
      'button',
      '',
      t('fullScreen')
    );

    enlarge.type = 'button';
    enlarge.addEventListener(
      'click',
      () => openWebViewer(project)
    );

    const outside = node('a', '', t('visitSite'));
    outside.href = project.site;
    outside.target = '_blank';
    outside.rel = 'noopener noreferrer';

    actions.append(enlarge, outside);
    description.append(actions);

    web.append(visual, description);
    article.append(webheading, web);

    /* PUBLICACIONES VISIBLES SIN ABRIR MODAL */

    const gallery = node('div', 'graphic-work');
    const galleryHead = node('div', 'graphic-head');

    galleryHead.append(
      node('strong', '', t('graphicsHeading')),
      node('span', '', t('graphicsDescription'))
    );

    const grid = node('div', 'graphic-grid');

    project.works.forEach((piece, index) => {
      const tile = node('article', 'graphic-item');
      if (index >= 3) tile.classList.add('is-extra');
      const btn = node('button', 'graphic-figure');

      btn.type = 'button';
      btn.setAttribute(
        'aria-label',
        `${inLang(piece.title)} — ${project.name}`
      );

      const box = node('span', 'graphic-image-box');
      const img = node('img');

      img.loading = 'lazy';
      img.alt = `${project.name}: ${inLang(piece.title)}`;

      const badge = node(
        'span',
        'graphic-count',
        `${String(index + 1).padStart(2, '0')} / ` +
        `${String(project.works.length).padStart(2, '0')}`
      );

      box.append(
        img,
        badge,
        node('span', 'graphic-hover', t('viewSeries'))
      );

      const caption = node('span', 'graphic-caption');

      caption.append(
        node('strong', '', inLang(piece.title)),
        node(
          'small', '',
          piece.images.length > 1
            ? `${piece.images.length} SLIDES`
            : '01 / 01'
        )
      );

      btn.append(box, caption);

      btn.addEventListener('click', () =>
        openWorkViewer(project, piece, btn)
      );

      tile.append(btn);
      grid.append(tile);

      firstExisting(piece.images).then(src => {
        if (src) {
          img.src = src;
          img.alt =
            `${project.name}: ${inLang(piece.title)}`;
        } else {
          tile.classList.add('is-unavailable');
        }

        tile.dataset.checked = 'true';

        const cards = [...grid.children].filter(item =>
          item.classList.contains('graphic-item')
        );

        if (
          cards.every(item =>
            item.dataset.checked === 'true'
          ) &&
          cards.every(item =>
            item.classList.contains('is-unavailable')
          )
        ) {
          grid.append(
            node('p', 'graphic-empty', t('noWorks'))
          );
        }
      });
    });

    gallery.append(galleryHead, grid);
    // Tres publicaciones visibles por marca. Las demás siguen accesibles.
    if (project.works.length > 3) {
      const toggle = node('button', 'show-more-work', t('moreGraphics'));
      toggle.type = 'button';
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', `${t('moreGraphics')} — ${project.name}`);
      toggle.addEventListener('click', () => {
        const expanded = gallery.classList.toggle('is-expanded');
        toggle.textContent = t(expanded ? 'lessGraphics' : 'moreGraphics');
        toggle.setAttribute('aria-expanded', String(expanded));
      });
      gallery.append(toggle);
    }
    article.append(gallery);

    /* Videos agrupados en #video para darles protagonismo. */

    root.append(article);
  });

  renderMotionSection();
  fadeInSetup();
}

/* VIDEO: REPRODUCIR SOLAMENTE SI ESTÁ VISIBLE */

function observeVideos() {
  if (!('IntersectionObserver' in window)) return;

  videoObserver = new IntersectionObserver(
    entries => entries.forEach(
      ({ target, isIntersecting }) => {
        target.dataset.visible = String(isIntersecting);

        if (
          isIntersecting &&
          target.dataset.hover !== 'true' &&
          !reduced.matches &&
          !document.hidden &&
          !$('#work-dialog').open
        ) {
          target.play().catch(() => {});
        } else {
          target.pause();
        }
      }
    ),
    { threshold: .15 }
  );

  $$('.video-frame video').forEach(vid =>
    videoObserver.observe(vid)
  );
}

document.addEventListener('visibilitychange', () => {
  $$('.video-frame video').forEach(vid => {
    if (document.hidden) {
      vid.pause();
    } else if (
      vid.dataset.visible === 'true' &&
      vid.dataset.hover !== 'true' &&
      !reduced.matches &&
      !$('#work-dialog').open
    ) {
      vid.play().catch(() => {});
    }
  });
});

/* ============================================================
   VIDEO / GALERÍA AUDIOVISUAL
   Todos los recursos salen de PROJECTS, sin archivos inventados.
   ============================================================ */
function renderMotionSection() {
  const grid = $('#motion-grid');
  const section = $('#video');
  if (!grid || !section) return;

  grid.replaceChildren();
  const entries = PROJECTS.flatMap(project =>
    project.videos.map(piece => ({ project, piece }))
  );

  section.hidden = entries.length === 0;
  if (!entries.length) return;

  entries.forEach(({ project, piece }, index) => {
    const card = node('article', 'motion-card');
    const number = node('span', 'motion-number',
      String(index + 1).padStart(2, '0') + ' / ' +
      String(entries.length).padStart(2, '0')
    );

    const preview = node('button', 'motion-preview');
    preview.type = 'button';
    preview.setAttribute('aria-label',
      `${t('motionPlay')}: ${inLang(piece.title)}, ${project.name}`
    );

    const video = node('video');
    video.src = piece.file;
    video.preload = 'metadata';
    video.playsInline = true;
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('aria-hidden', 'true');
    video.tabIndex = -1;
    // El primer fotograma de cada archivo actúa como portada real.
    video.addEventListener('loadeddata', () => {
      card.classList.add('motion-ready');
    });
    video.addEventListener('error', () => {
      card.classList.add('motion-failed');
    });

    const overlay = node('span', 'motion-play-indicator', '▶');
    overlay.setAttribute('aria-hidden', 'true');
    preview.append(video, overlay, number);

    function startPreview() {
      if (!reduced.matches && !document.hidden && !$('#work-dialog').open) {
        video.play().catch(() => {});
      }
    }
    function stopPreview() { video.pause(); }

    preview.addEventListener('pointerenter', e => {
      if (e.pointerType === 'mouse') startPreview();
    });
    preview.addEventListener('pointerleave', stopPreview);
    preview.addEventListener('focus', startPreview);
    preview.addEventListener('blur', stopPreview);
    preview.addEventListener('click', () => {
      stopPreview();
      openWorkViewer(project, {
        title: piece.title,
        images: [piece.file],
        video: true
      }, preview);
    });

    const caption = node('div', 'motion-caption');
    const metadata = node('div', 'motion-metadata');
    metadata.append(
      node('span', 'motion-brand', project.name),
      node('span', 'motion-format', 'VIDEO / 2026')
    );
    const title = node('h3', '', inLang(piece.title));
    const footer = node('span', 'motion-action', t('motionPlay'));
    caption.append(metadata, title, footer);
    card.append(preview, caption);
    grid.append(card);
  });

  if (!window.__jbMotionVisibilityListener) {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        $$('.motion-preview video').forEach(v => v.pause());
      }
    });
    window.__jbMotionVisibilityListener = true;
  }
}

/* HERO — ROTACIÓN DE PUBLICACIONES */

const SPOTS = [
  { p: PROJECTS[0], w: PROJECTS[0].works[0] },
  { p: PROJECTS[1], w: PROJECTS[1].works[0] },
  { p: PROJECTS[2], w: PROJECTS[2].works[1] },
  { p: PROJECTS[0], w: PROJECTS[0].works[1] },
  { p: PROJECTS[1], w: PROJECTS[1].works[1] }
];

let spotIndex = 0;
let spotBusy = false;
let spotHover = false;

function refreshSpot() {
  const { p, w } = SPOTS[spotIndex];

  $('#spot-counter').textContent =
    `${String(spotIndex + 1).padStart(2, '0')} / ` +
    `${String(SPOTS.length).padStart(2, '0')}`;

  $('#spot-brand').textContent = p.name;
  $('#spot-title').textContent = inLang(w.title);

  $('#spot-progress').style.width =
    `${100 * (spotIndex + 1) / SPOTS.length}%`;
}

async function moveSpot(direction) {
  if (spotBusy) return;

  spotBusy = true;

  for (let tryNo = 0; tryNo < SPOTS.length; tryNo++) {
    const idx =
      (spotIndex +
        direction * (tryNo + 1) +
        SPOTS.length * 3) % SPOTS.length;

    const entry = SPOTS[idx];
    const src = await firstExisting(entry.w.images);

    if (!src) continue;

    const photo = $('#spot-image');
    photo.classList.add('fading');

    photo.src = src;
    photo.alt = `${entry.p.name}: ${inLang(entry.w.title)}`;

    spotIndex = idx;
    refreshSpot();

    requestAnimationFrame(() =>
      photo.classList.remove('fading')
    );

    break;
  }

  spotBusy = false;
}

$('#spot-prev').addEventListener(
  'click',
  () => moveSpot(-1)
);

$('#spot-next').addEventListener(
  'click',
  () => moveSpot(1)
);

$('#spot-open').addEventListener('click', () => {
  const { p, w } = SPOTS[spotIndex];
  openWorkViewer(p, w, $('#spot-open'));
});

$('.hero-media').addEventListener(
  'pointerenter',
  () => spotHover = true
);

$('.hero-media').addEventListener(
  'pointerleave',
  () => spotHover = false
);

setInterval(() => {
  if (
    !document.hidden &&
    !spotHover &&
    !reduced.matches &&
    !$('#web-dialog').open &&
    !$('#work-dialog').open
  ) {
    moveSpot(1);
  }
}, 5200);

/* VISOR DE CAPTURAS WEB */

const webDialog = $('#web-dialog');
let restoreFocus = null;

function openWebViewer(p) {
  restoreFocus = document.activeElement;

  $('#web-dialog-title').textContent = `${p.name} / WEB`;
  $('#web-site').href = p.site;

  const img = $('#web-full');
  const fail = $('#web-error');

  img.hidden = false;
  fail.hidden = true;

  img.onload = () => {
    img.hidden = false;
    fail.hidden = true;
  };

  img.onerror = () => {
    img.hidden = true;
    fail.hidden = false;
  };

  img.src = p.shot;

  $('#web-full-scroll').classList.remove('zoomed');
  $('#web-zoom').setAttribute('aria-pressed', 'false');

  webDialog.showModal();
  document.body.classList.add('modal-open');
  $('#web-full-scroll').scrollTop = 0;
}

$('#web-close').addEventListener(
  'click',
  () => webDialog.close()
);

$('#web-zoom').addEventListener('click', () => {
  const zoom = $('#web-full-scroll')
    .classList.toggle('zoomed');

  $('#web-zoom').setAttribute(
    'aria-pressed',
    String(zoom)
  );

  $('#web-zoom').textContent =
    zoom ? 'ZOOM 150%' : 'ZOOM 100%';
});

webDialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  restoreFocus?.focus({ preventScroll: true });
});

/* VISOR DE IMÁGENES Y CARRUSELES */

const workDialog = $('#work-dialog');
let opened = null;
let slideIndex = 0;
let workReturn = null;
let gesture = null;

function openWorkViewer(p, w, trigger) {
  workReturn = trigger;
  opened = { p, w };
  slideIndex = 0;

  $$('.video-frame video').forEach(v => v.pause());
  $$('.motion-preview video').forEach(v => v.pause());

  refreshWorkModal();
  renderSlide();

  workDialog.showModal();
  document.body.classList.add('modal-open');
}

function refreshWorkModal() {
  if (!opened) return;

  $('#work-brand').textContent = opened.p.name;

  $('#work-type').textContent = t(
    opened.w.video ? 'videoType' : 'galleryType'
  );

  $('#work-title').textContent = inLang(opened.w.title);
  $('#work-description').textContent =
    inLang(opened.p.intro);
}

function renderSlide() {
  if (!opened) return;

  const frame = $('#work-stage');
  frame.querySelector('video')?.pause();
  frame.replaceChildren();

  const src = opened.w.images[slideIndex];
  const media = node(
    opened.w.video ? 'video' : 'img'
  );

  media.src = src;

  if (opened.w.video) {
    media.controls = true;
    media.playsInline = true;
    media.preload = 'metadata';
  } else {
    media.alt =
      `${opened.p.name}: ${inLang(opened.w.title)} — ${slideIndex + 1}`;
  }

  media.addEventListener(
    'error',
    () => frame.replaceChildren(
      node('p', '', t('unavailable'))
    ),
    { once: true }
  );

  frame.append(media);

  $('#work-count').textContent =
    `${slideIndex + 1} / ${opened.w.images.length}`;

  $('#work-prev').hidden =
    $('#work-next').hidden =
    opened.w.images.length === 1;

  $('#work-prev').disabled = slideIndex === 0;
  $('#work-next').disabled =
    slideIndex === opened.w.images.length - 1;

  $('#work-source').href = src;
}

$('#work-prev').addEventListener('click', () => {
  if (opened && slideIndex > 0) {
    slideIndex--;
    renderSlide();
  }
});

$('#work-next').addEventListener('click', () => {
  if (
    opened &&
    slideIndex < opened.w.images.length - 1
  ) {
    slideIndex++;
    renderSlide();
  }
});

$('#work-close').addEventListener(
  'click',
  () => workDialog.close()
);

workDialog.addEventListener('close', () => {
  $('#work-stage').querySelector('video')?.pause();
  $('#work-stage').replaceChildren();

  opened = null;
  document.body.classList.remove('modal-open');
  workReturn?.focus({ preventScroll: true });

  $$('.video-frame video').forEach(v => {
    if (
      v.dataset.visible === 'true' &&
      !document.hidden &&
      !reduced.matches &&
      v.dataset.hover !== 'true'
    ) {
      v.play().catch(() => {});
    }
  });
});

workDialog.addEventListener('keydown', event => {
  if (event.target.tagName === 'VIDEO') return;

  if (event.key === 'ArrowLeft') {
    $('#work-prev').click();
  }

  if (event.key === 'ArrowRight') {
    $('#work-next').click();
  }
});

/* DESLIZAR CARRUSELES EN CELULAR */

$('#work-stage').addEventListener(
  'touchstart',
  e => {
    if (e.touches.length === 1) {
      gesture = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }
  },
  { passive: true }
);

$('#work-stage').addEventListener(
  'touchend',
  e => {
    if (!gesture) return;

    const dx =
      e.changedTouches[0].clientX - gesture.x;
    const dy =
      e.changedTouches[0].clientY - gesture.y;

    if (
      Math.abs(dx) > 45 &&
      Math.abs(dx) > Math.abs(dy) * 1.3
    ) {
      const btn =
        dx < 0 ? $('#work-next') : $('#work-prev');

      if (!btn.disabled && !btn.hidden) {
        btn.click();
      }
    }

    gesture = null;
  },
  { passive: true }
);

/* LO-FI ORIGINAL GENERADO CON WEB AUDIO */

let musicActive = false;
let audioCtx = null;
let volume = null;
let drumBuffer = null;
let beatCount = 0;
let nextBeat = 0;
let clock = null;

const pitch = n =>
  440 * Math.pow(2, (n - 69) / 12);

function playNote(
  n,
  when,
  dur,
  amp = .03,
  wave = 'triangle'
) {
  const o = audioCtx.createOscillator();
  const filter = audioCtx.createBiquadFilter();
  const env = audioCtx.createGain();

  o.type = wave;
  o.frequency.setValueAtTime(pitch(n), when);

  filter.type = 'lowpass';
  filter.frequency.value = 1250;

  env.gain.setValueAtTime(.0001, when);
  env.gain.exponentialRampToValueAtTime(
    amp,
    when + .035
  );
  env.gain.exponentialRampToValueAtTime(
    .0001,
    when + dur
  );

  o.connect(filter).connect(env).connect(volume);
  o.start(when);
  o.stop(when + dur + .03);
}

function playHat(when) {
  const src = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const env = audioCtx.createGain();

  src.buffer = drumBuffer;

  filter.type = 'highpass';
  filter.frequency.value = 4300;

  env.gain.setValueAtTime(.012, when);
  env.gain.exponentialRampToValueAtTime(
    .0001,
    when + .06
  );

  src.connect(filter).connect(env).connect(volume);
  src.start(when);
  src.stop(when + .07);
}

function scheduleAudio() {
  if (!musicActive) return;

  const chords = [
    [48,52,55,59],
    [45,48,52,55],
    [50,53,57,60],
    [43,47,50,53]
  ];

  const stepDuration = 60 / 78 / 2;

  while (
    nextBeat < audioCtx.currentTime + .17
  ) {
    const chord =
      chords[Math.floor(beatCount / 8) % 4];

    if (beatCount % 8 === 0) {
      chord.forEach((n, i) =>
        playNote(
          n,
          nextBeat,
          stepDuration * 7,
          .022 - i * .003
        )
      );

      playNote(
        chord[0] - 12,
        nextBeat,
        stepDuration * 3,
        .052,
        'sine'
      );
    }

    if (beatCount % 8 === 4) {
      playNote(
        chord[0] - 12,
        nextBeat,
        stepDuration * 2,
        .035,
        'sine'
      );
    }

    if (beatCount % 4 === 2) {
      playNote(74, nextBeat, .13, .009, 'sine');
    }

    if (beatCount % 2 === 1) {
      playHat(nextBeat);
    }

    if (beatCount % 8 === 5) {
      playNote(
        [76,74,72,79][Math.floor(beatCount / 8) % 4],
        nextBeat,
        .3,
        .014,
        'sine'
      );
    }

    beatCount++;
    nextBeat += stepDuration;
  }
}

async function toggleAudio() {
  if (musicActive) {
    musicActive = false;
    clearInterval(clock);
    clock = null;

    volume.gain.setTargetAtTime(
      0,
      audioCtx.currentTime,
      .04
    );
  } else {
    try {
      const Audio =
        window.AudioContext ||
        window.webkitAudioContext;

      if (!Audio) return;

      if (!audioCtx) {
        audioCtx = new Audio();
        volume = audioCtx.createGain();
        volume.gain.value = 0;
        volume.connect(audioCtx.destination);

        drumBuffer = audioCtx.createBuffer(
          1,
          audioCtx.sampleRate,
          audioCtx.sampleRate
        );

        const data = drumBuffer.getChannelData(0);

        for (let i = 0; i < data.length; i++) {
          data[i] = Math.random() * 2 - 1;
        }
      }

      await audioCtx.resume();

      musicActive = true;
      beatCount = 0;
      nextBeat = audioCtx.currentTime + .06;

      volume.gain.setTargetAtTime(
        .35,
        audioCtx.currentTime,
        .055
      );

      scheduleAudio();
      clock = setInterval(scheduleAudio, 75);
    } catch (err) {
      console.warn('Audio no disponible', err);
      return;
    }
  }

  $('#sound-btn').classList.toggle(
    'playing',
    musicActive
  );

  $('#sound-btn').setAttribute(
    'aria-pressed',
    String(musicActive)
  );

  $('#sound-label').textContent =
    t(musicActive ? 'lofiOn' : 'lofiOff');
}

$('#sound-btn').addEventListener(
  'click',
  toggleAudio
);

/* PROGRESO DE LECTURA Y ANIMACIONES */

let scheduled = false;

function progress() {
  const length =
    document.documentElement.scrollHeight -
    innerHeight;

  $('#scroll-line').style.transform =
    `scaleX(${length > 0
      ? Math.max(0, Math.min(1, scrollY / length))
      : 0})`;

  scheduled = false;
}

addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(progress);
  }
}, { passive: true });

addEventListener('resize', progress);

reduced.addEventListener('change', () => {
  if (reduced.matches) {
    document.documentElement.classList.remove(
      'motion-enabled'
    );

    $$('.is-pending').forEach(item =>
      item.classList.remove('is-pending')
    );

    $$('.video-frame video').forEach(v =>
      v.pause()
    );
  } else {
    fadeInSetup();
  }
});

/* INICIO */

translate();
refreshSpot();
progress();

locateWebShots().finally(() => {
  renderProjects();
  fadeInSetup();
});


/* Interacciones tipográficas y control de fotos del HTML original */
(() => {
      'use strict';

      const prefersLessMotion = matchMedia(
        '(prefers-reduced-motion: reduce)'
      );

      const symbols =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&+?✳/';

      const pending = new WeakMap();

      /* FOTO PRINCIPAL */

      async function fixPortrait() {

        const portrait = document.querySelector(
          '.photo-main img'
        );

        if (!portrait) return;

        if (
          portrait.complete &&
          portrait.naturalWidth > 0
        ) return;

        const candidates = [
          'img/julian.jpeg.jpeg',
          'img/julian.jpeg',
          'img/julian.jpg',
          'img/julian.png',
          'img/julian.webp'
        ];

        for (const url of candidates) {

          const valid = await new Promise(resolve => {

            const image = new Image();

            image.onload = () => resolve(true);
            image.onerror = () => resolve(false);
            image.src = url;

          });

          if (valid) {
            portrait.src = url;
            return;
          }
        }

        portrait.hidden = true;

        console.warn(
          'No encontré la foto principal en img/.'
        );
      }

      /* ANIMACIÓN DE CARACTERES */

      function scramble(element, options = {}) {

        if (
          !element ||
          prefersLessMotion.matches
        ) return;

        const {
          duration = 750,
          delay = 0
        } = options;

        const previous = pending.get(element);

        if (previous) {
          cancelAnimationFrame(previous);
        }

        const text =
          element.dataset.scrambleTarget ||
          element.textContent;

        element.dataset.scrambleTarget = text;

        const characters = [...text];

        const minHeight =
          element.getBoundingClientRect().height;

        element.style.minHeight =
          `${Math.ceil(minHeight)}px`;

        element.classList.add('scramble-live');

        const started = performance.now() + delay;
        const id = Symbol();

        element._scrambleId = id;

        function draw(now) {

          if (element._scrambleId !== id) return;

          const progress = Math.min(
            1,
            Math.max(0, (now - started) / duration)
          );

          const settled = Math.floor(
            characters.length * progress
          );

          element.textContent = characters.map(
            (ch, index) => {

              if (
                /\s/.test(ch) ||
                index < settled ||
                progress === 1
              ) {
                return ch;
              }

              return symbols[
                Math.floor(Math.random() * symbols.length)
              ];
            }
          ).join('');

          if (progress < 1) {

            pending.set(
              element,
              requestAnimationFrame(draw)
            );

          } else {

            element.textContent = text;
            element.classList.remove('scramble-live');
            element.style.minHeight = '';

            pending.delete(element);
          }
        }

        pending.set(
          element,
          requestAnimationFrame(draw)
        );
      }

      /* ANIMACIÓN DEL TÍTULO */

      function animateHeading(refreshText = false) {

        const title = document.querySelector(
          '.hero-heading'
        );

        if (
          !title ||
          prefersLessMotion.matches
        ) return;

        const lines = [
          title.querySelector('[data-i18n="heroOne"]'),
          title.querySelector('[data-i18n="heroTwo"]'),
          title.querySelector('[data-i18n="heroThree"]')
        ];

        if (refreshText) {

          lines.forEach(line => {

            if (line) {
              line.dataset.scrambleTarget =
                line.textContent;
            }
          });
        }

        title.setAttribute(
          'aria-label',
          lines.map(
            line =>
              line?.dataset.scrambleTarget ||
              line?.textContent ||
              ''
          ).join(' ')
        );

        lines.forEach((line, i) => {

          scramble(line, {
            duration: i === 2 ? 1000 : 750,
            delay: i * 210
          });
        });
      }

      /* INTERACCIONES */

      function init() {

        fixPortrait();

        const fonts =
          document.fonts?.ready ||
          Promise.resolve();

        Promise.race([
          fonts,
          new Promise(
            resolve => setTimeout(resolve, 450)
          )
        ]).then(() => animateHeading(true));

        let lastHover = 0;

        document.querySelector('.hero-heading')
          ?.addEventListener('pointerenter', e => {

            if (e.pointerType !== 'mouse') return;

            if (Date.now() - lastHover < 2800) {
              return;
            }

            lastHover = Date.now();

            animateHeading();
          });

        document.querySelectorAll('.nav a')
          .forEach(link => {

            link.addEventListener(
              'pointerenter',
              e => {

                if (e.pointerType === 'mouse') {
                  scramble(link, {
                    duration: 340
                  });
                }
              }
            );
          });

        document.getElementById('lang-btn')
          ?.addEventListener('click', () => {

            document.querySelectorAll('.nav a')
              .forEach(link => {

                link.dataset.scrambleTarget =
                  link.textContent;
              });

            requestAnimationFrame(
              () => animateHeading(true)
            );
          });
      }

      document.addEventListener(
        'DOMContentLoaded',
        init
      );

    })();


/* Laboratorio visual: no publica piezas ficticias ni espacios vacíos. */
const VISUAL_LAB_WORKS = [
  // Ejemplo para cuando exista un archivo real en tu carpeta:
  // { file: 'img/laboratorio/poster-01.jpg', title: 'Póster 01', kind: 'PÓSTER' },
];

function renderVisualLab() {
  const lab = document.getElementById('laboratorio');
  const grid = document.getElementById('lab-grid');
  if (!lab || !grid) return;
  grid.replaceChildren();
  if (!VISUAL_LAB_WORKS.length) { lab.hidden = true; return; }
  VISUAL_LAB_WORKS.forEach((item, i) => {
    const card = node('figure', 'lab-card');
    const anchor = node('a');
    anchor.href = item.file;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    const img = node('img');
    img.src = item.file;
    img.loading = 'lazy';
    img.alt = item.title;
    img.onerror = () => {
      card.remove();
      if (!grid.children.length) lab.hidden = true;
    };
    anchor.append(img);
    const caption = node('figcaption');
    caption.append(node('strong', '', item.title),
      node('small', '', item.kind || `EXP / ${i + 1}`));
    card.append(anchor, caption);
    grid.append(card);
  });
  lab.hidden = false;
}
renderVisualLab();