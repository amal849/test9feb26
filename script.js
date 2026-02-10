// Data for each gallery item with detailed information
const itemData = {
    0: {
        title: "Ecosystem Flow",
        tags: ["Ecology", "Diagram", "Organizational"],
        description: "This diagram illustrates the flow of energy and nutrients through an ecosystem, from producers to consumers and decomposers. It shows the interconnected relationships between different organisms.",
        steps: [
            "Producers (plants) capture energy from the sun",
            "Primary consumers (herbivores) eat the producers",
            "Secondary consumers (carnivores) eat the primary consumers",
            "Decomposers break down dead organisms and return nutrients to the soil",
            "Energy and nutrients cycle back to producers"
        ],
        quickFacts: [
            "Energy flows in one direction through an ecosystem",
            "Only about 10% of energy transfers between trophic levels",
            "Nutrients cycle repeatedly through ecosystems",
            "Biodiversity increases ecosystem stability"
        ],
        misconception: "All organisms lose the same amount of energy at each trophic level.",
        correction: "Each trophic level retains only about 10% of the energy from the previous level, with the rest used for metabolism and heat."
    },
    1: {
        title: "Muscle Contraction",
        tags: ["Physiology", "Diagram", "Explanatory"],
        description: "This diagram shows the cross-bridge cycle of muscle contraction, which is the fundamental mechanism by which muscles generate force. The interaction between actin and myosin filaments creates the sliding motion.",
        steps: [
            "Myosin head attaches to the actin filament",
            "ATP binds to the myosin head, causing it to release from actin",
            "ATP is hydrolyzed, providing energy to recock the myosin head",
            "Myosin head pivots, pulling the actin filament forward (power stroke)",
            "The cycle repeats as long as ATP and calcium are available"
        ],
        quickFacts: [
            "ATP binding causes detachment of myosin from actin",
            "Calcium is essential for muscle contraction",
            "One muscle cell can contain millions of myofibrils",
            "Muscle fatigue occurs when ATP supplies are depleted"
        ],
        misconception: "The release of ADP causes the power stroke.",
        correction: "ADP and phosphate release together after the power stroke occurs. ATP binding to the myosin head is what causes the initial detachment from actin."
    },
    2: {
        title: "DNA Structure",
        tags: ["Genetics", "Diagram", "Organizational"],
        description: "The double helix structure of DNA showing the sugar-phosphate backbone and nitrogenous base pairs. This structure was elucidated by Watson and Crick and is fundamental to understanding heredity.",
        steps: [
            "Two strands of DNA wrap around each other in a double helix",
            "Deoxyribose sugar and phosphate groups form the backbone",
            "Nitrogenous bases (A, T, G, C) pair specifically: A with T, G with C",
            "Hydrogen bonds between base pairs hold the strands together",
            "The structure allows for semi-conservative replication"
        ],
        quickFacts: [
            "DNA is approximately 2 nanometers in diameter",
            "The human genome contains about 3 billion base pairs",
            "Adenine pairs with thymine (2 hydrogen bonds)",
            "Guanine pairs with cytosine (3 hydrogen bonds)"
        ],
        misconception: "Both DNA strands read in the same direction.",
        correction: "DNA strands are antiparallel - one runs 5' to 3' while the other runs 3' to 5'."
    },
    3: {
        title: "Cell Structure",
        tags: ["Cell Biology", "Diagram", "Illustrative"],
        description: "An overview of eukaryotic cell structures and their functions. Shows the nucleus, mitochondria, endoplasmic reticulum, and other membrane-bound organelles.",
        steps: [
            "The nucleus contains DNA and controls cellular activities",
            "Mitochondria produce ATP through cellular respiration",
            "Rough ER synthesizes proteins with ribosomes",
            "Smooth ER synthesizes lipids and processes proteins",
            "The Golgi apparatus packages and modifies proteins"
        ],
        quickFacts: [
            "The nucleus contains most of the cell's DNA",
            "Mitochondria have their own DNA",
            "Lysosomes act as the cell's digestive system",
            "The endoplasmic reticulum is continuous with the nuclear envelope"
        ],
        misconception: "All cells have a nucleus.",
        correction: "Prokaryotic cells (bacteria) lack a nucleus. Only eukaryotic cells (animals, plants, fungi) have a membrane-bound nucleus."
    },
    4: {
        title: "Population Growth",
        tags: ["Ecology", "Graph", "Explanatory"],
        description: "This graph shows different models of population growth. The exponential model (J-curve) represents unlimited growth, while the logistic model (S-curve) represents growth limited by carrying capacity.",
        steps: [
            "Exponential growth occurs when resources are unlimited",
            "The population doubles at regular intervals in exponential growth",
            "Logistic growth begins exponentially but slows as resources become limited",
            "Carrying capacity is the maximum population size an environment can sustain",
            "At carrying capacity, birth rate equals death rate"
        ],
        quickFacts: [
            "Exponential growth is unsustainable in real environments",
            "Carrying capacity depends on available resources",
            "Most natural populations follow logistic growth",
            "Population growth rate varies with age structure"
        ],
        misconception: "Populations always grow if they have unlimited resources.",
        correction: "While resources are important, population growth is limited by multiple factors including disease, predation, and competition within the population."
    },
    5: {
        title: "Neural Pathways",
        tags: ["Physiology", "Diagram", "Organizational"],
        description: "Illustration of neural pathways showing how neurons communicate through synapses. Demonstrates the transmission of signals from one neuron to another via neurotransmitters.",
        steps: [
            "Action potential travels down the axon of the presynaptic neuron",
            "Voltage-gated calcium channels open at the axon terminal",
            "Synaptic vesicles containing neurotransmitters fuse with the membrane",
            "Neurotransmitters cross the synaptic cleft",
            "Receptors on the postsynaptic neuron bind neurotransmitters"
        ],
        quickFacts: [
            "Synaptic transmission is chemical in most neurons",
            "Neurotransmitters are removed from the synapse by reuptake",
            "Synaptic plasticity is the basis of learning and memory",
            "The brain contains approximately 86 billion neurons"
        ],
        misconception: "Neurons communicate directly through physical contact.",
        correction: "Neurons communicate through a gap called the synapse via chemical messengers (neurotransmitters), not through direct contact."
    },
    6: {
        title: "Forest Ecosystem",
        tags: ["Ecology", "Photo", "Illustrative"],
        description: "A photograph of a dense forest ecosystem showing the complexity of natural environments. Forests provide habitat for countless species and play a crucial role in carbon sequestration.",
        steps: [
            "Canopy layer blocks most sunlight",
            "Understory contains shade-tolerant plants",
            "Forest floor is covered with leaf litter and decomposing matter",
            "Soil organisms break down organic material",
            "Nutrients cycle between the soil and living organisms"
        ],
        quickFacts: [
            "Forests cover about 31% of Earth's land surface",
            "One large tree can supply 2 days of oxygen for one person",
            "Forests are home to 80% of terrestrial animal species",
            "Tropical forests contain the most biodiversity"
        ],
        misconception: "Rainforests have very fertile soil.",
        correction: "Rainforest soil is actually poor in nutrients because nutrients are tied up in vegetation. When forests are cleared, the soil rapidly becomes infertile."
    },
    7: {
        title: "Meiosis Process",
        tags: ["Genetics", "Diagram", "Explanatory"],
        description: "Detailed illustration of meiosis, the process that produces gametes (sex cells) with half the normal number of chromosomes. This process is essential for sexual reproduction.",
        steps: [
            "DNA replicates during interphase, creating sister chromatids",
            "Homologous chromosomes pair during prophase I (synapsis)",
            "Crossing over exchanges genetic material between homologous chromosomes",
            "Homologous chromosomes separate during meiosis I",
            "Sister chromatids separate during meiosis II",
            "Four haploid cells (gametes) are produced"
        ],
        quickFacts: [
            "Meiosis produces 4 haploid cells from 1 diploid cell",
            "Crossing over increases genetic diversity",
            "Independent assortment creates variation in gametes",
            "Meiosis is essential for sexual reproduction"
        ],
        misconception: "Meiosis produces cells identical to the parent cell.",
        correction: "Meiosis produces genetically unique gametes with half the chromosomes. Mitosis produces identical cells with the same chromosome number."
    }
};

// Filter state
let activeFilters = {
    figure: 'all',
    function: null,
    topic: null
};

// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryCards = document.querySelectorAll('.gallery-card');
const modal = document.getElementById('modal');
const modalClose = document.querySelector('.modal-close');
const clearFiltersBtn = document.querySelector('.clear-filters-btn');
const searchInput = document.getElementById('searchInput');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupFilterListeners();
    setupCardClickListeners();
    setupModalListeners();
    setupSearchListener();
});

function setupFilterListeners() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter-type');
            const filterValue = this.getAttribute('data-filter-value');

            // Remove active class from other buttons in the same group
            document.querySelectorAll(`[data-filter-type="${filterType}"]`).forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Update filter state
            if (filterValue === 'all') {
                activeFilters[filterType] = 'all';
            } else {
                activeFilters[filterType] = filterValue;
            }

            // Apply filters
            applyFilters();
        });
    });
}

function setupCardClickListeners() {
    galleryCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            openModal(index);
        });
    });
}

function setupModalListeners() {
    modalClose.addEventListener('click', closeModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function setupSearchListener() {
    searchInput.addEventListener('input', function() {
        applyFilters();
    });
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase();

    galleryCards.forEach(card => {
        const figure = card.getAttribute('data-figure');
        const func = card.getAttribute('data-function');
        const topic = card.getAttribute('data-topic');
        const title = card.querySelector('h3').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.toLowerCase());

        // Check figure filter
        const figurePassed = activeFilters.figure === 'all' || figure === activeFilters.figure;

        // Check function filter
        const functionPassed = activeFilters.function === null || func === activeFilters.function;

        // Check topic filter
        const topicPassed = activeFilters.topic === null || topic === activeFilters.topic;

        // Check search filter
        const searchPassed = searchTerm === '' || 
                           title.includes(searchTerm) || 
                           tags.some(tag => tag.includes(searchTerm));

        // Show or hide card
        if (figurePassed && functionPassed && topicPassed && searchPassed) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

function openModal(index) {
    const data = itemData[index];
    
    const card = galleryCards[index];
    const image = card.querySelector('img').src;

    // Set modal image
    document.getElementById('modalImage').src = image;

    // Set modal title and content
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;

    // Set tags
    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = data.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');

    // Set steps
    const stepsList = document.getElementById('modalSteps');
    stepsList.innerHTML = data.steps.map((step, i) => 
        `<li><strong>Step ${i + 1}:</strong> ${step}</li>`
    ).join('');

    // Set quick facts
    const quickFactsList = document.getElementById('quickFactsList');
    quickFactsList.innerHTML = data.quickFacts.map(fact => 
        `<li>${fact}</li>`
    ).join('');

    // Set misconception
    document.getElementById('misconceptionText').textContent = `"${data.misconception}"`;
    document.getElementById('misconceptionCorrection').innerHTML = `<strong>WRONG!</strong> ${data.correction}`;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

clearFiltersBtn.addEventListener('click', function() {
    // Reset filter state
    activeFilters = {
        figure: 'all',
        function: null,
        topic: null
    };

    // Reset UI
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter-value') === 'all') {
            btn.classList.add('active');
        }
    });

    // Clear search
    searchInput.value = '';

    // Apply filters
    applyFilters();
});
