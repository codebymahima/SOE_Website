function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <p className="text-blue-800 font-semibold uppercase tracking-widest text-sm">
        {subtitle}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
        {title}
      </h2>
      <div className="w-20 h-1 bg-blue-800 mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

export default SectionTitle;