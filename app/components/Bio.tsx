"use client";
import Image from "next/image";
import Link from "next/link";

export const Bio = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-row justify-between items-end">
        <h1 className="mb-4 font-extrabold text-4xl text-shadow-md">
          About me
        </h1>
        <div className="flex flex-row">
          <Link
            className="font-extrabold m-2 underline"
            href="https://www.linkedin.com/in/maksim-marinov-694b3853/"
          >
            LinkedIn
          </Link>
          <Link
            className="font-extrabold m-2 underline"
            href="https://github.com/maksmarinov"
          >
            Git
          </Link>
        </div>
        <div className="border-4 rounded-4xl ">
          <Image
            className="rounded-3xl m-1"
            src="/Untitled.jpeg"
            alt="personal pic"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="bg-black/20 rounded-xl p-4 mt-4 font-bold text-shadow-md/20">
        <p className="">
          Welcome! I&apos;m Maks, a Junior Web Developer focused on building
          clean, user-friendly web applications. With a toolkit including HTML,
          CSS, JavaScript, React, Next.js, Tailwind, Node.js, and SQL, I strive
          to contribute to innovative and scalable solutions. I&apos;m driven by
          a desire to learn, collaborate effectively, and continuously grow as a
          developer within passionate teams.
        </p>
        <p>
          Outside of work, my personal interests lay in tech, gaming, olympic
          weighlifting, boxing, basketball, popular science etc. I love all
          animals, but dogs are the best. Sorry feline lovers.
        </p>
      </div>
    </div>
  );
};
