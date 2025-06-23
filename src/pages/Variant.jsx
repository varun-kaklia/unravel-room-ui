import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { addItem } from '../store/cartSlice';
import { useEffect, useState } from 'react';
import VariantCard from '../components/VariantCart';
import { getRoomVariants } from '../api/roomServices';
import { addItem } from '../store/cartManagementSlice';
// import { getRoomVariants } from '../api/roomsService';

export default function VariantSelect() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(s => s.cart.items.length);

  const [variants, setVariants] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    getRoomVariants(id).then(setVariants);
  }, [id]);

const handleQtyChange = (roomId, qty) => {
  setQuantities(q => ({ ...q, [roomId]: qty }));
  const variant = variants.find(v => v.id === roomId);
  if (!variant) return;
  const tax = Math.round(variant.price * 0.12);
  dispatch(addItem({ ...variant, qty, price: variant.price + tax }));
};

const book = () => navigate('/checkout');

  const totalQty = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Choose your rooms</h2>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {variants.map(v => (
          <VariantCard
            key={v.id}
            variant={v}
            qty={quantities[v.id] || 0}
            onQtyChange={handleQtyChange}
          />
        ))}
      </div>

      <button
         disabled={cartItems===0}
        onClick={book}
        className="mt-6 bg-primary text-white px-6 py-2 rounded disabled:opacity-50"
      >
        Book Now ({totalQty} Room{totalQty > 1 ? 's' : ''})
      </button>
    </div>
  );
}
