const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const cors = require('cors')
const app = express();
const port = 5001;

// Middleware

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mock database
const mockDb = {
  users: [
    { username: "admin", password: "password123" },
    { username: "user1", password: "password1" },
  ],
};

// Helper: Insecure JWT secret
const insecureJWTSecret = "12345";

// -------------------- Vulnerabilities -------------------- //

// 1. SQL Injection (Simulated)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Simulate vulnerable SQL query
  const user = mockDb.users.find(
    (user) => user.username === username || user.password === password
  );
  

  if (user) {
    const token = jwt.sign({ user: username }, insecureJWTSecret); // Issue a JWT token
    res.send({ message: "Login successful", token });
  } else {
    res.status(401).send("Invalid username or password");
  }
});



// 3. Sensitive Data Exposure
app.get("/sensitive-data", (req, res) => {
  const creditCardInfo = {
    cardNumber: "1234-5678-9012-3456",
    cvv: "123",
    expiry: "12/25",
  };
  res.json(creditCardInfo); // Exposes sensitive information in response
});



// 5. Broken Access Control
app.get("/admin", (req, res) => {
  const role = req.query.role; // Role parameter is passed via query string
  if (role === "admin") {
    res.send("Welcome, admin");
  } else {
    res.status(403).send("Access denied");
  }
});

// 6. Security Misconfiguration
app.get("/debug", (req, res) => {
  // Debug endpoint exposes environment variables
  res.json(process.env);
});

// 7. Cross-Site Scripting (XSS)
app.post("/comment", (req, res) => {
  const comment = req.body.comment;
  console.log(req.body.comment)
  // Reflects the comment directly in the response
  res.send(`<h1>${comment}</h1>`); // Vulnerable to XSS
});



// 9. Using Components with Known Vulnerabilities
// Using a deliberately outdated and vulnerable package version



app.listen(port, () => {
  console.log(`Vulnerable app running on http://localhost:${port}`);
});
