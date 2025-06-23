import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const cartCount = useSelector(s => s.cart.items.length);
  const mode = useSelector(s => s.theme.mode);
  const favCount = useSelector(s => s.fav.ids.length);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-primary text-white">
      <Link to="/" className="text-xl font-bold">Unravel Rooms</Link>

      <div className="flex items-center gap-4">
        <button onClick={() => dispatch(toggleTheme())}>
          {mode === 'light' ? '🌙' : '☀️'}
        </button>

        <Link to="/checkout" className="relative">
          🛒
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-accent text-white rounded-full px-1">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/" className="relative">
❤️
{favCount>0 && <span className="badge">{favCount}</span>}
</Link>
      </div>
    </nav>
  );
}
