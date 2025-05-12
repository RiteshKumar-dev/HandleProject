import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 text-center">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={40}
          className="dark:invert"
        />
      </div>

      {/* Hero Text */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
        💬 DevConnect — Ask, Answer, Grow!
      </h1>

      {/* Subtext */}
      <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-xl">
        We’re building a powerful developer community where you can ask coding
        questions, share answers, and connect with like-minded devs.
        <br />
        🚧{" "}
        <span className="font-medium">The platform is under development</span>,
        stay tuned!
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#"
          className="px-6 py-3 rounded-full bg-black   hover:scale-105 transition-transform duration-200 font-medium"
        >
          🔔 Notify Me
        </a>
        <a
          href="#"
          className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 hover:bg-gray-100 d transition duration-200"
        >
          📩 Contact the Team
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-16 flex gap-6 text-sm text-gray-900 flex-wrap justify-center">
        <a href="#" className="hover:underline">
          🚧 Features Coming Soon
        </a>
        <a href="#" className="hover:underline">
          📘 Developer Docs
        </a>
        <a href="#" className="hover:underline">
          🌐 Explore DevConnect
        </a>
      </footer>
    </div>
  );
}
