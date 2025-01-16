import { useState } from "react";
import BASE_URL from '../config';
import { FaIdCard, FaUser, FaEnvelope, FaPhone, FaSms } from 'react-icons/fa';
import { MdLocalPolice, MdPayment, MdLabel } from 'react-icons/md';
import { BiCategoryAlt } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OfficerIssueFine = () => {
  const [fine, setFine] = useState({
    officerId: "",
    licenseId: "",
    fineName: "",
    fineType: "",
    fineAmount: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [smsMessage, setSmsMessage] = useState("");

  const generateSMSMessage = () => {
    const message = `Traffic Fine Notice:
Dear ${fine.firstName} ${fine.lastName},
You have been issued a fine:
Type: ${fine.fineType}
Amount: $${fine.fineAmount}
Fine ID: ${fine.fineName}
Please pay within 30 days to avoid additional penalties.
Visit our portal to pay online.
-Traffic Police Department`;
    
    setSmsMessage(message);
    return message;
  };

  const handleChange = (e) => {
    setFine({ ...fine, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const emptyFields = Object.entries(fine).filter(([_, value]) => !value.trim());
    if (emptyFields.length > 0) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const message = generateSMSMessage();
      const response = await fetch(`${BASE_URL}/api/fines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...fine, smsMessage: message }),
      });

      if (!response.ok) {
        throw new Error("Error adding fine");
      }

      const data = await response.json();
      toast.success("Fine issued successfully! SMS and email notifications sent.");
      setFine({
        officerId: "",
        licenseId: "",
        fineName: "",
        fineType: "",
        fineAmount: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Error adding fine:", error);
      toast.error("Failed to issue fine. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-indigo-600 flex items-center justify-center gap-3">
            <MdLocalPolice className="text-4xl" />
            Issue Traffic Fine
          </h1>
          <p className="text-gray-600 mt-2">Complete all fields to issue a fine and notify the citizen</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - existing inputs with enhanced styling */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Officer ID</label>
              <input
                type="text"
                name="officerId"
                value={fine.officerId}
                onChange={handleChange}
                placeholder="Enter officer ID"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">License ID</label>
              <input
                type="text"
                name="licenseId"
                value={fine.licenseId}
                onChange={handleChange}
                placeholder="Enter license ID"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fine Name</label>
              <input
                type="text"
                name="fineName"
                value={fine.fineName}
                onChange={handleChange}
                placeholder="Enter fine name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fine Type</label>
              <input
                type="text"
                name="fineType"
                value={fine.fineType}
                onChange={handleChange}
                placeholder="Enter fine type"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Fine Amount</label>
              <input
                type="text"
                name="fineAmount"
                value={fine.fineAmount}
                onChange={handleChange}
                placeholder="Enter fine amount"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={fine.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={fine.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={fine.email}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={fine.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-colors"
              />
            </div>
            
            {/* Preview SMS Message */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaSms /> SMS Preview
              </h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {smsMessage || "SMS message will be generated when you submit the form"}
              </p>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white p-4 rounded-md hover:from-indigo-700 hover:to-blue-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-1"
            >
              <MdLocalPolice className="text-xl" />
              Issue Fine & Send Notifications
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default OfficerIssueFine;
