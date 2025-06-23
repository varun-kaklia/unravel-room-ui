import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {  getRoomById } from '../api/roomServices';
import Media from '../components/Media';
import { StarIcon } from '@heroicons/react/20/solid';

export default function RoomDetails() {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  console.log("Rooms details",room)


//   useEffect(()=>{
//     fetchRooms(1,300).then(r=>setRoom(r.rooms.find(x=>x.id===id)));
//   },[id]);

useEffect(() => {
  getRoomById(id).then(setRoom);
}, [id]);

  if(!room)return <p className="p-4">Loading…</p>;

  return (
    <div className="p-4 lg:p-8 max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
      <Media room={room} />

      <div>
        <h1 className="text-3xl font-bold">{room.name}</h1>
        <div className="flex items-center gap-1 text-amber-400 mb-2">
          {Array.from({length:room.stars}).map((_,i)=><StarIcon key={i} className="h-5 w-5"/>)}
          <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">{room.stars}-star hotel</span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-4">{room.description}</p>

        <div className="mb-4">
          <h2 className="font-semibold mb-1">Highlights</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>{room.beds} comfortable beds</li>
            <li>{room.freeCancel?'Free cancellation':'No refund'}</li>
            <li>High-speed Wi-Fi</li>
            <li>Breakfast included</li>
          </ul>
        </div>

        <p className="text-xl font-bold text-accent mb-6">₹{room.price}/night</p>

        <Link to={`/room/${room.hotelId}/select`} className="bg-primary text-white px-6 py-2 rounded">
          Choose room variant
        </Link>

        <section className="mt-8 space-y-4">
          <div>
            <h3 className="font-semibold">Guest reviews</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">★ 4.{room.stars+3} / 5 · 236 reviews</p>
          </div>

          <div>
            <h3 className="font-semibold">Amenities</h3>
            <p className="text-sm">Pool · Gym · Spa · Airport shuttle</p>
          </div>

          <div>
            <h3 className="font-semibold">Policies</h3>
            <p className="text-sm">Check-in 12 PM · Check-out 11 AM · Pets not allowed</p>
          </div>
        </section>

    <div className="flex text-amber-400 gap-[2px] mb-2">
      {Array.from({length:room.stars}).map((_,i)=><StarIcon key={i} className="h-5"/>)}
    </div>

    <div className="mt-6">
      <details className="mb-3 open:bg-neutral/30 rounded">
        <summary className="font-semibold cursor-pointer p-2">Guest Reviews</summary>
        <p className="p-2 text-sm text-gray-600 dark:text-gray-400">
          ★ 4.{room.stars+2} – “Wonderful stay, will visit again!” – Rahul · Jan 2025
        </p>
      </details>

      <details className="mb-3 open:bg-neutral/30 rounded">
        <summary className="font-semibold cursor-pointer p-2">Amenities</summary>
        <ul className="list-disc list-inside p-2 text-sm space-y-1">
          <li>Pool &amp; Spa</li><li>High-speed Wi-Fi</li><li>Airport shuttle</li>
        </ul>
      </details>

      <details className="open:bg-neutral/30 rounded">
        <summary className="font-semibold cursor-pointer p-2">Policies</summary>
        <p className="p-2 text-sm">Check-in 12 PM · Check-out 11 AM · No pets</p>
      </details>
      </div>
      </div>
    </div>
  );
}
