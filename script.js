/*
Setup notes:
- script.js renders cards and handles search + filter interactions.
- Keep comments for readability.
*/

// Data: 8 example figures
const figures = [
  {id:1, title:'Phylogenetic Tree', href:'figures/phylogenetic-tree.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Diagram', functionPurpose:'Organizational', topic:'Ecology', tags:['Phylogenetic Tree','Diagram','Organizational','Ecology']},
  {id:2, title:'Cell Structure Diagram', href:'figures/cell-structure.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Diagram', functionPurpose:'Explanatory', topic:'Cell Biology', tags:['Cell Structure','Diagram','Explanatory','Cell Biology']},
  {id:3, title:'Genetics Pedigree', href:'figures/pedigree.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Graph', functionPurpose:'Illustrative', topic:'Genetics', tags:['Pedigree','Graph','Illustrative','Genetics']},
  {id:4, title:'Population Growth Table', href:'figures/population-growth.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Table', functionPurpose:'Explanatory', topic:'Ecology', tags:['Population','Table','Explanatory','Ecology']},
  {id:5, title:'Microbe Photo', href:'figures/microbe-photo.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Photo', functionPurpose:'Illustrative', topic:'Microbiology', tags:['Microbe','Photo','Illustrative','Microbiology']},
  {id:6, title:'Physiology Flow Diagram', href:'figures/physiology-flow.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Diagram', functionPurpose:'Explanatory', topic:'Physiology', tags:['Flow','Diagram','Explanatory','Physiology']},
  {id:7, title:'Cell Signaling Graph', href:'figures/cell-signaling.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Graph', functionPurpose:'Explanatory', topic:'Cell Biology', tags:['Signaling','Graph','Explanatory','Cell Biology']},
  {id:8, title:'Biodiversity Table', href:'figures/biodiversity.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Table', functionPurpose:'Organizational', topic:'Ecology', tags:['Biodiversity','Table','Organizational','Ecology']}
];

// State for filters
const state = {
  search: '',
  filters: {
    figureType: new Set(),
    functionPurpose: new Set(),
    topic: new Set()
  }
};

// DOM refs
const grid = document.getElementById('cards-grid');
const searchInput = document.getElementById('search-input');
const chips = Array.from(document.querySelectorAll('.chip'));
const resultsCount = document.getElementById('results-count');
const clearFiltersBtn = document.getElementById('clear-filters');
const contactTopBtn = document.getElementById('btn-contact-top');

// Utility: normalize text for comparisons
function norm(text){
  return (text||'').toString().toLowerCase();
}

// Render cards based on filtered list
function renderCards(items){
  grid.innerHTML = '';
  items.forEach(item => {
    const a = document.createElement('a');
    a.href = item.href;
    a.className = 'card';
    a.setAttribute('aria-label', item.title);

    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    const img = document.createElement('img');
    img.src = item.thumbnail;
    img.alt = item.title + ' thumbnail';
    img.style.maxWidth = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    thumb.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = item.title;

    const meta = document.createElement('div');
    meta.className = 'meta';
    // show topic, figureType, functionPurpose
    const t1 = document.createElement('span'); t1.className='chip-small'; t1.textContent = item.topic;
    const t2 = document.createElement('span'); t2.className='chip-small'; t2.textContent = item.figureType;
    const t3 = document.createElement('span'); t3.className='chip-small'; t3.textContent = item.functionPurpose;
    meta.append(t1,t2,t3);

    a.append(thumb,h3,meta);
    grid.appendChild(a);
  });
}

// Filtering logic: returns filtered array
function applyFilters(){
  const s = norm(state.search);
  const f = state.filters;

  const filtered = figures.filter(item => {
    // search match on title or tags
    const inSearch = s === '' || norm(item.title).includes(s) || item.tags.some(t => norm(t).includes(s));

    // category filters (if any selected in a category, item must match at least one)
    const matchFigureType = f.figureType.size === 0 || f.figureType.has(item.figureType);
    const matchFunction = f.functionPurpose.size === 0 || f.functionPurpose.has(item.functionPurpose);
    const matchTopic = f.topic.size === 0 || f.topic.has(item.topic);

    return inSearch && matchFigureType && matchFunction && matchTopic;
  });

  resultsCount.textContent = `Showing ${filtered.length} of ${figures.length} visuals`;
  renderCards(filtered);
}

// Initialize: render all
applyFilters();

// Event: search input (real-time)
searchInput.addEventListener('input', (e)=>{
  state.search = e.target.value;
  applyFilters();
});

// Chips interactions
chips.forEach(ch => {
  ch.addEventListener('click', ()=>{
    const groupEl = ch.closest('.filter-group');
    const group = groupEl.getAttribute('data-group');
    const value = ch.getAttribute('data-value');
    const pressed = ch.getAttribute('aria-pressed') === 'true';

    if(pressed){
      ch.setAttribute('aria-pressed','false');
      ch.classList.remove('active');
      state.filters[group].delete(value);
    } else {
      ch.setAttribute('aria-pressed','true');
      ch.classList.add('active');
      state.filters[group].add(value);
    }
    applyFilters();
  });
});

// Clear filters
clearFiltersBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  // reset search
  searchInput.value = '';
  state.search = '';
  // reset chips
  chips.forEach(c=>{c.setAttribute('aria-pressed','false');c.classList.remove('active');});
  state.filters.figureType.clear();state.filters.functionPurpose.clear();state.filters.topic.clear();
  applyFilters();
});

// Contact top button scroll
contactTopBtn.addEventListener('click', ()=>{
  document.getElementById('contact').scrollIntoView({behavior:'smooth'});
});

// Contact form submit (demo)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  alert('Thanks, your message has been recorded (demo).');
  contactForm.reset();
});
