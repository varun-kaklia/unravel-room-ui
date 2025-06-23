import { useState, useEffect, useCallback } from 'react';
import { fetchRooms } from '../api/roomServices';

export default function useInfiniteRooms() {
  const [rooms, setRooms]   = useState([]);
  const [page,  setPage]    = useState(1);
  const [busy,  setBusy]    = useState(false);
  const [more,  setMore]    = useState(true);

  const load = useCallback(async () => {
    if (busy || !more) return;
    setBusy(true);
    try {
      const { rooms: r, hasMore } = await fetchRooms(page);
      setRooms(prev => [...prev, ...r]);
      setPage(p => p + 1);
      setMore(hasMore);
    } finally { setBusy(false); }
  }, [page, busy, more]);

  useEffect(() => { load(); }, []);

  return { rooms, load, busy, more };
}
