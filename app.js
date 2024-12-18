const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('#nav-menu')

// Event listener for 'click' on hamburger menu.
// - Toggles 'active' class for #mobile-menu and #nav-menu.
menu.addEventListener('click', function () {
    menu.classList.toggle('active')
    menuLinks.classList.toggle('active');
});


// Event listener for 'resize' on window.
// - Mobile range is between 0-992 pixels. When window is out of range, #mobile-menu and #nav-menu are no longer
// - expanded.
window.addEventListener('resize', function() {
    if (window.innerWidth > 992) {
        // Remove active classes
        menu?.classList.remove('active');
        menuLinks?.classList.remove('active');

    }
});

const resumeBtn = document.querySelector('#resume-button');
// Event listener for 'click' on resume button.
// - Opens a separate window for Resume pdf when #resume-button is clicked.
resumeBtn.addEventListener('click', () => {
    // Path to PDF file
    const pdfUrl = '/Resume.pdf';
    window.open(pdfUrl, '_blank');
});


const tabs = document.querySelectorAll('.selected-tab')
// Event listener for each mock window in #projects section to allow user to toggle mock window.
// - On click of .selected-tab, if the tab is .hidden then toggle the .hidden class for all
// - elements of both windows. Hidden window will become visible and visible window will become .hidden.
tabs.forEach(tab => {
    tab.addEventListener('click', function () {
        if (tab.classList.contains('hidden')) {
            document.querySelectorAll('.tab,.selected-tab,.content,.nav-url,.description-written')
                .forEach(property => {
                    property.classList.toggle('hidden');})
        }
    })
});


const navURLs = document.querySelectorAll('.nav-url');
const toast = document.querySelector('#toast');
// Event listener for each url in the mock windows to allow user to copy url to clipboard.
// - On click of .nav-url, the url gets copied onto user's clipboard and a message appears on the screen indicating this.
// - Message disappears after 2 seconds.
navURLs.forEach(url => {
    url.addEventListener('click', function () {
        navigator.clipboard.writeText(url.textContent)
            .then(() => {
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            });
    })
});














