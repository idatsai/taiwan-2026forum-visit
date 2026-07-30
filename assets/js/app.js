(() => {
  const visits = window.RHB_VISITS || {};
  const site = window.RHB_SITE || {itinerary:[]};
  const order = ["control-center"];
  const forumUrl = "https://ezsign.easymap.tw/TCH2026/#/";

  const getId = () => {
    const id = location.hash.replace(/^#visit=/, "");
    return visits[id] ? id : order[0];
  };

  const $ = (s, root=document) => root.querySelector(s);

  const cardGrid = items =>
    `<div class="grid">${(items || []).map(x =>
      `<article class="card reveal"><strong>${x.title}</strong><p>${x.text}</p></article>`
    ).join('')}</div>`;

  let d, observers=[];

  function render(){
    d = visits[getId()];
    observers.forEach(o => o.disconnect());
    observers = [];

    document.title = `${d.title}｜2026 International Forum on Taiwan Cultural Heritage`;

    document.documentElement.style.setProperty('--hero-image', `url('${d.heroImage}')`);
    const heroBg = $('#heroBg');
    heroBg.src = d.heroImage;
    heroBg.alt = `${d.title}現地參訪資訊`;

    $('#eyebrow').textContent = d.eyebrow;
    $('#title').textContent = d.title;
    $('#subtitle').textContent = d.subtitle;
    $('#heroText').textContent = d.heroText;

    $('#meta').innerHTML = (d.meta || []).map(x => {
      if(typeof x === 'string') return `<span>${x}</span>`;
      const label = x.label || '';
      return x.href
        ? `<a href="${x.href}" class="meta-contact">${label}</a>`
        : `<span>${label}</span>`;
    }).join('');

    $('#lead').textContent = d.lead;

    $('#visitSwitcher').innerHTML = `
      <a href="#visit=control-center" class="active">ON-SITE VISITS</a>
      <a href="${forumUrl}" target="_blank" rel="noopener noreferrer" class="external-link">FORUM WEBSITE ↗</a>
    `;

    const hiddenNavSections = new Set(['gallery']);
    $('#navLinks').innerHTML = (d.nav || [])
      .filter(x => !hiddenNavSections.has(x.id))
      .map(x => `<a href="#${x.id}" data-section="${x.id}">${x.label}</a>`)
      .join('');

    // Four-part programme overview.
    const oldJourney = $('#journey');
    if(oldJourney){
      oldJourney.hidden = true;
      oldJourney.style.display = 'none';
    }

    const overviewSection = $('#overview');
    const overviewCards = d.overviewCards || [
      {date:'September 1', title:'Mining Heritage Landscape Visit'},
      {date:'September 2', title:'Coal Mining Heritage Visit'},
      {date:'September 3 Morning', title:'National Railway Museum Visit'},
      {date:'September 3 Afternoon', title:'International Experts Exchange Meeting'}
    ];

    overviewSection.innerHTML = `
      <div class="journey-intro study-journey-block">
        <div class="journey-copy reveal">
          <div class="section-kicker">Overview</div>
          <h2>Programme at a Glance</h2>
          <p>A quick overview of the three-day on-site visit programme.</p>
        </div>
        <div class="journey-strip study-journey-strip">
          ${overviewCards.map((item, index) => `
            <a class="journey-stop study-journey-stop reveal" href="#system">
              <span class="journey-index">${String(index + 1).padStart(2, '0')}</span>
              <time>${item.date}</time>
              <b>${item.title || ''}</b>
              ${item.note ? `<p>${item.note}</p>` : ''}
              <span class="journey-link">View detailed itinerary ↓</span>
            </a>
          `).join('')}
        </div>
      </div>
    `;

    $('#quote').textContent = d.quote;

    const labels = d.sectionLabels || {};

    $('#systemKicker').textContent = labels.systemKicker || 'Three-Day Programme';
    $('#systemTitle').textContent = labels.systemTitle || 'Detailed Itinerary';
    $('#peopleKicker').textContent = labels.peopleKicker || 'Stay';
    $('#peopleTitle').textContent = labels.peopleTitle || 'Accommodation';
    const responseKicker = $('#responseKicker');
    responseKicker.textContent = '';
    responseKicker.hidden = true;
    $('#responseTitle').textContent = 'Welcome Dinner · 2 September';

    const itineraryDays = d.detailedItinerary || [];
    $('#operationCards').innerHTML = `
      <div class="detailed-itinerary">
        ${itineraryDays.map((day, dayIndex) => `
          <article class="itinerary-day reveal" id="itinerary-day-${dayIndex + 1}">
            <header class="itinerary-day-header">
              <div class="itinerary-day-number">${String(dayIndex + 1).padStart(2, '0')}</div>
              <div>
                <span>${day.label || `DAY ${dayIndex + 1}`}</span>
                <h3>${day.date}</h3>
                <p>${day.title || ''}</p>
              </div>
            </header>

            ${day.meta?.length ? `
              <div class="itinerary-meta">
                ${day.meta.map(item => `<span>${item}</span>`).join('')}
              </div>
            ` : ''}

            ${day.notice ? `<div class="itinerary-notice">${day.notice}</div>` : ''}

            <div class="itinerary-timeline">
              ${(day.items || []).map(item => `
                ${item.section ? `
                  <div class="itinerary-period">
                    <span>${item.section}</span>
                    ${item.sectionTitle ? `<b>${item.sectionTitle}</b>` : ''}
                  </div>
                ` : `
                  <div class="itinerary-entry ${item.type ? `is-${item.type}` : ''}">
                    <time>${item.time || ''}</time>
                    <div class="itinerary-entry-body">
                      <h4>${item.title || ''}</h4>
                      ${item.location ? `<p class="itinerary-location">${item.location}</p>` : ''}
                      ${item.note ? `<p>${item.note}</p>` : ''}

                      ${item.venue ? `
                        <details class="venue-detail">
                          <summary>Explore Venue <span>＋</span></summary>
                          <div class="venue-detail-card">
                            ${item.venue.image
                              ? `<img src="${item.venue.image}" alt="${item.venue.name || item.title}" loading="lazy">`
                              : `<div class="venue-photo-placeholder"><span>VENUE PHOTO</span></div>`
                            }
                            <div class="venue-detail-copy">
                              <span>HERITAGE SITE</span>
                              <h5>${item.venue.name || item.title}</h5>
                              <p>${item.venue.description || ''}</p>
                              ${item.venue.focus ? `<div class="venue-focus"><b>Heritage Focus</b><span>${item.venue.focus}</span></div>` : ''}
                              ${item.venue.mapUrl ? `<a href="${item.venue.mapUrl}" target="_blank" rel="noopener noreferrer">View on Google Maps ↗</a>` : ''}
                            </div>
                          </div>
                        </details>
                      ` : ''}
                    </div>
                  </div>
                `}
              `).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    `;

    const processBlock = $('#process');
    if(processBlock){
      processBlock.innerHTML = '';
      processBlock.hidden = true;
      processBlock.style.display = 'none';
    }

    if(d.accommodations?.length){
      $('#peopleText').innerHTML = `
        <div class="hotel-list">
          ${d.accommodations.map(h => `
            <article class="hotel-card reveal">
              <div class="hotel-photo-placeholder" aria-label="Hotel photo placeholder">
                <span>${h.initials || 'HOTEL'}</span>
                <small>HOTEL PHOTO</small>
              </div>

              <div class="hotel-info">
                <div class="hotel-stay">
                  <span>STAY</span>
                  <b>${h.stay}</b>
                </div>

                <h3>${h.name}</h3>

                <dl>
                  <div>
                    <dt>Address</dt>
                    <dd>${h.address}</dd>
                  </div>

                  <div>
                    <dt>Telephone</dt>
                    <dd><a href="${h.phoneHref || '#'}">${h.phone}</a></dd>
                  </div>

                  ${h.note
                    ? `<div><dt>Reception</dt><dd>${h.note}</dd></div>`
                    : ''
                  }

                  ${h.mapUrl
                    ? `<div>
                         <dt>Location</dt>
                         <dd>
                           <a href="${h.mapUrl}" target="_blank" rel="noopener noreferrer">
                             View on Google Maps ↗
                           </a>
                         </dd>
                       </div>`
                    : ''
                  }
                </dl>
              </div>
            </article>
          `).join('')}
        </div>
      `;
    }else{
      $('#peopleText').innerHTML = (d.people || []).map(x => `<p>${x}</p>`).join('');
    }

    if(d.welcomeDinner){
      const dinner = d.welcomeDinner;
      const dinnerPath = d.imagePath || 'assets/images/control-center/';

      $('#responseCards').innerHTML = `
        <article class="welcome-dinner-card reveal">
          <div class="welcome-dinner-gallery">
            <div class="welcome-dinner-track" id="welcomeDinnerTrack">
              ${(dinner.images || []).map((image, index) => `
                <figure class="welcome-dinner-slide">
                  <img
                    src="${dinnerPath}${image.file}"
                    alt="${image.alt || `Welcome dinner photo ${index + 1}`}"
                    loading="lazy"
                  >
                </figure>
              `).join('')}
            </div>

            <button
              class="dinner-arrow dinner-prev"
              type="button"
              aria-label="Previous photo"
            >
              ←
            </button>

            <button
              class="dinner-arrow dinner-next"
              type="button"
              aria-label="Next photo"
            >
              →
            </button>

            <div class="dinner-dots">
              ${(dinner.images || []).map((_, index) => `
                <button
                  type="button"
                  class="${index === 0 ? 'active' : ''}"
                  data-dinner-index="${index}"
                  aria-label="View photo ${index + 1}"
                ></button>
              `).join('')}
            </div>
          </div>

          <div class="welcome-dinner-info">
            <h3>AKA Café</h3>
            <p>${dinner.description}</p>
          </div>
        </article>
      `;
    }else{
      $('#responseCards').innerHTML = cardGrid(d.responseCards);
    }

    // Practical Information · icon-based information chart.
    const practicalSection = $('#lessons');
    const practicalHeading = practicalSection?.querySelector('.section-head');
    if(practicalHeading){
      practicalHeading.innerHTML = `
        <div>
          <div class="section-kicker">Visitor Essentials</div>
          <h2>Practical Information</h2>
          <p class="section-intro">A quick guide to weather, electricity and everyday essentials during your visit to Taiwan.</p>
        </div>
      `;
    }

    const practicalIcons = {
      weather: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="18" r="7"></circle><path d="M18 4v5M18 27v5M4 18h5M27 18h5M8.1 8.1l3.5 3.5M24.4 24.4l3.5 3.5M27.9 8.1l-3.5 3.5"></path><path d="M17 35h19a7 7 0 0 0 0-14 10 10 0 0 0-18.5 3.8A5.2 5.2 0 0 0 17 35Z"></path></svg>`,
      rain: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 25a15 15 0 0 1 30 0Z"></path><path d="M24 10v27a5 5 0 0 0 10 0"></path><path d="M13 30l-2 5M22 30l-2 5M31 30l-2 5"></path></svg>`,
      power: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M27 3 13 27h10l-2 18 14-25H25Z"></path></svg>`,
      plug: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 8v10M32 8v10M12 18h24v5a12 12 0 0 1-12 12h0a12 12 0 0 1-12-12Z"></path><path d="M24 35v9"></path></svg>`,
      clothing: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 9 8 14l4 9 5-2v19h14V21l5 2 4-9-9-5a8 8 0 0 1-14 0Z"></path><path d="M18 8a7 7 0 0 0 12 0"></path></svg>`,
      connectivity: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="15" y="5" width="18" height="38" rx="3"></rect><path d="M21 10h6M22 37h4"></path><path d="M6 18a15 15 0 0 1 8-8M8 26a8 8 0 0 1 6-6"></path></svg>`
    };

    const practicalInfo = d.practicalInfo || [];
    $('#lessonCards').innerHTML = `
      <div class="practical-info-grid">
        ${practicalInfo.map(item => `
          <article class="practical-info-card reveal">
            <div class="practical-icon">${practicalIcons[item.icon] || practicalIcons.weather}</div>
            <div class="practical-card-copy">
              <span>${item.label || ''}</span>
              <h3>${item.value || ''}</h3>
              <p>${item.text || ''}</p>
              ${item.exampleImage ? `
                <details class="practical-example">
                  <summary>
                    <span class="example-open-label">${item.exampleLabel || 'View Example'}</span>
                    <span class="example-close-label">${item.closeLabel || 'Close Example'}</span>
                    <b aria-hidden="true">＋</b>
                  </summary>
                  <div class="practical-example-panel">
                    <img
                      src="${d.imagePath || 'assets/images/control-center/'}${item.exampleImage}"
                      alt="${item.exampleAlt || item.value || 'Example'}"
                      loading="lazy"
                    >
                    ${item.exampleCaption ? `<p>${item.exampleCaption}</p>` : ''}
                  </div>
                </details>
              ` : ''}
            </div>
          </article>
        `).join('')}
      </div>
    `;

    // Hide unused sections: Reflection, Gallery and Topics.
    const unusedSectionTargets = ['#reflection', '#galleryGrid', '#tags'];
    unusedSectionTargets.forEach(selector => {
      const target = $(selector);
      const section = target?.closest('.section');
      if(section){
        section.hidden = true;
        section.style.display = 'none';
      }
    });

    const path = d.imagePath || 'assets/images/control-center/';

    const footer = site.footer || {};
    $('#footer').innerHTML = `
      <div class="footer-inner">
        <div class="footer-label">${footer.label || ''}</div>
        <div class="footer-title">${footer.title || ''}</div>
        <div class="footer-rule"></div>
        <div class="footer-copy">${footer.copyright || ''}</div>
      </div>
    `;

    const idx = order.indexOf(d.id);
    const prev = order[idx - 1];
    const next = order[idx + 1];

    $('#visitPager').innerHTML = `
      ${prev
        ? `<a href="#visit=${prev}">
             <small>上一個參訪</small>
             <b>← ${visits[prev].title}</b>
           </a>`
        : '<span></span>'
      }

      ${next
        ? `<a class="next" href="#visit=${next}">
             <small>下一個參訪</small>
             <b>${visits[next].title} →</b>
           </a>`
        : '<span></span>'
      }
    `;

    setupInteractions(path);
    scrollTo({top:0, behavior:'instant'});
  }

  function setupInteractions(path){
    document.querySelectorAll('.reveal').forEach(x => x.classList.remove('visible'));

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if(e.isIntersecting) e.target.classList.add('visible');
      }),
      {threshold:.12}
    );

    document.querySelectorAll('.reveal').forEach(x => observer.observe(x));
    observers.push(observer);

    const factsObserver = new IntersectionObserver(
      entries => entries.forEach(e => {
        if(!e.isIntersecting) return;

        document.querySelectorAll('.counter').forEach(node => {
          const item = d.facts[Number(node.dataset.index)];
          if(item.animate === false) return;

          const target = Number(item.value);
          const start = performance.now();

          const run = t => {
            const p = Math.min((t - start) / 900, 1);
            const v = Math.round(target * (1 - Math.pow(1 - p, 3)));

            node.textContent =
              `${item.prefix || ''}${v.toLocaleString('zh-TW')}${item.suffix || ''}`;

            if(p < 1) requestAnimationFrame(run);
          };

          requestAnimationFrame(run);
        });

        factsObserver.disconnect();
      }),
      {threshold:.4}
    );

    const factsTarget = $('#facts');
    if(factsTarget){
      factsObserver.observe(factsTarget);
      observers.push(factsObserver);
    }

    const modal = $('#lightbox');
    const modalImg = $('#lightboxImg');
    const modalCap = $('#lightboxCap');

    const open = i => {
      const x = d.gallery[i];
      modalImg.src = `${path}${x.file}`;
      modalImg.alt = x.caption;
      modalCap.textContent = x.caption;
      modal.showModal();
    };

    document.querySelectorAll('.figure').forEach(f => {
      f.onclick = () => open(Number(f.dataset.index));
      f.onkeydown = e => {
        if(e.key === 'Enter' || e.key === ' ') {
          open(Number(f.dataset.index));
        }
      };
    });

    const dinnerTrack = $('#welcomeDinnerTrack');

    if(dinnerTrack){
      const slides = [...dinnerTrack.querySelectorAll('.welcome-dinner-slide')];
      const dots = [...document.querySelectorAll('[data-dinner-index]')];
      const prevButton = $('.dinner-prev');
      const nextButton = $('.dinner-next');

      const goToDinnerSlide = index => {
        const safeIndex = Math.max(0, Math.min(index, slides.length - 1));

        dinnerTrack.scrollTo({
          left: safeIndex * dinnerTrack.clientWidth,
          behavior: 'smooth'
        });

        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle('active', dotIndex === safeIndex);
        });
      };

      prevButton?.addEventListener('click', () => {
        const current = Math.round(
          dinnerTrack.scrollLeft / dinnerTrack.clientWidth
        );

        goToDinnerSlide(current - 1);
      });

      nextButton?.addEventListener('click', () => {
        const current = Math.round(
          dinnerTrack.scrollLeft / dinnerTrack.clientWidth
        );

        goToDinnerSlide(current + 1);
      });

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          goToDinnerSlide(Number(dot.dataset.dinnerIndex));
        });
      });

      dinnerTrack.addEventListener('scroll', () => {
        const current = Math.round(
          dinnerTrack.scrollLeft / dinnerTrack.clientWidth
        );

        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle('active', dotIndex === current);
        });
      }, {passive:true});
    }
  }

  const progress = $('#progress');
  const back = $('#backTop');

  addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${h > 0 ? scrollY / h * 100 : 0}%`;
    back.classList.toggle('show', scrollY > 700);

    let current = 'overview';

    d?.nav.forEach(x => {
      const s = document.getElementById(x.id);
      if(s && s.getBoundingClientRect().top <= 150) current = x.id;
    });

    document.querySelectorAll('#navLinks a').forEach(a =>
      a.classList.toggle('active', a.dataset.section === current)
    );
  }, {passive:true});

  back.onclick = () => scrollTo({top:0, behavior:'smooth'});
  $('#closeLightbox').onclick = () => $('#lightbox').close();

  $('#lightbox').onclick = e => {
    if(e.target === $('#lightbox')) $('#lightbox').close();
  };

  addEventListener('hashchange', () => {
    if(location.hash.startsWith('#visit=')) render();
  });

  render();
})();
