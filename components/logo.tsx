export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/images/NEW LOGO.jpeg"
        alt="DE-ACCESSORIES Logo"
        className="h-10 md:h-12 w-auto max-w-[180px] rounded-md object-contain bg-white/95 p-1 shadow-sm transition-opacity hover:opacity-95"
      />
    </div>
  )
}
