
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    rating: "",
    comments: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback", formData);
      navigate("/thankyou");
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Course Feedback Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        <input className="w-full p-2 border rounded" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" type="email" required />
        <input className="w-full p-2 border rounded" name="course" value={formData.course} onChange={handleChange} placeholder="Course Name" required />
        <input className="w-full p-2 border rounded" name="rating" value={formData.rating} onChange={handleChange} type="number" min="1" max="5" placeholder="Rating (1-5)" required />
        <textarea className="w-full p-2 border rounded" name="comments" value={formData.comments} onChange={handleChange} rows="4" placeholder="Your Comments"></textarea>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" type="submit">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
