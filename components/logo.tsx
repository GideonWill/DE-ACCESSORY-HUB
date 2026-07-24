export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/images/NEW LOGO.png"
        alt="THE INTERIOR HUB Logo"
        className="h-14 md:h-18 w-auto max-w-[240px] rounded-lg object-contain bg-transparent p-1 transition-transform hover:scale-105"
      />
    </div>
  )
}
