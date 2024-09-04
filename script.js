document.addEventListener('DOMContentLoaded', function() {
    // Карусели
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const prev = carousel.querySelector('.prev');
        const next = carousel.querySelector('.next');

        let index = 0;
        const slides = inner.children;
        
        function showSlide(i) {
            index = (i + slides.length) % slides.length;
            Array.from(slides).forEach((slide, idx) => {
                slide.style.transform = `translateX(${(idx - index) * 100}%)`;
            });
        }

        next.addEventListener('click', () => {
            showSlide(index + 1);
        });

        prev.addEventListener('click', () => {
            showSlide(index - 1);
        });

        showSlide(index);
    });

    // Обратный отсчет
    function updateCountdown() {
        const countdownElement = document.getElementById('countdown');
        const endDate = new Date(countdownElement.getAttribute('data-end-date'));
        const now = new Date();
        const timeDiff = endDate - now;

        if (timeDiff <= 0) {
            countdownElement.textContent = '00:00:00';
            return;
        }

        const hours = Math.floor(timeDiff / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    // Установка начального времени отсчета
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
