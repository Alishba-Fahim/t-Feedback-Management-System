import React from "react";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <a href="#" className="hover:bg-blue-600 px-4 py-2 rounded">
            Dashboard
          </a>
          <a href="#" className="hover:bg-blue-600 px-4 py-2 rounded">
            Feedbacks
          </a>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/admin-login";
            }}
            className="mt-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome Admin 👋</h1>
          <p className="text-gray-600">Here’s an overview of the system</p>
        </header>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <h2 className="text-lg font-semibold mb-2">Total Feedbacks</h2>
            <p className="text-3xl font-bold text-blue-700">42</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <h2 className="text-lg font-semibold mb-2">Positive</h2>
            <p className="text-3xl font-bold text-green-600">34</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow text-center">
            <h2 className="text-lg font-semibold mb-2">Negative</h2>
            <p className="text-3xl font-bold text-red-500">8</p>
          </div>
        </section>

        {/* Future Table */}
        <section className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Latest Feedbacks</h2>
          <div className="bg-white shadow rounded-lg p-4">
            <p className="text-gray-600">You can fetch and show recent feedbacks here.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
