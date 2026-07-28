export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/NEW LOGO.jpeg"
        alt="THE CURTAIN ACCESSORIES WHOLESALE HUB Logo"
        className="h-12 sm:h-14 md:h-16 w-auto rounded-lg object-contain bg-transparent p-0.5 transition-transform hover:scale-105 shrink-0"
      />
      <div className="flex flex-col justify-center border-l-2 border-[#5d1019]/25 pl-2.5 sm:pl-3">
        <span className="font-serif text-xs sm:text-sm md:text-base font-extrabold tracking-wider text-[#5d1019] uppercase leading-tight">
          THE CURTAIN ACCESSORIES
        </span>
        <span className="font-serif text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-[#a12c3b] uppercase leading-tight mt-0.5">
          WHOLESALE HUB
        </span>
      </div>
    </div>
  )
}
