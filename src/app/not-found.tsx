import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/config";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <div className="flex justify-center items-center gap-4">
          <Image
            className="dark:invert"
            src={`${basePath}/tailwindcss.svg`}
            alt="TailwindCSS logo"
            width={64}
            height={64}
            priority
          />
          <h2 className="text-4xl font-bold">TailwindCSS</h2>
        </div>
        <ul className="list-inside list-disc text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            <Link
              className="text-blue-500 hover:underline hover:underline-offset-4"
              href="/sticky"
            >
              Sticky header and footer
            </Link>
          </li>
          <li className="tracking-[-.01em]">
            <Link
              className="text-blue-500 hover:underline hover:underline-offset-4"
              href="/centered"
            >
              Centered layout
            </Link>
          </li>
        </ul>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/sistematico/tailwindcss"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src={`${basePath}/github.svg`}
            alt="File icon"
            width={16}
            height={16}
          />
          Repositório
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src={`${basePath}/tailwindcss.svg`}
            alt="TailwindCSS"
            width={16}
            height={16}
          />
          TailwindCSS
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            className="dark:invert"
            src={`${basePath}/nextjs.svg`}
            alt="Next.js"
            width={16}
            height={16}
          />
          Next.js
        </a>
      </footer>
    </div>
  );
}
