import { useEffect, useRef } from 'react';

interface CinemagraphProps {
  scene: 'intro' | 'touchpad' | 'rotary' | 'pricing';
  scrollProgress: number;
}

export default function CinemagraphEffects({ scene, scrollProgress }: CinemagraphProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Fine dust particles/data packages flowing around the smart estate's environment
    class SignalPacket {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      decay: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() * 0.2 - 0.1);
        this.vy = -(Math.random() * 0.15 + 0.05);
        this.size = Math.random() * 1.5 + 0.5;
        this.alpha = Math.random() * 0.35 + 0.05;
        this.decay = Math.random() * 0.0008 + 0.0002;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= this.decay;
        if (this.alpha <= 0 || this.y < 0) {
          this.x = Math.random() * width;
          this.y = height + Math.random() * 15;
          this.alpha = Math.random() * 0.4 + 0.1;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.save();
        c.fillStyle = `rgba(255, 120, 73, ${this.alpha * 0.8})`; // soft orange PVD accent
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
        c.restore();
      }
    }

    // Concentric electromagnetic pulse rings projecting from the remote central controller
    class PulseRing {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      speed: number;
      alpha: number;

      constructor() {
        this.x = width * 0.5;
        this.y = height * 0.5;
        this.radius = 20;
        this.maxRadius = Math.max(width, height) * 0.6;
        this.speed = Math.random() * 1.2 + 0.6;
        this.alpha = 0.45;
      }

      update() {
        this.radius += this.speed;
        this.alpha = 1 - (this.radius / this.maxRadius);
        if (this.radius >= this.maxRadius) {
          this.radius = 20;
          this.alpha = 0.45;
        }
      }

      draw(c: CanvasRenderingContext2D) {
        if (this.alpha <= 0) return;
        c.save();
        c.strokeStyle = `rgba(255, 255, 255, ${this.alpha * 0.12})`;
        c.lineWidth = 1;
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.stroke();
        c.restore();
      }
    }

    // Precision coordinate targeting crosshairs/reticles
    class TechReticle {
      angle: number;

      constructor() {
        this.angle = 0;
      }

      draw(c: CanvasRenderingContext2D, targetX: number, targetY: number) {
        this.angle += 0.002;
        c.save();
        c.strokeStyle = 'rgba(255, 120, 73, 0.4)';
        c.lineWidth = 0.5;
        c.setLineDash([4, 4]);

        // Draw coordinate axes
        c.beginPath();
        c.moveTo(targetX - 45, targetY);
        c.lineTo(targetX + 45, targetY);
        c.moveTo(targetX, targetY - 45);
        c.lineTo(targetX, targetY + 45);
        c.stroke();

        // Draw spinning radar circle
        c.strokeStyle = 'rgba(255, 255, 255, 0.18)';
        c.setLineDash([]);
        c.beginPath();
        c.arc(targetX, targetY, 22, 0, Math.PI * 2);
        c.stroke();

        // Micro tick marks
        c.save();
        c.translate(targetX, targetY);
        c.rotate(this.angle);
        c.fillStyle = '#ff7849';
        c.fillRect(-1.5, -24, 3, 4);
        c.fillRect(-1.5, 20, 3, 4);
        c.restore();

        c.restore();
      }
    }

    // Initialize packet streams
    const packets = Array.from({ length: 30 }, () => new SignalPacket());
    const waves = [new PulseRing(), new PulseRing()];
    waves[1].radius = waves[0].maxRadius * 0.5; // offset second wave
    const reticle = new TechReticle();

    let animationTime = 0;

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      animationTime += 0.04;

      // 1. Draw floating packets of data wireless wave particles
      packets.forEach((pack) => {
        pack.update();
        pack.draw(ctx);
      });

      // 2. Draw CONCENTRIC expand waves emited from remote center (Scene 1 & 4)
      if (scene === 'intro' || scene === 'pricing') {
        waves.forEach((wave) => {
          wave.x = width * (scene === 'pricing' ? 0.35 : 0.5);
          wave.y = height * (scene === 'pricing' ? 0.5 : 0.55);
          wave.update();
          wave.draw(ctx);
        });
      }

      // 3. Draw targeting laser pointer and reticles aligning with remote hotspots
      if (scene === 'touchpad') {
        // Spotlight the top sapphire glass touchpad
        const hotspotX = width * 0.5;
        const hotspotY = height * 0.32;
        reticle.draw(ctx, hotspotX, hotspotY);

        // Grid coordinate scanning scanline (subtle sci-fi product test feel)
        const scanY = hotspotY - 30 + Math.abs(Math.sin(animationTime * 0.5)) * 60;
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 120, 73, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(hotspotX - 80, scanY);
        ctx.lineTo(hotspotX + 80, scanY);
        ctx.stroke();
        ctx.restore();
      }

      if (scene === 'rotary') {
        // Spotlight the middle rotary dial wheel
        const hotspotX = width * 0.5;
        const hotspotY = height * 0.55;
        reticle.draw(ctx, hotspotX, hotspotY);

        // Circular sweep scanline
        ctx.save();
        ctx.strokeStyle = 'rgba(255, 120, 73, 0.25)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(hotspotX, hotspotY, 35 + Math.sin(animationTime) * 3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 4. Draw horizontal telemetry grid lines anchored in background to feel mechanical
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 0.5;
      const spacing = 80;
      for (let y = 0; y < height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      animationId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [scene]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none opacity-85 transition-opacity duration-700"
    />
  );
}
