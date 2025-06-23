import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import useInfiniteRooms   from '../hooks/infiniteScroll';
import useInViewport      from '../hooks/useInViewport';
import RoomCard           from '../components/RoomCard';
import SkeletonCard       from '../components/SkeletonCard';

export default function RoomList() {
  const { rooms, load, busy } = useInfiniteRooms();
  const [sentinelRef, inView] = useInViewport({ threshold: .1 });
  const nav = useNavigate();

  if (inView && !busy) load();

  const rendered = useMemo(
    () => rooms.map(r => (
      <div key={r.id} onClick={() => nav(`/room/${r.id}`)} className="cursor-pointer">
        <RoomCard room={r} />
      </div>
    )),
    [rooms]
  );

  return (
    <section className="p-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {rendered}
      {busy && [...Array(6)].map((_, i) => <SkeletonCard key={`sk-${i}`} />)}
      <div ref={sentinelRef} className="h-1 w-full col-span-full" />
    </section>
  );
}
