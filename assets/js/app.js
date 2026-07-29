(() => {
  const visits = window.RHB_VISITS || {};
  const site = window.RHB_SITE || {itinerary:[]};
  const order = ["control-center", "maintenance-center"];
  const getId = () => {
    const id = location.hash.replace(/^#visit=/, "");
    return visits[id] ? id : order[0];
  };
  const $ = (s, root=document) => root.querySelector(s);
  const cardGrid = items => `<div class="grid">${items.map(x=>`<article class="card reveal"><strong>${x.title}</strong><p>${x.text}</p></article>`).join('')}</div>`;
  let d, observers=[];

  function render(){
    d=visits[getId()];
    observers.forEach(o=>o.disconnect()); observers=[];
    document.title = `${d.title}｜瑞士鐵道實地訪查`;
    document.documentElement.style.setProperty('--hero-image', `url('${d.heroImage}')`); const heroBg=$('#heroBg'); heroBg.src=d.heroImage; heroBg.alt=`${d.title}參訪現場`; 
    $('#eyebrow').textContent=d.eyebrow; $('#title').textContent=d.title; $('#subtitle').textContent=d.subtitle;
    $('#journeyTitle').textContent=site.title||'RhB瑞士鐵道實地訪查'; $('#journeyIntro').textContent=site.intro||'';
    $('#journeyStrip').innerHTML=(site.itinerary||[]).map((x,i)=>{const clickable=x.visit&&visits[x.visit];return `<${clickable?'a':'article'} ${clickable?`href="#visit=${x.visit}"`:''} class="journey-stop ${x.visit===d.id?'current':''} ${x.status||''}"><span class="journey-index">${String(i+1).padStart(2,'0')}</span><time>${x.date}</time><small>${x.place}</small><b>${x.title}</b><p>${x.note}</p>${clickable?'<span class="journey-link">查看單元 →</span>':''}</${clickable?'a':'article'}>`}).join('');
    $('#heroText').textContent=d.heroText; $('#meta').innerHTML=d.meta.map(x=>`<span>${x}</span>`).join(''); $('#lead').textContent=d.lead;
    $('#visitSwitcher').innerHTML=order.map(id=>`<a href="#visit=${id}" class="${id===d.id?'active':''}">${visits[id].title.replace('RhB','')}</a>`).join('');
    $('#navLinks').innerHTML=d.nav.map(x=>`<a href="#${x.id}" data-section="${x.id}">${x.label}</a>`).join('');
    $('#facts').innerHTML=d.facts.map((x,i)=>`<div class="fact reveal"><b class="counter" data-index="${i}">${x.animate===false?x.display:'0'}</b><span>${x.label}</span></div>`).join('');
    $('#overviewText').textContent=d.overview; $('#quote').textContent=d.quote;
    $('#hostCard').innerHTML=d.host?`<img src="${d.host.image}" alt="${d.host.name}"><div><span>Guide & Host</span><h3>${d.host.name}</h3><b>${d.host.role}</b><p>${d.host.note||''}</p></div>`:'';
    const labels=d.sectionLabels||{};
    $('#systemKicker').textContent=labels.systemKicker||'Operations'; $('#systemTitle').textContent=labels.systemTitle||'控制中心如何運作';
    $('#peopleKicker').textContent=labels.peopleKicker||'People'; $('#peopleTitle').textContent=labels.peopleTitle||'人才培訓：行控能力需要長期養成';
    $('#responseKicker').textContent=labels.responseKicker||'Response'; $('#responseTitle').textContent=labels.responseTitle||'異常事件與跨系統協作';
    $('#operationCards').innerHTML=cardGrid(d.operationCards);
    $('#process').innerHTML=d.process.map((x,i)=>`<details class="process-item reveal" ${i===0?'open':''}><summary><span class="step">${String(i+1).padStart(2,'0')}</span><span><b>${x.title}</b><small>${x.summary}</small></span><span class="plus">＋</span></summary><p>${x.detail}</p></details>`).join('');
    $('#peopleText').innerHTML=d.people.map(x=>`<p>${x}</p>`).join(''); $('#responseCards').innerHTML=cardGrid(d.responseCards); $('#lessonCards').innerHTML=cardGrid(d.lessons);
    $('#reflection').innerHTML=d.reflection.map(x=>`<p>${x}</p>`).join('');
    const path=d.imagePath||'assets/images/control-center/';
    $('#galleryGrid').innerHTML=d.gallery.map((x,i)=>`<figure class="figure reveal" data-index="${i}" tabindex="0"><img src="${path}${x.file}" alt="${d.title}照片${i+1}" loading="lazy"><figcaption>${x.caption}</figcaption></figure>`).join('');
    $('#tags').innerHTML=d.tags.map(x=>`<span class="tag">${x}</span>`).join('');
    const footer=site.footer||{};
    $('#footer').innerHTML=`<div class="footer-inner"><div class="footer-label">${footer.label||''}</div><div class="footer-title">${footer.title||''}</div><div class="footer-rule"></div><div class="footer-copy">${footer.copyright||''}</div></div>`;
    const idx=order.indexOf(d.id), prev=order[idx-1], next=order[idx+1];
    $('#visitPager').innerHTML=`${prev?`<a href="#visit=${prev}"><small>上一個參訪</small><b>← ${visits[prev].title}</b></a>`:'<span></span>'}${next?`<a class="next" href="#visit=${next}"><small>下一個參訪</small><b>${visits[next].title} →</b></a>`:'<span></span>'}`;
    setupInteractions(path); scrollTo({top:0,behavior:'instant'});
  }

  function setupInteractions(path){
    document.querySelectorAll('.reveal').forEach(x=>x.classList.remove('visible'));
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(x=>observer.observe(x)); observers.push(observer);
    const factsObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return; document.querySelectorAll('.counter').forEach(node=>{const item=d.facts[Number(node.dataset.index)]; if(item.animate===false)return; const target=Number(item.value),start=performance.now(); const run=t=>{const p=Math.min((t-start)/900,1),v=Math.round(target*(1-Math.pow(1-p,3))); node.textContent=`${item.prefix||''}${v.toLocaleString('zh-TW')}${item.suffix||''}`;if(p<1)requestAnimationFrame(run)};requestAnimationFrame(run)});factsObserver.disconnect()}),{threshold:.4});
    factsObserver.observe($('#facts')); observers.push(factsObserver);
    const modal=$('#lightbox'), modalImg=$('#lightboxImg'), modalCap=$('#lightboxCap');
    const open=i=>{const x=d.gallery[i];modalImg.src=`${path}${x.file}`;modalImg.alt=x.caption;modalCap.textContent=x.caption;modal.showModal()};
    document.querySelectorAll('.figure').forEach(f=>{f.onclick=()=>open(Number(f.dataset.index));f.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')open(Number(f.dataset.index))}});
  }

  const progress=$('#progress'),back=$('#backTop');
  addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=`${h>0?scrollY/h*100:0}%`;back.classList.toggle('show',scrollY>700);let current='overview';d?.nav.forEach(x=>{const s=document.getElementById(x.id);if(s&&s.getBoundingClientRect().top<=150)current=x.id});document.querySelectorAll('#navLinks a').forEach(a=>a.classList.toggle('active',a.dataset.section===current))},{passive:true});
  back.onclick=()=>scrollTo({top:0,behavior:'smooth'}); $('#closeLightbox').onclick=()=>$('#lightbox').close(); $('#lightbox').onclick=e=>{if(e.target===$('#lightbox'))$('#lightbox').close()};
  addEventListener('hashchange',()=>{if(location.hash.startsWith('#visit='))render()});
  render();
})();