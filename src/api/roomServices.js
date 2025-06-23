import hotels from '../constants/hotels.json';

const allRooms = hotels.flatMap(h =>
  h.rooms.map(r => ({
    ...r,
    hotelId : h.hotelId,
    hotel   : h.name,
    stars   : h.stars,
    host    : h.host,
    location: h.location,
  }))
);

export function fetchRooms(page = 1, pageSize = 6) {
  const start = (page - 1) * pageSize;
  const end   = page * pageSize;
  return new Promise(res =>
    setTimeout(() =>
      res({ rooms: allRooms.slice(start, end), hasMore: end < allRooms.length }),
    400)
  );
}

export function getRoomById(id) {
  return new Promise(res =>
    setTimeout(() => res(allRooms.find(r => r.id === id)), 300)
  );
}

export function getHotelById(hotelId) {
  return new Promise(res =>
    setTimeout(() => res(hotels.find(h => h.hotelId === hotelId)), 300)
  );
}

export function getRoomVariants(hotelId) {
  const hotel = hotels.find(h => h.hotelId === hotelId);
  console.log("hotel",hotel);
  return new Promise(res =>
    setTimeout(() => res(hotel ? hotel.rooms : []), 300)
  );
}
