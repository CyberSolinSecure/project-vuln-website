import React from "react";

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Documentation</h1>

      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">How to Run the Setup</h2>
        <p className="mb-4">
          Follow these steps to get the application up and running locally:
        </p>

        {/* Frontend Setup */}
        <h3 className="text-xl font-bold mt-6 mb-2">Frontend Setup</h3>
        <ol className="list-decimal list-inside mb-4">
          <li>
            Clone the repository: <code>git clone &lt;repository_url&gt;</code>
          </li>
          <li>
            Navigate to the frontend directory: <code>cd frontend</code>
          </li>
          <li>
            Install dependencies: <code>npm install</code>
          </li>
          <li>
            Start the development server: <code>npm start</code>
          </li>
        </ol>

        {/* Backend Setup */}
        <h3 className="text-xl font-bold mt-6 mb-2">Backend Setup</h3>
        <ol className="list-decimal list-inside mb-4">
          <li>
            Navigate to the backend directory: <code>cd backend</code>
          </li>
          <li>
            Install dependencies: <code>npm install</code>
          </li>
          <li>
            Start the server: <code>node server.js</code>
          </li>
          <li>
            The backend will run on <code>http://localhost:5001</code> by default.
          </li>
        </ol>

        {/* Running the Application */}
        <h3 className="text-xl font-bold mt-6 mb-2">Running the Application</h3>
        <p className="mb-4">
          Ensure both the frontend and backend are running. Open your browser and
          navigate to <code>http://localhost:3000</code> to access the application.
        </p>

        {/* Testing Vulnerabilities */}
        <h3 className="text-xl font-bold mt-6 mb-2">Testing Vulnerabilities</h3>
        <p className="mb-4">
          Use the following sections of the app to test vulnerabilities:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Login:</strong> Test for authentication vulnerabilities.
          </li>
          <li>
            <strong>Post a Comment:</strong> Simulate XSS attacks.
          </li>
          <li>
            <strong>Admin Access:</strong> Test for broken access controls.
          </li>
        </ul>

        {/* Tools and Resources */}
        <h3 className="text-xl font-bold mt-6 mb-2">Tools and Resources</h3>
        <p className="mb-4">
          This application demonstrates OWASP Top 10 vulnerabilities. You can learn
          more about them on the official OWASP website:
          <a
            href="https://owasp.org/www-project-top-ten/"
            className="text-blue-500 underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            OWASP Top 10
          </a>
        </p>

        <p className="mb-4">
          Tools used in this project include:
        </p>
        <ul className="list-disc list-inside">
          <li>React.js for the frontend</li>
          <li>Node.js and Express.js for the backend</li>
          <li>Tailwind CSS for styling</li>
        </ul>

        <p className="mt-6">
          For additional details, refer to the README file in the repository.
        </p>
      </div>
    </div>
  );
};

export default DocsPage;
