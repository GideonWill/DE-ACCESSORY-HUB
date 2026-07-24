export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/images/NEW LOGO.jpeg"
        alt="THE INTERIOR HUB Logo"
        className="h-14 md:h-18 w-auto max-w-[240px] rounded-lg object-contain bg-white p-1 shadow-sm transition-transform hover:scale-105"
      />
    </div>
  )
}
