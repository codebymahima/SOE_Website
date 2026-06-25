import SectionTitle from "../components/SectionTitle";
import ProgramCard from "../components/ProgramCard";
import { programs } from "../data/programs";

function Academics() {
  return (
    <main className="pt-28">
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Academics" title="Programs Offered" />

          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Academics;