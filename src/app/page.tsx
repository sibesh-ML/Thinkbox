import Link from "next/link";
import { tracks } from "@/data/problems/track";

export default function Home() {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold text-gray-100">
          Welcome to <span className="text-accent">ThinkBox</span>
        </h1>
        <p className="max-w-2xl text-gray-400">
          Master analytical thinking through eight tracks of structured
          practice — from problem decomposition and quantitative reasoning to
          full case interviews.
        </p>
      </header>

      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500">
          Tracks
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track) => (
            <li key={track.id}>
              <Link
                href={`/learn/${track.id}`}
                className="group block h-full rounded-lg border border-navy-700 bg-navy-800 p-5 transition-colors hover:border-accent-dim hover:bg-navy-700"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl leading-none" aria-hidden>
                    {track.icon}
                  </span>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-gray-100 group-hover:text-accent">
                      {track.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {track.moduleCount} modules · {track.problemCount} problems
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-400">{track.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
