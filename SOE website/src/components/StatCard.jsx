function StatCard({ number, label }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center hover:-translate-y-2">
      <h3 className="text-3xl font-bold text-blue-900">{number}</h3>
      <p className="text-slate-600 mt-2">{label}</p>
    </div>
  );
}

export default StatCard;