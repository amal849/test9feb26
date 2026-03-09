/*
Setup notes:
- script.js renders cards and handles search + filter interactions.
- Keep comments for readability.
*/

// Data: 12 example figures
const figures = [
  {
    id:1,
    title:'Bar Graph',
    href:'#',
    thumbnail:'assets/heart_rate_bargraph_final.png',
    image:'assets/heart_rate_bargraph_final.png',
    caption:'Mean heart rate under different exercise conditions. Created by Amal Shahzad, 2026. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. <em>Data shown are simulated for educational purposes.</em>',
    figureType:'Graph',
    functionPurpose:'Explanatory',
    topic:'Ecology, Physiology, Genetics',
    tags:['Bar Graph','Graph','Explanatory','Ecology','Physiology','Genetics','Heart Rate','Exercise']
  },
  {id:2, title:'Line Graph', href:'#', thumbnail:'assets/heart_rate_linegraph.png', image:'assets/heart_rate_linegraph.png', caption:'Bone density across age. Created by Amal Shahzad, 2026. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. <em>Data shown are simulated for educational purposes.</em>', figureType:'Graph', functionPurpose:'Explanatory', topic:'Physiology, Ecology', tags:['Line Graph','Graph','Explanatory','Physiology','Ecology']},
  {id:3, title:'Scatter Plot', href:'#', thumbnail:'assets/sleepduration_screentime_scatterplot.png', image:'assets/sleepduration_screentime_scatterplot.png', caption:'Sleep duration versus daily screen time. Created by Amal Shahzad, 2026. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. <em>Data shown are simulated for educational purposes.</em>', figureType:'Graph', functionPurpose:'Explanatory', topic:'Ecology, Genetics, Physiology', tags:['Scatter Plot','Graph','Explanatory','Ecology','Genetics','Physiology']},
  {id:4, title:'Histogram', href:'#', thumbnail:'assets/petal_length_histogram.png', image:'assets/petal_length_histogram.png', caption:'Distribution of petal length. Created by Amal Shahzad, 2026. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. <em>Data shown are simulated for educational purposes.</em>', figureType:'Graph', functionPurpose:'Explanatory', topic:'Ecology, Genetics, Physiology', tags:['Histogram','Graph','Explanatory','Ecology','Genetics','Physiology']},
  {
    id:5,
    title:'Phylogenetic Tree',
    href:'#',
    thumbnail:'assets/phylogenetic-tree.png',
    image:'assets/phylogenetic-tree.png',
    caption:'Phylogenetic tree illustrating evolutionary relationships among selected mammals. Created by Amal Shahzad, 2026. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. Animal silhouettes sourced from <a href="https://www.phylopic.org" target="_blank" rel="noopener">PhyloPic</a> (<a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener">CC0 1.0 Universal</a>).',
    figureType:'Diagram',
    functionPurpose:'Organizational',
    topic:'Ecology',
    tags:['Phylogenetic Tree','Diagram','Organizational','Ecology'],
    modalContent:{
      whatIsThis:'This is a phylogenetic tree describing the evolutionary relationships and common ancestry between various mammalian species.',
      howToUnderstand:[
        'Step 1 - Begin by looking at the root of the tree. This represents the population leading to the common ancestor of all the taxa at the tips of the branches. As you move from bottom to top on the diagram, you move forward in time, and evolution occurs, giving rise to many lineage branches.',
        'Step 2 - Each common ancestor is represented by a node on the diagram. Notice how after the first speciation event (when a common ancestor lineage splits into two or more daughter lineages), there are two daughter lineages: one forming an outgroup (right) and the other a clade (left).',
        'Step 3 - Notice how the outgroup branches off at the base of the tree? This shows that the platypus lineage diverged earlier than the other species and is more genetically distinct from the species within a clade.',
        'Step 4 - Next, look at the clade on the left. Observe how there are many different lineage branches within this clade. Species within a clade are more closely related than the outgroup.',
        '• For example, gorillas and horses are more closely related to each other than horses and platypuses, because gorillas and horses share a more recent common ancestor on the tree.',
        'Step 5 - Determine species relatedness by identifying the most recent common ancestor (nodes). Work your way up by observing the nodes and determining where the lineage branches end up.'
      ],
      quickFacts:[
        'Nodes represent common ancestors of related species.',
        'Branches represent daughter lineages of nodes.'
      ],
      misconceptionTitle:'"Species that are closer together at the tips of the branches are more closely related."',
      misconceptionWrongHtml:'<strong>WRONG!</strong> Species that share a more recent common ancestor at a node determine species relatedness. Remember that branches can be rotated, flipping the order of the species.',
      misconceptionDetail:'"Species on the left, like humans, are more evolved than species on the right." WRONG! The species are not arranged in a particular order (i.e., most evolved to least evolved). Remember that branches are able to rotate, changing the order of the species.'
    }
  },
  {id:6, title:'Food Web', href:'#', thumbnail:'assets/food-web.png', modalImageWidth:'85%',image:'assets/food-web.png', caption:'Food web illustrating trophic interactions among selected terrestrial organisms. Created by Amal Shahzad, 2026. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>. Animal silhouettes sourced from <a href="https://www.phylopic.org/" target="_blank" rel="noopener">PhyloPic</a> (<a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener">CC0 1.0 Universal</a>).', figureType:'Diagram', functionPurpose:'Organizational', topic:'Ecology', tags:['Food Web','Diagram','Organizational','Ecology']},
  {id:7, title:'Muscle Contraction', href:'#', thumbnail:'assets/muscle-contraction-thumb.png', figureType:'Diagram', functionPurpose:'Explanatory', topic:'Physiology', tags:['Muscle Contraction','Diagram','Explanatory','Physiology'], image:'assets/muscle-contraction-thumb.png', modalImageWidth:'70%', caption:'Muscle contraction mechanism. DataBase Center for Life Science (DBCLS), <em>Mechanism of skeletal muscle contraction</em>, 2021. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>.'},
  {id:8, title:'Negative Feedback Loop', href:'#', thumbnail:'assets/Negative-Feedback-Loops.png', image:'assets/Negative-Feedback-Loops2.png', caption:'Negative feedback loop regulating body temperature homeostasis. OpenStax, <em>Negative Feedback Loops</em>, 2016. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.', figureType:'Diagram', functionPurpose:'Explanatory', topic:'Physiology', tags:['Negative Feedback Loop','Diagram','Explanatory','Physiology','Feedback Loops']},
  {id:9, title:'Positive Feedback Loop', href:'#', thumbnail:'assets/Pregnancy-Positive-Feedback.png', image:'assets/Pregnancy-Positive-Feedback.png', caption:'Positive feedback loop driving childbirth. OpenStax, <em>Pregnancy: Positive Feedback</em>, 2016. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>.', figureType:'Diagram', functionPurpose:'Explanatory', topic:'Physiology', tags:['Positive Feedback Loop','Diagram','Explanatory','Physiology','Feedback Loops']},
  {
    id:10,
    title:'Calcium Homeostasis',
    href:'#',
    thumbnail:'assets/calcium-homeostasis.png',
    image:'assets/calcium-homeostasis.png',
    modalImageWidth:'86%',
    caption:'Calcium homeostasis regulation pathway. OpenStax College, <em>625 Calcium Homeostasis</em>, 2013. Licensed under <a href="https://creativecommons.org/licenses/by/3.0/deed.en" target="_blank" rel="noopener">CC BY 3.0</a>.',
    figureType:'Diagram',
    functionPurpose:'Explanatory',
    topic:'Physiology',
    tags:['Calcium Homeostasis','Diagram','Explanatory','Physiology','Calcium'],
    modalContent:{
      whatIsThis:'This is a diagram illustrating calcium homeostasis, a fundamental regulatory mechanism in maintaining healthy calcium levels in the body.',
      howToUnderstand:[
        'Step 1 - Notice how this diagram is divided into two main sections, which represent deviations from the normal calcium level of 10 mg/dL (the baseline separating the two):',
        '• The top half describes the pathway to regulate increased Ca²⁺ levels (+10 mg/dL).',
        '• The bottom half describes the pathway to regulate decreased Ca²⁺ levels (-10 mg/dL).',
        'Step 2 - Start from either pathway in the middle. For example, if I start from “decreased Ca²⁺ level” in the middle, my next step is to follow the thick, hot pink arrow that points to the light orange box. This arrow may be interpreted as a signal response to return calcium levels to homeostasis when a change is observed.',
        'Step 3 - Then, follow the thinner black arrow, which points to another set of boxes. These arrows represent how one step triggers the next step. In our example, the release of PTH causes a chain reaction of calcium absorption in the kidneys and small intestine.',
        'Step 4 - Another black arrow coming from the set of boxes points to another box that describes the final event in the regulatory pathway. In our example, the arrow shows how the release of calcium and its subsequent absorption/reabsorption increases Ca²⁺ level in blood until it is returned to homeostasis or the normal level.'
      ],
      quickFacts:[
        'Thick and pink arrows symbolize signaling responses.',
        'Thin and black arrows symbolize how one step triggers the next step.'
      ],
      misconceptionTitle:'"The decrease in Ca²⁺ reabsorption in the kidneys causes the Ca²⁺ level in blood to decrease."',
      misconceptionWrongHtml:'<strong>WRONG!</strong> Both osteoclast activity inhibition and a decrease in Ca²⁺ reabsorption in kidneys are responsible.',
      misconceptionDetail:'The black arrow pointing from "Ca²⁺ reabsorption in the kidneys decreases" to "Ca²⁺ level in blood decreases" might cause this confusion. Remember that the arrow symbolizes that BOTH mechanisms contribute to reduction in Ca²⁺ in blood.'
    }
  }
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
      img.style.maxWidth = '94%';
      img.style.maxHeight = '94%';
      img.style.width = 'auto';
      img.style.height = 'auto';
      img.style.objectFit = 'contain';
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

// Contact form submit

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e)=>{
  // Let Formspree handle the submission
  // Form will be submitted normally via POST to Formspree endpoint
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
  modalImage.style.width = figure.modalImageWidth || '';

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
  
  // Inject hotspots for figures with configured annotations
  if (hotspotConfigs[String(figureId)]) {
    setTimeout(() => {
      injectHotspots(figureId);
    }, 50);
  }
}

function closeModal() {
  // Clean up hotspots
  removeHotspots();
  document.removeEventListener('click', handleOutsideClick);
  
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

// =========================
// Interactive Hotspot System
// =========================

let activeHotspot = null;

const hotspotConfigs = {
  '1': {
    overlays: [
      { className: 'bargraph-errorbar-highlight', key: 'errorbar-first' }
    ],
    hotspots: [
      {
        className: 'bargraph-errorbar-hotspot',
        key: 'errorbar-first',
        title: 'Error Bar',
        text: 'a line on a graph that shows how much the measured value might vary.'
      }
    ]
  },
  '3': {
    overlays: [
      { className: 'scatter-bestfit-highlight', key: 'line-best-fit' }
    ],
    hotspots: [
      {
        className: 'scatter-bestfit-hotspot',
        key: 'line-best-fit',
        title: 'Line of Best Fit',
        text: 'a straight line drawn on a graph that shows the overall trend or relationship between the data points.'
      }
    ]
  },
  '5': {
    overlays: [
      { className: 'clade-highlight', key: 'clade' },
      { className: 'outgroup-highlight', key: 'outgroup' }
    ],
    hotspots: [
      {
        className: 'clade-hotspot',
        key: 'clade',
        title: 'Clade',
        text: 'A clade is a group of organisms that includes a common ancestor and all of its descendants.'
      },
      {
        className: 'outgroup-hotspot',
        key: 'outgroup',
        title: 'Outgroup',
        text: 'An outgroup is a lineage outside the focal group used as a reference for comparison.'
      }
    ]
  },
  '7': {
    overlays: [
      { className: 'myosin-head-highlight', key: 'myosin-head' },
      { className: 'actin-highlight', key: 'actin' },
      { className: 'myosin-highlight', key: 'myosin' }
    ],
    hotspots: [
      {
        key: 'myosin-head',
        title: 'Myosin Head',
        text: 'The myosin head binds to actin and generates force during the power stroke.',
        top: '7%',
        left: '40%'
      },
      {
        key: 'actin',
        title: 'Actin',
        text: 'Actin is the thin filament that myosin binds and pulls to produce contraction.',
        top: '1.5%',
        left: '67%'
      },
      {
        key: 'myosin',
        title: 'Myosin',
        text: 'Myosin is the motor protein on the thick filament that converts ATP energy into movement.',
        top: '14%',
        left: '67%'
      }
    ]
  },
  '10': {
    overlays: [
      { className: 'calcium-pink-arrow-highlight', key: 'pink-arrow' },
      { className: 'calcium-black-arrow-highlight', key: 'black-arrow' }
    ],
    hotspots: [
      {
        className: 'calcium-pink-arrow-hotspot',
        key: 'pink-arrow',
        title: 'Pink Arrow',
        text: 'This arrow marks a regulatory signal that triggers the body to correct a calcium imbalance.'
      },
      {
        className: 'calcium-black-arrow-hotspot',
        key: 'black-arrow',
        title: 'Black Arrow',
        text: 'This arrow traces the step-by-step cause-and-effect flow through the pathway.'
      }
    ]
  }
};

function createHotspotHTML(figureId) {
  const config = hotspotConfigs[String(figureId)];
  if (!config) return '';

  const overlaysHTML = config.overlays
    .map(overlay => `<div class="highlight-overlay ${overlay.className}" data-highlight="${overlay.key}"></div>`)
    .join('');

  const hotspotsHTML = config.hotspots
    .map(hotspot => {
      const className = hotspot.className ? ` ${hotspot.className}` : '';
      const positionStyle = hotspot.top && hotspot.left ? ` style="top:${hotspot.top}; left:${hotspot.left};"` : '';
      return `
        <div class="hotspot${className}" data-hotspot="${hotspot.key}"${positionStyle}>
          <button class="hotspot-dot" aria-label="${hotspot.title} information"></button>
          <div class="hotspot-info">
            <strong>${hotspot.title}</strong>
            <p>${hotspot.text}</p>
          </div>
        </div>
      `;
    })
    .join('');

  return `${overlaysHTML}${hotspotsHTML}`;
}

function injectHotspots(figureId) {
  if (!hotspotConfigs[String(figureId)]) return;

  // Check if hotspots already exist
  const existingContainer = modalImage.parentElement.querySelector('.figure-container');
  if (existingContainer) {
    return; // Hotspots already injected
  }

  // Wrap the image in a figure-container
  const container = document.createElement('div');
  container.className = 'figure-container';
  
  // Insert hotspot HTML
  container.innerHTML = createHotspotHTML(figureId);
  
  // Move the image into the container
  modalImage.parentElement.insertBefore(container, modalImage);
  container.insertBefore(modalImage, container.firstChild);
  
  // Setup event listeners
  setupHotspotListeners(container);
}

function removeHotspots() {
  const container = document.querySelector('.figure-modal-imagebox .figure-container');
  if (!container) return;
  
  // Move image back out
  const parent = container.parentElement;
  parent.insertBefore(modalImage, container);
  
  // Remove container
  container.remove();
  
  activeHotspot = null;
}

function setupHotspotListeners(container) {
  const hotspots = container.querySelectorAll('.hotspot');
  const highlights = container.querySelectorAll('.highlight-overlay');
  
  hotspots.forEach(hotspot => {
    const button = hotspot.querySelector('.hotspot-dot');
    const hotspotType = hotspot.getAttribute('data-hotspot');
    
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // Toggle this hotspot
      if (activeHotspot === hotspot) {
        deactivateHotspot(hotspot);
        deactivateHighlight(hotspotType, highlights);
        activeHotspot = null;
      } else {
        // Deactivate previous hotspot
        if (activeHotspot) {
          const prevType = activeHotspot.getAttribute('data-hotspot');
          deactivateHotspot(activeHotspot);
          deactivateHighlight(prevType, highlights);
        }
        
        // Activate new hotspot
        activateHotspot(hotspot);
        activateHighlight(hotspotType, highlights);
        activeHotspot = hotspot;
      }
    });
  });
  
  // Close hotspots when clicking outside
  document.addEventListener('click', handleOutsideClick);
}

function handleOutsideClick(e) {
  if (!activeHotspot) return;
  
  // Don't close if clicking inside a hotspot
  if (e.target.closest('.hotspot')) return;
  
  const hotspotType = activeHotspot.getAttribute('data-hotspot');
  const container = document.querySelector('.figure-modal-imagebox .figure-container');
  const highlights = container ? container.querySelectorAll('.highlight-overlay') : [];
  
  deactivateHotspot(activeHotspot);
  deactivateHighlight(hotspotType, highlights);
  activeHotspot = null;
}

function activateHotspot(hotspot) {
  hotspot.classList.add('active');
}

function deactivateHotspot(hotspot) {
  hotspot.classList.remove('active');
}

function activateHighlight(type, highlights) {
  highlights.forEach(highlight => {
    if (highlight.getAttribute('data-highlight') === type) {
      highlight.classList.add('active');
    }
  });
}

function deactivateHighlight(type, highlights) {
  highlights.forEach(highlight => {
    if (highlight.getAttribute('data-highlight') === type) {
      highlight.classList.remove('active');
    }
  });
}
