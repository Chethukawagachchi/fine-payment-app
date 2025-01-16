import { useState, useEffect } from "react";
import BASE_URL from '../../config';

const PayFine = () => {
  const [fines, setFines] = useState([]);
  const [selectedFine, setSelectedFine] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showCardForm, setShowCardForm] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const licenseId = localStorage.getItem("licenseId");
  
  useEffect(() => {
    const fetchFines = async (licenseId) => {
      if (!licenseId) {
        console.error("License ID is missing");
        return;
      }

      try {
        const response = await fetch(`${BASE_URL}/api/officerfines?licenseId=${licenseId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch fines");
        }
        const data = await response.json();
        setFines(data);
      } catch (error) {
        console.error("Error fetching fines:", error);
      }
    };

    if (licenseId) {
      fetchFines(licenseId);
    }
  }, [licenseId]);

  const handlePayClick = (fine) => {
    setSelectedFine(fine);
    setShowPaymentModal(true);
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
    setShowCardForm(method === 'credit' || method === 'debit');
  };

  const handleCardDetailsSubmit = async (e) => {
    e.preventDefault();
    // Add validation here
    if (!cardDetails.cardNumber || !cardDetails.cardName || !cardDetails.expiryDate || !cardDetails.cvv) {
      alert("Please fill all card details");
      return;
    }

    // Process payment
    try {
      // Your payment processing logic here
      const response = await fetch(`${BASE_URL}/api/officerfines/${selectedFine.fine_id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to process payment");

      setFines((prevFines) => prevFines.filter((fine) => fine.fine_id !== selectedFine.fine_id));
      setShowPaymentModal(false);
      setSelectedFine(null);
      setPaymentMethod('');
      setCardDetails({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
      });
      alert("Payment successful!");
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Failed to process payment.");
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Your Fine Details
          </span>
        </h1>

        {fines.length > 0 ? (
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.01] transition-all duration-300">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  <th className="py-4 px-6 text-left">Fine ID</th>
                  <th className="py-4 px-6 text-left">License ID</th>
                  <th className="py-4 px-6 text-left">Fine Name</th>
                  <th className="py-4 px-6 text-left">Fine Type</th>
                  <th className="py-4 px-6 text-left">Amount</th>
                  <th className="py-4 px-6 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {fines.map((fine) => (
                  <tr key={fine.fine_id} 
                      className="border-b border-gray-100 hover:bg-indigo-50 transition-colors duration-200">
                    <td className="py-4 px-6">{fine.fine_id}</td>
                    <td className="py-4 px-6">{fine.license_id}</td>
                    <td className="py-4 px-6">{fine.fine_name}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-700">
                        {fine.fine_type}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-purple-600">
                        Rs.{fine.fine_amount}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button
                        onClick={() => handlePayClick(fine)}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full
                                 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200
                                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 
                                 shadow-lg hover:shadow-xl"
                      >
                        Pay Now
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center p-8 bg-white rounded-xl shadow-lg">
            <div className="text-5xl mb-4">🎉</div>
            <p className="text-gray-600 text-lg">No fines available to pay.</p>
            <p className="text-indigo-600 font-medium mt-2">Keep up the good work!</p>
          </div>
        )}

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>
              <p className="mb-4">Fine Amount: Rs.{selectedFine?.fine_amount}</p>
              
              <div className="space-y-4">
                <div className="flex space-x-4 mb-6">
                  <label className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={paymentMethod === 'credit'}
                      onChange={(e) => handlePaymentMethodSelect(e.target.value)}
                      className="mr-2"
                    />
                    <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png" alt="Credit Card" className="h-8" />
                    <span>Credit Card</span>
                  </label>
                  <label className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="debit"
                      checked={paymentMethod === 'debit'}
                      onChange={(e) => handlePaymentMethodSelect(e.target.value)}
                      className="mr-2"
                    />
                    <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png" alt="Debit Card" className="h-8" />
                    <span>Debit Card</span>
                  </label>
                </div>

                {showCardForm && (
                  <div className="mt-8">
                    {/* Animated Card Preview */}
                    <div className="relative w-full h-56 rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 transition-transform duration-1000 animate-gradient"></div>
                      <div className="relative h-full w-full bg-opacity-80 backdrop-blur-sm p-6 text-white">
                        <div className="flex justify-between items-start">
                          <div className="w-12 h-12">
                            <div className="w-full h-full rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                              </svg>
                            </div>
                          </div>
                          <img 
                            src={paymentMethod === 'credit' ? 
                              'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png' : 
                              'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png'} 
                            alt="card" 
                            className="h-12 object-contain"
                          />
                        </div>
                        
                        <div className="mt-6">
                          <p className="font-mono text-2xl tracking-[0.25em] text-white/90">
                            {cardDetails.cardNumber || '•••• •••• •••• ••••'}
                          </p>
                        </div>
                        
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="text-xs text-white/60">Card Holder</p>
                              <p className="font-medium tracking-wider text-white/90">
                                {cardDetails.cardName || 'YOUR NAME'}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-xs text-white/60">Expires</p>
                              <p className="font-medium tracking-wider text-white/90">
                                {cardDetails.expiryDate || 'MM/YY'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Compact Payment Form */}
                    <form onSubmit={handleCardDetailsSubmit} className="mt-8 space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="relative group">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Card Number
                          </label>
                          <div className="relative flex items-center">
                            <input
                              type="text"
                              className="w-full px-12 py-4 bg-white border-2 border-gray-200 rounded-lg text-lg tracking-[0.2em] font-mono
                                         focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all placeholder:text-gray-400"
                              placeholder="0000 0000 0000 0000"
                              maxLength="19"
                              value={formatCardNumber(cardDetails.cardNumber)}
                              onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                            />
                            <svg className="absolute left-3 h-6 w-6 text-gray-400 group-focus-within:text-purple-500" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <img 
                              src={paymentMethod === 'credit' ? 
                                'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png' : 
                                'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png'} 
                              alt="card type"
                              className="absolute right-3 h-8 w-auto"
                            />
                          </div>
                          <div className="flex justify-between mt-2 px-2">
                            <div className="flex space-x-1">
                              {[0, 1, 2, 3].map((index) => (
                                <span key={index} className="text-xs text-gray-400 font-mono">
                                  {index * 4 + 1}-{index * 4 + 4}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <input
                          type="text"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                          placeholder="Card Holder Name"
                          value={cardDetails.cardName}
                          onChange={(e) => setCardDetails({...cardDetails, cardName: e.target.value.toUpperCase()})}
                        />

                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                            placeholder="MM/YY"
                            maxLength="5"
                            value={cardDetails.expiryDate}
                            onChange={(e) => setCardDetails({...cardDetails, expiryDate: formatExpiryDate(e.target.value)})}
                          />
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                            placeholder="CVV"
                            maxLength="3"
                            value={cardDetails.cvv}
                            onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value.replace(/\D/g, '')})}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Pay Now Rs.{selectedFine?.fine_amount}</span>
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayFine;
