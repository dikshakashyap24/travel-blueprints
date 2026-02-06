// This function handles switching between pages
function showSection(sectionId) {
    // 1. Get all elements with the class 'section-view'
    const sections = document.querySelectorAll('.section-view');
    
    // 2. Hide all of them
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // 3. Show only the one we clicked
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Special function for opening specific destination details
function openDestination(placeName) {
    // For now, we only have a placeholder for Varkala
    // In the next step, we will create specific IDs for 'alleppey-detail' and 'kochi-detail'
    
    const detailId = placeName + '-detail'; // e.g., 'varkala-detail'
    
    // Check if that section exists in HTML
    if (document.getElementById(detailId)) {
        showSection(detailId);
    } else {
        alert("Coming Soon! We are building " + placeName + " next.");
    }
}

/* --- TAB LOGIC --- */
function openTab(tabName) {
    // 1. Hide all tab contents
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.add('hidden'));
    contents.forEach(content => content.classList.remove('block')); // Tailwind fix

    // 2. Remove 'active' style from all buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('text-brand-teal', 'border-brand-teal');
        btn.classList.add('text-gray-500', 'border-transparent');
    });

    // 3. Show the selected tab content
    document.getElementById(tabName).classList.remove('hidden');
    document.getElementById(tabName).classList.add('block');

    // 4. Highlight the clicked button
    // (We find the button by the onclick attribute because we didn't give them IDs)
    // A simpler way: The button that called this function is passed as 'event.target'
    event.currentTarget.classList.remove('text-gray-500', 'border-transparent');
    event.currentTarget.classList.add('text-brand-teal', 'border-brand-teal');
}

/* --- BUDGET CALCULATOR LOGIC --- */
// We store current values in an object so we can sum them easily
let budgetValues = {
    hotel: 4000,
    food: 3000,
    transport: 1200
};

function updateBudget(category, value) {
    // 1. Update the stored value
    budgetValues[category] = parseInt(value);
    
    // 2. Update the number shown next to the slider
    document.getElementById('val-' + category).innerText = value;
    
    // 3. Calculate Total
    const total = budgetValues.hotel + budgetValues.food + budgetValues.transport;
    
    // 4. Update the Big Total
    document.getElementById('total-budget').innerText = total;
}