import Image from "next/image";
import Head from "next/head";
export const metadata = {
  title: "Developer Community",
  description:
    "A vibrant hub where developers can ask questions, share knowledge, collaborate, and enhance their coding skills. Join our community to grow together and stay ahead in the tech world.",
};
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center">
      {/* Logo */}
      {/* <div className="mb-6">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={40}
          className="dark:invert"
          priority
        />
      </div> */}

      {/* Hero Text */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight">
        💬 DevConnect — Ask, Answer, Grow!
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl">
        A thriving hub for developers to share knowledge, solve problems, and
        build a stronger community together.
        <br />
        🚧{" "}
        <span className="font-semibold text-black">
          We're currently in development — stay tuned!
        </span>
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://dev-community-tau.vercel.app"
          className="px-6 py-3 rounded-full bg-black text-white hover:bg-gray-900 hover:scale-105 transition-transform duration-200 font-medium shadow-md"
        >
          🚀 Visit DevConnect
        </a>
        <a
          href="mailto:yourteam@email.com"
          className="px-6 py-3 rounded-full border border-gray-300 text-gray-800 hover:bg-white hover:shadow-md transition duration-200"
        >
          📩 Contact the Team
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 flex gap-6 text-sm text-gray-600 flex-wrap justify-center">
        <a
          href="https://dev-community-tau.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🚧 Features Coming Soon
        </a>
        <a
          href="https://dev-community-tau.vercel.app/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          📘 Developer Docs
        </a>
        <a
          href="https://dev-community-tau.vercel.app/explore"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          🌐 Explore DevConnect
        </a>
      </footer>
    </div>
  );
}
