import './bootstrap';
import '../css/app.css';

const initClientsSlider = () => {
    const slider = document.querySelector('[data-clients-slider]');

    if (!slider) {
        return;
    }

    const track = slider.querySelector('[data-clients-track]');
    const prev = slider.querySelector('[data-action="prev"]');
    const next = slider.querySelector('[data-action="next"]');
    const scrollAmount = 320;

    if (!track) {
        return;
    }

    const scrollForward = () => {
        if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }

        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const scrollBackward = () => {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    };

    next?.addEventListener('click', scrollForward);
    prev?.addEventListener('click', scrollBackward);

    let autoSlide = setInterval(scrollForward, 5000);

    slider.addEventListener('mouseenter', () => clearInterval(autoSlide));
    slider.addEventListener('mouseleave', () => {
        autoSlide = setInterval(scrollForward, 5000);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initClientsSlider();
});
