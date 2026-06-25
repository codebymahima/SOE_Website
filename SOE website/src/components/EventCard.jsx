function EventCard({ title, date, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <p className="text-sm font-semibold text-blue-800">{date}</p>
      <h3 className="text-xl font-bold text-slate-900 mt-3">{title}</h3>
      <p className="text-slate-600 mt-3 leading-relaxed">{description}</p>
    </div>
  );
}

export default EventCard;