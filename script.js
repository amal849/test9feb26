/*
Setup notes:
- script.js renders cards and handles search + filter interactions.
- Keep comments for readability.
*/

// Data: 12 example figures
const figures = [
  {id:1, title:'Bar Graph', href:'#', thumbnail:'assets/thumb-placeholder.svg', figureType:'Graph', functionPurpose:'Explanatory', topic:'Ecology, Physiology, Genetics', tags:['Bar Graph','Graph','Explanatory','Ecology','Physiology','Genetics']},
  {id:2, title:'Line Graph', href:'#', thumbnail:'assets/thumb-placeholder.svg', figureType:'Graph', functionPurpose:'Explanatory', topic:'Physiology, Ecology', tags:['Line Graph','Graph','Explanatory','Physiology','Ecology']},
  {id:3, title:'Scatter Plot', href:'#', thumbnail:'assets/thumb-placeholder.svg', figureType:'Graph', functionPurpose:'Explanatory', topic:'Ecology, Genetics', tags:['Scatter Plot','Graph','Explanatory','Ecology','Genetics']},
  {id:4, title:'Histogram', href:'#', thumbnail:'assets/thumb-placeholder.svg', figureType:'Graph', functionPurpose:'Explanatory', topic:'Genetics, Physiology', tags:['Histogram','Graph','Explanatory','Genetics','Physiology']},
  {id:5, title:'Phylogenetic Tree', href:'#', thumbnail:'assets/thumb-placeholder.svg', figureType:'Diagram', functionPurpose:'Organizational', topic:'Ecology', tags:['Phylogenetic Tree','Diagram','Organizational','Ecology']},
  {id:6, title:'Food Web', href:'#', thumbnail:'assets/thumb-placeholder.svg', figureType:'Diagram', functionPurpose:'Organizational', topic:'Ecology', tags:['Food Web','Diagram','Organizational','Ecology']},
  {id:7, title:'Muscle Contraction', href:'#', thumbnail:'assets/muscle-contraction-thumb.png', figureType:'Diagram', functionPurpose:'Explanatory', topic:'Physiology', tags:['Muscle Contraction','Diagram','Explanatory','Physiology'], image:'assets/muscle-contraction.png', caption:'Muscle contraction mechanism. Modified from DataBase Center for Life Science (DBCLS), <em>Mechanism of skeletal muscle contraction</em>, 2021. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>.'},
  {id:8, title:'Negative Feedback Loop', href:'#', thumbnail:'assets/thumb-placeholder.svg', figureType:'Diagram', functionPurpose:'Explanatory', topic:'Physiology', tags:['Negative Feedback Loop','Diagram','Explanatory','Physiology','Feedback Loops']},
  {id:9, title:'Positive Feedback Loop', href:'#', thumbnail:'assets/thumb-placeholder.svg', figureType:'Diagram', functionPurpose:'Explanatory', topic:'Physiology', tags:['Positive Feedback Loop','Diagram','Explanatory','Physiology','Feedback Loops']},
  {id:10, title:'Enzyme Kinetics Graph', href:'figures/enzyme-kinetics.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Graph', functionPurpose:'Explanatory', topic:'Physiology', tags:['Enzyme','Kinetics','Graph','Explanatory','Physiology']},
  {id:11, title:'Bacterial Culture Photo', href:'figures/bacterial-culture.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Photo', functionPurpose:'Illustrative', topic:'Microbiology', tags:['Bacterial','Culture','Photo','Illustrative','Microbiology']},
  {id:12, title:'Ecosystem Hierarchy', href:'figures/ecosystem-hierarchy.html', thumbnail:'assets/thumb-placeholder.svg', figureType:'Diagram', functionPurpose:'Organizational', topic:'Ecology', tags:['Ecosystem','Hierarchy','Diagram','Organizational','Ecology']}
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
    a.setAttribute('data-figure-id', item.id);
    a.setAttribute('data-title', item.title);
    a.setAttribute('data-figure-type', item.figureType);
    a.setAttribute('data-function', item.functionPurpose);
    a.setAttribute('data-topic', item.topic);

    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    
    // Only show image if it's not a placeholder (e.g., muscle contraction)
    if (item.thumbnail && !item.thumbnail.includes('placeholder')) {
      const img = document.createElement('img');
      img.src = item.thumbnail;
      img.alt = item.title + ' thumbnail';
      img.style.maxWidth = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      thumb.appendChild(img);
    }

    const h3 = document.createElement('h3');
    h3.textContent = item.title;

    const meta = document.createElement('div');
    meta.className = 'meta';

    // Split topics into an array
    const topicsArray = item.topic.split(',').map(t => t.trim());

    // Create one chip per topic
    topicsArray.forEach(topic => {
      const topicChip = document.createElement('span');
      topicChip.className = 'chip-small';
      topicChip.textContent = topic;
      meta.appendChild(topicChip);
    });

    const t2 = document.createElement('span');
    t2.className='chip-small';
    t2.textContent = item.figureType;

    const t3 = document.createElement('span');
    t3.className='chip-small';
    t3.textContent = item.functionPurpose;

    meta.append(t2,t3);

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
    const itemTopics = item.topic.split(',').map(t => t.trim());
    const matchTopic = f.topic.size === 0 || itemTopics.some(t => f.topic.has(t));

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
    const rowEl = ch.closest('.filters-row');
    const group = rowEl.getAttribute('data-filter-row');
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
  alert('Thanks, your message has been recorded.');
  contactForm.reset();
});

// Modal logic

// =====================
// Modal logic (mockup)
// =====================
const modal = document.getElementById('figure-modal');
const modalDialog = modal.querySelector('.figure-modal-dialog');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const modalPill = document.getElementById('figure-modal-pill');
const modalWhatIsThis = document.getElementById('modal-what-is-this');
const modalHowUnderstand = document.getElementById('modal-how-understand');
const modalQuickFacts = document.getElementById('modal-quick-facts');
const modalMisconTitle = document.getElementById('modal-miscon-title');
const modalMisconWrong = document.getElementById('modal-miscon-wrong');
const modalMisconDetail = document.getElementById('modal-miscon-detail');

const defaultModalContent = {
  whatIsThis: modalWhatIsThis ? modalWhatIsThis.textContent.trim() : '',
  howToUnderstand: modalHowUnderstand ? Array.from(modalHowUnderstand.querySelectorAll('div')).map(node => node.textContent.trim()) : [],
  quickFacts: modalQuickFacts ? Array.from(modalQuickFacts.querySelectorAll('li')).map(node => node.textContent.trim()) : [],
  misconceptionTitle: modalMisconTitle ? modalMisconTitle.textContent.trim() : '',
  misconceptionWrongHtml: modalMisconWrong ? modalMisconWrong.innerHTML : '',
  misconceptionDetail: modalMisconDetail ? modalMisconDetail.textContent.trim() : ''
};

const emptyModalContent = {
  whatIsThis: '',
  howToUnderstand: [],
  quickFacts: [],
  misconceptionTitle: '',
  misconceptionWrongHtml: '',
  misconceptionDetail: ''
};

let lastFocusedCard = null;

function setQuickFacts(items) {
  if (!modalQuickFacts) return;
  modalQuickFacts.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    modalQuickFacts.appendChild(li);
  });
}

function setHowToUnderstand(items) {
  if (!modalHowUnderstand) return;
  modalHowUnderstand.innerHTML = '';
  items.forEach(item => {
    const row = document.createElement('div');
    const stepMatch = String(item).match(/^(Step\s+\d+)\s*-\s*(.*)$/i);

    if (stepMatch) {
      const label = document.createElement('strong');
      label.textContent = stepMatch[1];
      row.appendChild(label);
      row.appendChild(document.createTextNode(` - ${stepMatch[2]}`));
    } else {
      row.textContent = item;
    }

    modalHowUnderstand.appendChild(row);
  });
}

function setMisconWrong(text, html) {
  if (!modalMisconWrong) return;

  if (html) {
    modalMisconWrong.innerHTML = html;
    return;
  }

  if (typeof text !== 'string') {
    modalMisconWrong.innerHTML = '';
    return;
  }

  const trimmed = text.trim();
  if (/^WRONG!/i.test(trimmed)) {
    const rest = trimmed.replace(/^WRONG!\s*/i, '');
    modalMisconWrong.innerHTML = `<strong>WRONG!</strong>${rest ? ` ${rest}` : ''}`;
    return;
  }

  modalMisconWrong.textContent = trimmed;
}

function getResolvedModalContent(figure) {
  if (figure && figure.modalContent) {
    return {
      whatIsThis: figure.modalContent.whatIsThis || '',
      howToUnderstand: Array.isArray(figure.modalContent.howToUnderstand) ? figure.modalContent.howToUnderstand : [],
      quickFacts: Array.isArray(figure.modalContent.quickFacts) ? figure.modalContent.quickFacts : [],
      misconceptionTitle: figure.modalContent.misconceptionTitle || '',
      misconceptionWrong: figure.modalContent.misconceptionWrong,
      misconceptionWrongHtml: figure.modalContent.misconceptionWrongHtml || '',
      misconceptionDetail: figure.modalContent.misconceptionDetail || ''
    };
  }

  return figure && figure.id === 7
    ? {
        whatIsThis: defaultModalContent.whatIsThis,
        howToUnderstand: defaultModalContent.howToUnderstand,
        quickFacts: defaultModalContent.quickFacts,
        misconceptionTitle: defaultModalContent.misconceptionTitle,
        misconceptionWrong: undefined,
        misconceptionWrongHtml: defaultModalContent.misconceptionWrongHtml,
        misconceptionDetail: defaultModalContent.misconceptionDetail
      }
    : {
        whatIsThis: emptyModalContent.whatIsThis,
        howToUnderstand: emptyModalContent.howToUnderstand,
        quickFacts: emptyModalContent.quickFacts,
        misconceptionTitle: emptyModalContent.misconceptionTitle,
        misconceptionWrong: undefined,
        misconceptionWrongHtml: emptyModalContent.misconceptionWrongHtml,
        misconceptionDetail: emptyModalContent.misconceptionDetail
      };
}

function openModal(card) {
  lastFocusedCard = card;

  const figureId = card.getAttribute('data-figure-id');
  const figure = figures.find(f => String(f.id) === String(figureId));

  if (!figure) return;

  // Pill: FigureType | Topic | FunctionPurpose
  // Show all topics
  modalPill.textContent = `${figure.figureType} | ${figure.topic} | ${figure.functionPurpose}`;

  // Title: matches the card title
  modalTitle.textContent = figure.title;

  // Image: use the real figure image when available
  // For Muscle Contraction, this will use: assets/muscle-contraction.png
  modalImage.src = figure.image || 'assets/placeholder.png';
  modalImage.alt = `${figure.title} figure`;

  // Caption: set the figure caption if available
  if (modalCaption) {
    if (figure.caption) {
      modalCaption.innerHTML = figure.caption;
      modalCaption.style.display = 'block';
    } else {
      modalCaption.style.display = 'none';
    }
  }

  const modalContent = getResolvedModalContent(figure);

  if (modalWhatIsThis) {
    modalWhatIsThis.textContent = modalContent.whatIsThis;
  }

  setHowToUnderstand(modalContent.howToUnderstand);

  setQuickFacts(modalContent.quickFacts);

  if (modalMisconTitle) {
    modalMisconTitle.textContent = modalContent.misconceptionTitle;
  }

  setMisconWrong(modalContent.misconceptionWrong, modalContent.misconceptionWrongHtml);

  if (modalMisconDetail) {
    modalMisconDetail.textContent = modalContent.misconceptionDetail;
  }

  // Show modal with fade in animation
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
  modal.classList.remove('fade-out');
  modal.classList.add('fade-in');

  // Focus
  setTimeout(() => {
    modalDialog.focus();
  }, 10);

  document.addEventListener('keydown', handleModalKey);
}

function closeModal() {
  modal.classList.remove('fade-in');
  modal.classList.add('fade-out');
  
  // Wait for fade out animation to complete before hiding
  setTimeout(() => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', handleModalKey);

    if (lastFocusedCard) {
      lastFocusedCard.focus();
    }
  }, 300); // matches the animation duration
}

function handleModalKey(e) {
  if (e.key === 'Escape') {
    closeModal();
    return;
  }

  // Basic focus trap between dialog + close button
  if (e.key === 'Tab') {
    const focusable = [modalCloseBtn, modalDialog];
    const idx = focusable.indexOf(document.activeElement);

    if (e.shiftKey) {
      if (idx <= 0) {
        e.preventDefault();
        focusable[focusable.length - 1].focus();
      }
    } else {
      if (idx === focusable.length - 1) {
        e.preventDefault();
        focusable[0].focus();
      }
    }
  }
}

modalCloseBtn.addEventListener('click', closeModal);

// Close when clicking the blue backdrop (not the white dialog)
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Open modal on card click (keeps main page intact)
grid.addEventListener('click', function (e) {
  const card = e.target.closest('.card');
  if (!card) return;

  e.preventDefault();
  openModal(card);
});
