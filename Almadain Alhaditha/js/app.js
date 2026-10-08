/* JavaScript Logic for المدائن الحديثة للمقاولات والديكور - جازان */

document.addEventListener('DOMContentLoaded', () => {
    // Setup scroll spy for navigation active state
    setupScrollSpy();
});

// Mobile Hamburger Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        menu.classList.add('hidden');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
}

// Portfolio Filter Tabs Functionality
function filterPortfolio(category) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.portfolio-item');
    
    // Highlight active filter button
    filterBtns.forEach(btn => {
        btn.classList.remove('active', 'bg-amber-600', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-700');
    });

    // Find clicked button and style as active
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active', 'bg-amber-600', 'text-white');
        event.currentTarget.classList.remove('bg-slate-100', 'text-slate-700');
    }

    // Show/Hide portfolio cards based on category
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.remove('hidden-item');
            item.style.display = 'block';
        } else {
            item.classList.add('hidden-item');
            setTimeout(() => {
                if (item.classList.contains('hidden-item')) {
                    item.style.display = 'none';
                }
            }, 300);
        }
    });
}

// WhatsApp Selector Modal Controls
function openWhatsAppModal() {
    const modal = document.getElementById('whatsapp-modal');
    modal.classList.remove('hidden');
}

function closeWhatsAppModal() {
    const modal = document.getElementById('whatsapp-modal');
    modal.classList.add('hidden');
}

// Service Inquiry Modal Controls
let currentSelectedService = '';
function openServiceModal(serviceTitle) {
    currentSelectedService = serviceTitle;
    const modal = document.getElementById('service-modal');
    const titleEl = document.getElementById('modal-service-title');
    const descEl = document.getElementById('modal-service-desc');

    titleEl.innerText = serviceTitle;

    const serviceDescriptions = {
        'ترميم وتشطيب': 'خدمات متكاملة تشمل ترميم المباني السكنية والتجارية بجازان، تشطيبات مودرن ولوكس، دهانات، سباكة، كهرباء، وعزل أسطح بضمان شامل.',
        'هناجر ومستودعات': 'تصميم وتنفيذ الهناجر والمستودعات التجارية والصناعية والمخازن الاستراتيجية بجازان وفق المواصفات القياسية والهياكل الحديدية المتينة.',
        'أعمال عظم': 'بناء العظم للعمائر والفلل والمجمعات السكنية والتجارية مع الصبات الخرسانية والقواعد وتركيب المباني والأسوار بدقة هندسية عالية.',
        'ديكورات': 'تصميم وتصنيع وتنفيذ أرقى الديكورات الداخلية والخارجية، الجبس بورد، بديل الخشب، بديل الرخام، والإضاءة الحديثة لمختلف المساحات.'
    };

    descEl.innerText = serviceDescriptions[serviceTitle] || 'نقدم أعلى مستويات الجودة والاحترافية في التنفيذ بجازان.';
    modal.classList.remove('hidden');
}

function closeServiceModal() {
    document.getElementById('service-modal').classList.add('hidden');
}

function sendServiceInquiryToWhatsApp(phoneNum) {
    const text = encodeURIComponent(`السلام عليكم، أرغب في الاستفسار عن تفاصيل ومقايسة خدمة: [${currentSelectedService}] في جازان.`);
    window.open(`https://wa.me/966${phoneNum.substring(1)}?text=${text}`, '_blank');
    closeServiceModal();
}

// Portfolio Image Lightbox Modal
function openLightbox(title, category, imgUrl, desc) {
    const modal = document.getElementById('lightbox-modal');
    document.getElementById('lightbox-img').src = imgUrl;
    document.getElementById('lightbox-title').innerText = title;
    document.getElementById('lightbox-badge').innerText = category;
    document.getElementById('lightbox-desc').innerText = desc;

    const waBtn = document.getElementById('lightbox-whatsapp-btn');
    waBtn.onclick = function() {
        const message = encodeURIComponent(`السلام عليكم، أود استفساركم بخصوص تنفيذ مشروع مماثل لمشروع: (${title}) - قسم ${category} بجازان.`);
        window.open(`https://wa.me/966545290331?text=${message}`, '_blank');
    };

    modal.classList.remove('hidden');
}

function closeLightbox() {
    document.getElementById('lightbox-modal').classList.add('hidden');
}

function openWhatsAppForProject(projectName) {
    const text = encodeURIComponent(`السلام عليكم، أود الاستفسار والتواصل بخصوص مشروع: (${projectName}) الموضّح في معرض أعمالكم.`);
    window.open(`https://wa.me/966545290331?text=${text}`, '_blank');
}

// Toast notification display
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').innerText = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}

// Scroll Spy setup to highlight active navbar section
function setupScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active-nav');
            }
        });
    });
}
