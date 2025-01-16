import { useEffect, useState } from "react";

const PaidFine = () => {
  const [paidFines, setPaidFines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaidFines = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/paid-fines', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add authorization header if needed
            // 'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch paid fines');
        }

        const data = await response.json();
        setPaidFines(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPaidFines();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Paid Fines</h2>
      <div className="grid gap-4">
        {paidFines.map((fine) => (
          <div key={fine.id} className="border p-4 rounded-lg shadow">
            <h3 className="font-semibold">Fine ID: {fine.id}</h3>
            <p>Amount: ${fine.amount}</p>
            <p>Paid Date: {new Date(fine.paidDate).toLocaleDateString()}</p>
            <p>Status: {fine.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaidFine;