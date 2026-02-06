/* =========================================
   1. NAVIGATION & ROUTING SYSTEM
   ========================================= */

// Generic function to hide all sections and show the target one
function showSection(sectionId) {
    // 1. Get all elements marked as a 'section-view'
    const sections = document.querySelectorAll('.section-view');
    
    // 2. Hide them all
    sections.forEach(sec => {
        sec.classList.add('hidden');
    });
    
    // 3. Find and show the specific target
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.remove('hidden');
        // Scroll to top instantly for a "new page" feel
        window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
        console.error(`Target section "${sectionId}" not found.`);
    }
}

// Helper to open specific sub-destinations (e.g., clicking 'Varkala' card)
function openDestination(placeName) {
    // Converts 'varkala' -> 'varkala-detail'
    const detailId = placeName + '-detail';
    showSection(detailId);
}

/* =========================================
   2. TAB SYSTEM (Plan / Food / Budget)
   ========================================= */

function openTab(tabId) {
    // 1. Find the parent container of the clicked button
    // This ensures we only switch tabs inside the current visible section
    // (We use event.currentTarget to find the button that was clicked)
    let context = document; 
    
    // OPTIONAL: If you want to limit search to the current active section, 
    // but global search is usually fine for simple sites.
    
    // 2. Hide ALL tab contents globally (simplest approach)
    const allContents = document.querySelectorAll('.tab-content');
    allContents.forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('block');
    });

    // 3. Reset ALL tab buttons to "inactive" state
    const allBtns = document.querySelectorAll('.tab-btn');
    allBtns.forEach(btn => {
        // Remove active teal branding
        btn.classList.remove('active-tab', 'text-brand-teal', 'border-brand-teal');
        // Add inactive gray style
        btn.classList.add('text-gray-400', 'border-transparent');
    });

    // 4. Show the specific content requested
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.classList.remove('hidden');
        targetContent.classList.add('block');
    }

    // 5. Highlight the button that was clicked
    if (event && event.currentTarget) {
        const btn = event.currentTarget;
        btn.classList.remove('text-gray-400', 'border-transparent');
        btn.classList.add('active-tab', 'text-brand-teal', 'border-brand-teal');
    }
}

/* =========================================
   3. INITIALIZATION
   ========================================= */
document.addEventListener('DOMContentLoaded', function() {
    console.log("Travel Blueprints: Core Systems Loaded.");
});