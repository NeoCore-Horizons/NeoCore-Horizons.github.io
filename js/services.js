document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    
    // Update scroll progress and active section
    function updateScroll() {
        // Update progress bar
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / totalScroll) * 100;
        progressBar.style.width = `${progress}%`;
        
        // Update active section
        let currentSection = '';
        
        // Check header first
        const headerRect = header.getBoundingClientRect();
        if (headerRect.top >= -100 && headerRect.top <= window.innerHeight / 2) {
            currentSection = 'hero';
        }
        
        // Then check other sections
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
                currentSection = section.id;
            }
        });
        
        // Update active dot
        navDots.forEach(dot => {
            const section = dot.getAttribute('data-section');
            if (section === currentSection) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Smooth scroll to section
    function scrollToSection(sectionId) {
        const element = sectionId === 'hero' ? header : document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    // Add click event listeners to nav dots
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const section = dot.getAttribute('data-section');
            scrollToSection(section);
        });
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', updateScroll);
    
    // Initialize scroll position
    updateScroll();
    
    // Add intersection observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections and items that should animate
    document.querySelectorAll('.benefit-item, .process-step, .industry-item, .case-study').forEach(item => {
        observer.observe(item);
    });
});