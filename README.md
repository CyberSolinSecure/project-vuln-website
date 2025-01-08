# Vulnerable Website for Educational Purposes

## Overview

This website is intentionally vulnerable and has been created for **educational and demonstration purposes only**. It contains common security vulnerabilities that are used to demonstrate various types of attacks and help learn about web application security.

## Disclaimer

- This website should **ONLY** be used in a **local development environment**.
- **Do not** deploy this application to a public server or expose it to the internet, as it contains security flaws that could be exploited.
- **Use this website responsibly** for educational purposes and to learn how to secure web applications.

## Vulnerabilities Included

1. **SQL Injection**: Demonstrates how attackers can manipulate SQL queries through unsanitized user input.
2. **Security Misconfiguration**: Simulates common security misconfigurations that can be exploited if not properly handled.
3. **Insecure Direct Object References (IDOR)**: Exploits poor access control mechanisms allowing attackers to access unauthorized resources.
4. **Cross-Site Scripting (XSS)**: Shows how malicious scripts can be injected into web pages when user input is improperly sanitized.

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application locally**:
    ```bash
    node index.js
    ```

4. **Access the website**:
    Open your browser and go to:
    ```
    http://localhost:5001
    ```

## Important Notes

- This website is vulnerable, and the goal of setting up this application is to help you learn how to identify and mitigate security vulnerabilities.
- **Do not** attempt to use this in any production environment.
- It is highly recommended to use this only on your **local machine** and in a **controlled environment**.

## License

This project is for **educational purposes only** and is not intended for commercial use.
