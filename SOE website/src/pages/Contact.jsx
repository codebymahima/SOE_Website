import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <main className="pt-28">
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle subtitle="Contact" title="Get in Touch" />

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-blue-950 mb-6">
                School of Engineering
              </h3>

              <p className="text-slate-700 mb-3">
                <strong>University:</strong> Jawaharlal Nehru University
              </p>
              <p className="text-slate-700 mb-3">
                <strong>Address:</strong> New Mehrauli Road, New Delhi - 110067
              </p>
              <p className="text-slate-700 mb-3">
                <strong>Email:</strong> soe@jnu.ac.in
              </p>
              <p className="text-slate-700">
                <strong>Website:</strong> soe.jnu.ac.in
              </p>
            </div>

            <form className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
              <label className="block mb-4">
                <span className="text-slate-700 font-medium">Name</span>
                <input
                  type="text"
                  className="w-full mt-2 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  placeholder="Enter your name"
                />
              </label>

              <label className="block mb-4">
                <span className="text-slate-700 font-medium">Email</span>
                <input
                  type="email"
                  className="w-full mt-2 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  placeholder="Enter your email"
                />
              </label>

              <label className="block mb-6">
                <span className="text-slate-700 font-medium">Message</span>
                <textarea
                  rows="5"
                  className="w-full mt-2 border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  placeholder="Write your message"
                ></textarea>
              </label>

              <button
                type="button"
                className="bg-blue-950 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;