import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import ThankYou from "./pages/ThankYou";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      {/* Optional Navbar */}
      <nav className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between px-6">
          <Link to="/" className="font-bold text-xl">FeedbackSys</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Feedback</Link>
            <Link to="/admin-login" className="hover:underline">Admin Login</Link>
            <Link to="/admin" className="hover:underline">Dashboard</Link>
          </div>
        </div>
      </nav>

      {/* Main Route Container */}
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8 border border-blue-100">
          <Routes>
            <Route path="/" element={<FeedbackForm />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


