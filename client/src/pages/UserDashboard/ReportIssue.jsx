import { useState } from "react";
import BASE_URL from '../../config';

const ReportIssue = () => {

  const [issueName, setIssueName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/issues`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ issue_name: issueName, description }),
      });
      if (!response.ok) throw new Error("Failed to report issue");
      const data = await response.json();
      alert(`Issue reported: ${data.issue_name}`);
      setIssueName("");
      setDescription("");
    } catch (error) {
      console.error("Error reporting issue:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Report an Issue
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="transition-all duration-300 hover:transform hover:scale-[1.01]">
          <label className="block text-gray-700 font-semibold mb-2">Issue Name</label>
          <input
            type="text"
            value={issueName}
            onChange={(e) => setIssueName(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            required
            placeholder="Enter the issue name"
          />
        </div>
        <div className="transition-all duration-300 hover:transform hover:scale-[1.01]">
          <label className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg p-3 h-32 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
            required
            placeholder="Describe your issue in detail"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform transition-all duration-300 hover:scale-[1.02] focus:ring-2 focus:ring-purple-300 shadow-md"
        >
          Submit Report
        </button>
      </form>
    </div>
  )
}

export default ReportIssue;
