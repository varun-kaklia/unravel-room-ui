# 🏨 Unravel Rooms – Frontend Challenge

Responsive, scalable room booking interface built using **React (Vite)**, **Tailwind CSS v4**, and **Redux Toolkit**.  
All core requirements from the Unravel WebApp Challenge are fulfilled, including:

- ✅ Lazy-loading of media with viewport detection  
- ✅ Video-first media logic with fallback to responsive images  
- ✅ Infinite scrolling of rooms with skeleton loaders  
- ✅ Variant selection with live tax, quantity, and cart sync  
- ✅ Global theme toggle (dark/light)  
- ✅ Cart and Favorites with real-time badges  
- ✅ Clean component structure with reusable logic and scalable JSON backend  

---

## ⚙️ Tech Stack

- **React 18 (Vite)**
- **Tailwind CSS v4** (no PostCSS)
- **Redux Toolkit**
- **Custom hooks** (`useThrottle`, `useInViewport`, etc.)
- **JSON-based mock data** for fast and predictable testing
- **Heroicons** for clean iconography

---

## 📁 Folder Structure
```plaintext
src/
├── constants/ # Static JSON data
│ └── hotels.json
├── assets/ # Image & SVG assets
│ ├── images/
│ └── svg/
├── api/ # Logic to fetch rooms from constants
│ └── roomsService.js
├── hooks/ # Custom hooks (no external deps)
│ ├── useInViewport.js
│ ├── useThrottle.js
│ └── infiniteScroll.js
├── store/ # Redux Toolkit slices
│ ├── cartSlice.js
│ ├── favoritesSlice.js
│ ├── themeslice.js
│ └── index.js
├── components/ # UI components
│ ├── Navbar.jsx
│ ├── Media.jsx
│ ├── RoomCard.jsx
│ ├── VariantCart.jsx
│ ├── SkeletonCard.jsx
│ └── Spinner.jsx
├── utils/ # Future APIs, helpers
│ └── fetchRooms.js
├── pages/ # All routed views
│ ├── RoomList.jsx
│ ├── RoomDetails.jsx
│ ├── RoomOptions.jsx
│ ├── Variant.jsx
│ ├── Checkout.jsx
│ └── Success.jsx
├── App.jsx # Route config
├── index.css # Tailwind + Theme colors
└── main.jsx # Root renderer with Redux + Theme wrapper
```
<br/>

## 🚀 Quick Start

```bash
# 1 – Install deps
npm install

# 2 – Start dev server
npm run dev
# → http://localhost:5173
<br/>