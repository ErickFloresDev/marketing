function scrollToFeatures() {
    const featuresSection = document.getElementById('Features');
    if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
}