import SectionTitle from "../components/SectionTitle";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

function Events() {
  return (
    <main className="pt-28">
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            subtitle="Events"
            title="Technical Events & Workshops"
          />

          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
            The School of Engineering regularly organizes workshops, seminars,
            technical talks, hackathons, and innovation-driven activities for
            students and researchers.
          </p>

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

export default Events;