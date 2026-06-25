import SectionTitle from "../components/SectionTitle";
import FacultyCard from "../components/FacultyCard";
import { faculty } from "../data/faculty";

function Faculty() {
  return (
    <main className="pt-28">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Faculty"
            title="Meet Our Faculty Members"
          />

          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
            Our faculty members are dedicated to excellence in teaching,
            research, innovation, and interdisciplinary collaboration across
            engineering disciplines.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, index) => (
              <FacultyCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Faculty;