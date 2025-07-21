let currentOpen = -1;

function toggleAccordion(index) {
    const content = document.getElementById(`accordion-${index}`);
    const icon = content.previousElementSibling.querySelector('.accordion-icon');

    // If clicking on the currently open accordion, close it
    if (currentOpen === index) {
        content.classList.remove('active');
        icon.classList.remove('rotate');
        currentOpen = -1;
        return;
    }

    // Close currently open accordion if any
    if (currentOpen !== -1) {
        const currentContent = document.getElementById(`accordion-${currentOpen}`);
        const currentIcon = currentContent.previousElementSibling.querySelector('.accordion-icon');
        currentContent.classList.remove('active');
        currentIcon.classList.remove('rotate');
    }

    // Open clicked accordion
    content.classList.add('active');
    icon.classList.add('rotate');
    currentOpen = index;
}