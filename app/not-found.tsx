import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      <div className="space-y-6 max-w-md">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/40 text-red-400 text-xs md:text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          404 Not Found
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
          Page Not Found
        </h1>

        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          Sorry, the page you are looking for doesn&apos;t exist, was removed, or has had its name changed.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition duration-200 inline-flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
