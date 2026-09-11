"use strict";

/* ==========================================================
   ARCHIVOS Y PROYECTOS
   Se conservan nombres, carpetas y dimensiones originales.
   ========================================================== */

const imageFile = (src, width = 1080, height = 1350) => ({
  src,
  width,
  height,
  type: "image",
});

const imageSeries = (folder, numbers) =>
  numbers.map((number) =>
    imageFile(`img/${folder}/Instagram post - ${number}.png`)
  );

const publication = (title, category, description, role, media) => ({
  title,
  category,
  description,
  role,
  media,
});

const PROJECTS = [
  {
    id: "eco360",
    name: "ECO360",
    sector: "Higiene profesional",
    logo: "img/eco360/logos/ECO360 logo-png 1.png",
    description:
      "Comunicación visual para una marca de soluciones de higiene profesional.",
    bio: "Campañas, contenido y comunicación para redes.",
    posts: [
      publication(
        "Higiene y experiencia hotelera",
        "Hotelga",
        "Una serie de piezas sobre higiene, espacios y experiencia hotelera.",
        "Diseño gráfico y contenido.",
        imageSeries("eco360/post1", [185, 186, 187, 188, 189, 190])
      ),
      publication(
        "Procesos de higiene",
        "Contenido",
        "Contenido visual para comunicar procesos y rutinas de higiene.",
        "Diseño gráfico y contenido.",
        imageSeries("eco360/post2", [90, 91, 92, 93, 94, 95])
      ),
      publication(
        "Presencia en Hotelga",
        "Evento",
        "Piezas de comunicación para la presencia de ECO360 en Hotelga.",
        "Diseño gráfico y contenido.",
        imageSeries("eco360/post3", [204, 205])
      ),
      publication(
        "Soluciones y producto",
        "Contenido",
        "Una selección de piezas sobre productos y sus aplicaciones.",
        "Diseño gráfico y contenido.",
        imageSeries("eco360/post4", [96, 97, 98, 100, 140])
      ),
      publication(
        "Hotelga en video",
        "Pieza audiovisual",
        "Una pieza audiovisual para la comunicación de ECO360.",
        "Edición de video.",
        [
          {
            src: "img/eco360/video/WhatsApp Video 2026-08-18 at 09.25.12.mp4",
            width: 1440,
            height: 2560,
            type: "video",
          },
        ]
      ),
    ],
  },
  {
    id: "follow",
    name: "FOLLOW",
    sector: "Tecnología y logística",
    logo: "img/follow/logos/Group 3.svg",
    description:
      "Contenido claro para una plataforma que conecta operaciones y soluciones logísticas.",
    bio: "Campañas, carruseles e historias para redes.",
    posts: [
      publication(
        "Precio y respaldo",
        "Campaña",
        "Una campaña sobre las decisiones que forman parte de una operación logística.",
        "Diseño gráfico y contenido.",
        imageSeries("follow/post 1", [47, 48, 49])
      ),
      publication(
        "Una operación, demasiados canales",
        "Campaña",
        "Un carrusel sobre la organización de la información y la gestión logística.",
        "Diseño gráfico y contenido.",
        imageSeries("follow/post 2", [118, 119, 120, 122])
      ),
      publication(
        "Torre de control",
        "Campaña",
        "Contenido para presentar herramientas de seguimiento y gestión.",
        "Diseño gráfico y contenido.",
        imageSeries("follow/post 3", [127, 128])
      ),
      publication(
        "La logística nos conecta",
        "Día de la Bandera",
        "Una pieza de efeméride vinculada al universo de la marca.",
        "Diseño gráfico y contenido.",
        [imageFile("img/follow/efemerides/Instagram post - 43.png")]
      ),
      publication(
        "La bandera también va en ruta",
        "Día de la Bandera",
        "Una publicación en formato cuadrado.",
        "Diseño gráfico y contenido.",
        [
          imageFile(
            "img/follow/efemerides/Instagram post - 44.png",
            1080,
            1080
          ),
        ]
      ),
      publication(
        "Seguridad vial",
        "Historia",
        "Contenido vertical para historias de Instagram.",
        "Diseño gráfico y contenido.",
        [
          imageFile(
            "img/follow/historia/Instagram story - 7.png",
            1080,
            1920
          ),
        ]
      ),
    ],
  },
  {
    id: "cima",
    name: "CIMA AI",
    sector: "Inteligencia artificial",
    logo: "img/CIMA AI/logos/Frame 4.png",
    description:
      "Diseño de contenido para presentar soluciones de inteligencia artificial.",
    bio: "Comunicación visual y contenido para redes.",
    posts: [
      publication(
        "Aumentá tu equipo con IA",
        "Presentación",
        "Un carrusel de presentación de CIMA AI y sus soluciones.",
        "Diseño de contenido.",
        imageSeries("CIMA AI/post 1", [1, 2, 3, 4, 5, 6, 7])
      ),
    ],
  },
];

/* ==========================================================
   UTILIDADES
   ========================================================== */

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

function makeElement(tag, className = "", text = "") {
  const element = document.createElement(tag);

  if (className) element.className = className;
  if (text) element.textContent = text;

  return element;
}

function aspectLabel(file) {
  if (file.width === file.height) return "1:1";
  if (file.width * 5 === file.height * 4) return "4:5";
  if (file.width * 16 === file.height * 9) return "9:16";

  return `${file.width} × ${file.height}`;
}

function typeLabel(post) {
  if (post.media[0].type === "video") return "Video";
  if (post.media.length > 1) {
    return `Carrusel · ${post.media.length} placas`;
  }
  if (aspectLabel(post.media[0]) === "9:16") return "Historia";

  return "Publicación";
}

function createLogo(project, small = false) {
  const wrapper = makeElement(
    "div",
    `logo-wrap ${project.id}${small ? " small" : ""}`
  );

  const image = document.createElement("img");
  image.src = project.logo;
  image.alt = `Logo de ${project.name}`;
  image.loading = "lazy";

  wrapper.append(image);
  return wrapper;
}

function createMedia(file, alt, preview = false) {
  const wrapper = makeElement("span", "media");
  const media = document.createElement(
    file.type === "video" ? "video" : "img"
  );

  media.width = file.width;
  media.height = file.height;

  if (file.type === "image") {
    media.alt = alt;
    media.loading = preview ? "lazy" : "eager";
    media.decoding = "async";
    media.draggable = false;
  } else {
    media.controls = !preview;
    media.muted = preview;
    media.playsInline = true;
    media.preload = "metadata";

    if (preview) {
      media.tabIndex = -1;
      media.setAttribute("aria-hidden", "true");

      media.addEventListener(
        "loadedmetadata",
        () => {
          if (Number.isFinite(media.duration) && media.duration > 0) {
            media.currentTime = Math.min(0.1, media.duration / 2);
          }
        },
        { once: true }
      );
    } else {
      media.setAttribute("aria-label", alt);
    }
  }

  media.addEventListener(
    "error",
    () => {
      media.hidden = true;
      const error = makeElement(
        "span",
        "media-error",
        "No se pudo cargar esta pieza."
      );
      wrapper.append(error);
    },
    { once: true }
  );

  media.src = file.src;
  wrapper.append(media);

  return wrapper;
}

/* ==========================================================
   GALERÍAS
   ========================================================== */

const projectList = document.getElementById("project-list");

PROJECTS.forEach((project, projectIndex) => {
  const section = makeElement("section", `project ${project.id}`);
  section.id = project.id;
  section.setAttribute("aria-labelledby", `${project.id}-title`);

  const heading = makeElement("header", "project-heading reveal");
  const headingCopy = makeElement("div");

  headingCopy.append(
    makeElement(
      "span",
      "project-number",
      `${String(projectIndex + 1).padStart(2, "0")} / ${project.sector}`
    )
  );

  const title = makeElement("h2", "", project.name);
  title.id = `${project.id}-title`;
  headingCopy.append(title);

  heading.append(
    headingCopy,
    makeElement("p", "", project.description)
  );

  const profile = makeElement("div", "social-profile");

  const toolbar = makeElement("div", "profile-toolbar");
  toolbar.append(
    makeElement("span", "instagram-label", "Instagram"),
    makeElement("span", "", "Selección de portfolio")
  );

  const accountHeader = makeElement("div", "account-header");
  const accountCopy = makeElement("div", "account-copy");
  const totalPieces = project.posts.reduce(
    (total, post) => total + post.media.length,
    0
  );

  accountCopy.append(
    makeElement("h3", "", project.name),
    makeElement("p", "", project.bio),
    makeElement(
      "p",
      "account-summary",
      `${project.posts.length} publicaciones · ${totalPieces} piezas`
    )
  );

  accountHeader.append(createLogo(project), accountCopy);

  const galleryHeading = makeElement("div", "gallery-heading");
  galleryHeading.append(
    makeElement("strong", "", "PUBLICACIONES"),
    makeElement("span", "", "Abrí una publicación para ver más")
  );

  const grid = makeElement("div", "post-grid");

  project.posts.forEach((post, postIndex) => {
    const card = makeElement("article", "post-card reveal");

    card.style.setProperty(
      "--reveal-delay",
      `${(postIndex % 3) * 65}ms`
    );

    const button = makeElement("button", "post-open");
    button.type = "button";
    button.setAttribute("aria-haspopup", "dialog");
    button.setAttribute(
      "aria-label",
      `Abrir ${post.title}, ${project.name}`
    );

    button.append(
      createMedia(post.media[0], `${project.name}: ${post.title}`, true),
      makeElement("span", "post-title", post.title),
      makeElement(
        "span",
        "post-meta",
        `${typeLabel(post)} · ${aspectLabel(post.media[0])}`
      )
    );

    button.addEventListener("click", () =>
      openPost(project, post, button)
    );

    card.append(button);
    grid.append(card);
  });

  profile.append(toolbar, accountHeader, galleryHeading, grid);
  section.append(heading, profile);
  projectList.append(section);
});

/* ==========================================================
   VISOR Y CARRUSELES
   ========================================================== */

const viewer = document.getElementById("viewer");
const stage = document.getElementById("stage");
const previousButton = document.getElementById("previous-slide");
const nextButton = document.getElementById("next-slide");
const closeButton = document.getElementById("close-viewer");
const counter = document.getElementById("slide-counter");
const dots = document.getElementById("slide-dots");
const format = document.getElementById("format-label");
const originalLink = document.getElementById("original-link");

let currentPost = null;
let currentSlide = 0;
let openingButton = null;
let pointerStart = null;

function stopCurrentVideo() {
  const video = stage.querySelector("video");

  if (video) {
    video.pause();
  }
}

function openPost(project, post, button) {
  currentPost = post;
  currentSlide = 0;
  openingButton = button;

  document.getElementById("viewer-brand-name").textContent = project.name;
  document.getElementById("viewer-account-name").textContent = project.name;
  document.getElementById("viewer-category").textContent = post.category;
  document.getElementById("viewer-title").textContent = post.title;
  document.getElementById("viewer-description").textContent = post.description;
  document.getElementById("viewer-role").textContent = post.role;

  const logo = document.getElementById("viewer-logo");
  logo.src = project.logo;
  logo.alt = `Logo de ${project.name}`;

  document.getElementById("viewer-logo-wrap").className =
    `logo-wrap small ${project.id}`;

  dots.replaceChildren();
  dots.hidden = post.media.length < 2;

  post.media.forEach((file, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ver pieza ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));
    dots.append(dot);
  });

  showSlide(0, false);

  viewer.showModal();
  document.body.classList.add("viewer-open");
  viewer.scrollTop = 0;
}

function showSlide(index, animate = true) {
  if (!currentPost) return;

  const nextIndex = Math.max(
    0,
    Math.min(index, currentPost.media.length - 1)
  );

  const direction = nextIndex >= currentSlide ? 1 : -1;
  currentSlide = nextIndex;

  stopCurrentVideo();

  const file = currentPost.media[currentSlide];
  const media = createMedia(
    file,
    `${currentPost.title}, pieza ${currentSlide + 1}`
  );

  stage.replaceChildren(media);

  if (animate && !reducedMotion.matches && media.animate) {
    media.animate(
      [
        { opacity: 0, transform: `translateX(${direction * 16}px)` },
        { opacity: 1, transform: "translateX(0)" },
      ],
      {
        duration: 280,
        easing: "cubic-bezier(.22, 1, .36, 1)",
      }
    );
  }

  const isSingle = currentPost.media.length === 1;

  previousButton.hidden = isSingle;
  nextButton.hidden = isSingle;
  previousButton.disabled = currentSlide === 0;
  nextButton.disabled = currentSlide === currentPost.media.length - 1;

  counter.textContent = isSingle
    ? typeLabel(currentPost)
    : `${currentSlide + 1} / ${currentPost.media.length}`;

  format.textContent =
    `${file.width} × ${file.height} px · ${aspectLabel(file)}`;

  originalLink.href = file.src;

  [...dots.children].forEach((dot, dotIndex) => {
    dot.setAttribute(
      "aria-current",
      dotIndex === currentSlide ? "true" : "false"
    );
  });
}

previousButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

closeButton.addEventListener("click", () => viewer.close());

viewer.addEventListener("close", () => {
  stopCurrentVideo();
  stage.replaceChildren();
  document.body.classList.remove("viewer-open");
  pointerStart = null;
  currentPost = null;

  if (openingButton?.isConnected) {
    openingButton.focus({ preventScroll: true });
  }
});

viewer.addEventListener("keydown", (event) => {
  if (event.target.closest("video")) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    showSlide(currentSlide + 1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showSlide(currentSlide - 1);
  }
});

/* Cerrar al hacer clic fuera del cuadro. */
let backdropPointerDown = false;

function isOutsideDialog(event) {
  const bounds = viewer.getBoundingClientRect();

  return (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  );
}

viewer.addEventListener("pointerdown", (event) => {
  backdropPointerDown =
    event.target === viewer && isOutsideDialog(event);
});

viewer.addEventListener("click", (event) => {
  if (
    backdropPointerDown &&
    event.target === viewer &&
    isOutsideDialog(event)
  ) {
    viewer.close();
  }

  backdropPointerDown = false;
});

/* Deslizar imágenes con el dedo. */
stage.addEventListener("pointerdown", (event) => {
  if (
    event.pointerType === "mouse" ||
    event.target.closest("video") ||
    !currentPost ||
    currentPost.media.length < 2
  ) {
    return;
  }

  pointerStart = {
    x: event.clientX,
    y: event.clientY,
    id: event.pointerId,
  };

  stage.setPointerCapture(event.pointerId);
});

stage.addEventListener("pointerup", (event) => {
  if (!pointerStart || event.pointerId !== pointerStart.id) return;

  const deltaX = event.clientX - pointerStart.x;
  const deltaY = event.clientY - pointerStart.y;

  if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
    showSlide(currentSlide + (deltaX < 0 ? 1 : -1));
  }

  pointerStart = null;
});

stage.addEventListener("pointercancel", () => {
  pointerStart = null;
});

/* ==========================================================
   FOTO PERSONAL
   ========================================================== */

const portrait = document.getElementById("portrait");
const portraitPlaceholder = document.getElementById("portrait-placeholder");

portrait.addEventListener("load", () => {
  portrait.hidden = false;
  portraitPlaceholder.hidden = true;
});

portrait.addEventListener("error", () => {
  portrait.hidden = true;
  portraitPlaceholder.hidden = false;
});

portrait.src = portrait.dataset.photo;

/* ==========================================================
   APARICIONES AL HACER SCROLL
   ========================================================== */

const reveals = [...document.querySelectorAll(".reveal")];
let revealObserver = null;

if (!reducedMotion.matches && "IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.remove("is-pending");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.05,
      rootMargin: "0px 0px -20px 0px",
    }
  );

  reveals.forEach((element) => {
    element.classList.add("is-pending");
    revealObserver.observe(element);
  });
}

reducedMotion.addEventListener("change", (event) => {
  if (!event.matches) return;

  revealObserver?.disconnect();

  reveals.forEach((element) => {
    element.classList.remove("is-pending");
  });
});