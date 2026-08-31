
const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
$('#menuBtn').onclick=()=>$('#menu').classList.toggle('open'); $$('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
const gallery=$('#gallery');
function artworkLabel(a){return a.medium || a.category}
function renderWorks(cat='All'){gallery.innerHTML=''; window.ARTWORKS.filter(a=>cat==='All'||a.category===cat).forEach(a=>{const el=document.createElement('article');el.className='card';el.innerHTML=`<img loading="lazy" src="${a.image}" alt="${a.title}"><div class="card-body"><div class="meta">${artworkLabel(a)} · ${a.year}</div><h3>${a.title}</h3><div class="meta">${a.size}</div></div>`;el.onclick=()=>openModal(a);gallery.appendChild(el)})}
function openModal(a){$('#modalImg').src=a.image;$('#modalTitle').textContent=a.title;$('#modalMeta').textContent=`${artworkLabel(a)} · ${a.size} · ${a.year}`;$('#modalDesc').textContent=a.description || '';$('#modal').classList.add('open');document.body.style.overflow='hidden'}
function closeModal(){$('#modal').classList.remove('open');document.body.style.overflow=''}
$('#closeModal').onclick=closeModal;$('#modal').onclick=e=>{if(e.target.id==='modal')closeModal()};document.onkeydown=e=>{if(e.key==='Escape')closeModal()};
$$('.filter').forEach(b=>b.onclick=()=>{$$('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderWorks(b.dataset.cat)});renderWorks();
const news=$('#newsGrid');window.NEWS.forEach(n=>news.insertAdjacentHTML('beforeend',`<article class="news-card"><img loading="lazy" src="${n.image}" alt="${n.title}"><div><span class="eyebrow">${n.date}</span><h3>${n.title}</h3><div class="meta">${n.meta}</div><p>${n.text}</p></div></article>`));
