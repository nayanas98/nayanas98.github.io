import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="bg-gray-50 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Nayana Sajeev</h1>
        <p className="text-xl text-gray-600">Frontend Developer</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>CSS / Tailwind CSS</li>
          <li>HTML</li>
          <li>Responsive Design</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <ul className="list-disc list-inside">
          <li>Frontend Developer at XYZ Company (2023 - Present)</li>
          <li>Intern at ABC Corp (2022 - 2023)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside">
          <li><a className="text-blue-600" href="#">Personal Portfolio</a></li>
          <li><a className="text-blue-600" href="#">E-commerce Website</a></li>
          <li><a className="text-blue-600" href="#">Blog Platform</a></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>Bachelor's in Computer Science from University XYZ (2019 - 2023)</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>Certified React Developer</li>
          <li>JavaScript Essentials Certification</li>
        </ul>
      </section>

      <footer className="text-center mt-8">
        <p>© 2026 Nayana Sajeev. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;