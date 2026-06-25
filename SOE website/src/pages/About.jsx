import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";

function About() {
  return (
    <main className="pt-28">
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="About SOE" title="School of Engineering, JNU" />

          <div className="bg-white rounded-3xl shadow-md p-8 md:p-12">
            <p className="text-slate-700 leading-relaxed text-lg">
              The School of Engineering at Jawaharlal Nehru University focuses on
              interdisciplinary engineering education, research, innovation, and
              practical problem solving. It aims to prepare students with strong
              technical foundations, analytical thinking, and exposure to modern
              engineering domains.
            </p>

            <p className="text-slate-700 leading-relaxed text-lg mt-6">
              The school encourages students to work on real-world problems,
              participate in research activities, explore emerging technologies,
              and build solutions that create meaningful impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <StatCard number="JNU" label="Central University" />
            <StatCard number="CSE" label="Computing Focus" />
            <StatCard number="ECE" label="Electronics Focus" />
            <StatCard number="R&D" label="Research Driven" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;