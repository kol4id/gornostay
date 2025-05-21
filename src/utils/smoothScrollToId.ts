export function smoothScrollToId(id: string, duration = 150) {
    const target = document.getElementById(id);
    if (!target) return;

    const body = document.body;
    const html = document.documentElement;
    // Выбираем, какой элемент отвечает за прокрутку в текущем браузере
    const scrollElement = (body.scrollTop > 0) ? body : html;

    const start = scrollElement.scrollTop;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    const startTime = performance.now();

    history.pushState(null, '', `#${id}`);

    function animateScroll(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeInOut = 0.5 * (1 - Math.cos(Math.PI * progress));

        scrollElement.scrollTop = start + distance * easeInOut;

        if (elapsed < duration) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}
