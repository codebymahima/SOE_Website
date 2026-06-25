function ProgramCard({ title, duration, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
      <p className="text-sm text-slate-500 mt-2">{duration}</p>
      <p className="text-slate-600 mt-4 leading-relaxed">{description}</p>
    </div>
  );
}

export default ProgramCard;