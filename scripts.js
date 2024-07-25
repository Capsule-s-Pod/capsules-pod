document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-link');
    const contents = document.querySelectorAll('.tab-content');
    const underline = document.querySelector('.underline');

    const setActiveTab = (tab) => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        contents.forEach(content => {
            if (content.id === tab.dataset.tab) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        const tabRect = tab.getBoundingClientRect();
        const navRect = tab.closest('nav').getBoundingClientRect();
        
        underline.style.width = `${tabRect.width}px`;
        underline.style.left = `${tabRect.left - navRect.left}px`;
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveTab(tab);
        });
    });

    // Set initial underline position
    const activeTab = document.querySelector('.nav-link.active');
    if (activeTab) {
        setActiveTab(activeTab);
    }
});

// Zoom functionality
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        document.body.appendChild(modal);

        const closeModal = () => {
            modal.remove();
        };

        modal.querySelector('.close').addEventListener('click', closeModal);
        modal.addEventListener('click', e => {
            if (e.target === modal) closeModal();
        });
    });
});
