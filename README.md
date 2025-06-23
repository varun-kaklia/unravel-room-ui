# 🏨 Unravel Rooms – React Challenge

A responsive, performant room-listing webapp built with **Vite + React**, **Tailwind CSS v4**, and **Redux Toolkit**.  
Every requirement in the Unravel WebApp Challenge is implemented:

- ✅ Infinite scrolling with viewport-based media loading  
- ✅ Videos autoplay only in view; images lazy-load with `srcSet`  
- ✅ Price-range filter, multi-variant booking with live tax calc  
- ✅ Light/ Dark theme switch (Redux)  
- ✅ Favourites & Cart badges in the navbar  
- ✅ Static `hotels.json` datasource (easily scaled to 100 + items)

<br/>

## 📂 Project Structure

src/
├ constants/ # ← static JSON with hotels & room arrays
│ └ hotels.json
├ assets/
│ └ images 
│ └ svg
├ api/
│ └ roomsService.js # helpers that read the JSON (paged fetch, variants, etc.)
├ hooks/ # custom utilities (no external deps)
│ ├ useInViewport.js
│ ├ infiniteScroll.js
│ └ useThrottle.js
├ store/ # Redux Toolkit slices
│ ├ cartSlice.js
│ ├ favoritesSlice.js
│ ├ themeslice.js
│ └ index.js
├ components/ # reusable UI
│ ├ Navbar.jsx (cart + favourites badges, theme toggle)
│ ├ Media.jsx (video-first / image gallery, lazy)
│ ├ RoomCard.jsx
│ ├ VariantCart.jsx
│ ├ Spinner.jsx
│ └ SkeletonCard.jsx
├ utils/ # future api calls
│ ├ fetchRooms.js
├ pages/ # routed views (lazy-loaded)
│ ├ RoomList.jsx
│ ├ RoomDetails.jsx
│ ├ RoomOptions.jsx
│ ├ Variant.jsx
│ ├ Checkout.jsx
│ └ Success.jsx
├ App.jsx # routes + <Navbar/>
├ index.css # css + color variables
└ main.jsx # Vite entry (theme wrapper + Redux Provider)


<br/>

## 🚀 Quick Start

```bash
# 1 – Install deps
npm install

# 2 – Start dev server
npm run dev
# → http://localhost:5173
<br/>