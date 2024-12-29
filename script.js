document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.querySelector('.card');
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    const typingText = document.querySelector('.typing-effect');
    const textArray = ['GDG On-Campus', 'PESCE'];
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typingText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            textIndex++;
            if (textIndex >= textArray.length) textIndex = 0;
            setTimeout(type, 1000);
        }
    }

    setTimeout(type, 1000);

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal functionality
    const contactLink = document.querySelector('a[href="#contact"]');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    document.body.appendChild(modalOverlay);

    // Show Modal
    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactModal.style.display = 'block';
        modalOverlay.style.display = 'block';
        contactModal.setAttribute('aria-hidden', 'false');
    });

    // Close Modal
    closeModal.addEventListener('click', () => {
        contactModal.style.display = 'none';
        modalOverlay.style.display = 'none';
        contactModal.setAttribute('aria-hidden', 'true');
    });

    // Close Modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            contactModal.style.display = 'none';
            modalOverlay.style.display = 'none';
            contactModal.setAttribute('aria-hidden', 'true');
        }
    });

});
function submit(){
    alert("Thank you for your response. We will get back to you soon.");
}
document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Add active class to clicked tab and corresponding content
            tab.classList.add("active");
            document.getElementById(tab.dataset.tab).classList.add("active");
        });
    });
});
