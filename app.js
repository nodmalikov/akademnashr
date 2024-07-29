const elSitenavWrapper = document.querySelector('.sitenav-wrapper');
const elMneuToggleBtn = document.querySelector('.toggle-btn');
const elHeader = document.querySelector('.header');
const elMainContent = document.querySelector('.main');

// FUNCTION TO UPDATE MAIN CONTENT'S MARGIN-TOP BASED ON HEADER'S HEIGHT
function updateMainContentMargin() {
    const headerHeight = elHeader.offsetHeight;
    elMainContent.style.marginTop = `${headerHeight}px`;
}

// UPDATE MAIN CONTENT'S MARGIN INITIALLY
updateMainContentMargin();

if (elMneuToggleBtn) {
    elMneuToggleBtn.addEventListener('click', function () {
        elSitenavWrapper.classList.toggle('menu-open');
        // UPDATE MAIN CONTENT'S MARGIN AFTER TOGGLING THE MENU
        updateMainContentMargin();
    });
}

// OPTIONAL: UPDATE MAIN CONTENT'S MARGIN IF THE HEADER'S HEIGHT CHANGES DYNAMICALLY
new ResizeObserver(updateMainContentMargin).observe(elHeader);
