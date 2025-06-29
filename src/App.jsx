export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <header className="bg-red-600 text-white p-6 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-center">COVE Architects</h1>
        <nav className="mt-2 flex justify-center space-x-6 text-sm font-semibold">
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section className="py-20 text-center bg-gray-100" id="home">
        <h2 className="text-4xl font-bold text-red-600">We handhold Societies through Redevelopment</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          From feasibility to keys-in-hand, we’re with you at every step.
        </p>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto" id="about">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          COVE Architects specializes in Society Redevelopment. Our experienced team ensures transparency, technical clarity, and partnership from day one.
        </p>
      </section>
      <section className="py-16 px-6 bg-gray-50 max-w-4xl mx-auto" id="services">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>End-to-end Society Redevelopment Consulting</li>
          <li>Feasibility Reports & Developer Evaluation</li>
          <li>Project Management Consultancy (PMC)</li>
          <li>Handholding through Approvals and Construction Oversight</li>
        </ul>
      </section>
      <section className="py-16 px-6 max-w-4xl mx-auto" id="projects">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-2">
          <li>Mayfair CHS, Bandra W</li>
          <li>New Friends CHS, Bandra W</li>
          <li>Shivdham CHS, Santacruz W</li>
          <li>Om Shubh Milan, Vile Parle E</li>
          <li>Nugget CHS, Khar W</li>
        </ul>
      </section>
      <section className="py-16 px-6 bg-gray-100 max-w-4xl mx-auto text-center" id="contact">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Email: <a href="mailto:soumitra.shende@gmail.com" className="text-red-600">soumitra.shende@gmail.com</a></p>
        <p>Email: <a href="mailto:uma.covearch@gmail.com" className="text-red-600">uma.covearch@gmail.com</a></p>
      </section>
      <footer className="bg-gray-800 text-white py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} COVE Architects. All rights reserved.
      </footer>
    </div>
  )
}
