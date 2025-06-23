import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../store/cartManagementSlice';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const items = useSelector(s => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((s, i) => s + i.price, 0);

  const confirm = () => {
    dispatch(clearCart());
    navigate('/success');
  };

  if (!items.length) return <p className="p-4">Cart is empty.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Your booking</h2>
      <ul className="mb-4">
        {items.map(i => (
          <li key={i.id} className="flex justify-between border-b py-2">
            <span>{i.name} ({i.type})</span>
            <span>₹{i.price}</span>
          </li>
        ))}
      </ul>
      <p className="font-semibold mb-4">Total: ₹{total}</p>
      <button onClick={confirm} className="bg-accent text-white px-6 py-2 rounded">
        Confirm Booking
      </button>
    </div>
  );
}
