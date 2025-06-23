import { ClipLoader } from 'react-spinners';

export default function Spinner() {
  return (
    <div className="flex justify-center py-6">
      <ClipLoader size={32} color="var(--color-accent)" />
    </div>
  );
}