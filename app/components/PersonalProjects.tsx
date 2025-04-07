"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { List, Grid } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const prjs = [
  {
    id: "1",
    title: "Atdapp",
    description:
      "Just Another To Do application. It is a basic CRUD app with authentication, task creation/manipulation. The app uses a serverless PostgreSQL for RDBMS and Prisma for ORM. THE TWIST is that it has a Game built in - Bulls&Cows.",
    image: "/atdappscr.png",
    link: "https://atdapp.vercel.app/",
    git: "https://github.com/maksmarinov/atdapp",
  },
  {
    id: "2",
    title: "AIChatbot",
    description:
      "A chatbot using GPT-4o api and lowdb for local session storage and context. Considering to evolve it into an AI Agent in the near future. Currently it poses no tools, only chat with context.",
    image: "/aichat.png",
    link: "https://aigent-beta.vercel.app/",
    git: "https://github.com/maksmarinov/aigent",
  },
  {
    id: "3",
    title: "WordleV2",
    description:
      "A revised version V2 of the project below, main objective was to get familiar with React, and try to use different tools like useState and useEffect. The colorway is Mecha inspired.",
    image: "/wordlereact.png",
    link: "https://wordlereact.vercel.app/",
    git: "https://github.com/maksmarinov/wordlereact",
  },
  {
    id: "4",
    title: "WordleV1",
    description:
      "A vanilla JS/CSS copy project of the popular game. It was a good way to checkout working with API and getting and posting data to server. This game definetly uped my knowledge of English words I am highly unlikely to use.",
    image: "/wordle.png",
    link: "https://wordle-maksmarinovs-projects.vercel.app/",
    git: "https://github.com/maksmarinov/wordle",
  },
  {
    id: "5",
    title: "Calculator",
    description:
      "A vanilla JS calc, my first webapp, the funcionality is okay, I do revisit it from time to time to see if I can improve something if it needs to be improved. It was a intro course project, as in every course project I went a bit the extramile.",
    image: "/calc.png",
    link: "https://maksmarinov.github.io/calc/",
    git: "https://github.com/maksmarinov/calc",
  },
];

export const Projects = () => {
  const [viewMode, setViewMode] = useState<"list" | "tile">("list");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState("");
  const handleViewChange = (mode: "list" | "tile") => {
    setViewMode(mode);
    setAnnouncement(`View changed to ${mode} mode`);
  };

  const toggleDescription = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      aria-labelledby="projects-heading"
      className="container mx-auto max-h-fit"
    >
      <div className="flex justify-between px-4 items-center mb-4 ">
        <h2 id="projects-heading" className="text-2xl font-bold text-shadow-lg">
          My Projects
        </h2>
        <div className="flex items-center space-x-2 border border-neutral-300/30 rounded-md p-1 bg-slate-900/60 backdrop-blur-sm">
          <div aria-live="polite" className="sr-only">
            {announcement}
          </div>
          <Toggle
            pressed={viewMode === "list"}
            onPressedChange={() => handleViewChange("list")}
            aria-label="List view"
            className="data-[state=on]:bg-neutral-800/60"
          >
            <List className="h-4 w-4 text-neutral-100" />
          </Toggle>
          <Toggle
            pressed={viewMode === "tile"}
            onPressedChange={() => handleViewChange("tile")}
            aria-label="Tile view"
            className="data-[state=on]:bg-neutral-800/60"
          >
            <Grid className="h-4 w-4 text-neutral-100" />
          </Toggle>
        </div>
      </div>

      <div className="m-4 overflow-auto p-4 min-h-120 max-h-screen mask-y-from-95% mask-y-to-100% ">
        <div
          className={`grid gap-6  ${
            viewMode === "tile"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
              : "grid-cols-1 "
          }`}
        >
          {prjs.map((prj) => (
            <div
              key={prj.id}
              tabIndex={0}
              role="article"
              aria-labelledby={`project-title-${prj.title}`}
              className={`group relative overflow-hidden min-h-80 bg-slate-800/50  rounded-lg shadow-lg border border-violet-400/20 transition-all duration-1000 
               hover:border-violet-400/40 hover:shadow-violet-500/40   ative:border-violet-400/60 active:shadow-xl active:shadow-violet-500/50 
              ${
                viewMode === "list"
                  ? "transform -translate-x-10 hover:translate-x-0 active:translate-x-0 transition-all duration-1000 "
                  : ""
              }  hover:shadow-xl  `}
              style={{
                WebkitUserSelect: "none",
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div
                className={`flex  ${
                  viewMode === "list" ? "flex-row" : "flex-col"
                }`}
              >
                <div
                  className={`p-2 ${
                    viewMode === "list" ? "w-2/5" : "w-full"
                  } relative`}
                >
                  <Link href={prj.link} className="cursor-pointer">
                    <Image
                      src={prj.image || "/placeholder.jpg"}
                      alt={prj.title}
                      width={800}
                      height={600}
                      className="object-cover h-full w-full rounded hover:min-h-80 transition-all duration-1000"
                    ></Image>
                  </Link>
                </div>
                <div
                  className={`${
                    viewMode === "list" ? "w-3/5" : "w-full"
                  } p-6 relative`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl  mb-2 text-neutral-200 font-extrabold">
                      {prj.title}
                    </h3>
                  </div>
                  <div className="relative overflow-hidden m-2 ">
                    <p
                      className={`font-mono mb-4 text-sm transition-all duration-300 ${
                        expandedId === prj.id ? "" : "line-clamp-3"
                      } group-hover:line-clamp-none group-focus:line-clamp-none`}
                    >
                      {prj.description}
                    </p>
                    <button
                      className="text-violet-300 text-xs md:hidden"
                      onClick={() => toggleDescription(prj.id)}
                      aria-expanded={expandedId === prj.id}
                    >
                      {expandedId === prj.id ? "Show less" : "Read more"}
                    </button>
                  </div>
                  <div
                    className={`${
                      viewMode === "tile" ? "flex flex-row" : "flex flex-col"
                    }`}
                  >
                    <Link
                      href={prj.link}
                      className="underline font-bold bg-neutral-300/40 hover:bg-slate-900 shadow-white/40 hover:shadow-xl  hover:text-white m-4 p-2 w-18 rounded-sm text-black text-center "
                    >
                      Link
                    </Link>
                    <Link
                      href={prj.git}
                      className="underline font-bold bg-neutral-300/40 hover:bg-slate-900 shadow-white/40 hover:shadow-xl hover:text-white m-4 p-2 w-18 rounded-sm text-black text-center "
                    >
                      Git
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
