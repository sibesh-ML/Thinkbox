import Link from "next/link";
import { notFound } from "next/navigation";
import { tracks } from "@/data/problems/track";
import { trackData } from "@/lib/trackData";

export default async function TrackPage({
  params,
}: {
  params: Promise<{ trackId: string }>;
}) {
  const { trackId } = await params;

  const track = tracks.find((t) => t.id === trackId);
  const data = trackData[trackId];

  if (!track || !data) {
    notFound();
  }

  const { modules, problems } = data;

  return (
    <>
      {/* Back link */}
      <div className="mb-6">
        <Link
          href="/learn"
          className="text-sm text-gray-400 hover:text-accent transition-colors duration-150"
        >
          ← Back to Learn
        </Link>
      </div>

      {/* Track header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-3xl">{track.icon}</span>
          <h1 className="text-3xl font-bold text-white">{track.title}</h1>
        </div>
        <p className="text-gray-400 mb-3">{track.description}</p>
        <p className="text-sm text-gray-500">
          <span className="text-gray-300 font-medium">{modules.length}</span> modules
          {" · "}
          <span className="text-gray-300 font-medium">{problems.length}</span> practice problems
        </p>
      </div>

      {/* Module list */}
      <div className="flex flex-col gap-3">
        {modules.map((mod) => (
          <Link
            key={mod.id}
            href={`/learn/${trackId}/${mod.id}`}
            className="group block rounded-xl border border-navy-700 bg-navy-800 p-5 hover:border-accent-dim transition-colors duration-150"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 text-xs font-mono text-accent bg-navy-700 rounded px-2 py-1 shrink-0">
                {mod.id}
              </span>
              <div className="min-w-0">
                <h2 className="text-base font-semibold text-white mb-1 group-hover:text-accent transition-colors duration-150">
                  {mod.title}
                </h2>
                <p className="text-sm text-gray-400 line-clamp-2">{mod.hook}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
