import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Secure Web Application Demo</h1>
        <p className="mt-2 text-lg">
          Learn, Understand, and Test Secure Coding Practices
        </p>
      </header>

      {/* Main Content */}
      <main className="p-6 max-w-5xl mx-auto">
        {/* About Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">About This Application</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This application is a hands-on demonstration of common web security
            issues and secure coding practices. It covers scenarios like login
            authentication, user input validation, and secure role-based access
            control. It's designed to help developers understand real-world
            challenges and how to mitigate vulnerabilities effectively.
          </p>
        </section>

        {/* Tools Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Tools You Can Use</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>
              <strong>React:</strong> For building dynamic, responsive user interfaces.
            </li>
            <li>
              <strong>Node.js:</strong> For backend APIs and secure server-side logic.
            </li>
            <li>
              <strong>Nginx:</strong> For managing traffic and enhancing application security.
            </li>
            <li>
              <strong>OWASP ZAP:</strong> For testing application vulnerabilities.
            </li>
          </ul>
        </section>

        {/* How to Use Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">How to Use This Application</h2>
          <ol className="list-decimal list-inside text-gray-700 text-lg">
            <li>Start by logging in using the <Link to="/login" className="text-blue-500 underline">Login Page</Link>.</li>
            <li>Try submitting comments on the <Link to="/comment" className="text-blue-500 underline">Comment Page</Link> and test input validation.</li>
            <li>Explore secure admin access through the <Link to="/admin" className="text-blue-500 underline">Admin Access Page</Link>.</li>
          </ol>
        </section>

        {/* OWASP Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Learn About OWASP Top 10</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The OWASP Top 10 is a standard awareness document for developers
            and security professionals. It represents a broad consensus about
            the most critical security risks to web applications. Understanding
            and addressing these risks is vital for building secure applications.
          </p>
          <a
            href="https://owasp.org/www-project-top-ten/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Read More on the OWASP Official Site
          </a>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10">
          <Link
            to="https://www.cysisec.com"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Get Started Now
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-10">
        <p className="text-sm">&copy; 2025 Secure Web App Demo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
