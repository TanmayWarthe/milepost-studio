export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center w-full my-10 md:my-14 opacity-50 ${className}`}>
      <div className="h-px bg-hairline flex-grow" />
      <div className="w-2 h-2 rotate-45 border border-gold mx-4" />
      <div className="h-px bg-hairline flex-grow" />
    </div>
  );
}
