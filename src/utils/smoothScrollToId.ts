export function smoothScrollToId(id: string, duration = 150) {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + window.scrollY;
    const distance = end - start;
    const startTime = performance.now();

    history.pushState(null, '', `#${id}`);

    function animateScroll(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOut = 0.5 * (1 - Math.cos(Math.PI * progress));

        window.scrollTo(0, start + distance * easeInOut);

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}