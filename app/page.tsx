"use client";
import { useState, useEffect, useRef } from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import Cookies from "js-cookie";
import { Bio } from "@/app/components/Bio";
import { Projects } from "./components/PersonalProjects";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theme, setTheme] = useState<"dark" | "light">(
    Cookies.get("theme") as "dark" | "light"
  );
  const [mounted, setMounted] = useState(false);

  function getRandomIntInclusive(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

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

    const stars: {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      red: number;
      green: number;
      blue: number;
    }[] = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.25,
        speed: Math.random() * 0.02,
        opacity: Math.random(),
        red: getRandomIntInclusive(0, 255),
        green: getRandomIntInclusive(0, 255),
        blue: getRandomIntInclusive(0, 255),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        ctx.fillStyle =
          theme === "dark"
            ? `rgba(${star.red}, ${star.green}, ${star.blue}, ${star.opacity})`
            : `rgba(0,0,0, ${star.opacity})`;

        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [theme]);
  useEffect(() => {
    const savedTheme = Cookies.get("theme") as "dark" | "light";
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme("dark");
    }
    setMounted(true);
  }, []);
  const handleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    Cookies.set("theme", newTheme, { expires: 365 });
  };
  return (
    <main className="min-h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {mounted && (
        <>
          <button
            className="absolute z-50 m-4 bg-black/20 hover:bg-gray-700/80 rounded p-1"
            onClick={handleTheme}
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </button>
          <div
            className={`${
              theme === "dark"
                ? `h-screen bg-linear-to-b from-black via-blue-900 to-black`
                : `h-screen bg-linear-to-b from-violet-400 via-neutral-300 to-neutral-200`
            }`}
          ></div>
        </>
      )}
      <div className="absolute z-20 inset-4 mt-2">
        <div className="flex flex-col overflow-auto ">
          <Bio />
          <Projects />
        </div>
      </div>
      <footer className=" w-full inset-0 bg-black py-8 border-t border-purple-500/20">
        <p className="text-center text-purple-300">
          {new Date().getFullYear()} Maks. Exploring the digital universe.
        </p>
      </footer>
    </main>
  );
}
