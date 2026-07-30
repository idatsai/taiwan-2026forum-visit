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

    $('#navLinks').innerHTML = (d.nav || []).map(x =>
      `<a href="#${x.id}" data-section="${x.id}">${x.label}</a>`
    ).join('');

    $('#facts').innerHTML = (d.facts || []).map((x, i) =>
      `<div class="fact reveal">
        <b class="counter" data-index="${i}">${x.animate === false ? x.display : '0'}</b>
        <span>${x.label}</span>
      </div>`
    ).join('');

    $('#overviewText').textContent = d.overview;
    $('#quote').textContent = d.quote;

    $('#hostCard').innerHTML = d.host
      ? `<img src="${d.host.image}" alt="${d.host.name}">
         <div>
           <span>Guide & Host</span>
           <h3>${d.host.name}</h3>
           <b>${d.host.role}</b>
           <p>${d.host.note || ''}</p>
         </div>`
      : '';

    const labels = d.sectionLabels || {};

    $('#systemKicker').textContent = labels.systemKicker || 'Operations';
    $('#systemTitle').textContent = labels.systemTitle || '控制中心如何運作';
    $('#peopleKicker').textContent = labels.peopleKicker || 'People';
    $('#peopleTitle').textContent = labels.peopleTitle || '人才培訓：行控能力需要長期養成';
    const responseKicker = $('#responseKicker');
    responseKicker.textContent = '';
    responseKicker.hidden = true;
    $('#responseTitle').textContent = 'Welcome Dinner · 2 September';

    $('#operationCards').innerHTML = cardGrid(d.operationCards);

    $('#process').innerHTML = (d.process || []).map((x, i) =>
      `<details class="process-item reveal" ${i === 0 ? 'open' : ''}>
        <summary>
          <span class="step">${String(i + 1).padStart(2, '0')}</span>
          <span>
            <b>${x.title}</b>
            <small>${x.summary}</small>
          </span>
          <span class="plus">＋</span>
        </summary>
        <p>${x.detail}</p>
      </details>`
    ).join('');

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

    $('#lessonCards').innerHTML = cardGrid(d.lessons);
    $('#reflection').innerHTML = (d.reflection || []).map(x => `<p>${x}</p>`).join('');

    const path = d.imagePath || 'assets/images/control-center/';

    $('#galleryGrid').innerHTML = (d.gallery || []).map((x, i) =>
      `<figure class="figure reveal" data-index="${i}" tabindex="0">
        <img src="${path}${x.file}" alt="${d.title}照片${i + 1}" loading="lazy">
        <figcaption>${x.caption}</figcaption>
      </figure>`
    ).join('');

    $('#tags').innerHTML = (d.tags || []).map(x => `<span class="tag">${x}</span>`).join('');

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

    factsObserver.observe($('#facts'));
    observers.push(factsObserver);

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
