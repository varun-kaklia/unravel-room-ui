import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <h2 className="text-2xl font-bold mb-2">🎉 Booking confirmed!</h2>
      <p className="mb-4">The owner will contact you shortly.</p>
      <Link to="/" className="bg-primary text-white px-4 py-2 rounded">
        Back to home
      </Link>
    </div>
  );
}
