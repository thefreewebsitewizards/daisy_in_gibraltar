// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 10) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }
});

function openModal(service) {
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('modalContent');
    let html = '';

    if (service === 'ugc') {
        html = `
            <i class="fas fa-video text-4xl mb-4" style="color:#FF23A1;"></i>
            <h3 class="text-xl font-bold mb-2 text-center">UGC Video Creation</h3>
            <p class="mb-4 text-center">Short-form, platform-optimised vertical videos for brands and creators.</p>
            <video controls class="w-[180px] h-[320px] object-cover rounded-xl bg-black mx-auto mb-4">
                <source src="your-tiktok-video1.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (service === 'photo') {
        html = `
            <i class="fas fa-camera text-4xl mb-4" style="color:#19E3E3;"></i>
            <h3 class="text-xl font-bold mb-2 text-center">Lifestyle & Family Photography</h3>
            <p class="mb-4 text-center">High-quality, brand-aligned imagery for campaigns and social media.</p>
            <div class="w-full max-w-[400px] mx-auto overflow-x-auto pb-2">
                <div class="flex gap-4" style="width: max-content;">
                    <img src="photo1.jpg" alt="Family Photo 1" class="w-[180px] h-[320px] object-cover rounded-xl bg-gray-100 flex-shrink-0">
                    <img src="photo2.jpg" alt="Family Photo 2" class="w-[180px] h-[320px] object-cover rounded-xl bg-gray-100 flex-shrink-0">
                    <img src="photo3.jpg" alt="Family Photo 3" class="w-[180px] h-[320px] object-cover rounded-xl bg-gray-100 flex-shrink-0">
                    <img src="photo4.jpg" alt="Family Photo 4" class="w-[180px] h-[320px] object-cover rounded-xl bg-gray-100 flex-shrink-0">
                </div>
            </div>
        `;
    } else if (service === 'review') {
        html = `
            <i class="fas fa-star text-4xl mb-4" style="color:#FF23A1;"></i>
            <h3 class="text-xl font-bold mb-2 text-center">Product Reviews & Tutorials</h3>
            <p class="mb-4 text-center">Honest and engaging storytelling for products and brands.</p>
            <video controls class="w-[180px] h-[320px] object-cover rounded-xl bg-black mx-auto mb-4">
                <source src="product-review.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (service === 'travel') {
        html = `
            <i class="fas fa-plane text-4xl mb-4" style="color:#FFE03A;"></i>
            <h3 class="text-xl font-bold mb-2 text-center">Travel & Destination Features</h3>
            <p class="mb-4 text-center">Showcasing hotels, experiences, and activities with a family-friendly lens.</p>
            <video controls class="w-[180px] h-[320px] object-cover rounded-xl bg-black mx-auto mb-4">
                <source src="travel-feature.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (service === 'fashion') {
        html = `
            <i class="fas fa-tshirt text-4xl mb-4" style="color:#19E3E3;"></i>
            <h3 class="text-xl font-bold mb-2 text-center">Fashion & Styling Content</h3>
            <p class="mb-4 text-center">Looks and styling ideas that inspire families and brands.</p>
            <video controls class="w-[180px] h-[320px] object-cover rounded-xl bg-black mx-auto mb-4">
                <source src="fashion-content.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    }
    content.innerHTML = html;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('serviceModal');
    
    // Pause and mute any playing videos in the modal
    const videos = modal.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.muted = true;
        video.currentTime = 0;
    });
    
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Portfolio video zoom functionality
function openVideoModal(videoSrc, title, description) {
    const modal = document.getElementById('serviceModal');
    const content = document.getElementById('modalContent');
    
    const html = `
        <div class="text-center">
            <h3 class="text-xl font-bold mb-4 text-center">${title}</h3>
            <video controls autoplay class="w-full max-w-[300px] h-[500px] object-cover rounded-xl bg-black mx-auto mb-4">
                <source src="${videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <p class="text-gray-600 text-center">${description}</p>
        </div>
    `;
    
    content.innerHTML = html;
    
    // Ensure the video is unmuted when modal opens
    setTimeout(() => {
        const video = modal.querySelector('video');
        if (video) {
            video.muted = false;
        }
    }, 100);
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Make sure this runs after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Allow modal to close when clicking outside the modal content
    document.getElementById('serviceModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // Also allow modal to close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape") closeModal();
    });
    
    // Add click event listeners to portfolio cards
    const portfolioCards = document.querySelectorAll('#portfolio .rounded-2xl');
    portfolioCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        
        function openCardModal() {
            const video = card.querySelector('video source');
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('p').textContent;
            const videoSrc = video.getAttribute('src');
            
            openVideoModal(videoSrc, title, description);
        }
        
        card.addEventListener('click', function(e) {
            openCardModal();
        });
        
        // Make video clicks also trigger the modal
        const videoElement = card.querySelector('video');
        if (videoElement) {
            videoElement.addEventListener('click', function(e) {
                e.preventDefault();
                openCardModal();
            });
        }
    });
});