export default function VariantCard({ variant, qty = 0, onQtyChange }) {
  const tax = Math.round(variant.price * 0.12);

  return (
    <div className="border p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
      <h3 className="text-lg font-semibold mb-1">{variant.type}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        ₹{variant.price + tax} <span className="text-xs">(incl. ₹{tax} tax)</span>
      </p>
      <p className="text-xs text-gray-500 mb-4">{variant.beds} bed(s) · {variant.freeCancel ? 'Free cancellation' : 'No refund'}</p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onQtyChange(variant.id, Math.max(0, qty - 1))}
          className="px-2 py-1 border rounded"
        >−</button>
        <span>{qty}</span>
        <button
          onClick={() => onQtyChange(variant.id, qty + 1)}
          className="px-2 py-1 border rounded"
        >+</button>
      </div>
    </div>
  );
}
