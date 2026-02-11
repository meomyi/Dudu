let currentLang = 'en';

const translations = {
    en: {
        menuAbout: "About Me",
        menuHobbies: "Hobbies",
        menuContact: "Contact Me",
        aboutText: "I’m a heart failure stage 3 patient, please be kind to me and pray for us all.",
        hobbyContent: "maybe sleeping",
        close: "Close",
        langBtn: "العربية"
    },
    ar: {
        menuAbout: "عني",
        menuHobbies: "هواياتي",
        menuContact: "تواصل معي",
        aboutText: "انا مريضه فشل قلب من المستوى 3، من فضلك كن لطيفًا لي، وادعي لنا جميعًا",
        hobbyContent: "ربما النوم",
        close: "إغلاق",
        langBtn: "English"
    }
};

function toggleMenu() {
    document.getElementById('sideMenu').classList.toggle('active');
}

function openPanel(id) {
    if(document.getElementById('sideMenu').classList.contains('active')) toggleMenu();
    document.getElementById(id).style.display = 'flex';
}

function closePanels() {
    document.querySelectorAll('.panel').forEach(p => p.style.display = 'none');
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    document.getElementById('menuAbout').innerText = translations[currentLang].menuAbout;
    document.getElementById('menuHobbies').innerText = translations[currentLang].menuHobbies;
    document.getElementById('menuContact').innerText = translations[currentLang].menuContact;
    document.getElementById('aboutText').innerText = translations[currentLang].aboutText;
    document.getElementById('hobbyContent').innerText = translations[currentLang].hobbyContent;
    document.getElementById('langBtn').innerText = translations[currentLang].langBtn;
    
    document.getElementById('closeBtn1').innerText = translations[currentLang].close;
    document.getElementById('closeBtn2').innerText = translations[currentLang].close;
}

// Close panels on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closePanels();
});

