// Sayfa yüklendiğinde aktif sekmeyi ayarla
document.addEventListener('DOMContentLoaded', function() {
    const activeTab = document.querySelector('.tab-link.active');
    loadPageContent(activeTab.getAttribute('data-target'));
});

// Sekmeye tıklanma olayını dinle
const tabs = document.querySelectorAll('.tab-link');
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Sekmeleri güncelle
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        // İlgili sayfa içeriğini yükle
        loadPageContent(this.getAttribute('data-target'));
    });
});

// Sayfa içeriğini iframe ile yükle
function loadPageContent(page) {
    const iframe = document.querySelector('.tab-content iframe');
    iframe.src = `pages/${page}`;
}