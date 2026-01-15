/* ============================================
   MINDEASE APPLICATION LOGIC
   Botpress Web SDK integration and page interactivity
   ============================================ */

// ========== SCROLL TO SECTION ==========
// Smooth scroll to different sections of the page
// (Defined early so onclick handlers can access it)
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ========== HANDLE SIGNUP ==========
// Demo signup action
function handleSignup() {
    alert('Thanks for your interest! The full MindEase app will be available soon. 💙\n\nStay tuned for updates!');
}

// ========== PAGE INITIALIZATION ==========
// Focus management when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('✨ MindEase app loaded with Botpress Web SDK!');
});
