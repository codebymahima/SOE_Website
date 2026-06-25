import SectionTitle from "../components/SectionTitle";

function Research() {
  return (
    <main className="pt-28">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Research" title="Research & Innovation" />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Artificial Intelligence & Machine Learning",
              "Communication Systems",
              "Embedded Systems & IoT",
              "Data Science",
              "Computer Networks",
              "VLSI & Electronics",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition"
              >
                <h3 className="text-lg font-bold text-blue-950">{area}</h3>
                <p className="text-slate-600 mt-3">
                  Research activities encourage interdisciplinary problem
                  solving, technical exploration, and innovation-driven learning.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Research;