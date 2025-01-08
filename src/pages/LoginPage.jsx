import React, { useState } from "react";

const LoginPage = () => {
  const [loginInfo, setLoginInfo] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const backendURL = "http://localhost:5001";

  const handleLogin = async () => {
    try {
      const response = await fetch(`${backendURL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginInfo),
      });
      const data = await response.json();
      setMessage(data.message || "Login failed!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <div className="mb-4">
        <label className="block mb-2">Username:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded focus:outline-none"
          value={loginInfo.username}
          onChange={(e) => setLoginInfo({ ...loginInfo, username: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Password:</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded focus:outline-none"
          value={loginInfo.password}
          onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
        />
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Login
      </button>
      <p className="mt-4 text-red-500">{message}</p>



     
    </div>
    <p>In SQL injection, an attacker manipulates an SQL query by injecting malicious input into the query. Here's how it works:</p>

<p>Imagine an application that accepts a <strong>username</strong> and <strong>password</strong> input from the user and runs the following SQL query to verify login credentials:</p>

<pre>
SELECT * FROM users WHERE username = 'admin' AND password = 'password';
</pre>

<p>If the application doesn't properly sanitize or validate the input, an attacker can manipulate the input to modify the query.</p>

<p>For example, if the attacker enters the following input for the <strong>username</strong> and <strong>password</strong>:</p>
<ul>
  <li><strong>Username:</strong> admin</li>
  <li><strong>Password:</strong> ' OR 1=1 --</li>
</ul>

<p>The SQL query becomes:</p>

<pre>
SELECT * FROM users WHERE username = 'admin' AND password = '' OR 1=1 --';
</pre>

<p>Breaking it down:</p>
<ul>
  <li><strong>username = 'admin'</strong>: The query checks if the username is 'admin'. This part is valid.</li>
  <li><strong>password = ''</strong>: The query checks if the password is empty. This would normally be false.</li>
  <li><strong>OR 1=1</strong>: This makes the query always true because 1=1 is always true. The password check is bypassed.</li>
  <li><strong>--</strong>: This is a comment in SQL, so everything after this part is ignored, including the rest of the password check.</li>
</ul>

<p>As a result, the query returns the data of the admin user, allowing the attacker to gain unauthorized access without needing the correct password.</p>

<p>To prevent this type of attack, developers should use <strong>prepared statements</strong> or <strong>parameterized queries</strong>, which separate SQL code from user input. For example, a secure query might look like:</p>

<pre>
SELECT * FROM users WHERE username = ? AND password = ?;
</pre>

<p>This way, user input is safely handled and cannot alter the logic of the query.</p>

   </div>
  );
};

export default LoginPage;
