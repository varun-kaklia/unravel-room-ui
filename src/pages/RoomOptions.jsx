import { useState, useEffect } from 'react';
import { fetchRooms } from '../api/roomServices';

export default function RoomOptions() {
  const [rooms, setRooms]       = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetchRooms(1, 40).then(r => setRooms(r.rooms));
  }, []);

  const toggle = id =>
    setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pick multiple rooms</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map(r => (
          <button
            key={r.id}
            onClick={() => toggle(r.id)}
            className={`border rounded p-4 text-left transition
              ${selected.includes(r.id)
                ? 'bg-primary text-white'
                : 'bg-white dark:bg-gray-800'}`}
          >
            <p className="font-semibold">{r.name}</p>
            <p className="text-sm">₹{r.price}</p>
          </button>
        ))}
      </div>

      {selected.length > 0 && (
        <p className="mt-4 font-semibold">
          Selected IDs: {selected.join(', ')}
        </p>
      )}
    </div>
  );
}
