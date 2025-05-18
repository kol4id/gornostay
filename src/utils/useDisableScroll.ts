import { useEffect } from "react";

export function useDisableScroll(enabled: boolean) {
    useEffect(() => {
        if (!enabled) return;

        const preventDefault = (e: Event) => e.preventDefault();

        const blockScrollKeys = (e: KeyboardEvent) => {
            const keys = ['ArrowUp', 'ArrowDown', 'Space', 'PageDown', 'PageUp'];
            if (keys.includes(e.code)) e.preventDefault();
        };


        window.addEventListener('wheel', preventDefault, { passive: false });
        window.addEventListener('touchmove', preventDefault, { passive: false });
        window.addEventListener('keydown', blockScrollKeys);

        return () => {
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault);
            window.removeEventListener('keydown', blockScrollKeys);
        };
    }, [enabled]);
}