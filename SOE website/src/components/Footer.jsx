function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">School of Engineering</h3>
          <p className="text-blue-100 mt-3">
            Jawaharlal Nehru University, New Delhi
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <p className="text-blue-100">Academics</p>
          <p className="text-blue-100">Faculty</p>
          <p className="text-blue-100">Events</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-blue-100">New Mehrauli Road, New Delhi</p>
          <p className="text-blue-100">soe@jnu.ac.in</p>
        </div>
      </div>

      <div className="border-t border-blue-800 text-center py-4 text-sm text-blue-200">
        © 2026 School of Engineering, JNU. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;