import { memo }       from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFav }  from '../store/favoritesSlice';
import { StarIcon, HeartIcon } from '@heroicons/react/20/solid';
import Media from './Media';

function RoomCard({ room }) {
  const dispatch = useDispatch();
  const fav = useSelector(s=>s.fav.ids.includes(room.id));

  return (
    <article className="rounded-2xl border shadow-lg p-4 flex flex-col bg-white dark:bg-gray-800">
      <div className="relative">
        <Media room={room} />
        <button
          onClick={e => { e.stopPropagation(); dispatch(toggleFav(room.id)); }}
          className="absolute top-2 right-2 bg-white/80 backdrop-blur rounded-full p-1"
        >
          <HeartIcon className={`h-5 w-5 ${fav?'text-red-500':'text-gray-400'}`} />
        </button>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <h3 className="font-semibold text-lg flex-1">{room.name}</h3>
        <div className="flex text-amber-400">
          {Array.from({length: room.stars}).map((_,i)=><StarIcon key={i} className="h-4 w-4"/>)}
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">{room.beds} beds · {room.freeCancel?'Free cancel':'No refund'}</p>
      <p className="text-xs mt-1 text-gray-500">Hosted by {room.host}</p>

      <span className="mt-2 text-accent font-bold text-lg">₹{room.price} <span className="text-xs font-normal">/night</span></span>
    </article>
  );
}
export default memo(RoomCard);
