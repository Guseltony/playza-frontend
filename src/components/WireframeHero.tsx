import { useEffect, useRef } from "react";

export function WireframeHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    let animationFrame: number;
    let time = 0;

    // Wireframe human figure points (simplified humanoid)
    const createHumanPoints = (
      centerX: number,
      centerY: number,
      scale: number,
      waveOffset: number,
    ) => {
      const wave = Math.sin(waveOffset) * 10;
      return {
        head: [
          [centerX, centerY - 80 * scale + wave],
          [centerX + 20 * scale, centerY - 70 * scale + wave],
          [centerX + 20 * scale, centerY - 50 * scale + wave],
          [centerX, centerY - 40 * scale + wave],
          [centerX - 20 * scale, centerY - 50 * scale + wave],
          [centerX - 20 * scale, centerY - 70 * scale + wave],
        ],
        torso: [
          [centerX, centerY - 40 * scale],
          [centerX + 30 * scale, centerY - 20 * scale],
          [centerX + 30 * scale, centerY + 30 * scale],
          [centerX, centerY + 40 * scale],
          [centerX - 30 * scale, centerY + 30 * scale],
          [centerX - 30 * scale, centerY - 20 * scale],
        ],
        leftArm: [
          [centerX - 30 * scale, centerY - 15 * scale],
          [centerX - 50 * scale, centerY - 25 * scale + wave * 2],
          [centerX - 70 * scale, centerY - 40 * scale + wave * 3],
        ],
        rightArm: [
          [centerX + 30 * scale, centerY - 15 * scale],
          [centerX + 50 * scale, centerY + 5 * scale - wave],
          [centerX + 80 * scale, centerY + 10 * scale - wave * 2],
        ],
        leftLeg: [
          [centerX - 10 * scale, centerY + 40 * scale],
          [centerX - 15 * scale, centerY + 80 * scale],
          [centerX - 20 * scale, centerY + 120 * scale],
        ],
        rightLeg: [
          [centerX + 10 * scale, centerY + 40 * scale],
          [centerX + 15 * scale, centerY + 80 * scale],
          [centerX + 20 * scale, centerY + 120 * scale],
        ],
      };
    };

    // Digital particles around figure
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        life: Math.random(),
      });
    }

    const drawWireframe = (
      points: number[][],
      color: string,
      glow: boolean = false,
    ) => {
      if (points.length < 2) return;

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;

      if (glow) {
        ctx.shadowBlur = 15;
        ctx.shadowColor = color;
      }

      ctx.beginPath();
      ctx.moveTo(points[0][0], points[0][1]);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
      }
      ctx.closePath();
      ctx.stroke();

      // Draw vertices
      points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      if (glow) {
        ctx.shadowBlur = 0;
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.02;

      // Draw grid lines
      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.002;

        if (
          p.life <= 0 ||
          p.x < 0 ||
          p.x > canvas.width ||
          p.y < 0 ||
          p.y > canvas.height
        ) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.vx = (Math.random() - 0.5) * 0.5;
          p.vy = (Math.random() - 0.5) * 0.5;
          p.life = 1;
        }

        const alpha = p.life * 0.5;
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw wireframe human
      const centerX = canvas.width * 0.7;
      const centerY = canvas.height * 0.5;
      const scale = Math.min(canvas.width, canvas.height) / 500;
      const human = createHumanPoints(centerX, centerY, scale, time);

      // Draw with different neon colors
      drawWireframe(human.head, "#00ffff", true);
      drawWireframe(human.torso, "#ff00ff", true);
      drawWireframe(human.leftArm, "#00ff88", true);
      drawWireframe(human.rightArm, "#ffff00", true);
      drawWireframe(human.leftLeg, "#00ffff", true);
      drawWireframe(human.rightLeg, "#ff00ff", true);

      // Draw connecting lines between particles near the figure
      ctx.strokeStyle = "rgba(0, 255, 255, 0.2)";
      ctx.lineWidth = 1;
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-60"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
