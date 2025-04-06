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
      "Just Another To Do application. It is a basic CRUD app with authentication, task creation and a game. The app uses a serverless PostgreSQL for RDBMS and Prisma for ORM. THE TWIST is that it has a Game built in - Bulls&Cows. A simple game of numbers that I personally really enjoy.",
    image: "/atdappscr.png",
    link: "https://atdapp.vercel.app/",
    git: "https://github.com/maksmarinov/atdapp",
  },
  {
    id: "2",
    title: "AIChatbot",
    description:
      "A chatbot using GPT-4o api and lowdb for local session storage and context. Considering to evolve into an AI Agent in near future, since currently it does not posses any tools. But I think AI is great personally, although as a junior dev I am at competition with AI for my job, it has also been very helpful in studying, looking up information, providing suggestions and boilerplate code",
    image: "/atdappscr.png",
    link: "https://aigent-beta.vercel.app/",
    git: "https://github.com/maksmarinov/aigent",
  },
  {
    id: "3",
    title: "WordleV2",
    description:
      "A revised version V2 of the project below, main objective was to get familiar with React, and try to use different tools like useState and useEffect",
    image: "/atdappscr.png",
    link: "https://wordlereact.vercel.app/",
    git: "https://github.com/maksmarinov/wordlereact",
  },
  {
    id: "4",
    title: "WordleV1",
    description:
      "A vanilla JS/CSS copy project of the popular game. It was a good way to checkout working with API and getting and posting data to server.",
    image: "/atdappscr.png",
    link: "https://maksmarinov.github.io/wordle/",
    git: "https://github.com/maksmarinov/wordle",
  },
  {
    id: "5",
    title: "Calculator",
    description:
      "A vanilla JS calc, my first webapp, the funcionality is okay, I do revisit it from time to time to see if I can improve something if it needs to be improved. And something can always be improved!",
    image: "/atdappscr.png",
    link: "https://maksmarinov.github.io/calc/",
    git: "https://github.com/maksmarinov/calc",
  },
];

export const Projects = () => {
  const [viewMode, setViewMode] = useState<"list" | "tile">("list");

  return (
    <section className="container mx-auto py-4">
      <div className="flex justify-between items-center mb-6 ">
        <h2 className="text-2xl font-bold text-shadow-lg">My Projects</h2>
        <div className="flex items-center space-x-2 border border-neutral-300/30 rounded-md p-1 bg-slate-900/60 backdrop-blur-sm">
          <Toggle
            pressed={viewMode === "list"}
            onPressedChange={() => setViewMode("list")}
            aria-label="List view"
            className="data-[state=on]:bg-neutral-800/60"
          >
            <List className="h-4 w-4 text-neutral-100" />
          </Toggle>
          <Toggle
            pressed={viewMode === "tile"}
            onPressedChange={() => setViewMode("tile")}
            aria-label="Tile view"
            className="data-[state=on]:bg-neutral-800/60"
          >
            <Grid className="h-4 w-4 text-neutral-100" />
          </Toggle>
        </div>
      </div>

      <div className="m-4 overflow-auto max-h-120 mask-y-from-92% mask-y-to-100% ">
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
              className={`group relative overflow-hidden min-h-80 bg-slate-800/50  rounded-lg shadow-lg border border-violet-400/20 transition-all duration-1000 hover:border-cyan-400/40 ${
                viewMode === "list"
                  ? "transform -translate-x-10 hover:translate-x-0 "
                  : ""
              } hover:shadow-cyan-500/20 hover:shadow-xl`}
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
                  <Image
                    src={prj.image || "/placeholder.svg"}
                    alt={prj.title}
                    width={800}
                    height={600}
                    className="object-cover h-full w-full rounded"
                  />
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
                    <p className="font-mono mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                      {prj.description}
                    </p>
                  </div>
                  <div
                    className={`${
                      viewMode === "tile" ? "flex flex-row" : "flex flex-col"
                    }`}
                  >
                    <Link
                      href={prj.link}
                      className="underline font-bold bg-neutral-300/40 hover:bg-slate-900 shadow-white/40 hover:shadow-xl  hover:text-white m-2 px-4 max-w-min max-h-min rounded-sm text-black text-center "
                    >
                      Link
                    </Link>
                    <Link
                      href={prj.git}
                      className="underline font-bold bg-neutral-300/40 hover:bg-slate-900 shadow-white/40 hover:shadow-xl hover:text-white m-2 px-4 max-w-min max-h-min rounded-sm text-black text-center "
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
