import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import ProgramCard from "../components/ProgramCard";
import EventCard from "../components/EventCard";
import NoticeCard from "../components/NoticeCard";
import image from "../assets/image.png";

import { programs } from "../data/programs";
import { events } from "../data/events";
import { notices } from "../data/notices";

function Home() {
  return (
    <main>
      <section className="pt-28 pb-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-slate-600 font-medium">
              Jawaharlal Nehru University, New Delhi
            </p>

            <h1 className="text-3xl md:text-5xl font-bold text-blue-950 mt-3">
              School of Engineering
            </h1>
          </div>

          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">
              Welcome to School of Engineering
            </h2>

            <p className="text-slate-700 leading-relaxed">
              The School of Engineering at Jawaharlal Nehru University focuses
              on engineering education, interdisciplinary learning, research,
              innovation and practical problem solving.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button to="/academics">Academics</Button>
              <Button to="/contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
  <div className="max-w-7xl mx-auto px-6 py-8">
    <img
      src={image}
      alt="School of Engineering JNU"
      className="w-full rounded-xl border border-slate-200 shadow-sm"
    />
  </div>
</section>
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <SectionTitle
      subtitle="Message"
      title="Message from the Dean"
    />

    <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
      <p className="text-slate-700 leading-8">
        Welcome to the School of Engineering, Jawaharlal Nehru University.
        Our mission is to provide quality education, encourage innovation,
        and develop socially responsible engineers equipped to solve
        real-world challenges through research and interdisciplinary learning.
      </p>
    </div>
  </div>
</section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-950 mb-6">
            Notices / Updates
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {notices.map((notice, index) => (
              <NoticeCard key={index} title={notice} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="At a glance"
            title="Engineering Education with Innovation"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard number="2018" label="Established" />
            <StatCard number="4+" label="Academic Programs" />
            <StatCard number="20+" label="Faculty Members" />
            <StatCard number="1000+" label="Students & Alumni" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Academics" title="Programs Offered" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Events" title="Latest Activities" />

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;