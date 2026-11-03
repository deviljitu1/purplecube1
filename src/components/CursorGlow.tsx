import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reduceMotion.matches) return;

    let frame = 0;
    let x = -400;
    let y = -400;
    const render = () => {
      frame = 0;
      if (glow.current) glow.current.style.transform = `translate3d(${x - 144}px, ${y - 144}px, 0)`;
    };
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      glow.current?.classList.replace('opacity-0', 'opacity-100');
      if (!frame) frame = requestAnimationFrame(render);
    };
    const hide = () => glow.current?.classList.replace('opacity-100', 'opacity-0');

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glow} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-30 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(199,125,255,0.19)_0%,rgba(157,78,221,0.09)_32%,transparent_70%)] opacity-0 blur-sm transition-opacity duration-200 ease-out" />;
};
