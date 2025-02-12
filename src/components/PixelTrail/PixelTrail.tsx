import { useEffect, useRef, FC, useContext } from "react";
import { PixelColourContext } from "../../App";

interface Particle {
    x: number;
    y: number;
    size: number;
    alpha: number;
}

const PixelTrail: FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particles = useRef<Particle[]>([]);
    const state = useContext(PixelColourContext);
    const pixelColourRef = useRef<number>(
        state.pixelColour === "black" ? 0 : 255
    ); // Store pixel colour in ref

    // Update pixel colour without re-running effect
    useEffect(() => {
        pixelColourRef.current = state.pixelColour === "black" ? 0 : 255;
    }, [state.pixelColour]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const addParticle = (event: MouseEvent) => {
            particles.current.push({
                x: event.clientX,
                y: event.clientY,
                size: Math.random() * 5 + 2, // Random size
                alpha: 1.0, // Opacity starts at full
            });

            if (particles.current.length > 100) {
                particles.current.shift(); // Remove oldest particle
            }
        };

        window.addEventListener("mousemove", addParticle);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.current.forEach((particle, index) => {
                particle.alpha -= 0.02; // Fade effect
                if (particle.alpha <= 0) {
                    particles.current.splice(index, 1);
                }

                // Use the latest pixelColourRef value
                ctx.fillStyle = `rgba(${pixelColourRef.current}, ${pixelColourRef.current}, ${pixelColourRef.current}, ${particle.alpha})`;
                ctx.fillRect(
                    particle.x,
                    particle.y,
                    particle.size,
                    particle.size
                );
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", addParticle);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 1000,
            }}
        />
    );
};

export default PixelTrail;
