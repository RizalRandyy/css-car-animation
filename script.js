document.addEventListener("DOMContentLoaded", function() {
    const car = document.querySelector('.car');
    const container = document.querySelector('.container');

    const updateAnimationDistance = () => {
        const containerWidth = container.clientWidth;
        const carWidth = car.clientWidth;
        const animationDistance = (containerWidth - 50) - carWidth;
        car.style.setProperty('--animation-distance', `${animationDistance}px`);
    };

    // Update the animation distance on load and resize
    updateAnimationDistance();
    window.addEventListener('resize', updateAnimationDistance);

    car.addEventListener('animationend', () => {
        if (car.classList.contains('moving-forward')) {
            car.classList.remove('moving-forward');
            car.classList.add('moving-backward');
        } else {
            car.classList.remove('moving-backward');
            car.classList.add('moving-forward');
        }
    });

    car.classList.add('moving-forward');
});
