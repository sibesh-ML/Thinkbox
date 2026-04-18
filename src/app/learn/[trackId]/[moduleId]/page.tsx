import Link from "next/link";
import { notFound } from "next/navigation";
import { tracks } from "@/data/problems/track";
import { trackData } from "@/lib/trackData";
import Markdown from "@/components/Markdown";
import ModuleCompleteButton from "@/components/ModuleCompleteButton";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ trackId: string; moduleId: string }>;
}) {
  const { trackId, moduleId } = await params;

  const track = tracks.find((t) => t.id === trackId);
  const data = trackData[trackId];

  if (!track || !data) {
    notFound();
  }

  const mod = data.modules.find((m) => m.id === moduleId);

  if (!mod) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-400 flex items-center gap-1.5 flex-wrap">
        <Link href="/learn" className="hover:text-accent transition-colors duration-150">
          Learn
        </Link>
        <span>/</span>
        <Link
          href={`/learn/${trackId}`}
          className="hover:text-accent transition-colors duration-150"
        >
          {track.title}
        </Link>
        <span>/</span>
        <span className="text-gray-300">{mod.title}</span>
      </nav>

      {/* Module header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-mono text-accent bg-navy-700 rounded px-2 py-1">
            {mod.id}
          </span>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">{mod.title}</h1>

        {/* Hook / pull-quote */}
        <blockquote className="border-l-4 border-accent pl-5 py-1">
          <p className="text-lg italic text-gray-300 leading-relaxed">{mod.hook}</p>
        </blockquote>
      </div>

      {/* Concept */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Concept</h2>
        <Markdown>{mod.concept}</Markdown>
      </section>

      {/* Deep Dive */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4">Deep Dive</h2>
        <Markdown>{mod.deepDive}</Markdown>
      </section>

      {/* Worked Examples */}
      {mod.workedExamples.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-6">Worked Examples</h2>
          <div className="flex flex-col gap-8">
            {mod.workedExamples.map((example, i) => (
              <div
                key={i}
                className="rounded-xl border border-navy-700 bg-navy-800 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-4">{example.title}</h3>

                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    Problem
                  </p>
                  <Markdown>{example.problem}</Markdown>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    Walkthrough
                  </p>
                  <Markdown>{example.walkthrough}</Markdown>
                </div>

                {example.commonMistakes && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                      Common Mistakes
                    </p>
                    <Markdown>{example.commonMistakes}</Markdown>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Guided Problems */}
      {mod.guidedProblems.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Guided Problems</h2>
          <ol className="list-decimal pl-6 flex flex-col gap-2.5">
            {mod.guidedProblems.map((problemId) => {
              const problem = data.problems.find((p) => p.id === problemId);
              return (
                <li key={problemId}>
                  <Link
                    href={`/practice/${problemId}`}
                    className="group block"
                  >
                    <span className="text-accent group-hover:underline">
                      {problem ? problem.question : problemId}
                    </span>
                    <span className="ml-2 text-xs font-mono text-gray-500">
                      {problemId}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      )}

      {/* Takeaways */}
      {mod.takeaways.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Takeaways</h2>
          <ul className="list-disc pl-6 flex flex-col gap-2">
            {mod.takeaways.map((item, i) => (
              <li key={i} className="text-gray-300 leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Deeper Reading */}
      {mod.deeperReading.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-white mb-4">Deeper Reading</h2>
          <ul className="flex flex-col gap-3">
            {mod.deeperReading.map((item, i) => (
              <li key={i} className="flex flex-col gap-0.5">
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline font-medium"
                  >
                    {item.title}
                  </a>
                ) : (
                  <span className="text-gray-200 font-medium">{item.title}</span>
                )}
                {item.author && (
                  <span className="text-sm text-gray-500">{item.author}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Mark complete */}
      <div className="mt-10 pt-8 border-t border-navy-700 flex items-center justify-between flex-wrap gap-4">
        <ModuleCompleteButton moduleId={mod.id} />

        {/* Recommended Next */}
        {mod.recommendedNext && (
          <Link
            href={`/learn/${trackId}/${mod.recommendedNext}`}
            className="text-sm text-gray-400 hover:text-accent transition-colors duration-150"
          >
            Next up: {mod.recommendedNext} →
          </Link>
        )}
      </div>
    </>
  );
}
