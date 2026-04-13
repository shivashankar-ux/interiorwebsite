export default function Loading() {
  return (
    <div className="min-h-screen bg-[#1a1410] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <span className="font-display text-4xl text-[#c9a96e] animate-pulse">
          स
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#c9a96e] to-transparent animate-pulse" />
      </div>
    </div>
  );
}
