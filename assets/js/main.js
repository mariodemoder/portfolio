/**
* Template Name: iPortfolio - v3.7.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Render Habilidades (skills) desde PORTFOLIO_DATA
   */
  const renderSkills = () => {
    const container = select('.skills-content')
    if (!container || typeof PORTFOLIO_DATA === 'undefined') return
    const skills = PORTFOLIO_DATA.skills
    const half = Math.ceil(skills.length / 2)
    const cols = [skills.slice(0, half), skills.slice(half)]
    cols.forEach((list, i) => {
      const col = document.createElement('div')
      col.className = 'col-lg-6'
      col.setAttribute('data-aos', 'fade-up')
      if (i === 1) col.setAttribute('data-aos-delay', '100')
      list.forEach(skill => {
        const progress = document.createElement('div')
        progress.className = 'progress'
        progress.innerHTML = `
          <span class="skill">${skill.name} <i class="val">${skill.level}%</i></span>
          <div class="progress-bar-wrap">
            <div class="progress-bar" role="progressbar" aria-valuenow="${skill.level}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>`
        col.appendChild(progress)
      })
      container.appendChild(col)
    })
  }

  /**
   * Render Portfolio desde PORTFOLIO_DATA
   */
  const renderPortfolio = () => {
    const container = select('.portfolio-container')
    if (!container || typeof PORTFOLIO_DATA === 'undefined') return
    PORTFOLIO_DATA.portfolio.forEach(item => {
      const col = document.createElement('div')
      col.className = 'col-lg-4 col-md-6 portfolio-item'
      const stackIcons = item.stack ? item.stack.map(s => `<img src="${s.file}" alt="${s.name}" title="${s.name}" loading="lazy">`).join('') : ''
      const overlayStack = item.stack ? `
        <div class="portfolio-overlay-stack">
          ${item.stack.map(s => `<img src="${s.file}" alt="${s.name}" title="${s.name}" loading="lazy">`).join('')}
        </div>` : ''
      col.innerHTML = `
        <div class="portfolio-wrap">
          <img src="${item.image}" class="img-fluid" alt="${item.title}" loading="lazy">
          <div class="portfolio-stack">${stackIcons}</div>
          <div class="portfolio-links">
            <a href="${item.image}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${item.title}"><i class="bx bx-plus"></i></a>
            <a href="${item.url}" target="_blank" title="${item.urlTitle}"><i class="bx bx-link"></i></a>
          </div>
          <div class="portfolio-overlay">
            <div class="portfolio-overlay-content">
              <h4>${item.title}</h4>
              <p>${item.description || ''}</p>
              ${overlayStack}
              <div class="portfolio-overlay-links">
                <a href="${item.image}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${item.title}"><i class="bx bx-expand"></i> Ver imagen</a>
                <a href="${item.url}" target="_blank" title="${item.urlTitle}"><i class="bx bx-link-external"></i> Ver proyecto</a>
              </div>
            </div>
          </div>
        </div>`
      container.appendChild(col)
    })

    // Click para expandir/colapsar tarjetas
    document.addEventListener('click', (e) => {
      const wrap = e.target.closest('.portfolio-wrap')
      if (wrap) {
        const wasExpanded = wrap.classList.contains('expanded')
        // Colapsar todas las tarjetas
        document.querySelectorAll('.portfolio-wrap.expanded').forEach(el => el.classList.remove('expanded'))
        // Si no estaba expandida, expandirla
        if (!wasExpanded) {
          wrap.classList.add('expanded')
        }
      }
    })

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.portfolio-wrap.expanded').forEach(el => el.classList.remove('expanded'))
      }
    })
  }

  /**
   * Render Testimonios desde PORTFOLIO_DATA
   */
  const renderTestimonials = () => {
    const wrapper = select('.testimonials-slider .swiper-wrapper')
    if (!wrapper || typeof PORTFOLIO_DATA === 'undefined') return
    PORTFOLIO_DATA.testimonials.forEach(t => {
      const slide = document.createElement('div')
      slide.className = 'swiper-slide'
      slide.innerHTML = `
        <div class="testimonial-item">
          <p>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
            ${t.text}
            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
          </p>
          <img src="${t.image}" class="testimonial-img" alt="${t.name}" loading="lazy">
          <h3>${t.name}</h3>
          <h4>${t.role}</h4>
        </div>`
      wrapper.appendChild(slide)
    })
  }

  /**
   * Render secciones con datos dinámicos
   */
  renderSkills()
  renderPortfolio()
  renderTestimonials()

  /**
   * Valores dinámicos (edad y año de copyright)
   */
  const setAge = () => {
    const el = select('#age')
    if (el) el.textContent = new Date().getFullYear() - 1979
  }
  const setYear = () => {
    const el = select('#year')
    if (el) el.textContent = new Date().getFullYear()
  }
  setAge()
  setYear()

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Testimonials slider
   */
  const testimonialsSlider = new Swiper('.testimonials-slider', {
    speed: 900,
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Pausar el carrusel al pasar el cursor y reanudarlo al salir
   */
  const testimonialsEl = select('.testimonials-slider')
  if (testimonialsEl) {
    testimonialsEl.addEventListener('mouseenter', () => {
      if (testimonialsSlider.autoplay) testimonialsSlider.autoplay.stop()
    })
    testimonialsEl.addEventListener('mouseleave', () => {
      if (testimonialsSlider.autoplay) testimonialsSlider.autoplay.start()
    })
  }

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()