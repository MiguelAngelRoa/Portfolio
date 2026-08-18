import { useEffect, useRef } from 'react';

interface DotFieldProps {
  count?: number;
  color?: string;
  maxSize?: number;
  className?: string;
}

export default function DotField({ count = 80, color = 'rgba(0,255,136,0.08)', maxSize = 3, className = '' }: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const dots: { x: number; y: number; r: number; vx: number; vy: number; alpha: number; pulse: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * w(),
        y: Math.random() * h(),
        r: Math.random() * maxSize + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w(), h());
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        d.pulse += 0.01;

        if (d.x < 0) d.x = w();
        if (d.x > w()) d.x = 0;
        if (d.y < 0) d.y = h();
        if (d.y > h()) d.y = 0;

        const a = d.alpha * (0.6 + 0.4 * Math.sin(d.pulse));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(/[\d.]+\)$/, `${a})`);
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [count, color, maxSize]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
