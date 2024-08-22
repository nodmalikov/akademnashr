const elSitenavWrapper = document.querySelector('.sitenav-wrapper');
const elMenuToggleBtn = document.querySelector('.toggle-btn');
const elHeader = document.querySelector('.header');
const elsSitenavItem = document.querySelectorAll('.sitenav-item');
const elMainContent = document.querySelector('.main');

// FUNCTION TO UPDATE MAIN CONTENT'S MARGIN-TOP BASED ON HEADER'S HEIGHT
function updateMainContentMargin() {
    const headerHeight = elHeader.offsetHeight;
    elMainContent.style.marginTop = `${headerHeight}px`;
}

// UPDATE MAIN CONTENT'S MARGIN INITIALLY
updateMainContentMargin();

if (elMenuToggleBtn) {
    elMenuToggleBtn.addEventListener('click', function () {
        elSitenavWrapper.classList.toggle('menu-open');
        // UPDATE MAIN CONTENT'S MARGIN AFTER TOGGLING THE MENU
        updateMainContentMargin();
    });
}

elsSitenavItem.forEach(function (elSitenavItem) {
    elSitenavItem.addEventListener('click', function () {
        // REMOVE THE 'BORDER-ACTIVE' CLASS FROM ALL ITEMS
        elsSitenavItem.forEach(function (item) {
            item.classList.remove('border-active');
        });
        // ADD THE 'BORDER-ACTIVE' CLASS TO THE CLICKED ITEM
        elSitenavItem.classList.add('border-active');
        elSitenavWrapper.classList.remove('menu-open');
    });
});

// REMOVE MENU-OPEN CLASS WHEN CLICKING OUTSIDE THE HEADER
document.addEventListener('click', function (event) {
    if (!elHeader.contains(event.target)) {
        elSitenavWrapper.classList.remove('menu-open');
    }
});

// OPTIONAL: UPDATE MAIN CONTENT'S MARGIN IF THE HEADER'S HEIGHT CHANGES DYNAMICALLY
new ResizeObserver(updateMainContentMargin).observe(elHeader);

// LOADER
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};