"use client";

import { useEffect, useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Hero({ title, role }: { title: string; role: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 0.5;
        this.density = (Math.random() * 30) + 1;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(6, 182, 212, 0.8)"; // cyan-500
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 150;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numParticles; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-auto"
        style={{ background: "transparent" }}
      />
      <div className="z-10 text-center px-4 max-w-4xl pt-20 pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight drop-shadow-md">
          {title}
        </h1>
        <h2 className="text-xl md:text-3xl text-cyan-400 font-medium mb-10 drop-shadow">
          {role}
        </h2>
        <div className="flex gap-4 justify-center pointer-events-auto">
          <button 
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md font-medium transition-all shadow-lg hover:shadow-cyan-500/25"
          >
            View Work
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-md font-medium transition-colors"
          >
            Contact Me
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 z-10 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce pointer-events-auto"
        aria-label="Scroll down"
      >
        <FiChevronDown size={32} />
      </button>
    </section>
  );
}
