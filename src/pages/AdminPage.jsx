import React, { useState } from "react";

const AdminPage = () => {
  const [adminMessage, setAdminMessage] = useState("");
  const backendURL = "http://localhost:5001";

  const getAdminAccess = async () => {
    try {
      const response = await fetch(`${backendURL}/admin?role=admin`,{
        mode:'cors'
      });
      const data = await response.text();
      setAdminMessage(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Access</h2>
      <button
        onClick={getAdminAccess}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full"
      >
        Try Admin Access
      </button>
      <p className="mt-4">{adminMessage}</p>
    </div>
  );
};

export default AdminPage;
