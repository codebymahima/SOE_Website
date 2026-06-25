function FacultyCard({ name, role, department }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold mb-4">
        {name.charAt(0)}
      </div>
      <h3 className="text-xl font-bold text-slate-900">{name}</h3>
      <p className="text-blue-800 font-medium mt-1">{role}</p>
      <p className="text-slate-600 text-sm mt-2">{department}</p>
    </div>
  );
}

export default FacultyCard;