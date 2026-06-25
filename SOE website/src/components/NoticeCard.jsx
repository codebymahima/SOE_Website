function NoticeCard({ title }) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-900 p-4 rounded-r-xl hover:bg-blue-100 transition">
      <p className="text-slate-700 font-medium">{title}</p>
    </div>
  );
}

export default NoticeCard;