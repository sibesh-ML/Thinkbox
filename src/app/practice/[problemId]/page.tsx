import Link from "next/link";
import { notFound } from "next/navigation";
import { problemsById } from "@/lib/trackData";
import { tracks } from "@/data/problems/track";
import PracticeProblem from "@/components/PracticeProblem";
import NextProblemFooter from "@/components/NextProblemFooter";

export default async function PracticeProblemPage({
  params,
}: {
  params: Promise<{ problemId: string }>;
}) {
  const { problemId } = await params;
  const problem = problemsById[problemId];

  if (!problem) {
    notFound();
  }

  const track = tracks.find((t) => t.id === problem.trackId);

  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400 flex items-center gap-1.5 flex-wrap">
        <Link
          href="/practice"
          className="hover:text-accent transition-colors duration-150"
        >
          Practice
        </Link>
        {track && (
          <>
            <span>/</span>
            <Link
              href={`/learn/${track.id}`}
              className="hover:text-accent transition-colors duration-150"
            >
              {track.title}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-gray-300 font-mono text-xs">{problem.id}</span>
      </nav>

      <PracticeProblem problem={problem} />

      <NextProblemFooter trackId={problem.trackId} currentProblemId={problem.id} />
    </>
  );
}
