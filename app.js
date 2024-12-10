const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('#nav-menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})


function resetMobileState() {
    if (window.innerWidth > 992) {
        // Remove active classes
        menu?.classList.remove('is-active');
        menuLinks?.classList.remove('active');

    }
}

// Add resize event listener
window.addEventListener('resize', resetMobileState);



const tab1 = document.querySelector('#fhillc-tab')
const tab2 = document.querySelector('#portfolio-tab')


tab1.addEventListener('click', function () {
    if (tab1.classList.contains('hidden')) {
        document.querySelectorAll('.tab, .selected-tab, .content, .nav-url, .description-written')
            .forEach(tab => {tab.classList.toggle('hidden');})
    }
})

tab2.addEventListener('click', function () {
    if (tab2.classList.contains('hidden')) {
        document.querySelectorAll('.tab, .selected-tab, .content, .nav-url, .description-written')
            .forEach(tab => {tab.classList.toggle('hidden');})
    }
})

const fhillcLINK = document.querySelector("#fhillc-url");
const portfolioLINK = document.querySelector("#portfolio-url");

const toast = document.getElementById('toast');

fhillcLINK.onclick = () => {
    navigator.clipboard.writeText(fhillcLINK.textContent)
        .then(() => {
            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        })
        .catch(err => {
            console.error('Copy failed', err);
        });
};

portfolioLINK.onclick = () => {
    navigator.clipboard.writeText(portfolioLINK.textContent)
        .then(() => {
            toast.classList.add('show');

            setTimeout(() => {
                toast.classList.remove('show');
            }, 2000);
        })
        .catch(err => {
            console.error('Copy failed', err);
        });
};

const resumeBtn = document.querySelector('#resume-button');

resumeBtn.addEventListener('click', () => {
    // Path to your PDF file
    const pdfUrl = '/Resume.pdf';

    // Detect mobile vs desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
        // On mobile: Open PDF in new tab
        window.open(pdfUrl, '_blank');
    } else {
        // On desktop: Offer download or view options
        const userChoice = confirm('How would you like to open the resume?\n\nOK = Download\nCancel = View in Browser');

        if (userChoice) {
            // Download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Resume.pdf';
            link.click();
        } else {
            // Open in new tab
            window.open(pdfUrl, '_blank');
        }
    }
});














