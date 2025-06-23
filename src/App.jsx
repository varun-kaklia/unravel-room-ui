import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const RoomList      = lazy(() => import('./pages/RoomList'));
const RoomDetails   = lazy(() => import('./pages/RoomDetail'));
const VariantSelect = lazy(() => import('./pages/Variant'));
const Checkout      = lazy(() => import('./pages/Checkout'));
const Success       = lazy(() => import('./pages/Success'));

export default function App() {
  return (
    <div className="bg-background text-text min-h-screen flex flex-col">
      <Navbar />

      <Suspense fallback={<p className="p-4">Loading…</p>}>
        <Routes>
          <Route path="/"               element={<RoomList />} />
          <Route path="/room/:id"       element={<RoomDetails />} />
          <Route path="/room/:id/select"element={<VariantSelect />} />
          <Route path="/checkout"       element={<Checkout />} />
          <Route path="/success"        element={<Success />} />
        </Routes>
      </Suspense>
    </div>
  );
}
